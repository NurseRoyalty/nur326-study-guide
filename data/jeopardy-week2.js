/* ============================================================
   data/jeopardy-week2.js — Week 2 Jeopardy question bank ONLY.

   This file holds content ONLY. The game engine (assets/jeopardy.js)
   and the page shell (week2-jeopardy.html) never hardcode a single
   question — they just read window.JEOPARDY_WEEK2 at runtime. This
   split is deliberate (the user's explicit requirement): the bank
   can be expanded or edited later without touching the game code.

   Sourcing: every clue/answer/rationale is drawn strictly from that
   category's own Week 2 topic page (see each category's "source"
   field) — no outside knowledge, nothing from Week 1 or Pathopharm
   Review. week2-big-picture-overview.html is deliberately excluded as
   a category source: it is a non-testable synthesis/map page (its own
   text says "No flashcards or quiz-bank questions here").

   Shape:
     window.JEOPARDY_WEEK2 = {
       categories: [
         { id, name, source, clues: { "100":[...], "200":[...], ... "500":[...] } }
       ]
     }
   Each clue: { id, q, a, rationale }. "id" is stable and unique
   site-wide (e.g. "uri-300-2") — the game engine uses it to track
   which clues were used in the previous round, for the
   avoid-repeat-when-possible logic. This is a recall-and-reveal format
   (no multiple-choice options): the player reads q, thinks of an
   answer, clicks Show Answer to see a + rationale, then self-grades.

   Built 2026-09-07. 6 categories (the 6 real quizzable Week 2 topic
   pages), 20 clues each (4 per value 100/200/300/400/500) = 120 total.
   ============================================================ */
