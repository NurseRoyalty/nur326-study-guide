/* ============================================================
   week1-hiv-quiz-quiz.js — inline Practice Questions for HIV & Antiretroviral Therapy (ART) — Practice Questions.

   PROVENANCE: all stems, options, and rationales are sourced
   exclusively from week1-hiv.html's own lecture content —
   none of it is from outside pharmacology knowledge. Generated
   2026-08-23 per the user's request for Week 1 practice questions,
   NCLEX NGN/clinical-judgment style, answer-position rotated,
   checked against the four shuffle-surviving defects in CLAUDE.md.
   The identical question set also lives in data/quiz-bank.js under
   this topic, for the Build Your Own Exam picker.
   ============================================================ */
window.EXAM_DATA = {
  id: "week1-hiv-quiz",
  title: "HIV & Antiretroviral Therapy (ART) — Practice Questions",

  questions: [
    {
      stem: "A nursing student is reviewing the HIV life cycle. Which event occurs first when HIV encounters a susceptible host cell?",
      options: [
        "The virus binds to the CD4 receptor on the host cell surface.",
        "Reverse transcriptase converts viral RNA into a DNA copy.",
        "HIV integrase inserts viral DNA into the host cell's genome.",
        "New viral copies are released to infect other CD4 cells."
      ],
      answer: 0,
      rationale: "Per the life cycle described, the virus first binds to the CD4 receptor before fusing with and entering the cell. The closest distractor, reverse transcriptase converting RNA to DNA, is the next major step but happens only after the virus has already entered the cell."
    },
    {
      stem: "A patient asks the nurse to explain why HIV is called a 'retrovirus.' Which explanation is accurate based on the virus's life cycle?",
      options: [
        "It integrates directly into host DNA without using any enzymes.",
        "It carries RNA only and uses reverse transcriptase to copy itself into DNA.",
        "It carries both RNA and DNA, allowing replication in any cell type.",
        "It uses HIV integrase to convert its RNA into a protein coat."
      ],
      answer: 1,
      rationale: "A retrovirus carries only RNA and uses reverse transcriptase to make a DNA copy inside the host cell. The closest distractor, integrating without any enzymes, is wrong because integration is performed by the enzyme HIV integrase, and it skips the reverse-transcription step entirely."
    },
    {
      stem: "During patient teaching about the HIV life cycle, a nurse explains the role of HIV integrase. Which statement correctly describes this enzyme's action?",
      options: [
        "It binds the virus to the CD4 receptor on the host cell.",
        "It converts the virus's RNA into a DNA copy inside the host cell.",
        "It inserts newly made viral DNA into the host cell's own genetic material.",
        "It assembles and releases new viral copies from the host cell."
      ],
      answer: 2,
      rationale: "HIV integrase inserts the newly synthesized viral DNA into the host cell's genetic material. The closest distractor describes reverse transcriptase's role (making the DNA copy), a common mix-up between the two enzymes."
    },
    {
      stem: "A patient with advanced, untreated HIV asks why they keep developing infections they've had before and successfully fought off in the past. Which explanation reflects the pathophysiology described in the lecture?",
      options: [
        "HIV destroyed the antibodies the body previously produced against those infections.",
        "HIV's bone marrow effects immediately stopped all white blood cell production.",
        "Rising viral load directly causes old infections to reactivate on its own.",
        "HIV destroyed enough CD4 T cells that the immune system's long-term memory is lost."
      ],
      answer: 3,
      rationale: "CD4 T cells provide cell-mediated immunity, the body's long-term immune memory; once enough are destroyed, that memory function is lost, leaving the person vulnerable to prior infections. The closest distractor plays off the real fact that HIV antibodies aren't effective at neutralizing the virus, but the page states these antibodies still form and persist — they are not described as destroyed."
    },
    {
      stem: "A newly diagnosed patient asks the nurse if HIV can ever be cured with treatment. Which response is accurate based on the pathophysiology of the virus?",
      options: [
        "No — HIV's DNA integrates into the host cell's genome, so infection is lifelong.",
        "No — HIV antibodies attack and destroy the patient's own CD4 cells.",
        "Yes — an undetectable viral load means the virus has been completely eliminated.",
        "Yes — ART repairs reverse transcriptase so it can no longer function."
      ],
      answer: 0,
      rationale: "Because viral DNA becomes part of the host cell's own DNA, HIV cannot be fully cleared, only suppressed — infection is lifelong. The closest distractor confuses an undetectable viral load with a cure; the page explicitly states the person is still considered HIV-positive even when viral load is undetectable."
    },
    {
      stem: "A patient in the acute (early) stage of HIV infection asks whether they could have transmitted the virus before noticing any symptoms. What is the nurse's best response?",
      options: [
        "\"No, a person only becomes infectious once symptoms of acute infection appear.\"",
        "\"Yes, a person is infectious from day one, even before symptoms appear.\"",
        "\"No, infectiousness begins only after seroconversion produces detectable antibodies.\"",
        "\"Yes, but only once the CD4 count drops below 200 cells/mm³.\""
      ],
      answer: 1,
      rationale: "During acute infection, the person is infectious from day one, even before symptoms appear. The closest distractor confuses infectiousness onset with seroconversion; the page notes seroconversion is when the person becomes highly infectious, not when infectiousness begins."
    },
    {
      stem: "A patient recently diagnosed with HIV asks how long they could remain in the clinical latency (chronic) stage without treatment. Based on the material presented, what should the nurse explain?",
      options: [
        "It typically lasts only a few weeks before progressing to symptomatic disease.",
        "It cannot be predicted because CD4 counts remain unchanged during this stage.",
        "Untreated, it typically lasts about 3 to 12 years before progressing.",
        "With treatment, it always progresses to AIDS within 3 to 12 years."
      ],
      answer: 2,
      rationale: "Untreated clinical latency typically lasts about 3-12 years; with effective treatment it can be maintained indefinitely. The closest distractor flips this framing, applying the untreated timeframe to a treated patient."
    },
    {
      stem: "A patient on ART has a viral load report showing a decreasing trend over the past six months. Based on the inverse relationship described between CD4 count and viral load, what should the nurse expect to see in the CD4 count?",
      options: [
        "The CD4 count should decrease in proportion to the viral load.",
        "The CD4 count should remain completely unaffected by viral load changes.",
        "The CD4 count should drop below the AIDS-defining threshold of 200.",
        "The CD4 count should tend to rise as the viral load falls."
      ],
      answer: 3,
      rationale: "CD4 count and viral load move inversely — as viral load drops, CD4 count tends to rise. The closest distractor describes a direct rather than inverse relationship, the opposite of what the page states."
    },
    {
      stem: "A patient's labs show a CD4 count of 150 cells/mm³ with no AIDS-defining condition present. According to the CDC surveillance staging system, which stage should the nurse document?",
      options: [
        "Stage 3",
        "Stage 2",
        "Stage 1",
        "Stage 0"
      ],
      answer: 0,
      rationale: "CDC Stage 3 is defined as a CD4 count under 200 cells/mm³, regardless of AIDS-defining condition status. The closest distractor, Stage 2, corresponds to the 200-499 cells/mm³ range, an easy miscalculation for a value just below 200."
    },
    {
      stem: "A patient has a CD4 count of 550 cells/mm³ but has just been diagnosed with Kaposi sarcoma. How should the nurse classify this patient's diagnosis?",
      options: [
        "HIV infection only, because the CD4 count is above the AIDS-defining threshold.",
        "AIDS, because the presence of an AIDS-defining condition qualifies regardless of CD4 count.",
        "Clinical latency, because the CD4 count indicates a stable immune system.",
        "Acute infection, because Kaposi sarcoma is an early symptom of seroconversion."
      ],
      answer: 1,
      rationale: "A diagnosis becomes AIDS if either the CD4 count drops under 200 OR an AIDS-defining condition is present, regardless of CD4 count. The closest distractor wrongly assumes CD4 count is the only qualifying criterion, ignoring the condition-based pathway."
    },
    {
      stem: "A nurse is reviewing a patient's chart for conditions that meet AIDS-defining criteria. Select all conditions from the list below that are classified as AIDS-defining conditions.",
      options: [
        "Kaposi sarcoma",
        "Oral hairy leukoplakia",
        "Pneumocystis pneumonia (PCP)",
        "Tuberculosis (TB)",
        "Periodontal disease",
        "Wasting syndrome"
      ],
      answers: [0, 2, 3, 5],
      rationale: "The AIDS-defining conditions to memorize are Kaposi sarcoma, wasting syndrome, invasive candidiasis, PCP, TB, invasive cervical cancer, and HIV-related encephalopathy/AIDS dementia complex. Oral hairy leukoplakia and periodontal disease are the closest distractors — both appear on the page under Oral Manifestations as early signs of dropping CD4 counts, not as AIDS-defining conditions themselves."
    },
    {
      stem: "A nurse is teaching a class about HIV-associated dementia (AIDS dementia complex). Which statement should be included?",
      options: [
        "It occurs because antiretroviral therapy directly damages neurons.",
        "It affects the majority of patients today, similar to rates seen before modern treatment.",
        "It occurs because HIV crosses the blood-brain barrier and is an AIDS-defining illness.",
        "It resolves completely once viral load becomes undetectable."
      ],
      answer: 2,
      rationale: "HIV-associated dementia is thought to occur because HIV crosses the blood-brain barrier and is considered an AIDS-defining illness. The closest distractor is wrong because the page states it historically affected 40-60% of patients but is far less common now with modern treatment, not still affecting the majority today."
    },
    {
      stem: "A dental hygienist notes oral hairy leukoplakia on the tongue of a patient with HIV. What should this finding prompt the nurse to consider?",
      options: [
        "The patient has already met AIDS-defining diagnostic criteria based on this finding.",
        "The patient's viral load has dropped to an undetectable level.",
        "The patient has developed Pneumocystis pneumonia, an AIDS-defining condition.",
        "The patient's CD4 count may be dropping, prompting regimen reassessment."
      ],
      answer: 3,
      rationale: "Oral manifestations like oral hairy leukoplakia appear as CD4 counts begin to drop, an early sign the immune system is struggling and a cue to reassess the treatment regimen. The closest distractor is wrong because oral hairy leukoplakia is not listed among the AIDS-defining conditions on the page — it is a separate oral manifestation."
    },
    {
      stem: "A pregnant patient with HIV asks about the risk of transmitting the virus to her baby if she takes antiretroviral therapy throughout pregnancy. What should the nurse explain?",
      options: [
        "Treatment lowers the risk to less than 2%, versus 25-30% untreated.",
        "The risk remains at 25-30% regardless of treatment status.",
        "Treatment eliminates all transmission risk, reducing it to 0%.",
        "The risk increases with treatment due to drug exposure to the fetus."
      ],
      answer: 0,
      rationale: "Perinatal transmission risk is about 25-30% if the mother is untreated and less than 2% if she is treated. The closest distractor overstates protection by claiming treatment reduces risk to 0%, which the page does not state."
    },
    {
      stem: "A nurse experiences a needle stick injury while caring for a patient with HIV. What should the nurse understand about this exposure?",
      options: [
        "The risk is essentially zero, so no reporting or follow-up is required.",
        "The risk is still under 1%, but exposure paperwork must be completed regardless.",
        "The risk exceeds that of unprotected anal or vaginal sex with an HIV-positive partner.",
        "The risk is impossible to estimate because needle sticks were not studied."
      ],
      answer: 1,
      rationale: "Needle stick risk is still under 1%, and regardless of how low the risk, any exposure still requires completing exposure paperwork/reporting. The closest distractor incorrectly assigns needle sticks the essentially-zero risk level described for face/skin splash exposure and wrongly says no follow-up is needed."
    },
    {
      stem: "A patient newly diagnosed with HIV expresses fear that they could transmit the virus to family members through shared meals or hugging. Which teaching point addresses this concern accurately?",
      options: [
        "HIV is spread through casual contact such as hugging, requiring home precautions.",
        "HIV can be transmitted through saliva during kissing, so close contact should be limited.",
        "HIV is not spread by casual, non-fluid contact such as hugging or sharing a toilet seat.",
        "HIV can be transmitted through sharing a toilet seat if the patient has open sores."
      ],
      answer: 2,
      rationale: "The page explicitly lists HIV as not spread by sharing a toilet seat, hugging, kissing or spit, or other casual non-fluid contact. The closest distractor wrongly claims kissing/saliva transmits HIV, which directly contradicts the page's list."
    },
    {
      stem: "A patient is prescribed a medication classified as a CCR5 antagonist. The nurse understands this drug works at which step of the HIV life cycle?",
      options: [
        "Blocking HIV protease from processing viral proteins.",
        "Blocking HIV integrase from inserting viral DNA into the host genome.",
        "Blocking reverse transcriptase from copying viral RNA into DNA.",
        "Blocking the virus from entering the cell via the CCR5 co-receptor protein."
      ],
      answer: 3,
      rationale: "CCR5 antagonists block viral entry via the CCR5 co-receptor protein. The closest distractor describes NRTIs/NNRTIs, which act later in the cycle by inhibiting reverse transcriptase rather than blocking entry."
    },
    {
      stem: "A nurse is providing teaching about NRTIs for a patient newly starting ART. The patient asks which adverse effect requires the closest monitoring, especially during the first couple months of treatment. Which response is correct?",
      options: [
        "\"Lactic acidosis carries a black-box warning, so your lactate levels will be monitored closely.\"",
        "\"Peripheral neuropathy carries a black-box warning, so your reflexes will be monitored closely.\"",
        "\"Pancreatitis carries a black-box warning, so your amylase and lipase will be monitored closely.\"",
        "\"Hepatic steatosis carries a black-box warning, so your liver enzymes will be monitored closely.\""
      ],
      answer: 0,
      rationale: "NRTIs carry a black-box warning specifically for lactic acidosis, with lactate levels monitored especially in the first couple months of treatment. Peripheral neuropathy, pancreatitis, and hepatic steatosis are all real NRTI adverse effects listed on the page, but none of them is tied to the black-box warning — making the pancreatitis option the closest tempting distractor since it is also a serious listed effect."
    },
    {
      stem: "A nurse is reviewing a new prescription for a patient starting ART for the first time. A typical initial regimen should include which combination of drug classes?",
      options: [
        "One NRTI plus one NNRTI only.",
        "Two NRTIs plus a third agent from another class.",
        "Three drugs from the same class to maximize effectiveness.",
        "One fusion inhibitor plus one CCR5 antagonist only."
      ],
      answer: 1,
      rationale: "A typical ART regimen is three drugs: two NRTIs plus a third agent from a different class. The closest distractor, one NRTI plus one NNRTI, describes only two reverse-transcriptase-inhibiting drugs rather than the two-NRTI-plus-third-agent structure described on the page."
    },
    {
      stem: "A patient on ART asks whether they still need to disclose their HIV status to sexual partners now that their viral load is undetectable. What should the nurse explain?",
      options: [
        "\"No, an undetectable viral load means you are no longer HIV-positive.\"",
        "\"Yes, because an undetectable viral load still carries the same transmission risk as an untreated infection.\"",
        "\"An undetectable viral load means there's effectively no risk of transmitting HIV, but you're still HIV-positive.\"",
        "\"An undetectable viral load means your CD4 count has returned to normal and treatment can be stopped.\""
      ],
      answer: 2,
      rationale: "An undetectable viral load means effectively no risk of transmitting HIV to others, but the person is still considered HIV-positive. The closest distractor wrongly claims the person is no longer HIV-positive, contradicting the page's statement that they remain HIV-positive."
    }
  ]
};
