/* ============================================================
   pathopharm-quiz-bank.js -- the question bank for the Pathopharm
   Review "Build Your Own Exam" page (pathopharm-exam-builder.html).

   Same format as data/quiz-bank.js and read by the same controller
   (assets/quiz.js): one topic per Pathopharm Review page, with a single
   question set ("Practice Questions", extraPractice). Questions are
   NCSBN clinical-judgment style, written ONLY from facts stated on that
   section's own page, with exactly one select-all-that-apply per section.

   Counts are scaled to page size: 8-12 questions per section, 113 total.
   Built 2026-11-21. Each section went through a blind fact-check against
   its page (answer keys matched on all 113), a revision pass, a second
   blind check of every changed question, and a second revision pass.
   Mechanical checks (tools/verify.js and the drafting checker): no correct
   option is the unique longest or unique shortest by character count, no
   answer slot holds more than ~40% of a section's single-answer keys, no
   duplicate stems, topic labels match exactly.

   These REPLACE the 262 older one-fact Pathopharm questions that used to
   sit in one merged row of data/quiz-bank.js (still recoverable from the
   site's git history, commit a2f6893 and earlier).

   Lecture oddities left as stated on the pages were NOT built on (e.g. the
   SSRI onset-timing inconsistency, the hypertensive-crisis 180/120 boundary,
   the metformin timing wording): see SESSION-LOG.md 2026-11-21.
   ============================================================ */