window.JEOPARDY_WEEK2 = {
  "categories": [
    {
      "id": "uri",
      "name": "Upper Respiratory Infections (URI)",
      "source": "week2-uri.html",
      "clues": {
        "100": [
          {
            "id": "uri-100-0",
            "q": "What is sputum?",
            "a": "Mucus secreted from the respiratory tract that gets coughed up.",
            "rationale": "The page defines sputum as mucus secreted from the respiratory tract and coughed up; cilia normally move it (and whatever it traps) out of the airway."
          },
          {
            "id": "uri-100-1",
            "q": "Where in the body is histamine stored?",
            "a": "In mast cells (skin and soft tissue) and basophils (blood).",
            "rationale": "The Histamine section states histamine is stored in mast cells (skin and soft tissue) and basophils (blood)."
          },
          {
            "id": "uri-100-2",
            "q": "What structure does laryngitis affect?",
            "a": "The vocal cords/larynx.",
            "rationale": "The page defines laryngitis as inflammation of the vocal cords/larynx."
          },
          {
            "id": "uri-100-3",
            "q": "What is the hallmark cough sound associated with laryngotracheobronchitis (croup)?",
            "a": "A \"barking\" cough.",
            "rationale": "The page states croup — inflammation of the larynx, trachea, and bronchi together — produces the classic \"barking\" cough."
          }
        ],
        "200": [
          {
            "id": "uri-200-0",
            "q": "Which two decongestant drugs are named on this page?",
            "a": "Phenylephrine and pseudoephedrine.",
            "rationale": "The Decongestants row lists phenylephrine and pseudoephedrine as the sympathomimetics that cause vasoconstriction in the nasal passages."
          },
          {
            "id": "uri-200-1",
            "q": "Which three second-generation (non-sedating) antihistamines are listed?",
            "a": "Loratadine, fexofenadine, and cetirizine.",
            "rationale": "The Second-Generation card names loratadine, fexofenadine, and cetirizine as the ones that belong on the drug matrix."
          },
          {
            "id": "uri-200-2",
            "q": "On exam, what finding suggests a case of pharyngitis is bacterial (strep) rather than viral?",
            "a": "White spots/exudate on the throat and tonsils.",
            "rationale": "The page states bacterial pharyngitis often shows white spots/exudate on the throat and tonsils, while viral typically doesn't."
          },
          {
            "id": "uri-200-3",
            "q": "By about what percentage does the flu vaccine reduce the risk of severe illness and death?",
            "a": "About 36%.",
            "rationale": "The Vaccine Benefit row states the vaccine doesn't necessarily prevent infection, but reduces the risk of severe illness and death by about 36%."
          }
        ],
        "300": [
          {
            "id": "uri-300-0",
            "q": "What key pathophysiological difference separates chronic bronchitis from acute (simple) bronchitis?",
            "a": "Chronic bronchitis involves airflow obstruction; acute bronchitis does not.",
            "rationale": "Acute bronchitis is inflammation of the bronchi/bronchioles with no airflow obstruction, while the page explicitly notes chronic bronchitis, unlike acute, does involve airflow obstruction."
          },
          {
            "id": "uri-300-1",
            "q": "What immune mechanism triggers allergic rhinitis?",
            "a": "An IgE-mediated histamine release triggered by environmental allergens.",
            "rationale": "The page describes allergic rhinitis as inflammation and swelling of the nasal mucous membranes from an IgE-mediated histamine release triggered by environmental allergens."
          },
          {
            "id": "uri-300-2",
            "q": "What do H1 and H2 histamine receptors each mediate?",
            "a": "H1 mediates smooth muscle contraction and capillary dilation (the antihistamine target); H2 mediates heart rate and gastric acid secretion (the H2-blocker target).",
            "rationale": "The Antihistamines section draws this exact distinction between the two receptor types and which drug class targets each."
          },
          {
            "id": "uri-300-3",
            "q": "What is the mechanism by which decongestants like phenylephrine and pseudoephedrine relieve nasal congestion?",
            "a": "They act as sympathomimetics that activate alpha receptors, causing vasoconstriction that shrinks the nasal blood vessels.",
            "rationale": "The Decongestants row describes this mechanism, which is what opens the nasal passages."
          }
        ],
        "400": [
          {
            "id": "uri-400-0",
            "q": "A patient has drooling, inspiratory stridor, and retractions, but no barking cough. What does that absence point toward instead of croup?",
            "a": "Epiglottitis.",
            "rationale": "The page states the absence of a barking cough is what distinguishes epiglottitis from croup, alongside drooling, stridor, and retractions."
          },
          {
            "id": "uri-400-1",
            "q": "Does an antihistamine stop a mast cell from releasing histamine, or does it work some other way?",
            "a": "Some other way — it occupies/competes for the receptor so histamine can't bind, without stopping histamine release itself.",
            "rationale": "The antihistamine-mechanism figure caption explicitly states antihistamines don't stop the mast cell from releasing histamine — they occupy the receptor so histamine can't bind to it."
          },
          {
            "id": "uri-400-2",
            "q": "Besides the risk of rebound nasal congestion, why is pseudoephedrine kept behind the pharmacy counter?",
            "a": "It's a methamphetamine precursor with abuse potential, so it's sold with ID and purchase limits.",
            "rationale": "The page notes pseudoephedrine works better than phenylephrine as a decongestant but is sold behind the counter with ID/purchase limits since it's a methamphetamine precursor with abuse potential."
          },
          {
            "id": "uri-400-3",
            "q": "Why does the page caution against combining codeine with diphenhydramine?",
            "a": "Both are CNS depressants, so combining them compounds sedation risk.",
            "rationale": "Codeine is described as an opioid-based, CNS-depressant cough suppressant, with caution advised about combining it with other depressants like diphenhydramine."
          }
        ],
        "500": [
          {
            "id": "uri-500-0",
            "q": "Why might a patient with an active upper respiratory infection have an elective surgical procedure postponed?",
            "a": "An active URI raises the risk of bronchospasm during ventilation or anesthesia recovery, which can be reason enough to delay an elective procedure.",
            "rationale": "The Bronchospasm callout states patients being ventilated or recovering from anesthesia are at higher risk, and an active URI can be enough reason to delay an elective procedure."
          },
          {
            "id": "uri-500-1",
            "q": "Beyond thinning secretions in chronic pulmonary conditions like cystic fibrosis, what unrelated use does acetylcysteine have, and how must it usually be given given its own risk?",
            "a": "It's also the antidote for acetaminophen overdose; because it carries a bronchospasm risk, it's best given by nebulizer with close monitoring of lung sounds.",
            "rationale": "The Mucolytics row states acetylcysteine decreases mucus viscosity for conditions like cystic fibrosis, is also the antidote for acetaminophen overdose (a different indication), and carries a bronchospasm risk best managed by nebulizer administration with close lung-sound monitoring."
          },
          {
            "id": "uri-500-2",
            "q": "What symptom duration on this page raises suspicion that a case of sinusitis is bacterial rather than viral?",
            "a": "Symptoms lasting longer than a week.",
            "rationale": "The page states viral sinusitis is self-limiting (5–7 days) while bacterial can last up to 4 weeks, and symptoms lasting longer than a week raise suspicion for a bacterial cause."
          },
          {
            "id": "uri-500-3",
            "q": "Through what mechanism does influenza lead to secondary bacterial pneumonia, and why does this drive extra emphasis on flu vaccination in elderly or comorbid patients?",
            "a": "The flu virus damages the lungs' defenses, letting bacteria move in and cause secondary bacterial pneumonia — a major reason the vaccine is emphasized in elderly and comorbid patients.",
            "rationale": "The Influenza table's Serious Complication row states this mechanism directly and ties it to why the flu vaccine is emphasized in elderly and comorbid patients."
          }
        ]
      }
    },
    {
      "id": "obstructive",
      "name": "Obstructive Airway Disorders",
      "source": "week2-obstructive-airway-disorders.html",
      "clues": {
        "100": [
          {
            "id": "obstructive-100-0",
            "q": "What is asthma's basic definition, according to the page — chronic inflammation of what structure?",
            "a": "Chronic inflammation of the bronchial airways.",
            "rationale": "The page specifies this is inflammation of the airways, not the alveoli — the detail that separates asthma from chronic bronchitis and emphysema."
          },
          {
            "id": "obstructive-100-1",
            "q": "What is emphysema's basic definition, per the page?",
            "a": "Permanent enlargement of the airspaces distal to the terminal bronchioles, with destruction of the alveolar walls.",
            "rationale": "This is the Emphysema & the COPD Umbrella table's definition entry, word for word."
          },
          {
            "id": "obstructive-100-2",
            "q": "COPD is the umbrella term for which two diseases, according to the page?",
            "a": "Chronic bronchitis and emphysema.",
            "rationale": "The page states COPD is the umbrella term for these two conditions together, both of which cause trouble getting air out."
          },
          {
            "id": "obstructive-100-3",
            "q": "What does FEV1 stand for, and what kind of test is it measured with?",
            "a": "Forced expiratory volume in 1 second, measured with pulmonary function tests (PFTs).",
            "rationale": "From the Obstructive Disease Basics section — narrowed airways slow lung emptying, which is what FEV1 on a PFT tracks."
          }
        ],
        "200": [
          {
            "id": "obstructive-200-0",
            "q": "What is the hallmark sign of chronic bronchitis?",
            "a": "A persistent, productive cough (purulent if a respiratory infection is also present).",
            "rationale": "The page notes these patients are more prone to respiratory infections because the retained mucus becomes a breeding ground."
          },
          {
            "id": "obstructive-200-1",
            "q": "What is the single most common trigger for asthma listed on the page?",
            "a": "Exercise/exertion.",
            "rationale": "Listed ahead of secondhand smoke, climate, dust mites, pet dander, and pollen as the most common trigger."
          },
          {
            "id": "obstructive-200-2",
            "q": "Name the two short-acting beta agonists (SABAs) listed on the page.",
            "a": "Albuterol and levalbuterol.",
            "rationale": "These are the rescue drugs described as having an onset within minutes and lasting about 4–6 hours."
          },
          {
            "id": "obstructive-200-3",
            "q": "What class of bronchodilator is ipratropium, and is it a rescue drug or a prophylactic drug?",
            "a": "An anticholinergic — a prophylactic (daily) drug, not a rescue drug.",
            "rationale": "Blocking acetylcholine shifts the airway toward sympathetic tone, causing bronchodilation and less mucus — but it's used on a daily schedule, not for acute attacks."
          }
        ],
        "300": [
          {
            "id": "obstructive-300-0",
            "q": "What causes the airflow obstruction in emphysema if not mucus production — and how does that differ from chronic bronchitis?",
            "a": "Inflammation and loss of elastic recoil, from a protease/antiprotease imbalance that destroys elastin — unlike chronic bronchitis, where obstruction comes from mucus hypersecretion and airway narrowing.",
            "rationale": "The page explicitly contrasts these two mechanisms: emphysema's obstruction is not from mucus, while chronic bronchitis's is."
          },
          {
            "id": "obstructive-300-1",
            "q": "Asthma has an early and a late immune response to a trigger. About how long after the initial reaction can the late response occur?",
            "a": "About 48 hours later.",
            "rationale": "The early response is immediate; a late response can follow roughly 48 hours later as recruited white blood cells trigger a second wave of the same inflammatory process."
          },
          {
            "id": "obstructive-300-2",
            "q": "By what mechanism do xanthine derivatives like theophylline cause bronchodilation?",
            "a": "They inhibit phosphodiesterase, raising cAMP, which relaxes smooth muscle and blocks IgE-mediated release of allergic mediators.",
            "rationale": "This is the page's stated mechanism for theophylline and aminophylline, distinct from the beta-agonist or anticholinergic mechanisms."
          },
          {
            "id": "obstructive-300-3",
            "q": "When a bronchodilator and an inhaled corticosteroid are both being given, which should be administered first, and why?",
            "a": "The bronchodilator first, then the inhaled steroid, for better absorption.",
            "rationale": "The page states this order specifically so the steroid absorbs better once the airway is already open."
          }
        ],
        "400": [
          {
            "id": "obstructive-400-0",
            "q": "Late in the course of chronic bronchitis, untreated disease can progress to pulmonary hypertension. What heart complication can this eventually cause?",
            "a": "Right-sided heart failure, also called cor pulmonale.",
            "rationale": "The page states pulmonary hypertension causes syncope, dyspnea, and fatigue, and eventually leads to cor pulmonale."
          },
          {
            "id": "obstructive-400-1",
            "q": "Long-acting beta agonists (LABAs) historically carried a black-box warning tied to a safety concern. What was the concern, and in which patient population was it more pronounced?",
            "a": "Increased asthma-related deaths, more pronounced in Black and African American patients.",
            "rationale": "The page notes the warning was later removed after further study, but the historical link and disproportionate impact are both stated."
          },
          {
            "id": "obstructive-400-2",
            "q": "If a patient taking theophylline quits smoking, what needs to happen to their dose and monitoring, and why?",
            "a": "The dose may need to be decreased and levels monitored more closely, because smoking decreases theophylline absorption — removing that effect raises drug levels.",
            "rationale": "The page draws this direct connection between the smoking interaction and the need for closer serum level monitoring."
          },
          {
            "id": "obstructive-400-3",
            "q": "How does the timing of use differ between a leukotriene receptor antagonist and a mast cell stabilizer, per the page?",
            "a": "A leukotriene receptor antagonist is for chronic prophylaxis, with improvement seen in about a week; a mast cell stabilizer (cromolyn) is taken 15–20 minutes before a known trigger.",
            "rationale": "Both are anti-inflammatory, non-rescue drugs, but the page describes very different use patterns — ongoing daily control versus situational pre-exposure dosing."
          }
        ],
        "500": [
          {
            "id": "obstructive-500-0",
            "q": "A patient having an asthma attack develops a silent chest, and an ABG/VBG shows CO2 greater than 70. What is this condition called, and what IV medication is often required?",
            "a": "Status asthmaticus — often requires IV epinephrine.",
            "rationale": "The page's danger callout describes this exact presentation (silent chest, CO2 > 70) as a life-threatening emergency."
          },
          {
            "id": "obstructive-500-1",
            "q": "On the sample asthma action plan diagram, what should a patient do when their peak flow drops into the zone described as under 60% of their personal best?",
            "a": "Start a corticosteroid and call the doctor (the orange zone).",
            "rationale": "The action plan ties peak flow percentage to a response: green/best (continue regular treatment), yellow/under 80% (double a medication dose), orange/under 60% (start corticosteroid and call the doctor), red/under 40% (call the doctor or 911)."
          },
          {
            "id": "obstructive-500-2",
            "q": "Omalizumab binds to what substance to reduce airway hyperresponsiveness, and what is the major risk to monitor for, especially with the first doses?",
            "a": "It binds IgE, limiting the release of allergic mediators; the major risk is anaphylaxis/hypersensitivity reactions.",
            "rationale": "The page's danger callout specifically flags close monitoring for hypersensitivity reactions with omalizumab's first doses."
          },
          {
            "id": "obstructive-500-3",
            "q": "Roflumilast works best for which specific condition, and what type of drug is it?",
            "a": "Chronic bronchitis with a history of frequent exacerbations; it's a selective PDE4 inhibitor.",
            "rationale": "The page states roflumilast prevents COPD exacerbations (not acute treatment), is not a bronchodilator, and works best specifically for chronic bronchitis patients with frequent exacerbations."
          }
        ]
      }
    },
    {
      "id": "pneumonia",
      "name": "Pneumonia",
      "source": "week2-pneumonia.html",
      "clues": {
        "100": [
          {
            "id": "pneumonia-100-0",
            "q": "What is pneumonia, in terms of where in the respiratory tract it occurs?",
            "a": "An infection in the lower respiratory tract.",
            "rationale": "It develops once a pathogen gets past the upper airway's defenses — cilia, mucus, and the cough reflex — and sets up below them."
          },
          {
            "id": "pneumonia-100-1",
            "q": "What does CAP stand for?",
            "a": "Community-acquired pneumonia.",
            "rationale": "CAP develops outside the hospital; it's one of the most common reasons for hospitalization and is generally easier to treat than HAP."
          },
          {
            "id": "pneumonia-100-2",
            "q": "What is the gold-standard diagnostic test for pneumonia?",
            "a": "Sputum culture and sensitivity.",
            "rationale": "It identifies the specific pathogen causing the infection and which antibiotics will work against it."
          },
          {
            "id": "pneumonia-100-3",
            "q": "Which population is Pneumocystis pneumonia (PCP) most commonly associated with?",
            "a": "Patients with HIV.",
            "rationale": "PCP is a yeast-like fungus associated with immunosuppression, and it's most common in patients with HIV."
          }
        ],
        "200": [
          {
            "id": "pneumonia-200-0",
            "q": "What does VAP stand for, and what larger category is it a subtype of?",
            "a": "Ventilator-associated pneumonia — a subtype of HAP (hospital-acquired pneumonia).",
            "rationale": "VAP occurs in intubated patients and is described as more virulent, more contagious, and more deadly than HAP overall."
          },
          {
            "id": "pneumonia-200-1",
            "q": "What organism is the most common cause of bacterial community-acquired pneumonia?",
            "a": "Streptococcus pneumoniae.",
            "rationale": "It's referred to as \"pneumococcal pneumonia,\" and its sputum is often brown or rusty-tinged."
          },
          {
            "id": "pneumonia-200-2",
            "q": "What organism causes \"walking pneumonia\"?",
            "a": "Mycoplasma pneumoniae.",
            "rationale": "It causes a mild illness with a persistent cough, headache, and earache, and has properties of both bacteria and viruses."
          },
          {
            "id": "pneumonia-200-3",
            "q": "What are the two vaccines listed for preventing pneumococcal pneumonia, and who are they generally given to?",
            "a": "PCV13 and PPSV23; generally given to elderly and immunocompromised patients.",
            "rationale": "PCV13 protects against 13 strains of pneumococcal pneumonia, and PPSV23 covers an additional 23 types."
          }
        ],
        "300": [
          {
            "id": "pneumonia-300-0",
            "q": "How does the typical cough differ between bacterial and viral pneumonia?",
            "a": "Bacterial cough is typically productive and purulent (sputum may be green, rusty-colored, or \"currant jelly\"); viral cough is typically non-productive and scant.",
            "rationale": "These are the two cough patterns contrasted directly on the page."
          },
          {
            "id": "pneumonia-300-1",
            "q": "Why is smoking listed as a risk factor for pneumonia?",
            "a": "Because it impairs ciliary clearance.",
            "rationale": "The page notes this is a risk factor for every respiratory condition, not just pneumonia."
          },
          {
            "id": "pneumonia-300-2",
            "q": "Why does a viral respiratory infection like influenza raise a patient's risk of developing a second illness?",
            "a": "Because viruses impair the lungs' immune defenses, raising the risk of a secondary bacterial pneumonia.",
            "rationale": "This is stated directly in the Viral Pneumonia section."
          },
          {
            "id": "pneumonia-300-3",
            "q": "In the pathophysiology of pneumonia, why does gas exchange become impaired?",
            "a": "Mucus accumulates between the alveoli and pulmonary capillaries, so the alveoli can't open and close properly.",
            "rationale": "This is the step in the page's pathophysiology sequence that directly precedes impaired gas exchange."
          }
        ],
        "400": [
          {
            "id": "pneumonia-400-0",
            "q": "What is the key difference between respiratory distress and respiratory failure?",
            "a": "Distress means the patient is still maintaining oxygenation but only with an increased work of breathing; failure means they can no longer compensate for inadequate oxygenation and are heading toward respiratory arrest.",
            "rationale": "From the page's danger callout distinguishing the two states."
          },
          {
            "id": "pneumonia-400-1",
            "q": "Which organism is the most common gram-positive cause of hospital-acquired pneumonia, and how does it usually reach the lungs?",
            "a": "Staphylococcus aureus (often as MRSA), usually entering via the bloodstream/IV route.",
            "rationale": "Listed in the Bacterial & Aspiration Pneumonia table as gram-positive and often presenting as MRSA."
          },
          {
            "id": "pneumonia-400-2",
            "q": "Why might a PPI help prevent severe aspiration pneumonia?",
            "a": "It lowers gastric acidity, and the severity of aspiration pneumonia's inflammatory reaction depends on the pH of the aspirate — more acidic content causes a worse response.",
            "rationale": "This connects the page's two related bullets under Aspiration Pneumonia: pH determines severity, and a PPI lowers gastric acidity."
          },
          {
            "id": "pneumonia-400-3",
            "q": "Why can aspiration pneumonia be easy to miss clinically?",
            "a": "Because aspiration can be silent — a cough isn't required.",
            "rationale": "The page notes high-risk patients need careful feeding observation and may need a dysphagia evaluation because of this."
          }
        ],
        "500": [
          {
            "id": "pneumonia-500-0",
            "q": "A confirmed case of Legionella pneumonia requires what specific action, and why?",
            "a": "Reporting it to the health department, so the water source can be identified, cleaned, or fixed.",
            "rationale": "Legionella pneumonia is a reportable disease, and the page notes these patients also tend to get sicker than with other types of pneumonia."
          },
          {
            "id": "pneumonia-500-1",
            "q": "Over an area of lung consolidation, what physical exam findings would you expect, compared to a normal lung?",
            "a": "Dullness to percussion (normally resonant), inspiratory crackles, increased tactile fremitus, and egophony.",
            "rationale": "Listed under Physical Assessment in the Diagnosis section as the findings expected over a consolidated area."
          },
          {
            "id": "pneumonia-500-2",
            "q": "A patient is a nursing home resident on chronic dialysis and develops pneumonia without ever being hospitalized. How is this classified, and how does that classification relate to CAP?",
            "a": "HCAP (healthcare-associated pneumonia) — it's technically grouped with CAP, even though it occurs in patients with frequent healthcare contact rather than a true hospital-acquired infection.",
            "rationale": "The HCAP row specifically names nursing home residents, chronic hospitalizations, and dialysis or chemo patients as this category, while noting it's grouped with CAP."
          },
          {
            "id": "pneumonia-500-3",
            "q": "How do gram-negative organisms like Pseudomonas, Acinetobacter, and Klebsiella pneumoniae compare to other bacterial causes of pneumonia, and what are they often linked to?",
            "a": "They tend to cause more severe illness and are harder to treat, and are often linked to central-line infections or IV drug use.",
            "rationale": "The Gram-Negative Organisms row also associates these organisms with hospital-acquired pneumonia."
          }
        ]
      }
    },
    {
      "id": "tuberculosis",
      "name": "Tuberculosis (TB)",
      "source": "week2-tuberculosis.html",
      "clues": {
        "100": [
          {
            "id": "tuberculosis-100-0",
            "q": "What bacterium is the most common cause of tuberculosis?",
            "a": "Mycobacterium tuberculosis.",
            "rationale": "The page names M. tuberculosis as the most common cause of TB, distinguishing it from M. leprae, which causes leprosy instead."
          },
          {
            "id": "tuberculosis-100-1",
            "q": "How does TB typically spread from one person to another?",
            "a": "Airborne droplets expelled by a cough or sneeze and inhaled by a new host.",
            "rationale": "The page states TB is spread human-to-human (by far the most common route) via airborne droplets from coughing or sneezing."
          },
          {
            "id": "tuberculosis-100-2",
            "q": "What is a granuloma, as described for TB infection?",
            "a": "A walled-off area of macrophages and lymphocytes with a hard outer casing and a cheese-like (caseous) center of broken-down tissue.",
            "rationale": "The page defines granulomas this way and notes they are sometimes called tubercles."
          },
          {
            "id": "tuberculosis-100-3",
            "q": "Does a person with latent TB have any clinical signs or symptoms?",
            "a": "No.",
            "rationale": "In latent TB, the page states the bacteria survive but stay walled off inside granulomas, dormant, with no clinical signs or symptoms, and can remain latent for life."
          }
        ],
        "200": [
          {
            "id": "tuberculosis-200-0",
            "q": "What type of organism is M. tuberculosis (shape and oxygen requirement), and why does this make the lungs its typical first target?",
            "a": "An aerobic, rod-shaped bacillus — it needs a lot of oxygen to grow and proliferate, which the lungs provide.",
            "rationale": "The page states this is why TB typically affects the lungs first, though it can also grow in bone or brain."
          },
          {
            "id": "tuberculosis-200-1",
            "q": "Of the early TB symptoms listed (fatigue, weight loss, low-grade fever, night sweats), which one is described as more specific to TB rather than just nonspecific?",
            "a": "Night sweats.",
            "rationale": "The page separates 'early, nonspecific symptoms' (fatigue, weight loss, lethargy, anorexia, low-grade fever, productive cough) from night sweats, which it labels 'more TB-specific.'"
          },
          {
            "id": "tuberculosis-200-2",
            "q": "Which TB screening test is used for high-risk populations, such as a nurse working in a high-risk area?",
            "a": "The interferon-gamma release assay (a blood draw).",
            "rationale": "The page states the IGRA is a blood draw used for high-risk populations, while the TB skin test is used for non-high-risk, general-population screening."
          },
          {
            "id": "tuberculosis-200-3",
            "q": "Which first-line TB drug is described as the first drug ever available to treat tuberculosis, and what drug class is it?",
            "a": "Streptomycin, an aminoglycoside.",
            "rationale": "The page states streptomycin was the first drug ever available for TB and identifies it as an aminoglycoside."
          }
        ],
        "300": [
          {
            "id": "tuberculosis-300-0",
            "q": "Why does TB's growth rate make the disease harder to treat?",
            "a": "TB bacteria are very slow-growing, and most drugs work by targeting actively proliferating organisms.",
            "rationale": "The page directly links the very slow growth rate to treatment difficulty for exactly this reason."
          },
          {
            "id": "tuberculosis-300-1",
            "q": "What has to happen to the immune system for latent TB to become active TB?",
            "a": "The immune system can no longer contain the bacteria, and it reactivates.",
            "rationale": "The page states active TB develops when the immune system can no longer contain the bacteria, listing HIV/immunocompromise, immunosuppressive medications, poor nutritional status, and renal failure as reactivation triggers."
          },
          {
            "id": "tuberculosis-300-2",
            "q": "A patient screens positive on a TB skin test. What is the next diagnostic step, and what is it looking for?",
            "a": "A chest X-ray, looking for granulomas.",
            "rationale": "The page states the chest X-ray is the next step after a positive screening test, since a positive screen alone doesn't confirm active TB."
          },
          {
            "id": "tuberculosis-300-3",
            "q": "How do isoniazid and ethambutol differ in what they disrupt in the mycobacteria?",
            "a": "Isoniazid disrupts mycobacterial cell wall synthesis; ethambutol suppresses RNA synthesis, which in turn suppresses protein synthesis.",
            "rationale": "These are the two mechanisms of action the page gives for isoniazid and ethambutol respectively."
          }
        ],
        "400": [
          {
            "id": "tuberculosis-400-0",
            "q": "What is often given alongside isoniazid, and what side effect is it meant to help prevent?",
            "a": "Pyridoxine (vitamin B6), to help prevent peripheral neuropathy.",
            "rationale": "The page states INH is often paired with pyridoxine (vitamin B6) to help prevent the peripheral neuropathy that is one of isoniazid's side effects."
          },
          {
            "id": "tuberculosis-400-1",
            "q": "Name three types of medications whose effects are decreased by rifampin because of its drug-interaction profile.",
            "a": "Any three of: beta blockers, benzodiazepines, cyclosporine, anticoagulants, oral diabetes medications, phenytoin, theophylline.",
            "rationale": "The page describes rifampin as a strong CYP inducer with major drug interactions that decrease the effects of all of these, meaning patients on them may need higher doses while taking rifampin."
          },
          {
            "id": "tuberculosis-400-2",
            "q": "What eye-related side effect is specific to ethambutol, and what age group is ethambutol contraindicated in?",
            "a": "Retrobulbar neuritis (inflammation of the optic nerve at the back of the eye); contraindicated under age 13.",
            "rationale": "The page lists retrobulbar neuritis as ethambutol's notable side effect, warns to watch for visual changes, and states ethambutol is contraindicated under age 13."
          },
          {
            "id": "tuberculosis-400-3",
            "q": "Why is pyrazinamide contraindicated in a patient with acute gout?",
            "a": "Because pyrazinamide can cause hyperuricemia (elevated uric acid), the same substance that causes gout.",
            "rationale": "The page lists hyperuricemia as a pyrazinamide effect and states it is contraindicated in severe hepatic disease or acute gout."
          }
        ],
        "500": [
          {
            "id": "tuberculosis-500-0",
            "q": "While drug-susceptibility testing results are pending for a new TB diagnosis, how many first-line drugs is a patient typically started on, and what is the minimum number of drugs they're kept on at a time whenever possible?",
            "a": "A broad four-drug first-line regimen to start, then narrowed down; kept on at least two drugs at a time whenever possible.",
            "rationale": "The page states this exact approach while susceptibility testing guides therapy: start broad on four first-line drugs, narrow down, and keep at least two drugs going at once."
          },
          {
            "id": "tuberculosis-500-1",
            "q": "A patient taking isoniazid is also prescribed phenytoin for a seizure disorder. What interaction should be watched for?",
            "a": "Isoniazid increases phenytoin's effects, so caution is needed when combining them.",
            "rationale": "The page specifically warns to use caution with phenytoin since INH increases phenytoin's effects."
          },
          {
            "id": "tuberculosis-500-2",
            "q": "In the U.S., which two immigrant population groups does the page identify as particularly high-risk for MDR-TB, and why?",
            "a": "Asian and Hispanic immigrant populations, often having contracted resistant strains in countries with less consistent access to medications.",
            "rationale": "The page states this directly in the Drug-Resistant TB section on MDR-TB risk groups."
          },
          {
            "id": "tuberculosis-500-3",
            "q": "A patient receiving streptomycin for TB is also taking an anticoagulant. What increased risk should be monitored, and how is streptomycin normally administered?",
            "a": "Increased bleeding risk; streptomycin is given as a daily intramuscular (IM) injection.",
            "rationale": "The page states streptomycin is given as a daily IM injection and to use caution combining it with anticoagulants since it can increase bleeding risk, on top of its own blood dyscrasia side effect."
          }
        ]
      }
    },
    {
      "id": "anemia",
      "name": "Anemia",
      "source": "week2-anemia.html",
      "clues": {
        "100": [
          {
            "id": "anemia-100-0",
            "q": "What is anemia, according to its most basic definition?",
            "a": "A lack of red blood cells — either a reduced total number of RBCs, or a decrease in the quality/quantity of hemoglobin.",
            "rationale": "Anemia's causes fall into a few buckets — impaired RBC production, blood loss, RBC destruction, or a combination — but all of them ultimately reduce oxygen-carrying capacity."
          },
          {
            "id": "anemia-100-1",
            "q": "What is the most common anemia in the United States?",
            "a": "Iron deficiency anemia.",
            "rationale": "The page notes iron deficiency anemia is the most common anemia in the US, with the highest risk in toddlers, adolescent girls, and women of childbearing age."
          },
          {
            "id": "anemia-100-2",
            "q": "Which lab value is the better indicator of anemia: hemoglobin or hematocrit?",
            "a": "Hemoglobin.",
            "rationale": "Hematocrit is much more affected by a patient's fluid volume status, while hemoglobin is not."
          },
          {
            "id": "anemia-100-3",
            "q": "In the 'bus' analogy for oxygen delivery, what does iron represent?",
            "a": "What the hemoglobin 'seats' are made of.",
            "rationale": "The red blood cell is the bus, hemoglobin are the seats, iron is what the seats are made of, and oxygen is the passengers — no iron means no seats, so oxygen can't ride along."
          }
        ],
        "200": [
          {
            "id": "anemia-200-0",
            "q": "What cell size/color classification describes iron deficiency anemia?",
            "a": "Microcytic, hypochromic.",
            "rationale": "Small (micro), pale (hypo) cells with reduced hemoglobin — without iron, hemoglobin can't be made correctly."
          },
          {
            "id": "anemia-200-1",
            "q": "What cell size classification describes a B12 or folate deficiency anemia?",
            "a": "Macrocytic (megaloblastic).",
            "rationale": "Large, abnormally shaped cells with normal hemoglobin color — without B12 or folate, RBC DNA synthesis is impaired, producing larger, immature cells."
          },
          {
            "id": "anemia-200-2",
            "q": "Name the three specific physical findings that point to iron deficiency anemia beyond the usual anemia symptoms.",
            "a": "Glossitis (smooth, sore tongue), koilonychia (spoon nails), and pica (craving non-food items).",
            "rationale": "These are listed as the specific findings of iron deficiency, distinct from the general anemia symptoms shared by other types."
          },
          {
            "id": "anemia-200-3",
            "q": "What three blood cell lines are lost in the pancytopenia caused by aplastic anemia?",
            "a": "RBCs (erythrocytes), WBCs (leukocytes), and platelets.",
            "rationale": "Aplastic anemia is a primary bone marrow failure — the page notes the 'a-' prefix means 'all' — so all three cell lines drop together."
          }
        ],
        "300": [
          {
            "id": "anemia-300-0",
            "q": "What is the most common underlying cause of B12 deficiency anemia, and what does it destroy?",
            "a": "Atrophic gastritis (often autoimmune), which destroys the stomach's parietal cells and stops production of intrinsic factor.",
            "rationale": "Intrinsic factor is required to absorb B12; this cause is also called pernicious anemia."
          },
          {
            "id": "anemia-300-1",
            "q": "Why can folate deficiency develop without the malabsorption problem that causes most B12 deficiency?",
            "a": "Folate doesn't require intrinsic factor to be absorbed, so folate deficiency is usually a problem of decreased intake rather than impaired absorption.",
            "rationale": "This is the opposite of B12, where loss of intrinsic factor (from atrophic gastritis) is the most common cause."
          },
          {
            "id": "anemia-300-2",
            "q": "Why does chronic kidney disease cause anemia?",
            "a": "Failing kidneys can't release enough erythropoietin, so the bone marrow isn't signaled to make enough RBCs.",
            "rationale": "The kidneys normally produce erythropoietin to signal RBC production; this anemia worsens as kidney function worsens."
          },
          {
            "id": "anemia-300-3",
            "q": "Why does pallor occur in anemia?",
            "a": "The body redistributes blood away from the skin toward organs that need it more, such as the kidneys, lungs, gut, brain, and heart.",
            "rationale": "This is given as the mechanism behind pallor in the page's 'Why These Symptoms Happen' section."
          }
        ],
        "400": [
          {
            "id": "anemia-400-0",
            "q": "What is the danger of giving folic acid to a patient whose B12 deficiency hasn't been identified?",
            "a": "Folic acid can correct the anemia caused by the B12 deficiency without fixing the underlying B12 problem, masking it while neurologic damage keeps progressing.",
            "rationale": "The page specifically warns to confirm a patient's B12 status is adequate whenever folic acid is given."
          },
          {
            "id": "anemia-400-1",
            "q": "What symptom category differentiates B12 deficiency from iron or folate deficiency?",
            "a": "Neurologic manifestations — neuropathy and ataxia.",
            "rationale": "These occur on top of the usual anemia symptoms and are called out as the key differentiator pointing specifically to B12."
          },
          {
            "id": "anemia-400-2",
            "q": "Why must a test dose be given, with epinephrine available, before the first dose of IV iron dextran?",
            "a": "The dextran component carries a risk of fatal anaphylactic reaction.",
            "rationale": "This is a callout-level danger specific to iron dextran, distinct from oral ferrous sulfate."
          },
          {
            "id": "anemia-400-3",
            "q": "Why can two patients with the exact same resulting hemoglobin level have very different symptom severity?",
            "a": "Severity depends on how fast the blood was lost, not just the resulting hemoglobin level — a fast loss gives the body no time to compensate, while a slow loss can stay largely unnoticed.",
            "rationale": "The page compares losing 2 liters instantly in trauma to a slow GI bleed reaching the same hemoglobin level over months."
          }
        ],
        "500": [
          {
            "id": "anemia-500-0",
            "q": "What is the black-box warning for erythropoiesis-stimulating agents like epoetin alfa, and what does overcorrection risk?",
            "a": "Never give an ESA if hemoglobin is greater than 10 g/dL — overcorrection risks stroke, heart attack, increased cancer progression, and a polycythemic, hypercoagulable state.",
            "rationale": "This callout-level warning is distinct from the therapeutic goal of about 11 g/dL used to guide ongoing ESA dosing once started safely."
          },
          {
            "id": "anemia-500-1",
            "q": "What genetic mechanism causes thalassemia to produce microcytic, hypochromic RBCs — the same appearance as iron deficiency anemia?",
            "a": "Patients lack the proteins that build hemoglobin, from a missing alpha or beta globin — not a lack of iron.",
            "rationale": "Thalassemia and iron deficiency anemia share the same cell morphology but arise from different underlying problems: missing globin protein versus missing iron itself."
          },
          {
            "id": "anemia-500-2",
            "q": "What two conditions must both be adequate for epoetin alfa to successfully raise a patient's hemoglobin?",
            "a": "Adequate iron levels and working bone marrow.",
            "rationale": "The page states an ESA can't fix an iron deficiency or a bone marrow problem on its own — it only stimulates existing marrow to produce more RBCs."
          },
          {
            "id": "anemia-500-3",
            "q": "What combination of findings suggests a sickle cell crisis, and what kinds of triggers bring one on?",
            "a": "Swelling of the hands and feet plus fever; triggers include anything that raises oxygen demand or lowers oxygen, such as dehydration, stress, high altitude, fever, and extreme temperatures.",
            "rationale": "These findings and triggers are specific to sickle cell disease, distinguishing an active crisis from the disease's baseline anemia symptoms."
          }
        ]
      }
    },
    {
      "id": "polycythemia",
      "name": "Polycythemia",
      "source": "week2-polycythemia.html",
      "clues": {
        "100": [
          {
            "id": "polycythemia-100-0",
            "q": "Based on its root word, what does the term \"polycythemia\" actually mean?",
            "a": "Having too many red blood cells.",
            "rationale": "\"Poly-\" means many, so polycythemia literally means having too many red blood cells."
          },
          {
            "id": "polycythemia-100-1",
            "q": "What are the two big buckets polycythemia is divided into?",
            "a": "Relative polycythemia and absolute polycythemia.",
            "rationale": "Relative polycythemia is a false elevation, while absolute polycythemia is a true increase and splits further into primary and secondary."
          },
          {
            "id": "polycythemia-100-2",
            "q": "What causes relative polycythemia?",
            "a": "Hemoconcentration from a low plasma volume, usually severe dehydration.",
            "rationale": "Plasma volume drops, so red blood cells look falsely elevated on a percentage basis — there isn't actually an excess of red blood cells."
          },
          {
            "id": "polycythemia-100-3",
            "q": "What is polycythemia vera, in terms of how it's classified?",
            "a": "Primary (absolute) polycythemia.",
            "rationale": "Polycythemia vera is described as a true bone marrow stem cell disorder causing overproduction of red blood cells."
          }
        ],
        "200": [
          {
            "id": "polycythemia-200-0",
            "q": "What is the most common cause of the chronic hypoxia that leads to absolute polycythemia?",
            "a": "COPD (chronic bronchitis or emphysema).",
            "rationale": "Chronic hypoxia is listed as a risk factor for absolute polycythemia, and COPD is named as its most common source."
          },
          {
            "id": "polycythemia-200-1",
            "q": "Besides red blood cells, what other blood cell types does polycythemia vera typically overproduce?",
            "a": "White blood cells and platelets.",
            "rationale": "Polycythemia vera affects the bone marrow broadly, so a single mutated stem cell often overproduces everything except lymphocytes."
          },
          {
            "id": "polycythemia-200-2",
            "q": "What population is described as being at highest epidemiological risk for polycythemia vera?",
            "a": "Adults over 60, and men (about twice as often as women).",
            "rationale": "Polycythemia vera typically occurs in people over 60 and is about twice as common in men."
          },
          {
            "id": "polycythemia-200-3",
            "q": "What classic skin/complexion finding is associated with polycythemia vera?",
            "a": "A ruddy (plethoric) color.",
            "rationale": "This is listed among the manifestations of polycythemia vera, alongside headache, fatigue, weight loss, and dyspnea."
          }
        ],
        "300": [
          {
            "id": "polycythemia-300-0",
            "q": "What is the step-by-step mechanism behind secondary polycythemia?",
            "a": "The body senses hypoxia, the kidneys secrete erythropoietin, and the bone marrow responds by making more red blood cells.",
            "rationale": "This is the compensatory pathway described for secondary polycythemia — the marrow is trying to carry more oxygen in response to chronic tissue hypoxia."
          },
          {
            "id": "polycythemia-300-1",
            "q": "What is the fundamental difference between secondary polycythemia and polycythemia vera (primary polycythemia)?",
            "a": "Secondary polycythemia is a compensatory response to chronic hypoxia, not a bone marrow disorder itself, while polycythemia vera is a true bone marrow stem cell disorder.",
            "rationale": "The page explicitly defines secondary polycythemia as adaptive and \"not a bone marrow disorder itself,\" in contrast to polycythemia vera's marrow-based cause."
          },
          {
            "id": "polycythemia-300-2",
            "q": "Why can polycythemia and severe dehydration produce the exact same hematocrit reading, and why does that matter clinically?",
            "a": "One comes from a true excess of red blood cells and the other from a falsely low plasma volume — they must be told apart because the same reading has two very different causes.",
            "rationale": "The hematocrit comparison shows polycythemia and dehydration can both produce identical readings (e.g., 70%), which is exactly why relative and true/absolute polycythemia need to be distinguished."
          },
          {
            "id": "polycythemia-300-3",
            "q": "What is aquagenic pruritus, and what specifically makes it worse in polycythemia vera?",
            "a": "Intense, painful itching that is especially worse with heat or water — patients are particularly bothered by warm water.",
            "rationale": "Aquagenic pruritus is listed as one of the manifestations of polycythemia vera, distinct from its more general symptoms like headache or fatigue."
          }
        ],
        "400": [
          {
            "id": "polycythemia-400-0",
            "q": "According to the erythropoietin feedback loop, what happens to EPO secretion and red blood cell production once oxygen delivery is corrected in secondary polycythemia?",
            "a": "Both decrease — the kidney's oxygen sensor dials erythropoietin back down as red cell mass rises, slowing red blood cell production.",
            "rationale": "The page states the same feedback loop runs in reverse once oxygen delivery is corrected: increased red cell mass leads to decreased erythropoietin release, which slows erythrocyte production."
          },
          {
            "id": "polycythemia-400-1",
            "q": "What condition can chronic mountain sickness progress from, according to the risk factors for absolute polycythemia?",
            "a": "Living at high altitude.",
            "rationale": "High altitude living is listed as a risk factor for absolute polycythemia that \"can progress to chronic mountain sickness.\""
          },
          {
            "id": "polycythemia-400-2",
            "q": "The page compares decreased blood flow in polycythemia to \"trying to push too much water through a straw.\" What complications does this raise the risk of?",
            "a": "DVT (deep vein thrombosis), angina, cerebral insufficiency, and TIAs (transient ischemic attacks).",
            "rationale": "Excess red blood cells collide and clump, slowing flow, which the page ties directly to these four complications under \"Decreased Blood Flow.\""
          },
          {
            "id": "polycythemia-400-3",
            "q": "What occupational and environmental groups are specifically named as being at risk for absolute polycythemia through long-term carbon monoxide exposure?",
            "a": "Tunnel workers, coal miners, other underground workers, garage attendants, and people in heavily polluted urban areas.",
            "rationale": "These groups are listed under long-term carbon monoxide exposure as a risk factor for absolute polycythemia."
          }
        ],
        "500": [
          {
            "id": "polycythemia-500-0",
            "q": "What is described as the single biggest concern with any absolute polycythemia, whether primary or secondary, and what is the mechanism behind it?",
            "a": "Stroke and heart attack from clotting — excess red blood cells collide and clump in the vessels, blocking blood flow to the brain and heart.",
            "rationale": "This is called out directly as the danger callout for absolute polycythemia, applying equally to primary and secondary forms."
          },
          {
            "id": "polycythemia-500-1",
            "q": "How can a medication used to treat anemia end up causing a polycythemic state?",
            "a": "Erythropoiesis-stimulating agents (like epoetin alfa) can cause an iatrogenic polycythemic state if hemoglobin is overcorrected.",
            "rationale": "The page notes this as a cross-reference, flagging that overcorrecting hemoglobin with an ESA can drive red blood cell production into a true polycythemic state."
          },
          {
            "id": "polycythemia-500-2",
            "q": "Why can COPD or restrictive lung disease trigger secondary polycythemia even though the patient may already have an adequate number of red blood cells?",
            "a": "Because these conditions cause poor gas exchange — the existing red blood cells can't pick up enough oxygen, so the kidneys still sense hypoxia and drive erythropoietin release.",
            "rationale": "The page specifically notes COPD and restrictive lung disease cause \"poor gas exchange despite adequate red blood cells\" as the most common causes of secondary polycythemia."
          },
          {
            "id": "polycythemia-500-3",
            "q": "Increased blood viscosity and volume in polycythemia commonly cause hypertension, headache, and inability to concentrate. What less common finding can also occur from this same mechanism?",
            "a": "Cyanosis of the lips, nails, and mucous membranes.",
            "rationale": "The page lists cyanosis under \"Increased Blood Viscosity & Volume\" but specifically notes it occurs less often than the other findings in that category."
          }
        ]
      }
    }
  ]
};
