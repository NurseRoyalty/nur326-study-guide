/* ============================================================
   pathopharm-jeopardy.js -- the question bank for Pathopharm Review
   Jeopardy (pathopharm-jeopardy.html). Kept separate from the game
   engine (assets/jeopardy-pathopharm.js) so questions can be added or
   changed here without touching any game code.

   Shape: categories[] -> one per Pathopharm Review section (in menu
   order). Each category has clues keyed by point value ("100".."500"),
   and each value holds a LIST of clues. The game draws ONE clue per
   value per category each round, so any number of clues per value
   works (the bank currently has 2 per value = 10 per category, 110
   total, enough for two different boards before a question comes
   around again).

   Clue shape (open answer, not multiple choice):
     { q: "scenario + the one question", a: "the answer and key reason",
       rationale: "why, grounded in the Pathopharm Review page" }

   RULES FOR NEW CLUES: written only from that section's own page, NCLEX
   Next-Gen/clinical-judgment style (never recall in a scenario wrapper),
   and difficulty must rise strictly with the value: every 100 easier
   than every 200, every 200 easier than every 300, and so on, so any
   clue drawn at a value makes a valid board. 100 = one page fact
   applied to one clear scenario; 200 = one fact plus a distinguishing
   detail; 300 = two facts / priority with a red herring; 400 = three
   related facts, two-client or two-drug comparison, or an exception;
   500 = multi-step synthesis. Use a literal & (the engine escapes text
   when it renders; writing &amp; here would show up twice-encoded).
   Category names may contain ­ (an invisible soft hyphen): it lets a long
   word such as Hyper-sensitivity break neatly in a narrow board column.
   ============================================================ */