window.QUIZ_BANK = {

  columns: [
    { key: "extraPractice", label: "Practice Questions", blurb: "Clinical-judgment questions written from each Pathopharm Review page, one select-all-that-apply per section. Check a section, then take the whole set or type how many you want." }
  ],

  topics: [
      {
          "id": "review-pharm-foundations",
          "label": "Pharmacology Foundations",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "Drug X is in a trial of patients who have the target disease, and rarer dangerous effects are emerging. Drug Y has been on the market for years, and post-market monitoring now shows a pattern of severe reactions. Which pairing of outcomes matches how the FDA process handles each drug?",
                      "options": [
                          "Drug X is guaranteed to continue to Phase 3; Drug Y is pulled because a drug on the market cannot carry a black box warning",
                          "Drug X moves on to Phase 3 with no review of rarer effects; Drug Y keeps selling unchanged because warnings are only set before approval",
                          "Drug X may be pulled during Phase 2; Drug Y may receive a black box warning and stay on the market",
                          "Drug X is withdrawn only after Phase 4 review; Drug Y must be removed from the market immediately"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Phase 2 tests patients with the target disease to find rarer side effects, and the drug may be pulled there if effects are too dangerous. Phase 4 is post-market monitoring, and a pattern of severe reactions there can lead the FDA to require a black box warning, the strictest warning a drug can carry while staying on the market. Incorrect: A black box warning is described as a warning a drug carries while staying on the market, and it follows Phase 4 monitoring, so it is not tied to Phase 2. Drug X is not guaranteed to continue, because Phase 2 is where rarer side effects are identified and the drug may be pulled there rather than only after Phase 4.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client taking an anticoagulant says, \"My ginkgo biloba is natural and sold with a memory-support claim, so it must have been checked for safety and can't affect my medicine.\" Which response best corrects this belief?",
                      "options": [
                          "Ginkgo can suppress platelet aggregation and raise bleeding risk with anticoagulants, and supplements are not FDA-evaluated before marketing",
                          "A memory-support claim means the FDA reviewed ginkgo for interactions with other medicines before sale, so it is safe to combine with an anticoagulant",
                          "Ginkgo interacts with an anticoagulant if its label claims to treat a medical condition, and a memory claim shows it is not a drug",
                          "Ginkgo poses no bleeding concern, since supplements, unlike drugs, cannot suppress platelet aggregation or change how other medicines work"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Supplements can only claim effects on body structure or function and are not FDA-evaluated for safety or efficacy before marketing, and ginkgo can suppress platelet aggregation, raising bleeding risk with anticoagulants. Incorrect: A structure or function claim says nothing about FDA review of interactions, so it does not make ginkgo safe with an anticoagulant. Interaction risk does not depend on whether the label claims to treat a condition, because supplements can still interact with medications. Ginkgo is a supplement that can suppress platelet aggregation, so the belief that supplements cannot change how medicines work is wrong.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who has taken the same warfarin dose for months now has gum bleeding and new bruises. The client has had poor oral intake with weight loss, drinks alcohol daily, and has normal kidney function. The lab report shows a markedly reduced albumin level. Which explanation best accounts for the bleeding?",
                      "options": [
                          "Reduced kidney excretion is letting warfarin build up in the body, since the kidneys are the main route of elimination",
                          "A larger share of the warfarin now circulates unbound and active, because fewer albumin sites are available to hold it",
                          "The oral dose now reaches the circulation at 100 percent bioavailability, since an empty stomach removes the first-pass effect",
                          "Warfarin is 97 to 99 percent protein bound and so mostly inactive, since the bleeding must come from another cause"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Only unbound drug is active. Warfarin is 97 to 99 percent protein bound, so reduced albumin from malnutrition and alcohol use leaves more free, active drug and significantly raises bleeding risk even though the dose has not changed. Incorrect: Kidney function is normal in this client, so a build-up from poor excretion is not the cause. Oral drugs have less than 100 percent bioavailability because of first-pass metabolism in the liver; 100 percent is the IV figure, so an oral warfarin dose does not reach the circulation at 100 percent. High protein binding keeps warfarin inactive only while albumin is available to hold it, so with reduced albumin the bleeding can come from warfarin itself.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with peripheral vascular disease has a poorly perfused leg abscess and receives an IV antibiotic. A coworker says the 100% bioavailability of IV drugs means the abscess will receive the full dose. Which correction is accurate?",
                      "options": [
                          "Bioavailability is below 100% for IV drugs, as the liver inactivates part of each dose during first pass",
                          "Bioavailability only means reaching systemic circulation; poor perfusion limits delivery to the abscess",
                          "The blood-brain barrier blocks most drugs, so an IV dose cannot reach tissue outside the brain at all",
                          "Distribution is best in muscle, skin, and fat, so the abscess should receive more drug than the heart"
                      ],
                      "answer": 1,
                      "rationale": "Correct: IV drugs are 100% bioavailable because they enter systemic circulation with no absorption barrier, but distribution from blood to the site of action is impaired by peripheral vascular disease or a poorly perfused abscess. Incorrect: First-pass metabolism applies to orally absorbed drugs that pass through the liver before circulating, not to IV drugs, so it does not lower IV bioavailability.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients take the same CYP450 substrate drug. Client A drinks grapefruit juice with each morning dose. Client B was just started on a CYP450 inducer. Which pair of findings should the nurse anticipate?",
                      "options": [
                          "Both clients: drug accumulation and higher toxicity risk, as either change slows the liver enzymes",
                          "Neither client: CYP450 changes alter only kidney excretion and do not change the blood level",
                          "Client A: reduced drug effect from faster metabolism; Client B: drug accumulation and higher toxicity risk",
                          "Client A: drug accumulation and higher toxicity risk; Client B: reduced effect from faster metabolism"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Grapefruit juice is a classic CYP450 inhibitor, which slows metabolism of substrate drugs so the drug builds up and toxicity risk rises. An inducer speeds metabolism of substrate drugs, leaving less drug in the body and a lower therapeutic effect. Incorrect: The choice that swaps the two clients reverses the inhibitor and inducer effects, and both clients are not slowed because an inducer speeds metabolism rather than slowing it.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with chronic cancer pain receives a short-half-life opioid only as PRN doses and reports that pain returns before each next dose is given. Which change should the nurse expect the prescriber to consider?",
                      "options": [
                          "Around-the-clock scheduled dosing, with PRN doses for breakthrough pain, so levels stay steady between doses",
                          "A larger PRN dose each time, as a short half-life keeps drug levels steady until the next dose is requested",
                          "PRN dosing only with longer gaps between requests, so the drug is fully cleared and levels reset each time",
                          "A single daily dose in place of PRN doses, as steady state requires about 4 to 5 half-lives without added drug"
                      ],
                      "answer": 0,
                      "rationale": "Correct: With a short half-life, levels drop meaningfully between doses, so around-the-clock dosing (a scheduled baseline dose plus PRN doses for breakthrough symptoms) keeps a steady therapeutic concentration on board, especially for chronic pain. Incorrect: A larger PRN dose does not fix the problem, because a short half-life means levels still fall quickly between doses rather than staying steady.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client discharged on an opioid for cancer pain says, \"Opioids must be in the same class as heroin, which means they have no accepted medical use.\" Which response by the nurse is accurate?",
                      "options": [
                          "Opioids are Schedule II, with high abuse potential but some medical use, and each fill needs a new prescription",
                          "Opioids are Schedule I like heroin, and a new prescription is needed because they have no accepted medical use",
                          "Opioids are Schedule III, with moderate-to-low potential for dependence, so the refill rule is a pharmacy preference",
                          "Opioids are Schedule V, with very low abuse potential, and a new prescription is needed only for large amounts"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Opioids are Schedule II, which means high abuse potential and severe dependence risk but some accepted medical use, and Schedule II drugs have no automatic refills, so each fill needs a new prescription. Heroin is Schedule I, with no accepted medical use. Incorrect: Placing opioids in Schedule I repeats the client's misconception, because Schedule I is the class with no accepted medical use. Schedule III describes moderate-to-low potential for dependence, as with ketamine and anabolic steroids, and Schedule V describes very low abuse potential, such as cough syrup with a small amount of codeine, so neither fits an opioid for cancer pain.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Which statements about pharmacology and medication safety are accurate? Select all that apply.",
                      "options": [
                          "Writing \"0.25 mg\" with a leading zero, and \"1 mg\" with no trailing zero, helps prevent misreads of the dose",
                          "Magnesium sulfate works as a laxative by binding a receptor in the intestinal wall to stimulate bowel movement",
                          "Diphenhydramine acts as an antagonist by blocking histamine from acting at the H1 receptor on cells",
                          "Older adults have slower hepatic metabolism and reduced renal excretion, raising risk for confusion and falls",
                          "Activated charcoal is an example of an interaction that increases the therapeutic effect of other drugs",
                          "Amoxicillin has a narrow therapeutic index, so it needs closer monitoring than digoxin does"
                      ],
                      "answers": [
                          0,
                          2,
                          3
                      ],
                      "rationale": "Correct: Leading zeros and no trailing zeros prevent tenfold misreads, diphenhydramine is an antagonist that blocks histamine at the H1 receptor, and older adults with polypharmacy have slower hepatic metabolism and reduced renal excretion, raising the risk of adverse reactions such as confusion and falls. Incorrect: Magnesium sulfate acts through a direct osmotic effect rather than a receptor; activated charcoal intentionally blocks absorption, which decreases therapeutic effect; and amoxicillin has a wide therapeutic index that is rarely associated with toxicity, while warfarin and digoxin are the narrow examples.",
                      "topic": "Pharmacology Foundations",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-cellular-immunity",
          "label": "Cellular Adaptation, Infection &amp; Immunity",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "Two clients are evaluated for temperature regulation. Client A, in a cold room, has pale skin, no sweating, and shivering. Client B, after exertion in a hot room, has flushed skin and is sweating. Which interpretation of these findings is accurate?",
                      "options": [
                          "Client A's findings are pathologic, since pale skin and shivering show that homeostasis has already failed",
                          "Both clients are compensating, with Client A conserving and generating heat and Client B losing extra heat",
                          "Client B's flushed skin shows vessel constriction to conserve heat, while the sweating then cools the body",
                          "Client A's shivering and Client B's sweating are two mechanisms that both lose heat to the environment"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Both clients show normal compensatory responses to restore balance. When temperature drops, vessels constrict (pale skin), sweating stops to conserve heat, and shivering generates heat; when temperature rises, vessels dilate (flushed skin) and sweating loses heat. Incorrect: Calling Client A's findings pathologic misses that pale skin, absent sweating, and shivering are the expected defense against a falling temperature. Client B's flushing reflects vasodilation, not constriction, so the option that credits it to conservation flips the mechanism.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Six people eat the same undercooked chicken contaminated with a bacterial pathogen. Only one, an older adult who is immunocompromised, becomes ill. Using the epidemiologic triangle, which statement best explains why only this person developed disease?",
                      "options": [
                          "Disease depends on the agent alone, so the other five people must not have been exposed to the pathogen",
                          "The cooking temperature is a host factor that must have differed between the six people who ate the chicken",
                          "Age and immune status are extrinsic factors that overwhelmed this person's defenses, unlike the other five",
                          "The pathogen and environment were shared, so host susceptibility from age and immune status accounts for it"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Disease risk emerges when pathogen, host, and environment come together; the pathogen and the environmental conditions were common to all six, so the difference lies in the host, whose susceptibility depends on genetics, age, and immune status. Incorrect: Labeling age and immune status as extrinsic reverses the page's classification; they are intrinsic factors that come from inside the body. Cooking temperature is an environmental condition, not a host factor, and the stem states all six ate the same chicken, so exposure was not the difference.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse reviews the charts of two clients. Client A has cardiomyopathy, and a complete work-up has not found a cause. Client B has long-standing asthma and, after exposure to a known trigger, has an acute decline; the nurse palpates a weak pulse, and the client says, 'I feel dizzy.' Which documentation is accurate?",
                      "options": [
                          "Client A's disease is iatrogenic because no cause was found; Client B's decline is an exacerbation, with a weak pulse as a sign and dizziness as a symptom",
                          "Client A's disease is idiopathic; Client B's decline is an exacerbation, with a weak pulse as a symptom and dizziness as a sign",
                          "Client A's disease is latent because the cause is hidden; Client B's decline is a prodromal phase, with a weak pulse and dizziness both documented as signs",
                          "Client A's disease is idiopathic; Client B's decline is an exacerbation, with a weak pulse as a sign and dizziness as a symptom"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Idiopathic means the cause of the disease is unknown, as in a cardiomyopathy with no identified cause. Exacerbation is a worsening of disease, often an acute decline in a chronic condition triggered by an exposure. A weak pulse felt by the nurse is objective data (a sign), while dizziness is what the client reports (a symptom). Incorrect: Iatrogenic means the disease was caused by the healthcare field itself, such as a treatment, drug, or action, and nothing in Client A's history suggests that; an unknown cause is idiopathic. Labeling a weak pulse a symptom and dizziness a sign reverses subjective and objective data. Latent describes a process that is present but inactive, and prodromal describes early nonspecific signs that a condition is beginning, neither of which fits an acute decline in an established chronic disease.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who lifts weights has noticeably larger quadriceps. Another client with long-standing uncontrolled hypertension has an enlarged left ventricle. A student says both are hyperplasia because the tissue 'got bigger.' Which correction is most accurate?",
                      "options": [
                          "The quadriceps show hypertrophy and the heart shows atrophy, since sustained pressure shrinks the cardiac cells over time",
                          "Both are hyperplasia, since tissue that grows larger must have gained cells to create the extra tissue mass",
                          "Both are hypertrophy, with larger rather than more numerous cells; the quad growth is healthy, the cardiac harmful",
                          "The quadriceps show hypertrophy and the heart shows hyperplasia, since the heart responds to pressure by dividing"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Hypertrophy is an increase in cell size, not number, from mechanical stimuli such as repeated exercise or chronic pressure. Quad growth from exercise is normal and healthy, whereas the heart (and kidneys) are prone to a negative hypertrophy, usually from hypertension forcing the heart to pump harder. Incorrect: Hyperplasia is an increase in cell number and is only possible in cells capable of dividing, so it does not describe either client. Atrophy means cells shrink, the opposite of an enlarged ventricle.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients with chronic irritation have biopsies. Client A's shows mature cells with abnormal size, shape, and organization, graded moderate. Client B's shows one mature cell type replaced by a less-differentiated type. A new nurse says Client A clearly has the higher cancer risk and that Client B's change is permanent. Which correction is most accurate?",
                      "options": [
                          "Both changes are reversible, and Client B's metaplasia is more strongly associated with cancer risk than Client A's dysplasia alone",
                          "Both changes are reversible, but Client A's dysplasia carries more cancer risk because abnormal organization of mature cells is already cancer (anaplasia)",
                          "Client A's dysplasia is reversible, but Client B's metaplasia is permanent because the original mature cell type has been lost",
                          "Client A's moderate grade means the changes can no longer reverse, while Client B's metaplasia can normalize once the irritation stops"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Dysplasia (abnormal size, shape, or organization of mature cells) and metaplasia (reversible replacement of one mature cell type with a less-differentiated type) are both reversible and both relate to chronic irritation or inflammation; metaplasia is more strongly associated with cancer risk than dysplasia alone, although either can progress toward cancer. Incorrect: Anaplasia, meaning immature cancer cells that should signal a neoplasm, is a different finding from dysplasia, so abnormal organization alone does not make Client A's biopsy anaplastic. Metaplasia is described as reversible, not permanent. The mild, moderate, or severe grading of dysplasia describes severity, and dysplasia remains reversible at every grade.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients with diabetes and poor circulation are seen. Client A has a black, dry, wrinkled toe with a clear border between it and normal skin, and stable vital signs. Client B has a swollen, wet, blistered dark foot that smells foul and has no pulse, with new confusion and a rapid heart rate. Which is the nurse's priority concern, and why?",
                      "options": [
                          "Client A, because dry gangrene spreads quickly and the demarcation line marks the advance of bacteria into healthy tissue",
                          "Client A, because dry gangrene brings the strongest inflammatory response and the most bacterial damage",
                          "Client B, because wet gangrene lacks a demarcation line, spreads much faster, and can cause systemic decline",
                          "Client B, but only if gas bubbles are present, since wet gangrene alone does not cause systemic symptoms"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Client B has wet gangrene: liquefactive necrosis with heavy bacterial damage, a moist, pulseless, swollen foot, no demarcation line, rapid spread, and systemic signs (for example tachycardia and confusion) that can lead to death. Client A's picture is dry gangrene, with minimal bacteria, a clear demarcation line, and spread over weeks to months. Incorrect: Dry gangrene has minimal bacteria and a minimal inflammatory response, and it spreads slowly over weeks to months, so it is not the more urgent picture. Gas bubbles define gas gangrene, a specialized severe form of wet gangrene; wet gangrene on its own already causes the systemic symptoms, so the gas condition is not required for urgency.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients return from surgery 4 hours ago. Client 1's dressing is saturated with bright red drainage and has needed changing twice in the past hour. Client 2's dressing has a small amount of pale pink, thin fluid. Which client does the nurse prioritize, and why?",
                      "options": [
                          "Client 2, because pink-tinged drainage with small amounts of RBCs signals active bleeding from the fresh surgical incision",
                          "Client 1, because large amounts of RBCs in drainage are the most severe type and signal active bleeding, not only a wound",
                          "Client 2, because pale pink drainage is purulent and shows severe inflammation, typically from bacterial infection",
                          "Client 1, because large-volume drainage is serous and reflects mild inflammation that only needs monitoring"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Large amounts of RBCs make the drainage hemorrhagic, the most severe exudate type, which signals active bleeding rather than just a wound, so Client 1 is the priority. Client 2's small amount of pink-tinged fluid is serosanguineous, which is normal immediately post-op. Incorrect: Small amounts of RBCs in pink-tinged drainage are expected early after surgery and do not indicate active bleeding. Purulent exudate is thick, sticky, discolored, and often foul-smelling, so thin pale pink fluid is not purulent. Serous drainage is watery and low in protein, so a dressing saturated with bright red drainage is not serous or a sign of mild inflammation.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse reviews antibody results for two clients. Client A has new symptoms and a panel showing mainly IgM. Client B completed a vaccine series months ago, has no illness, and shows predominantly IgG. Which interpretation is correct?",
                      "options": [
                          "Client A's IgM indicates long-standing immunity, and Client B's IgG indicates a first-time exposure",
                          "Client A's IgM suggests a new exposure, and Client B's IgG reflects passive immunity from the vaccine",
                          "Client A's IgM, the most prevalent antibody, signals a vaccine response; Client B's IgG shows acute infection",
                          "Client A's IgM signals recent exposure; Client B's IgG reflects active immunity with primed memory B cells"
                      ],
                      "answer": 3,
                      "rationale": "Correct: IgM is the first antibody produced after exposure and signals that something is newly or acutely happening. IgG is produced later in an infection or after a vaccine, and a vaccine produces active immunity, in which the body makes its own antibodies, with memory B cells responding faster on re-exposure. Incorrect: Passive immunity is transferred antibody (placental IgG, breast milk IgA, or injected immune globulin), so crediting a vaccine with passive immunity flips the concept. IgG, not IgM, is the most prevalent antibody (about 75-80%).",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who just completed a course of broad-spectrum antibiotics now has many loose, watery stools that look orange, with abdominal cramping, and a yeast overgrowth (thrush) in the mouth. Which plan is most appropriate?",
                      "options": [
                          "Send a stool culture, use contact isolation with gowns, gloves, and soap-and-water hand washing, hold antidiarrheals, and anticipate nystatin",
                          "Send a stool PCR, use contact isolation with gowns, gloves, and alcohol sanitizer, hold antidiarrheals, and anticipate nystatin",
                          "Send a stool PCR, use contact isolation with gowns, gloves, and soap-and-water hand washing, hold antidiarrheals, and anticipate nystatin",
                          "Send a stool PCR, use contact isolation with gowns, gloves, and soap-and-water hand washing, give an antidiarrheal, and anticipate nystatin"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Antibiotics killed normal flora, allowing C. diff overgrowth (watery, often orange-tinged diarrhea, cramping) and candidiasis (oral thrush, treated with nystatin). C. diff is diagnosed by stool PCR, needs contact isolation with gowns and gloves and soap-and-water hand washing, and antidiarrheals are avoided so the toxin can clear. Incorrect: A stool culture is too slow for C. diff, alcohol sanitizer does not kill it, and giving an antidiarrheal would hold the toxin in the gut.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "The nurse reviews findings on a medical-surgical unit. Which interpretations are accurate? Select all that apply.",
                      "options": [
                          "Staph aureus on a skin swab with no signs of infection is colonization, which can become infection if tissue is disrupted.",
                          "A client who developed hepatitis A after eating contaminated food illustrates vehicle-borne indirect transmission of infection.",
                          "A client with mild fatigue and a low-grade fever, not yet fully symptomatic, is in the incubation stage of infection.",
                          "A urinalysis with many epithelial cells and negative nitrates and leukocyte esterase suggests a sample that is contaminated.",
                          "Gram-negative organisms are easier for the body to fight than gram-positive ones because their outer membrane exposes their antigens.",
                          "An infection that began after hospital admission is more likely to be virulent and drug-resistant than one acquired at home."
                      ],
                      "answers": [
                          0,
                          1,
                          3,
                          5
                      ],
                      "rationale": "Correct: Colonization is a pathogen present without signs or symptoms that can turn into infection with immune compromise or tissue disruption; hepatitis A from contaminated food is vehicle-borne transmission; epithelial cells suggest a contaminated sample rather than infection; and nosocomial infections are typically more virulent and more drug-resistant. Incorrect: Mild fatigue and low fever before full symptoms describe the prodromal stage, since incubation has no symptoms at all. Gram-negative bacteria are more dangerous because an outer membrane or capsule hides their antigens, so the statement reverses the relationship.",
                      "topic": "Cellular Adaptation, Infection &amp; Immunity",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-htn-hld",
          "label": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "Client A is 23 and has an LDL of 215 even though she exercises regularly and eats a healthy diet; her father had a heart attack at 41. Client B is 57 with an LDL of 215, a sedentary lifestyle, and a diet high in saturated fat. Both are started on atorvastatin. Which expectation by the nurse is most accurate?",
                      "options": [
                          "Client B responds poorly, as a diet-driven elevation means the liver cannot build more LDL receptors",
                          "Client A responds poorly, as statins rely on new LDL receptors in the liver and hers are defective",
                          "Both respond equally, as statins block cholesterol production whether or not receptors work",
                          "Client A responds best, as defective receptors leave more LDL in the blood for the statin to remove"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Client A's pattern (young, strong family history, high cholesterol despite a healthy lifestyle) suggests familial hypercholesterolemia, a defect in liver LDL receptors. Statins work by making the liver build more LDL receptors to pull LDL out of the blood, so this group responds poorly. Client B's diet-driven elevation does not involve a receptor defect, so the mechanism can work. Incorrect: Saying Client B responds poorly is backwards: nothing about a high saturated-fat diet stops the liver from building more LDL receptors; the receptor defect belongs to Client A. 'Both respond equally' treats the statin as acting only on cholesterol production; the benefit depends on the liver building more LDL receptors, and getting LDL out of circulation is the goal. Saying Client A responds best flips the relationship: defective receptors mean the statin's mechanism cannot be carried out, so she responds worse, not better.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 52-year-old client who smokes and has long-standing hypertension and poorly controlled blood sugar has an LDL only mildly above target. The client asks why these other problems matter for plaque formation. Which explanation by the nurse best describes the mechanism?",
                      "options": [
                          "They convert circulating LDL into foam cells, which then settle along the vessel wall",
                          "They attract macrophages that injure the lining, which then lets LDL pass under the wall",
                          "They thicken the plaque's collagen cap, which makes the lipid core more likely to rupture",
                          "They injure the endothelium, loosening its cells so LDL can pass under the vessel wall"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Smoking, chronic hemodynamic wall stress from hypertension, and long-term hyperglycemia all cause the first step, endothelial injury. The normally tightly bunched cells loosen, increasing permeability so LDL passes beneath the vessel wall; only then do macrophages engulf the lipids and become foam cells. Incorrect: Having macrophages injure the lining first reverses the sequence; macrophages arrive after LDL is trapped under the wall. A thicker collagen cap is a feature of older, more stable plaques that are less likely to rupture.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 62-year-old sedentary client has a 60% coronary blockage on angiography, with a large plaque that has a large lipid core. The client says, \"I walk to the mailbox with no chest pain, so my heart isn't at risk.\" Which response by the nurse is best?",
                      "options": [
                          "No symptoms is typical here, but a large lipid-core plaque can rupture and clot, so risk reduction matters",
                          "No symptoms means the plaque is old and stable with a collagen cap, so rupture is unlikely and nothing changes",
                          "Chest pain will warn before the vessel can become fully blocked, so teaching can wait until symptoms begin",
                          "Walking to the mailbox without pain shows the blockage is under 30 percent, so risk to the heart is low"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Blockage of 30-90% still lets blood through, so the client may be asymptomatic, especially if sedentary. But large plaques with a large lipid core are prone to rupture, and a rupture triggers platelet aggregation and a clot that can block the vessel entirely, causing a myocardial infarction, so the absence of symptoms does not make the risk low. Incorrect: Older, more stable plaques have a collagen cap that makes them less likely to rupture; the stem describes a large lipid core, and silence of symptoms says nothing about stability. Waiting for chest pain to appear ignores that a rupture-triggered clot can block the vessel entirely, which is how infarction occurs. The mailbox walk without pain does not place the blockage under 30%, since 30-90% blockage can be asymptomatic.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who started simvastatin 3 weeks ago was recently prescribed a macrolide antibiotic for a sinus infection and now reports new generalized muscle weakness. Which nursing interpretation and action best fit?",
                      "options": [
                          "Hepatotoxicity from the combination; AST and ALT are the priority laboratory checks now",
                          "An expected early effect; continue the dose and repeat the fasting lipid panel at two weeks",
                          "Possible myopathy progressing to rhabdomyolysis; notify the provider and ask about a CK level",
                          "Reduced statin effectiveness from the antibiotic; ask the provider to raise the simvastatin dose"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Muscle weakness is the myopathy warning sign, and macrolides are listed among drugs that raise the risk of myopathy/rhabdomyolysis with statins. Rhabdomyolysis (muscle fiber breakdown) can cause acute kidney failure, and creatine kinase is the muscle-breakdown marker, so the provider needs to know now. Incorrect: Hepatotoxicity is the near miss; it appears with a year or more of treatment, and the symptom here is muscular, not hepatic. Waiting two weeks for lipid results treats the weakness as expected, but the two-week figure refers to when LDL lowering appears, not to normal muscle symptoms.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse is teaching a client who is starting rosuvastatin. The client carefully limits dietary cholesterol but eats foods high in saturated and trans fat every day. Which statements should the nurse include? Select all that apply.",
                      "options": [
                          "Take the dose at night, when the liver makes more cholesterol and the drug works best",
                          "The full LDL-lowering effect should be present within the first few days of therapy",
                          "Limiting saturated and trans fat matters more than limiting dietary cholesterol alone",
                          "Ezetimibe, if added later, works like rosuvastatin by increasing the liver's LDL receptors",
                          "Avoid grapefruit juice, which interferes with statin metabolism and raises statin levels",
                          "Baseline labs before starting include a fasting lipid panel, AST/ALT, and creatine kinase"
                      ],
                      "answers": [
                          0,
                          2,
                          4,
                          5
                      ],
                      "rationale": "Correct: Night dosing is required for rosuvastatin (shorter half-life) because the liver makes more cholesterol at night. Saturated and trans fat can raise cholesterol 15-25%, while dietary cholesterol raises it only minimally, so the saturated and trans fat is the real dietary target. Grapefruit interferes with statin metabolism and raises statin levels. Baseline labs before starting are a fasting lipid panel, AST/ALT (liver function), and creatine kinase (CK). Incorrect: Statin effect takes about two weeks because the liver needs time to build new LDL receptors, so it is not present within days. Ezetimibe is a different mechanism: it blocks the small intestine's absorption of cholesterol from diet and bile, and it does not increase LDL receptors.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with hypertension has taken lisinopril and a potassium supplement for months with stable readings. The provider adds aliskiren for better control. Which nursing action is most appropriate?",
                      "options": [
                          "Expect hypokalemia as with thiazides, and encourage more potassium-rich foods along with the supplement",
                          "Question the potassium supplement and watch for hyperkalemia, which this drug pairing can cause",
                          "Check a WBC count every 2 weeks for 3 months, since neutropenia is the main risk of this pairing",
                          "Expect the full blood pressure effect within days, and reassess the dose after the first week"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Aliskiren is a renin inhibitor, and watch for hyperkalemia when it is combined with an ACE inhibitor such as lisinopril. ACE inhibitors also carry hyperkalemia risk, especially with potassium supplements, so the supplement is the detail to question. Incorrect: Hypokalemia is the potassium problem of thiazide and loop diuretics, and adding potassium-rich foods on top of a supplement and this pairing would add to the hyperkalemia risk. The WBC schedule applies to captopril's neutropenia risk, not to lisinopril or aliskiren. Aliskiren has a long half-life and takes several weeks for full effect, so judging it after a week would be premature.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 26-year-old woman who is of normal weight has blood pressure readings of 152/96 on repeated visits. She takes an oral contraceptive and uses amphetamines recreationally, and she has no family history of hypertension. Which interpretation is best?",
                      "options": [
                          "Stage 1 hypertension of primary origin; lifelong therapy and lifestyle changes should begin",
                          "Elevated blood pressure only; rescreening is enough as one of the two numbers is normal",
                          "Stage 2 primary hypertension, the cause in most cases; long-term therapy is the main plan",
                          "Stage 2 hypertension probably secondary to drugs; treatment targets the identifiable causes"
                      ],
                      "answer": 3,
                      "rationale": "Correct: A systolic above 140 or a diastolic above 90 qualifies as Stage 2, and only one number is needed. Oral contraceptives and amphetamines are listed drug-induced causes of secondary hypertension, which has an identifiable cause and is treated by treating or removing it. Incorrect: Primary hypertension is the majority (about 90-95%) of cases but is idiopathic, and its risk factors (obesity, family history, age) are absent here. 'Elevated' requires both numbers to qualify (systolic 120-129 and diastolic below 80), so it cannot describe 152/96.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients have a blood pressure of 196/124. Client A feels well and has no headache, vision change, or chest pain. Client B became difficult to arouse and then had a seizure. Which plan is most appropriate?",
                      "options": [
                          "Client B gets IV labetalol over minutes to hours; Client A gets oral drugs over hours to days",
                          "Both clients get IV medication and a rapid drop, as both readings fall in the crisis range",
                          "Client A gets IV medication over minutes to hours; Client B gets oral medication lowered over days",
                          "Client B gets IV medication lowered over days; Client A needs no treatment while symptom-free"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Both readings meet the crisis threshold, but only Client B has end-organ damage (unresponsiveness and seizures are signs of end-organ damage), making it a hypertensive emergency treated with IV medication such as labetalol over minutes to hours, since the ongoing organ damage outweighs the risk of over-correcting. Client A has hypertensive urgency: no end-organ damage, so oral medication with a gradual reduction over hours to days. Incorrect: 'Both clients get IV medication' treats the numbers alone as the deciding factor; end-organ damage, not the reading, separates the two. Giving Client A the IV route and Client B oral medication reverses the two severities. Withholding treatment from a symptom-free Client A ignores that a crisis-range reading still needs oral medication, and lowering Client B's pressure over days is too slow for an emergency.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with hypertension also has gout and renal insufficiency. The provider orders hydrochlorothiazide. Which concern should the nurse raise with the provider?",
                      "options": [
                          "Thiazides are first-line for mild hypertension; proceed, as gout and renal insufficiency are unaffected",
                          "Thiazides raise glucose and cholesterol; hold the order until a lipid panel is completed",
                          "Thiazides can raise uric acid and worsen renal insufficiency; ask about a loop diuretic instead",
                          "Spironolactone is a stronger diuretic that spares potassium; ask for it in place of the thiazide"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Thiazides cause hyperuricemia (caution with gout) and may worsen renal insufficiency, while loop diuretics like furosemide work even with preexisting renal disease. Incorrect: Thiazides do raise glucose, cholesterol, and triglycerides, but that is a competing detail, not the main concern for this client's gout and kidney problem. Spironolactone is a mild diuretic on its own (usually added to a thiazide or loop regimen), and its risk is hyperkalemia, so it is not a stronger replacement.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client takes clonidine and metoprolol for hypertension and reports daytime drowsiness. Because home readings have been normal, the client plans to stop both medications today. Which response by the nurse is best?",
                      "options": [
                          "Normal readings show neither is needed, so stopping both is fine and they can be restarted if needed",
                          "Stopping either abruptly can cause rebound hypertension; suggest clonidine at night and wean both off",
                          "Stop metoprolol abruptly but wean clonidine, because rebound hypertension is a clonidine problem here",
                          "Stop clonidine abruptly but wean metoprolol, because rebound hypertension is a beta blocker problem"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Both clonidine and beta blockers such as metoprolol must never be stopped abruptly, because rebound hypertension (a critical rise in blood pressure with high risk of stroke or death) can result; the dose is weaned down gradually instead. Drowsiness is a known clonidine side effect, managed by taking the dose at night, especially the first dose. Incorrect: Normal readings are the result of the medications working, not proof they are no longer needed, and stopping both at once invites rebound hypertension in each. Stopping metoprolol abruptly while weaning clonidine is wrong because beta blockers carry the same never-stop-abruptly warning. Stopping clonidine abruptly while weaning metoprolol is wrong for the same reason in reverse: clonidine also must be weaned gradually.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 29-year-old Black woman developed swelling of the lips and around the eyes on lisinopril, which was stopped. Her provider now prescribes losartan. Which teaching priority is most important?",
                      "options": [
                          "Report any swelling of the lips, face, or throat right away, and use contraception while on losartan",
                          "Losartan acts on the receptor instead of ACE, so swelling cannot recur and no precautions apply",
                          "Lisinopril may be continued at a lower dose alongside losartan to limit the swelling risk",
                          "A calcium channel blocker should be requested instead, as these are poorly tolerated in Black patients"
                      ],
                      "answer": 0,
                      "rationale": "Correct: ARBs can still cause angioedema, so a client with prior ACE-related angioedema needs close watching for lip, face, or laryngeal swelling that could close the airway. ARBs are not for use in pregnancy, so patients of childbearing age need contraception. Incorrect: Losartan not acting on ACE does not remove angioedema risk, since a client with prior ACE-related angioedema must be watched closely when an ARB is started. An ACE inhibitor and an ARB are never given together, and calcium channel blockers are actually well tolerated in Black patients, with lower angioedema risk than ACE inhibitors.",
                      "topic": "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-diabetes-metsyn",
          "label": "Diabetes &amp; Metabolic Syndrome",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "Two clients have markedly elevated blood glucose. Client A, age 14, has rapid weight loss, muscle wasting, an elevated BUN, and ketones in the urine. Client B, age 52, has a BMI of 36, recurrent infections, slow wound healing, and a high serum insulin level. Which explanation correctly contrasts what is happening in the two clients?",
                      "options": [
                          "Client A has insulin resistance that drives lipolysis, while Client B has a complete lack of insulin that drives fat creation",
                          "Both clients are breaking down protein for fuel, because hyperglycemia in either type stops protein synthesis equally",
                          "Client A lacks insulin so fat and protein break down, while Client B resists insulin and the high insulin favors fat storage",
                          "Client A's wasting reflects insulin resistance, while Client B's frequent infections reflect an absolute insulin deficiency"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Client A fits type 1 diabetes, a complete lack of endogenous insulin, so cells starve and the body breaks down fat (ketones) and protein (muscle wasting, increased BUN). Client B fits type 2: insulin resistance triggers compensatory hyperinsulinemia, which stimulates lipogenesis and inhibits fat breakdown, and the vague symptoms (infections, slow healing) fit type 2. Incorrect: Reversing the types (resistance driving lipolysis, absent insulin driving fat creation) fails because lipolysis and proteolysis come from absent insulin, and the high insulin in resistance promotes fat creation rather than fat breakdown; proteolysis is described as more common in type 1 than in type 2.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who ate carefully for the 3 days before a lab draw expects a normal A1c. The results are a fasting plasma glucose of 98 mg/dL and an A1c of 6.4%. Which statement by the nurse is most accurate?",
                      "options": [
                          "A1c reflects average glucose over the last 2 to 3 months, so 6.4% is in the prediabetes range despite a normal fasting level",
                          "The fasting value of 98 mg/dL gives the better long-term picture, so the A1c of 6.4% should be set aside as unreliable now",
                          "Three days of careful eating lowers the A1c quickly, so both results are normal and the client needs no further follow-up at all",
                          "An A1c of 6.4% is already in the diabetes range, so the normal fasting glucose does not change the diagnosis"
                      ],
                      "answer": 0,
                      "rationale": "Correct: A1c reflects average blood glucose over the last 2 to 3 months (the percentage of hemoglobin with glucose attached), so a few days of careful eating would not normalize it. An A1c of 5.7 to 6.4% is the prediabetes range, while a fasting plasma glucose of 98 mg/dL is at or below 99 and therefore normal. Incorrect: Setting the A1c aside reverses the page, which calls A1c a better long-term picture than a single fasting glucose value. Treating 6.4% as diabetic misreads the cutoff, because the diabetes range begins at 6.5% or higher. Claiming that 3 days of careful eating lowers the A1c ignores the 2 to 3 month window it reflects.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 31-year-old client was diagnosed with type 2 diabetes six months ago and takes glipizide as prescribed. The client now reports polyuria, polydipsia, polyphagia, fatigue, and rapid weight loss, and a finger-stick glucose is 340 mg/dL. Which interpretation best explains why the therapy is failing?",
                      "options": [
                          "Hypoglycemia from glipizide is triggering a counter-regulatory rebound that mimics the classic three P's",
                          "Taking glipizide with NSAIDs or cimetidine has weakened its effect and allowed hyperglycemia to persist",
                          "Type 2 insulin resistance has simply worsened, and glipizide acts by closing channels in muscle cells instead",
                          "Adult-onset type 1 may have been misdiagnosed as type 2, and glipizide needs residual beta cell function"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Adult-onset type 1 diabetes is often misdiagnosed as type 2, and sulfonylureas stimulate insulin secretion and require some remaining beta cell function (type 2 only), so they fail once beta cells are destroyed; the prominent three P's and weight loss/fatigue also fit type 1 more than type 2. Incorrect: NSAIDs and cimetidine do not weaken sulfonylureas; the page says they potentiate hypoglycemia risk, so the claim reverses the interaction. A glucose of 340 mg/dL is far above the typical hypoglycemia definition of below about 55 to 60 mg/dL, so a rebound from a low does not explain the picture. Glipizide closes potassium-ATP channels in beta cells, not muscle cells, so the claim about muscle channels misplaces its mechanism.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients with diabetes are awake and able to swallow, and both report cold sweats, a racing heart, and anxiety. Client A usually runs a glucose near 300 mg/dL and has a finger-stick of 130 mg/dL. Client B usually runs near 110 mg/dL and has a finger-stick of 52 mg/dL. Which plan is best?",
                      "options": [
                          "Give Client B 15 to 20 g of simple carbohydrate such as juice, and do not dismiss Client A's symptoms given the higher reading",
                          "Give Client B 15 to 20 g of simple carbohydrate, and tell Client A the symptoms cannot involve glucose because 130 exceeds 55 to 60",
                          "Give Client B a candy bar for the fastest rise, and have Client A wait to see whether the symptoms pass on their own",
                          "Give Client B injected glucagon because the value is below 55, and watch Client A, whose reading is above the usual threshold"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Hypoglycemia is typically defined as below about 55 to 60 mg/dL, so Client B's 52 mg/dL fits, and an awake client who can swallow is given 15 to 20 g of simple carbohydrate such as 4 to 6 oz of fruit juice or glucose tablets. Client A's body is adapted to a high baseline, so a reading well above the usual threshold (for example 130 mg/dL) can still feel symptomatic, and the nurse should not dismiss the symptoms because hypoglycemia is a true emergency that is easy to confirm and easy to treat. Incorrect: Telling Client A the symptoms cannot involve glucose applies the typical threshold without accounting for the adapted baseline. Candy is specifically not the recommended carbohydrate source, and waiting delays treatment of an emergency. Parenteral glucagon is reserved for a client who cannot swallow or has a decreased level of consciousness, and Client B is awake and able to take oral carbohydrate.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "The nurse is caring for two clients. Client A is a 24-year-old with type 1 diabetes, blood glucose 520 mg/dL, and ketones in the urine. Client B is a 68-year-old with type 2 diabetes, blood glucose 710 mg/dL, and marked dehydration. Which statements about these presentations are accurate? Select all that apply.",
                      "options": [
                          "Client A's glucose and ketonuria fit DKA, the most common acute complication in type 1 diabetes patients.",
                          "Client B's glucose in the 700s with marked dehydration fits HHNS, which occurs primarily in type 2 diabetes.",
                          "Client B's higher glucose reading shows a more profound insulin deficiency than Client A's has.",
                          "Client A's coma risk comes from marked dehydration with osmolality-driven fluid shifts rather than from ketone-driven acidosis.",
                          "Client A's glucose fits the usual DKA range of the 400s to 600s, below the HHNS range of the 600s to 800s.",
                          "Regular insulin by IV infusion is inappropriate for Client A with type 1 diabetes because only subcutaneous insulin may be given."
                      ],
                      "answers": [
                          0,
                          1,
                          4
                      ],
                      "rationale": "Correct: DKA is the most common acute complication in type 1 diabetes (glucose in the 400 to 600s, ketone-driven acidosis, ketonuria, possible coma); HHNS occurs primarily in type 2 with glucose in the 600 to 800s and osmolality-driven fluid shifts, and Client A's 520 mg/dL sits in the DKA range, below the typical HHNS range. Incorrect: HHNS results from a less profound insulin deficiency than DKA, despite the higher glucose; the page ties DKA's coma risk to ketone-driven acidosis and ties osmolality-driven fluid shifts to HHNS; and regular insulin is the one insulin that can be given IV, including infusions for DKA.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with 20 years of diabetes has decreased vibration and pain sensation in both feet and says, 'My feet never hurt, so they must be fine.' The nurse finds a blister on the heel that the client did not know about. Which explanation should the nurse give?",
                      "options": [
                          "Having no foot pain shows that circulation is good, so the blister should heal normally and infection is unlikely",
                          "Painless injury is expected, and infections in people with diabetes progress no faster than in others, so routine care is enough",
                          "Sensory loss hides injuries, and with impaired healing and reduced blood supply, infection can progress quickly toward amputation",
                          "Painless injury occurs because neuropathy damages large arteries, so the blister reflects macrovascular rather than nerve disease"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Neuropathy causes sensory loss (pain, temperature, vibration), so injuries go unnoticed; combined with impaired wound healing and vascular disease, this leads to infection and possibly amputation, and infections in diabetes become serious more quickly. Incorrect: Attributing the painless blister to large-artery damage swaps the mechanisms, since neuropathy is a microvascular, small-capillary complication affecting nerves, while macrovascular disease involves large and medium arteries.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with type 1 diabetes has an order for insulin lispro with breakfast. The nurse checked a finger-stick glucose of 190 mg/dL at 0630. At 0730 the breakfast tray has not arrived and the client is hungry. What should the nurse do?",
                      "options": [
                          "Hold the lispro until the tray arrives, then check a current glucose and give it as the client begins eating",
                          "Give the lispro now using the 0630 reading, since the dose is due and the tray should arrive soon",
                          "Check a current glucose and give the lispro now, since onset is only 15 minutes and the tray is near",
                          "Hold the lispro until the meal is finished, since rapid-acting insulin is meant to treat the glucose rise after eating"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Rapid-acting insulin is given as the client starts eating, because giving it earlier risks hypoglycemia if the meal is delayed, and a current glucose must be obtained immediately before the dose, not a reading from earlier. Incorrect: Checking a current glucose but giving the lispro now gets half of it right, but ignores the 15-minute onset and roughly 1-hour peak that make early dosing dangerous when the tray is delayed. Using the 0630 reading is the unsafe shortcut the page warns against, and holding the dose until the meal is finished misses that it is given as eating starts.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients have fasting morning glucose readings above 250 mg/dL. Client A received extra insulin at bedtime and has a 0300 glucose of 48 mg/dL. Client B has had no insulin changes and has a 0300 glucose of 110 mg/dL. Which interpretation and plan is correct?",
                      "options": [
                          "Client A has the dawn phenomenon, so more bedtime insulin is needed; Client B has the Somogyi effect, so bedtime insulin should be decreased",
                          "Both clients have the Somogyi effect, so both should have their bedtime insulin decreased to prevent overnight lows",
                          "Both clients have the dawn phenomenon, since morning cortisol rises are normal and neither needs a dosing change",
                          "Client A has the Somogyi effect from an overshoot after a low, so decrease bedtime insulin; Client B has the dawn phenomenon"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Client A's nocturnal low triggers the counter-regulatory response (glucagon, epinephrine, glucocorticoids, growth hormone) and the overshoot causes morning hyperglycemia, which signals too much bedtime insulin needing dose adjustment. Client B's normal 0300 value with a morning rise matches the dawn phenomenon, a normal physiologic pattern from cortisol and growth hormone and not a dosing error. Incorrect: Treating Client A's morning hyperglycemia as a dawn phenomenon and adding insulin would worsen the nocturnal hypoglycemia that is driving the rebound.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with type 2 diabetes started metformin 2 weeks ago and reports bloating and nausea. Fasting glucose has improved only slightly, and the client wants to stop, saying, 'It isn't working and it's making me sick.' Which response is best?",
                      "options": [
                          "Metformin works quickly by stimulating beta cells, so the lack of improvement means it should be replaced",
                          "Effect builds slowly, peaking at 2 to 4 weeks, and GI upset is a known side effect, so staying on it is reasonable",
                          "The nausea signals hypoglycemia from increased insulin release, so the client should take each dose with juice right away",
                          "The full effect is expected within the first few days of therapy, so the nausea means the drug should be stopped"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Metformin has a slow onset (peaking at 2 to 4 weeks), and GI upset such as bloating and nausea is a known side effect, so the lack of full effect at 2 weeks is expected and the client has no reason to stop yet; the page also advises giving it 30 minutes before meals to reduce GI discomfort. Incorrect: Saying metformin stimulates beta cells confuses it with sulfonylureas; metformin does not stimulate insulin release, so it does not typically cause hypoglycemia on its own and the nausea is not a low-glucose sign. Expecting the full effect within days contradicts the 2 to 4 week peak.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "At a wellness screening, Client A is a man with a BMI of 27 kg/m2 and a waist circumference of 43 inches with an apple shape. Client B is a woman with a BMI of 31 kg/m2 and a waist circumference of 33 inches with a pear shape. Which assessment is most accurate?",
                      "options": [
                          "Client B has the higher cardiometabolic risk, since BMI above 30 means obesity and gynoid fat is the more active type",
                          "Neither client has an elevated risk marker, since waist circumference is not interpreted unless the BMI is above 30",
                          "Client A's waist is past the 40 inch marker and suggests visceral fat, so his risk is higher despite a lower BMI",
                          "Client A has the lower risk, since subcutaneous fat is the more hormonally active and inflammatory storage type"
                      ],
                      "answer": 2,
                      "rationale": "Correct: A waist circumference above 40 inches in men is a cardiovascular risk marker, and an android (apple) pattern suggests visceral fat, which is hormonally active and linked to insulin resistance, metabolic syndrome, and cardiovascular disease, so Client A carries more risk even though his BMI is below the 30 obesity cutoff. Incorrect: Client B's BMI over 30 does meet the obesity definition, but gynoid (pear) fat stores fat elsewhere without the same elevated cardiometabolic risk, so BMI alone is not the deciding factor.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with obesity and prediabetes asks why constant hunger persists despite plenty of stored fat. Which explanation is accurate?",
                      "options": [
                          "Leptin rises with fat mass but resistance blunts its appetite effect, and falling adiponectin worsens insulin sensitivity",
                          "Leptin falls as fat mass grows so hunger is stimulated, and adiponectin rises to compensate and protects insulin sensitivity",
                          "Both leptin and adiponectin rise with fat mass, so the persistent hunger must come from behavior rather than hormone signaling",
                          "High leptin shows satiety signaling is intact, and the hunger comes from increased GLP-1 and peptide YY levels instead"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Leptin is made by adipocytes and rises with fat mass, but chronically high leptin causes leptin resistance, so its appetite-suppressing effect is lost and overeating results; adiponectin is inversely related to body fat, and low levels contribute to insulin resistance and higher type 2 diabetes risk. Incorrect: GLP-1 and peptide YY are actually decreased in obesity, so claiming they are increased reverses the page's relationship and cannot explain the hunger.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A is a man with a waist of 39 inches, elevated triglycerides, hypertension, and low HDL, with normal fasting glucose. Client B is a woman with a waist of 37 inches and a BMI of 34, with elevated triglycerides but normal HDL, blood pressure, and fasting glucose. Which conclusion is correct?",
                      "options": [
                          "Both clients meet the criteria for metabolic syndrome, since each waist is larger than 35 inches",
                          "Only Client B meets the criteria, since her larger BMI and elevated waist outweigh the other findings",
                          "Neither client meets the criteria, since metabolic syndrome calls for four or more of the five components",
                          "Only Client A meets criteria with three components, while Client B has two despite an elevated waist"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Metabolic syndrome requires three or more of five components, with the waist cutoff being above 40 inches for men and above 35 inches for women. Client A's 39 inch waist is not elevated, but triglycerides, hypertension, and low HDL give him three; Client B has an elevated waist and triglycerides, which is only two. Incorrect: Applying the 35 inch cutoff to Client A wrongly counts his waist (four components); Client B has only two either way, and the BMI is not one of the five components. The criteria are three or more, so a threshold of four or more is wrong, and both clients cannot qualify when Client B has only two.",
                      "topic": "Diabetes &amp; Metabolic Syndrome",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-coagulation-dvt",
          "label": "Coagulation &amp; DVT",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "Two clients have easy bruising and prolonged bleeding after venipuncture. Client A's platelet count is 38,000. Client B's platelet count is 210,000, and Client B has a known liver disorder. Which interpretation by the nurse is most accurate?",
                      "options": [
                          "Client A has too few clotting factors from poor liver output; Client B has a low platelet count from bone marrow failure",
                          "Both clients have thrombocytopenia, since platelets are made in the liver and fail to work when it is damaged",
                          "Client A's count is below 100,000, a high bleeding risk; Client B's is normal, so too few liver-made factors is likelier",
                          "Client A's count is low enough to explain bleeding; Client B has low albumin, which keeps a stable clot from forming in the skin capillaries"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Thrombocytopenia is generally below 100,000 and carries a high bleeding risk, so a count of 38,000 explains the first client's bleeding. A count of 210,000 is within the 150,000-400,000 normal range, so the platelets are not the problem for the second client. Most plasma proteins, including the clotting factors, are made in the liver, so liver dysfunction can leave too few factors to build fibrin. Incorrect: Platelets are made in the bone marrow, with extra storage in the spleen, not in the liver, and 210,000 is not thrombocytopenia. Albumin's key role is regulating water and solute movement through capillaries (oncotic pressure), not building the clot, and the two clients' causes should not be swapped.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client newly diagnosed with a DVT begins a heparin infusion and asks, \"Will this medicine dissolve the clot in my leg?\" Which response by the nurse is most accurate?",
                      "options": [
                          "It keeps the clot from growing, and the body's own plasmin breaks down fibrin as the vein heals",
                          "It turns plasminogen into plasmin, which breaks the clot apart over the next several days or weeks",
                          "It stops platelets from sticking together, so the existing clot loosens and is carried away in the blood",
                          "It breaks down the fibrin meshwork directly, which is why bleeding is the main concern with it"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Anticoagulants prevent a clot from forming or extending but have no direct effect on an existing clot. Removal is done by fibrinolysis once the vessel has healed, when tPA and uPA convert plasminogen to plasmin, which breaks down fibrin. Incorrect: Converting plasminogen to plasmin is what tPA and uPA do; heparin instead activates antithrombin to inactivate thrombin and factor Xa, and it does not lyse clots. Blocking platelet sticking is the antiplatelet mechanism, not heparin's.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "The nurse on a surgical unit reviews four clients receiving anticoagulant or antiplatelet therapy. Which client should the nurse assess first?",
                      "options": [
                          "A client 3 hours after hip surgery with scant bright red staining on the dressing, heart rate 76, BP 128/78, and hemoglobin stable at 12.1 on daily labs",
                          "A client on warfarin with a therapeutic INR who reports gum bleeding when brushing with a hard-bristle toothbrush, heart rate 80, BP 124/76, hemoglobin stable",
                          "A client on clopidogrel with a new small forearm bruise and no other bleeding, heart rate 72, BP 118/70, and hemoglobin unchanged at 13.0 on daily labs",
                          "A client 5 days after knee surgery on enoxaparin with bright red dressing drainage for a day, heart rate 112, BP 118/72, and hemoglobin 12.4 down to 10.1"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Bright red dressing drainage that is expected hours after surgery is a bleeding concern 4-5 days out in a client on an anticoagulant. A sudden hemoglobin drop from a stable baseline suggests internal bleeding, and tachycardia (from fluid volume deficit) is the first vital sign change, appearing before hypotension, so a still-normal BP does not make this client less urgent. Incorrect: A small amount of bright red blood a few hours after surgery is expected, and the unchanged hemoglobin and normal vital signs make that client less urgent. Gum bleeding from a hard-bristle toothbrush and a small bruise are external bleeding findings to teach about, but neither client shows a trend that suggests internal bleeding.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse prepares to give enoxaparin to a pregnant client with a DVT and is also caring for a second client on a heparin infusion. Which actions are appropriate? Select all that apply.",
                      "options": [
                          "Leave the small air bubble in the prefilled syringe so the full dose is delivered",
                          "Rub the injection site after the dose to help the medication spread into the tissue",
                          "Choose a site with enough subcutaneous fat and rotate the sites between doses",
                          "Draw an aPTT before every enoxaparin dose to guide dose changes by protocol",
                          "Draw the heparin lab away from the infusion line, or stop and flush it first",
                          "Expect the heparin rate to be adjusted by protocol until labs are therapeutic"
                      ],
                      "answers": [
                          0,
                          2,
                          4,
                          5
                      ],
                      "rationale": "Correct: The air bubble is left in so the full dose is delivered, the site should have enough subcutaneous fat (enoxaparin is safe in pregnancy) and be rotated, and heparin labs (anti-Xa or aPTT, about every 6 hours) are drawn away from the infusion line, or after stopping and flushing, to avoid a diluted or contaminated result, with rate adjusted by protocol until therapeutic. Incorrect: Rubbing the site is not done after enoxaparin, and enoxaparin inactivates factor Xa only and needs no routine lab monitoring, so an aPTT before every dose is not required.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients are receiving heparin infusions. Client A, on day 6 for a pulmonary embolism, has a platelet count that fell from 240,000 to 82,000 and a new painful, swollen calf. Client B, on day 2 for a DVT, has a platelet count of 210,000 and a small bruise at an IV site. Both aPTT values are therapeutic. Which plan is most appropriate?",
                      "options": [
                          "Increase client A's heparin rate and recheck the aPTT, as a new clot suggests the dose is too low, and continue client B's infusion unchanged",
                          "Stop client A's heparin and notify the provider, anticipating argatroban; continue client B's heparin and keep monitoring platelets",
                          "Give client A protamine sulfate by slow IV push and continue the infusion at a lower rate; continue client B's infusion unchanged",
                          "Stop heparin for both clients and switch both to enoxaparin, which inactivates only factor Xa and not thrombin, to avoid platelet effects"
                      ],
                      "answer": 1,
                      "rationale": "Correct: The page's HIT rule is a platelet count below 100,000 with new thrombi forming on heparin, which fits client A: stop heparin immediately and switch to a non-heparin anticoagulant such as argatroban if anticoagulation is still needed. Client B's platelets are within the 150,000 to 400,000 range and a small bruise is a routine bleeding observation, so heparin continues with platelet monitoring. Incorrect: Increasing or continuing heparin in client A does the opposite of the page's HIT action. Protamine sulfate is the heparin antidote, but the page's action for HIT is to stop the heparin and switch drugs, not to give an antidote and continue the infusion. Enoxaparin shares the adverse effect of thrombocytopenia (including HIT) with heparin, so it is not the substitute, and stopping client B's heparin is not supported because client B shows no HIT findings.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client discharged on warfarin for a DVT is receiving enoxaparin injections for the first few days. The client says, \"I'll stop the injections after my first warfarin pill, and I'll avoid green vegetables completely.\" Which response is best?",
                      "options": [
                          "Warfarin acts within a few hours, so the injections can stop after the first pill; avoiding greens helps",
                          "Warfarin lasts only about a day, so the injections can stop soon; cut greens back to small amounts",
                          "Warfarin takes about a day to work, so the injections cover that gap; keep vitamin K intake consistent",
                          "Warfarin and enoxaparin are given together permanently; avoid vitamin K foods to keep the INR from rising too high"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Warfarin's onset is delayed about 24 hours, which is why a fast-acting anticoagulant such as enoxaparin is commonly used for bridging, and clients should keep vitamin K intake consistent because big swings, not the food itself, are the problem. Incorrect: Warfarin's duration is long (2-5 days), not about a day, and avoiding vitamin K foods entirely or cutting them back is not the teaching; it is also not given with enoxaparin permanently.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients take apixaban for atrial fibrillation. Client A drinks grapefruit juice daily, and Client B has just started St. John's wort for low mood. No coagulation labs are being drawn on either client. Which assessment is most accurate?",
                      "options": [
                          "Client A has reduced drug effect and a greater stroke risk; Client B has an increased risk of bleeding",
                          "Both are at increased bleeding risk, so a PT/INR should be drawn on each client now",
                          "Neither interaction matters, because apixaban is not processed by the CYP enzymes at all",
                          "Client A has increased bleeding risk; Client B has reduced drug effect and a thrombosis risk"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Apixaban is a CYP substrate, so grapefruit juice raises drug levels and bleeding risk, while St. John's wort decreases effectiveness, leaving Client B less protected against clotting. Routine coagulation monitoring is not needed, though liver function is monitored. Incorrect: Reversing the two interactions is the closest error, since grapefruit increases levels rather than reducing the effect, and a PT/INR is the warfarin lab, not routine for factor Xa inhibitors.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "After an MI, Client A is prescribed clopidogrel and also takes a proton pump inhibitor and a calcium channel blocker. Client B is prescribed ticagrelor and takes aspirin 325 mg daily. Which interpretation of these medication lists is correct?",
                      "options": [
                          "Client A's antiplatelet effect may be reduced; Client B has an increased risk of bleeding",
                          "Client A has an increased risk of bleeding; Client B's antiplatelet effect may be reduced",
                          "Neither list is a concern, because an ADP inhibitor plus aspirin is beneficial at any dose",
                          "Client B's list is a concern, but Client A's is fine because clopidogrel's effect is not changed by other medications"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Clopidogrel's effectiveness is reduced by PPIs, calcium channel blockers, and amiodarone, and ticagrelor carries a black box warning for increased bleeding with aspirin doses over 100 mg. Incorrect: Swapping the two problems misassigns them, since the concern for Client A is reduced effect rather than bleeding. The page also notes that recent evidence questions the added benefit of combining an ADP inhibitor with aspirin.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "The nurse is assigned three clients with leg problems. Client A is immobile after hip surgery with calf pain, warmth, redness, and mild swelling, and the other calf is normal. Client B's leg swelled suddenly to a massive size, with intense deep pain and a dusky blue color. Client C had a DVT months ago and now reports leg heaviness, itching, darkened skin, and a venous ulcer. Which decision is best?",
                      "options": [
                          "See Client A first, because warmth, redness, and swelling in one calf are the most dangerous findings of the three clients",
                          "See Client B first, because the leg veins may be nearly occluded, which can progress to gangrene or amputation",
                          "See Client C first, because a venous ulcer shows that a clot has already traveled to the lungs and blocked gas exchange",
                          "See Client B first, because the blue color means a pulmonary embolism has already occurred in the lungs"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Client B's sudden massive swelling, intense deep pain, and cyanosis suggest phlegmasia cerulea dolens, a true emergency in which major leg veins are totally or near-totally occluded and the leg can progress to gangrene or amputation. Incorrect: Client A has the classic DVT findings (pain, redness, warmth, swelling, compared with the other limb), which need anticoagulation but are less urgent. Client C's heaviness, itching, pigmentation, and ulcer fit post-thrombotic syndrome, a chronic result of venous hypertension and vein wall damage, not a clot in the lungs. Cyanosis here reflects venous occlusion in the limb; a pulmonary embolism is a clot lodged in the pulmonary circulation that blocks gas exchange.",
                      "topic": "Coagulation &amp; DVT",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-blood-cells-cbc",
          "label": "Blood Cells &amp; CBC Interpretation",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "A client with an infection has two CBCs drawn a day apart. Day 1: WBC 7,000 with neutrophils 55% and lymphocytes 30%. Day 2: WBC 14,000 with neutrophils 75% and lymphocytes 15%. A new nurse reports that the client's lymphocytes have fallen by half. Which interpretation is most accurate?",
                      "options": [
                          "Lymphocytes truly fell by half, so the client is losing immune cells as the infection worsens",
                          "The differential is unreliable once the total WBC count rises, because the five types no longer sum to 100%",
                          "Absolute lymphocytes are unchanged at 2,100; the share fell as the neutrophil-driven total WBC count grew",
                          "Lymphocytes are now 15% of 7,000, or 1,050, so the new total WBC count is not needed to convert the percentages"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Differential percentages are relative to each other and to the total. On day 1 lymphocytes are 30% of 7,000 = 2,100, and on day 2 they are 15% of 14,000 = 2,100, so the absolute count did not change while neutrophils rose from 3,850 to 10,500. The larger total WBC count signals a bigger inflammatory process, which is why the diff must always be read alongside the total. Incorrect: Saying lymphocytes fell by half reads the percentage alone; the page warns that a rising percentage in one type pushes another type's percentage down even when its absolute count has not changed. The five percentages still add up to 100% on each day, and converting a percentage to a count requires the total from the same draw, so applying day 2's 15% to day 1's 7,000 is meaningless.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse compares the differentials of three clients. Client A was injured in a crush accident yesterday and shows an increased proportion of bands relative to segs. Client B has had a viral illness for four days and has a high lymphocyte percentage. Client C has wheezing and chest tightness from an asthma-type reaction. Which interpretation of the rising cells is accurate?",
                      "options": [
                          "A: neutrophils, as the marrow releases extra bands; B: lymphocytes acting as active fighters; C: eosinophils",
                          "A: lymphocytes, as the marrow releases extra bands; B: neutrophils acting as active fighters; C: eosinophils",
                          "A: neutrophils, as the marrow releases extra bands; B: lymphocytes acting as memory cells; C: eosinophils",
                          "A: neutrophils, as the marrow releases extra bands; B: lymphocytes acting as active fighters; C: neutrophils"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Neutrophils rise with acute bacterial infection and trauma, and in the acute stage the marrow releases more immature bands than usual (a shift to the left). Lymphocytes rise with acute viral infection, where they act as active fighters, and eosinophils rise with allergic and asthma-type reactions (\"worms, wheezes, and weird diseases\"). Incorrect: Lymphocytes act as memory cells in chronic bacterial infection, not in a four-day viral illness, and neutrophils are the cells tied to trauma and acute bacterial infection rather than to viral illness. Calling a rise in bands lymphocytes reverses the shift to the left, and neutrophils are not the cell tied to asthma-type reactions; eosinophils are.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with an ANC of 800 after chemotherapy is admitted and feels well with no fever. The client's son, who has a cough, asks to visit, and the family has brought fresh flowers and a raw fruit and vegetable salad. Which nursing actions are appropriate? Select all that apply.",
                      "options": [
                          "Ask the son to postpone the visit until he is no longer ill or coughing",
                          "Keep the door of the client's hospital room shut during the stay",
                          "Allow the visit if the son sanitizes his hands first, as the client has no fever",
                          "Remove the fresh flowers from the room and explain the reason to visitors",
                          "Allow the raw salad and flowers; the client is eating well",
                          "Perform meticulous hand hygiene before every contact with the client"
                      ],
                      "answers": [
                          0,
                          1,
                          3,
                          5
                      ],
                      "rationale": "Correct: An ANC below 1,000 is neutropenia, and even a routine infection can become life-threatening, so the precautions apply whether or not the client feels well: avoid anyone who is sick, keep the door shut, no fresh flowers, avoid raw fruits/vegetables/grains, and meticulous hand hygiene. Incorrect: Allowing the ill son to visit after hand sanitizing misreads the absence of fever as safety; the precaution is to avoid contact with anyone sick. Allowing the raw salad ignores the raw fruit/vegetable/grain restriction, which does not depend on appetite.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "On day 3 of filgrastim after chemotherapy, a client reports a deep ache in the hips and low back. The client is afebrile, and the morning WBC is 24,000/mm3 (normal about 5,000 to 10,000). How should the nurse interpret these findings?",
                      "options": [
                          "Marrow failure, as the new deep ache means filgrastim is not working in the bone marrow",
                          "Uncontrolled infection, as a WBC of 24,000 in a client on filgrastim means bacterial invasion",
                          "Underdosing of filgrastim, as bone pain shows the marrow is not yet producing granulocytes",
                          "Known drug effects: the ache fits marrow stimulation, and the therapy can raise the WBC count"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Filgrastim promotes granulocyte proliferation, differentiation, and activation in the bone marrow, and its common adverse effect is bone pain, which makes sense given where these cells are made. It can also cause leukocytosis, so a high WBC in an afebrile client on the drug is consistent with the drug's known effect. Incorrect: Treating the leukocytosis as proof of infection overlooks that filgrastim itself can raise the WBC count; the client has no fever or other infection cue to compete with the known drug effect. Reading the ache as marrow failure or underdosing is also wrong, because bone pain is the expected sign of marrow activity, not of the drug failing.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 20-year-old college student with infectious mononucleosis (differential about 95% lymphocytes) says, \"My fever and sore throat are gone after ten days, so I can restart intramural football tomorrow. My roommate should also get the vaccine.\" Which response by the nurse is best?",
                      "options": [
                          "Return to football now that the fever has resolved, and have the roommate receive the vaccine",
                          "Avoid contact sports for 2 to 3 months (splenic rupture risk); no vaccine exists, so no sharing drinks",
                          "Start an antibiotic to shorten the illness, resume contact sports, and have the roommate get the vaccine",
                          "Avoid contact sports only while febrile; the roommate may share drinks, as no vaccine exists anyway"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Full resolution takes 2 to 3 months (the acute phase alone is about 2 to 3 weeks), and splenomegaly carries a splenic rupture risk, so contact sports are avoided during that recovery time. There is no vaccine or specific treatment, and spread is mainly through saliva, so not sharing food, drinks, or toothbrushes reduces risk. Incorrect: Resuming sports when the fever resolves confuses symptom relief with full recovery, and an antibiotic is not specific treatment; care is supportive with antipyretics, rest, and hydration. Limiting the restriction to the febrile period ignores the splenic rupture risk that persists during the 2 to 3 months of recovery, and sharing drinks is the kind of contact the page says to avoid.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 72-year-old retired chemical plant worker with long-term benzene exposure reports fatigue, easy bruising, and recurrent infections. Labs show Hgb 9.0 g/dL (male normal 14 to 18), WBC 2,800/mm3, and low platelets. He has no bone pain, his calcium is normal, and no monoclonal protein is found in serum or urine. Which condition is most likely and how is it confirmed?",
                      "options": [
                          "Multiple myeloma, confirmed by osteolytic lesions on skeletal X-ray films",
                          "Non-Hodgkin lymphoma, confirmed by Reed-Sternberg cells on biopsy",
                          "Myelodysplastic syndrome, confirmed by labs and bone marrow biopsy",
                          "Chronic myelocytic leukemia, supported by a high granulocyte count and splenomegaly"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Low counts across cell types (cytopenias) in an older adult with a benzene exposure history point to myelodysplastic syndrome, a bone marrow failure disorder; the anemia, infections, and bruising follow, and diagnosis is by labs and bone marrow biopsy. Incorrect: Multiple myeloma can also cause pancytopenia in older adults, but it would add bone pain, hypercalcemia, osteolytic lesions, and monoclonal protein, none of which are present. CML would show a high granulocyte count rather than leukopenia, and Reed-Sternberg cells are absent in non-Hodgkin lymphoma.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A is a 5-year-old with fever, bruising, and a sudden refusal to walk that developed over a few days. Client B is a 68-year-old with fatigue, weight loss, and recurrent infections, and abnormal counts were found on routine labs. Which pairing of leukemia types is most consistent?",
                      "options": [
                          "A: acute lymphocytic leukemia; B: chronic lymphocytic leukemia",
                          "A: acute lymphocytic leukemia; B: chronic myelocytic leukemia (CML)",
                          "A: acute myelocytic leukemia (AML); B: chronic lymphocytic leukemia",
                          "A: chronic lymphocytic leukemia; B: acute myelocytic leukemia"
                      ],
                      "answer": 0,
                      "rationale": "Correct: A sudden, stormy onset with bruising, fever, and refusal to walk in a young child fits acute leukemia, and acute lymphocytic leukemia is the most common childhood type (peak age 3 to 7). An insidious course found on routine labs, with recurrent infections (leukemic B cells do not make normal antibodies), in an older adult fits chronic lymphocytic leukemia, the most common leukemia in older adults. Incorrect: Chronic myelocytic leukemia typically starts at age 40 to 50 and features a high granulocyte count and splenomegaly, and acute myelocytic leukemia is primarily an adult disease.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients have painless lymph node enlargement, fever, night sweats, and weight loss. Client A, age 26, has a rubbery cervical node, and biopsy shows Reed-Sternberg cells. Client B, age 74, has itching and skin and GI involvement, with liver, spleen, and bone marrow already affected. Which statement best explains why Client B's outlook is less certain?",
                      "options": [
                          "Both clients have Hodgkin disease, and Client B's older age alone explains the less certain outlook",
                          "Client A's fever and night sweats occur only in Hodgkin disease, which marks it as more aggressive",
                          "Client B's extranodal involvement suggests Hodgkin disease, whose spread is unpredictable and often early",
                          "Client A's disease spreads predictably; B's picture fits non-Hodgkin lymphoma, with unpredictable spread"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Reed-Sternberg cells mark Hodgkin disease, which spreads in a predictable pattern and supports a relatively good prognosis. Client B's skin/GI (extranodal) involvement, itching, and early spread to the liver, spleen, and marrow fit non-Hodgkin lymphoma, whose unpredictable spread and later diagnosis make the outlook less certain. Incorrect: Fever, night sweats, weight loss, and painless nodes appear in both types, so they cannot separate the two clients, and Hodgkin disease is the one with predictable, not unpredictable, spread.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 70-year-old Black man with months of low back pain has elevated calcium and creatinine and pancytopenia. His wife asks why his calcium is high when he takes in no extra calcium. Which explanation and nursing action fit best?",
                      "options": [
                          "Pancytopenia releases stored calcium from marrow, so fluids should be restricted to spare the kidneys",
                          "Malignant plasma cells raise osteoclast activity, releasing bone calcium; ensure adequate hydration",
                          "Excess M protein increases calcium absorption from the gut, so hydration is unnecessary for now",
                          "Bence Jones protein in the urine pulls calcium from bone, so pain control should come before hydration"
                      ],
                      "answer": 1,
                      "rationale": "Correct: In multiple myeloma, malignant plasma cells increase osteoclast activity, breaking down bone and releasing stored calcium into the blood, which causes hypercalcemia; the elevated creatinine reflects kidney involvement, and the page directs the nurse to ensure adequate hydration. Incorrect: Pancytopenia reflects bone marrow depression, not calcium release, and restricting fluids contradicts the page's direction to ensure hydration. The calcium comes from bone breakdown, not from M protein absorbed from the gut; Bence Jones protein is a urine finding that supports the diagnosis, not the source of the calcium, and the page does not place pain control ahead of hydration.",
                      "topic": "Blood Cells &amp; CBC Interpretation",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-fluid-electrolytes",
          "label": "Fluid &amp; Electrolytes",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "An older adult with malnutrition tells the nurse, \"My total protein level is low because I haven't been eating enough meat.\" Which response best corrects this belief and explains what the result means for fluid movement?",
                      "options": [
                          "It reflects dietary protein intake, so a low value means oncotic pressure is rising to compensate for it",
                          "It reflects blood pressure at the capillary level, so a low value means less fluid is pushed out of vessels",
                          "It reflects albumin, globulin, and fibrinogen, so low values mean less fluid is pulled into plasma",
                          "It reflects albumin alone, so a low value means plasma water is being drawn into the cells instead"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Total protein (albumin, globulin, fibrinogen) is a measure of oncotic pressure, not of dietary protein intake, and oncotic pressure falls with age and malnutrition, so less fluid is pulled from the interstitial space into the plasma. Incorrect: Capillary blood pressure drives hydrostatic pressure, which pushes fluid out of vessels; it is a different force from the colloid pull that total protein reflects, and the lab value does not describe it.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with a history of polydipsia drinks several liters of water in a few hours and becomes confused and anorexic. Serum sodium is 126. Which analysis of what is happening at the cell membrane is accurate?",
                      "options": [
                          "Water moves toward the higher solute concentration inside cells, so brain cells swell and confusion occurs",
                          "Water moves toward the higher solute concentration in the plasma, so brain cells shrink and sodium rises",
                          "Sodium diffuses from low to high concentration into the cells, so brain cells swell and thirst increases",
                          "Sodium diffuses from high to low concentration out of the cells, so brain cells shrink and become irritable"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Osmosis moves water from low solute concentration toward high solute concentration, and in hyponatremia from excess water the cells swell as water shifts in; brain cells are especially sensitive, producing confusion and altered LOC. Incorrect: Brain cells shrinking as water shifts out is the hypernatremia picture, and a rising sodium does not fit water intoxication. Sodium moving from low to high concentration reverses the direction of diffusion (solutes move from high to low), and sodium leaving the cells so that they shrink describes hypernatremia, not water intoxication.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients are admitted with sodium 128 and confusion. Client A has increased blood pressure, weight gain, a bounding pulse, and increased urine specific gravity. Client B has decreased blood pressure, tachycardia, dry skin, weight loss, and decreased urine specific gravity. Which plan is most appropriate?",
                      "options": [
                          "Give normal saline to both clients, since both have the same sodium level and CNS symptoms",
                          "Give normal saline to Client A and restrict fluids for Client B to avoid worsening the confusion",
                          "Restrict fluids for both clients until the sodium level returns to the normal range",
                          "Restrict fluids for Client A; give sodium replacement to Client B and withhold diuretics"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Client A shows dilutional hyponatremia (too much water, hypervolemic), treated with fluid restriction; Client B shows depletional hyponatremia (actual sodium and fluid loss, hypovolemic), treated with sodium replacement while diuretics are withheld. Incorrect: Giving normal saline to both treats the matching CNS symptoms and sodium number instead of the opposite fluid pictures, and would add volume to a client who is already hypervolemic.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A has had hyponatremia for five days and is confused. Client B has hypernatremia from heat stroke with altered LOC and a seizure. Client B's spouse asks why the team will not bring the sodium to normal as fast as possible. Which statement by the nurse is accurate?",
                      "options": [
                          "Client B is corrected quickly given the seizure, while Client A is corrected gradually to limit the risk of osmotic demyelination syndrome",
                          "Both are corrected gradually over about 48 hours with frequent labs; too fast risks osmotic demyelination in Client A and cerebral edema in Client B",
                          "Both are corrected gradually over about 48 hours with frequent labs; too fast risks cerebral edema in Client A and osmotic demyelination in Client B",
                          "Client A can be corrected quickly once it has lasted over 48 hours, while Client B is corrected gradually to limit the risk of cerebral edema"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Sodium imbalances are corrected slowly in either direction, typically over about 48 hours with frequent lab monitoring; correcting hyponatremia too fast, especially after more than 48 hours, causes brain dehydration and osmotic demyelination syndrome, while correcting hypernatremia too fast risks cerebral edema. Incorrect: A long duration of hyponatremia makes fast correction more dangerous, not safer, so Client A cannot be corrected quickly. Seizure severity does not change the pace for Client B, because either direction is corrected gradually. Attaching cerebral edema to Client A and osmotic demyelination to Client B flips the two risks.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with metabolic alkalosis has a potassium level of 3.1. The client eats a normal diet and has had no vomiting, diarrhea, or diuretic use. Which explanation and priority assessment fit best?",
                      "options": [
                          "Potassium is leaking from injured cells; monitor for peaked T waves and abdominal cramping on the ECG",
                          "Alkalosis caused the kidneys to excrete potassium; monitor for diarrhea and abdominal cramping closely",
                          "Alkalosis shifted potassium into the cells; monitor for cardiac rhythm disturbances and muscle weakness",
                          "Dietary intake is too low to meet needs; monitor for decreased urine output and rising potassium levels"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Alkalosis shifts potassium from the extracellular into the intracellular space, lowering the serum level without any loss from the body, and hypokalemia is most dangerous for cardiac rhythm disturbances (potentially lethal) along with muscle weakness. Incorrect: Peaked T waves and release from injured cells describe hyperkalemia, the opposite problem, and no cell injury is present. Dietary intake alone is rarely the cause, and the client's normal diet argues against it. The kidneys are the main route of potassium loss, but alkalosis is linked in this course to a shift of potassium into cells, not to renal excretion, and diarrhea and abdominal cramping are hyperkalemia signs.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with a new ileostomy has a potassium level of 2.8 and orders for both oral and IV potassium chloride through a peripheral line. Which nursing actions are appropriate? Select all that apply.",
                      "options": [
                          "Confirm that urine output is documented before hanging the infusion",
                          "Keep the infusion rate at or below 10 mEq/hr on this IV line",
                          "Raise the peripheral rate to 20 mEq/hr if the rhythm worsens",
                          "Give a small undiluted IV push if ventricular ectopy develops during the infusion",
                          "Mix oral powder in juice or water and assess for nausea or vomiting",
                          "Continue telemetry monitoring for the entire length of the infusion"
                      ],
                      "answers": [
                          0,
                          1,
                          4,
                          5
                      ],
                      "rationale": "Correct: Documented urine output or functioning kidneys must be confirmed before IV potassium; the peripheral maximum is 10 mEq/hr; oral potassium should be diluted in water or juice with assessment for GI distress; and telemetry is needed during administration. Incorrect: 20 mEq/hr is the maximum only via a central line, and even in an emergency the correction speed cannot be increased. Undiluted IV potassium can never be pushed because it can cause ventricular fibrillation, a lethal rhythm.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with kidney disease has a potassium level of 6.4 with a new cardiac dysrhythmia. The client is also constipated, with absent bowel sounds and a suspected ileus. Which treatment decision is correct?",
                      "options": [
                          "Prepare D50 with regular insulin for a temporary shift; withhold Kayexalate given the ileus",
                          "Give Kayexalate rectally, which lowers potassium by 0.5 to 1 mEq/L within minutes of the dose",
                          "Give Kayexalate by mouth now and recheck the blood sugar five minutes after the dose is given",
                          "Prepare D50 with regular insulin, which permanently removes potassium from the body quickly"
                      ],
                      "answer": 0,
                      "rationale": "Correct: A dysrhythmia from hyperkalemia is urgent, and D50 with insulin temporarily shifts potassium from outside to inside cells for a fast fix; Kayexalate works over about 4 to 6 hours and is only for normal bowel function because of the risk of obstruction and intestinal necrosis. Incorrect: Rectal Kayexalate is still the wrong choice with an ileus, and its effect is far too slow for an emergent rhythm problem. Insulin with dextrose does not remove potassium; the shift is temporary.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A has alcohol use disorder and pancreatitis, with tremors, hyperactive reflexes, and rapid eye movements. Client B is an elderly client with chronic renal failure who has been taking magnesium sulfate as a laxative and is now lethargic, floppy, and flushed, with decreased reflexes. Which plan is appropriate?",
                      "options": [
                          "Give magnesium to both clients, since both have abnormal muscle findings",
                          "Replace magnesium for Client B; consider dialysis for Client A because of the hyperactive reflexes",
                          "Hold magnesium for both clients until potassium is rechecked, since the two are linked",
                          "Replace magnesium for Client A; stop magnesium intake for Client B, with dialysis as an option"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Client A has the overactive-muscle picture of hypomagnesemia (tremors, hyperactive reflexes, nystagmus) and needs replacement; Client B has the opposite picture of hypermagnesemia from intake with renal failure, so intake is stopped and dialysis can remove the excess. Incorrect: Giving magnesium to both treats muscle abnormalities as one problem, when low magnesium causes overactive muscles and high magnesium causes lethargy and floppiness, and it would worsen Client B's excess. Replacing magnesium for Client B and dialysis for Client A reverses the plan, since dialysis is for removing excess magnesium (Client B), not for treating a low level. Magnesium and potassium are linked, but nothing in this course supports holding magnesium for both clients until potassium is rechecked.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client the day after thyroid surgery reports numbness around the mouth and tingling in the fingers. Which finding and next step are best?",
                      "options": [
                          "Calcium is likely high, so push fluids to 3 to 4 L per day and monitor urine output",
                          "Calcium is likely low, so monitor closely and assess for tetany and laryngeal spasm",
                          "Phosphate is likely high, so start calcium-based binders and plan for hemodialysis",
                          "Calcium is likely low, so no further monitoring is needed until the next routine lab"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Calcium can drop suddenly after thyroid or parathyroid surgery, and numbness and tingling are signs of low calcium (increased neuromuscular excitability), so the nurse monitors closely and assesses for tetany, laryngeal spasm, and hyperactive reflexes. Incorrect: Waiting for the next routine lab contradicts the instruction to monitor closely after this surgery, even though the calcium-is-low reading is right. Hypercalcemia acts as a sedative (fatigue, lethargy, confusion), and hydration is its treatment, so it does not fit numbness and tingling. High phosphate is usually asymptomatic on its own, and any paresthesia comes from the accompanying low calcium, so binders and dialysis do not address this client's finding.",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A is severely malnourished, has just started aggressive nutrition, and develops tremors and confusion. Client B has kidney failure, a phosphorus of 6.2, muscle spasms, and tetany. Which analysis is correct?",
                      "options": [
                          "Client A has high phosphate from re-feeding; Client B's tetany comes directly from high phosphate levels",
                          "Client A has low phosphate from re-feeding and needs faster nutrition; Client B needs phosphate replacement",
                          "Client A has low phosphate from re-feeding, so slow the nutrition; Client B's tetany reflects low calcium",
                          "Client A has low calcium from re-feeding and needs IV calcium; Client B's high phosphate causes the spasms"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Re-feeding syndrome, from reintroducing nutrition too fast in a severely malnourished client, causes a critically low phosphate, so nutrition is introduced slowly; hyperphosphatemia is usually asymptomatic, and spasms and tetany come from the accompanying low calcium because of the inverse relationship. Incorrect: Giving phosphate to Client B would worsen the problem, since high phosphate is already present and it is the treatment target (calcium-based binders or hemodialysis in renal failure).",
                      "topic": "Fluid &amp; Electrolytes",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-pain-seizures",
          "label": "Pain &amp; Seizures",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "A client stubs a toe and instantly feels sharp, well-localized pain, followed minutes later by a dull, burning ache. Rubbing the toe noticeably eases the pain. Which explanation fits both observations?",
                      "options": [
                          "C fibers carried the sharp pain, and rubbing activates those same C fibers to close the gate on A-delta input from the toe",
                          "A-delta fibers carried the sharp pain, and rubbing activates large A-beta fibers that close the gate on small fibers",
                          "A-delta fibers carried the dull ache, and rubbing activates A-delta fibers to open the gate to the cortex",
                          "C fibers carried the sharp pain, and rubbing blocks large A-beta fibers from reaching the spinal cord gate"
                      ],
                      "answer": 1,
                      "rationale": "Correct: A-delta fibers transmit sharp, well-localized, fast pain, while C fibers carry the later dull, aching, burning pain. Per gate control theory, touch or massage stimulates large-diameter fibers (A-alpha, A-beta) and closes the gate on signals traveling through the smaller A-delta/C fibers. Incorrect: Crediting C fibers with the sharp pain reverses the roles of the two fiber types, and having C fibers close their own gate misstates the mechanism, since the gate is closed by the larger fibers.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client reports burning, electric-shock pain along the left torso for 8 months since a shingles rash healed, with patchy numbness. Ibuprofen has not helped. Vital signs are normal and the client appears calm. Which interpretation and plan best fit?",
                      "options": [
                          "Somatic nociceptive pain from skin receptors; the ibuprofen failure means the dose should be raised or changed to a more potent NSAID",
                          "Visceral nociceptive pain; diffuse, deep qualities suggest an organ source that needs a concurrent antiemetic",
                          "Acute pain with autonomic activation; the normal vital signs suggest the client is overstating the pain",
                          "Neuropathic pain, which often resists usual analgesics; gabapentin or pregabalin is a reasonable adjunct"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Burning, shooting, electric-shock quality with numbness after a nerve injury such as postherpetic neuralgia is neuropathic pain, which often does not respond to usual pain medications; gabapentin and pregabalin are anticonvulsants used for neuropathic pain. Incorrect: Normal vital signs do not mean the pain is overstated, because chronic pain does not produce the same autonomic (heart rate, blood pressure, sweating) response as acute pain, and pain is whatever the client says it is; escalating the NSAID treats the wrong pain type.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with osteoarthritis and a prior GI ulcer is switched from naproxen to celecoxib and says, \"Now I can take this for years without worrying about my stomach or my heart.\" Which response is most accurate?",
                      "options": [
                          "Celecoxib blocks COX-1 and COX-2 equally, so stomach risk is unchanged but kidney strain is lower than with naproxen",
                          "Celecoxib blocks only COX-1, which protects the stomach, and adds an aspirin-like antiplatelet effect that guards the heart",
                          "Celecoxib blocks only COX-2, so GI ulcer risk is lower but not zero, and cardiovascular thrombotic risk is higher",
                          "Celecoxib blocks only COX-2, so both GI and cardiovascular risks fall well below those seen with naproxen"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Celecoxib is a selective COX-2 inhibitor that preserves COX-1's gastric and platelet protection, giving less GI toxicity (not zero) but a higher risk of cardiovascular thrombotic events such as heart attack and stroke. Incorrect: Saying both risks fall is the closest distractor, but it ignores the cardiovascular trade-off; NSAIDs other than aspirin also lack irreversible antiplatelet effects, and COX-1 is the enzyme whose blockade causes GI and bleeding problems.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 58-year-old with chronic alcohol use takes hydrocodone-acetaminophen (Norco) as prescribed and adds extra Tylenol for headaches. The nurse totals 3,000 mg of acetaminophen in 24 hours. The client says, \"That is under the 4-gram limit, and Norco does not count.\" How should the nurse respond?",
                      "options": [
                          "The total exceeds the 2,000 mg limit for chronic alcohol use, and Norco counts toward it; assess for jaundice",
                          "The total is under the 4 gram adult limit, so no change is needed; combination products are tracked separately from Tylenol",
                          "The total exceeds the safe limit, but only the extra Tylenol counts since Norco is classified as an opioid combination product",
                          "The total is acceptable, as chronic alcohol use raises glutathione stores that detoxify the toxic metabolite"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Patients with chronic alcohol use or liver disease should not exceed 2,000 mg/24 hours, and combination products such as Percocet, Norco, and Lortab count toward the total; the nurse watches for jaundice and elevated LFTs because overdose depletes glutathione and allows hepatic necrosis. Incorrect: Applying the 4 gram adult limit is the closest distractor, but it is the limit for healthy adults, not for this client, and glutathione is depleted, not boosted, by overdose.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A 78-year-old with no prior opioid exposure receives a first oral morphine dose after surgery. One hour later the respiratory rate is 8/min, and the client is drowsy and arouses only with significant physical stimulation. Pain is now rated 2 out of 10. Which action is most appropriate?",
                      "options": [
                          "Give the next dose as ordered, since drowsiness after a first dose diminishes with continued use",
                          "Keep stimulating and monitoring, and request a 25 to 50 percent reduction in the next dose, keeping the oral route",
                          "Document a morphine allergy and switch to another morphine-like opioid, since respiratory depression signals hypersensitivity",
                          "Reduce the next dose by 25 to 50 percent and change to the IV route so the response is more predictable"
                      ],
                      "answer": 1,
                      "rationale": "Correct: A respiratory rate below 10 needs assessment of sedation level and physical stimulation; if significant stimulation is needed to arouse the client, the next dose is reduced about 25 to 50 percent. Opioid-naive clients have an exaggerated response, so PO is favored over IV unless severe pain needs rapid control, and pain here is only 2 out of 10. Incorrect: Giving the dose unchanged cites the true fact that initial drowsiness diminishes with continued use, but that does not apply when the respiratory rate is 8 and arousal is difficult; respiratory depression is the expected major risk of any opioid, not a sign of hypersensitivity, and a morphine-like substitute would not remove it. Switching to the IV route is not justified when pain is controlled, because opioid-naive clients are better started on PO.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with severe pain has been receiving morphine 4 mg IV. The new order reads hydromorphone (Dilaudid) 4 mg IV. What should the nurse do before giving it?",
                      "options": [
                          "Give it as written, since hydromorphone and morphine are dosed milligram for milligram by the IV route in practice",
                          "Convert the dose to micrograms, since hydromorphone is dosed like fentanyl and the order is mislabeled",
                          "Reduce the dose to 0.1 mg, since hydromorphone is about 100 times as potent as morphine by the IV route",
                          "Clarify the order, since 4 mg of hydromorphone equals about 28 mg of IV morphine, far above the usual dose"
                      ],
                      "answer": 3,
                      "rationale": "Correct: One mg of IV hydromorphone is roughly 7 mg of IV morphine (typical doses 0.2 to 1 mg), so 4 mg is about 28 mg of morphine, a likely order error in a high-alert drug that needs clarification before administration. Incorrect: The 100-times relationship belongs to fentanyl (0.1 mg IV fentanyl is about 10 mg IV morphine), which is dosed in micrograms; hydromorphone is not.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client found unresponsive after heroin use is given naloxone IV, and respirations improve from 4 to 16/min. Forty minutes later the client is sedated again with respirations of 6/min. What is the best interpretation and action?",
                      "options": [
                          "Naloxone itself depresses respirations at later times, so it should be stopped and ventilation supported alone",
                          "Pulmonary edema from abrupt reversal has developed, so all further naloxone doses should be withheld",
                          "Naloxone has a short half-life, so its reversal has worn off; repeat dosing or a continuous infusion is needed",
                          "Reversal was only partial, as with gabapentin overdose, so the first dose should be repeated just once"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Naloxone has a rapid onset but a short half-life, so repeat dosing or a drip is often needed to sustain reversal of opioid-induced respiratory depression; the nurse should also watch for withdrawal, blood pressure changes, dysrhythmias, and abrupt return of pain. Incorrect: Naloxone does not cause respiratory depression, so stopping it would leave the client unprotected; pulmonary edema is a possible adverse effect of abrupt reversal, but recurrent sedation with slow respirations points to wearing off, and the course material describes only partial naloxone reversal for gabapentin or pregabalin overdose, not heroin.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse is teaching a client with epilepsy about factors that affect the seizure threshold. Which client statements show correct understanding? Select all that apply.",
                      "options": [
                          "A glass of wine with dinner is fine, since alcohol raises my seizure threshold",
                          "Missing a dose of my medication while traveling can bring on a seizure",
                          "Tramadol for pain is worth mentioning to my provider, since it can lower my threshold",
                          "Being sick or under stress does not change my seizure risk as long as I take my pills",
                          "Getting regular, adequate sleep helps keep my seizure threshold higher",
                          "My menstrual period can make a seizure more likely, so I watch for changes then"
                      ],
                      "answers": [
                          1,
                          2,
                          4,
                          5
                      ],
                      "rationale": "Correct: Missed medication doses, tramadol, and menstruation all lower the seizure threshold, while adequate sleep (along with taking AEDs as prescribed) raises it, so these four statements show correct understanding. Incorrect: Alcohol lowers the seizure threshold rather than raising it, and illness and stress also lower it, so taking medication on schedule does not cancel their effect on seizure risk.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A hospitalized client with epilepsy has a tonic-clonic seizure that stops after 2 minutes, but another begins within five minutes, then a third, and the client has not regained consciousness between them. A student says this is not status epilepticus since no single seizure lasted 30 minutes. What is the nurse's best response?",
                      "options": [
                          "It is status epilepticus as a series without recovery; protect the airway, get IV access for a benzodiazepine, check glucose",
                          "It is a single focal seizure progressing to generalized, so observe only, since most seizures stop within about 2 minutes on their own",
                          "It becomes status epilepticus only when one seizure reaches 30 minutes, so medication should be held until that time passes",
                          "It qualifies as status epilepticus, but an oral AED should be given first, since benzodiazepines are reserved for outpatients"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Status epilepticus includes a series of seizures without a postictal recovery period, not only a single seizure of 30 minutes or more; it can progress to respiratory arrest, hypoxia, brain damage, and death. Airway protection is the top priority, IV access allows rapid IV benzodiazepines (the inpatient gold standard), and glucose should be checked because hypoglycemia is a common cause. Incorrect: Waiting for 30 minutes applies the single-seizure criterion only, and the fact that most seizures stop on their own within about 2 minutes does not cover repeated seizures without recovery.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who has been seizure-free for 18 months on one AED reports feeling more depressed since starting it and says, \"I'm cured, so I'm stopping all my pills tomorrow.\" Which response is best?",
                      "options": [
                          "After 18 months seizure-free the pill can safely be stopped, and the mood changes should resolve within a few days",
                          "Reduce the pill by one dose each week without calling the provider, as tapering is needed only with multiple AEDs",
                          "Quitting abruptly will cause seizures; report the mood change now and ask the provider about a supervised taper",
                          "Add a second AED to the first, as combining drugs is the preferred way to manage new mood changes"
                      ],
                      "answer": 2,
                      "rationale": "Correct: AEDs must never be stopped abruptly because doing so will cause seizures, and they carry a black box warning for suicidal ideation, worsening depression, and mood changes, so the client needs clear follow-up steps; a provider may taper after 1 to 2 seizure-free years under medical supervision. Incorrect: Adding a second drug contradicts the monotherapy approach (a different single drug is tried instead), and self-tapering without supervision ignores that tapering is a provider decision.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client taking phenytoin (Dilantin) reports an unsteady gait and slurred speech, and the nurse notes involuntary eye movements. The client also has overgrown gums and increased facial hair. Which interpretation is correct?",
                      "options": [
                          "All findings are expected adverse effects of phenytoin, so no level is needed; reinforce good dental care for the gums and skin",
                          "The gait, speech, and eye findings suggest a subtherapeutic level below 10 mcg/mL, so the dose should be increased now",
                          "Gum overgrowth and hirsutism indicate toxicity above 20 mcg/mL, while the neurologic findings are expected adverse effects of the drug",
                          "Gait, speech, and eye findings suggest toxicity above 20 mcg/mL, so check the level; gum overgrowth and hirsutism are separate effects"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Nystagmus, ataxia, and dysarthria are phenytoin toxicity signs above the therapeutic range of about 10 to 20 mcg/mL, so a serum level is needed; gingival hyperplasia (prevented with good dental care) and hirsutism are distinctive adverse effects of the drug, not signs of toxicity. Incorrect: Calling every finding expected overlooks the toxicity signs, and reversing the two groups misassigns the distinctive adverse effects to toxicity.",
                      "topic": "Pain &amp; Seizures",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-dementia-depression-sud",
          "label": "Dementia, Depression &amp; SUD",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "A hospitalized 84-year-old with long-standing dementia and worsening kidney failure usually joins meals and conversation. Today he sleeps most of the day, speaks slowly, and seems apathetic, but he is not combative. His daughter says, \"This is just his dementia getting worse.\" Which nursing action is most appropriate?",
                      "options": [
                          "Agree with the daughter and continue the routine plan, since dementia is chronic and steadily progressive over time",
                          "Report possible hyperactive delirium and request a scheduled antipsychotic to keep him calm and safe",
                          "Report possible hypoactive delirium and ask that metabolic causes and his current medications be evaluated",
                          "Document expected progression and reassess in a few months, since dementia changes unfold slowly over years"
                      ],
                      "answer": 2,
                      "rationale": "Correct: A change over hours to days in a client with dementia (who is at higher risk for delirium), with sleepiness, slow speech, and apathy in the setting of kidney failure, fits hypoactive delirium. It is easy to miss because he is not combative, and treatment centers on finding and removing the cause. Incorrect: Attributing it to dementia progression ignores that dementia changes over years, not days. A scheduled antipsychotic is wrong twice over: he shows no hyperactive features, and antipsychotics are reserved for short-term use when a client endangers himself or staff.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse leads a family education session on dementia. Which statements by family members show accurate understanding? Select all that apply.",
                      "options": [
                          "My grandmother has late-onset Alzheimer's with no identified gene, so her brain changes must differ from the early-onset disease, which has a stronger genetic link.",
                          "My mother's plaques and tau tangles in the hippocampus probably began decades before her first symptoms.",
                          "My husband will notice his own memory decline first and will tell us when he needs help.",
                          "My uncle's decline after several strokes is managed mainly by controlling his diabetes, blood pressure, and smoking.",
                          "My brother's frontotemporal dementia began before age 60, so a tau gene mutation may be inherited and no treatment is available.",
                          "Mixed dementia is rare because a person can only have one type of dementia at a time."
                      ],
                      "answers": [
                          1,
                          3,
                          4
                      ],
                      "rationale": "Correct: Alzheimer plaques and tau tangles in the cortex and hippocampus develop decades before symptoms. Vascular dementia (cerebrovascular disease with hypoperfusion) is managed by preventing and controlling diabetes, hyperlipidemia, hypertension, and smoking. Frontotemporal dementia under age 60 is familial from tau-encoding gene mutations and has no treatment. Incorrect: Late-onset Alzheimer's lacks a specific identified gene but shows the same cellular changes as early-onset disease. Patients are often not cognitively aware of their decline; family or caregivers usually report it. Mixed dementia, more than one type at once, is common.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A has mild-moderate Alzheimer's disease, takes donepezil, often forgets doses, and takes ibuprofen daily for arthritis. Client B has moderate-severe Alzheimer's disease, takes donepezil, and has just been prescribed memantine. Which nursing plan is accurate?",
                      "options": [
                          "Client A: use adherence packaging (pill organizer) and avoid ibuprofen; Client B: watch for constipation as memantine is added to donepezil",
                          "Client A: continue ibuprofen for pain and give donepezil at bedtime; Client B: stop donepezil, since memantine replaces its action in the brain",
                          "Client A: skip adherence aids because donepezil needs no routine; Client B: expect bradycardia as the most common memantine effect",
                          "Client A: switch to memantine for early disease; Client B: give donepezil alone because it blocks excess glutamate stimulation"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Donepezil (mild-moderate disease) carries GI ulcer and bleed risk, so NSAIDs are avoided, and forgetful clients benefit from bubble packs or pill organizers. Memantine (moderate-severe disease) can be combined with a cholinesterase inhibitor, and its most common side effect is constipation. Incorrect: Memantine does not replace donepezil because they work by different mechanisms and can be combined. Bradycardia is a donepezil effect, not the main memantine effect, and it is memantine, not donepezil, that blocks excess glutamate/NMDA stimulation.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with generalized anxiety disorder started buspirone 3 days ago. She says it is not working and asks to take an extra dose whenever a surge of worry hits, or to be switched to daily lorazepam (Ativan) instead. Which response by the nurse is best?",
                      "options": [
                          "Extra buspirone doses are safe for surges because the drug has no abuse potential and works quickly when needed",
                          "Daily lorazepam is the better long-term option, since benzodiazepines treat the underlying anxiety disorder",
                          "Buspirone is mildly sedating, so an extra dose during a surge will calm you without much risk from other depressants",
                          "Buspirone has a slow onset and is not for breakthrough use; benzodiazepines only relieve symptoms short-term"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Buspirone has a slow onset and is not used for breakthrough anxiety, and benzodiazepines are short-term only because they stop symptoms temporarily without treating the underlying disorder. Incorrect: Lack of abuse potential is true of buspirone, but it does not make it a rescue drug; the slow onset does. Calling buspirone sedating is wrong, since it has no sedative effect, and daily benzodiazepines are not appropriate for ongoing treatment.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A is a combat veteran with nightmares, flashbacks, an exaggerated startle response, and avoidance of reminders. Client B is intensely afraid of humiliation at a presentation tomorrow morning and avoids most social events. Which treatment plan should the nurse expect?",
                      "options": [
                          "Client A: propranolol 1 to 2 hours before triggering reminders; Client B: EMDR combined with an SNRI to treat the fear of judgment",
                          "Client A: EMDR or exposure therapy with an SSRI or SNRI; Client B: CBT, an SSRI, and propranolol 1 to 2 hours before the event",
                          "Client A: clomipramine as first-line therapy for flashbacks; Client B: a daily benzodiazepine as primary treatment",
                          "Client A: CBT with buspirone for breakthrough episodes; Client B: deep brain stimulation before the presentation"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Client A has the hyperarousal, avoidance, and re-experiencing triad of PTSD, treated with trauma-focused psychotherapy (exposure therapy, CBT, EMDR) plus SSRIs/SNRIs. Client B has social anxiety disorder, treated with CBT plus an SSRI, and propranolol taken 1 to 2 hours before a triggering event. Incorrect: Propranolol is the performance-event drug for social anxiety, not PTSD, and EMDR is a PTSD/OCD therapy rather than the social anxiety plan. Clomipramine is a second-line OCD drug, and benzodiazepines are only for breakthrough symptoms.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with depression started fluoxetine 10 days ago, then stopped it yesterday when his insurance lapsed and he could not get a refill. He now has dizziness, shaking, anxiety, and feet that feel \"on fire.\" His partner is afraid this is serotonin syndrome because of the shaking. He is alert and oriented and takes no other medications. Which assessment and action is best?",
                      "options": [
                          "Suspect serotonin syndrome from the earlier doses and monitor for confusion over the next 72 hours",
                          "Reassure him that the symptoms mean the drug is finally working and encourage him to stay off it",
                          "Recognize SSRI withdrawal and contact the provider about a tapering plan and the refill cost barrier",
                          "Suspect an MAOI interaction and teach him to avoid tyramine-rich foods such as aged cheese and red wine"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Dizziness, shaking, anxiety, and hands or feet feeling \"on fire\" after stopping an SSRI abruptly are SSRI withdrawal syndrome; clients who cannot afford or access refills need a tapering plan with their provider, so the cost barrier needs addressing. Incorrect: Serotonin syndrome risk rises when two serotonergic drugs are taken together and shows altered mental status or confusion; he is alert and oriented and takes no other medications. Tyramine and MAOI concerns do not apply since he takes no MAOI, and withdrawal symptoms follow stopping the drug; they do not mean it is working.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with OCD has not responded to an SSRI, and clomipramine is ordered. On admission the nurse sees phenelzine on the home medication list, and the client says he still takes it \"on bad days.\" He also mentions a dry mouth. What is the nurse's priority action?",
                      "options": [
                          "Hold the clomipramine and notify the provider; combining a TCA with an MAOI can cause hypertensive crisis",
                          "Give the clomipramine and teach about dry mouth, which is an expected anticholinergic effect of TCAs",
                          "Give the clomipramine; TCAs are first-line for OCD and are the safest antidepressant class",
                          "Give the clomipramine with teaching to avoid tyramine-rich foods, as food is the only source of hypertensive crisis risk"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Phenelzine is an MAOI, and TCA plus MAOI together risks hypertensive crisis, with rapid blood pressure changes that can cause stroke or coma, so the dose is held and the provider notified. Incorrect: Dry mouth is a real anticholinergic effect of TCAs, but it is a red herring beside a life-threatening interaction. SSRIs, not TCAs, are first-line for OCD and the safest class (clomipramine is second-line), and hypertensive crisis also arises from MAOI plus TCA or meperidine, not only tyramine foods.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with panic disorder uses lorazepam (Ativan) as needed for breakthrough attacks. At a clinic visit she says she sometimes takes leftover opioid pain tablets at bedtime to help her sleep, has a glass of wine most evenings, mentions occasional forgetfulness, and asks for a refill with automatic renewals. Which finding is the nurse's greatest concern?",
                      "options": [
                          "Her occasional forgetfulness, a memory-loss effect that should be treated with flumazenil right away",
                          "The limit on tablets without automatic renewals, which should be replaced with ongoing refills for her",
                          "Her evening wine alone; the opioid tablets are not CNS depressants and add no risk to lorazepam",
                          "Opioids plus wine with lorazepam, CNS depressants together that risk fatal respiratory depression"
                      ],
                      "answer": 3,
                      "rationale": "Correct: A benzodiazepine must never be combined with another CNS depressant, and opioids and alcohol are both named depressants; together they risk fatal respiratory depression. Incorrect: Memory loss is a listed benzodiazepine adverse effect, but flumazenil is the antidote that reverses benzodiazepine effects, so it is not the response to forgetfulness. Short-term prescriptions with no automatic renewals are appropriate practice, so declining automatic renewals is correct. Wine is not the only risk, because opioids are also a named CNS depressant.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client entering treatment for methamphetamine use disorder says, \"I'm just weak, and my brain is permanently ruined, so recovery is pointless.\" Which response uses accurate information?",
                      "options": [
                          "Addiction does reflect a lack of self-control, but treatment can still help you build a better life",
                          "SUD is a disease with dopamine reward changes, and imaging shows they reverse with abstinence over time",
                          "The dopamine changes are permanent, so medication is the only realistic option for managing cravings",
                          "Dopamine transporter activity returns to normal within about a month of stopping use, so recovery is quick"
                      ],
                      "answer": 1,
                      "rationale": "Correct: SUD is a disease, not a personal failure, in which large dopamine surges lead to downregulation of normal dopamine pathways. Brain imaging shows the changes are reversible with abstinence, with methamphetamine users' transporter activity low at 1 month and returning toward normal by 14 months. Incorrect: Calling it a lack of self-control repeats the outdated misconception. The 1-month figure is the low point, not recovery, so claiming normalization within about a month misstates the timeline.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with heroin use disorder who has injected for years is entering treatment and is prescribed Suboxone. Her sister says, \"That's just swapping heroin for another full opioid like methadone, and the naloxone is what stops her cravings.\" Which response by the nurse is accurate?",
                      "options": [
                          "Buprenorphine is a full mu agonist like methadone, and naloxone adds to the craving control effect in the combination",
                          "Naloxone is the partial opioid agonist that blocks cravings, and buprenorphine alone is called Subutex in this medication",
                          "Buprenorphine is a partial agonist that blocks cravings; naloxone, an opioid antagonist, lowers abuse potential",
                          "Suboxone has higher abuse potential than methadone because it is given sublingually or buccally to the client"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Buprenorphine is a partial opioid agonist that blocks receptors and prevents cravings, while naloxone (Narcan) is an opioid antagonist; combining agonist and antagonist has lower abuse potential than methadone or buprenorphine alone. Incorrect: Methadone is the full synthetic opioid mu agonist, not buprenorphine, and naloxone is the antagonist, not the partial agonist. Suboxone does not have higher abuse potential than methadone; the sublingual or buccal combination has lower abuse potential than methadone or buprenorphine alone.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients were admitted about 24 hours after stopping their substance. Client A (heroin) has nausea, vomiting, cramps, diarrhea, goosebumps, and muscle aches, and is alert with stable vital signs. Client B (alcohol) has tremor, sweating, tachycardia, hypertension, fever, disorientation, and nystagmus with an unsteady gait. Which plan is most appropriate?",
                      "options": [
                          "See Client A first; opioid withdrawal is life-threatening and needs a benzodiazepine taper",
                          "See Client B first; alcohol withdrawal needs only supportive care, like opioid withdrawal, with no taper",
                          "See Client B first; give thiamine to prevent delirium tremens, with no benzodiazepine needed",
                          "See Client B first for a benzodiazepine taper and thiamine; give Client A supportive symptom care"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Client B shows delirium tremens features (tachycardia, hypertension, fever, disorientation) and Wernicke's signs (nystagmus, ataxia, confusion), which are life-threatening; treatment is a benzodiazepine taper to prevent seizures and lessen DTs, plus thiamine for Wernicke's. Client A has opioid withdrawal, miserable but not life-threatening, managed with supportive care and medication-assisted treatment. Incorrect: Benzodiazepine taper is for alcohol and benzodiazepine withdrawal, not opioid withdrawal. Thiamine prevents Wernicke's, not DTs, and does not replace the taper for seizures.",
                      "topic": "Dementia, Depression &amp; SUD",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-gi-gu-skin-hypersensitivity",
          "label": "GI, GU, Skin &amp; Hypersensitivity",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "A school nurse assesses two children. Child 1 has scaly red patches on the scalp with patchy hair loss. Child 2 has bleached patches across the upper back after a hot summer of heavy sweating, and the parent fears the child caught it from a classmate. Which plan and teaching are accurate?",
                      "options": [
                          "Oral antifungals for both children, with Child 2 kept home because the yeast spreads between classmates",
                          "Topical antifungal cream for Child 1 and oral antifungals for Child 2 to clear the yeast overgrowth",
                          "Oral antifungal for Child 1 for weeks; selenium sulfide body wash for Child 2, who is not contagious",
                          "Topical antifungal cream for both children, with Child 1 needing a 4 to 6 week course of the cream"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Tinea capitis of the scalp does not respond to topical antifungals and needs oral systemic antifungals twice daily for 4 to 6 weeks, while tinea versicolor is an overgrowth of yeast that normally lives on the skin, is not contagious, and is treated topically (including selenium sulfide shampoo used as a body wash). Incorrect: Giving topical cream for the scalp infection (the closest distractor) fails because topical antifungals are not effective for tinea capitis, and oral therapy for Child 2 overtreats a non-contagious condition that responds to topical care.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client receives IV amphotericin B with flucytosine for a systemic fungal infection after pretreatment with diphenhydramine and acetaminophen. Partway through the infusion, which finding should the nurse treat as drug toxicity rather than an expected infusion symptom?",
                      "options": [
                          "A new irregular rhythm on the cardiac monitor during infusion",
                          "Fever and headache that began partway through the infusion",
                          "Nausea that continues despite the pretreatment medications",
                          "Pain that began partway through the infusion, along with a headache"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Amphotericin B is a high-alert drug that can cause cardiac dysrhythmias (and is hard on the kidneys, so BUN and creatinine are monitored), which makes a new irregular rhythm on the monitor a toxicity finding; fever, pain, nausea, and headache are the expected infusion symptoms that pretreatment is meant to blunt. Incorrect: Fever and headache, nausea, and pain with headache are all listed infusion symptoms that pretreatment targets; the page lists them as infusion symptoms, not toxicity.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with a band of draining vesicles on the left chest, preceded by days of burning and tingling, asks about visitors. The client's 3-year-old grandson has never had chickenpox or the vaccine, and the client's sister had chickenpox as a child. The client also asks if the pain will be over once the rash clears. Which teaching is accurate?",
                      "options": [
                          "The grandson could catch shingles directly, so he should avoid contact until the vesicles have dried and crusted over",
                          "Contagion peaks during the early burning and tingling, and the pain should end once the rash clears in 2 to 3 weeks",
                          "Neither visitor is at risk, as shingles does not spread chickenpox, and the pain ends once the rash clears in 2 to 3 weeks",
                          "The grandson could catch chickenpox, not shingles, from weeping vesicles; the pain can persist after the rash clears"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Shingles is most contagious when the vesicles are weeping, and exposure can transmit chickenpox (not shingles) to someone who has never had chickenpox or the vaccine, which describes the grandson but not the sister who already had it. The rash clears in about 2 to 3 weeks, but postherpetic neuralgia (persistent pain in the same area) can follow, affecting about 13% of patients over 60. Incorrect: Telling the family the grandson could catch shingles misstates what is transmitted. The prodromal burning and tingling comes before the rash, and the weeping stage is the contagious one, so peak contagion is not early. Saying neither visitor is at risk ignores that the unvaccinated grandson can catch chickenpox, and assuming the pain ends with the rash ignores postherpetic neuralgia.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Two clients present to urgent care. Client A has a swollen, red, warm, tender lower leg after an insect bite, with no pus. Client B has a tender, warm thigh swelling with firm edges that feels fluid-filled and is draining pus. Which treatment plan matches the two presentations?",
                      "options": [
                          "Client A: incision and drainage plus antibiotics; Client B: oral antibiotics alone",
                          "Client A: oral antibiotics; Client B: incision and drainage plus oral or IV antibiotics",
                          "Client A and Client B: incision and drainage plus antibiotics, with both drainages cultured",
                          "Client A: topical bacitracin; Client B: oral antibiotics alone with warm compresses"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Client A fits cellulitis (swollen, red, warm, tender skin and surrounding tissue, often after a bite, common on the lower extremities) treated with oral systemic antibiotics, IV if severe; Client B fits an abscess (collection of pus, palpable borders, may fluctuate) treated with incision and drainage plus antibiotics. Incorrect: Reversing the plans or draining both fails because the page lists antibiotics, not incision and drainage, for cellulitis, and an abscess needs drainage in addition to antibiotics. Topical bacitracin is the page's impetigo treatment (honey-crusted vesicles in children), and the page lists no topical-only plan for cellulitis or an abscess.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse in a skin clinic reviews two clients. Client A has a small pearly, translucent nodule on the nose with a shiny border that has grown slowly. Client B is fair-skinned with blonde hair and two blistering sunburns as a teen, with an 8 mm back mole that recently changed color and has an uneven edge. Which statement guides prioritization?",
                      "options": [
                          "Client A first: basal cell carcinoma has a shiny border and is the most deadly skin cancer type",
                          "Equal urgency: basal cell carcinoma and melanoma both commonly metastasize to other organs",
                          "Client B first: color change, an uneven border, and a diameter over 6 mm meet ABCDE criteria",
                          "Client B can be measured and followed over time, as is done with a benign solar lentigo"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Client B has multiple ABCDE findings (color variation or change, diameter over 6 mm, uneven border, evolving) plus melanoma risk factors, and melanoma is the most deadly skin cancer, spreading both wide and deep. Incorrect: Basal cell carcinoma (Client A's pearly nodule) is the most common but least malignant skin cancer, slow-growing and usually does not metastasize, so it is not the first priority; the page ties watching and measuring over time to benign precancerous lesions such as actinic keratosis and solar lentigo, whereas Client B's lesion meets several ABCDE criteria.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A began frequent watery stools two days after starting an antibiotic, with no cramping or distention. Client B, an older adult, has had several days without a formed stool, then leaked watery stool with cramping, nausea, rectal pain, and a distended abdomen. A colleague wants to give both clients an antidiarrheal. Which plan is best?",
                      "options": [
                          "Client A: diphenoxylate with atropine, the over-the-counter antidiarrheal; Client B: assess for a fecal impaction",
                          "Client A: a Lactobacillus probiotic to replenish flora; Client B: loperamide, an antidiarrheal to slow the liquid stool",
                          "Both clients: an adsorbent antidiarrheal, activated charcoal, to coat the GI wall and bind the causative agent",
                          "Client A: a Lactobacillus probiotic to replenish flora; Client B: assess for fecal impaction, not an antidiarrheal"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Antibiotics can cause acute diarrhea by destroying normal gut flora, and Lactobacillus-based probiotics replenish that flora; Client B's days without a formed stool followed by leaking liquid stool, distention, cramping, nausea, and rectal pain point to fecal impaction, where liquid squeezes around the blockage, so the page's cause-based approach does not call for an antidiarrheal. Incorrect: Loperamide for Client B treats the leaking as diarrhea and does not address the impaction that is causing the continuous liquid stool. Diphenoxylate with atropine is prescription-only because of its anticholinergic effects, not over the counter. Activated charcoal for both treats an impaction as an ingested or infectious agent and ignores the antibiotic-related flora loss in Client A.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with acute diarrhea takes bismuth subsalicylate and calls the nurse, alarmed that the tongue and stools have turned dark, and asks whether the drug works like loperamide. Which client statement after teaching shows the best understanding?",
                      "options": [
                          "A dark tongue means the medicine is causing bleeding in my mouth, so I should stop it and call the clinic",
                          "The dark color is a toxic reaction, but the medicine is still safe to continue because it is sold over the counter",
                          "It works the same way as loperamide, by slowing my bowel movements, so it should be safe for me",
                          "The color is harmless, and it coats my gut rather than slowing it, but I will report bleeding or constipation"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Dark stools and tongue are a harmless effect (bismuth combining with sulfur in the mouth and GI tract); bismuth subsalicylate is an adsorbent that coats the GI wall and binds the causative agent rather than slowing motility, and as an aspirin derivative it can increase bleeding time and cause constipation, so those are the findings to report. Incorrect: Treating the dark color as bleeding confuses a harmless effect with a real risk; calling it a toxic reaction misstates a harmless effect, and over-the-counter status does not make it free of side effects; saying it works like loperamide misattributes the mechanism, since loperamide and diphenoxylate with atropine are the anti-motility drugs.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse reviews laxative orders for several clients. Which orders are appropriate? Select all that apply.",
                      "options": [
                          "Psyllium with a full glass of water for a client who needs a long-term daily regimen",
                          "Bisacodyl daily for several months for a client with chronic constipation",
                          "Docusate sodium to prevent constipation in a client who is taking opioid analgesics",
                          "Psyllium for a client with a suspected intestinal obstruction and abdominal distention",
                          "Polyethylene glycol for a client who needs a full-bowel cleanse before a procedure",
                          "Mineral oil by mouth or by enema for a client with hard stool or a fecal impaction"
                      ],
                      "answers": [
                          0,
                          2,
                          4,
                          5
                      ],
                      "rationale": "Correct: Bulk-forming psyllium is the only class safe for long-term use and must be taken with liberal water; docusate prevents opioid-induced constipation; polyethylene glycol is a potent full-bowel cleanse used before procedures; mineral oil lubricates the intestines (PO or PR) for hard stools and impaction. Incorrect: Bisacodyl is a stimulant, the class most likely to cause dependence, and only bulk-forming laxatives are appropriate for long-term use; psyllium is contraindicated with intestinal obstruction or impaction.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with a shellfish allergy says an earlier contrast study caused no problems. Minutes after a new contrast injection, the client develops hives, wheezing, and BP 72/40. The provider orders epinephrine. Which nurse action is correct?",
                      "options": [
                          "Give 1:10,000 epinephrine by IV push for the severe hypotension, with an antihistamine and glucocorticoid to follow it",
                          "Verify 1:1,000 epinephrine and route, expect an antihistamine and glucocorticoid too, and watch for returning symptoms",
                          "Give 1:1,000 epinephrine orally to limit arrhythmias, with an antihistamine and glucocorticoid to follow it afterward",
                          "Hold epinephrine and give an antihistamine, as the earlier uneventful contrast study makes anaphylaxis very unlikely"
                      ],
                      "answer": 1,
                      "rationale": "Correct: This is a systemic Type I reaction (anaphylaxis); a shellfish allergy is a red flag for contrast dye allergy, and a prior uneventful exposure does not rule it out because the first exposure sensitizes and the reaction comes on a later exposure. Anaphylaxis is treated with antihistamines, glucocorticoids, and epinephrine at a 1:1,000 concentration (cardiac arrest uses 1:10,000), and concentration and route must be double- and triple-checked; symptoms can return once epinephrine's short half-life wears off, so monitoring continues. Incorrect: The 1:10,000 option uses the cardiac arrest concentration, not the 1:1,000 anaphylaxis concentration, and the page warns that mixing up concentration and route can be fatal. Epinephrine is never given PO. Holding epinephrine for an antihistamine alone ignores that an antihistamine only blocks histamine's mediator activity and does not stop the underlying reaction, and the earlier uneventful study does not make anaphylaxis unlikely.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client 1 develops fever, chills, flushing, and back pain shortly after a transfusion begins. Client 2 has joint inflammation from circulating antigen-antibody complexes that deposited in tissue. Client 3 develops an itchy rash two days after wearing a nickel necklace. Which pairing of reaction type and mechanism is correct?",
                      "options": [
                          "Client 1 Type III tissue inflammation; Client 2 Type II antibody lysis; Client 3 Type IV T-cell reaction",
                          "Client 1 Type II antibody lysis; Client 2 Type III tissue inflammation; Client 3 Type I IgE reaction",
                          "Client 1 Type II antibody lysis; Client 2 Type III tissue inflammation; Client 3 Type IV T-cell reaction",
                          "Client 1 Type I IgE reaction; Client 2 Type III tissue inflammation; Client 3 Type IV T-cell reaction"
                      ],
                      "answer": 2,
                      "rationale": "Correct: A transfusion reaction is Type II (IgG/IgM bind a foreign cell's surface and lyse it, so the transfusion must be stopped immediately); circulating complexes depositing in tissue are Type III, where the resulting inflammation does the damage; a nickel (hapten) reaction peaking at 48 to 72 hours is Type IV, mediated by T lymphocytes without antibodies. Incorrect: Swapping Types II and III confuses a complex attacking a cell directly with a complex depositing in tissue, and calling the delayed nickel rash Type I ignores that IgE reactions are immediate, not delayed by days.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with cystitis takes an antibiotic and phenazopyridine. After two days the burning has resolved and the urine is reddish-orange. The client says, \"The pain is gone and my urine looks bloody, so I'll stop these pills.\" What is the nurse's best response?",
                      "options": [
                          "Red-orange urine is harmless and the drug only relieves pain; finish all the antibiotic",
                          "Bloody urine can mean the infection is worsening, so stop both pills and call the clinic",
                          "Phenazopyridine has treated the infection itself, so you may stop the antibiotic now",
                          "The orange color shows the antibiotic is working, so continue it only until symptoms are gone"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Phenazopyridine is a urinary analgesic that relieves pain but does not treat the infection, and it harmlessly turns urine reddish-orange; the antibiotic must be finished even after symptoms improve. Incorrect: Interpreting the color as hematuria misreads a known harmless side effect (hematuria is a real UTI sign, which makes it a tempting red herring), and treating pain relief as cure ignores that the analgesic masks symptoms while the infection is still being treated by the antibiotic.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A nurse assesses three clients. Client A, an older woman who had a vaginal delivery years ago, leaks urine when she sneezes or lifts and also cannot always reach the toilet after a sudden urge. Client B, a man, has a palpably full bladder and constant dribbling. Client C, a woman with a new UTI, began leaking urine suddenly two days ago. Which pairing of type and mechanism is correct?",
                      "options": [
                          "A: stress, lost pelvic floor support; B: overflow, bladder so full it leaks; C: transient, sudden and reversible with a UTI",
                          "A: mixed, stress and urge together; B: overflow, bladder so full it leaks; C: functional, toileting access barrier",
                          "A: mixed, stress and urge together; B: urge, overactive detrusor muscle; C: transient, sudden and reversible with a UTI",
                          "A: mixed, stress and urge together; B: overflow, bladder so full it leaks; C: transient, sudden and reversible with a UTI"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Client A has pressure-triggered leakage (sneezing, lifting), which the page often ties to childbirth or pelvic surgery and lost pelvic floor support, plus urge leakage, which is mixed incontinence, common in older females; Client B's overfilled bladder that leaks fits overflow incontinence; Client C's sudden leakage with a UTI fits transient incontinence, which is sudden and reversible. Incorrect: Calling Client A stress alone ignores the urge component. Urge incontinence is leakage immediately after a sudden urge from an overactive detrusor, which does not fit a palpably full, constantly dribbling bladder. Functional incontinence means the urinary system works fine but toileting is blocked, which does not explain a leak tied to a new UTI.",
                      "topic": "GI, GU, Skin &amp; Hypersensitivity",
                      "source": "quiz-bank"
                  }
              ]
          }
      },
      {
          "id": "review-stress-steroids",
          "label": "Stress &amp; Steroids",
          "sets": {
              "extraPractice": [
                  {
                      "stem": "Two healthy clients have resting heart rates of 62 and 80 beats per minute. When Client A climbs several flights of stairs, the heart rate rises to meet the extra demand. Which analysis is accurate?",
                      "options": [
                          "A resting rate of 62 falls outside normal, and only 80 represents the ideal homeostatic set point",
                          "Both resting rates can be normal set points, and the rising heart rate is allostasis at work here",
                          "Both resting rates are normal, but the rising heart rate shows that homeostasis has failed here",
                          "Both resting rates are normal, but the rising heart rate shows the set point has permanently shifted"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Each person's normal set point falls within a range, so two different resting rates can both be healthy, and allostasis is the dynamic process that can temporarily shift a response (such as a rising heart rate during exertion) to meet an anticipated demand. Incorrect: Calling the rising heart rate a failure of homeostasis misreads it, because the page describes allostasis as the body's attempt to get itself back to homeostasis; saying only the higher rate is normal ignores that normal set points fall within a range; and the page describes the shift as temporary, not a permanent change in the set point.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Before a first solo clinical shift, Student A says, \"I'm nervous but excited, and I feel sharper.\" Student B says, \"This feels bigger than anything I can handle, and I can't concentrate.\" Which analysis is accurate?",
                      "options": [
                          "Both students are experiencing eustress, because the shift is the same stressor for each of them",
                          "Student A is in distress, as any nervous feeling counts as negative stress on the body",
                          "Only Student B is experiencing stress; Student A's excitement means the stressor is absent",
                          "The shift is the stressor for both; A perceives it within coping ability and B beyond it"
                      ],
                      "answer": 3,
                      "rationale": "Correct: The shift is the stressor (the force causing stress) for both students; what differs is perceived coping ability. Eustress is positive stress perceived as within coping ability and sharpens focus, while distress is perceived as outside coping ability and decreases performance. Incorrect: Calling both students' stress eustress ignores that Student B perceives the shift as beyond coping ability and cannot concentrate; nervousness felt in a good way is the page's description of eustress, not distress; and Student A's excitement is still stress, since stress is the body's tension in response to a stressor and the shift is present for both.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client with a known anterior pituitary disorder cannot respond to CRH. The client is in the alarm stage after a car crash. Which prediction is most accurate?",
                      "options": [
                          "Catecholamine-driven signs such as tachycardia persist, while ACTH and cortisol release fails",
                          "All fight-or-flight signs are lost, since both pathways must pass through the anterior pituitary",
                          "Cortisol rises normally, but catecholamine release fails, since ACTH drives the adrenal medulla",
                          "Tachycardia persists as the SNS stimulates the adrenal cortex to release cortisol directly"
                      ],
                      "answer": 0,
                      "rationale": "Correct: CRH activates two parallel pathways. The sympathetic pathway (CRH to SNS to adrenal medulla to norepinephrine and epinephrine) does not use the anterior pituitary, so adrenergic effects like a faster heart rate persist, while the HPA axis (CRH to pituitary to ACTH to adrenal cortex to cortisol) is interrupted. Incorrect: Saying both pathways need the pituitary ignores that the adrenal medulla is driven by the SNS, and ACTH acts on the adrenal cortex, not the medulla.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Ten minutes after a tense confrontation with a family member is resolved, Client A's heart rate and blood pressure are falling, yet the client still feels jittery. Client B has lived with unrelenting poverty for years and now has labs showing low blood sugar and low stress-hormone levels, with a poor response to further stressors. Which comparison is accurate?",
                      "options": [
                          "Both clients show the same recovery pattern, since hormone levels in each of them are falling slowly back toward normal",
                          "Client A is moving toward exhaustion as supplies run low, while Client B has already shifted to a parasympathetic response",
                          "Client A's parasympathetic response is replacing the adrenergic one, while Client B's body can no longer sustain its response",
                          "Client A's jitteriness shows the adrenergic response is still fully dominant, while Client B's low blood sugar shows catecholamines are overproduced"
                      ],
                      "answer": 2,
                      "rationale": "Correct: For Client A the stressor has resolved, so the parasympathetic (cholinergic) response replaces the adrenergic one, lowering heart rate and blood pressure and improving immune function, sleep, and digestion, while hormone levels take time to fall and leave brief jitteriness. For Client B the stressor continues, so the body runs out of supplies, with low blood sugar and depleted norepinephrine, epinephrine, and cortisol, and it can no longer sustain the same response and moves toward exhaustion. Incorrect: Giving both clients the same recovery pattern ignores that only Client A's stressor has resolved; reversing the pairing places the exhaustion path on the client whose heart rate and blood pressure are falling; and calling Client A's response fully adrenergic or Client B's catecholamines overproduced misses that Client A's vital signs are falling and that Client B's stores are depleted, not excessive.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A works long hours but sleeps normally and functions well. Client B has been the sole caregiver for a sick spouse for four years and now has recurrent infections, tension headaches, and persistent sleep disturbance. Which comparison is accurate?",
                      "options": [
                          "Client A shows allostatic overload; Client B shows allostatic load that the body is still compensating for",
                          "Client A shows allostatic load; Client B shows overload, and atrophied lymph tissue raises infection risk",
                          "Both show allostatic overload, as chronic stress of any duration exhausts the HPA axis",
                          "Client A shows allostatic load; Client B also shows load, with infections from hypertrophied lymph tissue"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Allostatic load is the normal wear-and-tear demand of daily stress, which fits Client A; allostatic overload is chronic over- or under-activation beyond capacity that allows stress-induced disease to develop, which fits Client B, and the underused lymph tissue atrophies, raising infection risk. Incorrect: Calling Client B's state load that is still being compensated ignores that four years of unrelieved caregiving stress has produced physical signs of stress-induced disease; lymph tissue atrophies (not hypertrophies) in exhaustion, while the adrenal cortex is the structure that hypertrophies; and calling both overload ignores that Client A is coping normally.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client taking a corticosteroid long term reports thinner arms and legs, a rounder face, a larger abdomen, skin that tears with minor bumps, and rising glucose readings without any diet change. Which explanation best unifies these findings?",
                      "options": [
                          "Excess cortisol breaks down muscle and skin protein, moves fat to the face and trunk, and opposes insulin",
                          "Excess aldosterone retains sodium and water, and the fluid shifts mimic fat redistribution and skin fragility",
                          "Low cortisol from adrenal suppression leaves insulin acting unopposed on muscle and adipose tissue",
                          "Excess epinephrine inhibits insulin secretion, explaining the glucose rise but not the tissue changes"
                      ],
                      "answer": 0,
                      "rationale": "Correct: Excess cortisol breaks down muscle (wasting) and skin (tears more easily), redistributes fat from the extremities to the face and trunk (moon face, buffalo hump), and raises blood glucose by opposing insulin. Incorrect: Low cortisol would not raise glucose, since insulin unopposed would lower it; adrenal suppression is a long-term steroid effect, but it does not account for hyperglycemia or the protein and fat changes seen here.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A takes hydrocortisone replacement and has a serum cortisol result in the normal range. Client B takes dexamethasone and has a very low serum cortisol result. Which interpretation is accurate?",
                      "options": [
                          "Client A's normal result confirms the adrenal gland is producing cortisol, and B's low result is the drug lowering the assay",
                          "Both results reflect only each client's own adrenal production, as neither drug is detected by the assay",
                          "Client A's result reflects only the client's own production, while B's low value is dexamethasone being counted",
                          "Client A's result cannot show the gland's own output, while B's low result reflects only the client's own production"
                      ],
                      "answer": 3,
                      "rationale": "Correct: Hydrocortisone is biochemically identical to cortisol, so the assay cannot separate the drug from the client's own cortisol, while dexamethasone does not cross-react, so any cortisol measured in Client B is the client's own, and a very low value suggests the gland is producing little. Incorrect: Treating A's normal result as proof of adrenal output is the closest error, since the measured cortisol may be mostly the hydrocortisone being given.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client on long-term prednisone has a falling sodium and rising potassium despite normal kidney function. A second client on hydrocortisone at a similar dose has neither problem. What best explains the difference and what does the nurse anticipate?",
                      "options": [
                          "Prednisone damages the kidneys so sodium is wasted, and a higher prednisone dose is anticipated",
                          "Hydrocortisone lacks aldosterone-like activity that prednisone has, so fludrocortisone is added to hydrocortisone",
                          "Prednisone lacks the aldosterone-like activity hydrocortisone has; fludrocortisone may be added",
                          "Prednisone lacks aldosterone-like activity, and a switch to dexamethasone is anticipated to supply the missing effect"
                      ],
                      "answer": 2,
                      "rationale": "Correct: Hydrocortisone carries some aldosterone-like activity, but prednisone and dexamethasone do not, so salt wasting (low sodium, high potassium with working kidneys) can develop, and fludrocortisone, the aldosterone substitute, can be added to the glucocorticoid. Incorrect: Switching to dexamethasone would not help, since dexamethasone also lacks aldosterone activity; and the normal kidney function rules out kidney damage as the cause.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "Client A has heart failure and is starting a systemic corticosteroid today. Client B has taken the same drug for several years and reports fatigue, appetite loss, nausea, and muscle weakness. Which statement best prioritizes the concerns for these clients?",
                      "options": [
                          "Client A should be watched first for cataracts and osteoporosis, while Client B's symptoms are acute drug effects",
                          "Client A needs monitoring for fluid retention and hypertension, and Client B's symptoms fit suppressed adrenal production",
                          "Client A's main risk is suppressed adrenal hormone production, while Client B's symptoms are fluid retention from the drug",
                          "Client B's symptoms mean the drug should be stopped at once, and Client A's fluid retention is a long-term effect of the drug"
                      ],
                      "answer": 1,
                      "rationale": "Correct: Fluid retention and hypertension are acute corticosteroid effects and matter for a client with heart failure, while fatigue, appetite loss, nausea, and muscle weakness are the page's signs of suppressed adrenal hormone production, a long-term effect of months to years of use. Incorrect: Cataracts and osteoporosis are long-term effects, so they are not the first concern for a client just starting the drug; adrenal suppression develops with long-term use, and Client B's symptoms are listed under it, not under fluid retention; and long-term corticosteroids are never stopped abruptly because suppressed adrenal production can lead to adrenal crisis, which also makes the claim that fluid retention is long-term wrong.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  },
                  {
                      "stem": "A client who has taken prednisone daily for COPD for two years says, \"I feel great, and I have a fever today, so I plan to stop my pills.\" Which statements should the nurse include in teaching? Select all that apply.",
                      "options": [
                          "Stopping long-term steroids suddenly can cause adrenal crisis, so the dose is lowered gradually on a taper.",
                          "Feeling well means the adrenal glands are working again, so the dose can be dropped without a taper.",
                          "Report the illness promptly so the dose can be adjusted for the extra stress.",
                          "Illness is a reason to skip the medication until the fever resolves.",
                          "Check weight and blood glucose regularly, as both can increase with extended steroid use.",
                          "Fludrocortisone is added at the start of therapy for clients taking prednisone to replace its aldosterone-like effect."
                      ],
                      "answers": [
                          0,
                          2,
                          4
                      ],
                      "rationale": "Correct: Long-term steroids suppress the adrenal gland, so stopping abruptly can cause a life-threatening adrenal crisis and the dose is tapered; illness or major stress should be reported promptly so the dose can be adjusted; and weight and blood glucose should be monitored because both can increase with extended use. Incorrect: Feeling well does not mean the adrenal gland has recovered, since long-term use suppresses its own hormone production; skipping the drug during illness is the opposite of the page's teaching to report illness or major stress promptly so the dose can be adjusted; and fludrocortisone is used when salt wasting develops in clients on prednisone or dexamethasone, not added at the start of therapy.",
                      "topic": "Stress &amp; Steroids",
                      "source": "quiz-bank"
                  }
              ]
          }
      }
  ],

  TOPIC_ORDER: [
      "Pharmacology Foundations",
      "Cellular Adaptation, Infection &amp; Immunity",
      "Hypertension &amp; Hyperlipidemia (HTN/HLD)",
      "Diabetes &amp; Metabolic Syndrome",
      "Coagulation &amp; DVT",
      "Blood Cells &amp; CBC Interpretation",
      "Fluid &amp; Electrolytes",
      "Pain &amp; Seizures",
      "Dementia, Depression &amp; SUD",
      "GI, GU, Skin &amp; Hypersensitivity",
      "Stress &amp; Steroids"
  ]
};
