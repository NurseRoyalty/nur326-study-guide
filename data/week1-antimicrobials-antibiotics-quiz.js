/* ============================================================
   week1-antimicrobials-antibiotics-quiz-quiz.js — inline Practice Questions for Antimicrobials & Antibiotics — Practice Questions.

   PROVENANCE: all stems, options, and rationales are sourced
   exclusively from week1-antimicrobials-antibiotics.html's own lecture content —
   none of it is from outside pharmacology knowledge. Generated
   2026-08-23 per the user's request for Week 1 practice questions,
   NCLEX NGN/clinical-judgment style, answer-position rotated,
   checked against the four shuffle-surviving defects in CLAUDE.md.
   The identical question set also lives in data/quiz-bank.js under
   this topic, for the Build Your Own Exam picker.
   ============================================================ */
window.EXAM_DATA = {
  id: "week1-antimicrobials-antibiotics-quiz",
  title: "Antimicrobials & Antibiotics — Practice Questions",

  questions: [
    {
      stem: "A nurse is preparing to draw blood cultures for a patient with a new fever and an existing central venous catheter. Which action best reduces the risk of a false-positive culture result?",
      options: [
        "Draw the sample from a peripheral vein rather than the central line",
        "Draw both culture bottles from the central line to save time",
        "Draw only one culture bottle instead of two separate bottles",
        "Wait to draw the culture until after the first antibiotic dose is given"
      ],
      answer: 0,
      rationale: "Surface bacteria on central lines and ports commonly contaminate samples, so a peripheral stick is preferred whenever possible. The closest distractor is drawing from the central line 'to save time' — this is tempting because it avoids an extra stick, but the passage specifically warns that central-line/port draws commonly contaminate results, which is why a peripheral draw is preferred despite the added effort."
    },
    {
      stem: "A nurse is caring for a patient in the emergency department with suspected bacterial meningitis. The provider orders IV antibiotics to be given immediately, before culture results return. Which of the following best explains this decision?",
      options: [
        "Meningitis cultures cannot grow properly once bacteria have colonized the CNS",
        "Meningitis is one of the situations where treatment cannot wait for culture results",
        "Meningitis antibiotics are only effective if started within one hour of symptom onset",
        "Meningitis cultures do not require separate aerobic and anaerobic bottles"
      ],
      answer: 1,
      rationale: "Meningitis is explicitly named as one of the exceptions (along with a critically ill/rapidly declining patient or severe sepsis) where treatment can't wait on culture results. The closest distractor claims cultures 'cannot grow properly' after CNS colonization — this sounds like a lab-science explanation but isn't stated anywhere on the page; the actual reasoning given is about not delaying treatment, not about culture viability."
    },
    {
      stem: "A student nurse states, 'A bacteriostatic drug directly kills the bacteria, while a bactericidal drug only slows its growth.' The instructor should correct this statement by explaining that...",
      options: [
        "bactericidal drugs slow bacterial growth without killing the organism",
        "bacteriostatic drugs work by disrupting the bacterial cell wall until it lyses",
        "bactericidal drugs kill the organism outright, unlike bacteriostatic drugs",
        "both terms actually describe drugs that block folic acid synthesis pathways"
      ],
      answer: 2,
      rationale: "The passage defines bactericidal as killing the bacteria outright and bacteriostatic as only inhibiting growth/reproduction — the reverse of the student's statement. The closest distractor simply restates the student's original (backwards) claim about bactericidal drugs, which is exactly the misconception being corrected, not the correction itself."
    },
    {
      stem: "A patient presents with a severe infection, and the organism has not yet been identified. The provider starts an antibiotic empirically that is effective against many organism types. Which statement best reflects the rationale for this choice?",
      options: [
        "Broad-spectrum drugs are narrow-spectrum drugs given at a higher concentration",
        "Narrow-spectrum drugs are preferred whenever the causative organism is unknown",
        "Broad-spectrum antibiotics remove the need for a culture and sensitivity test",
        "Broad-spectrum antibiotics cover many organism types when the organism is not yet known"
      ],
      answer: 3,
      rationale: "Broad spectrum is described as a 'shotgun approach' used specifically when the organism isn't known yet or hasn't cultured out. The closest distractor flips narrow/broad spectrum indications — narrow spectrum actually requires knowing the organism and its sensitivities, the opposite of this scenario."
    },
    {
      stem: "A nurse needs to schedule peak and trough lab draws for a patient receiving IV gentamicin. Which timing is correct?",
      options: [
        "Draw the trough about 30 minutes before the next dose and the peak about 30 minutes after the infusion finishes",
        "Draw the peak about 30 minutes before the next dose and the trough about 30 minutes after the infusion finishes",
        "Draw both the peak and trough immediately before the next dose is due",
        "Draw the peak level about 30 minutes after the oral tablet is swallowed"
      ],
      answer: 0,
      rationale: "The mnemonic 'PEAK after, TROUGH before' matches option 0 exactly. The closest distractor simply swaps which level is drawn before versus after, which would give an inaccurate peak/trough result. The oral-dosing option is also wrong since the page states peaks are only drawn for IV drugs, but the before/after swap is the more tempting error."
    },
    {
      stem: "A patient receiving IV vancomycin develops flushing and itching of the neck and upper body during the infusion, with a stable blood pressure. What is the most appropriate nursing action?",
      options: [
        "Stop the infusion immediately and notify the provider of a suspected anaphylactic reaction",
        "Slow the infusion rate, since this reaction is consistent with Red Man syndrome",
        "Administer a stat dose of oral vancomycin to reduce systemic absorption",
        "Continue the infusion at the same rate and document it as an expected effect"
      ],
      answer: 1,
      rationale: "Red Man syndrome (flushing, itching, sometimes tachycardia/hypotension) results from infusing vancomycin too fast, and the fix is to slow the infusion, not stop the drug. The closest distractor — stopping the infusion for suspected anaphylaxis — is tempting because the symptoms could look allergic, but the page specifically distinguishes this reaction as rate-related rather than a reason to discontinue therapy."
    },
    {
      stem: "A patient has been on IV vancomycin for a resistant gram-positive infection for one week. Which combination of assessments best reflects the toxicities the nurse should monitor for?",
      options: [
        "Liver function, due to this drug's hepatotoxic risk",
        "QT interval and seizure threshold",
        "Renal function, hearing changes, and platelet counts",
        "Joint pain and photosensitivity reactions"
      ],
      answer: 2,
      rationale: "Vancomycin's stated toxic effects are nephrotoxicity, reversible hearing loss, and thrombocytopenia — matching renal function, hearing, and platelets. The closest distractor, QT interval and seizure threshold, is actually the levofloxacin (fluoroquinolone) toxicity profile described on the page, not vancomycin's."
    },
    {
      stem: "A patient with a documented history of anaphylaxis to penicillin is being considered for a cephalosporin to treat a serious infection. What is the most important consideration for the nurse to communicate to the provider?",
      options: [
        "Cross-reactivity is common, so cephalosporins should be avoided after any penicillin reaction",
        "Cephalosporins are contraindicated in pregnancy, so an alternative should be selected",
        "A sulfa-based antibiotic would be a safer alternative given this allergy history",
        "Cross-reactivity is more likely because this reaction was anaphylactic rather than a mild rash"
      ],
      answer: 3,
      rationale: "The page states cross-reactivity is rare (1-4%) but is still avoided when the original penicillin reaction was anaphylactic rather than just a rash — matching option 3. The closest distractor overstates cross-reactivity as 'common,' when the page explicitly calls it rare; it also wrongly implies all penicillin reactions warrant avoidance rather than specifically anaphylactic ones."
    },
    {
      stem: "A nurse reviews a new order for piperacillin-tazobactam (Zosyn) and recalls that tazobactam is included to address antibiotic resistance. What is tazobactam's role in this combination?",
      options: [
        "It inhibits the beta-lactamase enzyme that would otherwise inactivate the antibiotic",
        "It blocks a kidney enzyme that would break the antibiotic down too quickly",
        "It provides additional gram-negative coverage as a second antibiotic",
        "It is given separately from the antibiotic to prevent nephrotoxicity"
      ],
      answer: 0,
      rationale: "Drugs ending in '-bactam' are beta-lactamase inhibitors that protect the antibiotic from being broken down by bacterial beta-lactamase. The closest distractor describes cilastatin's actual role (blocking the kidney enzyme dehydropeptidase that breaks down imipenem) — a real page fact, but attributed to the wrong drug."
    },
    {
      stem: "A patient has a staphylococcal skin infection, and cultures show the organism produces penicillinase. Which penicillin is the most appropriate choice?",
      options: [
        "Amoxicillin, since it is preferred for oral dosing",
        "Nafcillin, since it resists breakdown by penicillinase",
        "Penicillin G, since it has broad gram-positive coverage",
        "Piperacillin-tazobactam, since it covers pseudomonas"
      ],
      answer: 1,
      rationale: "Nafcillin is specifically named as the penicillinase-resistant penicillin and the drug of choice when the organism secretes penicillinase, which is common with staph infections. The closest distractor, amoxicillin, is a real fact about oral preference for aminopenicillins, but amoxicillin resistance is described as rising, not penicillinase resistance."
    },
    {
      stem: "A nurse is caring for an ICU patient started on IV piperacillin-tazobactam for a pseudomonas infection. Which lab values should the nurse monitor closely while the patient is on this medication?",
      options: [
        "Liver enzymes and INR",
        "Hearing tests and creatinine",
        "Platelet function and renal status",
        "QT interval and white blood cell count"
      ],
      answer: 2,
      rationale: "The page specifically instructs watching platelet function and renal status with extended-spectrum piperacillin-tazobactam. The closest distractor, hearing tests and creatinine, describes aminoglycoside monitoring (ototoxicity and nephrotoxicity), not the platelet/renal focus given for this drug."
    },
    {
      stem: "A provider needs to select a cephalosporin for a patient with bacterial meningitis. Which characteristic makes ceftriaxone an appropriate choice?",
      options: [
        "It has the strongest activity against pseudomonas among the cephalosporins",
        "It is dosed multiple times daily to maintain CNS drug levels",
        "It has minimal CNS penetration and is paired with a carbapenem",
        "It crosses the blood-brain barrier and is dosed once daily"
      ],
      answer: 3,
      rationale: "Ceftriaxone is described as once-daily dosing that crosses the blood-brain barrier, making it useful for meningitis. The closest distractor attributes 'minimal CNS penetration' to ceftriaxone, but that description actually belongs to first-generation cephalosporins like cefazolin on the page."
    },
    {
      stem: "A nurse is administering IV meropenem to a patient with a history of a seizure disorder. What is the priority nursing consideration?",
      options: [
        "Monitor closely for seizures, a known risk with this drug class",
        "Infuse the dose over 24 hours to reduce cardiotoxicity",
        "Request a switch to imipenem-cilastatin, since it carries a lower seizure risk than meropenem",
        "Pair the dose with cilastatin to prevent seizure activity"
      ],
      answer: 0,
      rationale: "Carbapenems carry a real risk of drug-induced seizures, so close monitoring is the priority in a patient with a seizure history. The closest distractor reverses a real fact: the page states meropenem is used more often specifically because it has a lower seizure risk than imipenem, not the other way around."
    },
    {
      stem: "A nurse attends an infection-control in-service about carbapenem-resistant Enterobacteriaceae (CRE). Which statement about CRE should the nurse identify as accurate?",
      options: [
        "CRE infections are resistant to vancomycin but respond well to carbapenems",
        "CRE is a public health emergency because carbapenems are the broadest-spectrum option left",
        "CRE spreads mainly through contaminated white coats rather than direct contact",
        "CRE has a mortality rate similar to routine hospital-acquired UTIs"
      ],
      answer: 1,
      rationale: "CRE is described as a public health emergency precisely because carbapenems are the broadest-spectrum antibiotics available, leaving very few remaining options once resistance develops. The closest distractor confuses CRE with VRE — it is VRE, not CRE, that relates to vancomycin resistance, and CRE is by definition resistant to carbapenems, not responsive to them."
    },
    {
      stem: "A patient receiving IV gentamicin is scheduled for a procedure requiring a neuromuscular blocking agent. What is the nurse's priority concern?",
      options: [
        "Increased risk of Red Man syndrome from the drug combination",
        "Increased risk of a disulfiram-like reaction",
        "Increased risk of profound respiratory distress",
        "Increased risk of a photosensitivity reaction"
      ],
      answer: 2,
      rationale: "The page specifically warns that gentamicin combined with a neuromuscular blocker (paralytic) can cause profound respiratory distress. The closest distractor, Red Man syndrome, is a real toxicity but belongs to vancomycin infusing too quickly, not gentamicin with a paralytic."
    },
    {
      stem: "A patient is prescribed IV gentamicin together with a beta-lactamase inhibitor combination drug for a synergistic effect. In what order should the nurse plan to administer these medications?",
      options: [
        "Administer both medications at the same time through the same IV line",
        "Administer the gentamicin first so it reaches peak levels sooner",
        "Administer the two drugs 24 hours apart to avoid combined nephrotoxicity",
        "Administer the beta-lactamase inhibitor combination first, then the gentamicin"
      ],
      answer: 3,
      rationale: "The page states the beta-lactamase inhibitor should be given first so the aminoglycoside can get into the bacterial cell for a synergistic effect. The closest distractor reverses this order, giving gentamicin first, which is the opposite of the stated sequence."
    },
    {
      stem: "A patient started on clindamycin for an intra-abdominal anaerobic infection reports new diarrhea with visible blood. What should the nurse suspect?",
      options: [
        "Pseudomembranous colitis related to C. diff overgrowth",
        "An expected adverse effect that needs no further evaluation",
        "A true cross-allergy reaction to penicillin",
        "Red Man syndrome from infusing the drug too quickly"
      ],
      answer: 0,
      rationale: "The page lists C. diff/pseudomembranous colitis as a notable clindamycin risk, with diarrhea and bloody stool as key warning signs. The closest distractor, a penicillin cross-allergy, is a real page concept but applies to cephalosporins, not clindamycin, which is a lincosamide."
    },
    {
      stem: "A nurse is providing discharge teaching to a patient starting metronidazole for a C. diff infection who mentions plans to have wine with dinner that evening. What is the most important teaching point?",
      options: [
        "Alcohol is safe as long as it is consumed at least 2 hours after the dose",
        "Alcohol should be avoided for at least 36 hours after the last dose",
        "Alcohol only interacts with the IV form of this medication",
        "Alcohol increases the risk of a photosensitivity reaction with this medication"
      ],
      answer: 1,
      rationale: "The page's danger callout states no alcohol for at least 24 hours before starting and 36 hours after the last dose, due to a toxic, disulfiram-like reaction. The closest distractor invents a 2-hour 'safe window,' which contradicts the much longer avoidance period actually stated."
    },
    {
      stem: "A nurse is caring for a patient with HIV who has been started on sulfamethoxazole-trimethoprim (Bactrim). Which finding should prompt the nurse to hold the next dose and notify the provider?",
      options: [
        "Mild nausea after the first dose",
        "Dry mouth and mild nausea",
        "New fever followed by a skin rash",
        "Diarrhea that resolved after one loose stool"
      ],
      answer: 2,
      rationale: "The page states sulfonamide reactions typically start with fever, then a skin rash, and that HIV patients have a higher rate of adverse reactions. The closest distractor, dry mouth and mild nausea, lists real adverse effects from the page, but they are described as common across most antibiotics generally (associated with metronidazole), not the specific allergic warning pattern for Bactrim."
    },
    {
      stem: "A nurse is providing teaching to a patient newly started on doxycycline for acne. Which statements should the nurse include? Select all that apply.",
      options: [
        "\"This medication should not be used during pregnancy because it can cause permanent tooth discoloration in the developing fetus.\"",
        "\"Take this medication with a full meal to increase absorption.\"",
        "\"Use sunscreen and protective clothing because this drug can cause photosensitivity.\"",
        "\"This medication kills bacteria by causing the cell wall to rupture.\"",
        "\"This medication is approved for use in children under 8 years old without restriction.\"",
        "\"Report any new or worsening diarrhea or unusual bruising while taking this medication.\""
      ],
      answers: [0, 2, 5],
      rationale: "Correct: tetracyclines are contraindicated in pregnancy due to enamel hypoplasia (permanent tooth discoloration), photosensitivity is a class-wide side effect, and diarrhea plus occasional thrombocytopenia (unusual bruising) are also listed class-wide effects to report. Incorrect: tetracyclines should be taken fasting since food reduces absorption, not with a full meal; they work by inhibiting protein synthesis via ribosome binding (bacteriostatic), not by rupturing the cell wall (that mechanism belongs to beta-lactams); and they are explicitly contraindicated, not approved, for children under 8."
    }
  ]
};