window.JEOPARDY_PATHOPHARM = {
  "categories": [
    {
      "id": "pp-pharm-foundations",
      "name": "Pharmacology Foundations",
      "clues": {
        "100": [
          {
            "q": "During the morning medication pass, a nurse reads an order that says \"warfarin 5.0 mg.\" The client is stable, the dose matches the client's usual dose, and the handwriting is clear. What is wrong with how this order is written?",
            "a": "The trailing zero. It should read \"5 mg,\" because a missed decimal point could make the dose be read as a tenfold larger amount.",
            "rationale": "The page lists no trailing zeros as a medication safety practice to prevent misreads. The clear handwriting and the usual dose do not remove the risk of a tenfold reading error."
          },
          {
            "q": "A client at 8 weeks of pregnancy takes a daily prenatal vitamin as prescribed. She also reports two glasses of wine most evenings, occasional marijuana use, and half a pack of cigarettes a day. She feels well and has had no bleeding. Which risk to the fetus should the nurse emphasize about the wine, marijuana, and cigarettes?",
            "a": "Congenital malformations, because alcohol, marijuana, and nicotine are teratogens.",
            "rationale": "The page names alcohol, marijuana, and nicotine as teratogens that cause congenital malformations. The prenatal vitamin is not one of them, and feeling well with no bleeding does not lower the fetal risk."
          }
        ],
        "200": [
          {
            "q": "Two clients call the clinic on the same day to request refills. Client A takes Xanax for anxiety, and Client B takes an opioid for severe cancer pain. Both filled their prescriptions last week and say the medication works well. For which client must the nurse expect a new prescription for every fill, and why?",
            "a": "Client B. Opioids are Schedule II drugs with high abuse potential and severe dependence risk, and Schedule II drugs have no automatic refills.",
            "rationale": "The page states Schedule II drugs (opioids, amphetamines) allow no automatic refills, so each fill needs a new prescription. Xanax is listed as Schedule IV, a low-abuse-potential schedule, so it is not the drug with that restriction."
          },
          {
            "q": "A client takes a daily medication that is broken down by the liver. Over three weeks the client has developed unusual dizziness and drowsiness. Kidney function is normal, no dose was doubled, and the client eats regularly. The client began drinking grapefruit juice with each morning dose about three weeks ago. What should the nurse teach about the juice, and why?",
            "a": "Avoid grapefruit juice for about 2 to 4 hours around dosing, because it slows the liver's metabolism of the drug, so the drug builds up and toxicity risk rises.",
            "rationale": "The page calls grapefruit juice a classic CYP450 inhibitor: metabolism slows, the drug builds up, and toxicity risk rises, so avoid it for 2 to 4 hours around dosing. Normal kidney function and correct dosing point away from excretion or dosing errors."
          }
        ],
        "300": [
          {
            "q": "A client takes a drug with a half-life of 12 hours, last taken Monday at 0800. The surgeon wants the drug about 97% eliminated before an elective procedure. A coworker says, \"It reaches steady state after 4 to 5 half-lives, so use that time.\" By what day and time should the nurse expect about 97% elimination?",
            "a": "Wednesday at 2000: about 5 half-lives are needed for roughly 97% elimination, and 5 x 12 hours is 60 hours after Monday 0800.",
            "rationale": "The page ties roughly 97% elimination to about 5 half-lives. The 4 to 5 half-life figure is the time to steady state, where the amount eliminated equals the amount absorbed, which is a different concept."
          },
          {
            "q": "A client with peripheral vascular disease has a poorly perfused leg abscess. After three days of an IV antibiotic at the ordered dose, the abscess is unchanged. Kidney function is normal, the client has no allergy symptoms, and the drug was infused over the full ordered time. Which pharmacokinetic process best explains the poor response?",
            "a": "Impaired distribution: the drug reaches a poorly perfused site slowly. Poor absorption is ruled out because IV drugs are 100% bioavailable, with no absorption barrier or first-pass effect.",
            "rationale": "The page says distribution is impaired by peripheral vascular disease or a poorly perfused abscess, and that IV bioavailability is 100% because there is no absorption barrier. Normal kidney function does not explain a poor site response."
          }
        ],
        "400": [
          {
            "q": "Three clients received new medications this morning. Client A's blood pressure reached the goal range, and the client has mild drowsiness at the ordered dose. Client B had a first antibiotic dose 15 minutes ago and now has itching and scattered hives, with normal breathing. Client C had a digoxin dose increased and has no complaints and normal vital signs. Which client should the nurse reassess first, and why?",
            "a": "Client B. Itching and hives signal an allergic reaction, which can progress to anaphylaxis. A has a therapeutic effect plus a side effect at a normal dose, and C has no current problem, though digoxin's narrow therapeutic index needs monitoring.",
            "rationale": "The page defines allergic reaction as an immune response ranging from itching and hives to anaphylaxis, side effect as unintended at a normal dose, and narrow therapeutic index drugs such as digoxin as needing closer monitoring."
          },
          {
            "q": "Three clients each receive a new prescription for digoxin or amoxicillin and all feel well with normal vital signs. Client A is 84 and takes eight other medications, and is starting digoxin. Client B is 84, takes eight other medications, and is starting amoxicillin. Client C is 38, takes no other medications, and is starting digoxin. Which client is at greatest risk for a harmful adverse reaction, and why?",
            "a": "Client A. Age (slower hepatic metabolism, reduced renal excretion) and polypharmacy (more interactions) stack on a narrow-therapeutic-index drug; B has a wide-index drug and C has no age or polypharmacy risk.",
            "rationale": "The page says polypharmacy raises interaction risk, especially in older adults with slower hepatic metabolism and reduced renal excretion, and that narrow-index drugs like digoxin need closer monitoring while wide-index amoxicillin is rarely toxic."
          }
        ],
        "500": [
          {
            "q": "A client who has taken Coumadin at a stable dose for months is admitted with severe malnutrition and daily heavy alcohol use, and the albumin level is low. The client also takes ginkgo biloba from a health store for memory. The prescriber now adds aspirin. Vital signs are normal and there is no bleeding yet. Which risk should the nurse expect to be greatest, and what explains it?",
            "a": "Bleeding. Low albumin frees more of highly protein-bound warfarin, ginkgo suppresses platelet aggregation, aspirin adds synergism with Coumadin, and warfarin's narrow therapeutic index leaves little margin.",
            "rationale": "The page states only unbound drug is active, low albumin raises free warfarin and bleeding risk, ginkgo suppresses platelet aggregation, Coumadin plus aspirin is synergism, and warfarin has a narrow therapeutic index."
          },
          {
            "q": "A client's pain was controlled on scheduled oral morphine. After becoming NPO, the client was given IV morphine at the same milligram amount as the oral dose. Twenty minutes later the client is hard to arouse with a respiratory rate of 6. Albumin and liver function are normal, and a coworker blames steady-state accumulation. Which drug should the nurse give, given what caused this response?",
            "a": "Naloxone (Narcan), the opioid antidote. IV morphine is 100% bioavailable while the oral dose lost part to first-pass liver metabolism, so the same milligrams delivered far more active drug.",
            "rationale": "The page gives naloxone as the antidote for opioid overdose, IV drugs as 100% bioavailable, and first-pass metabolism as the reason oral morphine doses are typically much higher than IV doses. Steady state is a separate concept."
          }
        ]
      }
    },
    {
      "id": "pp-cellular-infection-immunity",
      "name": "Cell Adaptation, Infection & Immunity",
      "clues": {
        "100": [
          {
            "q": "Before knee replacement surgery, a client's routine skin swab grows Staphylococcus aureus. The client is afebrile, the skin shows no redness, warmth, or drainage, and the client reports no pain at the site. How should the nurse interpret this result?",
            "a": "As colonization: the organism is present without causing signs or symptoms of infection. The nurse should still watch closely, because it can become an active infection with immune compromise or tissue disruption.",
            "rationale": "The page describes colonization as a pathogen inhabiting a site without signs or symptoms, such as asymptomatic staph on the skin, which can turn into infection with immune compromise or tissue disruption. A positive culture alone does not mean infection."
          },
          {
            "q": "A 32-year-old woman has fatigue and swollen, painful joints and has been diagnosed with an autoimmune disorder. She has no travel history, no toxin exposure, and does not smoke. Is the source of her disease intrinsic or extrinsic, and why?",
            "a": "Intrinsic. The cause comes from inside the body, since in an autoimmune disorder the immune system attacks the body itself.",
            "rationale": "The page lists autoimmune disorders (the body attacking itself) as an intrinsic factor. Extrinsic factors are pathogens, environmental exposures, lifestyle behaviors, and stressors, none of which this history shows."
          }
        ],
        "200": [
          {
            "q": "A client who is immunocompromised after chemotherapy is due for three vaccines today. One is a tetanus vaccine made from an inactivated toxin, one is a Hib vaccine made from a protein attached to an organism, and one is a weakened version of a living virus. Vitals are normal and the client feels well. Which vaccine should the nurse question, and why?",
            "a": "The weakened live-virus (attenuated) vaccine, because attenuated vaccines are still live and should not be given to immunocompromised patients.",
            "rationale": "The page says attenuated vaccines are weakened but still-live versions that should not be given to immunocompromised patients. The toxoid (tetanus) and conjugate (Hib) vaccines are not live organisms."
          },
          {
            "q": "A 66-year-old client says that over about 14 months he has needed more pillows to sleep and has stopped climbing stairs, adjusting his routine each time and mentioning it to no one. Today he is diagnosed with heart failure. As a child he had chickenpox. Which type of onset does this course describe, and why was it found late?",
            "a": "Insidious onset: it developed slowly and gradually, and the client adjusted to the symptoms until the disease had progressed significantly.",
            "rationale": "The page defines insidious onset as slow and gradual, with patients adjusting until the disease has progressed. Latent onset is a present-but-inactive process that can become active later, such as chickenpox virus reactivating as shingles, which does not match this course."
          }
        ],
        "300": [
          {
            "q": "A farmer arrives two days after a tractor accident that left an open leg fracture contaminated with soil. Bubbles of gas are visible in the wound drainage, the leg is swollen and dark, the heart rate is 124, and the client is newly confused. The client also has long-standing type 2 diabetes. Which type of gangrene should the nurse suspect, and why?",
            "a": "Gas gangrene, a specialized severe wet gangrene: gas bubbles in a soil-contaminated compound fracture point to Clostridium perfringens, an anaerobic spore-former found in soil, rather than gangrene from diabetic poor circulation.",
            "rationale": "The page describes gas gangrene as a specialized, severe wet gangrene from Clostridium perfringens in soil, typically after severe trauma or a compound fracture, characterized by gas bubbles from the spores. Diabetes is a common setting for gangrene but does not explain the soil, fracture, and gas bubbles."
          },
          {
            "q": "A client treated for pneumonia with a broad-spectrum antibiotic now has frequent watery, orange-tinged stools with cramping, and a stool PCR is positive for C. difficile. The client is afebrile and eating well. The provider wrote a PRN antidiarrheal, and the nurse plans to give it and then clean hands with alcohol sanitizer after each contact. What should the nurse change about this plan, and why?",
            "a": "Hold the antidiarrheal and question the order, since antidiarrheals are avoided so the toxin can clear; also wash with soap and water, because alcohol sanitizer does not kill C. difficile.",
            "rationale": "The page says antidiarrheals are avoided in C. diff so the toxin can clear, and that soap-and-water hand washing is required because alcohol sanitizer does not kill it. Being afebrile and eating well changes neither."
          }
        ],
        "400": [
          {
            "q": "Three infants are exposed today to the same pathogen. Infant A is 2 weeks old, breastfed, and has IgG against it that crossed the placenta. Infant B is 7 months old and completed the vaccine series for it. Infant C is 7 months old, unvaccinated, and received an injection of immune globulin yesterday. Which infant's own memory B cells will respond rapidly with antibodies, and why?",
            "a": "Infant B. The vaccine produced active immunity, so the body made its own antibodies and memory B cells. Infants A and C have passive immunity from transferred antibodies, with no memory cells of their own.",
            "rationale": "The page lists placental IgG, IgA in breast milk, and injected immune globulins as passive immunity, and says active immunity from infection or a vaccine makes the body's own antibodies, usually via memory B cells, much faster on a second exposure."
          },
          {
            "q": "Three clients have biopsy results. Client A has mild dysplasia of the mouth lining and has just quit tobacco. Client B has metaplasia, with one mature cell type replaced by a less-differentiated type, in a chronically inflamed area. Client C has a slow-growing, encapsulated mass of mature cells in the brain that is causing headaches. Which client's result is most strongly associated with progression toward cancer, and why?",
            "a": "Client B. Metaplasia from chronic irritation is more strongly associated with cancer risk than dysplasia alone; A's dysplasia is reversible and not cancer, and C's mass is benign and cannot metastasize.",
            "rationale": "The page says metaplasia is more strongly associated with cancer risk than dysplasia alone. Dysplasia is reversible and not cancer, though a possible precursor, and benign tumors are differentiated, encapsulated, slow, and cannot metastasize, with problems from compression in sensitive sites like the brain."
          }
        ],
        "500": [
          {
            "q": "Three clients are one week after crush injuries to the thigh. All have a temperature of 38.6 C, an elevated white blood cell count, marked fatigue, and loss of muscle mass. Client A's blood, urine, and wound cultures show no growth and imaging shows no abscess. Client B's wound culture grows bacteria. Client C's urinalysis shows positive nitrates and leukocyte esterase. Which client's findings point to systemic inflammation rather than infection, and what drives them?",
            "a": "Client A. With no infection source, the fever, high white count, fatigue, and muscle breakdown fit uncontained inflammation driven by cytokines (interleukin-1, interleukin-6, TNF-alpha). B and C each have an infection source.",
            "rationale": "The page says uncontained inflammation becomes systemic through cytokines, causing fever, elevated white blood cells, fatigue, and muscle catabolism, and that it looks like infection, so finding an infection source differentiates. Positive nitrates and leukocyte esterase suggest bacterial infection."
          },
          {
            "q": "Three clients have drainage or collections. Client A, afebrile, has a lung cavity on CT; aspirated fluid is thick, sticky, yellow-green, and foul smelling with a neutrophil-dominated smear, and pathology shows dead lung tissue digested into liquid. Client B, six hours after abdominal surgery, has thin pink-tinged drainage. Client C has a dressing saturated with bright red blood. Which collection may need drainage, and what formed it?",
            "a": "Client A's. Liquefactive necrosis of lipid-rich lung tissue, with heavy neutrophil activity, formed an abscess of purulent exudate. B's pink-tinged drainage is normal post-op, and C's red blood signals active bleeding.",
            "rationale": "The page describes liquefactive necrosis in lipid-rich organs like the lung forming an abscess, purulent exudate that may need drainage, serosanguineous drainage as normal immediately post-op, and hemorrhagic exudate as signaling active bleeding."
          }
        ]
      }
    },
    {
      "id": "pp-htn-hld",
      "name": "HTN & Hyper\u00adlipidemia",
      "clues": {
        "100": [
          {
            "q": "A 45-year-old client with no symptoms arrives at the clinic at 10 AM for a scheduled lipid panel. The client ate a bagel with cream cheese and had coffee with cream at 8 AM, feels well, and asks to have the blood drawn now to save a second trip. What should the nurse do about the blood draw?",
            "a": "Delay or reschedule the draw until after an overnight fast, because a recent meal can skew the lipid results.",
            "rationale": "The page states hyperlipidemia is diagnosed by a fasting blood draw (fasting overnight) and that a recent meal can skew results. Feeling well is irrelevant, since high lipids usually cause no symptoms."
          },
          {
            "q": "A client receives the first dose of lisinopril in the clinic for newly diagnosed hypertension. Two hours later the client reports mild lightheadedness on standing and plans to drive home alone. What should the nurse tell the client?",
            "a": "Do not drive: this is an expected first-dose effect of an ACE inhibitor, so the client should not drive or operate machinery and should arrange other transportation.",
            "rationale": "The page describes first-dose hypotension with ACE inhibitors, a 15-20% BP drop in the first 6-8 hours, and advises taking the first dose at home, not before driving or operating machinery."
          }
        ],
        "200": [
          {
            "q": "At a screening visit, a client has repeated blood pressure readings of 134/76 mmHg. The client says, \"My bottom number is normal, so this can't really count as high blood pressure.\" How should the nurse classify this blood pressure?",
            "a": "Hypertension Stage 1, because the systolic of 134 falls in the 130-139 range, and Stage 1 needs only one number to qualify.",
            "rationale": "Normal and Elevated require both numbers to qualify, but Stage 1 and Stage 2 need only one. A normal diastolic does not cancel a Stage 1 systolic."
          },
          {
            "q": "A 66-year-old man with known coronary artery disease has been free of chest pain for years. He now reports chest pain each time he walks from his bedroom to the bathroom, and it eases when he sits. His blood pressure is 142/88. What should the nurse conclude about this change?",
            "a": "It suggests progression to a severe, near-total (about 99%) blockage, which is life-threatening and needs immediate intervention.",
            "rationale": "Blockages of 30-90% can be asymptomatic because blood still gets through. A 99% blockage causes angina with minimal exertion and needs immediate intervention, so this is not routine follow-up."
          }
        ],
        "300": [
          {
            "q": "A 58-year-old client with type 2 diabetes takes propranolol for hypertension. On a hot afternoon, as the nurse prepares his scheduled dose, he becomes shaky, sweaty, and irritable. Pulse is 72 and BP is 126/78. He says, \"My vitals are fine, so it can't be my blood sugar.\" What is the nurse's best next action?",
            "a": "Check his blood glucose now. The normal pulse does not rule out hypoglycemia, because the beta blocker keeps the heart rate normal and masks tachycardia; the vitals also do not meet the hold parameters (HR below 60, SBP below 100).",
            "rationale": "The page says beta blockers can mask hypoglycemia because tachycardia, a common symptom, is prevented, so they are used cautiously in diabetes. It lists holding the dose for HR below 60 or SBP below 100, which his vitals do not meet."
          },
          {
            "q": "A 61-year-old man with years of untreated hypertension says, \"I've never felt sick, so my pressure hasn't done anything to me.\" Today his BP is 172/104 mmHg. He has retinopathy on his eye exam, calf cramping when he walks that stops with rest, and occasional nasal stuffiness. What is the most accurate response to his belief?",
            "a": "Hypertension stays silent until end-organ damage occurs, and his retinopathy and intermittent claudication show that damage is already present; the nasal stuffiness is unrelated.",
            "rationale": "The page says hypertension is usually asymptomatic until end-organ damage, listing retinopathy for the eyes and intermittent claudication for the lower extremities. The stage of his BP does not change this."
          }
        ],
        "400": [
          {
            "q": "A 63-year-old woman takes lisinopril and spironolactone for hypertension, with no thiazide or loop diuretic. After a neighbor said water pills drain potassium, she began an over-the-counter potassium supplement and eats avocado and spinach daily. She reports palpitations and a dry cough; serum potassium is high at 5.9 mEq/L. She asks if switching lisinopril to losartan for the cough will also fix her palpitations. What should the nurse tell her?",
            "a": "Probably not. Her potassium is high mainly from a supplement she does not need without a thiazide or loop diuretic, on top of spironolactone and an ACE inhibitor; losartan (an ARB) carries the same hyperkalemia risk, especially with supplements.",
            "rationale": "The page links potassium supplements and potassium-rich foods to thiazide or loop diuretics, lists hyperkalemia with spironolactone, and says both ACE inhibitors and ARBs carry hyperkalemia risk, especially with potassium supplements. Cough is the reason to switch from an ACE inhibitor."
          },
          {
            "q": "Two clients have taken atorvastatin every night for 6 weeks and neither reports muscle pain. Client A, age 61, has diabetes and went from an LDL of 168 to 98. Client B, age 23, has no diabetes; his father had a heart attack at 38. He followed a strict diet and exercise plan and went from an LDL of 310 to 285. Both have normal AST, ALT, and creatine kinase. Which client's result should the nurse report to the provider, and why?",
            "a": "Client B. His LDL barely fell and remains far above goal; a young client with a strong family pattern and poor response likely has familial hypercholesterolemia, since statins depend on the liver building more LDL receptors and his are defective.",
            "rationale": "The page says familial hypercholesterolemia is a defect in liver LDL receptors, suspected in young people with a family pattern, with poor statin response. Client A's fall is within the typical 21-63% range and meets the below-100 target for higher-risk patients such as those with diabetes."
          }
        ],
        "500": [
          {
            "q": "A 47-year-old kidney transplant recipient takes cyclosporine and drinks grapefruit juice daily. Simvastatin was started 3 weeks ago for an LDL that rose over 6 months with no diet or weight change. He now reports generalized muscle weakness and that he has been urinating very little today. Creatine kinase is markedly high; ALT is normal. He asks if the normal ALT means he can keep taking it. What should the nurse do?",
            "a": "Withhold the simvastatin and notify the provider promptly. Cyclosporine and grapefruit both raise statin effects and myopathy/rhabdomyolysis risk; weakness with high CK and low urine output suggests muscle breakdown with kidney injury, which a normal ALT does not exclude.",
            "rationale": "The page lists cyclosporine as raising statin myopathy and rhabdomyolysis risk, grapefruit as raising statin levels, CK as a muscle-breakdown marker, and acute kidney failure from rhabdomyolysis byproducts. ALT monitors hepatotoxicity, which appears after a year or more."
          },
          {
            "q": "A 38-year-old woman of normal weight, a nonsmoker with a healthy diet and no family history of heart disease, has taken daily prednisone for 4 months. Her BP is 158/96 on two visits and her LDL rose from 95 to 172. The provider orders hydrochlorothiazide. She asks whether she inherited both problems. What should the nurse communicate to the provider before giving the first dose?",
            "a": "That both the high BP and the high LDL began with prednisone, a likely secondary cause, so the provider should review the prednisone rather than only adding a thiazide, which can itself raise cholesterol, triglycerides, and glucose.",
            "rationale": "The page lists glucocorticoids as a cause of high cholesterol and corticosteroids as a cause of secondary hypertension, treated by treating or removing the cause. Thiazides can raise glucose, cholesterol, and triglycerides."
          }
        ]
      }
    },
    {
      "id": "pp-diabetes-metabolic",
      "name": "Diabetes & Metabolic Syndrome",
      "clues": {
        "100": [
          {
            "q": "At 1130 a client with type 2 diabetes is due for lispro with lunch. The chart shows a finger-stick glucose of 142 mg/dL taken at 0700, and the client says, \"I feel fine, nothing has changed.\" What must the nurse do before giving the insulin?",
            "a": "Obtain a current finger-stick glucose immediately before the dose rather than relying on the 0700 value.",
            "rationale": "The page calls a current blood sugar, taken immediately before the dose and not one from earlier in the day, one of the most important safety rules before giving any insulin. Feeling fine does not replace the check."
          },
          {
            "q": "A 54-year-old client with type 2 diabetes for 12 years and an A1c above goal says, \"My vision is perfect, so my eyes are not something I need to worry about.\" The client has no eye complaints. What should the nurse teach?",
            "a": "Regular eye screening is a key teaching point: long diabetes duration and poor glucose control raise the risk of diabetic retinopathy, a leading cause of blindness, so good vision does not make screening unnecessary.",
            "rationale": "The page lists duration of diabetes and poor glucose control as retinopathy risk factors, names retinopathy a leading cause of blindness, and calls regular eye screening a key teaching point."
          }
        ],
        "200": [
          {
            "q": "At bedtime a client with type 1 diabetes is due for insulin glargine and a correction dose of regular insulin. To spare the client an extra injection, the nurse plans to draw both insulins into one syringe. What should the nurse do?",
            "a": "Give them as two separate injections. Glargine is never mixed with other insulins in the same syringe.",
            "rationale": "The page states that glargine must never be mixed with other insulins in the same syringe. Only regular (clear) and NPH (cloudy) are described as mixable to reduce injections."
          },
          {
            "q": "A client who takes insulin becomes sweaty, shaky, and anxious before dinner. The client is alert, answers questions, and swallows without difficulty; the finger-stick glucose is 52 mg/dL. At the bedside are glucose tablets, a chocolate bar, and an IM glucagon kit. What should the nurse give first?",
            "a": "Glucose tablets (15-20 g of simple carbohydrate), because the client is awake and able to swallow; candy is not recommended and glucagon is for clients who cannot take oral intake.",
            "rationale": "The page treats an awake, swallowing client with 15-20 g of simple carbohydrate such as glucose tablets or juice, not candy. Parenteral glucagon or IV dextrose is used only when the client cannot swallow."
          }
        ],
        "300": [
          {
            "q": "A client with type 2 diabetes takes glipizide daily and started a sulfa antibiotic for a urinary tract infection two days ago. At 1500 the client reports cold sweats, a racing heart, and restlessness. Temperature is normal and the client ate all of lunch. What should the nurse do first?",
            "a": "Check the blood glucose immediately. The symptoms suggest hypoglycemia, which the sulfa antibiotic can potentiate in a client taking a sulfonylurea.",
            "rationale": "The page lists sulfa antibiotics among drugs that potentiate sulfonylurea hypoglycemia and says to check blood sugar immediately when these symptoms appear. A normal temperature and a completed lunch argue against infection or a skipped meal."
          },
          {
            "q": "After 18 years of type 2 diabetes managed with metformin, a client's routine labs show new protein on a urine microalbumin test and a serum creatinine above the client's baseline. Blood pressure is 154/94 mmHg, ankles are mildly edematous, glucose is 128 mg/dL, and the client has no GI complaints. What should the nurse anticipate about the metformin, and why?",
            "a": "Anticipate that metformin will be stopped or changed: it is renally cleared, so elevated creatinine from developing diabetic nephropathy raises the risk of acidosis.",
            "rationale": "The page identifies microalbuminuria as the first sign of diabetic kidney dysfunction, with edema and hypertension as progression, and says metformin is renally cleared and should be avoided with kidney disease because of acidosis risk with elevated creatinine. Good glucose control and no GI upset do not change this."
          }
        ],
        "400": [
          {
            "q": "A provider orders dapagliflozin for two clients. Client A has type 2 diabetes, end-stage renal disease, and an A1c of 9%. Client B has no diabetes but has heart failure and moderate chronic kidney disease. Which order should the nurse question, and why?",
            "a": "Question Client A's order: for glucose control the drug works through kidney excretion of glucose and cannot work without adequate kidney function. Client B's use is a recognized non-diabetic benefit.",
            "rationale": "The page says to avoid this class in end-stage or severe renal disease for diabetes management because the drug cannot work without kidney function, but notes cardioprotective and renal-protective use in early or moderate CKD and heart failure outside diabetes."
          },
          {
            "q": "Three clients ask about orlistat. Client A has a BMI of 28, type 2 diabetes, and no weight loss after 6 months of diet and exercise. Client B has a BMI of 33, existing liver disease, and 6 months of unsuccessful diet and exercise. Client C has a BMI of 29, no other health conditions, and has tried diet and exercise for 6 weeks. Which client is the best candidate for the drug?",
            "a": "Client A: BMI over 27 with a risk factor and 6 months of unsuccessful lifestyle change. B has liver disease (black box warning for liver injury) and C has neither a BMI over 30 nor a risk factor.",
            "rationale": "The page reserves drug therapy for BMI over 30, or over 27 with risk factors, after about 6 months of unsuccessful diet and exercise, and gives orlistat a black box warning for liver injury, so it is avoided with existing liver disease."
          }
        ],
        "500": [
          {
            "q": "A client with type 1 diabetes has had marked urination for two days and is now nauseated and drinking little. Urine output has fallen to 150 mL over 6 hours while glucose has risen from 480 to 560 mg/dL. The dipstick shows glucose and ketones, mucous membranes are dry, and heart rate is 124. Which acute complication is developing, and what self-feeding mechanism keeps the glucose rising despite glycosuria?",
            "a": "DKA (type 1, glucose in the 400-600s, ketonuria). Osmotic diuresis drains water and electrolytes, raising osmolality and lowering the GFR, so less glucose is cleared and it accumulates in a self-feeding cycle.",
            "rationale": "The page describes DKA as the common acute complication of type 1 with glucose in the 400-600s and ketonuria, whereas HHNS is primarily type 2 in the 600-800s. Glycosuria pulls water and electrolytes out, raising osmolality and lowering the GFR, so glucose accumulates."
          },
          {
            "q": "A client with type 1 diabetes takes NPH insulin at bedtime. Fasting glucose has been 290 mg/dL for three mornings, and the provider plans to raise the bedtime dose. Tonight the client was checked at 0300 and was sweaty and restless with a glucose of 48 mg/dL. A coworker says the morning highs are just the natural early-morning cortisol and growth hormone release. What should the nurse do about the planned dose increase?",
            "a": "Question the increase and report the 0300 low. This fits the Somogyi effect: too much bedtime insulin causes nocturnal hypoglycemia, and the counter-regulatory response overshoots into morning hyperglycemia, so the dose needs adjustment, not an increase.",
            "rationale": "The page describes the Somogyi effect as rebound morning hyperglycemia from excessive bedtime insulin that triggers nocturnal hypoglycemia and a counter-regulatory overshoot, needing dose adjustment. The dawn phenomenon is a normal cortisol and growth hormone pattern, not a dosing error, and would not produce a low."
          }
        ]
      }
    },
    {
      "id": "pp-coagulation-dvt",
      "name": "Coagulation & DVT",
      "clues": {
        "100": [
          {
            "q": "A client with crushing chest pain and diaphoresis arrives in the emergency department. The provider orders aspirin 81 mg immediately, and the nurse has a bottle of 81 mg aspirin tablets on hand. How should the nurse have the client take the dose?",
            "a": "Have the client chew a non-enteric-coated tablet rather than swallow it whole, because chewing gives faster absorption of the antiplatelet effect during an acute MI.",
            "rationale": "The page says that for an acute MI the patient chews a baby aspirin rather than swallowing it whole, and that it must be a non-enteric-coated tablet because enteric coating would delay absorption."
          },
          {
            "q": "On the evening after a total knee replacement, a client lying in bed refuses the sequential compression devices, saying, \"My legs feel fine, so I don't need these.\" What is the best response by the nurse?",
            "a": "Encourage use of the devices, explaining that surgery and bed rest slow venous blood flow and a clot can form even without symptoms.",
            "rationale": "The page lists immobility and recent surgery as venous stasis and DVT risk factors, notes some patients are entirely asymptomatic, and names SCDs and early mobilization as prevention. Feeling fine is not a reason to skip them."
          }
        ],
        "200": [
          {
            "q": "A client receiving enoxaparin after a hip replacement has heavy surgical-site bleeding that will not stop, a falling hemoglobin, and a rising heart rate. The provider orders the reversal agent for the anticoagulant to be given IV. Which agent should the nurse expect to give, and how should it be given?",
            "a": "Prepare protamine sulfate, which binds heparin-type drugs including enoxaparin, and push it slowly IV because rapid administration can cause profound hypotension.",
            "rationale": "The page names protamine as the antidote for heparin and enoxaparin and says to push it slowly IV since too fast can cause profound hypotension. Vitamin K reverses warfarin and andexanet alfa reverses factor Xa inhibitors, so neither fits."
          },
          {
            "q": "A hospitalized client takes warfarin for atrial fibrillation. Hemoglobin has been stable at 13.8 g/dL for three days. This morning it is 10.6 g/dL and the heart rate has risen from 76 to 108. The client denies pain and no bleeding is visible. What do these findings suggest?",
            "a": "Internal bleeding that is not visible: a sudden hemoglobin drop from a stable baseline with new tachycardia means the provider should be notified promptly.",
            "rationale": "The page says a sudden hemoglobin/hematocrit drop from a previously stable baseline suggests internal bleeding, and tachycardia is the first vital sign change as fluid volume falls. No visible bleeding or pain does not rule it out."
          }
        ],
        "300": [
          {
            "q": "A client stable on warfarin for six months with an INR consistently in the goal range started over-the-counter cimetidine two weeks ago for heartburn. Today the INR is 4.8 and the client denies bleeding. Believing the spinach salad eaten daily is the cause, the client plans to stop eating it, and notes that one glass of wine each evening is also unchanged for years. How should the nurse respond to the plan?",
            "a": "Advise against stopping the spinach: vitamin K intake should stay consistent, not be avoided. The new cimetidine, which can raise the INR, is the likely cause, since the spinach and wine have not changed.",
            "rationale": "The page says big swings in vitamin K intake, not the food itself, are the problem, so consistent intake is taught. It states that many common medications, including OTC cimetidine, raise or lower INR. Alcohol also thins blood, but this client's use is unchanged."
          },
          {
            "q": "A client admitted after an MI has new orders for ticagrelor and aspirin 325 mg daily. Morning labs show a platelet count of 82,000/mm3. Vital signs are stable, and the client reports mild nausea but no bleeding. What should the nurse do?",
            "a": "Hold both the ticagrelor and the aspirin and notify the prescriber. A platelet count under 100,000 is thrombocytopenia, a contraindication to both drugs, and aspirin 325 mg also exceeds the 100 mg limit in ticagrelor's black box bleeding warning.",
            "rationale": "The page defines thrombocytopenia as generally under 100,000 with high bleeding risk and lists it as a contraindication for both aspirin and ticagrelor. Ticagrelor's black box warning is increased bleeding with aspirin doses over 100 mg. Stable vitals, nausea, and no bleeding do not remove either concern."
          }
        ],
        "400": [
          {
            "q": "Client A is 3 hours after surgery, receives low-dose enoxaparin prophylaxis, and has a small amount of bright red blood on the dressing; heart rate is 82. Client B is on day 5 after surgery, takes warfarin with an INR of 2.4, and has the same small amount of bright red blood on the dressing; heart rate has risen from 74 to 106 and BP is 122/74. Client C takes warfarin, has a clean dressing, and reports gum bleeding when brushing with a hard-bristle toothbrush. Which client should the nurse assess first, and why?",
            "a": "Client B. The dressing finding is expected hours after surgery but is a bleeding concern 4-5 days out on an anticoagulant, and new tachycardia is the first vital sign change of bleeding. Client C's gum bleeding is minor and external, and calls for a soft toothbrush.",
            "rationale": "The page says a small amount of bright red blood a few hours after surgery is expected, while the same finding 4-5 days out in a patient on an anticoagulant is concerning. With bleeding, tachycardia comes first and hypotension later. Teaching includes a soft-bristle or electric toothbrush."
          },
          {
            "q": "Client A is 52, has no known heart or vascular disease, has a history of stomach ulcers, and takes daily enteric-coated aspirin 81 mg \"to protect my heart.\" Client B is 61, had an MI last year, takes daily aspirin 81 mg with clopidogrel, and reports occasional mild nausea. Neither has bleeding or thrombocytopenia. Which client's aspirin should the nurse question with the provider, and why?",
            "a": "Client A. Without known cardiovascular disease, bleeding risk generally outweighs the benefit of daily aspirin, and GI ulcers are a listed contraindication. Client B takes aspirin to prevent MI, sometimes with clopidogrel, and nausea is a known side effect.",
            "rationale": "The page says daily aspirin for primary prevention has fallen out of favor because bleeding risk generally outweighs benefit without known cardiovascular disease, and lists GI ulcers as a contraindication. It gives MI prevention as a use, nausea as a side effect, and says clopidogrel is sometimes combined with aspirin."
          }
        ],
        "500": [
          {
            "q": "Two clients are admitted with new deep vein thromboses. Client A has an INR of 1.0, started warfarin this evening, and has enoxaparin ordered twice daily; a coworker says no two anticoagulants may ever be given together. Client B has a heparin infusion running and a new order for enoxaparin twice daily. Which client's enoxaparin order should the nurse question, and why?",
            "a": "Client B's. Enoxaparin is not given with heparin or other anticoagulants; the one exception is oral warfarin for DVT/PE, which fits Client A, whose warfarin onset is delayed about 24 hours, so enoxaparin covers the gap.",
            "rationale": "The page says not to give enoxaparin with heparin or other anticoagulants except oral warfarin when treating DVT/PE. Warfarin onset lags about 24 hours, which is why bridging with a fast-acting anticoagulant is common, and a person not on warfarin has an INR around 1."
          },
          {
            "q": "Each of two clients is 2 days after a total knee replacement with an epidural catheter in place, and each reports new numbness in both legs and difficulty lifting the feet. Platelets are normal and dressings are dry for both. Client A receives enoxaparin twice daily. Client B takes apixaban and drinks grapefruit juice each morning. For which client should the nurse expect andexanet alfa to be considered, and why?",
            "a": "Client B. Both have signs of spinal hematoma, but andexanet alfa is the antidote for factor Xa inhibitors like apixaban, whose levels grapefruit juice can raise; Client A's enoxaparin is reversed with protamine sulfate.",
            "rationale": "The page lists spinal hematoma with an epidural catheter as a black box warning for both enoxaparin and apixaban, grapefruit juice as raising apixaban levels, andexanet alfa as the apixaban antidote (used only when truly needed), and protamine as the antidote for heparin and enoxaparin."
          }
        ]
      }
    },
    {
      "id": "pp-blood-cells-cbc",
      "name": "Blood Cells & CBC",
      "clues": {
        "100": [
          {
            "q": "A 34-year-old client admitted with a bacterial infection has a temperature of 100.6 F (38.1 C) and an elevated WBC count, but is alert, drinking fluids, and walking in the hall. The client says, \"This fever means the infection is winning, so I need it gone right now.\" How should the nurse explain the fever?",
            "a": "Fever is a protective response, not a disease in itself. It can slow microorganism growth, improve the immune response, and decrease bacterial virulence, so this modest fever is not a sign the infection is winning.",
            "rationale": "The page states fever often accompanies infection as a protective mechanism that slows microbial growth, improves immune response and lowers bacterial virulence. The elevated WBC count likewise reflects the body mounting an immune response."
          },
          {
            "q": "A 34-year-old man returns from a month of travel with itching and mild abdominal cramping. Stool examination finds roundworm eggs, and a CBC with differential is ordered. Which white blood cell type does the nurse expect to be increased?",
            "a": "Eosinophils, which rise with worm (parasitic) infections as well as allergic reactions.",
            "rationale": "The page says eosinophils rise with worms, wheezes, and weird diseases: parasitic infections, allergic or asthma-type reactions, and other hypersensitivity conditions."
          }
        ],
        "200": [
          {
            "q": "A 29-year-old woman has had two days of high fever and a productive cough that began suddenly. Her WBC count is 16,000/mm3, lymphocytes are not elevated, and the differential shows a large share of immature neutrophils. A coworker suggests this is a viral illness. What does this differential most likely indicate?",
            "a": "An acute bacterial infection: the bone marrow is releasing more immature neutrophils (bands) than usual, a shift to the left. A viral or chronic process would raise lymphocytes, which are not elevated.",
            "rationale": "The page says neutrophils rise with acute bacterial infection and trauma, and in the acute stage the marrow releases more immature bands than usual, a shift to the left. Lymphocytes rise with chronic bacterial or acute viral infection."
          },
          {
            "q": "A 46-year-old man reports months of slowly worsening fatigue, night sweats, weight loss, bleeding gums, and abdominal discomfort. His WBC count is markedly elevated and his spleen is enlarged. He has had no recurrent infections. Which type of leukemia fits best?",
            "a": "Chronic myelocytic leukemia: high granulocytes and splenomegaly with gradual symptoms at age 40-50. Chronic lymphocytic leukemia typically affects older adults and features recurrent infections, which he lacks.",
            "rationale": "The page lists high granulocytes and splenomegaly with these signs for CML, typical onset age 40-50. CLL is the most common leukemia in older adults and causes recurrent infections because leukemic B cells do not make normal antibodies."
          }
        ],
        "300": [
          {
            "q": "A 49-year-old woman who smokes two packs a day has a routine CBC with hemoglobin 17.5 g/dL and hematocrit 51%. She has no cough or shortness of breath and is well hydrated with moist mucous membranes. A newer nurse says the values look normal. How should the nurse interpret these results?",
            "a": "They are elevated for a woman (normal hemoglobin 12-16, hematocrit 37-47); the values look normal only against male ranges. Heavy smoking is a recognized cause of high hemoglobin, and dehydration is not present.",
            "rationale": "The page gives sex-specific ranges (males Hgb 14-18, Hct 40-52%; females Hgb 12-16, Hct 37-47%). It lists heavy smoking among causes of high hemoglobin and dehydration among causes of high hematocrit."
          },
          {
            "q": "A 66-year-old woman who had normal routine labs a year ago reports two weeks of severe fatigue, fever, easy bruising, and bone pain, along with mildly enlarged neck nodes. Bone marrow examination shows mostly immature white cells. Which type of leukemia is most likely?",
            "a": "Acute myelocytic leukemia: the sudden onset with immature cells filling the marrow indicates acute leukemia, and AML is primarily an adult disease. ALL is mainly childhood, and chronic leukemias have an insidious onset.",
            "rationale": "The page says acute leukemias begin suddenly with bone pain, bruising, fever and fatigue and are diagnosed when immature cells make up 60-100% of marrow. AML is primarily adult (median age 64), whereas ALL is the common childhood type."
          }
        ],
        "400": [
          {
            "q": "Client A, 19, has a sore throat, extreme fatigue, swollen neck nodes, and an enlarged spleen; the CBC shows elevated WBCs with about 95% lymphocytes. Client B, 27, has a painless, rubbery group of neck nodes that has grown over two months, with night sweats and weight loss. Client C, 74, has painless rubbery neck nodes too, plus groin nodes, night sweats, weight loss, itching, and skin and bone marrow involvement. Which client is expected to have Reed-Sternberg cells on biopsy, and why?",
            "a": "Client B (Hodgkin lymphoma): painless, progressive, rubbery cervical nodes in a young adult. Client C's older age, itching, and early skin and marrow spread fit non-Hodgkin lymphoma, which has no Reed-Sternberg cells; Client A's picture is mononucleosis.",
            "rationale": "The page lists Reed-Sternberg cells on biopsy as the Hodgkin hallmark, with painless rubbery cervical nodes. Non-Hodgkin lymphoma has no Reed-Sternberg cells, is common in older adults, and involves skin and marrow; mononucleosis shows about 95% lymphocytes."
          },
          {
            "q": "Three women in their 50s have hematocrit results. Client A, one day after surgery and several liters of IV fluid, has edema and a 3 kg weight gain; hematocrit 33%. Client B has three days of black stools and pallor; hematocrit 33%. Client C had two days of vomiting with dry mucous membranes and a hematocrit of 49%, which fell to 38% after IV rehydration. Which client's hematocrit most likely reflects a true change in red blood cell mass, and why?",
            "a": "Client B. Black stools and pallor fit true blood loss. Client A's low value is dilution from fluid overload, and Client C's high value and its fall to 38% reflect plasma volume (dehydration, then rehydration), not a change in red cell mass.",
            "rationale": "The page says hematocrit is low with anemia, bleeding, or fluid overload (dilution), and high with dehydration, and that because it is a percentage, plasma volume changes alone can shift it even if RBC mass has not changed. Normal female range is 37-47%."
          }
        ],
        "500": [
          {
            "q": "A 67-year-old man with acute leukemia has a CBC showing a total WBC of 50,000/mm3 with neutrophils 1%, and marrow findings dominated by immature cells. He is afebrile. His daughter, a nurse, says the high white count means his immune system is working hard, and she plans to bring fresh flowers and a raw fruit salad. What should the nurse tell her?",
            "a": "Do not bring them: his absolute neutrophil count is about 500 (50,000 x 1%), below 1,000, so he is neutropenic despite the high total WBC, which is immature leukemic cells. Neutropenic precautions exclude fresh flowers and raw fruit.",
            "rationale": "The page says diff percentages must be read with the total count (percent x total gives the absolute count) and that neutropenia is ANC below 1,000, with precautions that include no fresh flowers and no raw fruits or vegetables. Leukemic cells are immature, and acute leukemia signs come from decreased mature WBCs."
          },
          {
            "q": "On a hematology unit, Client A has myelodysplastic syndrome, started filgrastim three days ago, and reports deep aching in the leg bones; the WBC is higher than yesterday and the temperature is normal. Client B has untreated MDS with an ANC of 600, a temperature of 101.5 F (38.6 C), and says he feels only a little tired. Client C, with a bacterial infection, has a total WBC that rose from 9,000 to 18,000 while lymphocytes fell from 30% to 15%. Which client does the nurse see first, and why?",
            "a": "Client B. An ANC below 1,000 is neutropenia, leaving little to fight infection, and his fever suggests infection, which can be life-threatening. Client A's bone pain and rising WBC are expected filgrastim effects; Client C's lymphocytes (2,700 both times) have not decreased.",
            "rationale": "The page states neutropenia (ANC below 1,000) leaves little to fight infection, making even a routine infection potentially life-threatening, and that fever often accompanies infection. Filgrastim commonly causes bone pain and leukocytosis, and a falling diff percentage can occur with an unchanged absolute count when the total rises."
          }
        ]
      }
    },
    {
      "id": "pp-fluid-electrolytes",
      "name": "Fluid & Electrolytes",
      "clues": {
        "100": [
          {
            "q": "Tetany and a prolonged QT interval are seen on the monitor of a client whose calcium is 6.9. The provider orders IV calcium chloride, and the client currently has only a small peripheral IV in the hand. What should the nurse request before giving the medication?",
            "a": "Request central line access, because IV calcium chloride is a vesicant that is given through a central line.",
            "rationale": "The page lists IV calcium chloride and calcium gluconate as vesicants given via central line, so a small peripheral IV is not the appropriate route."
          },
          {
            "q": "A malnourished client has swelling in both ankles and a low total protein level. The nurse explains the swelling to the family. Which change in the client's fluid pressures best explains why fluid is collecting in the tissues?",
            "a": "Oncotic pressure has fallen. Too little plasma albumin and other colloids remain to pull fluid back into the blood vessels, so fluid stays in the interstitial space.",
            "rationale": "The page states that colloid oncotic pressure falls with malnutrition and age, that plasma colloids (mainly albumin) pull fluid into the vascular space, and that total protein reflects oncotic pressure."
          }
        ],
        "200": [
          {
            "q": "An older adult with several days of severe diarrhea and almost no oral fluid intake has extreme thirst, dry and sticky mucous membranes, muscle cramps, and new confusion. The serum sodium is 156. What treatment should the nurse expect the provider to order?",
            "a": "Adding water. The sodium is high because water was lost, so water is replaced. Sodium replacement is the treatment for low sodium, not high sodium.",
            "rationale": "The page lists add water as the treatment for hypernatremia from water loss. Diarrhea can also cause hyponatremia, but that picture has a low sodium and is treated with sodium replacement or fluid restriction."
          },
          {
            "q": "After a heat stroke, a client has a serum phosphorus of 5.8, muscle spasms, and tingling around the mouth. Reflexes are brisk, but there are no tremors or abnormal eye movements. Which other electrolyte is most likely causing these symptoms?",
            "a": "Calcium, which is low. Phosphorus and calcium have an inverse relationship, and high phosphorus is usually silent, so the spasms and tingling come from the accompanying low calcium.",
            "rationale": "The page lists heat stroke as a cause of high phosphorus, says high phosphorus is usually asymptomatic, and attributes spasms, paresthesia, and tetany to the low calcium. Low magnesium would add tremors and nystagmus."
          }
        ],
        "300": [
          {
            "q": "A client has had several days of confusion and a serum sodium of 127. Weight is up 3 kg, blood pressure is elevated, the pulse is rapid and bounding, and the urine specific gravity is increased. The provider orders normal saline with sodium replacement. What should the nurse do?",
            "a": "Question the order. The picture is dilutional hyponatremia, with too much water and hypervolemia, which is treated with fluid restriction. Sodium replacement is for depletional hyponatremia, which looks hypovolemic.",
            "rationale": "The page says both types cause the same CNS symptoms such as confusion, so the volume picture decides. Dilutional hyponatremia shows weight gain, high blood pressure, bounding pulse, and high urine specific gravity, and is treated with fluid restriction."
          },
          {
            "q": "IV sodium bicarbonate is infusing for a client with heart failure and metabolic acidosis. Two hours later the client has new crackles, shortness of breath, and a 2-kg weight gain. The blood pH is closer to normal, the sodium is 143, and the client has no tingling or muscle spasms. What should the nurse suspect?",
            "a": "Fluid overload with pulmonary edema and worsening heart failure caused by the sodium bicarbonate, which adds sodium and shifts fluid. Without tetany, metabolic alkalosis is not the explanation.",
            "rationale": "The page lists edema, pulmonary edema or heart failure exacerbation from fluid shifts, metabolic alkalosis, tetany, and hypernatremia as adverse effects. Normal sodium and no spasms leave fluid overload as the fit for crackles and weight gain."
          }
        ],
        "400": [
          {
            "q": "Two clients have low calcium that has not improved after two days of oral calcium. Client A has alcohol use disorder, acute pancreatitis, tremors, hyperactive reflexes, and nystagmus. Client B is one day after parathyroid surgery with tingling around the mouth and cramps, a normal diet, and no tremors or abnormal eye movements. For which client should the nurse suggest a serum magnesium level, and why?",
            "a": "Client A. Alcohol use and pancreatitis lower magnesium, low magnesium impairs calcium mobilization from bone so calcium stays low, and tremors with nystagmus fit low magnesium. Client B's drop is explained by the surgery.",
            "rationale": "The page lists hypomagnesemia as a cause of inability to mobilize calcium, lists alcohol abuse and pancreatitis as causes of low magnesium, and lists nystagmus and tremors as its signs. It also says calcium can drop suddenly after parathyroid surgery."
          },
          {
            "q": "Three clients have IV potassium chloride ordered. Client A: potassium 2.4 with ventricular ectopy, peripheral IV at 15 mEq/hr, and the provider says the speed is justified because of the emergency. Client B: potassium 2.9, central line at 20 mEq/hr, telemetry, urine output 60 mL/hr. Client C: potassium 2.7, peripheral IV at 10 mEq/hr, telemetry, urine output 55 mL/hr, nausea and leg cramps. Which client's order should the nurse question?",
            "a": "Client A's order. 15 mEq/hr exceeds the 10 mEq/hr peripheral maximum, and the speed cannot be increased even in an emergency. Client B (20 mEq/hr central) and Client C (10 mEq/hr peripheral) are within the limits.",
            "rationale": "The page gives maximums of 10 mEq/hr peripherally and 20 mEq/hr via central line, says correction speed cannot be increased even in an emergency, and requires urine output and telemetry. Clients B and C meet each requirement; nausea and cramps are just hypokalemia signs."
          }
        ],
        "500": [
          {
            "q": "Repeated doses of sodium polystyrene sulfonate were given for a potassium of 6.8 in a client with kidney failure. The potassium is now 3.3, urine output is 15 mL/hr, and there has been no bowel movement for two days, with abdominal distension, nausea, hypoactive bowel sounds, and leg cramps. The provider orders the next resin dose rectally and potassium chloride IV for the 3.3. What should the nurse do, and why?",
            "a": "Hold both orders and notify the provider. The resin is only for normal bowel function, so constipation or ileus risks obstruction and necrosis whatever the route, and it can cause hypokalemia. Potassium chloride is contraindicated in kidney failure.",
            "rationale": "The page lists hypokalemia and constipation as resin adverse effects, hypokalemia as a cause of ileus, and says to use the resin only with normal bowel function (oral or rectal). It also says potassium chloride is contraindicated in renal failure and needs documented urine output."
          },
          {
            "q": "A client with kidney failure takes an ACE inhibitor and a potassium-sparing diuretic and has made about 200 mL of urine today. The client reports weakness, abdominal cramping, and three loose stools, and the ECG shows peaked T waves. Two orders are pending: potassium chloride 20 mEq PO for diarrhea-related low potassium, and 10 units regular insulin with 1 ampule of 50% dextrose. Which order should the nurse hold and question, and why?",
            "a": "The potassium chloride. The drugs, low urine output, and peaked T waves point to hyperkalemia, and potassium is contraindicated in renal failure. Insulin with D50 is the urgent temporary shift for hyperkalemia with ECG changes.",
            "rationale": "The page lists renal failure, low urine output, potassium-sparing diuretics, and ACE inhibitors as causes of hyperkalemia, with peaked T waves, weakness, cramping, and diarrhea as signs. It says to question potassium in renal failure, and describes insulin with D50 as the emergent shift."
          }
        ]
      }
    },
    {
      "id": "pp-pain-seizures",
      "name": "Pain & Seizures",
      "clues": {
        "100": [
          {
            "q": "A client recovering from knee surgery is started on scheduled oxycodone every 4 hours. The client has been eating very little and is reluctant to get out of bed. What should the nurse plan to do proactively?",
            "a": "Give a stool softener and encourage fluids and nutrition to prevent opioid-induced constipation, which is very common and can progress to paralytic ileus after surgery.",
            "rationale": "The page lists constipation as a very common opioid side effect, managed proactively with stool softeners, hydration, and nutrition, and says untreated it can progress to paralytic ileus, especially post-op."
          },
          {
            "q": "A 10-year-old has had fever, a runny nose, cough, and body aches for two days. The only fever reducer at home is a bottle of chewable aspirin, and the parent asks the nurse whether it is safe to give. What should the nurse advise?",
            "a": "Do not give aspirin. Use acetaminophen or ibuprofen instead, because aspirin during a viral or flu-like illness in a child can cause Reye syndrome.",
            "rationale": "The page says never to give aspirin to children, especially those under 15 with a viral or flu-like illness, because of Reye syndrome. Acetaminophen and ibuprofen are the appropriate choices for fever and pain in children."
          }
        ],
        "200": [
          {
            "q": "Three days after an above-knee amputation, a client reports constant burning pain in the missing foot, rated 8/10, the worst since surgery. The incision is clean and healing. The client's partner says, \"It must be in his head, since the foot is gone.\" How should the nurse interpret the pain?",
            "a": "The pain is real. Phantom pain comes from inappropriate signals in the spinal cord and brain, is most intense right after amputation, and generally resolves over time. It is not psychological.",
            "rationale": "The page says phantom pain originates at the amputated limb's site, is constant and most intense right after amputation, and was once thought psychological but reflects inappropriate spinal cord and brain signals."
          },
          {
            "q": "On the second night after a knee replacement, a client who has slept little for two days, is bored, and is anxious rates pain 9/10. When visitors arrive and a game is on television, the client laughs and rates the pain 4/10. A nurse says the client is exaggerating. What best explains the change in the ratings?",
            "a": "Fatigue, boredom, anxiety, and sleep deprivation lower pain tolerance, while distraction raises it, so the ratings can legitimately change. The pain is real because it is whatever the client says it is.",
            "rationale": "The page defines pain as whatever the patient says and lists fatigue, boredom, apprehension, and sleep deprivation as lowering tolerance, with distraction raising it. Laughing during distraction does not show the pain is absent."
          }
        ],
        "300": [
          {
            "q": "A 78-year-old with a creatinine of 1.9 mg/dL has received meperidine 50 mg IV every 4 hours for three days after surgery. Pain is controlled, respirations are 16/min, and the client is easy to arouse. Which complication should the nurse be most concerned about?",
            "a": "Seizures. A toxic metabolite of meperidine builds up, and older adults and those with renal dysfunction are at greater risk. Respiratory depression is less of a concern with meperidine.",
            "rationale": "The page says meperidine has less respiratory depression than morphine, but its toxic metabolite accumulates with multiple doses and can cause seizures, so it needs caution in older adults and renal dysfunction."
          },
          {
            "q": "A client with epilepsy, controlled on levetiracetam, also takes sertraline for depression. After a fracture repair the client rates pain 7/10, and the provider orders tramadol 50 mg PO every 6 hours as needed. The client is alert, respirations are 16/min, and there is no history of liver disease. What should the nurse do?",
            "a": "Question the tramadol order and notify the prescriber before giving it. Tramadol lowers the seizure threshold, and combining it with an SSRI raises seizure risk further in a client with epilepsy.",
            "rationale": "The page says tramadol lowers the seizure threshold and carries added seizure risk when combined with SSRIs, MAOIs, or TCAs. Moderate-severe pain is its indication, and normal respirations and no liver disease do not remove that risk."
          }
        ],
        "400": [
          {
            "q": "Two clients have new antiepileptic orders. Client A has generalized tonic-clonic and myoclonic seizures, bipolar disorder, and chronic liver disease with elevated liver enzymes; valproic acid is ordered because it can treat both conditions. Client B has tonic-clonic seizures, poor oral intake with a low albumin, and an order for phenytoin with drug levels planned. For which client should the nurse question the order, and why?",
            "a": "Client A. Valproic acid is contraindicated in liver disease and can cause hepatotoxicity, so its coverage of all seizure types and bipolar disorder does not outweigh the risk. Client B's low albumin calls for caution with phenytoin, not a contraindication.",
            "rationale": "The page lists valproic acid as versatile but contraindicated in liver disease. It lists phenytoin as first-line for tonic-clonic seizures, to be used cautiously with malnutrition, kidney disease, or low albumin, with serum drug levels monitored."
          },
          {
            "q": "Provider orders acetylcysteine for three clients. Client A took about 15 g of acetaminophen tablets two hours ago and feels well, with no jaundice. Client B has chronic alcohol use disorder, has taken 3 g daily for several weeks, and has jaundice with elevated liver enzymes. Client C has chronic liver failure, takes about 1.5 g daily, and has jaundice. For which client is the antidote expected to work?",
            "a": "Client A only. Acetylcysteine is effective for acute acetaminophen overdose, not for chronic misuse or chronic liver failure, which describe Client B (3 g exceeds the 2 g limit with alcohol use) and Client C.",
            "rationale": "The page says acetylcysteine is effective for acute overdose but not chronic misuse or chronic liver failure, and that patients with liver disease or chronic alcohol use should not exceed 2,000 mg per 24 hours. Overdose depletes glutathione, causing hepatic necrosis."
          }
        ],
        "500": [
          {
            "q": "A client with a history of opioid addiction is on day 6 of IV ketorolac after abdominal surgery, chosen to avoid opioids. Pain is 4/10, but creatinine has risen from 0.8 to 1.7 mg/dL. The client also takes an anticoagulant. The provider, wanting to avoid opioids, orders a switch to once-daily naproxen. What should the nurse do?",
            "a": "Hold the ketorolac and question the naproxen. Ketorolac is past its 5-day limit and very hard on the kidneys, and naproxen is the NSAID hardest on the kidneys. Ask for a non-NSAID such as acetaminophen, which suits anticoagulant users.",
            "rationale": "The page says ketorolac is very hard on the kidneys and limited to 5 days or less, and naproxen is hardest on the kidneys. Non-selective NSAIDs lose COX-1 platelet function, and acetaminophen is preferred over NSAIDs with anticoagulants and treats mild-moderate pain."
          },
          {
            "q": "A client with chronic neuropathic pain took extra doses of oxycodone and gabapentin and was found unresponsive with respirations of 6/min. After IV naloxone, respirations rise to 14, but the client is agitated, reports severe pain, and has an elevated blood pressure. Thirty minutes later the client is drowsy and respirations fall to 8/min. What should the nurse anticipate?",
            "a": "Repeat naloxone doses or a continuous drip with close respiratory monitoring. Naloxone has a short half-life, and gabapentin overdose is only partially reversed, so sedation can persist. The agitation, pain, and high blood pressure are expected effects of abrupt reversal.",
            "rationale": "The page says naloxone has a short half-life and often needs repeat dosing or a drip, and that gabapentin overdose is only partially reversed by it. It lists returning withdrawal, blood pressure changes, and abruptly returning pain as effects of abrupt reversal."
          }
        ]
      }
    },
    {
      "id": "pp-dementia-depression-sud",
      "name": "Dementia, Depression & SUD",
      "clues": {
        "100": [
          {
            "q": "A client who started phenelzine for depression last week is planning dinner tonight: grilled chicken, rice, a green salad, and a glass of red wine. What should the nurse teach the client about this meal?",
            "a": "Avoid the red wine. It contains tyramine, and tyramine with an MAOI can trigger a hypertensive crisis.",
            "rationale": "The page calls hypertensive crisis the most serious MAOI risk and lists red wine, with aged cheese, smoked meats, and yeast/bread, as tyramine sources to avoid entirely."
          },
          {
            "q": "Ten days after starting venlafaxine for depression, a client tells the nurse, \"I haven't noticed any improvement, so maybe this medicine just doesn't work for me.\" The client has taken every dose and reports no side effects. What should the nurse tell the client?",
            "a": "It is too early to judge. No antidepressant works right away, and full benefit takes 4-8 weeks.",
            "rationale": "The page says none of the antidepressants work right away and that full efficacy takes 4-8 weeks, a critical patient-teaching point. Options such as a dose change or a different drug are considered only after that window."
          }
        ],
        "200": [
          {
            "q": "A 69-year-old man with hypertension, type 2 diabetes, hyperlipidemia, and a long smoking history has progressive problems with judgment and memory. Imaging shows evidence of prior small-vessel strokes. His wife asks what the care team can do about his condition. What should the nurse identify as the main focus of his treatment, and why?",
            "a": "Preventing and managing his risk factors (blood pressure, glucose, lipids, smoking), because his dementia is vascular, caused by cerebrovascular disease with reduced cerebral blood flow.",
            "rationale": "The page ties vascular dementia, the second most common type, to cerebrovascular disease causing cerebral hypoperfusion, and states that treatment is preventing and managing diabetes, hyperlipidemia, hypertension, and smoking."
          },
          {
            "q": "A client with major depression has not improved after several antidepressant trials, has lost weight, and cannot sleep. Tonight he describes active thoughts of ending his life. The prescriber wants the fastest-acting option available, and a colleague suggests bupropion because its onset is faster than most antidepressants. Which medication should the nurse expect to be ordered instead?",
            "a": "Low-dose intranasal ketamine, which acts rapidly in refractory depression and is useful for actively suicidal clients. Bupropion's faster onset is still 1-3 weeks.",
            "rationale": "The page describes low-dose intranasal ketamine for refractory or extreme depression with a rapid effect in suicidal patients. Bupropion has a faster onset than most antidepressants, but that means 1-3 weeks."
          }
        ],
        "300": [
          {
            "q": "An 80-year-old with Alzheimer disease began donepezil two weeks ago. His daughter says she gives it at bedtime from a weekly pill organizer, that he had one brief lightheaded spell with a pulse of 56 last week that has not recurred, and that she gives ibuprofen for his knee arthritis. Which of her actions should the nurse correct?",
            "a": "Giving the ibuprofen. Donepezil carries ulcer and GI bleed risk, so NSAIDs should be avoided. Bedtime dosing and the pill organizer are appropriate, and the brief lightheadedness and slow pulse resolve with titration.",
            "rationale": "The page lists GI ulcer and bleed risk with donepezil and says to avoid NSAIDs, to give it at bedtime, and to use adherence packaging for forgetful patients. Bradycardia and syncope resolve with titration or tolerance."
          },
          {
            "q": "An 82-year-old woman with mild dementia is on postoperative day 2 after hip surgery. Since last night she has been restless, hallucinating, and sleepless, with heart rate 112, diaphoresis, and dilated pupils. Her daughter notes her memory has been poor for years. Orders include scheduled oxycodone and lorazepam at bedtime for sleep. She still needs her postoperative pain treated. Which order should the nurse ask the prescriber to discontinue?",
            "a": "The lorazepam, since benzodiazepines are a risk factor for hyperactive delirium. The oxycodone is not stopped but kept to the lowest dose for the shortest time. Antipsychotics are not needed unless she endangers herself or staff.",
            "rationale": "The page identifies benzodiazepines and narcotics as risk factors for hyperactive delirium, with dementia raising delirium risk. Treatment is removing causes and medications; antipsychotics are reserved for danger to self or staff."
          }
        ],
        "400": [
          {
            "q": "Client A is 52 and started amitriptyline for neuropathic pain 2 weeks ago; she feels overheated and has a dry mouth, blurred vision, a flushed face, and mild confusion at night. Client B started amitriptyline for depression 2 weeks ago, has none of these effects, and quietly says, \"I keep thinking about taking all of my pills at once.\" Client C has taken fluoxetine for 5 weeks and reports headache, trouble sleeping, and decreased sexual desire. Which client should the nurse address first, and why?",
            "a": "Client B. TCA overdose can be fatal, and depressed clients on a TCA already carry higher suicide risk, which the drug can also increase. Client A's findings are expected anticholinergic effects and Client C's are expected SSRI effects.",
            "rationale": "The page's anticholinergic mnemonic covers dry mouth, blurred vision, flushing, and confusion, and headache, insomnia, and sexual dysfunction are listed SSRI adverse effects. Its danger callout says TCA overdose can be fatal and the drug may increase suicidal thoughts."
          },
          {
            "q": "Client A has taken an SSRI for 5 weeks, ran out of refills 3 days ago, and now has dizziness, a headache, and hands that feel \"on fire.\" Client B has taken venlafaxine for 2 months; the prescriber added phenelzine this morning, and 10 hours later he is confused and disoriented. Client C started phenelzine 3 weeks ago and feels lightheaded when standing up quickly, with no other complaints. Which client should the nurse see first, and why?",
            "a": "Client B. New confusion within hours of combining an SNRI with an MAOI suggests serotonin syndrome, which appears 2-72 hours after the interacting dose. Client A's findings fit SSRI withdrawal (needs a taper plan), and Client C's fit the MAOI's orthostatic hypotension.",
            "rationale": "The page says serotonin syndrome risk rises with an SSRI/SNRI plus an MAOI, with altered mental status appearing 2-72 hours after the interacting dose. Abruptly stopping an SSRI causes withdrawal (dizziness, headache, burning sensations) needing a taper plan, and MAOIs cause orthostatic hypotension."
          }
        ],
        "500": [
          {
            "q": "Two clients are admitted tonight. Client A drinks heavily every day, had his last drink about 6 hours ago, and is calm with normal vital signs, saying, \"I feel fine.\" Client B has used heroin daily, took his last dose about 18 hours ago, and has nausea, stomach cramps, diarrhea, goosebumps, sweating, and anxiety. Which client should the nurse anticipate to be at risk for life-threatening withdrawal, and why?",
            "a": "Client A. Alcohol withdrawal begins about 8 hours after the last drink, so he is about to start despite being calm, and it can cause seizures and DTs, requiring a benzodiazepine taper. Client B's opioid withdrawal is miserable but not life-threatening.",
            "rationale": "The page gives alcohol withdrawal onset of about 8 hours with a 1-3 day peak, and says benzodiazepine and alcohol withdrawal, unlike opioid withdrawal, can be life-threatening, treated with a benzodiazepine taper. Opioid withdrawal begins at 12-24 hours and is managed with supportive care."
          },
          {
            "q": "A 45-year-old admitted after a car crash has taken Xanax daily for panic disorder, but it was not ordered on admission and his last dose was about 10 hours ago. He is anxious, sweating, and has a headache and palpitations. A new order starts bupropion for smoking cessation. What is the nurse's greatest concern?",
            "a": "Seizures. Stopping the benzodiazepine abruptly puts him in withdrawal (onset 6-12 hours), which can cause seizures, and bupropion lists seizure as an adverse effect, so adding it compounds the risk.",
            "rationale": "The page gives benzodiazepine withdrawal onset of 6-12 hours, lists sweating, palpitations, headache, and anxiety as non-dangerous signs but seizures as dangerous, and lists seizure among bupropion's side effects. Panic relapse is the tempting wrong reading."
          }
        ]
      }
    },
    {
      "id": "pp-gi-gu-skin-hypersensitivity",
      "name": "GI, GU, Skin & Hyper\u00adsensitivity",
      "clues": {
        "100": [
          {
            "q": "A client with chronic constipation from a low-fiber diet is prescribed psyllium powder. The client says, \"I'll stir the scoop into a small splash of water so it's easier to get down.\" Vital signs are normal and there is no abdominal pain. What should the nurse teach?",
            "a": "Take each dose with liberal water (a full glass or more). Psyllium absorbs water and swells, so too little fluid can cause esophageal obstruction or impaction.",
            "rationale": "The page states bulk-forming laxatives must be taken with liberal water to prevent esophageal obstruction/impaction. They work like dietary fiber by absorbing water and increasing stool bulk."
          },
          {
            "q": "A client started on mirabegron for overactive bladder returns for a follow-up visit. Baseline BP was 128/80, and today it is 168/98. The client reports no other problems. What should the nurse do?",
            "a": "Report the elevated BP to the prescriber promptly. Hypertension is the most serious adverse reaction of mirabegron, which is why BP is monitored.",
            "rationale": "The page names hypertension as mirabegron's most serious adverse reaction and says to monitor BP, so a large rise from baseline is a drug-related finding to report."
          }
        ],
        "200": [
          {
            "q": "A 21-year-old has had thick, silvery-white plaques with red edges on both elbows for months. The client has hay fever, so a friend suggested eczema, and a roommate worries about catching it. Which nurse explanation is most accurate?",
            "a": "This is psoriasis, not eczema, and it is not contagious. Skin cells grow too fast and pile up as plaques instead of flaking off normally every 4 weeks.",
            "rationale": "The page describes psoriasis as non-contagious, beginning in young adulthood, with thick white/silvery red-edged plaques from too-rapid skin cell growth. Eczema is an itchy rash on the face, backs of knees, and wrists, and hay fever is only an eczema association."
          },
          {
            "q": "A client who just finished a strong antibiotic course has white patches coating the inside of the mouth, no fever, and no signs of organ involvement. The prescriber orders nystatin by IV infusion. A coworker says to ask for amphotericin B instead because it is the stronger antifungal. What should the nurse do?",
            "a": "Question the IV nystatin order but not switch to amphotericin B. This is superficial oral candidiasis, which nystatin treats as a swish-and-spit or swish-and-swallow liquid; nystatin is too toxic for IV, and amphotericin B is for systemic mycoses.",
            "rationale": "The page lists antibiotic use as a candidiasis risk, says candidiasis affects only outer mucous membranes and is treated topically, and says nystatin is too toxic for IV. Amphotericin B is the agent of choice for systemic mycoses, which involve internal organs."
          }
        ],
        "300": [
          {
            "q": "A client stung by wasps has hives, wheezing, lip swelling, and BP 70/40, and an IV is in place. A colleague holds a syringe of epinephrine 1:1,000, 0.3 mg, and says pushing it through the IV will work faster. A vial of 1:10,000 sits on the nearby cardiac arrest cart. What should the nurse do?",
            "a": "Do not push the 1:1,000 dose IV and do not switch to the 1:10,000 vial. Give the 1:1,000 anaphylaxis dose by a non-IV route (IM or subcutaneous, which the page says is often preferred), because an IM-concentration dose given IV can cause death.",
            "rationale": "The page says anaphylaxis uses 1:1,000 (adult 0.2-1 mg) while cardiac arrest uses the more dilute 1:10,000. It warns that an IM-concentration dose given IV can cause death, and lists IM and subcutaneous (often preferred) among the routes."
          },
          {
            "q": "An 82-year-old nursing-home resident with an indwelling urinary catheter became confused and lethargic since yesterday, refused meals, and fell. Temperature is 98.9 F and the resident denies burning or urgency. A chart note from last month says the urine contained bacteria with no symptoms, and an aide thinks this is dementia progression. Which condition should the nurse suspect, and why?",
            "a": "A catheter-associated UTI. Catheterization is a risk factor, and older adults often present with confusion, anorexia, lethargy, or falls instead of dysuria. Bacteria alone are colonization, so urinalysis, culture, and CBC are needed to confirm.",
            "rationale": "The page lists catheterization as a UTI risk factor and says elderly clients present atypically with confusion, anorexia, lethargy, anxiety, or falls. Bacteriuria alone is colonization, not automatic infection; diagnosis uses urinalysis, urine culture, and CBC."
          }
        ],
        "400": [
          {
            "q": "Two clients have diarrhea. Client A, a man with benign prostatic hyperplasia, has a new order for diphenoxylate with atropine. Client B, taking bismuth subsalicylate, reports dark stools and a dark tongue and is alarmed. Which client's situation should the nurse report to the prescriber, and why?",
            "a": "Client A. Diphenoxylate with atropine is anticholinergic and can cause urinary retention, which BPH already makes more likely. Client B's dark stools and tongue are harmless.",
            "rationale": "The page lists urinary retention as an anti-motility side effect, notes Lomotil is prescription-only for its anticholinergic effects, and says BPH raises retention risk. Dark stools and tongue with bismuth are a harmless effect."
          },
          {
            "q": "A 58-year-old African-American client has three findings: a rough, scaly, red forearm plaque unchanged for a year; a small pink dome-shaped cheek bump growing slowly; and a painless dark spot under a fingernail that has slowly grown to about 8 mm with brown-to-black color variation. The client says skin cancer only affects white people. Which finding should the nurse prioritize for prompt evaluation, and why?",
            "a": "The nail lesion. Its color variation, size over 6 mm, and slow change fit ABCDE melanoma, which can occur under nails, and African-Americans are more often diagnosed at an advanced stage. The plaque is a watched precancerous lesion; the bump fits slow-growing basal cell carcinoma.",
            "rationale": "The page says melanoma is the most deadly skin cancer, can occur under nails, and is screened with ABCDE. Actinic keratosis is watched over time, basal cell carcinoma is the least malignant and usually does not metastasize, and African-Americans are 4 times more likely to be diagnosed at an advanced stage."
          }
        ],
        "500": [
          {
            "q": "A client with a pulmonary fungal infection began oral fluconazole 4 days ago. Home medications are glipizide (a sulfonylurea), warfarin, and omeprazole taken with the fluconazole each morning. Today the client reports shakiness and sweating, a large thigh bruise after a minor bump, and mild nausea, with no jaundice or abdominal pain. A coworker blames liver toxicity or the omeprazole. What should the nurse conclude and report?",
            "a": "Fluconazole interactions: hypoglycemia risk with glipizide and bleeding/hematoma risk with warfarin; report both. Without jaundice or abdominal pain this is not liver toxicity, and omeprazole affects only absorption (separate by 2 hours); the nausea is expected GI upset.",
            "rationale": "The page lists increased bleeding/hematoma risk with warfarin and hypoglycemia risk with sulfonylureas as fluconazole interactions, and GI upset as a systemic effect. Liver toxicity is flagged by jaundice or abdominal pain, and acid-reducing drugs like PPIs matter for absorption, so they are separated by at least 2 hours."
          },
          {
            "q": "A 79-year-old woman in a care facility, previously continent, began leaking urine suddenly two days ago. She has not passed a formed stool in 5 days, now leaks small liquid stools, reports rectal pain, and has a distended abdomen. Oxybutynin is ordered for \"urge incontinence.\" What should the nurse do about the oxybutynin order?",
            "a": "Hold the oxybutynin and report suspected fecal impaction to the provider. The sudden incontinence is likely transient and reversible from impaction, and oxybutynin's anticholinergic effect would worsen constipation.",
            "rationale": "The page describes transient incontinence as sudden and reversible, often related to a UTI, constipation, or impaction, with liquid stool leaking around an impaction. Anticholinergics like oxybutynin cause constipation."
          }
        ]
      }
    },
    {
      "id": "pp-stress-steroids",
      "name": "Stress & Steroids",
      "clues": {
        "100": [
          {
            "q": "Three weeks after a kidney transplant, a client has no signs of rejection and no history of adrenal disease, arthritis, or asthma. The client is taking a low daily dose of prednisone and asks why a steroid was ordered. What should the nurse explain is the purpose of the prednisone?",
            "a": "It is given in a small dose to intentionally suppress the immune response so the body does not reject the transplanted kidney.",
            "rationale": "The page lists immunosuppression as a distinct steroid purpose, using smaller doses after organ transplant; patients are typically weaned off if no rejection develops. The client has no adrenal or inflammatory condition that would suggest replacement or anti-inflammatory use."
          },
          {
            "q": "Persistent fatigue and low blood pressure lead to testing that shows very low adrenal hormone output, and the provider orders daily hydrocortisone. The client says, \"I thought steroids were for swelling and allergies, and I have neither. Why am I taking this?\" What should the nurse explain?",
            "a": "The hydrocortisone supplies the cortisol the client's own adrenal glands are not making enough of; it is not being used for inflammation or immune suppression.",
            "rationale": "The page lists replacement as a steroid purpose when the adrenal gland is not producing enough on its own. Anti-inflammatory and immunosuppressive uses do not fit because the client has no inflammatory condition or transplant."
          }
        ],
        "200": [
          {
            "q": "A client with adrenal insufficiency takes replacement steroid, prescribed as two-thirds of the daily dose on waking and one-third in the early evening. The client dislikes the evening dose and says, \"I'll just take the whole amount at bedtime instead.\" Should the nurse agree, and why?",
            "a": "No. Replacement dosing is meant to mimic the body's natural cortisol pattern, which peaks in a burst around dawn, so the larger share belongs in the morning rather than all at bedtime.",
            "rationale": "The page states replacement is dosed to mimic physiologic release, with a dawn peak, and describes the two-thirds morning and one-third evening split. Taking it all at bedtime would reverse the natural pattern."
          },
          {
            "q": "A client is brought to the ED after falling from a ladder, with no head injury or bleeding. Heart rate is 118, pupils are dilated, the mouth is very dry, and bowel sounds are hypoactive. The client asks, \"Is something wrong with my stomach? I'm not hungry at all.\" What should the nurse conclude about these findings?",
            "a": "They are expected sympathetic (fight-or-flight) effects, not a new GI problem: saliva and peristalsis decrease because digestion is not needed, while heart rate rises and pupils dilate.",
            "rationale": "The page lists sympathetic effects as dilated pupils, stopped salivation, increased heart rate, and decreased peristalsis and gastric secretions. Parasympathetic activity, which restores digestion, takes over only when the stressor resolves."
          }
        ],
        "300": [
          {
            "q": "A client who has taken prednisone 7.5 mg daily for COPD for two years has no history of diabetes. At a clinic visit, weight is up 4 kg in two months, the client reports constant hunger and occasional mood swings, and fasting glucose is higher than at previous visits. COPD is stable. Which finding is the most concerning, and why?",
            "a": "The rising fasting glucose. Long-term steroids cause hyperglycemia that can worsen or unmask diabetes. The hunger, mood swings, and weight gain are expected steroid effects.",
            "rationale": "The page lists hyperglycemia that can unmask diabetes as a long-term steroid effect, and mood swings, weight gain, and increased hunger as listed steroid effects, with regular weight and glucose monitoring taught. Stable COPD does not explain the glucose change."
          },
          {
            "q": "A client on long-term prednisone for a rheumatic disorder phones the clinic with a temperature of 38.3 C, productive cough, and malaise. The client had a normal white blood cell count last week and says, \"My count is normal, so I'll wait a few days and see.\" What should the nurse advise, and why?",
            "a": "Report the illness to the provider now. Steroids suppress immunity and limit the white blood cell response, so a normal count does not rule out infection, and infection risk is increased.",
            "rationale": "The page ties glucocorticoids to immune suppression, increased infection risk, and a limited white blood cell response, and teaches that illness should be reported promptly so the dose can be adjusted. The client's reliance on the normal count is the misconception."
          }
        ],
        "400": [
          {
            "q": "Three clients each take a corticosteroid. Client A has glaucoma and uses a daily inhaled steroid for asthma. Client B has glaucoma and is receiving an IV steroid for a COPD exacerbation, to be changed to oral. Client C has no eye disease and receives the same IV-to-oral regimen as Client B. Which client needs the closest monitoring for steroid-related increased intraocular pressure, and why?",
            "a": "Client B. Glaucoma makes increased intraocular pressure a particular concern, and IV or oral steroids act systemically, whereas inhaled steroids act locally with little to no systemic effect.",
            "rationale": "The page lists increased intraocular pressure as an acute steroid effect that matters most in glaucoma, and describes inhaled steroids as localized with little to no systemic action. Client C lacks glaucoma, and Client A's inhaled route is mainly local."
          },
          {
            "q": "Two clients are on prednisone. Client A has taken it for two years for COPD, has vomited for two days, and has not kept down any doses; now reports fatigue, nausea, and muscle weakness. Client B started it 10 days ago and reports hunger, weight gain, and mood swings. Which client should the nurse prioritize, and why?",
            "a": "Client A. Long-term steroids suppress the adrenal glands, so missed doses amount to abrupt withdrawal that can cause a deadly adrenal crisis. Client B's findings are expected acute steroid effects.",
            "rationale": "The page says long-term use suppresses the body's own adrenal hormone production, causing fatigue, appetite loss, nausea, and weakness, and that abrupt withdrawal can cause adrenal crisis. Hunger, mood swings, and weight gain are listed acute effects."
          }
        ],
        "500": [
          {
            "q": "A client with heart failure has taken dexamethasone replacement for years. Labs showed falling sodium and rising potassium despite normal kidney function, and fludrocortisone was added. At the two-week visit, sodium and potassium are trending toward normal and the client mentions mild fatigue. Because of the heart failure, which drug effect should the nurse monitor most closely now, and why?",
            "a": "Fluid retention (weight gain, edema, rising blood pressure). Fludrocortisone substitutes for aldosterone, which reabsorbs sodium with water following, raising volume and pressure, dangerous in heart failure. Improving sodium and potassium are the expected response, not the concern.",
            "rationale": "The page says dexamethasone lacks aldosterone activity, causing salt wasting with high potassium, and fludrocortisone substitutes for aldosterone, which raises extracellular volume and blood pressure. Fluid retention is a listed concern in heart failure."
          },
          {
            "q": "A client with adrenal insufficiency has taken hydrocortisone replacement for years, and the usual dose was continued unchanged through abdominal surgery. On postoperative day 1, BP is 82/46, heart rate 108, with marked weakness and nausea. Temperature, hemoglobin, sodium, and potassium are normal and the incision is clean. A resident says the serum cortisol is normal, so the adrenals are fine. What should the nurse suspect, and why?",
            "a": "Adrenal crisis: surgery is a major stress, the client's own adrenals cannot ramp up cortisol, so the unchanged dose is too low, and cortisol is needed for blood pressure. The normal cortisol cannot distinguish hydrocortisone from the client's own.",
            "rationale": "The page says replacement clients need a higher dose for surgery or major stress because their glands cannot ramp up cortisol, and that failing to do so can precipitate adrenal crisis. Hydrocortisone is identical to endogenous cortisol on a blood test, and cortisol works with catecholamines to maintain blood pressure."
          }
        ]
      }
    }
  ]
};
