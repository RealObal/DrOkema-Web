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
    date: "2026-02-15",
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
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}
