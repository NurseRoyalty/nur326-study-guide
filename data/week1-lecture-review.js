// Week 1 Lecture Review & Exam Review - NCLEX NGN Format Questions
// Includes: 7 questions from Exam 1 Live Review + 13 additional NCLEX NGN practice questions
// Topics: Antimicrobials, Antivirals, HIV/ART
// Updated: 2026-08-30

window.EXAM_DATA = {
  title: "Week 1 Lecture Review - Exam Prep",
  description: "NCLEX NGN-style questions from Exam 1 Live Review session and comprehensive lecture content covering antimicrobials, antivirals, and HIV basics.",
  questions: [
    {
      id: 1,
      type: "sata",
      difficulty: "hard",
      topic: "HIV Transmission",
      stem: "A 28-year-old patient diagnosed with HIV asks the nurse which body fluids could potentially transmit the virus to sexual partners. The patient is concerned about preventing transmission. Which body fluids should the nurse identify as proven routes of HIV transmission? (Select all that apply)",
      options: [
        "Saliva and tears",
        "Blood and semen",
        "Vaginal secretions and breast milk",
        "Sweat and urine",
        "Respiratory droplets"
      ],
      answers: [1, 2],
      rationale: "Blood, semen, vaginal secretions, and breast milk are proven routes of HIV transmission. Saliva and tears do not transmit HIV unless there is blood present.",
      source: "Exam 1 Live Review Poll Q1"
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV Disease Stages",
      stem: "You are caring for a 42-year-old male patient recently diagnosed with HIV. During physical examination, you note fever (101.2°F), oral candidiasis, and cough. CD4 count is 185 cells/mm³. Which stage of HIV infection would you record?",
      options: [
        "Clinical latency",
        "AIDS stage - based on CD4 count below 200",
        "AIDS stage - based on opportunistic infection",
        "Early infection with acute retroviral syndrome",
        "Chronic asymptomatic stage"
      ],
      answer: 2,
      rationale: "This patient has AIDS based on presence of AIDS-defining illness (oral candidiasis) regardless of CD4 count.",
      source: "Exam 1 Live Review Poll Q2"
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "HIV Pathophysiology",
      stem: "During patient education, a newly diagnosed HIV-positive patient asks how the virus works in the body. Which explanation most accurately describes HIV infection?",
      options: [
        "The virus remains dormant in lymph nodes for years",
        "The virus hijacks CD4+ T cells to replicate, creating virus particles, then destroys those cells",
        "The virus directly attacks the lungs causing respiratory symptoms first",
        "The virus slowly converts DNA into RNA",
        "The virus primarily affects the digestive system"
      ],
      answer: 1,
      rationale: "HIV selectively targets CD4+ T helper cells, replicates extensively, and ultimately destroys the cell.",
      source: "Exam 1 Live Review Poll Q3"
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV ART Management",
      stem: "You are teaching newly diagnosed HIV patients about antiretroviral therapy (ART). Which statement should be included in your teaching?",
      options: [
        "Protease inhibitors are the primary drug class",
        "Most patients need to switch medications every 6 months",
        "Treatment is individualized, guided by CD4 count and viral load, with ongoing adjustments",
        "NRTIs should never be combined with other classes",
        "Once viral load is undetectable, medications can be stopped"
      ],
      answer: 2,
      rationale: "ART is individualized and guided by CD4 count and viral load results with ongoing assessment and adjustments.",
      source: "Exam 1 Live Review Poll Q4"
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Pediatric Antibiotic Safety",
      stem: "You are reviewing discharge medications for a 12-year-old patient with bacterial infection. Which medication would require contacting the provider?",
      options: [
        "Amoxicillin with clavulanic acid",
        "Cefazolin",
        "Penicillin G",
        "Ciprofloxacin",
        "Amoxicillin"
      ],
      answer: 3,
      rationale: "Fluoroquinolones are avoided in pediatric patients due to risk of tendinopathy and arthropathy.",
      source: "Exam 1 Live Review Poll Q5"
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Tetracycline Administration",
      stem: "A patient is being prescribed doxycycline for respiratory infection. Which statement indicates correct understanding?",
      options: [
        "I will take an antacid if I experience stomach upset",
        "I will take this with a calcium supplement for better absorption",
        "Tetracyclines are safe during pregnancy",
        "I should avoid dairy products within 2 hours of taking this",
        "I need to take this with food"
      ],
      answer: 3,
      rationale: "Doxycycline forms chelation complexes with divalent cations and should not be taken with dairy within 2 hours.",
      source: "Exam 1 Live Review Poll Q6"
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Aminoglycoside TDM",
      stem: "You are administering gentamicin for Gram-negative infection. When should the trough level be drawn?",
      options: [
        "Only if patient shows toxicity symptoms",
        "8-12 hours after dose or 30 minutes before next dose",
        "30 minutes after infusion is completed",
        "Every 48 hours regardless of timing",
        "Before first dose"
      ],
      answer: 1,
      rationale: "Trough level is drawn when drug is at lowest concentration (8-12 hours after dose or 30 min before next dose).",
      source: "Exam 1 Live Review Poll Q7"
    },
    {
      id: 8,
      type: "sata",
      difficulty: "hard",
      topic: "Antimicrobial Resistance",
      stem: "A patient has recurrent UTIs with resistant E. coli. Which mechanisms explain multi-drug resistance? (Select all that apply)",
      options: [
        "Altered binding site - specific to each class",
        "Plasmid-mediated efflux pumps expelling multiple drugs",
        "Beta-lactamase degradation",
        "Porin loss affecting only beta-lactams",
        "Extended-spectrum enzyme genes"
      ],
      answers: [1, 4],
      rationale: "Plasmid-mediated resistance through efflux pumps and extended-spectrum enzymes confers resistance to multiple classes.",
      source: "Lecture - Antimicrobial Resistance"
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin Monitoring",
      stem: "A patient on vancomycin develops hearing loss and tinnitus on day 3. Trough level is 28 mcg/mL (normal 15-20). What is the appropriate action?",
      options: [
        "Increase infusion rate for faster levels",
        "Continue dosing; this is expected",
        "Notify provider - symptoms suggest toxicity requiring dose adjustment",
        "Administer next dose while awaiting labs",
        "Request urinalysis"
      ],
      answer: 2,
      rationale: "Ototoxicity indicates vancomycin toxicity, especially with elevated creatinine and high trough levels.",
      source: "Lecture - Vancomycin Safety"
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Cell Wall Antibiotic",
      stem: "Patient has cell wall-targeting infection and non-anaphylaxis penicillin rash. Safest cell wall option?",
      options: [
        "Macrolides - inhibit protein synthesis",
        "Fluoroquinolones - inhibit DNA gyrase",
        "Cephalosporins - inhibit cell wall synthesis",
        "Aminoglycosides - inhibit protein synthesis",
        "Tetracyclines - inhibit protein synthesis"
      ],
      answer: 2,
      rationale: "Cephalosporins inhibit cell wall synthesis like penicillins with ~2-3% cross-reactivity risk.",
      source: "Lecture - Antibiotic Mechanisms"
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Antibiotic Uses",
      stem: "Doxycycline prescribed for patient with acne, no infection noted. What concept is demonstrated?",
      options: [
        "Medications on MAR are always for infections",
        "Some antibiotics have off-label uses beyond infections",
        "Doxycycline only treats infections",
        "Patient is over-medicated",
        "This is a prescribing error"
      ],
      answer: 1,
      rationale: "Doxycycline has non-infection uses (acne, rosacea) due to anti-inflammatory properties.",
      source: "Lecture - Antibiotic Indications"
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV cART Rationale",
      stem: "Why must HIV patients take multiple medications instead of one? Best explanation?",
      options: [
        "Multiple drugs allow lower doses, reducing side effects",
        "Combination therapy targets HIV at multiple replication points, reducing resistance",
        "Multiple drugs eliminate need for CD4/viral load monitoring",
        "Each class addresses different opportunistic infections",
        "Multiple meds increase immune reconstitution speed"
      ],
      answer: 1,
      rationale: "cART targets HIV replication at multiple points, significantly reducing drug-resistant strain emergence.",
      source: "Lecture - ART Principles"
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "NRTI Mechanism",
      stem: "When teaching about NRTIs, what mechanism of action should you explain?",
      options: [
        "Directly attacks HIV viral particles",
        "Blocks protease enzyme for virus assembly",
        "Mimics DNA building block, prevents HIV copying genetic material",
        "Prevents HIV entry into CD4 cells",
        "Suppresses immune system"
      ],
      answer: 2,
      rationale: "NRTIs are nucleoside analogs that cause chain termination during reverse transcription.",
      source: "Lecture - NRTI Mechanism"
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "PrEP Limitations",
      stem: "Patient asks if PrEP alone can prevent HIV. Accurate response about PrEP?",
      options: [
        "PrEP is 100% effective in all circumstances",
        "PrEP is highly effective but doesn't eliminate need for other strategies like condoms",
        "PrEP only works with monthly injections",
        "PrEP requires specific CD4 count, only for diagnosed patients",
        "PrEP cannot be used with any kidney disease history"
      ],
      answer: 1,
      rationale: "PrEP is ~90% effective but requires other prevention methods, regular testing, and adherence.",
      source: "Lecture - HIV Prevention"
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "CD4 Significance",
      stem: "Patient with CD4 count 150 cells/mm³ asks why provider is concerned. Best explanation?",
      options: [
        "Indicates how many ART medications needed",
        "Below 200 = AIDS with high risk for opportunistic infections",
        "Directly measures HIV amount in blood",
        "Means tuberculosis will definitely develop in 3 months",
        "Below 500 means stop all meds and switch"
      ],
      answer: 1,
      rationale: "CD4 below 200 defines AIDS with severe immunosuppression and high OI risk.",
      source: "Lecture - CD4 Interpretation"
    },
    {
      id: 16,
      type: "sata",
      difficulty: "hard",
      topic: "Drug Interactions",
      stem: "Patient on ART with ritonavir booster starts St. John's Wort. Concerns? (Select all that apply)",
      options: [
        "St. John's Wort is CYP3A4 inducer, may reduce ART levels",
        "Will cause immediate liver failure",
        "May decrease antidepressant effects if on SSRIs",
        "Could lead to subtherapeutic ART and viral suppression loss",
        "Directly antagonizes all protease inhibitors"
      ],
      answers: [0, 3],
      rationale: "St. John's Wort is potent CYP3A4 inducer reducing ART levels, risking resistance.",
      source: "Lecture - ART Interactions"
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Allergy Assessment",
      stem: "Patient reports penicillin allergy: rash on day 3, resolved after stopping. How document and consider?",
      options: [
        "True allergy - avoid all beta-lactams absolutely",
        "Delayed reaction - penicillins never safe",
        "Non-IgE delayed rash, low anaphylaxis risk, cautious use with monitoring acceptable",
        "Definitely not allergy - use penicillins freely",
        "Patient developed resistance - drug won't work"
      ],
      answer: 2,
      rationale: "Delayed maculopapular rash has <1% anaphylaxis risk; many can safely receive penicillins/cephalosporins.",
      source: "Lecture - Allergy Assessment"
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "U=U Concept",
      stem: "HIV patient with undetectable VL x6 months asks about unprotected sex. Counsel about transmission?",
      options: [
        "Zero transmission risk with undetectable VL, no condoms needed",
        "U=U - undetectable VL eliminates transmission risk when suppression sustained",
        "Undetectable is temporary, transmission possible next encounter",
        "Must be undetectable 2+ years before risk truly eliminated",
        "Eliminates risk for most but not genetic variants"
      ],
      answer: 1,
      rationale: "U=U concept: sustained undetectable VL (<50 copies/mL) means zero sexual transmission risk.",
      source: "Lecture - HIV Prevention"
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Empiric Therapy",
      stem: "Patient shows infection signs, cultures not available for 2-3 days. Guide empiric selection?",
      options: [
        "Always use narrowest spectrum possible",
        "Use strongest, broadest available regardless of side effects",
        "Select covering most likely organisms based on presentation and risk factors",
        "Delay antibiotics until cultures confirm",
        "Rotate between classes every 24 hours"
      ],
      answer: 2,
      rationale: "Empiric therapy targets likely organisms based on presentation, balancing prompt treatment with narrow spectrum.",
      source: "Lecture - Empiric Selection"
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Renal Dosing",
      stem: "78-year-old with eGFR 35 prescribed gentamicin for serious infection. Primary concern?",
      options: [
        "Gentamicin contraindicated in all renal impairment",
        "Reduced clearance increases drug accumulation and nephro/ototoxicity risk",
        "Requires no dosage adjustment despite renal impairment",
        "Renal impairment affects only peak, not trough levels",
        "All aminoglycosides become ineffective with renal impairment"
      ],
      answer: 1,
      rationale: "Aminoglycosides renally cleared - reduced eGFR causes accumulation with increased toxicity risk.",
      source: "Lecture - Aminoglycoside PK"
    }
  ]
};
