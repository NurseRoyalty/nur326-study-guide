/* ============================================================
   torture-chamber.js — "The Torture Chamber" practice exam.

   A cumulative exam where EVERY question is select-all-that-apply.
   Content comes only from lecture material already taught on the
   topic pages. Aim for roughly one question per 10 of your topic
   pages' content, weighted toward whatever the instructor says the
   final actually emphasizes.

   ============================================================
   THE FOUR ANTI-GIVEAWAY RULES. READ BEFORE ADDING QUESTIONS.
   ============================================================
   These exist because each one was violated first and fixed later.
   Authoring naturally produces all four defects; scan for them
   explicitly after writing questions in bulk.

   1. INTERLEAVE the correct and incorrect options.
      The failure mode: listing every correct option first and the
      wrong one last. In the original site 48 of 50 questions did
      this and 38 keys were literally [0,1,2,3] — the whole exam was
      answerable without reading a single option.
      Check: tabulate the positions of the WRONG options across the
      whole file. There should be no pattern.

   2. VARY the number of correct options, and keep the spread even.
      The failure mode: nearly every question having exactly four
      correct, which makes "pick four" a viable strategy. Mix 1, 2,
      3, 4, 5, and all-correct. A couple of all-correct items and a
      couple of single-correct items are what make the set feel
      genuinely uncertain. Also mix 5-option and 6-option questions
      so "4 of 5" is never the default shape.
      Check: count correct-options-per-question and look at the
      histogram.

   3. NO LENGTH BIAS, and NO SELF-EXPLAINING correct options.
      The failure mode: the right answer is the longest option and
      the only one carrying a "because…" clause, so it reads as the
      one that knows what it's talking about. Trim the explanation
      into the rationale, and give the distractors plausible-sounding
      reasoning of their own (right reasoning, wrong fact).
      Check: compare average correct-option length to average
      wrong-option length, per question.

   4. NO STEM-WORD ECHO.
      The failure mode: a distinctive phrase from the stem appears
      only in the correct options, so the key is readable from
      vocabulary alone. Reword the stem, or put the same phrasing
      into a distractor.
      Check: for each question, find words that appear in the stem
      and in the correct options but in no incorrect option.

   Distractors should be plausible near-misses built from the same
   lecture material — a flipped sign, a wrong threshold, the right
   action attributed to the wrong person, a therapeutic value offered
   as a toxic one. When you drop a correct option to rebalance rule 2,
   the best replacement distractor is usually built from the fact you
   just removed, stated wrongly. Nothing is lost; it gets tested from
   the other side.

   ============================================================
   ORDERING
   ============================================================
   Scramble with a RANDOM SHUFFLE plus rejection sampling, not a
   greedy "place the topic with the most remaining questions next"
   pass. Greedy satisfies the no-adjacent-duplicates rule and still
   clusters badly — it front-loads the big topics into a visible
   rotation and then leaves them sparse. Accept an arrangement only if:

     * no two adjacent questions share a topic;
     * no two adjacent questions are both all-correct;
     * every topic with 4+ questions has a minimum gap of 3 (when the
       topic pool is large enough for this to be mathematically
       possible — see the 2026-08-23 note below for when it isn't);
     * no third of the exam holds far more of one topic than another;
     * no 3-topic cycle repeats three times running (A B C A B C A B C).

   ============================================================
   PROVENANCE NOTE
   ============================================================
   Keep a dated log here of what changed and why — question count,
   per-topic counts, the answer-count spread, and any rebalance. It is
   the only record of the design decisions once the questions are
   shuffled.

   --- 2026-08-23: Initial build (15 questions, 3 Week 1 topics) ---
   Replaced the 3 demo questions with a real exam covering the three
   Week 1 topics (Antimicrobials & Antibiotics, Antivirals, HIV &
   ART), per explicit user request for an "extremely hard," true-
   challenge SATA exam. An initial version of this build mixed in all
   11 Pathopharm Review topics as well (70 questions total, 5/topic
   across 14 topics) — the user reviewed that draft and asked to scale
   back to Week 1 only, so the 11 Pathopharm Review sets were dropped
   from this file. That generated-and-validated content is preserved
   at /home/claude/generated/torture-chamber/*.json in case a future
   session is asked to add it (or a Week 2 equivalent) later.

   Method: 3 parallel research agents each read exactly one Week 1
   topic page and wrote 5 extremely-hard, NCLEX NGN/clinical-judgment-
   style SATA questions (6-8 options each, "several distractors"),
   grounded only in that page's lecture content, following the four
   anti-giveaway rules above. A structural + giveaway validation pass
   (matching this repo's own tools/verify.js zero-margin "unique
   longest option is correct" check) flagged 7 of these 15 questions
   for the length-bias defect (rule 3) despite explicit drafting
   instructions to avoid it. All 7 were individually rewritten
   (trimming the correct option, or adding genuine clinical detail to
   a distractor) via a second round of dedicated fix agents, re-
   verified afterward at 0 flags remaining.

   Per-topic counts (5 questions each, 15 total):
     Antimicrobials & Antibiotics (ABX)   5
     Antivirals                            5
     HIV & Antiretroviral Therapy (ART)    5

   Answer-count-per-question spread (rule 2): 1 correct x1, 2 correct
   x4, 3 correct x4, 4 correct x4, 5 correct x2. No all-correct item —
   a known gap versus "mix in all-correct" above, accepted for this
   narrower 15-question pool since it would otherwise skew heavily
   toward the largest topic's single all-correct-eligible question.
   Option-count spread: 7-option x8, 8-option x7.

   ORDERING note: the "minimum gap of 3" rule above is mathematically
   impossible to satisfy with only 3 topics of 5 questions each in 15
   slots (it would require at least 19 slots) — deliberately relaxed
   for this build to "no two adjacent questions share a topic" plus
   the no-3-cycle-repeat and thirds-balance checks, which the final
   order satisfies. Restore the full minimum-gap-3 rule once the topic
   pool grows large enough (roughly 5+ topics) to make it feasible
   again.
   --- 2026-10-06: Week picker + Weeks 2-7 added (45 questions) ---
   Every question now carries a `week` field (1-7). assets/torture.js
   renders a week picker in front of the exam (same look as Build Your
   Own Exam: tick the weeks you want, optionally type a smaller count to
   draw that many at random), then hands the chosen questions to the
   shared exam engine. data/torture-chamber.js still sets
   window.EXAM_DATA to the FULL bank (tools/verify.js validates it that
   way); torture.js reads it once at load and replaces it on Start.
   Weeks 2-7 each got 5 new extremely-hard SATA questions (30 total;
   Week 1 keeps its 15 from the original build). Each was drafted from
   that week's built topic pages only, fact-checked option-by-option by
   an independent pass, revised, and fact-checked again. Mechanical
   checks (all 30 pass): 7-8 options (one-question 7s allowed), correct
   counts 1 x4, 2 x6, 3 x8, 4 x6, 5 x4, 6 x2; no correct option is the
   unique longest OR unique shortest; average correct/incorrect length
   ratio 0.85-1.15 per question; no stem-word echo of distinctive words;
   correct keys interleaved (none a contiguous 0..n run). Rationales name
   options by LETTER (A-H, matching how the exam shows them). Because a
   picked subset is reshuffled on every start, the file order is by week;
   the ordering rules above are enforced at launch by torture.js
   (rejection-sampled shuffle: no adjacent same-topic questions, no two
   adjacent all-correct questions) rather than baked into the file.
   Combined correct-count histogram across all 45: 1 x6, 2 x9, 3 x12,
   4 x9, 5 x6, 6 x3. Score history is off for this page (history:false),
   the same as Build Your Own Exam, because every run is a different mix.
   ============================================================ */
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",

  questions: [
    {
      stem: "A 78-year-old patient was exposed to a family member with confirmed influenza A three days ago and remains asymptomatic. The prescriber is considering oseltamivir for this patient. Which of the following are accurate regarding this medication's use?",
      options: [
        "The drug is available in both oral and IV formulations for patients unable to swallow",
        "It must be started before or within 48 hours of symptom onset to have a meaningful effect",
        "It works by inhibiting viral DNA polymerase, causing chain termination",
        "Once a patient exposed to influenza is hospitalized with severe symptoms, starting the drug at that point is highly likely to shorten the illness",
        "Post-exposure prophylaxis is a typical use for this drug, chosen partly to help avoid driving flu resistance to the medication",
        "Side effects are limited to mild gastrointestinal upset in elderly patients, with no risk to the kidneys or nervous system",
        "It is equally effective against influenza A and influenza B strains",
      ],
      answers: [1, 4],
      rationale: "Oseltamivir must be started before or within 48 hours of symptom onset, and it's primarily used for post-exposure prophylaxis (often in elderly or immunocompromised patients) partly to avoid driving resistance. It is PO only, not available IV. Its mechanism is neuraminidase inhibition — DNA polymerase chain termination is ganciclovir's mechanism. Once a patient is sick enough to be hospitalized, the drug is unlikely to help because the virus has usually already finished replicating — the opposite of what that option claims. Its side effects are not 'limited to' GI upset; seizures and renal impairment are also listed. It is best against influenza A with only some action against B, not equally effective against both.",
      topic: "Antivirals",
      week: 1
    },
    {
      stem: "A patient with a documented seizure disorder needs broad-spectrum IV therapy for a severe, resistant infection, and the prescriber is weighing which carbapenem to order. Which points should guide the nurse's understanding of this drug class?",
      options: [
        "Cilastatin is added to imipenem specifically to lower imipenem's seizure risk.",
        "Carbapenems should be infused rapidly, over about 15 minutes, to limit total drug exposure.",
        "Ertapenem would be the safest first choice here given its favorable seizure profile compared to other carbapenems.",
        "Meropenem is often chosen over imipenem-cilastatin in this situation because of its lower seizure risk.",
        "Once the patient stabilizes, the carbapenem can be switched to an oral form given its good bioavailability.",
        "Meropenem requires co-administration with cilastatin, the same as imipenem.",
        "CRE, bacteria resistant to carbapenems, is a public health emergency, fatal in roughly half of affected patients.",
        "Carbapenems are considered narrow-spectrum agents reserved for organisms other drug classes can't reach.",
      ],
      answers: [3, 6],
      rationale: "Meropenem is preferred over imipenem-cilastatin when possible specifically for its lower seizure risk, and CRE is explicitly framed as a public health emergency that is fatal in roughly half of affected patients. The distractors misapply real facts: cilastatin's actual role is blocking a kidney enzyme (dehydropeptidase) that would otherwise break imipenem down too fast, not lowering seizure risk; carbapenems are infused over 60 minutes, not 15; the source material never attributes a favorable seizure profile to ertapenem, so that comparison is unsupported; carbapenems are IV only, never oral; meropenem's actual advantage is that it does NOT require cilastatin, unlike imipenem; and carbapenems are the broadest-spectrum antibiotic class available, the opposite of narrow-spectrum.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)",
      week: 1
    },
    {
      stem: "A nursing student summarizes how each class of antiretroviral drugs works within the HIV life cycle. Which of the student's statements are correct?",
      options: [
        "NRTIs inhibit reverse transcriptase, blocking HIV's ability to incorporate its RNA into the host cell's DNA.",
        "Protease inhibitors block the virus from entering the host cell by binding the CCR5 co-receptor on the cell surface, preventing the conformational change the virus needs to fuse with and enter the cell.",
        "Integrase inhibitors inhibit the enzyme that inserts viral DNA into the host cell's own genetic material.",
        "Fusion inhibitors block the virus from entering the cell by preventing it from fusing with the host cell membrane.",
        "NNRTIs also inhibit reverse transcriptase, working similarly to NRTIs.",
        "CCR5 antagonists inhibit HIV protease, preventing assembly of new virus particles.",
        "Protease inhibitors inhibit HIV protease.",
        "CCR5 antagonists block viral entry via the CCR5 co-receptor protein.",
      ],
      answers: [0, 2, 3, 4, 6, 7],
      rationale: "Six of the eight statements correctly match the page's drug-class table: NRTIs and NNRTIs both inhibit reverse transcriptase; integrase inhibitors inhibit integrase, the enzyme that inserts viral DNA into host DNA; fusion inhibitors and CCR5 antagonists both block viral entry (fusion with the membrane, and the CCR5 co-receptor, respectively); and protease inhibitors inhibit HIV protease. The two wrong statements swap mechanisms between classes: option 2 assigns protease inhibitors the CCR5-binding, entry-blocking job that actually belongs to CCR5 antagonists, and option 6 assigns CCR5 antagonists the protease-inhibiting, assembly-blocking job that actually belongs to protease inhibitors — each is a real mechanism from the page attached to the wrong drug class.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)",
      week: 1
    },
    {
      stem: "A nurse is reviewing cephalosporin orders written for several different patients and recalling how coverage and precautions vary by generation. Which of the following statements are accurate?",
      options: [
        "A first-generation cephalosporin such as cephalexin reliably covers enterococcus and streptococcus.",
        "Cefazolin has minimal CNS penetration, a poor meningitis choice despite its prophylaxis role.",
        "Ceftazidime, a third-generation agent, provides coverage against pseudomonas.",
        "Cefuroxime, a second-generation agent, is an appropriate choice for a pseudomonas infection.",
        "Ceftaroline, the newest generation, covers ESBL-producing organisms and Klebsiella.",
        "Cefepime crosses the blood-brain barrier and covers both gram-positive and gram-negative organisms.",
        "Cephalosporins as a class are considered pregnancy category B.",
        "Ceftriaxone requires extra caution in patients with significant renal impairment.",
      ],
      answers: [1, 2, 5, 6],
      rationale: "Cefazolin is the classic surgical-prophylaxis cephalosporin but has minimal CNS penetration, making it a poor meningitis choice. Ceftazidime (third-generation) and cefepime (fourth-generation) are the earlier-generation agents that specifically cover pseudomonas, with cefepime also crossing the blood-brain barrier and covering both gram-positive and gram-negative organisms. Cephalosporins as a class are pregnancy category B. The distractors each borrow a real fact and misapply it: cefuroxime is second-generation, and second-generation drugs are explicitly NOT for pseudomonas (that coverage belongs to ceftazidime/cefepime); ceftaroline is the broadest, newest generation but specifically does NOT cover Klebsiella or ESBL organisms, the opposite of what's claimed; first-generation cephalosporins explicitly do not cover enterococcus or strep; and ceftriaxone's caution flag is liver dysfunction, not renal impairment.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)",
      week: 1
    },
    {
      stem: "A nursing instructor is explaining, in general terms, why there are so few antiviral drugs compared to antibiotics and how the antivirals that do exist actually work. Which of the following reflect what was taught?",
      options: [
        "Viruses can only replicate inside a living host cell, so an effective drug risks harming healthy cells too",
        "Most antivirals only work during the replication phase, and symptoms often appear after replication has already largely finished",
        "Antivirals work primarily by directly destroying the bacterial cell wall surrounding the virus",
        "Unlike bacteria, viruses do not have their own cell wall to serve as a selective drug target",
        "Effective antiviral therapy currently exists for only a limited number of viruses",
        "Once started, antiviral therapy fully eradicates the causative virus from the body in nearly all cases, eliminating any risk of future reactivation or recurrent outbreaks",
        "Antivirals generally work by inhibiting viral replication, which then allows the immune system to clear the virus",
      ],
      answers: [0, 1, 3, 4, 6],
      rationale: "This is the core reasoning from the lecture: viruses only replicate inside host cells (making healthy cells a collateral risk), most antivirals only act during the narrow replication window, viruses lack their own cell wall (unlike bacteria), only a handful of viruses have effective antiviral therapy, and the general mechanism is inhibiting replication so the immune system can finish the job. The 'bacterial cell wall' option inverts the actual teaching point — viruses don't have a cell wall at all, which is exactly why antivirals can't target one the way antibiotics target bacteria. The 'fully eradicates' option contradicts the specific 'not a cure' facts given for both acyclovir (virus stays dormant) and ganciclovir (recurrent infections are expected).",
      topic: "Antivirals",
      week: 1
    },
    {
      stem: "During a code, a nurse sustains a needle stick from a patient later confirmed HIV-positive. A coworker assisting the same code has blood splash directly onto their face. Which statement about these two exposures is accurate?",
      options: [
        "The needlestick carries an estimated transmission risk of under 1%.",
        "The face splash carries a higher risk than the needlestick because facial mucous membranes absorb the virus more readily.",
        "Because blood was visibly involved, both exposures should be classified in the same high-risk category as unprotected sex with a known HIV-positive partner.",
        "Since both calculated risks are so low, neither nurse is required to complete exposure paperwork or reporting.",
        "Post-exposure prophylaxis cannot be offered unless the source patient's viral load is confirmed to be at or below the 2% transmission threshold used for treated perinatal exposure.",
        "Shared injection equipment carries a similar sub-1% risk to a needlestick exposure in a healthcare setting, since both involve a needle.",
        "The face splash exposure carries essentially the same risk as a blood transfusion from an unscreened donor.",
      ],
      answers: [0],
      rationale: "Only the needlestick statement is correct — the page states needle sticks carry a risk 'still under 1%.' The face splash is actually LOWER risk, not higher: face/skin splash with body fluid is 'essentially zero risk, even if blood is present,' reversing option 2's claim. Blood exposure alone doesn't move an occupational exposure into the same 'high risk' tier as unprotected anal/vaginal sex — that category is reserved for sexual and injection-related exposure, not splashes or sticks. The page explicitly states any exposure, regardless of how low the risk, still requires completing exposure paperwork/reporting, so option 4 directly contradicts that. No viral-load threshold for offering PEP appears anywhere on the page — option 5 misapplies the <2% treated-perinatal-transmission figure to a PEP eligibility rule that doesn't exist. Shared injection equipment is explicitly classified as high risk, not comparable to a sub-1% needlestick. Blood transfusion is described as 'possible, but rare' given current screening — a different, non-'essentially zero' risk level than a face splash.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)",
      week: 1
    },
    {
      stem: "The care team is finalizing an antibiotic stewardship and culture-collection plan for a hospitalized patient with suspected severe sepsis. Which of the following practices and facts are correct?",
      options: [
        "Delay the first antibiotic dose until cultures return, even if the patient is rapidly deteriorating.",
        "The MIC value on a sensitivity report represents the concentration that kills 99.9% of the bacterial colony.",
        "Obtain the sample through the patient's existing central line to minimize discomfort.",
        "Draw two blood culture sets, one aerobic bottle and one anaerobic bottle.",
        "Recognize that starting the antibiotic before the culture is drawn can prevent the organism from growing, making it harder to identify.",
        "Treat the culture order as routine, to be completed sometime during the current shift.",
        "Community-acquired infections are typically more often bacterial and resistant than hospital-acquired infections, which shapes empiric therapy.",
        "A clear zone with no bacterial growth around a disk in a disk diffusion test means that drug is effective against the organism.",
      ],
      answers: [3, 4, 7],
      rationale: "Two blood culture bottles (one aerobic, one anaerobic) are standard, starting an antibiotic before the culture is drawn can prevent the organism from growing and complicate identification (which is exactly why cultures are prioritized), and a clear zone on disk diffusion indicates an effective drug. The distractors misapply real facts: severe sepsis and a rapidly deteriorating patient are the explicit exceptions where treatment cannot wait for cultures; peripheral sticks are preferred over central lines/ports for culture draws because those devices commonly contaminate the sample; a culture order is a stat priority, not routine; the 99.9%-kill definition belongs to MBC, not MIC (MIC only reflects the concentration that stops growth); and hospital-acquired infections, not community-acquired ones, are described as more often bacterial and resistant.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)",
      week: 1
    },
    {
      stem: "A transplant recipient is started on IV ganciclovir for CMV. Which points about this drug's black-box warnings should be included in patient teaching?",
      options: [
        "Tissue necrosis can occur at the IV insertion site, so line patency must be closely monitored",
        "Hematologic toxicity can cause pancytopenia, so lab values need close monitoring",
        "Combining the drug with certain antibiotics can increase seizure risk",
        "The drug may impair fertility in both men and women of childbearing age",
        "Extra caution is needed in patients with a pre-existing low platelet count caused by idiopathic thrombocytopenic purpura, an autoimmune condition marked by antibody-mediated platelet destruction",
        "The drug carries a risk of fetal toxicity and birth defects if a partner becomes pregnant during treatment",
        "GI distress and seizures are the primary black-box warnings associated with this medication",
        "Animal studies suggest the drug may be carcinogenic",
      ],
      answers: [1, 3, 5, 7],
      rationale: "Ganciclovir's four black-box warnings are hematologic toxicity (pancytopenia), fertility impairment, fetal toxicity/birth defects, and possible carcinogenicity. IV tissue necrosis and the ITP caution belong to acyclovir, not ganciclovir. The imipenem interaction is a real ganciclovir safety concern, but it's a separate drug-interaction caution, not one of the four listed black-box warnings. 'GI distress and seizures' are acyclovir's general side effects, not ganciclovir's black-box items — a fact borrowed from the wrong drug and mislabeled as a black-box warning.",
      topic: "Antivirals",
      week: 1
    },
    {
      stem: "A nurse is reviewing a chart to determine whether a patient's diagnosis meets AIDS-defining criteria. Which findings, if present, would independently classify this patient's diagnosis as AIDS regardless of CD4 count?",
      options: [
        "Pneumocystis pneumonia (PCP)",
        "Oral hairy leukoplasia on the lateral tongue",
        "A CD4 count of 250 cells/mm³ with no opportunistic infection",
        "Kaposi sarcoma",
        "Increased risk of periodontal disease",
        "Wasting syndrome",
        "A CD4 percentage of 15%, with no AIDS-defining condition documented",
        "HIV-related encephalopathy (AIDS dementia complex)",
      ],
      answers: [0, 3, 5, 7],
      rationale: "PCP, Kaposi sarcoma, wasting syndrome, and HIV-related encephalopathy/AIDS dementia complex are all listed as AIDS-defining conditions — any one of them classifies the diagnosis as AIDS independent of CD4 count. Oral hairy leukoplasia and increased periodontal disease risk are oral manifestations that appear as CD4 counts begin to drop — early warning signs, not AIDS-defining conditions themselves. A CD4 count of 250 cells/mm³ falls in the 200–499 range (Stage 2), above the <200 threshold that defines AIDS by count alone, and with no AIDS-defining condition present this patient doesn't meet either criterion. Likewise, a CD4 percentage of 15% falls in the 14–25% Stage 2 range, not the <14% Stage 3 range — this distractor uses a real number from the CDC staging table but places it just outside the AIDS-defining threshold.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)",
      week: 1
    },
    {
      stem: "A patient newly diagnosed with genital herpes is started on oral acyclovir. When explaining how the medication actually stops the virus, which of the following are accurate mechanisms of action for acyclovir?",
      options: [
        "Requires binding to a viral cell wall protein to gain entry",
        "Interferes with viral DNA and RNA synthesis, halting nucleic acid production",
        "Causes viral DNA polymerase chain termination",
        "Prevents the virus from binding to the host cell so it cannot replicate further",
        "Permanently eliminates the virus from the body, preventing any future outbreaks",
        "Stimulates the body's own immune response to help clear the virus",
        "Inhibits neuraminidase, the enzyme influenza viruses use to replicate",
      ],
      answers: [1, 3, 5],
      rationale: "Acyclovir's three lecture-stated mechanisms are: interfering with viral DNA/RNA synthesis, blocking the virus from binding to the host cell, and stimulating the immune system to help kill the virus. 'Causes viral DNA polymerase chain termination' is ganciclovir's mechanism, not acyclovir's, and 'inhibits neuraminidase' is oseltamivir's mechanism — both real facts from the page but attached to the wrong drug. Acyclovir also does not permanently eliminate the virus; it decreases severity, frequency, and shedding, but the virus stays dormant. Viruses do not have their own cell wall at all, so no antiviral mechanism involves binding a 'viral cell wall protein.'",
      topic: "Antivirals",
      week: 1
    },
    {
      stem: "A patient receiving an IV vancomycin infusion for MRSA bacteremia develops facial flushing, itching, and a diffuse rash about 20 minutes into the infusion, along with a mild drop in blood pressure. Which nursing actions and knowledge points are appropriate for this patient's ongoing care?",
      options: [
        "Slow the infusion rate rather than stopping the drug.",
        "Draw peak level about 30 minutes before the infusion starts, not after it ends.",
        "Draw a trough level approximately 30 minutes before the next scheduled dose.",
        "Stop the infusion immediately and document a true anaphylactic allergy.",
        "Monitor platelet counts throughout therapy.",
        "Use extra caution if the patient is also scheduled for IV contrast dye.",
        "Reassure the patient that this reaction indicates permanent, irreversible hearing loss.",
        "Consider premedicating with diphenhydramine before the next dose.",
      ],
      answers: [0, 2, 4, 5, 7],
      rationale: "This presentation is Red Man syndrome, an infusion-rate reaction rather than a true allergy, so the fix is slowing the infusion (correct), not stopping it and documenting anaphylaxis (wrong -- no true allergy has occurred). Vancomycin monitoring includes a trough drawn about 30 minutes before the next dose and, separately, a peak drawn about 30 minutes AFTER the infusion finishes -- the distractor describing a peak drawn before the infusion starts reverses that timing. Thrombocytopenia and nephrotoxicity mean platelet counts should be monitored and extra caution is needed with other nephrotoxic agents like IV contrast; premedicating with diphenhydramine is an accepted strategy for this reaction. The closest trap is the hearing-loss option: vancomycin's ototoxicity is described as reversible, unlike the permanent ototoxicity associated with aminoglycosides -- this distractor borrows the wrong drug's toxicity profile.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)",
      week: 1
    },
    {
      stem: "One patient, diagnosed with HIV years ago, has a CD4 count of 550 cells/mm³ and an undetectable viral load on ART. A second patient was infected within the past two weeks, is not yet on treatment, and reports fever, sore throat, and muscle aches. Which statements are accurate?",
      options: [
        "The treated patient's CD4 count of 550 cells/mm³ with an undetectable viral load is consistent with clinical latency being maintained indefinitely on effective treatment.",
        "The newly infected patient's fever, sore throat, and muscle aches mean they have already progressed to the symptomatic HIV/AIDS stage, since clinical latency itself produces no symptoms and only advanced immunosuppression would explain a symptomatic presentation.",
        "The newly infected patient is not infectious until seroconversion occurs and antibodies become detectable.",
        "A CD4 count of 550 cells/mm³ meets the CDC's Stage 3 surveillance criteria based on CD4 count alone.",
        "The newly infected patient's symptoms are consistent with acute infection, during which roughly 40–60% of infected people don't notice or can't identify their symptoms.",
        "Because the treated patient's viral load is undetectable, that patient is no longer considered HIV-positive.",
        "As CD4 count declines over the course of untreated infection, viral load tends to rise correspondingly.",
      ],
      answers: [0, 4, 6],
      rationale: "Correct: a treated patient with viral load undetectable and CD4 around 500–600 matches the page's description of clinical latency 'maintained indefinitely' with effective treatment. The second patient's nonspecific symptoms (fever, sore throat, muscle aches) match the acute stage, where 40–60% of people don't notice or can't identify symptoms. CD4 count and viral load move inversely as untreated disease progresses. Distractors: the page states a person is infectious from day one, even before symptoms appear, not only after seroconversion — option 2 is wrong. A CD4 of 550 falls in Stage 1 (≥500), not Stage 3 (<200) — option 3 flips the threshold. The page explicitly says an undetectable viral load means effectively no transmission risk but the person is 'still considered HIV-positive' — option 5 contradicts this directly. Flu-like symptoms are acute-stage findings, not evidence of having reached the symptomatic HIV/AIDS stage — option 1 confuses the two stages.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)",
      week: 1
    },
    {
      stem: "A kidney transplant recipient develops CMV retinitis and, separately, a CMV respiratory infection. Which of the following are accurate?",
      options: [
        "CMV retinitis is treated with a topical ganciclovir ointment applied directly to the eye",
        "Treatment is typically initiated orally, then transitioned to IV for the final weeks of therapy",
        "CMV is an equally common concern in immunocompetent and immunocompromised patients",
        "CMV cannot be cured, so affected patients experience recurrent infections despite treatment",
        "Oral ganciclovir tablets may be crushed and mixed with food for easier swallowing",
        "The drug is cleared primarily by the liver, so hepatic function should be monitored closely",
        "If a crushed tablet contacts bare skin, the area should be left alone since the drug is not absorbed through skin",
        "CMV respiratory infection in immunocompromised patients is treated with a subcutaneous ganciclovir injection",
      ],
      answers: [3],
      rationale: "CMV cannot be cured; patients have recurrent infections even with treatment. CMV retinitis is actually treated with an intraocular injection, not a topical ointment (topical ointment is a route used for a different drug, acyclovir, for a different condition). Treatment order is reversed in the distractor — ganciclovir is usually started IV for a few weeks first, then transitioned to oral, not the other way around. CMV is only a concern in immunocompromised patients, not the general population. The tablet should never be crushed or split, and if it contacts bare skin the area should be washed with soap and water, not left alone. Ganciclovir is cleared through the kidneys, not the liver. No subcutaneous route for ganciclovir is described on the page.",
      topic: "Antivirals",
      week: 1
    },
    {
      stem: "A patient in the ICU is receiving IV gentamicin for a resistant gram-negative infection and is scheduled to receive a neuromuscular blocking agent before an upcoming procedure. Which nursing concerns are most appropriate given this combination of therapies?",
      options: [
        "Monitor closely for profound respiratory distress given the gentamicin/neuromuscular blocker combination.",
        "Reassure the patient that nephrotoxicity from gentamicin is irreversible and will require permanent dialysis.",
        "Administer the aminoglycoside before any beta-lactamase inhibitor to maximize the synergistic effect.",
        "Assess for tinnitus or hearing changes, keeping in mind this ototoxicity can become permanent.",
        "Draw peak and trough levels at any convenient time, since strict timing doesn't affect aminoglycoside results.",
        "Anticipate a lower initial dose, since aminoglycosides are bacteriostatic and require sustained levels to work.",
        "Watch for CNS effects such as confusion, disorientation, or numbness and tingling.",
      ],
      answers: [0, 3, 6],
      rationale: "Gentamicin combined with a neuromuscular blocker can cause profound respiratory distress, aminoglycoside ototoxicity can become permanent (unlike vancomycin's reversible hearing loss), and CNS effects like confusion, disorientation, and numbness/tingling are recognized aminoglycoside effects. The closest traps swap facts between drugs or reverse a process: aminoglycoside nephrotoxicity is usually reversible -- permanence belongs to the ototoxicity, not the nephrotoxicity; the correct sequence is giving the beta-lactamase inhibitor first so the aminoglycoside can get into the bacterial cell, not the reverse; peak/trough timing is exactly what's monitored for aminoglycosides, so 'anytime' is wrong; and aminoglycosides are described as potent against gram-negative organisms, not bacteriostatic -- that label belongs to other classes like macrolides, tetracyclines, and sulfonamides.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)",
      week: 1
    },
    {
      stem: "A clinic counsels two patients: one is HIV-negative and in an ongoing relationship with an HIV-positive partner and wants continued protection; the other had unprotected sex two days ago with a partner just found to be HIV-positive and needs guidance now. Which statement correctly matches management to patient?",
      options: [
        "The first patient could be started on PrEP, an ongoing antiretroviral regimen that reduces transmission risk by more than 90%.",
        "PrEP is given for 28 days, after which HIV testing is performed at 6 and 12 weeks to confirm it worked.",
        "Clinics offer PrEP broadly to any sexually active adult who requests it, since limiting it to those with an identified ongoing risk would be discriminatory.",
        "The second patient should begin a 28-day course of PEP, with HIV testing done at 6 and 12 weeks.",
        "PEP is an ongoing daily antiretroviral combination pill taken indefinitely by anyone with a partner who is HIV-positive.",
        "Reducing transmission risk by more than 90% is a benefit specifically associated with completing the 28-day PEP course after a high-risk exposure.",
      ],
      answers: [0, 3],
      rationale: "The first patient fits PrEP — ongoing antiretroviral medication for an HIV-negative person with an HIV-positive partner, reducing risk by more than 90%. The second patient fits PEP — started after a known high-risk exposure, given for 28 days with testing at 6 and 12 weeks. The distractors cross-wire the two: option 2 attaches PEP's 28-day/6-and-12-week timeline to PrEP, which is ongoing, not time-limited. Option 3 contradicts the page directly — clinics screen and interview first specifically because giving PrEP out broadly increases the risk of drug resistance. Option 4 attaches PrEP's 'ongoing, taken indefinitely' description to PEP, which is a defined 28-day course, not ongoing. Option 5 attaches PrEP's >90% risk-reduction figure to PEP, a statistic the page never states for PEP.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)",
      week: 1
    },
    {
      "stem": "A 52-year-old man with seasonal allergic rhinitis and benign prostatic hyperplasia (BPH) has had a head cold for 3 days: nasal congestion, a runny nose, and a dry non-productive cough that keeps him awake at night. He asks the nurse about over-the-counter options for his symptoms. Which statements by the nurse are accurate?",
      "options": [
        "Diphenhydramine is a reasonable choice for his runny nose because antihistamines treat the underlying allergy by stopping mast cells from releasing histamine.",
        "Diphenhydramine dries secretions, but its mild anticholinergic effect can cause urinary retention, so with BPH he should report trouble voiding.",
        "A sedating antihistamine such as diphenhydramine should be dosed in the morning, so that the drowsiness has worn off by the time he wants to sleep.",
        "A dry cough that brings up no sputum is a time when dextromethorphan, which suppresses the cough reflex in the brain, is a reasonable option.",
        "A decongestant such as phenylephrine or pseudoephedrine should not be used for more than 4 days, because longer use risks rebound nasal congestion.",
        "Guaifenesin would clear his nasal congestion by decreasing his mucus production, so he should also limit fluids to keep his secretions dry.",
        "Pseudoephedrine is kept behind the counter because it causes less CNS stimulation than phenylephrine, which also makes it the weaker decongestant.",
        "If a prescription codeine cough syrup were ordered, he should be cautioned about taking it with diphenhydramine, because both are CNS depressants."
      ],
      "answers": [
        1,
        3,
        4,
        7
      ],
      "rationale": "Correct: B) Diphenhydramine (first-generation) has a mild anticholinergic effect that dries secretions but can cause constipation and urinary retention; BPH is a listed caution and the nurse monitors for retention. D) Dextromethorphan suppresses the cough reflex directly in the brain; coughing is usually protective, so suppressants are reserved for times when it is not beneficial, such as a dry, non-productive cough. E) Phenylephrine and pseudoephedrine are limited to 4 days because of rebound nasal congestion. H) Codeine is an opioid CNS depressant and diphenhydramine causes significant CNS depression, so combining them calls for caution. Incorrect: A) Antihistamines are palliative: they occupy the H1 receptor so histamine cannot bind, and they do not stop mast cells from releasing it or treat the underlying allergy; BPH is also a listed caution. C) Reversed: a sedating antihistamine is best dosed at night because of drowsiness (the 'Benadryl hangover'); the non-sedating second-generation agents (loratadine, fexofenadine, cetirizine) are the ones suited to the morning. F) Guaifenesin lowers the surface tension of secretions so mucus is easier to cough up; it does not decrease mucus production, and hydration is encouraged alongside it. G) Pseudoephedrine is behind the counter because it is a methamphetamine precursor with abuse potential, and it works better; phenylephrine is the one with less CNS stimulation and less effectiveness.",
      "topic": "Upper Respiratory Infections (URI)",
      "week": 2
    },
    {
      "stem": "A 58-year-old man with newly diagnosed active pulmonary tuberculosis is started on isoniazid, rifampin, pyrazinamide, and ethambutol while susceptibility results are pending. He takes warfarin and is currently in a gout flare that began yesterday. Which nursing findings or actions are appropriate?",
      "options": [
        "Anticipate that rifampin will reduce the effect of his warfarin, so a higher warfarin dose may be needed while he is on the regimen.",
        "Only isoniazid needs liver monitoring, because pyrazinamide mainly worsens gout and rifampin mainly affects bleeding and clotting times in a patient on warfarin.",
        "Question the pyrazinamide order with the prescriber, because it causes hyperuricemia and is contraindicated in acute gout.",
        "Teach him ahead of time that rifampin can turn his urine, tears, and sweat red-orange-brown, a harmless effect that is important to mention.",
        "Once susceptibility results return, a single effective drug is enough, since the regimen is then narrowed to the best one.",
        "Expect pyridoxine (vitamin B6) to be paired with isoniazid, and teach him to report numbness or tingling (peripheral neuropathy), a known isoniazid effect.",
        "Teach him to report blurred vision or other visual changes, because ethambutol can cause retrobulbar neuritis and isoniazid can cause optic neuritis.",
        "Once his chest X-ray shows the granulomas are walled off, he is no longer considered contagious, so the sputum cultures can be stopped."
      ],
      "answers": [
        0,
        2,
        3,
        5,
        6
      ],
      "rationale": "Correct: A) Rifampin is a strong CYP inducer that decreases the effects of anticoagulants (and of oral diabetes medications, beta blockers, phenytoin, and others), so higher doses may be needed. C) Pyrazinamide causes hyperuricemia and is contraindicated in acute gout (and severe hepatic disease), so the order is questioned. D) Rifampin turns urine and other body fluids (tears, sweat) red-orange-brown; it is harmless but important to mention. F) Isoniazid can cause peripheral neuropathy (teach and monitor for it), and pyridoxine (B6) is often paired with it to help prevent that. G) Ethambutol causes retrobulbar neuritis and isoniazid can cause optic neuritis, so visual changes are reported. Incorrect: B) Isoniazid, rifampin, and pyrazinamide are ALL metabolized by the liver and carry hepatotoxicity risk, so liver function is monitored for each (isoniazid also has a black-box warning for liver injury); pyrazinamide's problems are hepatotoxicity plus hyperuricemia, and rifampin's bleeding/clotting effect is additional, not a substitute. E) Patients are kept on at least two drugs at a time whenever possible; susceptibility results narrow the four-drug regimen but do not reduce it to a single drug. H) The chest X-ray is only the step after a positive screen, looking for granulomas; patients are considered contagious until the sputum no longer grows mycobacteria, so cultures are what guide that.",
      "topic": "Pneumonia &amp; Tuberculosis",
      "week": 2
    },
    {
      "stem": "A client with anemia of chronic kidney disease receiving epoetin alfa has a hemoglobin of 12.6 g/dL, well above the intended range. BP is 178/100, and the client reports headache, difficulty concentrating, and a ruddy skin color. Which statements by the nurse are accurate?",
      "options": [
        "Hematocrit is the more reliable value for following the client's response, because hemoglobin is heavily affected by fluid volume status.",
        "These findings represent relative polycythemia from hemoconcentration, so the values should return to range once the client is rehydrated.",
        "The headache, trouble focusing, and high blood pressure fit the increased blood viscosity and volume that come with an excess of red cells.",
        "The client's kidneys are sensing tissue hypoxia and secreting extra erythropoietin, so this is a secondary polycythemia rather than an effect of the drug.",
        "Hold the next epoetin dose and notify the prescriber, because the hemoglobin is greater than the 10 g/dL limit set by the black-box warning for ESAs.",
        "The headache and ruddy skin color indicate polycythemia vera, a bone marrow stem cell disorder, so the epoetin has no part in the rise in hemoglobin.",
        "Had the hemoglobin failed to rise, the right response would be a higher epoetin dose, since epoetin can correct an iron deficiency or marrow failure by itself.",
        "Excess red cells collide and clump and slow blood flow, so the client should be monitored closely for signs of stroke, TIA, angina, and DVT."
      ],
      "answers": [
        2,
        4,
        7
      ],
      "rationale": "Correct: C) Increased blood viscosity and volume in polycythemia cause hypertension, headache, and difficulty concentrating; an ESA overshoot creates an iatrogenic polycythemic state. E) The ESA black-box warning says never give if hemoglobin is greater than 10 g/dL (overcorrection risks stroke, MI, and a polycythemic, hypercoagulable state), so the dose is held and the prescriber notified. H) Excess red cells collide and clump and slow blood flow, raising the risk of DVT, angina, cerebral insufficiency, and TIAs; stroke and heart attack from clotting are the biggest concern. Incorrect: A) Reversed: hemoglobin, not hematocrit, is the best indicator because hematocrit is heavily affected by fluid volume status. B) Relative polycythemia is a false rise from low plasma volume (severe dehydration); this client has a true increase in red cell mass from the drug, which rehydration will not fix. D) Failing kidneys cannot release enough erythropoietin, which is why the client is anemic; secondary polycythemia is a compensatory response to chronic hypoxia, and here the extra red cells come from the ESA (an iatrogenic polycythemic state). F) Polycythemia vera is a rare marrow stem cell disorder, typically in people over 60; the page states that ESAs can cause a polycythemic state when hemoglobin is overcorrected, so the epoetin is involved. G) Epoetin requires adequate iron and working bone marrow to be effective; it cannot fix an iron deficiency or marrow problem on its own.",
      "topic": "Anemia &amp; Polycythemia",
      "week": 2
    },
    {
      "stem": "A 19-year-old with asthma has been using an albuterol canister about every 3 weeks for daytime wheezing and night cough. The provider adds a fluticasone/salmeterol inhaler and montelukast. Which client statements show correct understanding of the plan?",
      "options": [
        "Salmeterol is long-acting, so if my albuterol canister is empty I can use my fluticasone/salmeterol inhaler to treat a sudden asthma attack.",
        "Needing albuterol more than one canister a month is a sign that my asthma is not well controlled and may call for anti-inflammatory therapy.",
        "When my albuterol and my steroid inhaler are due together, I should take the steroid inhaler first so that the steroid is absorbed better.",
        "Montelukast is taken for prevention, so I should expect to notice its benefit within a day or two and can stop it if I notice nothing by then.",
        "If the fluticasone in my combination inhaler makes my mouth sore, I can switch to using salmeterol alone, since salmeterol is a preventer.",
        "Rinsing my mouth out after each fluticasone/salmeterol dose is recommended because inhaled steroids raise the risk of oral candidiasis.",
        "Albuterol is a rescue drug that lasts 12 to 24 hours, so I can also take it every morning for prevention.",
        "I should expect the full benefit of my steroid inhaler within a few days, so if I feel no change by then it is not working."
      ],
      "answers": [
        1,
        5
      ],
      "rationale": "Correct: B) More than one albuterol canister a month (about 200 puffs each) signals inadequate asthma control and may mean adding anti-inflammatory therapy; one canister every 3 weeks is more than that. F) Inhaled corticosteroids raise the risk of oral candidiasis (and mouth irritation, cough, dry mouth), so the mouth is rinsed out after each use. Incorrect: A) LABAs are preventers that will not help an acute attack, and combination inhalers such as fluticasone/salmeterol (Advair) are still not for acute attacks; albuterol (SABA) is the rescue drug. C) Flipped: the bronchodilator is given first, then the inhaled steroid, for better absorption. D) Montelukast is for prophylaxis and chronic treatment, and improvement takes about a week, so stopping it after a day or two is wrong. E) A LABA is always given combined with an inhaled corticosteroid, never alone. G) Albuterol lasts about 4-6 hours and is a rescue drug; it is used before exercise for exercise-induced asthma but is not recommended for regular daily use. H) Inhaled corticosteroids take several weeks of continuous use for full effect, and are for prevention and long-term maintenance.",
      "topic": "Obstructive Airway Disorders",
      "week": 2
    },
    {
      "stem": "An 82-year-old nursing home resident with a recent stroke and a decreased gag reflex receives NG tube feedings. She develops fever, chills, pleuritic chest pain, and a productive cough with rusty-colored sputum. Crackles and dullness to percussion are noted over the right lower lobe. She is using accessory muscles and her heart rate is elevated, but she is still maintaining her oxygenation. Staff report she has never coughed or choked during feedings. Which of the following are accurate?",
      "options": [
        "Rusty sputum with an elevated white blood cell count suggests a viral cause, so antibiotics should be held until bacteria are confirmed.",
        "A chest X-ray showing consolidation is the gold standard for identifying the causative organism and guiding antibiotic choice in this setting.",
        "Because she lives in a nursing home, this is hospital-acquired pneumonia, which carries a worse outcome than community-acquired pneumonia.",
        "Her NG tube and weak gag response raise aspiration risk, and aspiration can be silent, so close feeding observation and a dysphagia evaluation are appropriate.",
        "Over the consolidated lobe, expect dullness to percussion along with decreased tactile fremitus and the presence of egophony on auscultation.",
        "Staphylococcus aureus, which usually enters through the bloodstream, is the most common organism in bacterial community-acquired pneumonia, so it is her likely cause.",
        "Her accessory muscle use and elevated heart rate mean she is already in respiratory failure, so the nurse should be ready to start CPR.",
        "Aspirated gastric contents cause a worse inflammatory response when they are less acidic, so a higher gastric pH increases her risk of severe aspiration pneumonia."
      ],
      "answers": [
        3
      ],
      "rationale": "Correct: D) NG tubes and a decreased gag reflex (her weakened gag response) are aspiration risk factors; aspiration can be silent (a cough is not required), so high-risk patients need careful feeding observation and may need a dysphagia evaluation. Incorrect: A) Rusty or green purulent sputum and an elevated WBC point to a BACTERIAL cause; viral cough is typically non-productive and scant, and antibiotics are withheld in viral pneumonia unless bacterial infection is confirmed. B) The chest X-ray shows an infiltrate or consolidation; sputum culture and sensitivity is the gold standard because it identifies the pathogen and which antibiotics will work. C) Nursing home residents have HCAP, which is technically grouped with CAP; HAP requires onset 48+ hours after hospital admission. E) Consolidation gives dullness to percussion, inspiratory crackles, INCREASED tactile fremitus, and egophony, so decreased fremitus is wrong. F) Streptococcus pneumoniae is the most common organism in bacterial CAP (often with rusty-tinged sputum); S. aureus is the most common gram-positive cause of HOSPITAL-acquired pneumonia, often as MRSA. G) Distress means the patient is still maintaining oxygenation with increased work of breathing (accessory muscles, increased heart rate); failure means she can no longer compensate, which is not the case here. H) Reversed: MORE acidic aspirate causes the worse inflammatory response, so severity depends on a lower pH, not a higher one.",
      "topic": "Pneumonia &amp; Tuberculosis",
      "week": 2
    },
    {
      "stem": "A 31-year-old sedentary man with gout has spent a hot weekend outdoors. He arrives with spasmodic flank pain that comes in waves and radiates to the groin, vomiting, hematuria, and a temperature of 38.9 C (102 F). Imaging shows a ureteral stone with a dilated collecting system above it. Which interpretations and nursing actions are appropriate?",
      "options": [
        "The stone most likely began forming in the ureter, where the narrow lumen concentrates urine solutes, so crystals first appear at the site where it is now lodged.",
        "His fever suggests infection behind the blockage, so pyelonephritis is considered alongside the stone rather than renal colic alone.",
        "Thiazide diuretics are the expected preventive therapy for his likely stone type, while allopurinol is reserved for stones related to infection.",
        "Because he has gout, a uric acid stone is most likely, and recurrence is prevented by treating the gout, usually with allopurinol.",
        "The upstream distension reflects back-pressure from the blockage, so urine output and kidney function are monitored for progression to postrenal AKI.",
        "IV ketorolac is usually sufficient for acute renal colic, since opioids such as morphine are rarely needed in these clients.",
        "His hot weekend outdoors raised his risk by producing more dilute urine, while his sedentary lifestyle is unrelated to crystal formation.",
        "Because he cannot keep fluids down, IV fluids are especially useful, since they dilute the urine to keep crystals from reforming and help move the stone."
      ],
      "answers": [
        1,
        3,
        4,
        7
      ],
      "rationale": "Correct: B) Fever is not part of renal colic by itself; with a stone it points toward pyelonephritis as well, from urine backing up behind the blockage. D) Gout with a stone most likely means a uric acid stone, and prevention is treating the gout, usually with allopurinol. E) Obstruction raises pressure upstream (hydroureter/hydronephrosis, seen here as upstream distension) and can progress to postrenal acute kidney injury, so urine output and kidney function guide how urgently it is treated. H) IV fluids dilute the urine so crystals do not reform and help move the stone, especially when he cannot keep fluids down. Incorrect: A) Crystals always begin forming at the level of the kidney/nephron, never in the ureter or bladder; the ureter is only where the stone lodges. C) Thiazides prevent calcium stones; uric acid stones are prevented by treating the gout (allopurinol), and struvite stones by treating the infection with antibiotics plus fluids. F) An NSAID such as ketorolac suits milder pain; most patients need an opioid, usually morphine, for acute colic. G) Hot weather causes dehydration and more concentrated (higher-solute) urine, not dilute urine, and a sedentary lifestyle contributes through urinary stasis.",
      "topic": "Renal Disorders",
      "week": 3
    },
    {
      "stem": "A 68-year-old man with long-standing type 2 diabetes and hypertension has severe, progressive chronic kidney disease. Today he reports itching and fatigue, his Hgb is 7.4 g/dL, serum HCO3 is 14 mEq/L, phosphate is elevated, and he has new dyspnea with crackles on auscultation. He also asks for more pain medication for his back. Which findings, interpretations, and plans are appropriate?",
      "options": [
        "His new respiratory signs suggest pulmonary edema from third-spacing, the biggest immediate safety concern, often marking when dialysis must start.",
        "His Hgb of 7.4 reflects lost erythropoietin production, and since the decline was slow he may feel better than someone after acute blood loss.",
        "To reach a systolic goal under 140, an ACE inhibitor and an ARB are combined, since both block angiotensin II and add benefit.",
        "His HCO3 of 14 is under 15, so oral sodium bicarbonate is started with a goal of 18 to 20, which also helps slow CKD progression.",
        "Calcium carbonate with meals lowers his phosphate, and calcium and phosphate are both monitored because it can cause hypercalcemia.",
        "Calcitriol is the safer choice for his phosphate because, unlike calcium carbonate, it reduces phosphate absorption and does not cause hypercalcemia.",
        "Proteinuria and increased angiotensin II are the biggest drivers of worsening CKD, so blood pressure control and urine protein checks are priorities.",
        "Before giving more opioid for his back pain, the nurse recognizes that poor filtering retains opioids far longer, risking respiratory depression."
      ],
      "answers": [
        0,
        1,
        3,
        4,
        6,
        7
      ],
      "rationale": "Correct: A) Pulmonary edema from third-spacing is an ominous sign that often marks when dialysis needs to start, and it is the biggest immediate safety concern. B) Failing erythropoietin production causes chronic anemia (Hgb can fall to 5-6); because the decline is so slow, patients often have fewer symptoms than after acute blood loss. D) Sodium bicarbonate is started when bicarb is under 15, with a goal of 18-20, and it slows CKD progression. E) Calcium carbonate binds phosphate (calcium and phosphate move inversely), is taken with meals, and can cause hypercalcemia, so both levels are monitored. G) Proteinuria and increased angiotensin II are the two biggest drivers of worsening CKD, hence blood pressure control and urine protein monitoring. H) Severe CKD retains opioids far longer, risking significant respiratory depression; this is the classic most-concerning medication. Incorrect: C) An ACE inhibitor or an ARB is used, never both together. F) Calcitriol is activated vitamin D that stimulates intestinal absorption of calcium and phosphate, and its adverse effects are hypercalcemia and hyperphosphatemia; calcium carbonate is the agent that lowers phosphate.",
      "topic": "Acute Kidney Injury &amp; Chronic Kidney Disease",
      "week": 3
    },
    {
      "stem": "A urology clinic nurse reviews two clients. Client 1 is a 22-year-old with a painless, firm testicular lump who had an undescended testicle corrected surgically at age 4. Client 2 is a 71-year-old with hesitancy, weak stream, nocturia, and a mildly elevated PSA who takes nitroglycerin for angina and has just been started on tamsulosin and finasteride for BPH. Which statements are accurate?",
      "options": [
        "The nurse can tell Client 2 that a mildly elevated PSA rules out prostate cancer, because BPH is the only common cause of a raised PSA in older men, so no further concern is needed.",
        "Client 2's hesitancy and weak stream are an early warning sign of prostate cancer, since cancer obstructs the urethra early on, unlike BPH.",
        "Client 1's lump being painless is not reassuring, since a painless mass is the classic finding and his risk stays elevated for life despite repair at age 4.",
        "If Client 1's painless testicular tumor is a seminoma, it is the more aggressive germ cell type and would be expected to spread faster than a nonseminoma.",
        "Tamsulosin should relieve Client 2's symptoms sooner than finasteride, which blocks conversion of testosterone to DHT and shrinks the gland only over months.",
        "Finasteride and tamsulosin are given together mainly to stop Client 2's BPH from progressing to prostate cancer, since BPH is a premalignant overgrowth.",
        "If Client 2 asks about sildenafil, the nurse flags his nitrate, since both act through nitric oxide/cGMP and can cause a severe drop in blood pressure."
      ],
      "answers": [
        2,
        4,
        6
      ],
      "rationale": "Correct: C) A painless testicular mass is the classic presentation (and easy to delay reporting), and cryptorchidism keeps the risk elevated for life even after surgical correction. E) Alpha-1 blockers such as tamsulosin relax prostate and bladder-neck smooth muscle quickly but do not shrink the gland; finasteride, a 5-alpha reductase inhibitor, blocks testosterone-to-DHT conversion and its effect takes months. G) PDE5 inhibitors such as sildenafil must never be combined with nitrates such as nitroglycerin; both act through nitric oxide/cGMP and the combination can cause a severe, life-threatening drop in blood pressure. Incorrect: A) PSA is not cancer-specific: cancer, BPH, and prostatitis can all raise it, so a mild elevation does not rule cancer out (or in). B) Prostate cancer is mostly asymptomatic early; it is BPH that causes early obstructive symptoms because of where it grows. D) Seminoma is the slower-growing, more radiosensitive type; nonseminoma grows and spreads more quickly. F) BPH is a benign overgrowth that does not turn into cancer; finasteride shrinks the prostate by blocking DHT production.",
      "topic": "Male Reproductive Disorders",
      "week": 3
    },
    {
      "stem": "A 67-year-old nearsighted man who smokes has poorly controlled hypertension with hypertensive retinopathy found on his last eye exam, open-angle glaucoma treated with timolol drops, and a cataract causing gradual, painless blurring. Today he calls the clinic nurse because for the past two hours his left eye has had flashing lights and a dark curtain drifting across his vision, with no pain. He also asks about his drops and his other eye conditions. Which responses and nursing judgments are appropriate?",
      "options": [
        "Timolol lowers his eye pressure by increasing outflow of aqueous humor, which is the same mechanism latanoprost uses, so he can expect similar effects.",
        "His gradual, painless blurring of vision from the cataract should clear with a prescribed drop that reverses lens clouding, so surgery is not needed.",
        "His sudden, painless flashes and curtain point to retinal detachment, an emergency since delay risks permanent vision loss; nearsightedness is a risk factor.",
        "His nearsightedness raises his risk of macular degeneration, whereas hyperopia is the risk factor for retinal detachment and the curtain it produces.",
        "Because his hypertensive retinopathy is irreversible, as with macular degeneration, tightening his blood pressure control will not improve the vessel damage.",
        "After each timolol drop he should press the inner corner of the eye for about a minute, to limit drainage down the tear duct and systemic beta-blockade.",
        "His open-angle glaucoma is the type that anticholinergic drugs can precipitate, because pupil dilation pushes the iris into the drainage angle, so he should avoid them."
      ],
      "answers": [
        2,
        5
      ],
      "rationale": "Correct: C) Sudden, painless, unilateral flashing lights and a curtain are the classic retinal detachment picture; myopia is a risk factor, and it is an emergency because delay risks permanent vision loss. F) Pressing the inner corner of the eye (nasolacrimal occlusion) for about a minute keeps the drop from draining into the nasolacrimal duct and being absorbed systemically, which matters especially for beta blocker drops such as timolol. Incorrect: A) Timolol (beta blocker) reduces aqueous humor production; latanoprost (prostaglandin analog) is the one that increases outflow. B) Cataracts are treated surgically only; no medication reverses lens clouding. D) The risk factors are swapped: myopia (with older age and eye trauma) raises retinal detachment risk, while hyperopia (with UV exposure and smoking) raises macular degeneration risk. E) Hypertensive retinopathy is the reversible condition when blood pressure is controlled; macular degeneration is the irreversible one. G) Anticholinergics dilate the pupil and can precipitate closed-angle glaucoma, the sudden emergency form; open-angle glaucoma is gradual with no single trigger.",
      "topic": "Visual &amp; Sensory Disorders",
      "week": 3
    },
    {
      "stem": "On a nephrology unit, the nurse cares for two clients. Client A has nephrotic syndrome from lupus-related glomerulonephritis, with generalized edema, blood pressure 168/98, 24-hour urine protein of 5 g, elevated lipids, and a new unilateral calf swelling. Client B has early-stage bladder cancer and HIV and is scheduled for intravesical BCG therapy. Which statements are accurate?",
      "options": [
        "Client A's elevated lipids reflect the liver slowing its lipid production in response to the protein lost in the urine.",
        "Client A's new leg finding raises concern for DVT, because antithrombin III and plasminogen are lost in the urine along with albumin.",
        "Client A's high blood pressure arises because third-spaced fluid expands circulating volume, which the kidneys sense and answer by activating the renin-angiotensin system.",
        "Because lupus damaged Client A's glomeruli through the same mechanism as diabetic glomerulopathy, a thickened basement membrane explains his protein loss.",
        "Because Client B's cancer is early stage, systemic chemotherapy rather than intravesical therapy is the expected treatment.",
        "After BCG, Client B can expect bladder irritation and UTI-type symptoms to resolve as soon as the treatment course ends.",
        "Client B's HIV makes BCG unsafe, since it is a live vaccine whose bacteria can cause systemic infection, so the nurse questions the order.",
        "After each BCG treatment, the nurse disinfects Client B's urine with bleach for 24 hours before disposal to kill the live bacteria."
      ],
      "answers": [
        1,
        6
      ],
      "rationale": "Correct: B) Nephrotic syndrome loses antithrombin III and plasminogen along with albumin, producing a hypercoagulable state with DVT/PE risk. G) BCG is a live vaccine and must not be given to an immunocompromised client (HIV/AIDS) because of the risk of systemic infection from the weakened live bacteria. Incorrect: A) The liver increases lipid production in response to the protein loss, causing hyperlipidemia. C) Fluid third-spaces out of the vessels, so the kidneys sense reduced circulating volume, which is what activates the renin-angiotensin system. D) Glomerulopathy (a thickened GBM from chronically high glucose) is distinct from the inflammatory process of glomerulonephritis, which is what lupus causes. E) Stage 1 bladder cancer is treated with intravesical therapy (chemotherapy or BCG); systemic chemotherapy is for advanced disease. F) Bladder irritation and UTI-type symptoms are common even after treatment ends. H) Urine is disinfected with bleach for 6 hours after treatment, not 24.",
      "topic": "Renal Disorders",
      "week": 3
    },
    {
      "stem": "Three clients present with yellow sclera. Client A has severe pain that began after a fast-food meal, with dark foamy urine and clay-colored stools. Client B has a large internal hematoma that is being broken down. Client C has AST and ALT in the thousands and a failing liver that is no longer conjugating bilirubin, yet is alert and eating. Which interpretations are accurate? Select all that apply.",
      "options": [
        "Client A's clay-colored stool results from excess conjugated bilirubin flooding the intestine and bleaching the stool pigment.",
        "Client B's bilirubin rise is mainly indirect, because red cell breakdown outpaces the liver's ability to conjugate it.",
        "Client B's urine will be dark and foamy like Client A's, because hemolytic jaundice raises conjugated bilirubin.",
        "Client C's jaundice is obstructive, because the liver conjugated the bilirubin and only its outflow is blocked.",
        "Client A is at risk for bleeding, because without bile the vitamin K needed for clotting factors cannot be absorbed.",
        "Client A's fatty, undigested stool shows that her liver is failing to conjugate bilirubin before it leaves the liver.",
        "Client C's very high AST and ALT do not prove critical illness, because enzyme levels are not a reliable severity indicator.",
        "Assess Client C's jaundice by inspecting the palms first, since the sclera is the least reliable site in darker-skinned clients."
      ],
      "answers": [
        1,
        4,
        6
      ],
      "rationale": "Correct: B) Hemolytic jaundice is unconjugated (indirect): overproduction from red cell breakdown outpaces the liver's ability to conjugate. E) Obstructed bile cannot reach the duodenum, so fat is not digested and vitamin K, needed to make clotting factors, cannot be absorbed (bleeding tendency). G) AST, ALT and Alk Phos are elevated in liver failure, but the number is not a reliable indicator of severity; a client with enzymes in the thousands can be only moderately ill. Incorrect: A) Clay stool occurs because bilirubin and bile salts never reach the intestine to color the stool brown, not because of excess. C) Dark foamy urine comes from water-soluble conjugated bilirubin backing up into the blood; hemolytic jaundice is unconjugated, so it is not the cause. D) Client C's liver cannot conjugate bilirubin (hepatocellular, unconjugated); obstructive jaundice, where the liver already did its job and bile cannot flow out, is the Client A pattern. F) Steatorrhea comes from bile salts failing to reach the duodenum; Client A's liver conjugated bilirubin normally and the bile is only blocked from leaving. ",
      "topic": "Liver Anatomy, Function &amp; Jaundice",
      "week": 4
    },
    {
      "stem": "A clinic nurse is teaching a client who was just diagnosed with hepatitis C and takes Tylenol for back pain. The client's sister has chronic hepatitis B, and a coworker was recently ill with hepatitis A. Which statements by the nurse are appropriate? Select all that apply.",
      "options": [
        "A detectable viral load means treatment with a direct-acting antiviral, which can essentially eliminate hepatitis C in most patients.",
        "Your sister's chronic hepatitis B treatment is brief and well tolerated, and relapse after she stops therapy is uncommon.",
        "You may still take acetaminophen, but under 2 grams a day instead of the usual 4, and not at all in serious advanced liver disease.",
        "Your hepatitis C is far more likely to become chronic than your sister's hepatitis B, while your coworker's hepatitis A never will.",
        "Like your coworker's hepatitis A, your hepatitis C starts acutely with generally mild symptoms, so it is usually recognized and treated quickly.",
        "Vaccines can prevent your sister's hepatitis B and your coworker's hepatitis A, but no vaccine exists against hepatitis C.",
        "Liver cancer is a long-term risk only with your hepatitis C; chronic hepatitis B is not linked to hepatocellular carcinoma.",
        "Fatigue, anorexia, and low-grade fever can occur early in the prodromal phase, when the virus is already highly transmissible."
      ],
      "answers": [
        0,
        2,
        3,
        5,
        7
      ],
      "rationale": "Correct: A) DAAs can essentially eliminate HCV in most patients, and anyone with a detectable viral load is now treated. C) With hepatitis, acetaminophen is allowed but kept under 2 g/day (usual limit 4 g/day), and avoided entirely in serious, advanced liver disease. D) About 80% of hepatitis C and about 10% of hepatitis B become chronic; hepatitis A does not become chronic. F) Hepatitis A (2 doses) and B (3-dose series) have vaccines; hepatitis C has none. H) The prodromal phase begins about 2 weeks after exposure with nonspecific symptoms (fatigue, anorexia, low-grade fever), and the virus is highly transmissible during it. Incorrect: B) Chronic hepatitis B therapy (interferons plus nucleoside analogs such as entecavir and tenofovir) is prolonged, expensive, has significant adverse effects and a high relapse rate; there is no great treatment. E) Hepatitis A is the acute-onset, generally mild one; hepatitis C is insidious like B and can have more symptoms than B. G) Hepatitis B and C are both linked to hepatocellular carcinoma.",
      "topic": "Viral Hepatitis (A, B &amp; C)",
      "week": 4
    },
    {
      "stem": "A client with cirrhosis is admitted with new confusion and drowsiness but still arouses to voice. Serum ammonia is high and the K+ is 3.1 mEq/L. Another client on the unit with cirrhosis has the same high ammonia level but is alert and oriented. Which nursing actions and statements are appropriate? Select all that apply.",
      "options": [
        "Lactulose acts by binding bacterial DNA and inhibiting RNA synthesis, which lowers the ammonia-producing bacteria in the gut.",
        "The potassium of 3.1 matters to the ammonia problem, because hypokalemia increases renal ammonia production.",
        "Because the first client is drowsy, lactulose must be given by mouth only, so the NG and rectal routes are not options.",
        "The alert client's high ammonia alone is not a reason for lactulose, because diagnosis rests on level of consciousness.",
        "Serial ammonia levels should be drawn to titrate rifaximin, so a level is needed before each dose.",
        "Counting soft stools helps judge lactulose therapy, because the goal is 2 to 3 soft stools per day.",
        "If lactulose is not working, rifaximin is the second-line drug, and the nurse should monitor for C. difficile infection.",
        "Rifaximin is used only for active episodes and never preventively, which is why it is not ordered for the alert client."
      ],
      "answers": [
        1,
        3,
        5,
        6
      ],
      "rationale": "Correct: B) Lactulose therapy requires potassium monitoring because hypokalemia increases renal ammonia production. D) Level of consciousness, not the ammonia value, is the primary driver of diagnosis; hepatic encephalopathy is never diagnosed on an ammonia level alone, and lactulose is given only for actual signs and symptoms, not a lab number. F) Lactulose is titrated to 2 to 3 soft stools per day (or by ammonia level), so stool count is a bedside measure of dosing. G) Rifaximin is second-line, used if lactulose is not working, and carries an increased risk of C. diff, so monitor for it. Incorrect: A) That is rifaximin's mechanism; lactulose works by colonic acidification (ammonia becomes trapped ammonium) and osmotic pull of water into the colon. C) Lactulose can be given PO, NG, or rectally, so a drowsy client has options. E) Ammonia levels are not monitored with rifaximin. H) Rifaximin can be used preventively, and the alert client is not treated because the lab value alone is not a reason to give lactulose.",
      "topic": "Cirrhosis &amp; Liver Failure",
      "week": 4
    },
    {
      "stem": "A 44-year-old obese woman had right upper quadrant pain after a fast-food meal two days ago. She now has severe, sudden epigastric pain radiating to the back, a tender guarded abdomen, hypoactive bowel sounds, vomiting, and yellowing of the eyes. Her blood pressure is falling and her heart rate is rising. Amylase is elevated. Which interpretations and actions are appropriate? Select all that apply.",
      "options": [
        "Opioids such as hydromorphone or morphine are first-line here, whereas ketorolac is first-line for gallbladder pain.",
        "Pancrelipase should be started with each meal now to replace the digestive enzymes she can no longer produce during this attack.",
        "Bruising around the umbilicus would be called Gray Turner sign and would indicate hemorrhagic pancreatitis.",
        "A fluid-filled cavity seen outside the pancreas on CT would be an abscess, and one inside it would be a pseudocyst.",
        "Monitoring calcium is warranted, because free fatty acids from trapped lipase bind calcium and can cause tetany.",
        "Antacids and H2 blockers are avoided, because they raise gastric acid and so increase pancreatic enzyme secretion.",
        "Her glucose will be elevated, since damage to pancreatic cells only ever raises glucose and never lowers it.",
        "Her jaundice fits a gallstone blocking the common bile duct, the same blockage that traps pancreatic enzymes."
      ],
      "answers": [
        0,
        4,
        7
      ],
      "rationale": "Correct: A) Opioids (hydromorphone or morphine) are first-line for pancreatitis pain; IV ketorolac is first-line for cholelithiasis and cholecystitis. E) Lipase-generated free fatty acids bind calcium and deposit it in the retroperitoneum, dropping serum calcium and causing tetany, so monitor electrolytes. H) A gallstone blocking the common bile duct causes obstructive jaundice and is the most common cause of blocked pancreatic enzyme outflow, which leads to auto-digestion. Incorrect: B) Pancrelipase is enzyme replacement for chronic pancreatitis, taken with every meal and snack; this is an acute attack. C) Cullen sign is bruising around the umbilicus and Gray Turner sign is flank bruising; both indicate hemorrhagic pancreatitis. D) Reversed: a pseudocyst forms outside the pancreas, and an abscess is a large infected cavity inside it. F) Antacids and H2 blockers decrease HCl secretion, which decreases pancreatic enzyme secretion and reduces auto-digestion. G) Glucose can be elevated OR low depending on which pancreatic cells are damaged; monitor closely.",
      "topic": "Gallbladder &amp; Pancreatic Disorders",
      "week": 4
    },
    {
      "stem": "A 54-year-old man with decades of heavy alcohol use has ascites, peripheral edema, spider angiomata, and impotence. He asks the nurse about his condition and what quitting alcohol will do. Which responses by the nurse are accurate?",
      "options": [
        "Alcohol is the cause of most cirrhosis, accounting for roughly three quarters of all cases.",
        "The steatohepatitis stage is still reversible if you stop drinking; only the final cirrhosis stage is permanent.",
        "A medication exists that can reverse the fibrosis once you have stopped drinking, so quitting is only needed until the drug is started.",
        "Stopping alcohol can slow further progression, but it cannot reverse the scarring that has already occurred.",
        "Spider angiomata appear with any liver inflammation, so they are also expected in mild hepatitis.",
        "Impotence is uncommon with alcoholic cirrhosis; hormone changes are more typical of other causes of cirrhosis.",
        "Your low albumin and your shortened prothrombin time both show the liver is not making enough protein.",
        "Cirrhosis is usually diagnosed early, because portal hypertension causes noticeable symptoms from the start."
      ],
      "answers": [
        3
      ],
      "rationale": "Correct: D) Cirrhosis is an irreversible fibrotic disease; removing the toxin can slow further progression but cannot reverse damage that has already occurred. Incorrect: A) Alcohol is the single most common cause but accounts for only about 25% of cirrhosis. B) Alcoholic fatty liver is the last reversible stage; steatohepatitis is already irreversible. C) There is no drug that reverses cirrhosis or fibrosis; stopping alcohol is what stops further damage. E) Spider angiomata are specific to cirrhosis and late-stage liver failure. F) Endocrine changes (amenorrhea, hypogonadism, impotence, infertility) are most common with alcoholic cirrhosis. G) Albumin falls, but PT is prolonged, not shortened, because the liver cannot make clotting factors. H) Portal hypertension is asymptomatic until complications occur, and cirrhosis is hard to diagnose early because early signs are vague.",
      "topic": "Cirrhosis &amp; Liver Failure",
      "week": 4
    },
    {
      "stem": "A 68-year-old client who takes ibuprofen daily for arthritis and warfarin for a cardiac condition reports burning epigastric pain that begins about 90 minutes after meals. A breath test is positive for H. pylori, and the provider orders a PPI, sucralfate, and a combination antibiotic regimen. Which of the following are accurate nursing considerations?",
      "options": [
        "The timing of her pain fits a gastric ulcer, a type linked to long-term NSAID and anticoagulant use, while duodenal ulcer pain appears 2 to 4 hours after eating",
        "Work stress, not her daily ibuprofen, is the direct cause of this ulcer, so a stress-management plan can take the place of eradicating the H. pylori infection",
        "Her daily ibuprofen adds to the risk because blocking prostaglandin synthesis removes the stimulus for protective mucus and lets gastric acid production rise",
        "If an H2 blocker is added, famotidine is the safer choice for this client because cimetidine inhibits CYP450 and interacts with warfarin",
        "The PPI forms a sticky protective barrier like sucralfate, which is why a PPI is less effective than an H2 blocker for her ulcer pain",
        "Sucralfate can lower the absorption of her other oral drugs, so the nurse schedules her other oral medications about 2 hours apart from each sucralfate dose",
        "For breakthrough heartburn an antacid can be given together with her warfarin and other oral drugs, since antacids do not bind or interfere with other medications",
        "Sudden severe abdominal pain with a rigid, board-like abdomen would suggest the ulcer has perforated and raised her risk of peritonitis"
      ],
      "answers": [
        0,
        2,
        3,
        5,
        7
      ],
      "rationale": "A (correct): Gastric ulcer pain occurs 1-2 hours after eating, while duodenal ulcer pain occurs 2-4 hours after eating; gastric ulcers are tied to chronic risks such as long-term NSAID and anticoagulant use, which this client has. B (incorrect): Stress does NOT directly cause peptic ulcers (an outdated belief); it can only worsen an existing ulcer by raising acid. Her ibuprofen and H. pylori are the real aggressive factors, and H. pylori still needs treatment. C (correct): NSAIDs block prostaglandin synthesis; prostaglandins normally stimulate protective mucus and inhibit acid, so blocking them removes protection and increases acid. D (correct): Cimetidine is a CYP450 inhibitor with significant interactions (warfarin, phenytoin, theophylline); famotidine has much less interaction risk and is generally preferred, which matters for a client on warfarin. E (incorrect): PPIs bind to and irreversibly inhibit the H+/K+ ATPase proton pump, and they work better than H2 blockers. The sticky protective barrier is sucralfate, a mucosal protectant. F (correct): Sucralfate can decrease absorption of other drugs, so other medications are taken about 2 hours apart from it. G (incorrect): Antacids cause chelation with other drugs (binding that interferes with absorption), so they must be separated from other medications by 1-2 hours. H (correct): A severe ulcer can erode through all layers of the stomach wall (the P in HOP, perforation), and perforated ulcers are a cause of peritonitis, whose biggest sign is a rigid, board-like abdomen with sudden severe pain.",
      "topic": "Esophageal &amp; Gastric Disorders",
      "week": 5
    },
    {
      "stem": "A 27-year-old client has had months of crampy abdominal pain, fatigue, weight loss, and frequent bloody diarrhea. Colonoscopy shows continuous inflammation that begins at the rectum, with fragile tissue that bleeds easily. The provider starts sulfasalazine and plans infliximab if symptoms persist. Which of the following findings or actions are appropriate for the nurse to anticipate or take?",
      "options": [
        "Expect biopsy findings of granulomas and skip lesions with a cobblestone appearance, which are the hallmark pathology of this client's disease",
        "Watch for toxic megacolon, a rapid, life-threatening dilation of the large intestine, and know her colon cancer risk is much higher than with Crohn's",
        "Teach that bloody diarrhea is the hallmark of Crohn's disease, while watery diarrhea is the hallmark of the disease this client has, which guides diagnosis",
        "Mesalamine is the drug that splits into 5-ASA and sulfapyridine in the intestines, and sulfapyridine is responsible for most of its side effects",
        "Sulfasalazine is the better choice if she has a sulfa allergy, because 5-ASA, not sulfapyridine, is the component that triggers the reaction",
        "Because her disease is limited to the mucosa, her risk of deep vein thrombosis is not increased, so no VTE precautions are needed",
        "Infliximab infusions call for watching for infusion reactions and neutropenia, and CRP is the biomarker that is monitored during therapy",
        "Before the first infliximab infusion, vaccines and TB screening can be skipped because the drug acts only in the colon, not on the whole immune system"
      ],
      "answers": [
        1,
        6
      ],
      "rationale": "A (incorrect): Granulomas and skip lesions with cobblestoning are the hallmark findings of Crohn's disease. This client has ulcerative colitis (continuous from the rectum, bloody diarrhea), whose hallmarks are crypt abscesses and fragile granulation tissue. B (correct): Toxic megacolon is a rapid, life-threatening dilation of the large intestine and a serious UC complication, and UC carries a much higher colon cancer risk than Crohn's. C (incorrect): The diarrhea types are reversed: bloody diarrhea is the hallmark of UC (not typically seen with Crohn's), while Crohn's causes watery diarrhea. D (incorrect): It is sulfasalazine, a sulfonamide antibiotic, that converts to 5-ASA and sulfapyridine; mesalamine is simply another 5-ASA drug that can be given instead. E (incorrect): Sulfasalazine is contraindicated with a sulfa allergy precisely because it converts to sulfapyridine, which is the part responsible for most side effects and the reaction. F (incorrect): Both Crohn's and UC carry a high risk of VTE/DVT, so the mucosa-only nature of UC does not lower it. G (correct): Infliximab is given by infusion, is associated with infusion reactions and neutropenia, and requires therapeutic drug and biomarker monitoring, specifically CRP. H (incorrect): Infliximab suppresses the immune system (infection, cancer, and heart failure risk), so vaccines up to date, titers drawn, and TB/latent TB screening are required before starting.",
      "topic": "Lower GI Disorders",
      "week": 5
    },
    {
      "stem": "A 74-year-old client recovering from abdominal surgery has nausea, vomiting, and absent bowel sounds. Home medications include an SSRI taken every morning and an antipsychotic. The provider orders ondansetron, metoclopramide, and hydroxyzine, with the hydroxyzine written as IV for breakthrough nausea. Which of the following are accurate nursing considerations?",
      "options": [
        "Metoclopramide should be held in favor of ondansetron alone, because it lowers sphincter tone and slows peristalsis, worsening her absent bowel sounds",
        "With her antipsychotic on board, rigid muscles and fever are late findings of neuroleptic malignant syndrome that follow drowsiness and seizures",
        "Ondansetron plus her daily SSRI raises the risk of serotonin syndrome, so closer monitoring is needed, especially around the first dose",
        "Hydroxyzine relieves nausea by blocking H2 receptors in the stomach, the same mechanism as famotidine, so it also lowers her gastric acid",
        "Metoclopramide blocks dopamine, so with her antipsychotic the nurse watches for extrapyramidal symptoms such as restlessness or rigid limbs",
        "A constant urge to move would be recognized as tardive dyskinesia, the earliest extrapyramidal finding, so metoclopramide would be continued",
        "Moist skin, pallor, and a low body temperature after hydroxyzine would signal anticholinergic toxicity and need immediate reporting",
        "The hydroxyzine IV order should be clarified, because IV use can cause tissue damage, thrombosis, and gangrene, while the IM route is acceptable"
      ],
      "answers": [
        2,
        4,
        7
      ],
      "rationale": "A (incorrect): Metoclopramide INCREASES LES tone and peristalsis in the stomach and intestines; it is specifically used to turn peristalsis back on after a long surgery. B (incorrect): The order is reversed: the first signs of NMS are rigid muscles and fever, followed by drowsiness and confusion, which can ultimately progress to seizures. C (correct): Ondansetron affects serotonin; a daily SSRI (or SNRI, TCA, MAOI, buspirone, tramadol) plus ondansetron needs closer monitoring, especially on the first dose. D (incorrect): Hydroxyzine is an H1 blocker (inner ear), not an H2 blocker; H2 blockers such as famotidine are covered for acid reduction, a different purpose. E (correct): Metoclopramide blocks dopamine, and EPS is more common when it is combined with antipsychotics or used regularly; akathisia (restlessness), dystonia, and parkinsonism (tremor, rigid limbs) are examples. F (incorrect): A constant urge to move is akathisia; tardive dyskinesia is a LATE-onset finding of repetitive facial movements (lip smacking, tongue twisting), and EPS signs call for reporting, not continuing the drug. G (incorrect): The anticholinergic toxidrome is dry as a bone, red as a beet (flushing), and hot as a hare (hyperthermia), plus mad (mental status changes) and blind (blurred vision); moist skin, pallor, and low temperature are the opposite. H (correct): Never give hydroxyzine IV (tissue damage, thrombosis, gangrene); it can be given IM.",
      "topic": "GI Symptom Pharmacology",
      "week": 5
    },
    {
      "stem": "A 66-year-old client with a newly found small cell lung carcinoma becomes confused and lethargic and gains 3 kg in one week. Serum sodium is 118 mEq/L, urine is very concentrated, and urine output is low. Which of the following actions or expectations are appropriate?",
      "options": [
        "Anticipate desmopressin (DDAVP) to replace the missing ADH, which would correct her water imbalance and bring her sodium back up",
        "Expect urine output to climb toward 15 liters a day with a very high serum sodium as dehydration progresses over the next day",
        "A thiazide diuretic is the expected treatment for this condition because it raises urine osmolality and reduces her water retention",
        "Anticipate fluid restriction and question a loop diuretic order, since loop diuretics are given only when sodium exceeds 125 mEq/L",
        "Start demeclocycline now as first-line therapy, since it makes the kidneys more responsive to ADH and promotes water loss",
        "The lung tumor is a rare cause of this condition; morphine or SSRI use is far more likely to be responsible for her presentation",
        "Encourage extra oral fluids to raise her low urine output, since low output signals dehydration that fluids will correct",
        "Salt tablets are contraindicated here because added sodium would worsen her water retention and deepen her confusion"
      ],
      "answers": [
        3
      ],
      "rationale": "A (incorrect): Desmopressin (synthetic ADH) treats neurogenic diabetes insipidus, where ADH is deficient; this client has too much ADH (SIADH) and DDAVP would worsen the water retention. B (incorrect): Output up to 15 L/day with very high sodium and osmolality describes diabetes insipidus; in SIADH output is low and sodium is low. C (incorrect): A thiazide diuretic (HCTZ) is the treatment for nephrogenic diabetes insipidus, where it paradoxically increases urine osmolality; it is not the treatment for SIADH. D (correct): Fluid restriction is a core non-drug measure, and loop diuretics can be given ONLY if sodium is above 125 mEq/L, because at 118 a diuretic risks losing even more sodium. E (incorrect): Pharmacotherapy is generally not first-line in SIADH; demeclocycline (a tetracycline) is for chronic or refractory SIADH, and it makes the kidneys LESS sensitive to ADH. F (incorrect): A malignant tumor, specifically small cell carcinoma of the lung, is by far the most common cause of SIADH; drugs such as morphine and SSRIs are less common causes. G (incorrect): SIADH is fluid volume excess (water retention, weight gain), not dehydration, and fluid restriction is a core measure; extra fluids would worsen the hyponatremia. H (incorrect): Salt tablets may be given in SIADH, since the low sodium is dilutional; sodium is not what worsens the water retention.",
      "topic": "Endocrine Disorders",
      "week": 5
    },
    {
      "stem": "A 45-year-old client had a total thyroidectomy 2 days ago for Graves' disease. She has atrial fibrillation, takes warfarin, and has just started levothyroxine. She now reports muscle cramping and seems irritable. Which of the following are appropriate to anticipate or teach?",
      "options": [
        "Now that her Graves' disease is treated, relief from levothyroxine should be evident within the first week, so no improvement means the dose is too low",
        "Check for Trousseau's and Chvostek's signs, because the parathyroid glands can be damaged during thyroid surgery",
        "The cramping fits excess PTH, so calcitonin and a bisphosphonate are expected to lower her calcium and slow bone breakdown",
        "Her phosphate level is expected to be elevated, since low PTH leaves the kidneys retaining phosphate instead of excreting it",
        "Levothyroxine should be taken with breakfast and her warfarin so that food improves the absorption of both drugs",
        "Levothyroxine can increase the effect of warfarin, so bleeding risk is higher and the combination needs closer monitoring",
        "She still needs an eye exam because a Graves' history carries a risk of ophthalmopathy with exophthalmos that can impair vision",
        "Muscle weakness, hypertension, and kidney stones are the expected findings now, as excess calcium circulates after the surgery"
      ],
      "answers": [
        1,
        3,
        5,
        6
      ],
      "rationale": "A (incorrect): Levothyroxine takes about a month to improve symptoms, so no improvement after one week is expected and does not mean the dose is too low. B (correct): Any client who has had the thyroid removed should be monitored for hypocalcemia, since the parathyroids sit on or near the thyroid and can be damaged or removed; muscle cramping and irritability fit hypocalcemia, and Trousseau's and Chvostek's signs are checked. C (incorrect): The cramping reflects too LITTLE PTH (hypoparathyroidism, hypocalcemia). Calcitonin, bisphosphonates, and diuretics treat hyperparathyroidism; hypoparathyroidism is treated with synthetic PTH, normalized calcium, and vitamin D. D (correct): PTH normally increases phosphate excretion by the kidneys, so low PTH means the kidneys retain phosphate and levels rise; phosphate should be monitored. E (incorrect): Levothyroxine is taken on an empty stomach, about 30 minutes before eating, first thing in the morning, because food and other drugs reduce its absorption. F (correct): Levothyroxine increases the effect of warfarin and the risk of bleeding, so the combination needs closer monitoring. G (correct): Any patient with a history of hyperthyroidism or Graves' disease needs an eye exam; Graves' ophthalmopathy causes exophthalmos with periorbital edema and possible vision impairment. H (incorrect): Muscle weakness, hypertension, and kidney stones are manifestations of hyperparathyroidism (excess PTH, hypercalcemia); after thyroidectomy the concern is hypoparathyroidism with HYPOcalcemia.",
      "topic": "Thyroid &amp; Parathyroid Disorders",
      "week": 5
    },
    {
      "stem": "A nurse on a cardiac step-down unit is reviewing the plan of care for a 72-year-old woman with HFrEF and atrial fibrillation. Her medications include carvedilol, lisinopril, furosemide, spironolactone and digoxin, and the provider is weighing options to convert her rhythm. Which of the following are accurate or appropriate? Select all that apply.",
      "options": [
        "Before each dose a full-minute apical pulse is taken, and digoxin is held only if the rate falls below 50 bpm, because bradycardia below that point signals toxicity.",
        "If she is also anticoagulated with warfarin for her atrial fibrillation, adding amiodarone can lower her INR by 50 to 100 percent, so the warfarin dose may need to be raised.",
        "Amiodarone can be started alongside her digoxin without concern, since the two do not interact; the monitoring she needs is for thyroid, eye, lung and liver effects.",
        "Her age and sex place her at lower risk for digoxin toxicity than a younger man, so the main thing to avoid is calcium-rich dairy foods that raise intracellular calcium.",
        "Hypokalemia from her furosemide would raise her risk of digoxin toxicity, which is why her potassium is followed closely and supplemented as kidney function allows.",
        "Digoxin immune Fab should be given as soon as she reports mild nausea on digoxin, because early antidote use prevents the bradycardia that is the hallmark of toxicity.",
        "Furosemide and spironolactone are both pillars of HFrEF therapy because each one lowers hospitalizations and deaths, unlike digoxin, which is only added on top.",
        "If dofetilide is chosen to convert her atrial fibrillation, it can be started at home once a baseline QT interval is confirmed to be normal, since it is a maintenance drug."
      ],
      "answers": [
        4
      ],
      "rationale": "A (Incorrect): The full-minute apical pulse is correct, but the hold parameter is a pulse below 60 bpm, not 50; the nurse then notifies the provider and monitors the rhythm. B (Incorrect): The direction is reversed: amiodarone can INCREASE the INR by 50-100% when given with warfarin. C (Incorrect): Amiodarone increases digoxin toxicity risk, so the two are typically avoided together. The thyroid, eye, lung and liver (TELLS) monitoring is accurate but does not cancel the interaction. D (Incorrect): Older adults and women are at HIGHER risk of toxicity, along with patients on diuretics. Digoxin's calcium effect is at the cell level (Na+/K+-ATPase inhibition) and is NOT related to dietary calcium or milk intake. E (Correct): Diuretic-induced hypokalemia predisposes to digoxin toxicity (a classic risky combination), and prevention includes supplementing potassium as kidney function allows. F (Incorrect): Digoxin immune Fab is the antidote for severe toxicity in significantly symptomatic or unstable patients; mild nausea is managed by the lowest effective dose, levels and potassium, not the antidote. G (Incorrect): Spironolactone (the MRA) is a pillar and lowers hospitalizations and deaths, but furosemide is not a pillar: diuretics give symptom relief only with NO survival benefit. H (Incorrect): Because of the torsades de pointes risk, dofetilide is always started in the hospital on continuous telemetry, and it is not given with a prolonged QT or other QT-prolonging drugs.",
      "topic": "Cardiac Pharmacology",
      "week": 6
    },
    {
      "stem": "A 31-year-old man with a history of injection drug use is admitted with fever, chills, weight loss and a new heart murmur. The nurse notes tender raised nodules on his fingertips and flat painless spots on his soles, and infective endocarditis is suspected. Echocardiography and possible valve replacement are being discussed. Which of the following are accurate? Select all that apply.",
      "options": [
        "His IV drug use makes the tricuspid valve the most likely site of infection, since organisms introduced into a vein reach it first as blood enters the heart.",
        "The flat, non-tender spots on his soles are Roth spots, and the tender fingertip nodules are Janeway lesions, with tenderness being the feature that tells them apart.",
        "If the valve must be replaced, any active bloodstream infection must be cleared with antibiotics both before and after the surgery, not only afterward.",
        "Prosthetic heart valves call for antibiotics before dental work, which causes transient bacteremia; with IV drug use they are the main endocarditis risk groups.",
        "The nurse can rule out heart valve infection if later assessments find no murmur, since the murmur is typically loud and easy to auscultate in this condition.",
        "He should be prepared for a TEE as the standard first echocardiogram, because a TTE is the more invasive study that gives a closer, more detailed view.",
        "A stenotic aortic valve would cause syncope, lightheadedness and chest pain, whereas a leaking mitral valve would cause fatigue and dyspnea from backward flow.",
        "Septic emboli breaking off from a tricuspid vegetation travel to the lungs, whereas emboli from a left-sided valve can reach the brain, spleen, kidney or bowel."
      ],
      "answers": [
        0,
        2,
        3,
        6,
        7
      ],
      "rationale": "A (Correct): The tricuspid valve is the most commonly affected valve in endocarditis because it is the first valve blood meets, which is why IV drug users are especially at risk. B (Incorrect): The labels are swapped: the tender raised fingertip nodules are Osler's nodes and the flat non-tender palm or sole spots are Janeway lesions. Roth spots are seen on the retina during an eye exam. C (Correct): Per the lecture, that any active bloodstream infection must be cleared with antibiotics before and after valve replacement. D (Correct): Prosthetic valve patients need prophylactic antibiotics before dental work because dental work is a known source of transient bacteremia. The two named risk groups are prosthetic valves and IV drug users. E (Incorrect): Heart murmurs in endocarditis can be difficult to hear (auscultate), so a missing murmur does not rule it out; fever, chills, weight loss, inability to eat and muscle and joint pain are also symptoms. F (Incorrect): The roles are swapped: the TTE is the standard echocardiogram used to diagnose valve disease, and the TEE is the more invasive alternative with a closer view. G (Correct): Aortic stenosis gives the triad of syncope, lightheadedness and chest pain (coronary arteries branch just past the valve). Mitral regurgitation causes fatigue from reduced forward output and dyspnea from blood flowing back into the left atrium and pulmonary veins. H (Correct): Right-sided (tricuspid) septic emboli go to the lungs; left-sided emboli travel systemically to the brain, coronary arteries, spleen, kidney or bowel.",
      "topic": "Valve Disease",
      "week": 6
    },
    {
      "stem": "A nurse is monitoring several clients on a telemetry unit. Which of the following interpretations or actions are appropriate? Select all that apply.",
      "options": [
        "A fit marathon runner with a resting heart rate of 54 and no dizziness or confusion should receive atropine promptly to restore a normal rate.",
        "The monitor alarms for V-fib in a client who is chatting and smiling, so the nurse looks at the client and checks a pulse first, since a rhythm display can glitch.",
        "A client in atrial flutter with 3:1 conduction has three ventricular beats for every flutter wave, which is why the ventricular rate runs faster than the atrial rate.",
        "A client with frequent PACs has electrolytes and oxygenation status checked, since frequent PACs raise the risk of developing atrial fibrillation.",
        "A dehydrated client in sinus tachycardia at 128 should receive a beta blocker such as metoprolol first, with fluid replacement considered afterward.",
        "A client in sustained V-tach who still has a palpable pulse is stable enough to be watched on the monitor, with a rapid-response call made only if the pulse is lost.",
        "Digoxin toxicity is a recognized cause of both sinus bradycardia and PSVT, so a client on digoxin who develops either rhythm should be evaluated for toxicity.",
        "Frequent PVCs are treated with a drug directed at the ectopic focus, since electrolyte imbalance is only a minor cause of PVCs."
      ],
      "answers": [
        1,
        3,
        6
      ],
      "rationale": "A (Incorrect): Atropine is for symptomatic sinus bradycardia only; very fit people can live with a slower rate and are treated only if symptomatic. B (Correct): Telemetry can glitch and show a false V-fib waveform, so the nurse always looks at the actual client and checks a pulse before treating what the monitor shows. C (Incorrect): A 3:1 ratio means three atrial impulses for each one conducted to the ventricles, so the ventricular rate is SLOWER than the atrial rate (up to 250). D (Correct): PACs are generally benign, but frequent PACs raise atrial fibrillation risk, so the nurse checks electrolytes and oxygenation status. E (Incorrect): Fluid volume deficit is often one of the first signs seen as sinus tachycardia, and the underlying cause is treated first; beta blockers are for cardiac causes or after the cause is addressed and ruled out as the primary fix. F (Incorrect): Sustained V-tach (more than about 10-15 seconds) is a rapid-response emergency even with a pulse, because a pulse with V-tach can turn pulseless at any point. G (Correct): Digoxin toxicity appears among the causes of sinus bradycardia and of PSVT, and it is also listed as a cause of triggered activity. H (Incorrect): There is no direct drug treatment for PVCs; the underlying cause is treated, and electrolyte imbalance is the single biggest cause.",
      "topic": "Cardiac Dysrhythmias",
      "week": 6
    },
    {
      "stem": "A 66-year-old man who has smoked for 40 years reports calf cramping when he walks two blocks that resolves within minutes of sitting. His left foot turns pale when elevated and deep red when hanging down. Which statements regarding his condition and care are accurate? Select all that apply.",
      "options": [
        "The ankle-brachial index compares blood pressure in the calf with blood pressure in the thigh, and a value of 0.5 or below indicates severe arterial disease.",
        "A non-healing ulcer from his arterial disease would be expected at the ankle, whereas ulcers at the toes or top of the foot point to venous stasis.",
        "Cilostazol would be a reasonable drug for his claudication since it acts as both a platelet inhibitor and a vasodilator, but it has CYP450 drug interactions.",
        "Because exertion brings on his calf pain, he should be taught to avoid walking, since activity does not help the body build collateral circulation around the blockage.",
        "Raynaud's phenomenon is the autoimmune condition strongly tied to smokers that causes permanent arterial occlusion, whereas Buerger disease is sudden vasospasm of small arteries.",
        "His leg disease is the same atherosclerosis seen in coronary artery disease, so a statin plus an antiplatelet or anticoagulant such as aspirin would be expected.",
        "Unlike his picture, chronic venous insufficiency typically produces shiny, thick, hairless skin and burning, heavy legs, with ulcers forming at the ankles.",
        "If he mentions erectile dysfunction, it is unrelated to his peripheral artery disease, because reduced pelvic and leg arterial flow does not cause it."
      ],
      "answers": [
        2,
        5
      ],
      "rationale": "A (Incorrect): The ABI compares blood pressure at the ANKLE to the ARM (normal about 1.0-1.4; 0.5 or below is severe disease). The calf-to-thigh comparison is wrong. B (Incorrect): The sites are swapped: arterial ulcers form at the toes or the top (dorsum) of the foot, and venous stasis ulcers form at the ankles. C (Correct): Cilostazol (Pletal) is both a platelet inhibitor and a vasodilator and has CYP450 drug interactions. D (Incorrect): Increased physical activity is part of treatment because it encourages collateral circulation around blocked vessels. E (Incorrect): The conditions are swapped: thromboangiitis obliterans (Buerger disease) is the autoimmune, smoking-associated cause of permanent occlusion, and vasospasm describes Raynaud's phenomenon. F (Correct): Lower-extremity atherosclerosis is the same disease process as CAD in a different vascular bed, and most PAD patients are placed on a statin plus an antiplatelet or anticoagulant (aspirin, clopidogrel, warfarin, apixaban). G (Incorrect): Shiny, thick, hairless (trophic) skin is an ARTERIAL finding. Venous insufficiency gives aching and tiredness (NOT burning or heaviness), leathery dark skin, flaking and edema; only the ankle ulcer site is accurate. H (Incorrect): Erectile dysfunction is a listed manifestation of PAD and can occur when pelvic or lower-extremity arterial flow is affected.",
      "topic": "Peripheral Vascular Disease",
      "week": 6
    },
    {
      "stem": "A nurse cares for two clients. Client A has severe COPD with distended neck veins, dependent edema, abdominal fluid accumulation and little desire to eat. Client B has uncontrolled high blood pressure with trouble breathing when lying flat, nocturnal breathlessness and crackles. Which of the following are accurate? Select all that apply.",
      "options": [
        "Client A's heart failure from severe COPD would be expected to show crackles, frothy sputum and orthopnea before any dependent edema, because COPD causes left-sided failure.",
        "Client B's orthopnea, PND and crackles reflect pulmonary congestion from left-sided failure, and poorly controlled hypertension is its most common cause.",
        "If an echocardiogram showed an ejection fraction of 38% in Client B, he would be classified as having HFpEF, since the muscle squeezes well but cannot relax and fill.",
        "Client A's jugular venous distension, edema and ascites are systemic signs of right-sided failure, and his poor appetite comes from venous congestion of the GI tract.",
        "The instructor specifically noted that stable angina alone is not a risk factor for heart failure, whereas a prior myocardial infarction is a risk factor.",
        "In the hemodynamic chain of heart failure, preload rises first, which then lowers contractility and finally increases afterload.",
        "A history of marijuana use would be counted with alcohol, cocaine and crack as a heart failure risk factor in the same way for either client, since all four are substances.",
        "Either client could have an episode of decompensated heart failure, with new or worsening signs usually driven by volume overload, that sends a client to the ER."
      ],
      "answers": [
        1,
        3,
        4,
        7
      ],
      "rationale": "A (Incorrect): Severe COPD is the most common cause of RIGHT-sided failure, which backs up into the systemic venous system (JVD, edema, ascites). Crackles, frothy sputum and orthopnea are left-sided, pulmonary findings. B (Correct): Left-sided failure backs up into the lungs (orthopnea, PND, crackles), and poorly controlled hypertension is its most common cause. C (Incorrect): An EF under 40% defines HFrEF (systolic failure, impaired pumping). HFpEF is an EF of 40-50% with preserved squeeze and impaired filling. D (Correct): Right-sided failure causes systemic congestion; ascites and poor appetite both come from venous congestion backing up into the GI tract. E (Correct): The instructor called out stable angina by itself as NOT a heart failure risk factor; having had an MI is one (about 22% of men and 46% of women who have an MI develop HF). F (Incorrect): The order is wrong: contractility decreases FIRST, which increases preload (fluid backs up), which then increases afterload. G (Incorrect): Marijuana, unlike alcohol, cocaine and crack, is not currently associated with heart failure risk; the instructor called this out specifically. H (Correct): Decompensated heart failure is an episode within chronic failure of new or worsening signs, usually driven by volume overload, often leading to ER visits and hospitalization.",
      "topic": "Ischemic Heart Disease &amp; Heart Failure",
      "week": 6
    },
    {
      "stem": "A nurse is reviewing the chart of a 58-year-old client with a colon primary tumor. Pathology reports a grade 3 tumor with a TNM classification of T2 N1 M0, and an unrelated encapsulated, movable subcutaneous mass is described as benign. A newly licensed nurse makes several statements while reviewing the record. Which statements are accurate? Select all that apply.",
      "options": [
        "N1 means the cancer has spread to the most distant or numerous lymph nodes, whereas N2 means only the closest regional node is involved, so the nurse should read N1 as the more advanced nodal finding",
        "The entry N1 M0 tells the nurse that cancer cells have reached the closest regional node or a small number of regional nodes, but no metastasis to other organs has been found",
        "Grade 3 means the cells look poorly differentiated under the microscope, and this also fixes the cancer at stage III, since stage is assigned from the same microscopic cell appearance that determines grade in the pathology report",
        "When cells erode and shed from the colon tumor into the abdominal cavity and implant elsewhere, the process is called implantation, while direct growth into a neighboring organ is called seeding",
        "If this colon cancer spreads through the bloodstream, the liver is the expected first stop because blood passes through the portal vein first, and a liver tumor biopsy would show cells resembling the colon tumor",
        "A benign tumor like the subcutaneous mass can become lethal only by metastasizing to a critical organ, since a benign tumor that stays in place is never dangerous regardless of its size or location",
        "A liver secondary tumor can grow without developing its own blood vessels, because cells trapped in the liver capillaries already sit in an organ that has a rich blood supply"
      ],
      "answers": [
        1,
        4
      ],
      "rationale": "Correct: (B) N1 means spread to the closest regional node or a small number of regional nodes, and M is simply yes or no, so M0 means no metastasis to other organs. (E) With vascular spread, cells penetrate the veins draining the tumor and most blood goes through the portal vein before general circulation, so the liver is the first stop (colon cancer is listed as metastasizing to the liver); under the microscope, cells at a secondary site look like the cells of the primary tumor. Incorrect: (A) The values are swapped: N1 is the closest regional node or a small number of regional nodes, while N2 is the most distant or numerous nodes, so N1 is the less extensive nodal finding. (C) Grade (1 to 3) is based only on how the cells look under the microscope (grade 3 = poorly differentiated or anaplastic); stage is generally based on lymph node spread and metastasis, and stage III means regional spread, so grade 3 does not fix the stage. (D) The terms are reversed: seeding is tumors eroding and shedding into body cavities (intraperitoneal seeding), while implantation is direct expansion into adjoining tissue (prostate into bladder). (F) A benign tumor does not metastasize; it is generally harmless but can be lethal if it grows large enough to mechanically interrupt a critical organ such as the brain or a lung. (G) A tumor must develop its own blood vessels and connect to the existing blood supply to establish itself in a target organ, and how fast a secondary tumor grows depends on its angiogenesis rate.",
      "topic": "Cancer Fundamentals, Metastasis &amp; Etiology",
      "week": 7
    },
    {
      "stem": "A nurse at a rural Kentucky community clinic is preparing teaching for four clients: a 64-year-old former smoker with a 40-pack-year history whose home has never been tested for radon; a 47-year-old whose mother had breast and ovarian cancer; a 24-year-old asking whether the HPV vaccine is worth getting; and a 52-year-old whose colonoscopy report describes adenomatous polyps. Which of the following teaching points or actions are appropriate? Select all that apply.",
      "options": [
        "Radon testing of the first client's home is reasonable and mitigation systems exist, because radon is a known carcinogen and promoter that compounds the risk from smoking",
        "The fourth client should expect a flexible sigmoidoscopy to examine the entire colon and be repeated about every 10 years, while a colonoscopy is the less intensive exam of only one third of the colon, which is why it is done less often",
        "Radon testing is unnecessary for the first client because radon raises lung cancer risk only in current smokers, so his former-smoker status removes that concern",
        "With the second client's family history of breast and ovarian cancer, early BRCA testing and genetic counseling are warranted, and a positive result may lead some women to choose preventive mastectomy or oophorectomy",
        "BRCA1 and BRCA2 mutations are linked only to breast and ovarian cancer, so the second client's family history raises no added concern for colon or pancreatic cancer",
        "The 24-year-old can still receive the HPV vaccine because it is best given at 11 to 12 but can be received up to age 45, and she should keep having Pap smears because prevention relies on the vaccine plus frequent screening",
        "The fourth client's lack of symptoms is not reassuring about her polyps, since polyps usually cause no symptoms and are generally picked up only through screening such as colonoscopy",
        "The fourth client's adenomatous polyps are the less common type and typically do not turn into cancer, unlike hyperplastic polyps, which carry the higher potential to become cancer"
      ],
      "answers": [
        0,
        3,
        5,
        6
      ],
      "rationale": "Correct: (A) Radon is a known promoter and carcinogen that is very common in Kentucky, its effect compounds with smoking, and radon testing plus mitigation systems are the recommended response, so a former smoker still warrants testing. (D) A family history of breast or ovarian cancer is a big red flag; providers often test for BRCA mutations early, genetic counseling is common, and women with the mutations often choose a preventive mastectomy or oophorectomy. (F) The HPV vaccine is best received at age 11 to 12 but can be received up to age 45, so a 24-year-old is still a good candidate, and cervical cancer is essentially prevented by the vaccine plus frequent screening, so Pap smears continue. (G) Polyps are usually asymptomatic (only some cause bleeding, bowel changes, or pain), so they are mostly found through screening colonoscopy or flexible sigmoidoscopy. Incorrect: (B) The scopes are reversed: flexible sigmoidoscopy is less intensive because it examines only one third of the colon, while a full colonoscopy is the whole-colon exam, usually done only about every 10 years. (C) Radon is a known promoter and carcinogen on its own and its effect compounds with smoking, so a former smoker still warrants testing and mitigation; the risk is not limited to current smokers. (E) BRCA1 and BRCA2 mutations are linked to breast, ovarian, colon, and pancreatic cancer (and prostate cancer in males), so the concern is broader than breast and ovarian. (H) The types are swapped: adenomatous polyps are the most common type and have the higher potential to become cancer, while hyperplastic polyps are less common and typically do not turn into cancer.",
      "topic": "Lung, Breast, Cervical &amp; Colorectal Cancer",
      "week": 7
    },
    {
      "stem": "A 46-year-old with lymphoma is admitted to begin a regimen of cyclophosphamide (alkylating agent), doxorubicin (antitumor antibiotic), vincristine (vinca alkaloid), and methotrexate (antimetabolite), with ondansetron and promethazine ordered for nausea. The nurse plans care and teaching. Which statements are accurate? Select all that apply.",
      "options": [
        "The client should be taught to report blood in the urine or new bladder problems promptly to the oncology team, because a metabolite of the alkylating agent cyclophosphamide can cause hemorrhagic cystitis",
        "A baseline echocardiogram and ongoing ejection fraction monitoring are expected with doxorubicin, and the team would avoid adding another cardiotoxic agent because overlapping toxicity between drugs is avoided",
        "Vincristine is the drug in this regimen classified as FDA category X, so it is the one that requires a birth control discussion, whereas methotrexate is fatal if given intrathecally and is therefore IV only",
        "Vincristine does not typically cause significant bone marrow suppression, which makes it useful to combine with the myelosuppressive drugs, and peripheral neuropathy is the hallmark toxicity to assess for with it",
        "Hydration should be maintained for high-dose methotrexate because of nephrotoxicity, and fertility preservation such as sperm banking or egg freezing should be discussed with the client before treatment starts",
        "Vincristine is the only vesicant among the cytotoxic drugs, so extravasation precautions are not needed for the alkylating agent cyclophosphamide, the antitumor antibiotic doxorubicin, or the antiemetic promethazine",
        "The client should be taught that about 7 to 14 days after treatment is the nadir, the lowest point of white cells, red cells, and platelets and the time of highest risk for infection, anemia, and bleeding",
        "Promethazine is best given by IV piggyback after confirming the IV works and diluting it if possible, because gangrenous extravasation is one of its two black box warnings even though it is just an antiemetic"
      ],
      "answers": [
        0,
        1,
        3,
        4,
        6,
        7
      ],
      "rationale": "Correct: (A) Cyclophosphamide, an alkylating agent, can cause hemorrhagic cystitis from a metabolite, so blood in the urine or bladder problems are reported. (B) Doxorubicin, the antitumor antibiotic, causes cardiotoxicity with cumulative dosing (monitor EF and a baseline echocardiogram; it can appear acutely or years later), and the team avoids overlapping toxicity, for example not combining two cardiotoxic chemotherapy types. (D) Vincristine does not typically cause significant bone marrow suppression, which is why it combines well with myelosuppressive drugs, and peripheral neuropathy is its hallmark side effect. (E) Methotrexate commonly causes nephrotoxicity at high doses (keep the client hydrated), and any chemotherapy can impair fertility, so sperm banking or egg freezing should be discussed before treatment. (G) The nadir is the lowest point of WBCs, RBCs, and platelets, about 7 to 14 days after chemotherapy, and the time of highest risk for infection, anemia, and bleeding. (H) Promethazine is best given IV piggyback because of extravasation risk, confirm the IV works before pushing, dilute it if you can; its black box warnings are use in children under 2 and gangrenous extravasation. Incorrect: (C) The drugs are swapped: methotrexate is FDA category X (teratogenic, birth control or fertility discussion needed), while vincristine is the vinca alkaloid that is given IV only because intrathecal administration is fatal. (F) Vincristine is a significant vesicant, but cyclophosphamide is an extreme vesicant and many cytotoxic agents are vesicants, so extravasation risk is not unique to vincristine; promethazine also carries gangrenous extravasation as a black box warning, so IV site checks are needed for it too.",
      "topic": "Chemotherapy, Antineoplastic Drugs &amp; Antiemetics",
      "week": 7
    },
    {
      "stem": "A 72-year-old woman with knee osteoarthritis, a bone density T-score of -3.1, and a prior fragility fracture takes alendronate weekly. After a fall at home she is admitted with a suspected displaced hip fracture, and the nurse plans her care. Which of the following are accurate? Select all that apply.",
      "options": [
        "Raloxifene and alendronate must both be stopped at least 72 hours before a planned procedure, because both mimic estrogen and increase the risk of clotting",
        "Severe groin pain, an externally rotated and shortened leg, and little bruising make a displaced hip fracture less likely, because these fractures normally produce extensive bruising",
        "Because the added deaths after a hip fracture come from immobility complications rather than the fracture itself, the nurse should prioritize watching for pneumonia, skin breakdown, sepsis, and blood clots",
        "If compartment syndrome develops under a tight cast, the nurse should expect pain out of proportion and rapidly developing non-pitting edema, and it is managed with IV antibiotics rather than a fasciotomy to relieve the pressure",
        "Her knee osteoarthritis pain should be deep and aching with exertion and relieved by rest, and the wrists, elbows, and ankles are the other joints most often involved",
        "For her alendronate teaching, she should take it once a week with one sip of water in the morning, apart from calcium, and stay upright afterward to protect the esophagus",
        "Estrogen replacement is recommended for her osteoporosis because the drop in estrogen after menopause drives her bone loss and the benefit outweighs the clot and cancer risks",
        "Sudden hypoxemia and a falling level of consciousness after a long bone fracture should raise concern for fat embolism even before a petechial rash appears, since the rash is often the last symptom"
      ],
      "answers": [
        2,
        5,
        7
      ],
      "rationale": "Correct: (C) Deaths after a hip fracture (risk up about 2.5 to 4 times) do not come from the fracture itself but from immobility-related complications: sepsis, skin breakdown, pneumonia, and blood clots. (F) Alendronate has about 1% bioavailability (juice or coffee cuts it by about 60%), is typically given once a week, must not be taken with calcium, is taken with one sip of water in the morning, and she must stay upright because of the risk of esophageal ulceration. (H) Fat embolism follows long bone fractures; the triad is hypoxemia, altered level of consciousness, and a petechial rash, which is often the last symptom. Incorrect: (A) The 72-hour rule belongs to raloxifene, a SERM that mimics estrogen and raises clotting risk; alendronate binds bone and inhibits osteoclasts, and its safety concern is esophageal ulceration, not estrogen-like clotting. (B) These findings fit a displaced hip fracture: the leg is externally rotated and shortened, groin pain is severe, and there is typically little bruising because the fracture is usually encapsulated. (D) Compartment syndrome does cause pain out of proportion and quickly developing non-pitting edema, but it is treated with fasciotomy, not antibiotics. (E) The OA pain pattern is correct (deep aching with exertion, relieved by rest), but the wrists, elbows, and ankles are the joints typically spared; OA affects the spine, hip, knee, hands, and big toe. (G) Estrogen replacement is not recommended for osteoporosis because its risks (blood clots, breast cancer, other cancers) are just too high; bisphosphonates such as alendronate are first line.",
      "topic": "Osteoporosis, Fractures &amp; Osteoarthritis",
      "week": 7
    },
    {
      "stem": "At a rheumatology clinic, a nurse sees three clients: a 47-year-old woman with symmetric joint swelling and morning stiffness lasting more than an hour who is starting methotrexate; a 55-year-old man with gout and diabetes who takes an anticoagulant and an oral diabetes drug and is starting allopurinol; and a 26-year-old woman with systemic lupus erythematosus. Which of the following nursing statements or actions are accurate? Select all that apply.",
      "options": [
        "Allopurinol is started during an acute attack because it reduces the inflammatory response to urate crystals, and NSAIDs are reserved for clients who cannot take it",
        "Allopurinol can increase the effects of warfarin and of hypoglycemic agents such as metformin, so the man's INR and blood sugar are monitored closely, plus a CBC for agranulocytosis and aplastic anemia",
        "Probenecid is a xanthine oxidase inhibitor that prevents uric acid production, so it is the drug chosen for the man if his gout comes from overproduction of uric acid",
        "The first woman's symmetric, spongy, warm joint swelling fits rheumatoid arthritis, and Heberden's nodes at her distal finger joints would further support that diagnosis, since nodes are a hallmark of RA",
        "Methotrexate must be taken once weekly, never daily, with folic acid replacement, and she should avoid alcohol and report signs of infection promptly because of liver toxicity and a high infection risk",
        "Methotrexate carries the roughly 1% retinopathy risk, so she should report blurry vision, while hydroxychloroquine is the chemo drug that is toxic to the liver and marrow and needs AST, ALT, and CBC monitoring",
        "The lupus client should be taught that sunlight, infection, stress, and abruptly stopping a medicine can trigger a flare, and that worsening fatigue, pain, or headache may be an early warning of one",
        "Lupus immune complexes can land in any organ, and the kidney glomeruli are the most common site, with nearly all lupus clients eventually developing kidney complications"
      ],
      "answers": [
        1,
        4,
        6
      ],
      "rationale": "Correct: (B) Allopurinol can increase the effects of warfarin (monitor INR) and of hypoglycemic agents such as metformin (monitor blood sugar, since hypoglycemia is possible), and it carries a risk of agranulocytosis and aplastic anemia (monitor WBC and CBC). (E) Methotrexate is given once per week, never daily (daily dosing can be fatal), with folic acid replacement because it interferes with folate metabolism; no alcohol because it is toxic to the liver; and the client has a very high infection risk and should seek care ASAP for signs of infection. (G) Lupus flare triggers are sunlight, infection, abruptly stopping a medicine, and stress; warning signs include more severe fatigue, pain, and headache. Incorrect: (A) Allopurinol is prophylaxis only, not for acute attacks, and takes 2 to 6 weeks to work; NSAIDs are the drug of choice for acute attacks (steroids only if NSAIDs cannot be taken), and reducing the inflammatory response to urate crystals is the action described for colchicine. (C) Allopurinol, the xanthine oxidase inhibitor, is the drug for gout from overproduction; probenecid is a uricosuric that inhibits reabsorption and can be used alone or in combination with allopurinol. (D) RA swelling is spongy, soft, and warm, but Heberden's and Bouchard's nodes are OA features; RA instead produces swan deformity and subluxations. (F) The drugs are swapped: methotrexate is the chemo drug that is toxic to the liver (monitor AST, ALT, alk phos) and suppresses bone marrow (monitor CBC), while hydroxychloroquine is better tolerated and carries about a 1% chance of retinopathy, so vision problems are reported. (H) The kidney glomeruli are the most common site, but about half of lupus clients, not nearly all, develop kidney complications.",
      "topic": "Rheumatoid Arthritis, Gout &amp; Lupus",
      "week": 7
    }
  ]
};

