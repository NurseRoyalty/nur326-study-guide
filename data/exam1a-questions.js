// NUR 326 Exam 1A - Comprehensive 80-Question Set
// 20 Vancomycin questions + 20 Antibiotic Differences + 20 HIV + 20 Antiviral
// Focus: UNIQUE and DIFFERENTIATING features that make each drug special
// Updated: 2026-08-30

window.EXAM_DATA = {
  title: "Exam 1A - Comprehensive Review",
  description: "80 high-yield questions focused on unique/differentiating drug features, mechanisms, and clinical judgment",
  sections: [
    {
      id: "vancomycin",
      title: "Vancomycin (20 questions)",
      description: "Everything about vancomycin - Red Man, NTI, monitoring, ototoxicity, infusion rate, MRSA, synergistic toxicity"
    },
    {
      id: "abx-differences",
      title: "Antibiotic Major Differences (20 questions)",
      description: "What makes each antibiotic unique - contraindications, special populations, off-label uses, interactions, mechanisms"
    },
    {
      id: "hiv",
      title: "HIV/AIDS (20 questions)",
      description: "HIV pathophysiology, stages, transmission, NRTIs, opportunistic infections, dementia, oral manifestations"
    },
    {
      id: "antivirals",
      title: "Antiviral Medications (20 questions)",
      description: "Acyclovir, oseltamivir, ganciclovir - mechanisms, uses, unique features, black box warnings"
    }
  ],
  questions: [
    // ===== VANCOMYCIN SECTION (20 questions) =====
    {
      id: 1,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Red Man Syndrome",
      stem: "A patient is receiving vancomycin IV for MRSA bacteremia. During the first 15 minutes of infusion, the patient develops facial flushing, erythema, pruritus, and hypotension. The nurse recognizes this as Red Man Syndrome. What is the primary mechanism behind this infusion-related reaction unique to vancomycin?",
      options: [
        "Vancomycin directly damages mast cells, releasing histamine throughout the body",
        "Vancomycin activates complement cascade and triggers massive histamine release from mast cells and basophils",
        "The patient is experiencing an IgE-mediated true allergic reaction to vancomycin",
        "Vancomycin crosses the blood-brain barrier and causes neurogenic inflammation",
        "This reaction indicates the patient's immune system is rejecting the antibiotic"
      ],
      answer: 1,
      rationale: "Red Man Syndrome is unique to vancomycin and caused by rapid complement activation and massive histamine release. It's NOT a true IgE-mediated allergy - it's a rate-dependent infusion reaction. Prevention: slow infusion rate (minimum 60 min for standard dosing), pretreatment with antihistamines and corticosteroids.",
      source: "Vancomycin Unique Feature"
    },

    {
      id: 2,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Trough Monitoring",
      stem: "A patient receiving vancomycin has trough and peak levels drawn. The provider says the trough level of 18 mcg/mL is therapeutic but asks about CNS penetration for suspected meningitis. How should vancomycin dosing change, and why is trough monitoring (not peak) the standard for vancomycin?",
      options: [
        "Increase dose; vancomycin only distributes to meningeal tissue with peak levels >25 mcg/mL",
        "Increase dose; vancomycin achieves only 15-30% CNS penetration even with inflamed meninges, requiring higher levels",
        "Decrease frequency; peak levels are what matters for CNS infections",
        "Maintain current dose; trough is irrelevant for CNS infections",
        "Switch to a different antibiotic; vancomycin cannot reach therapeutic CNS levels"
      ],
      answer: 1,
      rationale: "Vancomycin has POOR CNS penetration (15-30% even with inflamed meninges) requiring much higher serum levels for meningitis. Trough monitoring is standard (not peak) because trough reflects steady-state and minimum drug concentration - the baseline below which accumulation becomes toxic. CNS infection dosing requires higher trough targets (15-20 mcg/mL minimum, often higher).",
      source: "Vancomycin Unique Feature - CNS Penetration"
    },

    {
      id: 3,
      section: "vancomycin",
      type: "sata",
      difficulty: "hard",
      topic: "Vancomycin - Black Box Warnings & Monitoring",
      stem: "Vancomycin carries black box warnings. Which of the following are documented black box warnings or serious adverse effects requiring monitoring unique to vancomycin? (Select all that apply)",
      options: [
        "Ototoxicity - hearing loss and tinnitus, irreversible at high doses",
        "Nephrotoxicity - acute kidney injury, especially with renal impairment or combination with other nephrotoxic drugs",
        "Red Man Syndrome - infusion-related complement activation reaction",
        "Pseudomembranous colitis - causing fatal C. difficile infection",
        "Hepatotoxicity - liver enzyme elevation requiring monitoring"
      ],
      answers: [0, 1, 2],
      rationale: "Vancomycin's black box warnings include ototoxicity (irreversible at high doses, especially with renal impairment), nephrotoxicity (acute kidney injury risk), and Red Man Syndrome. Pseudomembranous colitis is associated with clindamycin, not vancomycin. Hepatotoxicity is not a documented black box warning for vancomycin.",
      source: "Vancomycin Black Box Warnings"
    },

    {
      id: 4,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Synergistic Toxicity",
      stem: "A patient with Gram-negative sepsis is prescribed vancomycin AND gentamicin (both nephrotoxic and ototoxic agents). What is the critical nursing concern with this combination?",
      options: [
        "The drugs compete for the same binding sites, reducing effectiveness of both",
        "Vancomycin and gentamicin are synergistic for ototoxicity and nephrotoxicity - the combination dramatically increases risk of irreversible hearing loss and acute kidney injury",
        "Gentamicin antagonizes vancomycin's mechanism of action",
        "This combination is contraindicated and should never be used",
        "The drugs increase each other's metabolism, reducing therapeutic levels"
      ],
      answer: 1,
      rationale: "Vancomycin + gentamicin = SYNERGISTIC TOXICITY. Both are nephrotoxic AND ototoxic, and when combined, the risk of permanent hearing loss and AKI increases dramatically. This combination is sometimes necessary for serious infections but requires: baseline audiometry, frequent renal monitoring, aggressive hydration, and careful dosing. The synergy is the UNIQUE concern with vancomycin combinations.",
      source: "Vancomycin Drug Interactions"
    },

    {
      id: 5,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Vancomycin - Narrow Therapeutic Index",
      stem: "Why is vancomycin classified as having a NARROW THERAPEUTIC INDEX (NTI), and what does this mean for clinical practice?",
      options: [
        "Narrow range between therapeutic and toxic levels - small dosing errors can cause toxicity",
        "Vancomycin only works against a narrow range of bacteria",
        "The drug must be given in a narrow time window",
        "Narrow therapeutic index refers to how narrowly vancomycin targets bacterial cell walls",
        "Vancomycin has a short half-life requiring narrow dosing intervals"
      ],
      answer: 0,
      rationale: "NTI means the difference between therapeutic and toxic serum levels is small. For vancomycin, trough levels should be 15-20 mcg/mL therapeutic; levels >25 mcg/mL increase toxicity risk. This requires routine trough monitoring, careful dosing calculations (especially in renal impairment), and patient education about adherence.",
      source: "Vancomycin - NTI Definition"
    },

    {
      id: 6,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - IV Only Administration",
      stem: "Why can vancomycin NOT be given orally for systemic infections, even though it's an antibiotic?",
      options: [
        "Vancomycin is poorly absorbed from the GI tract due to its large molecular weight and hydrophilic nature",
        "Stomach acid inactivates vancomycin before absorption",
        "Vancomycin binds to food proteins, preventing absorption",
        "The gastrointestinal barrier is impermeable to vancomycin",
        "Oral vancomycin is rapidly metabolized by hepatic enzymes"
      ],
      answer: 0,
      rationale: "Vancomycin is a LARGE, HYDROPHILIC glycopeptide antibiotic that is NOT absorbed from the GI tract. IV is required for systemic infections. Oral vancomycin IS used for C. difficile colitis (local effect in colon, doesn't require systemic absorption). This is unique to vancomycin compared to beta-lactams like amoxicillin which ARE absorbed orally.",
      source: "Vancomycin Administration Route"
    },

    {
      id: 7,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Vancomycin - Infusion Rate Criticality",
      stem: "A nurse is caring for a patient receiving vancomycin. The medication arrives and the nurse notes the order says 'vancomycin 1g IV push.' What should the nurse do?",
      options: [
        "Administer as IV push since that's what the order says",
        "Call the provider immediately to clarify - vancomycin should NEVER be given as IV push; minimum infusion time is 60 minutes (slower for larger doses) to prevent Red Man Syndrome",
        "Dilute in normal saline and infuse over 15 minutes",
        "Give 500mg IV push twice, spacing 30 minutes apart",
        "Request a pharmacist to dilute appropriately then give IV push"
      ],
      answer: 1,
      rationale: "Vancomycin MUST be infused slowly (minimum 60 minutes for standard 1g dose, longer for larger doses) to prevent or minimize Red Man Syndrome. IV push would cause severe complement activation, massive histamine release, hypotension, and potentially cardiovascular collapse. This is a CRITICAL safety issue unique to vancomycin.",
      source: "Vancomycin Infusion Rate Safety"
    },

    {
      id: 8,
      section: "vancomycin",
      type: "sata",
      difficulty: "hard",
      topic: "Vancomycin - MRSA Coverage & Alternatives",
      stem: "Vancomycin is THE classic drug for MRSA infections. Which of the following are reasons why vancomycin became the gold standard for MRSA, or what makes it unique for this indication? (Select all that apply)",
      options: [
        "Beta-lactam antibiotics (penicillins and cephalosporins) CANNOT kill MRSA due to methicillin resistance mechanisms",
        "Vancomycin works through a completely different mechanism (glycopeptide) than beta-lactams, so MRSA resistance doesn't apply",
        "Vancomycin has excellent bone and tissue penetration, making it ideal for osteomyelitis",
        "MRSA organisms cannot develop resistance to vancomycin",
        "Vancomycin is the only antibiotic that can kill MRSA"
      ],
      answers: [0, 1],
      rationale: "Methicillin-resistant S. aureus cannot be killed by ANY beta-lactam antibiotics (mechanism of resistance = altered PBPs). Vancomycin works via glycopeptide mechanism (completely different from beta-lactams), so MRSA is susceptible. Vancomycin doesn't have superior tissue penetration; it has POOR CNS penetration actually. MRSA CAN develop vancomycin resistance (vancomycin-resistant enterococci exist, VRSA is emerging). Other options like linezolid exist.",
      source: "Vancomycin - MRSA Indication"
    },

    {
      id: 9,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Ototoxicity Risk Factors",
      stem: "A patient with renal impairment (eGFR 28) is on vancomycin with a trough of 22 mcg/mL and begins complaining of hearing loss and tinnitus. Why is this patient at particularly HIGH risk for ototoxicity compared to a patient with normal renal function?",
      options: [
        "Renal impairment reduces vancomycin clearance, causing accumulation and high serum levels that damage the vestibulocochlear nerve",
        "Vancomycin is only ototoxic in patients with renal failure",
        "Tinnitus is the first sign of vancomycin allergy in renal patients",
        "Renal impairment causes vancomycin to cross the blood-brain barrier",
        "This is coincidental - renal impairment has no impact on vancomycin ototoxicity"
      ],
      answer: 0,
      rationale: "Vancomycin ototoxicity is DOSE-DEPENDENT and CUMULATIVE. Renal impairment reduces vancomycin clearance → accumulation → high serum levels → irreversible vestibulocochlear nerve damage. Risk factors for ototoxicity: high trough levels (>25 mcg/mL), renal impairment, advanced age, concurrent ototoxic drugs (aminoglycosides, loop diuretics). The damage is often IRREVERSIBLE.",
      source: "Vancomycin - Ototoxicity Risk"
    },

    {
      id: 10,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Vancomycin - Nephrotoxicity Prevention",
      stem: "A patient is starting vancomycin therapy. Besides serum level monitoring, what is the MOST critical nursing intervention to prevent vancomycin nephrotoxicity?",
      options: [
        "Restrict fluid intake to prevent hypervolemia",
        "Administer aggressive IV hydration (saline) to maintain urine output and dilute vancomycin in renal tubules",
        "Request a nephrologist consultation immediately",
        "Start the patient on loop diuretics",
        "Monitor urine color for discoloration"
      ],
      answer: 1,
      rationale: "Aggressive IV hydration with normal saline is key for vancomycin nephrotoxicity prevention. High urine flow dilutes vancomycin in renal tubules, reducing direct nephrotoxic contact with tubular epithelium. Goal: maintain urine output >200 mL/hr. Combined with careful dosing (based on renal function) and trough monitoring, this strategy significantly reduces AKI risk.",
      source: "Vancomycin - Nephrotoxicity Prevention"
    },

    {
      id: 11,
      section: "vancomycin",
      type: "sata",
      difficulty: "hard",
      topic: "Vancomycin - Complete Monitoring Requirements",
      stem: "Which of the following are monitoring requirements unique to or especially critical for vancomycin therapy? (Select all that apply)",
      options: [
        "Baseline and periodic audiometry (hearing tests) due to irreversible ototoxicity risk",
        "Vancomycin trough levels (usually drawn before 4th-5th dose) - therapeutic 15-20 mcg/mL",
        "Baseline and periodic renal function (creatinine, eGFR) due to nephrotoxicity risk",
        "Baseline liver function tests since vancomycin is hepatotoxic",
        "CBC monitoring for drug-induced thrombocytopenia"
      ],
      answers: [0, 1, 2],
      rationale: "Vancomycin monitoring includes: audiometry (baseline and periodic), trough levels (essential for NTI), renal function (baseline and periodic, dosing adjustments for renal impairment). Hepatotoxicity and thrombocytopenia are NOT documented black box warnings for vancomycin.",
      source: "Vancomycin - Monitoring Comprehensive"
    },

    {
      id: 12,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Renal Impairment Dosing",
      stem: "A patient with eGFR 35 is prescribed vancomycin 15-20 mg/kg IV every 8-12 hours. Why is standard vancomycin dosing INAPPROPRIATE for this patient?",
      options: [
        "This patient should receive vancomycin more frequently due to reduced renal clearance",
        "Reduced renal function decreases vancomycin clearance; standard dosing causes accumulation and toxicity risk; dosing intervals must be EXTENDED, not increased",
        "Patients with renal impairment cannot receive vancomycin",
        "Vancomycin dosing is unaffected by renal function",
        "This patient needs higher doses to compensate for reduced renal elimination"
      ],
      answer: 1,
      rationale: "Vancomycin is renally cleared. Renal impairment requires EXTENDED INTERVALS (not increased frequency). Standard q8-12h dosing would cause accumulation, high trough levels, and toxicity. Dosing must be individualized based on renal function and trough levels. This is fundamentally different from drugs like amoxicillin where dose doesn't change much with mild-moderate renal impairment.",
      source: "Vancomycin - Renal Impairment Dosing"
    },

    {
      id: 13,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Vancomycin - Onset & Duration",
      stem: "A patient receives vancomycin for MRSA bacteremia. How long does it typically take for vancomycin to achieve adequate serum levels, and why is this slower than other antibiotics?",
      options: [
        "Peak levels are reached within 30 minutes due to rapid IV distribution",
        "Steady-state is typically reached after 4-5 doses (48-72 hours) due to vancomycin's relatively long half-life and need for trough monitoring",
        "Vancomycin is immediately effective upon first administration",
        "Therapeutic levels require 1-2 weeks of administration",
        "Vancomycin reaches peak levels after oral absorption (varies with food)"
      ],
      answer: 1,
      rationale: "Vancomycin has a half-life of ~6 hours; steady-state is reached after 4-5 doses (typically 48-72 hours). First trough level is usually drawn before 4th-5th dose. This is slower than many beta-lactams and requires patience and monitoring. Clinical response may not be apparent for 48-72 hours.",
      source: "Vancomycin - Pharmacokinetics"
    },

    {
      id: 14,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Protein Binding & CNS",
      stem: "Why does vancomycin have particularly POOR blood-brain barrier (BBB) penetration compared to beta-lactams, even with meningeal inflammation?",
      options: [
        "Vancomycin is highly protein-bound, and only unbound drug crosses the BBB",
        "Vancomycin is too large and hydrophilic to cross the BBB effectively, even with inflammation increasing permeability",
        "Vancomycin is actively pumped OUT of the CSF by efflux transporters",
        "The BBB actively prevents vancomycin entry",
        "Vancomycin is metabolized before reaching the CNS"
      ],
      answer: 1,
      rationale: "Vancomycin is a LARGE (1449 Da), HYDROPHILIC glycopeptide. BBB penetration is poor (~15-30% even with inflamed meninges). Beta-lactams (smaller, more lipophilic) penetrate better. This is why meningitis dosing must be HIGHER, and why some centers use rifampin or fluoroquinolones as adjuncts for CNS coverage when treating resistant organisms.",
      source: "Vancomycin - BBB Penetration"
    },

    {
      id: 15,
      section: "vancomycin",
      type: "sata",
      difficulty: "hard",
      topic: "Vancomycin - Unique Clinical Scenarios",
      stem: "Which clinical scenarios uniquely favor vancomycin choice over other antibiotics, or require special vancomycin considerations? (Select all that apply)",
      options: [
        "MRSA infections - vancomycin is the standard for methicillin-resistant S. aureus",
        "Patients with severe penicillin anaphylaxis - vancomycin can be used (different mechanism, low cross-reactivity)",
        "Clostridium difficile colitis - oral vancomycin (local GI effect, high luminal concentration)",
        "Enterococcal infections - vancomycin alone is effective and adequate",
        "CNS infections requiring high penetration - vancomycin is the first choice"
      ],
      answers: [0, 1, 2],
      rationale: "Vancomycin is preferred for: MRSA (standard choice), severe PCN anaphylaxis (different mechanism = low cross-reactivity ~2%), C. difficile colitis (oral vancomycin achieves high luminal levels for local effect). Enterococcal infections may require vancomycin + gentamicin, not monotherapy. Vancomycin's POOR CNS penetration makes it suboptimal for meningitis without high dosing.",
      source: "Vancomycin - Clinical Indications"
    },

    {
      id: 16,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Red Man Syndrome Prevention",
      stem: "A patient starting vancomycin asks why they're being given diphenhydramine and dexamethasone before the infusion. What is the nurse's BEST explanation?",
      options: [
        "These medications prevent infection by boosting the immune system",
        "They prevent Red Man Syndrome by blocking histamine release and reducing inflammatory cascade activation from rapid vancomycin infusion",
        "They increase vancomycin efficacy against bacteria",
        "They are standard premedication for all IV antibiotics",
        "They protect the kidneys from vancomycin toxicity"
      ],
      answer: 1,
      rationale: "Red Man Syndrome prevention: SLOW infusion (≥60 min) + premedication with antihistamines (diphenhydramine) and corticosteroids (dexamethasone or hydrocortisone). These medications block histamine release and reduce complement-mediated inflammatory cascade. Premedication reduces (but doesn't eliminate) Red Man Syndrome risk.",
      source: "Vancomycin - Red Man Prevention"
    },

    {
      id: 17,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "Vancomycin - Cost & Resistance",
      stem: "Why has vancomycin historically been considered expensive, and what is the emerging resistance concern?",
      options: [
        "Vancomycin is expensive because it requires frequent lab monitoring and slow infusions",
        "Vancomycin is inexpensive but is being replaced by newer agents",
        "High cost reflects limited supply and manufacturing difficulty; vancomycin-resistant organisms (VRE, VRSA) are emerging threats requiring monitoring",
        "Vancomycin is inexpensive and has no resistance concerns",
        "Cost is irrelevant since vancomycin is always the first choice for serious infections"
      ],
      answer: 2,
      rationale: "Vancomycin production is complex/limited → historically expensive (though generic costs have decreased). Bigger concern: emergence of vancomycin-resistant enterococci (VRE) and vancomycin-resistant S. aureus (VRSA), though still rare. This drives development of alternative agents (linezolid, daptomycin) and the need for antibiotic stewardship.",
      source: "Vancomycin - Economics & Resistance"
    },

    {
      id: 18,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Irreversibility of Toxicity",
      stem: "A patient on vancomycin develops permanent hearing loss. This is an example of which CRITICAL characteristic that differentiates vancomycin toxicity from other antibiotic side effects?",
      options: [
        "Ototoxicity from vancomycin is reversible if caught early",
        "Vancomycin ototoxicity is IRREVERSIBLE, dose-dependent, and cumulative - permanent vestibulocochlear nerve damage cannot be restored",
        "Hearing loss from vancomycin is temporary and resolves after discontinuation",
        "Ototoxicity only occurs in patients with pre-existing hearing loss",
        "Hearing loss is preventable with ototoxic drug combinations"
      ],
      answer: 1,
      rationale: "Vancomycin ototoxicity is DOSE-DEPENDENT, CUMULATIVE, and IRREVERSIBLE. Once hearing loss occurs, it cannot be recovered. This is why: baseline audiometry is essential, high trough levels must be avoided, renal function monitoring is critical, and ototoxic drug combinations must be avoided. The irreversibility makes this toxicity particularly serious.",
      source: "Vancomycin - Ototoxicity Irreversibility"
    },

    {
      id: 19,
      section: "vancomycin",
      type: "sata",
      difficulty: "hard",
      topic: "Vancomycin - Contraindications & Cautions",
      stem: "Which patient populations require SPECIAL CAUTION or have contraindications to vancomycin? (Select all that apply)",
      options: [
        "Patients with significant hearing loss - high risk for further ototoxicity",
        "Patients with renal impairment - accumulation risk, increased ototoxicity and nephrotoxicity",
        "Patients with myasthenia gravis - vancomycin may worsen neuromuscular blockade",
        "Pregnant women - vancomycin crosses placenta causing fetal toxicity",
        "Elderly patients - increased ototoxicity and nephrotoxicity risk"
      ],
      answers: [0, 1, 4],
      rationale: "Vancomycin caution in: hearing loss (further ototoxicity risk), renal impairment (accumulation/toxicity), elderly patients (increased ototoxicity/nephrotoxicity). Myasthenia gravis is a concern with AMINOGLYCOSIDES and clindamycin, not vancomycin. Vancomycin is NOT contraindicated in pregnancy (it's poorly absorbed systemically, but IV administration has minimal fetal penetration - Class B).",
      source: "Vancomycin - Contraindications"
    },

    {
      id: 20,
      section: "vancomycin",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Vancomycin - Trough vs Peak Clinical Interpretation",
      stem: "A patient on vancomycin has a trough level of 8 mcg/mL and a peak of 32 mcg/mL. What does this pattern tell you, and what is the IMMEDIATE nursing action?",
      options: [
        "Both levels are therapeutic; no action needed",
        "Low trough indicates UNDERDOSING - the patient is not receiving adequate drug between doses, risking treatment failure; dose or frequency should be INCREASED",
        "High peak indicates overdosing and toxicity risk; decrease the total dose",
        "This pattern is normal and expected",
        "The trough is more important than the peak; the low trough is concerning"
      ],
      answer: 1,
      rationale: "Trough <15 mcg/mL indicates underdosing - insufficient steady-state drug level. This risks treatment failure against MRSA and other serious infections. Peak of 32 is acceptable (usually 25-40 mcg/mL is ok for non-meningitis). ACTION: Increase dose or shorten interval. The TROUGH is the critical value for clinical decisions because it reflects minimum drug availability; persistently low troughs drive resistance.",
      source: "Vancomycin - Level Interpretation"
    },

    // ===== ANTIBIOTIC MAJOR DIFFERENCES SECTION (20 questions) =====
    {
      id: 21,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Fluoroquinolones - Unique Contraindication in Age Groups",
      stem: "A 7-year-old child is diagnosed with a respiratory infection and a 72-year-old with a UTI. Why are FLUOROQUINOLONES (ciprofloxacin, levofloxacin) contraindicated or used with extreme caution in BOTH age groups, despite the conditions being treatable with these drugs?",
      options: [
        "Fluoroquinolones are ineffective against pediatric and elderly bacterial strains",
        "Fluoroquinolones cause ARTHROPATHY and TENDINOPATHY (including Achilles tendon rupture) in children <18 and elderly >60; damage is potentially irreversible",
        "These age groups have fluoroquinolone allergies",
        "Fluoroquinolones are poorly absorbed in young and old patients",
        "Fluoroquinolones cause severe hyperglycemia in these populations"
      ],
      answer: 1,
      rationale: "UNIQUE CONTRAINDICATION: Fluoroquinolones cause arthropathy (joint damage) and tendinopathy, especially Achilles tendon rupture, in pediatric patients (<18) and elderly (>60+). This is specific to fluoroquinolones among antibiotics. The damage can be permanent. This is NOT a minor side effect - it's a major contraindication in these populations.",
      source: "Fluoroquinolone - Age Contraindication"
    },

    {
      id: 22,
      section: "abx-differences",
      type: "sata",
      difficulty: "hard",
      topic: "Tetracyclines - Unique Contraindications & Characteristics",
      stem: "Which of the following are UNIQUE characteristics of TETRACYCLINES (doxycycline, tetracycline, minocycline) that make them different from other antibiotic classes? (Select all that apply)",
      options: [
        "CONTRAINDICATED in children <8 years and pregnant women (teratogenic - permanent yellow tooth discoloration and bone growth inhibition)",
        "PHOTOSENSITIVITY - patient must wear sunscreen/protective clothing due to phototoxic reactions",
        "Cannot be taken with dairy products, antacids, or supplements containing divalent cations (chelation complex formation)",
        "Cause discoloration of teeth (yellow-brown) - unique side effect, IRREVERSIBLE in children",
        "Can be used for off-label acne treatment (anti-inflammatory effect) or rosacea"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "Tetracyclines are UNIQUE for: absolute contraindication in children <8 (tooth discoloration irreversible), contraindication in pregnancy (teratogenic), PHOTOSENSITIVITY requiring sun protection, chelation complex with divalent cations (no dairy/antacids/supplements), and OFF-LABEL acne/rosacea uses. The combination of these features makes tetracyclines fundamentally different from other antibiotic classes.",
      source: "Tetracycline - Unique Features"
    },

    {
      id: 23,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Macrolides - Unique Indications & Coverage",
      stem: "Macrolides (azithromycin, erythromycin) have UNIQUE indications and organism coverage that make them stand out. Which is MOST representative of macrolide uniqueness?",
      options: [
        "Macrolides are excellent for strep throat coverage - standard first-line choice",
        "Macrolides UNIQUELY cover Legionnaires disease, Listeria monocytogenes, and Mycoplasma pneumoniae - organisms not reliably covered by most other classes",
        "Macrolides are primarily used for MRSA infections",
        "Macrolides are the antibiotic of choice for Gram-negative infections",
        "Macrolides cannot cross cell membranes"
      ],
      answer: 1,
      rationale: "Macrolide UNIQUE organism coverage: Legionnaires disease (Legionella), Listeria monocytogenes, Mycoplasma pneumoniae. These organisms are NOT reliably covered by standard beta-lactams, fluoroquinolones, or other classes. This makes macrolides indispensable for atypical pneumonia and specific infections.",
      source: "Macrolide - Unique Indications"
    },

    {
      id: 24,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Clindamycin - Unique Severe Adverse Effect",
      stem: "A patient on clindamycin develops severe watery diarrhea 3 days into therapy. Which UNIQUE and SERIOUS adverse effect of clindamycin is this patient experiencing?",
      options: [
        "Drug allergy causing diarrhea",
        "Pseudomembranous colitis caused by Clostridium difficile overgrowth - can be FATAL if untreated; unique to lincosamides like clindamycin",
        "Normal side effect of antibiotics that will resolve",
        "Clindamycin causes diarrhea in 50% of patients and is expected",
        "This is a sign the drug is working against anaerobic bacteria"
      ],
      answer: 1,
      rationale: "Clindamycin is ASSOCIATED WITH PSEUDOMEMBRANOUS COLITIS caused by C. difficile overgrowth - a POTENTIALLY FATAL complication. This is a defining characteristic that makes clindamycin different. It disrupts normal colonic flora, allowing C. difficile proliferation. Risk factors: prolonged use, elderly patients, hospitalized patients. Symptoms: severe diarrhea, fever, abdominal pain.",
      source: "Clindamycin - C. Difficile Risk"
    },

    {
      id: 25,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Gentamicin - Unique Combination Risk",
      stem: "A patient with myasthenia gravis is receiving gentamicin for a serious Gram-negative infection. Why is this combination particularly dangerous?",
      options: [
        "Gentamicin is contraindicated in myasthenia gravis",
        "Gentamicin INHIBITS acetylcholine release at the neuromuscular junction, worsening muscle weakness; when combined with neuromuscular paralytics, can cause PROFOUND RESPIRATORY DISTRESS or respiratory failure",
        "Myasthenia gravis causes gentamicin allergy",
        "Gentamicin increases muscle strength in myasthenia gravis",
        "This combination is safe and commonly used"
      ],
      answer: 1,
      rationale: "Aminoglycosides (including gentamicin) INHIBIT acetylcholine release at NMJ, worsening neuromuscular blockade. In myasthenia gravis + paralytics (anesthesia), can cause profound respiratory depression/failure. Gentamicin is also CONTRAINDICATED with other neuromuscular blocking agents and requires monitoring in myasthenia patients.",
      source: "Gentamicin - Neuromuscular Effect"
    },

    {
      id: 26,
      section: "abx-differences",
      type: "sata",
      difficulty: "hard",
      topic: "Gentamicin - Multiple Unique Concerns",
      stem: "Which characteristics are UNIQUE to aminoglycosides like gentamicin and differentiate them from other antibiotic classes? (Select all that apply)",
      options: [
        "Narrow therapeutic index requiring trough monitoring",
        "Ototoxicity and nephrotoxicity - dose-dependent and potentially irreversible",
        "Concentration-dependent killing and post-antibiotic effect (can use extended-interval dosing)",
        "Active against both rapidly dividing and stationary bacteria",
        "Requires normal renal function - contraindicated in renal failure"
      ],
      answers: [0, 1, 2],
      rationale: "Aminoglycoside UNIQUE features: NTI (trough monitoring essential), ototoxicity/nephrotoxicity (dose-dependent), CONCENTRATION-DEPENDENT killing (higher peak concentration = better kill), post-antibiotic effect (extended-interval dosing possible), INACTIVE against anaerobes and fastidious gram-positives. Can be used with renal impairment (dose adjustment required, not contraindicated).",
      source: "Aminoglycoside - Unique Characteristics"
    },

    {
      id: 27,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Carbapenems (Imipenem) - Unique CNS Penetration",
      stem: "Why is IMIPENEM (a carbapenem) considered for serious CNS infections like meningitis, while penicillins have poor CNS penetration?",
      options: [
        "Imipenem is larger and penetrates better than penicillins",
        "Imipenem is more lipophilic and crosses the blood-brain barrier better than penicillins, achieving therapeutic CSF levels even for resistant organisms",
        "Imipenem is contraindicated in meningitis",
        "Penicillins cannot reach the brain at all",
        "Imipenem is only for Gram-negative infections"
      ],
      answer: 1,
      rationale: "Carbapenems (especially imipenem) have SUPERIOR CNS penetration compared to penicillins. Imipenem can achieve therapeutic CSF levels sufficient for CNS infections. UNIQUE CONCERN: imipenem can cause seizures, especially in elderly patients, those on seizure-lowering-threshold drugs, or with renal impairment. Seizure risk requires monitoring and dose adjustment.",
      source: "Imipenem - CNS Penetration"
    },

    {
      id: 28,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Imipenem - Cilastin's Unique Role",
      stem: "Imipenem is always formulated with cilastin (as Primaxin). What is cilastin's UNIQUE role?",
      options: [
        "Cilastin enhances imipenem's antibacterial activity",
        "Cilastin prevents bacterial resistance to imipenem",
        "Cilastin inhibits dehydropeptidase enzyme that would break down imipenem in renal tubules, allowing the antibiotic to remain active longer",
        "Cilastin is an antibiotic that works with imipenem",
        "Cilastin reduces imipenem's nephrotoxicity"
      ],
      answer: 2,
      rationale: "Cilastin is a DEHYDROPEPTIDASE INHIBITOR. Dehydropeptidase would rapidly degrade imipenem in the kidneys, reducing drug availability. Cilastin prevents this degradation, allowing imipenem to maintain therapeutic levels. This is a UNIQUE formulation consideration - imipenem cannot be used without cilastin for systemic infections.",
      source: "Imipenem-Cilastin - Unique Combination"
    },

    {
      id: 29,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Cephalosporin Spectrum - Ceftazidime & Cefuroxime",
      stem: "What is the CRITICAL difference between ceftazidime and cefuroxime that makes them fundamentally different agents?",
      options: [
        "Ceftazidime covers Gram-positive; cefuroxime covers Gram-negative",
        "Ceftazidime (3rd gen) UNIQUELY covers Pseudomonas aeruginosa; cefuroxime (2nd gen) DOES NOT cover Pseudomonas or anaerobes",
        "Cefuroxime is more effective than ceftazidime",
        "Both agents have identical spectrum",
        "Ceftazidime is contraindicated in infections"
      ],
      answer: 1,
      rationale: "3rd-generation cephalosporins (ceftazidime) uniquely cover Pseudomonas aeruginosa - critical for serious Gram-negative infections in hospitalized/immunocompromised patients. 2nd-generation cephalosporins (cefuroxime) do NOT cover Pseudomonas or anaerobes. This spectrum difference is CRITICAL for empiric therapy decisions.",
      source: "Cephalosporin - Spectrum Differences"
    },

    {
      id: 30,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Beta-Lactamase Resistance - Key Agents",
      stem: "Which antibiotics are resistant to beta-lactamase enzymes (penicillinase) that would normally inactivate them?",
      options: [
        "All penicillins are beta-lactamase resistant",
        "Amoxicillin and ampicillin are beta-lactamase resistant",
        "Nafcillin, oxacillin, and cloxacillin are penicillinase-resistant penicillins; carbapenems also resist beta-lactamases",
        "Beta-lactamase resistance is impossible",
        "Only older antibiotics are beta-lactamase resistant"
      ],
      answer: 2,
      rationale: "PENICILLINASE-RESISTANT PENICILLINS (nafcillin, oxacillin, cloxacillin) contain molecular modifications preventing beta-lactamase destruction. CARBAPENEMS also resist beta-lactamases. This is CRITICAL for MRSA and other resistant organisms. Extended-spectrum beta-lactamases (ESBLs) can overcome some resistance - requiring combination therapy with beta-lactamase inhibitors.",
      source: "Beta-Lactamase Resistance"
    },

    {
      id: 31,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Beta-Lactamase Inhibitors - Clinical Use",
      stem: "Why is amoxicillin-clavulanic acid (Augmentin) effective against organisms resistant to amoxicillin alone?",
      options: [
        "Clavulanic acid is an antibiotic that kills resistant bacteria",
        "Clavulanic acid is a BETA-LACTAMASE INHIBITOR that irreversibly binds and inactivates beta-lactamase enzymes, protecting amoxicillin from destruction",
        "Clavulanic acid enhances amoxicillin's absorption",
        "Clavulanic acid has no role; amoxicillin alone covers resistant organisms",
        "The combination causes bacterial cell lysis"
      ],
      answer: 1,
      rationale: "Beta-lactamase inhibitors (clavulanic acid, sulbactam, tazobactam) DO NOT have direct antibacterial activity. They irreversibly inhibit beta-lactamase, protecting beta-lactam antibiotics from enzymatic destruction. This allows beta-lactams to reach and kill resistant organisms. CRITICAL: beta-lactamase inhibitors are only useful against beta-lactamase-producing organisms.",
      source: "Beta-Lactamase Inhibitor Mechanism"
    },

    {
      id: 32,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Ampicillin vs Amoxicillin - Clinical Difference",
      stem: "Why is AMOXICILLIN preferred over AMPICILLIN for oral therapy in most situations, even though both are aminopenicillins with similar spectra?",
      options: [
        "Amoxicillin is more potent against bacteria",
        "Amoxicillin has SUPERIOR oral bioavailability (95%) compared to ampicillin (40%); amoxicillin is better absorbed from the GI tract and not affected by food",
        "Ampicillin is outdated",
        "Amoxicillin is less expensive",
        "Ampicillin cannot be given orally"
      ],
      answer: 1,
      rationale: "CRITICAL DIFFERENCE: Amoxicillin has ~95% oral bioavailability; ampicillin has ~40%. Amoxicillin absorption is NOT significantly affected by food. This makes amoxicillin superior for oral therapy. Ampicillin is reserved for IV use or when oral therapy cannot be used. This is a UNIQUE pharmacokinetic difference among otherwise similar agents.",
      source: "Ampicillin vs Amoxicillin - Bioavailability"
    },

    {
      id: 33,
      section: "abx-differences",
      type: "sata",
      difficulty: "hard",
      topic: "Sulfonamides - Unique Mechanism & Adverse Effects",
      stem: "Which of the following are UNIQUE to SULFONAMIDES and make them different from other antibiotic classes? (Select all that apply)",
      options: [
        "MOA: inhibits bacterial FOLIC ACID synthesis, preventing DNA synthesis",
        "Used for urinary tract infections and Pneumocystis jirovecii pneumonia prophylaxis",
        "Causes Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis risk",
        "Completely safe with no significant adverse effects",
        "Can cause hemolytic anemia in G6PD-deficient patients"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Sulfonamides UNIQUE: MOA = folic acid synthesis inhibition (different from all other classes), used for UTI/PCP prophylaxis, risk of severe skin reactions (SJS/TEN), hemolytic anemia in G6PD deficiency. These factors make sulfonamides fundamentally different pharmacologically.",
      source: "Sulfonamide - Unique Features"
    },

    {
      id: 34,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Cross-Reactivity - Piperacillin & Penicillin Allergy",
      stem: "A patient with documented severe penicillin anaphylaxis is prescribed piperacillin (extended-spectrum penicillin) for serious Gram-negative/anaerobic infection. What is the critical concern?",
      options: [
        "Piperacillin is completely safe despite penicillin allergy",
        "Piperacillin can cause cross-reactivity in penicillin-allergic patients since it's still a penicillin derivative; true anaphylaxis risk exists and must be weighed against clinical need",
        "Piperacillin is a cephalosporin and safe",
        "All extended-spectrum penicillins are hypoallergenic",
        "Penicillin allergy is irrelevant for piperacillin"
      ],
      answer: 1,
      rationale: "CROSS-REACTIVITY CONCERN: Piperacillin is still a penicillin (contains beta-lactam ring), so cross-reactivity with penicillin allergy can occur. Risk is estimated at ~2-3% for anaphylaxis. Clinical decision: does the infection severity justify the anaphylaxis risk? May use with caution, allergy testing, or desensitization if necessary. Cephalosporins have lower cross-reactivity (~2-3%).",
      source: "Beta-Lactam Cross-Reactivity"
    },

    {
      id: 35,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Doxycycline - Off-Label Non-Infection Uses",
      stem: "A patient with moderate acne is prescribed doxycycline 100mg daily. What is the UNIQUE characteristic of doxycycline that allows it to be used for non-infection conditions?",
      options: [
        "Doxycycline cures acne by killing bacteria",
        "Doxycycline has ANTI-INFLAMMATORY properties independent of its antibacterial effect; this allows use for acne (reduced sebum production, decreased inflammation) and rosacea",
        "Doxycycline kills acne organisms completely",
        "All antibiotics can be used for acne",
        "Doxycycline is a topical agent only"
      ],
      answer: 1,
      rationale: "Doxycycline's UNIQUE off-label uses: acne (anti-inflammatory effect, reduces sebum), rosacea, and some data on gastroparesis (prokinetic effect). This makes doxycycline different - it's used NOT because of antibacterial action but because of other pharmacologic properties. Essential nursing knowledge: patient with doxycycline on MAR without documented infection may be treated for acne/rosacea.",
      source: "Doxycycline - Off-Label Uses"
    },

    {
      id: 36,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Metronidazole - Unique Spectrum & Alcohol Reaction",
      stem: "Why is metronidazole unique among antibiotics, and what is the CRITICAL patient education for metronidazole therapy?",
      options: [
        "Metronidazole treats most bacterial infections",
        "Metronidazole UNIQUELY covers ANAEROBES and PROTOZOA (like Trichomonas, Giardia); CRITICAL: patients MUST avoid all alcohol - disulfiram-like reaction (flushing, nausea, vomiting, hypotension) can occur",
        "Metronidazole is a typical beta-lactam antibiotic",
        "Metronidazole has no drug interactions",
        "Alcohol consumption is safe with metronidazole"
      ],
      answer: 1,
      rationale: "Metronidazole is UNIQUE for anaerobic and protozoal coverage. CRITICAL adverse effect: disulfiram-like reaction with alcohol. Patients must avoid ALL alcohol (including mouthwash, cough syrups) during therapy and for several days after completion. Reaction: severe flushing, nausea, vomiting, hypotension - potentially dangerous.",
      source: "Metronidazole - Alcohol Reaction"
    },

    {
      id: 37,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Linezolid - Unique Indication & Serious Monitoring",
      stem: "Linezolid (Zyvox) is EXPENSIVE and reserved for serious infections. What is its UNIQUE indication and what requires CRITICAL monitoring?",
      options: [
        "Linezolid is first-line for common infections",
        "Linezolid uniquely covers RESISTANT GRAM-POSITIVE organisms including MRSA and VRE; CRITICAL: must monitor CBC for THROMBOCYTOPENIA (low platelets) and serotonin syndrome risk with SSRIs",
        "Linezolid is a weak antibiotic",
        "No monitoring is required with linezolid",
        "Linezolid is safe in all patient populations"
      ],
      answer: 1,
      rationale: "Linezolid UNIQUE use: resistant Gram-positive infections (MRSA, VRE) when vancomycin fails/contraindicated. CRITICAL monitoring: thrombocytopenia (platelet reduction), especially with prolonged use. Serotonin syndrome risk with SSRIs. Bone marrow suppression documented. Cost and monitoring requirements make it reserved for serious infections.",
      source: "Linezolid - Unique Indication & Monitoring"
    },

    {
      id: 38,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Norfloxacin - Unique Bioavailability Feature",
      stem: "What is UNIQUE about norfloxacin's bioavailability that makes it different from many other fluoroquinolones?",
      options: [
        "Norfloxacin has excellent systemic absorption",
        "Norfloxacin has 100% BIOAVAILABILITY when given orally - achieved by special formulation; this high oral bioavailability is unusual among fluoroquinolones",
        "Norfloxacin cannot be given orally",
        "Norfloxacin has poor oral absorption",
        "All fluoroquinolones have identical bioavailability"
      ],
      answer: 1,
      rationale: "Norfloxacin has 100% ORAL BIOAVAILABILITY - achievement that makes it unique among older fluoroquinolones. This high bioavailability allows excellent drug levels for systemic infections via oral route. This is an example of why formulation and bioavailability matter even within the same drug class.",
      source: "Norfloxacin - Bioavailability"
    },

    {
      id: 39,
      section: "abx-differences",
      type: "sata",
      difficulty: "hard",
      topic: "Macrolide & Fluoroquinolone - QT Prolongation Risk",
      stem: "Which antibiotic classes carry BLACK BOX WARNING or significant risk for QT INTERVAL PROLONGATION? (Select all that apply)",
      options: [
        "Macrolides (azithromycin, erythromycin)",
        "Fluoroquinolones (levofloxacin, moxifloxacin)",
        "Beta-lactam antibiotics (penicillins, cephalosporins)",
        "Tetracyclines",
        "Aminoglycosides (gentamicin)"
      ],
      answers: [0, 1],
      rationale: "Macrolides and fluoroquinolones both carry QT prolongation risk. Black box warnings exist for certain combinations. Monitoring: baseline EKG, avoid use in patients with prolonged QT or taking other QT-prolonging drugs, hypokalemia correction. QT prolongation can lead to life-threatening arrhythmias (torsades de pointes).",
      source: "QT Prolongation Risk - Macrolides & FQs"
    },

    {
      id: 40,
      section: "abx-differences",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Drug Interactions - Macrolides & CYP450",
      stem: "Why do macrolides (especially erythromycin) cause significant drug interactions with CYP3A4 substrates?",
      options: [
        "Macrolides are inert and cause no interactions",
        "Macrolides INHIBIT CYP3A4 enzyme system, slowing metabolism of many drugs (statins, immunosuppressants, antihistamines); this increases drug levels and toxicity risk",
        "Macrolides induce CYP3A4, increasing metabolism",
        "Macrolides only interact with antibiotics",
        "Drug interactions are uncommon with macrolides"
      ],
      answer: 1,
      rationale: "Macrolides (especially erythromycin, clarithromycin) INHIBIT CYP3A4 → decreased metabolism of substrates → elevated drug levels → toxicity risk. Examples: increased statin levels (myositis), theophylline toxicity, warfarin interaction. This is a DEFINING characteristic requiring monitoring for drug interactions.",
      source: "Macrolide - CYP3A4 Inhibition"
    },

    // ===== HIV SECTION (14 questions) =====
    {
      id: 41,
      section: "hiv",
      type: "sata",
      difficulty: "hard",
      topic: "HIV - Transmission Routes Proven",
      stem: "Which body fluids have been scientifically PROVEN to transmit HIV? (Select all that apply)",
      options: [
        "Blood",
        "Semen",
        "Vaginal secretions",
        "Saliva",
        "Breast milk",
        "Tears"
      ],
      answers: [0, 1, 2, 4],
      rationale: "PROVEN transmission routes: blood, semen, vaginal secretions, breast milk. NOT transmitted via saliva or tears (unless blood present). Even with undetectable viral load, these fluids can contain virus. U=U concept applies when viral load <50 copies/mL sustained.",
      source: "HIV - Transmission"
    },

    {
      id: 42,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV Stages - Acute, Chronic, AIDS",
      stem: "A newly diagnosed patient has fever, rash, and malaise lasting 2 weeks but no opportunistic infections. CD4 count is 600 cells/mm³. Which stage is this patient in?",
      options: [
        "AIDS stage",
        "Chronic latency stage",
        "ACUTE INFECTION/SEROCONVERSION - initial symptomatic phase with high viral replication, before chronic asymptomatic phase begins",
        "Clinical latency",
        "Post-treatment stage"
      ],
      answer: 2,
      rationale: "HIV STAGES: (1) Acute infection/seroconversion - fever, rash, malaise, high viral replication; (2) Chronic asymptomatic - CD4 stays ~500+, minimal symptoms; (3) AIDS - CD4 <200 or opportunistic infection. This patient is in acute phase despite CD4 >200.",
      source: "HIV - Disease Stages"
    },

    {
      id: 43,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV Pathophysiology - CD4 Cell Targeting",
      stem: "Why does HIV specifically target and destroy CD4+ T cells, and what makes this impact so devastating to the immune system?",
      options: [
        "HIV randomly targets all immune cells equally",
        "HIV specifically targets CD4+ T HELPER CELLS - the central coordinators of immune response. Destruction of these cells cripples the entire immune system's ability to mount responses against pathogens",
        "HIV only affects antibody production",
        "HIV doesn't actually destroy immune cells",
        "CD4 cells are less important than other immune cells"
      ],
      answer: 1,
      rationale: "CD4+ T cells ARE the immune system's commanders. Destruction → loss of immune coordination → inability to fight infections, tumors → opportunistic infections. This makes HIV different from other infections that affect individual immune components. CD4 <200 = severe immunodeficiency.",
      source: "HIV - Pathophysiology"
    },

    {
      id: 44,
      section: "hiv",
      type: "sata",
      difficulty: "hard",
      topic: "HIV - AIDS-Defining Illnesses",
      stem: "Which conditions are AIDS-DEFINING ILLNESSES that automatically classify a patient as having AIDS (Stage 3) regardless of CD4 count? (Select all that apply)",
      options: [
        "Pneumocystis jirovecii pneumonia (PCP)",
        "Oral candidiasis",
        "Tuberculosis (TB)",
        "Common cold or influenza",
        "Cytomegalovirus (CMV) retinitis",
        "Migraine headaches"
      ],
      answers: [0, 1, 2, 4],
      rationale: "AIDS-defining illnesses include: PCP, candidiasis, TB, CMV, toxoplasmosis, cryptosporidiosis, MAC, cryptococcal meningitis. Presence of ANY AIDS-defining illness = AIDS Stage 3 regardless of CD4 count. Common infections (cold, flu, migraines) are NOT AIDS-defining.",
      source: "HIV - AIDS-Defining Illnesses"
    },

    {
      id: 45,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV Dementia - Unique CNS Complication",
      stem: "A patient with HIV/AIDS (CD4 <50) develops progressive cognitive decline, poor concentration, and behavioral changes. Which UNIQUE CNS complication is this?",
      options: [
        "Alzheimer's disease",
        "Stroke",
        "HIV-ASSOCIATED DEMENTIA (HAD) - direct HIV infection of the brain causing progressive cognitive/motor decline; can be severe with CD4 <50",
        "Opportunistic CNS infection only",
        "Normal aging"
      ],
      answer: 2,
      rationale: "HIV-ASSOCIATED DEMENTIA: HIV directly infects CNS (crosses BBB), causing progressive cognitive dysfunction, behavioral changes, and motor decline. More common with very low CD4 (<50). Different from opportunistic infections (toxoplasmosis, CMV encephalitis). ART can partially reverse HAD progression.",
      source: "HIV - Associated Dementia"
    },

    {
      id: 46,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "moderate",
      topic: "HIV - Oral Manifestations",
      stem: "A patient with HIV presents with white patches on the tongue that are painful and don't scrape off. Which oral manifestation is this?",
      options: [
        "Oral thrush (candidiasis) - white patches that DO scrape off",
        "ORAL HAIRY LEUKOPLAKIA - white patches on tongue/lateral surfaces that DON'T scrape off; caused by EBV reactivation; associated with CD4 <200",
        "Herpes simplex ulcers",
        "Gingivitis",
        "Oral cancer"
      ],
      answer: 1,
      rationale: "ORAL HAIRY LEUKOPLAKIA: white patches on tongue sides, non-removable, painless or mildly painful, associated with EBV reactivation in severe immunosuppression (CD4 <200). Different from thrush (candidiasis) which IS removable. Indicator of disease progression/need for ART optimization.",
      source: "HIV - Oral Manifestations"
    },

    {
      id: 47,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "NRTI - MOA & Class Effects",
      stem: "What is the mechanism of action of NRTIs (nucleoside reverse transcriptase inhibitors), and why can't we rely on specific drug names in nursing practice?",
      options: [
        "NRTIs directly attack HIV particles",
        "NRTIs are NUCLEOSIDE ANALOGS that mimic natural nucleotides, cause chain termination during reverse transcription, preventing HIV from converting RNA to DNA. Drug names change frequently and are complex; focus on MOA, adverse effects, black box warnings instead",
        "NRTIs boost the immune system",
        "NRTIs block protease enzyme",
        "Drug names don't matter in nursing"
      ],
      answer: 1,
      rationale: "NRTI MOA: nucleoside analogs → chain termination during reverse transcription → HIV replication blocked. Focus nursing knowledge on: MOA (not drug names), adverse effects (lactic acidosis, neuropathy, lipodystrophy), black box warnings, renal/hepatic monitoring. Specific drugs change, but MOA understanding persists.",
      source: "HIV - NRTI Mechanism"
    },

    {
      id: 48,
      section: "hiv",
      type: "sata",
      difficulty: "hard",
      topic: "NRTI - Black Box Warnings & Monitoring",
      stem: "Which serious adverse effects and monitoring requirements apply to NRTIs as a class? (Select all that apply)",
      options: [
        "Lactic acidosis - rare but life-threatening, requires monitoring of lactate levels in symptomatic patients",
        "Peripheral neuropathy - especially with stavudine and didanosine",
        "Lipodystrophy - fat redistribution (buffalo hump, lipoatrophy)",
        "Pancreatitis - inflammation of pancreas, especially with didanosine and stavudine",
        "All NRTIs cause hepatotoxicity"
      ],
      answers: [0, 1, 2, 3],
      rationale: "NRTI class adverse effects: lactic acidosis (rare, serious), neuropathy, lipodystrophy, pancreatitis, bone marrow suppression (some agents). NOT all are hepatotoxic. Nursing monitoring: lactate if symptomatic, pancreatic enzymes baseline/periodic, lipid panel, CBC, assess for neuropathy symptoms.",
      source: "NRTI - Black Box Warnings"
    },

    {
      id: 49,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "CD4 Count - Clinical Significance Thresholds",
      stem: "What clinical significance does a CD4 count of 50 cells/mm³ have, and what is the nursing implication?",
      options: [
        "CD4 <50 means patient is completely immune competent",
        "CD4 <50 = SEVERE IMMUNOSUPPRESSION with risk for OPPORTUNISTIC INFECTIONS (CMV, cryptococcus, MAC); requires prophylaxis and close monitoring for opportunistic infections",
        "CD4 levels don't matter clinically",
        "CD4 <50 means patient will not survive",
        "CD4 <50 indicates allergy to ART"
      ],
      answer: 1,
      rationale: "CD4 <50 = CRITICAL immunosuppression. Opportunistic infection prophylaxis required (MAC prophylaxis, PCP prophylaxis, CMV prophylaxis). Close monitoring for OI symptoms, rapid intervention needed. CD4 recovery with ART takes time; meanwhile, OI prevention is critical.",
      source: "HIV - CD4 Clinical Significance"
    },

    {
      id: 50,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Viral Load - Undetectable = Untransmittable",
      stem: "A patient on effective ART achieves viral load <50 copies/mL for 12 months. What does the U=U principle state about transmission risk?",
      options: [
        "Viral load doesn't affect transmission risk",
        "UNDETECTABLE = UNTRANSMITTABLE (U=U) - sustained viral load <50 copies/mL means ZERO risk of sexual HIV transmission to partners",
        "Undetectable viral load can rebound unpredictably",
        "U=U only applies to some populations",
        "Transmission is possible despite undetectable viral load"
      ],
      answer: 1,
      rationale: "U=U: supported by PARTNER and Opposites Attract studies. Sustained undetectable viral load (<50 copies/mL) = NO sexual transmission risk. CRITICAL: requires adherence to ART, ongoing monitoring, and doesn't protect against other STIs. Game-changing principle for HIV stigma reduction and prevention.",
      source: "HIV - U=U Concept"
    },

    {
      id: 51,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "HIV Attachment & Entry - Coreceptor Tropism",
      stem: "A patient newly diagnosed with HIV is tested for coreceptor tropism. What is the clinical significance of determining whether the virus uses CCR5 or CXCR4 coreceptors?",
      options: [
        "Coreceptor tropism has no clinical importance",
        "CCR5-tropic viruses are weaker than CXCR4-tropic",
        "CORECEPTOR TROPISM DETERMINES ART SELECTION: CCR5-tropic (R5) viruses allow use of CCR5 antagonists; CXCR4-tropic (X4) viruses do not; testing guides treatment decisions for entry inhibitors",
        "All coreceptors are identical",
        "Coreceptor testing is never indicated"
      ],
      answer: 2,
      rationale: "HIV attachment requires coreceptors: CCR5 or CXCR4. Tropism testing (genotypic) determines if entry inhibitors like maraviroc (CCR5 antagonist) can be used. X4-tropic viruses don't respond to CCR5 antagonists. This exemplifies personalized HIV treatment based on viral characteristics.",
      source: "HIV - Coreceptor Tropism & Treatment Selection"
    },

    {
      id: 52,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Reverse Transcriptase - Core HIV Replication Enzyme",
      stem: "Why is reverse transcriptase such a critical target for HIV medications, and what makes this enzyme unique to retroviruses?",
      options: [
        "Reverse transcriptase is found in all viruses",
        "REVERSE TRANSCRIPTASE is UNIQUE to RETROVIRUSES and allows HIV to convert RNA genome to DNA for integration into host chromosome; targeting this enzyme blocks HIV replication at the critical conversion step",
        "Reverse transcriptase is unimportant for HIV",
        "All human cells have reverse transcriptase",
        "Targeting RT doesn't affect HIV"
      ],
      answer: 1,
      rationale: "Reverse transcriptase (RT) is the key enzyme distinguishing HIV (retrovirus) from other viruses. It converts viral RNA → DNA → integration into host genome. NRTIs (nucleoside analogs) and NNRTIs (non-nucleoside inhibitors) target RT at different steps. This is why RT inhibitors are cornerstone of ART.",
      source: "HIV - Reverse Transcriptase"
    },

    {
      id: 53,
      section: "hiv",
      type: "sata",
      difficulty: "hard",
      topic: "HIV Integrase - Critical for Viral Integration",
      stem: "Integrase inhibitors are increasingly used in HIV treatment. Which statements about integrase are correct? (Select all that apply)",
      options: [
        "Integrase catalyzes integration of viral DNA into the host chromosome",
        "Integrase is targeted by drugs like dolutegravir and bictegravir",
        "Integrase inhibitors are no longer used in modern ART",
        "Without integrase function, HIV cannot establish persistent infection",
        "Integrase inhibitors have no clinical significance"
      ],
      answers: [0, 1, 3],
      rationale: "Integrase enables HIV DNA integration into host genome - critical step for persistent infection. Integrase inhibitors (dolutegravir, bictegravir) prevent integration. Without integration, viral DNA cannot hide in host cell nucleus, so infection cannot become latent. Modern ART often uses integrase inhibitor-based regimens.",
      source: "HIV - Integrase & Integration"
    },

    {
      id: 54,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Protease Inhibitors - Final Step of Viral Assembly",
      stem: "Protease inhibitors prevent HIV assembly by blocking which critical step?",
      options: [
        "Viral attachment to CD4 cells",
        "PROTEASE CLEAVES HIV proteins into functional forms during viral assembly; PI inhibition prevents this cleavage, producing immature, non-infectious virus particles",
        "Reverse transcription",
        "Integration",
        "Viral budding"
      ],
      answer: 1,
      rationale: "Protease is HIV enzyme that cleaves Gag/Pol polyproteins into mature, functional viral proteins during particle maturation. PIs block this cleavage, producing immature, non-infectious virions. PIs have important drug interactions and resistance patterns in modern ART.",
      source: "HIV - Protease Inhibitors Mechanism"
    },

    {
      id: 55,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Adherence & Resistance Development in ART",
      stem: "Why is adherence to antiretroviral therapy so critical for preventing treatment failure and resistance?",
      options: [
        "Adherence doesn't matter in HIV treatment",
        "SUBTHERAPEUTIC DRUG LEVELS (from missing doses) allow HIV replication at low level, creating selection pressure for RESISTANT STRAINS; single resistant mutation can emerge from one missed dose; multiple resistant strains reduce future treatment options",
        "Resistance never develops to ART",
        "Poor adherence only affects the individual, not treatment options",
        "Resistance is irrelevant in modern medicine"
      ],
      answer: 1,
      rationale: "HIV resistance: single missed dose → subtherapeutic levels → viral replication → resistant mutations emerge. Multi-drug resistant HIV increasingly common with poor adherence. >90-95% adherence required to prevent resistance. Resistance to one drug can confer cross-resistance to whole drug class, limiting future options.",
      source: "HIV - Adherence & Resistance Prevention"
    },

    {
      id: 56,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "MAC Prophylaxis - Opportunistic Infection Prevention",
      stem: "A patient with CD4 <50 is prescribed azithromycin prophylaxis. Against which opportunistic infection is this protecting?",
      options: [
        "MAC (Mycobacterium avium complex) - a severe disseminated mycobacterial infection that occurs when CD4 <50; azithromycin prophylaxis reduces MAC risk dramatically",
        "Tuberculosis",
        "Cytomegalovirus",
        "Pneumocystis jirovecii",
        "Cryptococcosis"
      ],
      answer: 0,
      rationale: "MAC prophylaxis: azithromycin given when CD4 <50 to prevent Mycobacterium avium complex disseminated infection. MAC typically presents with fever, fatigue, abdominal pain, diarrhea. ART-induced CD4 recovery >50 allows discontinuation of MAC prophylaxis (immune reconstitution allows natural control).",
      source: "HIV - MAC Prophylaxis"
    },

    {
      id: 57,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "PCP Prophylaxis - TMP-SMX as Gold Standard",
      stem: "Why is trimethoprim-sulfamethoxazole (TMP-SMX) preferred for Pneumocystis jirovecii prophylaxis in patients with CD4 <200?",
      options: [
        "TMP-SMX is expensive and rarely used",
        "TMP-SMX provides COVERAGE for MULTIPLE opportunistic infections including PCP, toxoplasmosis, and some bacterial organisms; it's first-line and highly effective",
        "PCP prophylaxis is never indicated",
        "TMP-SMX has no benefit",
        "Dapsone is always used instead"
      ],
      answer: 1,
      rationale: "TMP-SMX is gold-standard PCP prophylaxis for CD4 <200. BONUS: provides simultaneous coverage for toxoplasmosis and some bacterial infections. Alternatives (pentamidine, dapsone) exist but have fewer benefits. Once CD4 >200 on ART for 3+ months, PCP prophylaxis can be discontinued.",
      source: "HIV - PCP Prophylaxis"
    },

    {
      id: 58,
      section: "hiv",
      type: "sata",
      difficulty: "hard",
      topic: "Immune Reconstitution Inflammatory Syndrome (IRIS)",
      stem: "IRIS is a paradoxical worsening of symptoms that can occur with ART initiation. Which statements about IRIS are accurate? (Select all that apply)",
      options: [
        "IRIS occurs when rapidly recovering CD4 cells mount inflammatory response against opportunistic pathogens or antigens",
        "IRIS typically occurs within first weeks to months after starting ART as CD4 recovers",
        "IRIS indicates treatment failure and ART should be stopped",
        "Prevention strategies include delaying ART until CD4 >200 (contradicts current guidelines)",
        "Management includes continuing ART and sometimes adding corticosteroids to control inflammation"
      ],
      answers: [0, 1, 4],
      rationale: "IRIS: paradoxical clinical deterioration as recovering CD4 cells recognize and react to previously unrecognized pathogens (e.g., TB, cryptococcus, MAC, OIs). Does NOT indicate ART failure. Management: continue ART, treat underlying condition, sometimes corticosteroids. Current guidelines: start ART early even with CD4 <50 (benefits outweigh IRIS risk).",
      source: "HIV - IRIS"
    },

    {
      id: 59,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Opportunistic Infection Prophylaxis - CD4 Thresholds",
      stem: "A patient's CD4 count drops to 180 cells/mm³. Which opportunistic infection prophylaxis becomes indicated at this threshold?",
      options: [
        "No prophylaxis is needed",
        "Only MAC prophylaxis is used",
        "PCP PROPHYLAXIS (with TMP-SMX) becomes indicated when CD4 <200; toxoplasmosis prophylaxis also recommended in seropositive patients",
        "All OI prophylaxis is stopped",
        "Only antiviral prophylaxis is needed"
      ],
      answer: 2,
      rationale: "CD4 THRESHOLDS: <200 = PCP prophylaxis; <100 = toxoplasmosis prophylaxis; <50 = MAC prophylaxis + CMV prophylaxis + cryptococcal antigen screening. This staircase approach prevents most opportunistic infections while CD4 recovers with ART.",
      source: "HIV - OI Prophylaxis Thresholds"
    },

    {
      id: 60,
      section: "hiv",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Long-Acting Injectables in HIV Treatment",
      stem: "What represents a major advantage of long-acting injectable ART (like cabotegravir + rilpivirine given monthly or bimontly) for HIV treatment?",
      options: [
        "Injectable ART is less effective than oral ART",
        "LONG-ACTING INJECTABLES improve adherence by reducing dosing frequency, provide sustained viral suppression with less frequent dosing, and reduce daily medication burden",
        "Injectables cannot suppress viral load",
        "Injectable ART is only for advanced disease",
        "Patients prefer oral medications"
      ],
      answer: 1,
      rationale: "Long-acting injectables (cabotegravir + rilpivirine monthly or bimonthly): revolutionary approach to adherence challenges. For patients struggling with daily pills, injectables provide sustained viral suppression. Requires undetectable baseline viral load before initiation. Represents future of HIV treatment personalization.",
      source: "HIV - Long-Acting Injectables"
    },

    // ===== ANTIVIRAL SECTION (20 questions) =====
    {
      id: 61,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Acyclovir - Mechanism & Herpes Persistance",
      stem: "A patient with genital HSV-2 recurrence is prescribed acyclovir. Why does acyclovir NOT cure herpes despite being effective at reducing symptoms?",
      options: [
        "Acyclovir is ineffective against herpes",
        "Acyclovir INHIBITS viral replication during ACTIVE infection, reducing symptoms and viral shedding, but does NOT eliminate dormant virus latent in nerve ganglia; virus persists and can reactivate",
        "Acyclovir cures some people but not others",
        "Recurrences are from reinfection, not viral reactivation",
        "Herpes cannot be treated with acyclovir"
      ],
      answer: 1,
      rationale: "Acyclovir MOA: inhibits viral DNA polymerase during active replication. Does NOT eradicate latent virus in sensory neurons. Recurrences occur when latent virus reactivates (stress, immunosuppression, HSV-2 naturally recurs more frequently than HSV-1). Suppressive acyclovir therapy can reduce recurrence frequency.",
      source: "Acyclovir - Mechanism"
    },

    {
      id: 52,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Oseltamivir - Window of Effectiveness",
      stem: "A patient with influenza presents 72 hours after symptom onset. Why is oseltamivir (Tamiflu) therapy at this point likely INEFFECTIVE?",
      options: [
        "Oseltamivir is always ineffective",
        "Oseltamivir must be started WITHIN 48 HOURS of symptom onset to be effective; starting >48 hours means viral replication is already established and oseltamivir provides minimal benefit",
        "Oseltamivir works at any time",
        "72 hours is the ideal time",
        "Patient immune system will take over"
      ],
      answer: 1,
      rationale: "Oseltamivir (neuraminidase inhibitor) works ONLY during active viral replication. Window: <48 hours from symptom onset. After 48 hours, viral replication is decreasing naturally, oseltamivir provides minimal additional benefit. This timing constraint is CRITICAL for clinical effectiveness.",
      source: "Oseltamivir - Timing"
    },

    {
      id: 53,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Ganciclovir - Black Box Warnings & Teratogenicity",
      stem: "A female patient of childbearing age is prescribed ganciclovir for CMV retinitis. What is the CRITICAL black box warning that applies to this patient?",
      options: [
        "Ganciclovir has no adverse effects",
        "Ganciclovir carries BLACK BOX WARNING for TERATOGENICITY in both males and females; females of childbearing age should avoid pregnancy during and after therapy; males may have fertility impairment",
        "Ganciclovir is safe in pregnancy",
        "Only males need to be cautious",
        "Teratogenicity is a mild side effect"
      ],
      answer: 1,
      rationale: "Ganciclovir BLACK BOX WARNINGS: teratogenicity (both sexes), pancytopenia, nephrotoxicity, fertility impairment. Females of childbearing potential must use effective contraception. Males may have impaired fertility. This is CRITICAL patient counseling.",
      source: "Ganciclovir - Teratogenicity"
    },

    {
      id: 54,
      section: "antivirals",
      type: "sata",
      difficulty: "hard",
      topic: "Ganciclovir - Multiple Black Box Warnings",
      stem: "Ganciclovir carries FOUR black box warnings. Which of the following are documented? (Select all that apply)",
      options: [
        "Hematologic toxicity/pancytopenia (all blood cell lines suppressed)",
        "Nephrotoxicity with acute kidney injury risk",
        "Teratogenicity and fertility impairment",
        "Permanent liver failure",
        "Immediate fatal reactions on administration"
      ],
      answers: [0, 1, 2],
      rationale: "Ganciclovir black box warnings: (1) hematologic toxicity - pancytopenia affecting all cell lines, (2) nephrotoxicity - renal impairment risk, (3) teratogenicity - fertility impairment both sexes, (4) sometimes listed as retinitis risk in immunocompromised. Liver failure and immediate fatal reactions are NOT documented.",
      source: "Ganciclovir - Black Box Warnings Complete"
    },

    {
      id: 55,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Antivirals - Prophylaxis vs Treatment Dosing",
      stem: "Why is prophylactic dosing of antivirals (e.g., acyclovir for HSV prophylaxis) DIFFERENT from treatment dosing?",
      options: [
        "Prophylaxis and treatment doses are identical",
        "PROPHYLAXIS uses LOWER doses because the goal is prevention of reactivation, not treatment of active infection; lower doses reduce viral reactivation risk while minimizing toxicity",
        "Prophylaxis uses higher doses",
        "Dosing doesn't matter",
        "Prophylaxis is never used"
      ],
      answer: 1,
      rationale: "Prophylaxis vs treatment dosing: prophylaxis = lower doses to suppress/reduce reactivation; treatment = higher doses to combat active viral replication. Example: acyclovir prophylaxis 400-800mg daily vs treatment 800mg 4-5x/day for active HSV. Cost and side effect profiles differ accordingly.",
      source: "Antiviral - Dosing Differences"
    },

    {
      id: 56,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Antiviral Resistance - Emerging Concern",
      stem: "What makes antiviral resistance particularly concerning in HIV-treated patients or those on prolonged suppressive therapy?",
      options: [
        "Resistance never develops to antivirals",
        "Viral mutations during replication can confer resistance to NRTIs, non-NRTIs, protease inhibitors; incomplete adherence accelerates resistance development, reducing treatment options",
        "Only bacteria develop resistance",
        "Antiviral resistance is impossible",
        "Resistance is a minor concern"
      ],
      answer: 1,
      rationale: "Antiviral resistance: HIV/HSV/other viruses can develop mutations conferring resistance. Incomplete ART adherence → subtherapeutic levels → selection for resistant strains. Resistance testing important for treatment decisions. Multiple-drug-resistant HIV increasingly challenging.",
      source: "Antiviral - Resistance"
    },

    {
      id: 57,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Foscarnet - Unique MOA & Toxicity",
      stem: "Foscarnet is used when ganciclovir-resistant CMV occurs. What is foscarnet's UNIQUE mechanism, and what is its most serious adverse effect?",
      options: [
        "Foscarnet works identically to ganciclovir",
        "Foscarnet DIRECTLY INHIBITS viral DNA polymerase (doesn't require viral phosphorylation like ganciclovir); SERIOUS ADVERSE EFFECT: NEPHROTOXICITY and ELECTROLYTE ABNORMALITIES (especially hypocalcemia, hypomagnesemia) - can be life-threatening",
        "Foscarnet causes no toxicity",
        "Foscarnet is used for bacterial infections",
        "Foscarnet has mild side effects"
      ],
      answer: 1,
      rationale: "Foscarnet MOA: direct viral DNA polymerase inhibition (different from ganciclovir which requires viral phosphorylation). Used for ganciclovir-resistant CMV. CRITICAL monitoring: electrolytes (calcium, magnesium), renal function. Hypocalcemia and hypomagnesemia can cause seizures, arrhythmias.",
      source: "Foscarnet - Unique MOA"
    },

    {
      id: 68,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Antiviral - Immunocompromised Patients & Opportunistic Viruses",
      stem: "Why do patients with CD4 <50 require antiviral PROPHYLAXIS against CMV and HSV, and what makes this different from treating acute infections?",
      options: [
        "Prophylaxis isn't needed in immunocompromised patients",
        "PROPHYLAXIS prevents opportunistic viral reactivation (CMV, HSV) in severely immunocompromised patients; goal is prevention, not treatment; lower doses, less toxicity",
        "All antivirals are the same regardless of indication",
        "Only treatment is used, never prophylaxis",
        "Opportunistic viruses don't occur with CD4 <50"
      ],
      answer: 1,
      rationale: "CD4 <50: CMV retinitis, esophagitis, colitis risk; HSV/VZV reactivation risk. Prophylaxis (acyclovir, valacyclovir for HSV/VZV; ganciclovir if CMV prophylaxis needed) reduces opportunistic infection risk while CD4 recovers with ART. Different from treatment dosing.",
      source: "Antiviral - OI Prophylaxis"
    },

    {
      id: 69,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Valacyclovir - Enhanced Bioavailability",
      stem: "How does valacyclovir (Valtrex) differ from acyclovir in terms of pharmacokinetics and clinical utility?",
      options: [
        "Valacyclovir is identical to acyclovir",
        "VALACYCLOVIR IS A PRODRUG of acyclovir with SUPERIOR oral bioavailability (55% vs acyclovir 15-20%), allowing LESS FREQUENT DOSING; converted to acyclovir in body after absorption",
        "Valacyclovir is IV-only",
        "Valacyclovir cannot treat herpes",
        "Valacyclovir has worse absorption"
      ],
      answer: 1,
      rationale: "Valacyclovir: prodrug with much higher oral bioavailability than acyclovir, allowing 2-3x daily dosing vs acyclovir's 4-5x daily. Same mechanism once converted to acyclovir. Preferred for oral HSV/VZV treatment. Cost and dosing frequency make valacyclovir more practical than acyclovir.",
      source: "Valacyclovir - Bioavailability Advantage"
    },

    {
      id: 70,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "CMV Treatment - Ganciclovir vs Valganciclovir",
      stem: "For CMV retinitis in an AIDS patient, ganciclovir can be given IV or valganciclovir orally. What is the relationship between these two drugs?",
      options: [
        "They are completely different drugs",
        "VALGANCICLOVIR IS A PRODRUG of ganciclovir with better oral bioavailability, allowing ORAL MAINTENANCE therapy after IV induction; converts to ganciclovir in body",
        "Valganciclovir is less effective",
        "Only IV ganciclovir works for CMV",
        "Valganciclovir is used only for herpes"
      ],
      answer: 1,
      rationale: "Valganciclovir: L-valyl ester prodrug of ganciclovir, achieves systemic ganciclovir levels comparable to IV formulation. Allows oral maintenance after IV ganciclovir induction. Significant advance in CMV treatment convenience while maintaining efficacy.",
      source: "Valganciclovir - Prodrug Advantage"
    },

    {
      id: 71,
      section: "antivirals",
      type: "sata",
      difficulty: "hard",
      topic: "Antiviral Drug-Drug Interactions - Critical Concerns",
      stem: "Which statements about antiviral drug interactions are accurate? (Select all that apply)",
      options: [
        "Foscarnet can cause seizures when combined with anticonvulsants due to complex interactions",
        "Ganciclovir combined with zidovudine (AZT) causes additive neutropenia and hematologic toxicity",
        "Acyclovir has minimal drug interactions with other medications",
        "Antivirals never interact with ART medications",
        "Antivirals are safe to combine without monitoring"
      ],
      answers: [0, 1, 2],
      rationale: "Antiviral interactions: foscarnet can interact with anticonvulsants/other electrolyte-altering drugs; ganciclovir + AZT = additive myelosuppression; acyclovir relatively safe. Other antivirals (protease inhibitors, ritonavir) significantly inhibit cytochrome P450. Monitoring required when combining with other agents.",
      source: "Antiviral - Drug Interactions"
    },

    {
      id: 72,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Cidofovir - Long-Acting CMV Therapy",
      stem: "Cidofovir is used for CMV retinitis refractory to ganciclovir. What is unique about cidofovir's pharmacokinetics?",
      options: [
        "Cidofovir requires daily injections",
        "CIDOFOVIR has LONG INTRACELLULAR HALF-LIFE, allowing INFREQUENT DOSING (weekly or biweekly); metabolized intracellularly to active form persisting for weeks",
        "Cidofovir works identically to acyclovir",
        "Cidofovir is given orally",
        "Cidofovir has no advantages"
      ],
      answer: 1,
      rationale: "Cidofovir: nucleotide (not nucleoside) with unique long intracellular half-life. Dosed weekly or biweekly IV. Effective for ganciclovir-resistant CMV. CRITICAL: dose-limiting nephrotoxicity requires aggressive hydration and probenecid prophylaxis to reduce renal toxicity.",
      source: "Cidofovir - Long-Acting"
    },

    {
      id: 73,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Antivirals - Viral Shedding & Transmission Prevention",
      stem: "A patient on suppressive acyclovir therapy asks if they can still transmit herpes to their partner. What is the accurate nursing response?",
      options: [
        "Suppressive therapy eliminates transmission risk completely",
        "SUPPRESSIVE THERAPY REDUCES (not eliminates) viral shedding and transmission risk by ~50-70%; transmission can still occur even on prophylaxis, especially during asymptomatic shedding",
        "Herpes cannot be transmitted if on medication",
        "Suppressive therapy has no effect on transmission",
        "All transmission occurs only during active symptoms"
      ],
      answer: 1,
      rationale: "Suppressive antiviral therapy (acyclovir, valacyclovir) reduces asymptomatic viral shedding and transmission risk significantly but does NOT eliminate it. Condom use and/or partner prophylaxis still recommended. Asymptomatic shedding can occur even on suppressive therapy.",
      source: "Antiviral - Transmission Risk Reduction"
    },

    {
      id: 74,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Oseltamivir - Neuraminidase Inhibition Mechanism",
      stem: "Oseltamivir prevents influenza spread from infected cells by which mechanism?",
      options: [
        "Oseltamivir directly kills influenza virus",
        "Oseltamivir prevents viral attachment to cells",
        "OSELTAMIVIR INHIBITS NEURAMINIDASE, an enzyme on viral surface that allows NEW VIRIONS to be released from infected cells; blocked neuraminidase = virus trapped inside cell = limited spread",
        "Oseltamivir boosts immune response",
        "Oseltamivir prevents viral replication"
      ],
      answer: 2,
      rationale: "Neuraminidase inhibitor MOA: neuraminidase (sialidase) on influenza viral surface cleaves sialic acid receptors, releasing new viral particles. OSI inhibition traps virus inside infected cells, preventing spread to neighboring cells. Unique mechanism different from other antiviral classes.",
      source: "Oseltamivir - Neuraminidase Mechanism"
    },

    {
      id: 75,
      section: "antivirals",
      type: "sata",
      difficulty: "hard",
      topic: "Antivirals & Renal Function - Monitoring Requirements",
      stem: "Which antivirals require careful renal dose adjustment and monitoring of kidney function? (Select all that apply)",
      options: [
        "Acyclovir - risk of crystalline nephropathy at high doses, especially with dehydration",
        "Ganciclovir - dose-limiting nephrotoxicity, requires renal dosing",
        "Foscarnet - severe nephrotoxicity and electrolyte wasting, requires aggressive hydration",
        "Cidofovir - dose-limiting nephrotoxicity, requires hydration and probenecid co-administration",
        "Valacyclovir - no renal considerations at any dose"
      ],
      answers: [0, 1, 2, 3],
      rationale: "Renal monitoring critical for acyclovir (crystalline nephropathy), ganciclovir (dose reduction needed), foscarnet (hydration essential), cidofovir (most nephrotoxic, requires probenecid prophylaxis). Valacyclovir generally safe but watch for high-dose effects. Baseline renal function and frequent monitoring essential.",
      source: "Antiviral - Renal Safety"
    },

    {
      id: 76,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Zanamivir - Alternative Neuraminidase Inhibitor",
      stem: "Zanamivir (Relenza) is an alternative to oseltamivir for influenza. What is unique about zanamivir's route of administration?",
      options: [
        "Zanamivir is given IV",
        "Zanamivir is given orally like oseltamivir",
        "ZANAMIVIR IS INHALED as a dry powder; high intrapulmonary concentration treats respiratory influenza infection",
        "Zanamivir is given IM",
        "Zanamivir is topical"
      ],
      answer: 2,
      rationale: "Zanamivir: INHALED antiviral for influenza. Achieves high pulmonary concentrations where influenza replicates. Similar mechanism to oseltamivir (neuraminidase inhibition). Benefits: pulmonary targeting. Drawback: airway irritation, contraindicated in COPD/asthma. Both zanamivir and oseltamivir must start <48 hours from symptom onset.",
      source: "Zanamivir - Inhalation Route"
    },

    {
      id: 77,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Ribavirin - Broad Spectrum & Teratogenicity Risk",
      stem: "Ribavirin is used for severe respiratory viral infections (RSV, some hemorrhagic fevers). What is the CRITICAL black box warning?",
      options: [
        "Ribavirin is completely safe",
        "Ribavirin has no drug interactions",
        "RIBAVIRIN CARRIES BLACK BOX WARNING FOR TERATOGENICITY - significant risk of birth defects; both males and females of childbearing age must use reliable contraception during and after therapy",
        "Ribavirin is safe in pregnancy",
        "Teratogenicity is mild"
      ],
      answer: 2,
      rationale: "Ribavirin: broad-spectrum antiviral used for RSV, some hemorrhagic fevers. BLACK BOX: teratogenicity (both sexes must avoid pregnancy), must use contraception. Also: hemolytic anemia, elevated transaminases. Monitoring: CBC, LFTs. Limited availability due to toxicity profile.",
      source: "Ribavirin - Teratogenicity"
    },

    {
      id: 78,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Palivizumab - Monoclonal Antibody for RSV",
      stem: "Palivizumab (Synagis) is unique among antivirals as a monoclonal antibody. What is its mechanism and specific indication?",
      options: [
        "Palivizumab inhibits viral replication",
        "PALIVIZUMAB IS A MONOCLONAL ANTIBODY against RSV fusion (F) protein; provides PASSIVE IMMUNITY; indicated for HIGH-RISK infants (premature <29 weeks, chronic lung disease, congenital heart disease) for RSV PROPHYLAXIS only, not treatment",
        "Palivizumab treats all viral infections",
        "Palivizumab is given orally",
        "Palivizumab treats adult pneumonia"
      ],
      answer: 1,
      rationale: "Palivizumab: humanized monoclonal antibody vs RSV fusion protein. PROPHYLAXIS only (not treatment) for high-risk infants. Given IM during RSV season monthly. Does NOT treat active RSV infection. Represents shift toward immunotherapy/passive immunity approaches in viral disease prevention.",
      source: "Palivizumab - Monoclonal Antibody"
    },

    {
      id: 79,
      section: "antivirals",
      type: "sata",
      difficulty: "hard",
      topic: "Antiviral Adverse Effects - Nervous System",
      stem: "Which antivirals are associated with significant CNS adverse effects that require patient monitoring? (Select all that apply)",
      options: [
        "Acyclovir - encephalopathy, confusion, hallucinations, especially in high doses or renal impairment",
        "Foscarnet - seizures from electrolyte abnormalities (hypocalcemia, hypomagnesemia)",
        "Ganciclovir - peripheral neuropathy and psychosis rarely",
        "Oseltamivir - neuropsychiatric effects (confusion, hallucinations) reported, particularly in pediatrics",
        "Valacyclovir - no CNS effects at any dose"
      ],
      answers: [0, 1, 2, 3],
      rationale: "CNS effects: acyclovir encephalopathy (especially IV high-dose), foscarnet seizures from electrolytes, ganciclovir neurotoxicity possible, oseltamivir neuropsychiatric effects documented. Valacyclovir generally safer. Patient monitoring for confusion, behavioral changes, hallucinations essential especially in high-risk patients (elderly, renal impairment, immunocompromised).",
      source: "Antiviral - CNS Effects"
    },

    {
      id: 80,
      section: "antivirals",
      type: "multiple-choice",
      difficulty: "hard",
      topic: "Antiviral Treatment Duration - When to Stop",
      stem: "When can antiviral prophylaxis (e.g., MAC prophylaxis or CMV prophylaxis) be safely discontinued in HIV-positive patients?",
      options: [
        "Prophylaxis is lifelong, never discontinued",
        "Prophylaxis can be stopped immediately after starting ART",
        "PROPHYLAXIS CAN BE DISCONTINUED after CD4 RECOVERY >100-200 cells/mm³ for 3+ MONTHS on ART (depending on specific infection); immune reconstitution allows natural control of opportunistic pathogens",
        "Prophylaxis causes more harm than benefit",
        "CD4 count is irrelevant to prophylaxis duration"
      ],
      answer: 2,
      rationale: "Prophylaxis discontinuation: when CD4 >100-200 on effective ART for 3+ months, immune reconstitution allows natural OI control. MAC prophylaxis stopped when CD4 >50 for 3+ months; PCP prophylaxis when CD4 >200 for 3+ months. Early prophylaxis discontinuation risks relapse; delayed discontinuation wastes resources. Immune reconstitution testing important.",
      source: "Antiviral - Prophylaxis Duration"
    }
  ]
};
