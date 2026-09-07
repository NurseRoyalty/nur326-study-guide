/* ============================================================
   assets/jeopardy.js — Week 2 Jeopardy game engine.

   Reads window.JEOPARDY_WEEK2 (data/jeopardy-week2.js) and renders a
   board into #jp-root. This file has ZERO Week 2 content of its own —
   every category name, clue, answer, and rationale comes from the data
   file, so the bank can be expanded/edited later without touching any
   of this code (the site's standing "keep content and engine separate"
   pattern, same idea as quiz-bank.js + quiz.js/exam.js).

   Game shape, per the spec this was built to:
   - Each game randomly picks 5 of the 6 Week 2 categories, 5 values
     each (100/200/300/400/500) = 25 clues, difficulty rising with value.
   - Click a value -> question -> "Show Answer" -> answer + rationale ->
     self-grade "Got It Right" / "Got It Wrong". Used squares disable.
   - "New Game" reshuffles categories AND re-picks clues (preferring
     clues NOT used in the immediately previous round, when a category's
     pool for that value allows it — every value has 4 candidate clues
     per category, so this is usually possible).
   - "Reset Game" clears score/progress on the CURRENT board without
     reshuffling — a quick do-over of the same 25 questions.
   - State (board + score + progress) persists in localStorage so a
     reload doesn't lose an in-progress game.
   ============================================================ */
