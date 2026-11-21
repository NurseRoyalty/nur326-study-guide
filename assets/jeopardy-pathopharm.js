/* ============================================================
   assets/jeopardy-pathopharm.js — Pathopharm Review Jeopardy engine (3-player).

   Cloned from assets/jeopardy-exam3.js (itself cloned from assets/jeopardy3.js)
   rather than edited in place, so every other Jeopardy game on this site and
   its data stay completely untouched by this file.

   Reads window.JEOPARDY_PATHOPHARM (data/pathopharm-jeopardy.js) and renders a
   board into #jp3-root. This file has ZERO Pathopharm content of its own —
   every category name, clue, answer, and rationale comes from the data file,
   so the question bank can be expanded or edited later without touching any
   of this code (same "content and engine stay separate" pattern as the other
   Jeopardy games and quiz-bank.js + quiz.js/exam.js).

   How a game works:
   - EVERY category in the bank is on the board (one per Pathopharm Review
     section = 11), shuffled into a new left-to-right order each game.
   - 5 values per category (100/200/300/400/500) = 55 clues per game. The bank
     holds several clues at each value, and each game draws ONE per value, so
     difficulty rises with point value in every category no matter which
     clues are drawn (the bank is written so every 100 is easier than every
     200, and so on).
   - Click a value -> question only -> "Reveal Answer" -> answer + rationale
     -> Player 1/2/3 "+" / "-" buttons (each worth the clue's point value) so
     any combination of players can be credited or docked.
   - Repeat avoidance, two layers, both persisted in localStorage across games
     and reloads: (1) a rotating cycle per category+value pool, so every clue
     in a pool is used once before any repeats; (2) the clue drawn in the
     previous round for a pool is never drawn again immediately, even when the
     cycle resets (as long as the pool holds 2 or more clues).
   - "New Game" reshuffles categories AND re-picks clues. "Reset Game" clears
     scores/progress on the CURRENT board without reshuffling.
   - A used square is disabled and shows a check mark; completed clues and
     each player's score are tracked in the bar at the top.
   ============================================================ */
