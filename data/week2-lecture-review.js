// Week 2 Lecture Review - NCLEX NGN Format Questions
// Based on voice-over materials for respiratory infections

window.EXAM_DATA = {
  title: "Week 2 Lecture Review",
  description: "Questions from the pre-lecture voice-over materials covering URIs, pneumonia, anemia, and obstructive airway disorders.",
  questions: [
    {
      id: 1,
      stem: "A 4-year-old with a history of asthma presents to the ED with inspiratory stridor, drooling, difficulty swallowing, and low-grade fever. The child is sitting upright and appears anxious. The parents report the child was fine this morning but became rapidly worse over the past hour. Which diagnosis should the nurse immediately prepare for, and what is the most concerning potential complication?",
      options: [
        "Acute bronchitis; risk for secondary bacterial pneumonia",
        "Epiglottitis; risk for airway obstruction from swelling",
        "Croup (laryngotracheobronchitis); risk for bronchospasm",
        "Pharyngitis; risk for peritonsillar abscess formation" }
      ],
      answer: 1,
      rationale: "The combination of inspiratory stridor, drooling, difficulty swallowing, rapid onset, and upright positioning is classic for epiglottitis—a medical emergency. The swollen epiglottis can completely obstruct the airway without warning. Croup produces a barking cough (not present here) and is generally less acutely life-threatening. Acute bronchitis and pharyngitis lack the stridor and drooling pattern that signals upper airway compromise.",
      topic: "Upper Respiratory Infections - Epiglottitis",
      source: "Week 2 URI VO"
    },
    {
      id: 2,
      stem: "A 22-year-old otherwise healthy patient presents with a sudden onset of fever, body aches, chills, and malaise for the past 8 hours. The patient reports feeling completely fine yesterday morning. Which statement best describes why this presentation is clinically significant and what preventive measure is most important to recommend now?",
      options: [
        "These symptoms indicate probable influenza; the patient should begin oseltamivir within 24 hours for optimal effectiveness",
        "This is likely a viral URI that will resolve in 3 days; supportive care with fluids and rest is sufficient treatment",
        "These symptoms could indicate early sepsis; blood cultures and antibiotics must be started immediately",
        "This is probable influenza with rapid onset; the flu vaccine will provide immediate protection against this strain" }
      ],
      answer: 0,
      rationale: "The abrupt onset with fever, myalgia, and malaise is classic influenza presentation. Oseltamivir is most effective when started within 48 hours of symptom onset and works by inhibiting neuraminidase enzyme release. While supportive care is important, antivirals reduce severity in high-risk patients. Antibiotics are not indicated for uncomplicated flu. The vaccine does not provide immediate protection during active infection but reduces risk of severe outcomes by ~36% in future exposures.",
      topic: "Influenza & Antiviral Therapy",
      source: "Week 2 URI VO"
    },
    {
      id: 3,
      stem: "A patient with a history of allergic rhinitis and chronic sinusitis is asking the nurse why their sinus infections keep returning despite finishing antibiotic courses. The patient reports symptoms lasting 3+ weeks each time. Which explanation best addresses the underlying pathophysiology and most appropriate management strategy?",
      options: [
        "Bacterial superinfection from antibiotics; switch to only supportive care and antihistamines",
        "Viral sinusitis that resolves in 5-7 days; the patient's 3-week duration indicates bacterial infection requiring longer antibiotics",
        "Underlying allergic inflammation creating obstruction and fluid accumulation that promotes recurrent bacterial infection; treat allergies with antihistamines and consider allergy/ENT evaluation",
        "Antibiotic resistance; prescribe broader-spectrum antibiotics to cover more organisms" }
      ],
      answer: 2,
      rationale: "Sinusitis pathophysiology involves obstruction by fluid and edema that traps bacteria (the '2-edged sword' mentioned in the VO). Viral sinusitis resolves in 5-7 days; lasting 3+ weeks suggests bacterial involvement BUT requires 7+ days of antibiotics plus treatment of underlying allergic inflammation driving the recurrent obstruction. Addressing the allergy component and ENT referral for structural issues (like polyps or deviated septum) break the recurrence cycle. Broader antibiotics alone don't address the obstruction problem.",
      topic: "Sinusitis & Allergic Rhinitis",
      source: "Week 2 URI VO",
      type: "sata"
    },
    {
      id: 4,
      stem: "A 68-year-old patient hospitalized for pneumonia treatment has been in the ICU for 5 days on a mechanical ventilator due to respiratory failure. The nursing student asks why this patient is at such high risk for developing a different type of pneumonia than the one they were initially admitted with. Which explanation accurately reflects the pathophysiology and clinical significance?",
      options: [
        "Ventilator-associated pneumonia (VAP) occurs because the endotracheal tube bypasses normal upper airway defenses, and bacterial biofilms on the tube can aspirate into lower airways",
        "The mechanical ventilator aerosolizes bacteria in the ICU environment, increasing exposure to resistant organisms",
        "Sedation and paralysis medications used with mechanical ventilation suppress the immune system, allowing opportunistic infections",
        "Prolonged hospitalization increases risk of C. difficile superinfection that migrates to the lungs" }
      ],
      answer: 0,
      rationale: "VAP develops because the endotracheal tube bypasses normal upper airway defenses (cilia, mucus clearance, coughing), and bacterial biofilms colonizing the tube can be aspirated into the lower respiratory tract. The tube also impairs the gag reflex completely. While biofilm on ventilator circuitry is a known mechanism, immune suppression and C. difficile are not the primary VAP mechanisms. Nursing preventions include head-of-bed elevation, oral care, and early mobility—all aimed at reducing aspiration risk.",
      topic: "Hospital-Acquired Pneumonia",
      source: "Week 2 Pneumonia VO"
    },
    {
      id: 5,
      stem: "A 72-year-old community-dwelling patient develops fever, productive cough with rusty-colored sputum, chills, and pleuritic chest pain after 3 days of upper respiratory symptoms. A chest X-ray shows left lower lobe consolidation. Select all the correct statements about this patient's clinical presentation.",
      options: [
        "The rusty-colored sputum is classic for Streptococcus pneumoniae bacterial pneumonia",
        "This is community-acquired pneumonia (CAP) with better prognosis than hospital-acquired pneumonia",
        "The progression from URI to pneumonia indicates the patient has severely impaired immunity",
        "Pleuritic chest pain results from inflammation of the pleura, which contains pain-sensing nerves",
        "Sputum culture and sensitivity testing should be obtained before starting antibiotics to guide therapy" }
      ],
      answers: [0, 1, 3, 4],
      rationale: "Rusty sputum is pathognomonic for pneumococcal (S. pneumoniae) pneumonia. CAP typically has better outcomes than HAP/VAP which occur in hospitalized patients. Progression from URI to pneumonia in an elderly patient is normal—age is a risk factor because immune defenses weaken with age, not necessarily indicating severe immunodeficiency. Pleuritic pain comes from pleural inflammation. Cultures should be obtained BEFORE antibiotics start to prevent suppression of organism growth and allow identification/susceptibility testing. The statement about severely impaired immunity is incorrect without other risk factors.",
      topic: "Community-Acquired Pneumonia",
      source: "Week 2 Pneumonia VO",
      type: "sata"
    },
    {
      id: 6,
      stem: "A patient with an altered mental status from a stroke is being fed via nasogastric tube. The nurse is concerned about aspiration risk for pneumonia. Which factors most directly increase the risk of aspiration pneumonia in this patient, and what prevention strategy would be most effective? Select all that apply.",
      options: [
        "Altered level of consciousness impairs protective airway reflexes and increases silent aspiration risk",
        "The nasogastric tube bypasses the normal swallowing mechanism and can facilitate reflux",
        "Acidic gastric contents if aspirated cause more inflammatory damage than neutral pH aspirate",
        "Proton pump inhibitors should be discontinued because they reduce stomach acid that helps kill aspirated bacteria",
        "Head-of-bed elevation to 30 degrees and careful monitoring during feeding reduce aspiration risk" }
      ],
      answers: [0, 1, 2, 4],
      rationale: "Altered consciousness eliminates protective reflexes (gag, cough) making silent aspiration likely—the patient won't cough if they aspirate. NG tubes mechanically disrupt normal swallowing and increase reflux risk. Acidic pH of gastric contents causes greater inflammatory response than neutral pH, which is why PPIs (which reduce acidity) are actually protective—they should NOT be discontinued. Head-of-bed elevation and monitoring are evidence-based prevention measures. Continuing PPIs is appropriate for aspiration pneumonia prevention.",
      topic: "Aspiration Pneumonia Prevention",
      source: "Week 2 Pneumonia VO",
      type: "sata"
    },
    {
      id: 7,
      stem: "A 45-year-old patient recovering from pneumonia is being transitioned from IV antibiotics to oral therapy. During the handoff, the nurse notes the patient remains short of breath with accessory muscle use, elevated heart rate, and rapid, shallow breathing despite improving chest X-ray findings. What is the clinical significance of these signs relative to the patient's physical assessment findings?",
      options: [
        "These findings indicate early respiratory distress and increased work of breathing; the patient is compensating but still managing oxygenation",
        "These findings indicate respiratory failure; the patient cannot maintain adequate oxygenation and needs immediate intervention",
        "These findings are expected recovery signs and indicate the patient is clearing the infection; discharge can proceed as planned",
        "These findings indicate the patient has developed a hospital-acquired secondary pneumonia" }
      ],
      answer: 0,
      rationale: "Respiratory DISTRESS involves increased work of breathing (accessory muscle use, tachycardia, tachypnea) while maintaining adequate oxygenation—the patient is compensating. Respiratory FAILURE occurs when the patient can no longer compensate and oxygen levels drop. This distinction is critical: distressed patients can improve with continued support; failure requires intubation. Improving CXR is a good sign, but the accessory muscle use indicates the patient is working harder than normal. Discharge would be premature without resolution of these signs.",
      topic: "Respiratory Distress vs. Failure",
      source: "Week 2 Pneumonia VO"
    },
    {
      id: 8,
      stem: "During a community health presentation, a nurse is educating people about pneumonia prevention. When discussing vaccines, an elderly attendee asks why they received two different pneumonia vaccines (PCV13 and PPSV23) at different times. What is the most accurate explanation of the rationale for this two-vaccine approach?",
      options: [
        "PCV13 covers 13 strains of Streptococcus pneumoniae, and PPSV23 covers 23 additional strains, providing broader protection when given together",
        "PCV13 is given first because it stimulates better immunity; PPSV23 is given later to boost protection against strains not covered by PCV13",
        "PPSV23 is older and has been replaced; patients who received it previously need PCV13 to get updated protection",
        "The two-vaccine strategy provides redundant coverage of the same 13 strains, which improves immune memory" }
      ],
      answer: 0,
      rationale: "PCV13 (pneumococcal conjugate vaccine) protects against 13 strains of S. pneumoniae. PPSV23 (pneumococcal polysaccharide vaccine) protects against 23 strains, with 21 additional strains beyond those in PCV13. Together they provide coverage against 33 different strains (the 13 overlap). The spacing allows the immune system to mount an adequate response to both. PPSV23 hasn't been replaced; both remain current recommendations for elderly and immunocompromised patients.",
      topic: "Pneumonia Prevention - Vaccines",
      source: "Week 2 Pneumonia VO"
    },
    {
      id: 9,
      stem: "A patient with chronic bronchitis (COPD) is hospitalized with acute bronchitis superimposed on their chronic condition. The nurse explains the difference between these two diagnoses. Which statement best differentiates acute bronchitis from chronic bronchitis?",
      options: [
        "Acute bronchitis is viral (80% of cases) and self-limiting in 3-4 weeks; chronic bronchitis involves airflow obstruction and persistent symptoms for 3+ months per year for 2+ years",
        "Acute bronchitis causes consolidation on chest X-ray; chronic bronchitis does not",
        "Acute bronchitis always requires antibiotics; chronic bronchitis is managed with bronchodilators only",
        "Chronic bronchitis is always caused by smoking; acute bronchitis can be caused by any infection" }
      ],
      answer: 0,
      rationale: "Acute bronchitis is inflammation of airways WITHOUT airflow obstruction, usually viral (~80%), self-limiting in 3-4 weeks, and managed supportively. Chronic bronchitis (COPD component) involves AIRFLOW OBSTRUCTION and requires symptoms for 3 months/year × 2 years—usually smoking-related. Acute bronchitis doesn't cause consolidation (that's pneumonia). Acute bronchitis rarely requires antibiotics (supporting care instead). While chronic bronchitis is typically smoking-related, acute bronchitis has varied etiologies.",
      topic: "Acute vs Chronic Bronchitis",
      source: "Week 2 URI VO"
    },
    {
      id: 10,
      stem: "A patient scheduled for routine elective surgery has an active upper respiratory infection and consults with the anesthesia team about postponing the procedure. The anesthesiologist is concerned about bronchospasm risk during anesthesia. Which explanation best describes why this patient is at increased bronchospasm risk and what can be done about it?",
      options: [
        "Active URI causes mucosal inflammation and edema; anesthesia and intubation can trigger bronchoconstriction. Postponing 1-2 weeks allows inflammation to resolve and significantly reduces this risk",
        "URI increases risk only in patients with asthma history; healthy patients can proceed safely with prophylactic bronchodilators",
        "Anesthesia itself causes bronchospasm regardless of URI status; proceeding is safe if the patient receives post-operative incentive spirometry",
        "URI increases aspiration risk during intubation, not bronchospasm risk; the procedure can proceed with careful airway management" }
      ],
      answer: 0,
      rationale: "Active URI causes airway inflammation and edema making airways more reactive. Anesthesia (which can trigger bronchoconstriction) + intubation + reactive airways = high bronchospasm risk. Delaying surgery 1-2 weeks allows the inflammation to resolve and dramatically reduces risk. While patients with asthma history have higher baseline risk, acute URI increases risk in everyone. Simply giving bronchodilators does not address the underlying inflamed airway tissue. Aspiration is a concern too, but bronchospasm is the specific anesthesia concern.",
      topic: "URI & Perioperative Bronchospasm Risk",
      source: "Week 2 URI VO"
    }
  ]
};