(function () {
  "use strict";

  var STORE_PREFIX = window.STORE_PREFIX || "nur326";
  var LS_KEY = STORE_PREFIX + "-jeopardy-v1";
  var VALUES = [100, 200, 300, 400, 500];
  var NUM_CATEGORIES = 5;

  var root = document.getElementById("jp-root");

  // Exposed for the project's Node-based test harness only (function
  // declarations below are hoisted, so this is safe to run even when
  // #jp-root isn't on the page). Browsers never define `module`, so this
  // is a no-op in production.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { shuffle: shuffle, pickClue: pickClue, buildBoard: buildBoard, usedIdsOf: usedIdsOf };
  }
  if (!root) return;

  var state = null; // { board:[{catId,catName,slots:[{value,clue,state}]}], score, answered, total, usedThisRound:[ids] }
  var activeSlot = null; // {catIndex, valIndex} of the clue currently open in the modal
  var revealed = false;

  // ---------------------------------------------------------------
  // data helpers
  // ---------------------------------------------------------------
  function bankCategories() {
    return (window.JEOPARDY_WEEK2 && window.JEOPARDY_WEEK2.categories) || [];
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pickClue(category, value, avoidIds) {
    var pool = (category.clues && category.clues[String(value)]) || [];
    if (!pool.length) return null;
    var fresh = pool.filter(function (c) { return !avoidIds.has(c.id); });
    var choices = fresh.length ? fresh : pool;
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function buildBoard(avoidIds) {
    var bank = bankCategories();
    var cats = shuffle(bank).slice(0, Math.min(NUM_CATEGORIES, bank.length));
    return cats.map(function (cat) {
      var slots = VALUES.map(function (v) {
        var clue = pickClue(cat, v, avoidIds);
        return { value: v, clue: clue, state: "unanswered" };
      });
      return { catId: cat.id, catName: cat.name, slots: slots };
    });
  }

  function usedIdsOf(board) {
    var ids = [];
    board.forEach(function (cat) {
      cat.slots.forEach(function (s) {
        if (s.clue) ids.push(s.clue.id);
      });
    });
    return ids;
  }

  // ---------------------------------------------------------------
  // persistence
  // ---------------------------------------------------------------
  function loadState() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ---------------------------------------------------------------
  // game actions
  // ---------------------------------------------------------------
  function newGame() {
    var avoid = new Set(state ? (state.usedThisRound || []) : []);
    var board = buildBoard(avoid);
    state = {
      board: board,
      score: 0,
      answered: 0,
      total: board.length * VALUES.length,
      usedThisRound: usedIdsOf(board)
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
    state.score = 0;
    state.answered = 0;
    state.recorded = false;
    saveState();
    closeModal();
    render();
  }

  function gradeSlot(catIndex, valIndex, correct) {
    var slot = state.board[catIndex].slots[valIndex];
    if (slot.state !== "unanswered" && slot.state !== "revealed") return;
    slot.state = correct ? "correct" : "incorrect";
    state.score += correct ? slot.value : -slot.value;
    state.answered += 1;
    if (state.answered === state.total && !state.recorded) {
      state.recorded = true;
      recordHistory();
    }
    saveState();
    closeModal();
    render();
  }

  // ---------------------------------------------------------------
  // stats: category breakdown + cross-game score history
  // ---------------------------------------------------------------
  function correctCount() {
    var n = 0;
    state.board.forEach(function (cat) {
      cat.slots.forEach(function (s) { if (s.state === "correct") n++; });
    });
    return n;
  }

  function categoryBreakdown() {
    return state.board.map(function (cat) {
      var correct = 0, answered = 0;
      cat.slots.forEach(function (s) {
        if (s.state === "correct" || s.state === "incorrect") { answered++; if (s.state === "correct") correct++; }
      });
      return { name: cat.catName, correct: correct, answered: answered, total: cat.slots.length };
    });
  }

  var HIST_KEY = STORE_PREFIX + "-jeopardy-history";
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { return []; }
  }
  function recordHistory() {
    var correct = correctCount();
    var entry = { d: Date.now(), score: state.score, correct: correct, total: state.total,
      pct: state.total ? Math.round((correct / state.total) * 100) : 0 };
    var hist = loadHistory();
    hist.push(entry);
    if (hist.length > 12) hist = hist.slice(-12);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {}
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
    var correct = correctCount();
    var html = "";

    html += '<div class="jp-bar">';
    html += '<div class="jp-stat"><span class="jp-stat-num">' + state.score + '</span><span class="jp-stat-lbl">Score</span></div>';
    html += '<div class="jp-stat"><span class="jp-stat-num">' + correct + '/' + state.answered + '</span><span class="jp-stat-lbl">Correct</span></div>';
    html += '<div class="jp-stat"><span class="jp-stat-num">' + state.answered + '/' + state.total + '</span><span class="jp-stat-lbl">Completed</span></div>';
    html += '<div class="jp-bar-actions">';
    html += '<button type="button" class="btn btn-primary" data-jp-new>New Game</button>';
    html += '<button type="button" class="btn btn-ghost" data-jp-reset>Reset Game</button>';
    html += '</div></div>';

    // Per-category breakdown — same badge strip style used on every other
    // exam page's topic breakdown, so it reads as consistent with the rest
    // of the site. Only shows once at least one question's been answered.
    if (state.answered > 0) {
      html += '<div class="topic-breakdown">';
      html += '<span class="tb-label">By category:</span>';
      categoryBreakdown().forEach(function (c) {
        html += '<span class="badge">' + escapeHtml(c.name) + ' &middot; ' + c.correct + '/' + c.answered + '</span>';
      });
      html += '<span class="tb-total">' + correct + '/' + state.answered + ' correct so far</span>';
      html += '</div>';
    }

    // Game-complete summary, same result-card/ring pattern as every other
    // exam on the site, plus a cross-game score history.
    if (done) {
      var pct = state.total ? Math.round((correct / state.total) * 100) : 0;
      html += '<div class="result-card">';
      html += '<div class="result-ring" style="--pct:' + pct + '"><span>' + pct + '%</span></div>';
      html += '<div class="result-score">' + correct + ' / ' + state.total + '</div>';
      html += '<div class="result-detail">';
      html += '<p class="rmsg">Game over — final score ' + state.score + ' points. Start a new board or run this one back.</p>';
      html += '<button type="button" class="btn btn-ghost" data-jp-new-2>New Game</button> ';
      html += '<button type="button" class="btn btn-ghost" data-jp-reset-2>Play Again (Same Board)</button>';
      html += '</div></div>';

      var hist = loadHistory();
      if (hist.length > 1) {
        html += '<div class="score-history"><h3 class="sh-title">Your recent games</h3><ul>';
        hist.slice().reverse().forEach(function (h, i) {
          html += '<li' + (i === 0 ? ' class="latest"' : '') + '>' +
            '<span class="sh-date">' + fmtDate(h.d) + '</span>' +
            '<span class="sh-score">' + h.correct + '/' + h.total + ' &middot; ' + h.score + ' pts</span>' +
            '<span class="sh-pct">' + h.pct + '%</span></li>';
        });
        html += '</ul></div>';
      }
    }

    html += '<div class="jp-board-wrap"><div class="jp-board" style="--jp-cols:' + state.board.length + '">';
    state.board.forEach(function (cat) {
      html += '<div class="jp-cat">' + escapeHtml(cat.catName) + '</div>';
    });
    VALUES.forEach(function (v, valIndex) {
      state.board.forEach(function (cat, catIndex) {
        var slot = cat.slots[valIndex];
        var cls = "jp-cell";
        var content = String(v);
        var disabled = "";
        if (!slot.clue) {
          cls += " jp-cell-empty";
          content = "—";
          disabled = " disabled";
        } else if (slot.state === "correct") {
          cls += " jp-cell-correct";
          content = "✓";
          disabled = " disabled";
        } else if (slot.state === "incorrect") {
          cls += " jp-cell-incorrect";
          content = "✗";
          disabled = " disabled";
        }
        html += '<button type="button" class="' + cls + '"' + disabled +
          ' data-jp-cell data-cat="' + catIndex + '" data-val="' + valIndex + '">' +
          content + '</button>';
      });
    });
    html += '</div></div>';

    root.innerHTML = html;

    root.querySelector("[data-jp-new]").addEventListener("click", newGame);
    root.querySelector("[data-jp-reset]").addEventListener("click", resetGame);
    var new2 = root.querySelector("[data-jp-new-2]");
    var reset2 = root.querySelector("[data-jp-reset-2]");
    if (new2) new2.addEventListener("click", newGame);
    if (reset2) reset2.addEventListener("click", resetGame);
    root.querySelectorAll("[data-jp-cell]").forEach(function (btn) {
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
  // modal (question / answer / grading)
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
    revealed = slot.state === "correct" || slot.state === "incorrect";

    renderModal();
    overlay.classList.add("show");
  }

  function renderModal() {
    var cat = state.board[activeSlot.catIndex];
    var slot = cat.slots[activeSlot.valIndex];
    var clue = slot.clue;
    var graded = slot.state === "correct" || slot.state === "incorrect";

    var html = "";
    html += '<button type="button" class="jp-modal-close" data-jp-close aria-label="Close">&times;</button>';
    html += '<p class="jp-modal-eyebrow">' + escapeHtml(cat.catName) + ' &middot; ' + slot.value + ' points</p>';
    html += '<p class="jp-modal-q">' + escapeHtml(clue.q) + '</p>';

    if (!revealed && !graded) {
      html += '<div class="jp-modal-actions"><button type="button" class="btn btn-primary" data-jp-show>Show Answer</button></div>';
    } else {
      html += '<div class="jp-modal-answer">';
      html += '<span class="jp-a-label">Answer</span>';
      html += '<p class="jp-a-text">' + escapeHtml(clue.a) + '</p>';
      html += '<span class="jp-r-label">Rationale</span>';
      html += '<p class="jp-r-text">' + escapeHtml(clue.rationale) + '</p>';
      html += '</div>';
      if (!graded) {
        html += '<div class="jp-modal-actions jp-grade-actions">';
        html += '<button type="button" class="btn jp-btn-right" data-jp-grade="right">Got It Right</button>';
        html += '<button type="button" class="btn jp-btn-wrong" data-jp-grade="wrong">Got It Wrong</button>';
        html += '</div>';
      } else {
        html += '<p class="jp-already">Already graded ' + (slot.state === "correct" ? "correct" : "incorrect") + '.</p>';
      }
    }

    modalEl.innerHTML = html;
    modalEl.querySelector("[data-jp-close]").addEventListener("click", closeModal);
    var showBtn = modalEl.querySelector("[data-jp-show]");
    if (showBtn) showBtn.addEventListener("click", function () { revealed = true; renderModal(); });
    var rightBtn = modalEl.querySelector('[data-jp-grade="right"]');
    var wrongBtn = modalEl.querySelector('[data-jp-grade="wrong"]');
    if (rightBtn) rightBtn.addEventListener("click", function () { gradeSlot(activeSlot.catIndex, activeSlot.valIndex, true); });
    if (wrongBtn) wrongBtn.addEventListener("click", function () { gradeSlot(activeSlot.catIndex, activeSlot.valIndex, false); });
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
  if (saved && saved.board && saved.board.length) {
    state = saved;
  } else {
    newGame();
    return;
  }
  render();
})();
