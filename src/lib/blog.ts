export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  content: string; // HTML string for simplicity
}

export const posts: Post[] = [
  {
    slug: "suspected-type-a-aortic-dissection",
    title:
      "Suspected Type A Aortic Dissection Mimicking Hypertensive Emergency: Bedside Echocardiographic Diagnosis in Resource-Limited Africa: a case report",
    date: "2026-01-05",
    author: "James Nelson Okema",
    excerpt:
      "A case report describing bedside transthoracic echocardiography recognition of suspected Stanford type A aortic dissection in a resource-limited African setting.",
    content: `
      <h2>When a “Hypertensive Emergency” Is Actually a Fatal Aortic Dissection</h2>

      <p class="lead">A case from frontline African emergency care.</p>

        <h2>“Is this more than hypertension?” — The Case</h2>
      <p>A 58-year-old man from rural Northern Uganda arrived with agonizing tearing central chest pain radiating to the interscapular region, diaphoresis, and dyspnea. He had a 10‑year history of poorly controlled hypertension.</p>

      <h2>Immediate worrying findings</h2>
      <ul>
        <li>30‑mmHg systolic difference between arms (210/115 mmHg right, 180/100 mmHg left)</li>
        <li>New soft early diastolic murmur along the left sternal border (consistent with aortic regurgitation)</li>
      </ul>

        <h2>First-line tests</h2>
        <h2>Electrocardiogram</h2>
      <ul>
        <li>Sinus rhythm, HR 96 bpm</li>
        <li>Mild nonspecific ST‑segment depressions (0.5–1.0 mm) in II, III, aVF, V4–V6</li>
        <li>Serial high‑sensitivity troponin I negative at baseline and 12 hours (&lt;0.04 ng/mL)</li>
      </ul>
      <div class="text-center my-4">
        <img src="/Blog1/ECG1.jpg" alt="ECG" class="mx-auto w-full max-w-lg" />
      </div>

        <h2>Chest radiography</h2>
      <ul>
        <li>Cardiomegaly (CTR 0.65)</li>
        <li>Mediastinal widening &gt; 8 cm at the aortic arch</li>
        <li>Unfolded aneurysmal aortic contour with clear lung fields</li>
      </ul>
      <div class="text-center my-4">
        <img src="/Blog1/Chestxray1.jpg" alt="Chest X-ray" class="mx-auto w-full max-w-lg" />
      </div>

        <h2>The game‑changer: bedside transthoracic echocardiography (TTE)</h2>
      <ul>
        <li>Aortic root 4.7 cm; ascending aorta 5.4 cm</li>
        <li>Visible intimal flap in ascending aorta (highly suggestive of Stanford type A dissection)</li>
        <li>Severe eccentric aortic regurgitation (vena contracta 0.7 cm)</li>
        <li>Mild circumferential pericardial effusion</li>
        <li>LV with moderate concentric hypertrophy and preserved EF (54%)</li>
      </ul>
      <div class="text-center my-4">
        <img src="/Blog1/ECHO1.jpg" alt="Echocardiography" class="mx-auto w-full max-w-2xl" />
      </div>

        <h2>Advanced imaging (speckle‑tracking)</h2>
      <p>Preserved global longitudinal strain (−28%) with mild diastolic dysfunction — supports chronic hypertensive substrate rather than acute ischemia.</p>
      <div class="flex flex-col md:flex-row gap-4 items-center justify-center my-4">
        <img src="/Blog1/SPEC2.png" alt="Speckle 1" class="w-full md:w-1/2 mx-auto" />
        <img src="/Blog1/Spec1.jpg" alt="Speckle 2" class="w-full md:w-1/2 mx-auto" />
      </div>

        <h2>Management — stabilize the aorta, not just the number</h2>
      <ul>
        <li>Heart rate control first: IV beta‑blockade to target HR ≈ 55–60 bpm</li>
        <li>Then controlled BP reduction: IV nicardipine titrated to SBP 120–130 mmHg</li>
        <li>Adequate analgesia to limit sympathetic drive</li>
        <li>Continuous cardiac monitoring and serial BP checks</li>
        <li>Urgent cardiothoracic surgical referral and transfer once stabilized</li>
      </ul>

      <p class="my-4">Within two hours the patient was stable (128/78 mmHg, HR 58 bpm) and transferred for definitive care; surgical outcome unavailable.</p>

        <h2>Take‑home lessons for resource‑limited EDs</h2>
      <ul>
        <li>Measure bilateral arm BP in every acute chest pain patient; a systolic difference ≥20 mmHg is highly suspicious for dissection.</li>
        <li>A new early diastolic murmur with chest pain suggests aortic root involvement and should raise immediate concern.</li>
        <li>Mediastinal widening on chest X‑ray in this context demands urgent bedside TTE when CTA is unavailable.</li>
        <li>Visualization of an intimal flap in a dilated ascending aorta on TTE plus the right clinical picture justifies urgent surgical referral even without CTA.</li>
        <li>Treat hypertension as a consequence: control HR first, then lower BP carefully as a bridge to surgery.</li>
      </ul>

      
    `,
  },
  {
    slug: "cardiac-tamponade-hypothyroidism-uganda",
    title: "When Slow Heartbeat Signals a Hidden Crisis: Cardiac Tamponade Masquerading as TB in Severe Hypothyroidism",
    date: "2026-01-12",
    author: "James Nelson Okema",
    excerpt: "Severe hypothyroidism can cause large pericardial effusion and tamponade that mimics TB; prompt drainage and cautious levothyroxine lead to recovery.",
    content: `
      <h2>When Slow Heartbeat Signals a Hidden Crisis: Cardiac Tamponade Masquerading as TB in Severe Hypothyroidism</h2>

      <p class="lead">Severe hypothyroidism rarely leads to life-threatening cardiac tamponade, but this case from Northern Uganda shows how it can mimic common infections like tuberculosis. Prompt diagnosis and treatment saved the patient.</p>

      <h2>Case Background</h2>
      <p>A 65-year-old woman presented with five months of worsening shortness of breath, leg swelling, and facial puffiness, ending in sudden chest pain. She had uncontrolled hypertension and diabetes but no fever or cough suggesting infection. In TB-endemic areas like Uganda, doctors often suspect tuberculosis first for fluid around the heart.</p>

      <p>Hypothyroidism affects 3-37% of patients with overt disease, causing slow building pericardial effusion. Tamponade is uncommon because the heart adapts gradually. This case stresses checking thyroid levels early.</p>

      <h2>Key Symptoms and Signs</h2>
      <ul>
        <li>Marked bradycardia (heart rate 42 bpm), unusual in tamponade which typically causes fast heartbeat.</li>
        <li>Elevated neck veins, muffled heart sounds, and pulsus paradoxus signaling heart compression.</li>
        <li>Woltman's sign: slow-relaxing ankle reflexes, a classic hypothyroidism clue.</li>
        <li>Puffy face, severe edema, and low-voltage on ECG.</li>
      </ul>

      <h2>Investigations</h2>
      <h2>ECG Findings</h2>
      <p>12-lead ECG showed sinus bradycardia (42 bpm) with low-voltage QRS complexes across limb and precordial leads, classic for large pericardial effusion.</p>
      <div class="flex flex-col md:flex-row gap-4 items-start justify-center my-4">
        <figure class="w-full md:w-1/2">
          <img src="/bog%203/ECG1.jpg" alt="Baseline ECG" class="w-full mx-auto" />
          <figcaption class="text-center text-sm text-muted-foreground mt-2">Baseline ECG</figcaption>
        </figure>
        <figure class="w-full md:w-1/2">
          <img src="/bog%203/ECG2.jpg" alt="Follow-up ECG after treatment" class="w-full mx-auto" />
          <figcaption class="text-center text-sm text-muted-foreground mt-2">Follow-up ECG after treatment</figcaption>
        </figure>
      </div>

      <h2>Chest X-ray (CXR)</h2>
      <p>Revealed cardiomegaly with a "water bottle" cardiac silhouette and small bilateral pleural effusions.</p>
      <div class="text-center my-4">
        <img src="/bog%203/CXR.jpg" alt="Chest X-ray" class="mx-auto w-full max-w-lg" />
      </div>

      <h2>Echocardiography</h2>
      <p>Transthoracic echo demonstrated large circumferential pericardial effusion (max 3.2 cm posterior separation), right ventricular diastolic collapse (&gt;30% of diastole), exaggerated respiratory variations in mitral/tricuspid inflows (&gt;30%/&gt;60%), dilated IVC (&lt;20% collapse), and mildly reduced LVEF (~40%) confirming early tamponade.</p>
      <div class="flex flex-col md:flex-row gap-4 items-center justify-center my-4">
        <img src="/bog%203/ECHO1.jpg" alt="Echo 1" class="w-full md:w-1/2 mx-auto" />
        <img src="/bog%203/ECHO2.jpg" alt="Echo 2" class="w-full md:w-1/2 mx-auto" />
      </div>

      <h2>Labs and Thyroid Tests</h2>
      <p>TSH 88.08 mIU/L (normal 0.4-4.0), free T4 4.0 pmol/L (9-22), positive anti-TPO antibodies confirming severe primary hypothyroidism. Anemia (Hb 10.2 g/dL), hyperglycemia noted.</p>

      <h2>Diagnostic Procedure</h2>
      <p>Echo-guided pericardiocentesis drained 520 mL clear, straw-colored fluid. Analysis: protein 4.2 g/dL (serum 7.0, ratio 0.6), low WBC (lymphocyte predominant), negative Gram stain/cultures/AFB/cytology, ADA &lt;5 U/L excluding TB.</p>

      <h2>Treatment and Recovery</h2>
      <p>Urgent drainage stabilized her immediately. Levothyroxine started low at 25 mcg/day, titrated up.</p>
      <table class="w-full text-sm border-collapse my-4">
        <thead>
          <tr>
            <th class="border px-2 py-1">Timepoint</th>
            <th class="border px-2 py-1">TSH (mIU/L)</th>
            <th class="border px-2 py-1">Free T4 (pmol/L)</th>
            <th class="border px-2 py-1">Dose (mcg/day)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border px-2 py-1">Admission</td><td class="border px-2 py-1">88.08</td><td class="border px-2 py-1">4.0</td><td class="border px-2 py-1">25</td></tr>
          <tr><td class="border px-2 py-1">4 weeks</td><td class="border px-2 py-1">22</td><td class="border px-2 py-1">10</td><td class="border px-2 py-1">37.5</td></tr>
          <tr><td class="border px-2 py-1">8 weeks</td><td class="border px-2 py-1">8</td><td class="border px-2 py-1">13</td><td class="border px-2 py-1">50</td></tr>
          <tr><td class="border px-2 py-1">12 weeks</td><td class="border px-2 py-1">2.1</td><td class="border px-2 py-1">16</td><td class="border px-2 py-1">50</td></tr>
        </tbody>
      </table>

      <p>Echo at 3 months: complete resolution; patient fully recovered.</p>

      <h2>Key Lessons</h2>
      <p>Test thyroid in unexplained effusions, especially with bradycardia/Woltman's sign/low-voltage ECG. Pericardiocentesis + cautious levothyroxine reverses this reversible crisis even in TB hotspots.</p>
    `,
  },
  {
    slug: "when-hypertensive-heart-disease-isnt-the-whole-story-ap-hcm",
    title: "When “Hypertensive Heart Disease” Isn’t the Whole Story: A Missed Apical HCM Diagnosis (and the ECG Clue That Can Save Time)",
    date: "2026-01-19",
    author: "James Nelson Okema",
    excerpt: "Apical hypertrophic cardiomyopathy (ApHCM) can be missed when long-standing hypertension biases diagnosis; the ECG clue of deep T-wave inversions without LVH voltage should prompt targeted echo.",
    content: `
      <h2>When “Hypertensive Heart Disease” Isn’t the Whole Story: A Missed Apical HCM Diagnosis (and the ECG Clue That Can Save Time)</h2>

      <p class="lead">A long history of hypertension can make clinicians (and patients) assume every cardiac symptom is “just the pressure.” This case shows how that assumption anchoring bias delayed recognition of apical hypertrophic cardiomyopathy (ApHCM) in a 60-year-old African man, until a classic ECG pattern prompted a deeper look with focused echocardiography.</p>

      <h2>Why this case matters</h2>
      <p>ApHCM is a less common subtype of hypertrophic cardiomyopathy, reported as roughly 5–10% of HCM cases worldwide, and it’s probably under-recognized in many African settings. In resource-limited environments where cardiac MRI may not be readily available, careful echocardiography (plus a sharp read of the ECG) can still make the diagnosis with high confidence.</p>

      <h2>The patient story (briefly)</h2>
      <p>A 60-year-old man with about 15 years of hypertension presented with one week of exertional dyspnea, fatigue, and intermittent palpitations without chest pain, syncope, orthopnea, or paroxysmal nocturnal dyspnea. He had previously been labelled with hypertensive heart disease, but prior echo measurements/images were unavailable, and the old label shaped ongoing treatment decisions.</p>

      <p>His medications at presentation included amlodipine, bisoprolol, losartan, telmisartan–hydrochlorothiazide, and clopidogrel though the reason for clopidogrel was undocumented and there was no history of coronary or cerebrovascular disease.</p>

      <h2>The diagnostic clue: deep T-wave inversions without LVH voltage</h2>
      <p>The ECG showed sinus rhythm with normal intervals, <em>without</em> Sokolow–Lyon or Cornell voltage criteria for LVH but with deep symmetric “giant” T-wave inversions (about 7–9 mm) in anterolateral leads (V1–V4, I, aVL). That combination—T-wave inversion without voltage-defined LVH—is a recognized clue that should trigger targeted evaluation for ApHCM, even when a patient has longstanding hypertension.</p>
      <div class="text-center my-4">
        <img src="/bog2/ECG.jpg" alt="ECG" class="mx-auto w-full max-w-lg" />
      </div>

      <h2>Echo + strain: diagnosing ApHCM without MRI</h2>
      <p>Transthoracic echocardiography revealed apical predominant hypertrophy with maximal apical thickness 18 mm and posterior wall 11 mm, giving an apical-to-posterior wall thickness ratio of 1.6. There was classic systolic apical cavity obliteration with an “ace-of-spades” configuration, preserved ejection fraction (55–60%), and no LV outflow tract obstruction at rest or with Valsalva.</p>
      <div class="flex flex-col md:flex-row gap-4 items-center justify-center my-4">
        <img src="/bog2/ECHO%201.jpg" alt="Echocardiography apical view" class="w-full md:w-1/2 mx-auto" />
        <img src="/bog2/ECHO2.jpg" alt="Echocardiography" class="w-full md:w-1/2 mx-auto" />
      </div>

      <p>Speckle-tracking strain supported the diagnosis by showing selective apical longitudinal strain reduction (around −12%) with preserved basal strain (around −18%), a pattern that contrasts with the more diffuse strain impairment typically expected in hypertensive heart disease. In this case, a practical echo-based threshold apical-to-posterior wall ratio ≥1.5 plus apical cavity obliteration was emphasized as a workable approach when cardiac MRI is unavailable.</p>
      <div class="text-center my-4">
        <img src="/bog2/SPEC.jpg" alt="Speckle strain" class="mx-auto w-full max-w-lg" />
      </div>

      <h2>Fixing the problem: treatment rationalization and outcome</h2>
      <p>The clinical turning point wasn’t an exotic intervention—it was getting the diagnosis right and aligning medications accordingly. Dual renin–angiotensin system blockade was rationalized (telmisartan–HCT stopped while losartan was retained with renal monitoring), clopidogrel was discontinued due to lack of indication, and bisoprolol was optimized as first-line therapy for symptomatic non-obstructive ApHCM.</p>

      <p>At two-week follow-up, the patient reported complete resolution of exertional dyspnea and palpitations, with blood pressure controlled (about 132/84 mmHg) and no adverse drug effects reported. Cardiac MRI was recommended for more comprehensive sudden cardiac death risk stratification, but this remained pending.</p>

      <h2>Practical takeaways for clinicians (especially in resource-limited settings)</h2>
      <p class="text-sm text-muted-foreground">From the blog</p>
      <ol>
        <li>Deep symmetric T-wave inversions <strong>without</strong> LVH voltage criteria in a patient with hypertension should prompt a deliberate search for ApHCM.</li>
        <li>A simple apical-to-posterior wall thickness ratio ≥1.5 with systolic apical cavity obliteration can support ApHCM diagnosis even without MRI access.</li>
        <li>Selective apical strain reduction with preserved basal strain strengthens differentiation from hypertensive heart disease when strain imaging is available.</li>
        <li>Anchoring bias is real: a longstanding label (like “hypertensive heart disease”) can persist even when new data no longer fit.</li>
        <li>Medication rationalization can reduce iatrogenic risk (e.g., unnecessary antiplatelets, unhelpful dual RAS blockade) once the diagnosis is corrected.</li>
      </ol>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}