(function () {
  "use strict";

  var STORE_PREFIX = window.STORE_PREFIX || "nur326";
  var LS_KEY = STORE_PREFIX + "-pathopharm-jeopardy-v1";
  var CYCLE_KEY = STORE_PREFIX + "-pathopharm-jeopardy-cycle";
  var LAST_KEY = STORE_PREFIX + "-pathopharm-jeopardy-last";
  var HIST_KEY = STORE_PREFIX + "-pathopharm-jeopardy-history";
  var VALUES = [100, 200, 300, 400, 500];
  var PLAYER_NAMES = ["Player 1", "Player 2", "Player 3"];

  var root = document.getElementById("jp3-root");

  // Exposed for the project's Node-based test harness only — browsers
  // never define `module`, so this is a no-op in production.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { shuffle: shuffle, pickClue: pickClue, buildBoard: buildBoard };
  }
  if (!root) return;

  var state = null; // { board:[{catId,catName,slots:[{value,clue,state}]}], scores:[0,0,0], answered, total, recorded }
  var activeSlot = null; // {catIndex, valIndex} of the clue currently open in the modal
  var revealed = false;

  // ---------------------------------------------------------------
  // data helpers
  // ---------------------------------------------------------------
  function bankCategories() {
    return (window.JEOPARDY_PATHOPHARM && window.JEOPARDY_PATHOPHARM.categories) || [];
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // cycleMap: { "<catId>|<value>": [question texts already used this cycle] }
  // lastMap:  { "<catId>|<value>": question text drawn in the previous round }
  // Picks a clue not yet used in the pool's current cycle and not the one
  // drawn last round. Once every clue in the pool has been used, the cycle
  // resets (still skipping last round's clue when the pool has 2+ clues).
  // Clues have no "id", so the question text is the dedupe key.
  function pickClue(category, value, cycleMap, lastMap) {
    var pool = (category.clues && category.clues[String(value)]) || [];
    if (!pool.length) return null;
    var key = category.id + "|" + value;
    var last = lastMap ? lastMap[key] : null;
    var skipLast = pool.length > 1 && last;
    var used = {};
    (cycleMap[key] || []).forEach(function (q) { used[q] = true; });
    var fresh = pool.filter(function (c) { return !used[c.q] && !(skipLast && c.q === last); });
    if (!fresh.length) {
      used = {};
      fresh = pool.filter(function (c) { return !(skipLast && c.q === last); });
    }
    if (!fresh.length) fresh = pool.slice();
    var choice = fresh[Math.floor(Math.random() * fresh.length)];
    used[choice.q] = true;
    cycleMap[key] = Object.keys(used);
    if (lastMap) lastMap[key] = choice.q;
    return choice;
  }

  // Every category in the bank goes on the board; only the order is random.
  function buildBoard(cycleMap, lastMap) {
    var cats = shuffle(bankCategories());
    return cats.map(function (cat) {
      var slots = VALUES.map(function (v) {
        var clue = pickClue(cat, v, cycleMap, lastMap);
        return { value: v, clue: clue, state: "unanswered" };
      });
      return { catId: cat.id, catName: cat.name, slots: slots };
    });
  }

  // ---------------------------------------------------------------
  // persistence
  // ---------------------------------------------------------------
  function loadJSON(key, fallback) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function loadState() { return loadJSON(LS_KEY, null); }
  function saveState() { saveJSON(LS_KEY, state); }

  // ---------------------------------------------------------------
  // game actions
  // ---------------------------------------------------------------
  function newGame() {
    var cycleMap = loadJSON(CYCLE_KEY, {});
    var lastMap = loadJSON(LAST_KEY, {});
    var board = buildBoard(cycleMap, lastMap);
    saveJSON(CYCLE_KEY, cycleMap);
    saveJSON(LAST_KEY, lastMap);
    state = {
      board: board,
      scores: [0, 0, 0],
      answered: 0,
      total: board.length * VALUES.length,
      recorded: false
    };
    saveState();
    closeModal();
    render();
  }

  function resetGame() {
    if (!state) { newGame(); return; }
    state.board.forEach(function (cat) {
      cat.slots.forEach(function (s) { s.state = "unanswered"; });
    });
    state.scores = [0, 0, 0];
    state.answered = 0;
    state.recorded = false;
    saveState();
    closeModal();
    render();
  }

  function markAnswered(catIndex, valIndex) {
    var slot = state.board[catIndex].slots[valIndex];
    if (slot.state === "unanswered") {
      slot.state = "answered";
      state.answered += 1;
      if (state.answered === state.total && !state.recorded) {
        state.recorded = true;
        recordHistory();
      }
    }
    saveState();
  }

  function adjustScore(playerIndex, delta) {
    state.scores[playerIndex] += delta;
    saveState();
    render();
    if (overlay.classList.contains("show")) renderModal();
  }

  // ---------------------------------------------------------------
  // stats: cross-game score history
  // ---------------------------------------------------------------
  function loadHistory() { return loadJSON(HIST_KEY, []); }
  function recordHistory() {
    var hist = loadHistory();
    hist.push({ d: Date.now(), scores: state.scores.slice(), total: state.total });
    if (hist.length > 12) hist = hist.slice(-12);
    saveJSON(HIST_KEY, hist);
  }
  function fmtDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + " " +
      d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  // ---------------------------------------------------------------
  // rendering
  // ---------------------------------------------------------------
  function render() {
    if (!state) { root.innerHTML = ""; return; }

    var done = state.answered === state.total;
    var html = "";

    html += '<div class="jp-bar">';
    state.scores.forEach(function (sc, i) {
      html += '<div class="jp-stat"><span class="jp-stat-num">' + sc + '</span><span class="jp-stat-lbl">' + PLAYER_NAMES[i] + '</span></div>';
    });
    html += '<div class="jp-stat"><span class="jp-stat-num">' + state.answered + '/' + state.total + '</span><span class="jp-stat-lbl">Completed</span></div>';
    html += '<div class="jp-bar-actions">';
    html += '<button type="button" class="btn btn-primary" data-jp3-new>New Game</button>';
    html += '<button type="button" class="btn btn-ghost" data-jp3-reset>Reset Game</button>';
    html += '</div></div>';

    if (done) {
      var top = Math.max.apply(null, state.scores);
      var winners = [];
      state.scores.forEach(function (sc, i) { if (sc === top) winners.push(PLAYER_NAMES[i]); });
      var winMsg = winners.length === 3 ? "It's a three-way tie!" :
        winners.length === 2 ? (winners.join(" and ") + " tie for the win!") :
        (winners[0] + " wins!");
      html += '<div class="result-card">';
      html += '<div class="result-score">' + state.scores.join(" &ndash; ") + '</div>';
      html += '<div class="result-detail">';
      html += '<p class="rmsg">Game over — ' + winMsg + '</p>';
      html += '<button type="button" class="btn btn-ghost" data-jp3-new-2>New Game</button> ';
      html += '<button type="button" class="btn btn-ghost" data-jp3-reset-2>Play Again (Same Board)</button>';
      html += '</div></div>';

      var hist = loadHistory();
      if (hist.length > 1) {
        html += '<div class="score-history"><h3 class="sh-title">Your recent games</h3><ul>';
        hist.slice().reverse().forEach(function (h, i) {
          html += '<li' + (i === 0 ? ' class="latest"' : '') + '>' +
            '<span class="sh-date">' + fmtDate(h.d) + '</span>' +
            '<span class="sh-score">P1 ' + h.scores[0] + ' &middot; P2 ' + h.scores[1] + ' &middot; P3 ' + h.scores[2] + '</span>' +
            '<span class="sh-pct">' + h.total + ' clues</span></li>';
        });
        html += '</ul></div>';
      }
    }

    // The board is written category by category (name, then its 5 values).
    // pathopharm-jeopardy.html's own <style> lays that out as columns on wide
    // screens and as one row per category on narrow ones, so 11 categories
    // never force a sideways scroll on a phone.
    html += '<div class="jp-board-wrap"><div class="jp-board jp-pp" style="--jp-cols:' + state.board.length + '">';
    state.board.forEach(function (cat, catIndex) {
      html += '<div class="jp-cat">' + escapeHtml(cat.catName) + '</div>';
      cat.slots.forEach(function (slot, valIndex) {
        var cls = "jp-cell";
        var content = String(slot.value);
        var disabled = "";
        var label = escapeHtml(cat.catName) + ", " + slot.value + " points";
        if (!slot.clue) {
          cls += " jp-cell-empty";
          content = "—";
          disabled = " disabled";
        } else if (slot.state === "answered") {
          cls += " jp-cell-correct";
          content = "✓";
          disabled = " disabled";
          label += ", completed";
        }
        html += '<button type="button" class="' + cls + '"' + disabled + ' aria-label="' + label + '"' +
          ' data-jp3-cell data-cat="' + catIndex + '" data-val="' + valIndex + '">' +
          content + '</button>';
      });
    });
    html += '</div></div>';

    root.innerHTML = html;

    root.querySelector("[data-jp3-new]").addEventListener("click", newGame);
    root.querySelector("[data-jp3-reset]").addEventListener("click", resetGame);
    var new2 = root.querySelector("[data-jp3-new-2]");
    var reset2 = root.querySelector("[data-jp3-reset-2]");
    if (new2) new2.addEventListener("click", newGame);
    if (reset2) reset2.addEventListener("click", resetGame);
    root.querySelectorAll("[data-jp3-cell]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.disabled) return;
        openModal(parseInt(btn.getAttribute("data-cat"), 10), parseInt(btn.getAttribute("data-val"), 10));
      });
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------------------------------------------------------------
  // modal (question / reveal / 3-player scoring)
  // ---------------------------------------------------------------
  var overlay = document.createElement("div");
  overlay.className = "jp-overlay";
  overlay.innerHTML = '<div class="jp-modal" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(overlay);
  var modalEl = overlay.querySelector(".jp-modal");

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  function openModal(catIndex, valIndex) {
    var cat = state.board[catIndex];
    var slot = cat.slots[valIndex];
    if (!slot.clue) return;
    activeSlot = { catIndex: catIndex, valIndex: valIndex };
    revealed = slot.state === "answered";

    renderModal();
    overlay.classList.add("show");
  }

  function renderModal() {
    var cat = state.board[activeSlot.catIndex];
    var slot = cat.slots[activeSlot.valIndex];
    var clue = slot.clue;

    var html = "";
    html += '<button type="button" class="jp-modal-close" data-jp-close aria-label="Close">&times;</button>';
    html += '<p class="jp-modal-eyebrow">' + escapeHtml(cat.catName) + ' &middot; ' + slot.value + ' points</p>';
    html += '<p class="jp-modal-q">' + escapeHtml(clue.q) + '</p>';

    if (!revealed) {
      html += '<div class="jp-modal-actions"><button type="button" class="btn btn-primary" data-jp3-reveal>Reveal Answer</button></div>';
    } else {
      html += '<div class="jp-modal-answer">';
      html += '<span class="jp-a-label">Answer</span>';
      html += '<p class="jp-a-text">' + escapeHtml(clue.a) + '</p>';
      html += '<span class="jp-r-label">Rationale</span>';
      html += '<p class="jp-r-text">' + escapeHtml(clue.rationale) + '</p>';
      html += '</div>';
      html += '<div class="jp3-score-grid">';
      PLAYER_NAMES.forEach(function (name, i) {
        html += '<div class="jp3-score-row">';
        html += '<span class="jp3-score-name">' + name + '</span>';
        html += '<button type="button" class="jp3-score-btn jp3-score-plus" data-jp3-score="' + i + ':1">+ ' + slot.value + '</button>';
        html += '<button type="button" class="jp3-score-btn jp3-score-minus" data-jp3-score="' + i + ':-1">&minus; ' + slot.value + '</button>';
        html += '</div>';
      });
      html += '</div>';
      html += '<div class="jp-modal-actions"><button type="button" class="btn btn-ghost" data-jp-close-2>Done</button></div>';
    }

    modalEl.innerHTML = html;
    modalEl.querySelector("[data-jp-close]").addEventListener("click", closeModal);
    var closeBtn2 = modalEl.querySelector("[data-jp-close-2]");
    if (closeBtn2) closeBtn2.addEventListener("click", closeModal);
    var revealBtn = modalEl.querySelector("[data-jp3-reveal]");
    if (revealBtn) revealBtn.addEventListener("click", function () {
      revealed = true;
      markAnswered(activeSlot.catIndex, activeSlot.valIndex);
      renderModal();
      render();
    });
    modalEl.querySelectorAll("[data-jp3-score]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var parts = btn.getAttribute("data-jp3-score").split(":");
        var playerIndex = parseInt(parts[0], 10);
        var sign = parseInt(parts[1], 10);
        adjustScore(playerIndex, sign * slot.value);
      });
    });
  }

  function closeModal() {
    overlay.classList.remove("show");
    activeSlot = null;
    revealed = false;
  }

  // ---------------------------------------------------------------
  // boot
  // ---------------------------------------------------------------
  var saved = loadState();
  // A saved board is only reusable if it still matches the bank's category list
  // (so editing the bank never leaves a stale, mismatched board on screen).
  var savedOk = saved && saved.board && saved.board.length === bankCategories().length;
  if (savedOk) {
    state = saved;
  } else {
    newGame();
    return;
  }
  render();
})();