/* Display order for the topic-breakdown strip at the top of the page. */
window.TOPIC_ORDER = [
  "Antimicrobials &amp; Antibiotics (ABX)",
  "Antivirals",
  "HIV &amp; Antiretroviral Therapy (ART)",
  "Upper Respiratory Infections (URI)",
  "Pneumonia &amp; Tuberculosis",
  "Anemia &amp; Polycythemia",
  "Obstructive Airway Disorders",
  "Renal Disorders",
  "Acute Kidney Injury &amp; Chronic Kidney Disease",
  "Male Reproductive Disorders",
  "Visual &amp; Sensory Disorders",
  "Liver Anatomy, Function &amp; Jaundice",
  "Viral Hepatitis (A, B &amp; C)",
  "Cirrhosis &amp; Liver Failure",
  "Gallbladder &amp; Pancreatic Disorders",
  "Esophageal &amp; Gastric Disorders",
  "Lower GI Disorders",
  "GI Symptom Pharmacology",
  "Endocrine Disorders",
  "Thyroid &amp; Parathyroid Disorders",
  "Cardiac Pharmacology",
  "Valve Disease",
  "Cardiac Dysrhythmias",
  "Peripheral Vascular Disease",
  "Ischemic Heart Disease &amp; Heart Failure",
  "Cancer Fundamentals, Metastasis &amp; Etiology",
  "Lung, Breast, Cervical &amp; Colorectal Cancer",
  "Chemotherapy, Antineoplastic Drugs &amp; Antiemetics",
  "Osteoporosis, Fractures &amp; Osteoarthritis",
  "Rheumatoid Arthritis, Gout &amp; Lupus"
];
