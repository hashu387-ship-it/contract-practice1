/* ============================ PART 4 ============================
   Material on/off site & Vesting, Retention, Change Management
   (Variations), Extension of Time, EOT vs Prolongation costs
   ================================================================ */
window.COURSE.parts.push({
  id: 'part4',
  num: 4,
  title: 'Materials, Retention, Variations & Time',
  tag: 'Vesting · Retention · Variations · EOT',
  color: '#e5533c',
  accent: '#f0a500',
  pdf: 'assets/pdf/Contract_Practice_Part_4.pdf',
  video: 'assets/video/part4.mp4',
  summary:
    'How value is protected and time is managed: paying for materials on and off site (and the role of vesting certificates), retention and its release, change management / variations under Cl 13, and Extension of Time — the prevention principle, time at large, grounds under Cl 8.4 and the claim procedure — ending with EOT vs prolongation cost.',
  sections: [
    {
      id: 'materials',
      title: 'Material On & Off Site + Vesting',
      icon: '📦',
      img: 'assets/img/materials.webp',
      mins: 8,
      tags: ['80%', 'Vesting certificate', 'Bill of Lading'],
      summary:
        'Materials for the permanent works can be paid (typically ~80% as determined by the Engineer) when properly stored on site, or off site with extra safeguards — evidence of shipment, a bank guarantee and a vesting certificate to pass title to the Employer.',
      blocks: [
        {
          t: 'compare', title: 'On site vs Off site',
          cols: [
            { h: 'Material ON site', tone: 'blue', items: ['In accordance with the Contract.', 'Materials required for the <b>permanent works</b>.', 'Materials listed in the <b>Appendix to Tender</b>.', '<b>80%</b> of the cost as determined by the Engineer.', 'Properly <b>stored & protected</b>.', 'Proper records (inspections, delivery notes, invoices, LPOs).'] },
            { h: 'Material OFF site', tone: 'amber', items: ['In accordance with the Contract; for permanent works; listed in Appendix to Tender; <b>80%</b> as determined by the Engineer.', '<b>Shipped, in transit or about to be delivered.</b>', '<b>Bill of Lading</b> / evidence of shipment.', '<b>Bank Guarantee</b> (like an advance‑payment guarantee) from an Employer‑approved entity.', 'Evidence of payment for freight & insurance.', 'Any other documents reasonably required — e.g. a <b>vesting certificate</b>.'] },
          ],
        },
        {
          t: 'def', term: 'Vesting certificate',
          html: 'A document that makes the <b>materials the Employer\'s property (title)</b> regardless of their location, so they are not retained under the original supplier\'s title. It <b>neutralises/invalidates</b> third‑party or supplier claims over the materials.',
        },
        {
          t: 'callout', kind: 'warn', title: 'Vesting ≠ a bond',
          html: 'Vesting certificates give <b>less protection</b> than advance‑payment bonds, especially on security. On supplier breach/insolvency the Employer\'s remedy is <b>limited to damages for breach of contract</b>, with a real risk to the materials themselves.',
        },
      ],
      flashcards: [
        { q: 'What % of material cost is typically paid and who determines it?', a: '≈80% of the cost, as determined by the Engineer, for permanent‑works materials listed in the Appendix to Tender.' },
        { q: 'Extra safeguards for OFF‑site materials?', a: 'Evidence of shipment / Bill of Lading, a bank guarantee from an approved entity, evidence of freight & insurance payment, and a vesting certificate.' },
        { q: 'What does a vesting certificate do, and its limitation?', a: 'Passes title in the materials to the Employer wherever they are; but gives less protection than a bond — on insolvency the Employer\'s remedy is only damages, with risk to the materials.' },
      ],
    },

    {
      id: 'retention',
      title: 'Retention',
      icon: '🔒',
      img: 'assets/img/retention.webp',
      mins: 6,
      tags: ['TOC', 'DNP', 'Retention bond'],
      summary:
        'Retention is money withheld to incentivise the Contractor to fix defects. Under FIDIC, the first half is released at the Taking‑Over Certificate and the second half at the end of the Defects Notification Period. A retention bond can free up cash early.',
      blocks: [
        { t: 'def', term: 'Retention', html: 'Money <b>withheld by the Employer</b> in accordance with the Contract to <b>encourage the Contractor to rectify defects</b> — or to fund remedial action if the Contractor fails to attend.' },
        { t: 'flow', title: 'How retention is released (FIDIC)', steps: ['Withheld at each interim payment (% per contract)', '1st half released at Taking‑Over Certificate (TOC)', '2nd half released at expiry of the Defects Notification Period (DNP)'], note: 'The exact % and mechanics are as stated in your contract — check FIDIC 1987 vs 1999.' },
        { t: 'callout', kind: 'note', title: 'Retention Bond', html: 'A <b>retention bond</b> is <b>not addressed in FIDIC</b>. The Contractor can submit one to secure the <b>early release</b> of retention money — subject to the provisions available in the Contract.' },
      ],
      flashcards: [
        { q: 'Purpose of retention?', a: 'To incentivise the Contractor to rectify defects (or fund remedial works if they don\'t).' },
        { q: 'When is retention released under FIDIC?', a: 'First half at the Taking‑Over Certificate; second half at expiry of the Defects Notification Period.' },
        { q: 'What is a retention bond?', a: 'A bond (not in FIDIC) the Contractor submits to obtain early release of retention money, if the contract allows.' },
      ],
    },

    {
      id: 'variations',
      title: 'Change Management (Variations)',
      icon: '✏️',
      img: 'assets/img/variations.webp',
      mins: 8,
      tags: ['Cl 13.1', 'Right to vary', 'Valuation'],
      summary:
        'Variations change the Works but not the Contract. Under FIDIC Cl 13.1 the Engineer may vary at any time before the TOC. Grounds include changes to quantity, quality, levels, omissions and additional work. The Contractor must not vary the works without instruction.',
      blocks: [
        { t: 'def', term: 'Variation / Change', html: 'A change to the <b>Works</b> — but <b>not</b> to the Contract itself. Sources include Engineer\'s instructions, RFI responses, changed drawings/specs, Employer\'s requirements, authority requirements and unforeseen site conditions.' },
        {
          t: 'callout', kind: 'law', title: 'FIDIC 1999 Cl 13.1 — Right to Vary',
          html: 'Variations may be initiated by the <b>Engineer at any time before the Taking‑Over Certificate</b>, by instruction or a request to submit a proposal. The Contractor must execute each Variation <b>unless</b> it promptly notifies (with particulars) that it cannot readily obtain the required Goods — then the Engineer may cancel, confirm or vary the instruction.',
        },
        {
          t: 'points', title: 'Grounds / scope of a variation (Cl 13.1 a–f)',
          items: [
            '(a) changes to <b>quantities</b> of any item (note: a quantity change alone does not necessarily constitute a Variation).',
            '(b) changes to the <b>quality</b> and other characteristics of any item.',
            '(c) changes to the <b>levels, positions or dimensions</b> of any part of the Works.',
            '(d) <b>omission</b> of any work (unless it is to be carried out by others).',
            '(e) any <b>additional</b> work, Plant, Materials or services for the Permanent Works (incl. tests, boreholes, exploratory work).',
            '(f) changes to the <b>sequence or timing</b> of execution.',
          ],
        },
        { t: 'callout', kind: 'warn', title: 'No self‑help variations', html: 'The Contractor <b>shall not alter or modify the Permanent Works unless and until the Engineer instructs or approves a Variation.</b> When valuing a change, be familiar with the change‑management procedure of your specific contract.' },
      ],
      flashcards: [
        { q: 'A variation changes the ___ but not the ___.', a: 'Changes the Works but not the Contract.' },
        { q: 'Who can initiate a variation and until when (FIDIC 1999)?', a: 'The Engineer, at any time before the Taking‑Over Certificate (Cl 13.1), by instruction or request for a proposal.' },
        { q: 'Can the Contractor vary the permanent works on its own?', a: 'No — not unless and until the Engineer instructs or approves a Variation.' },
      ],
    },

    {
      id: 'eot',
      title: 'Extension of Time (EOT)',
      icon: '📅',
      img: 'assets/img/eot.webp',
      mins: 10,
      tags: ['Time at large', 'Prevention principle', 'Cl 8.4'],
      summary:
        'EOT protects the Contractor from LDs and prevents "time at large". The prevention principle stops the Employer enforcing completion when it caused the delay. Grounds are in Cl 8.4; the claim must be notified within 28 days with particulars by 42 days.',
      blocks: [
        {
          t: 'points', title: 'Why claim an EOT?',
          items: [
            'To avoid exposing the Contractor to <b>liquidated damages (LDs)</b>.',
            'To avoid a <b>"time at large"</b> situation.',
          ],
        },
        {
          t: 'compare', title: 'Two key concepts',
          cols: [
            { h: 'Time at large', tone: 'amber', items: ['There is <b>no specific completion date</b>, or <b>no provision to extend time</b>, when the Employer delays the project.', 'The Contractor must then complete within a <b>reasonable time</b>.', 'The Employer <b>loses the right to LDs</b>.'] },
            { h: 'Prevention principle', tone: 'blue', items: ['A party cannot insist on performance of an obligation it has itself <b>prevented or hindered</b>.', 'If the Employer causes delay, it <b>cannot enforce the Time for Completion</b>.', 'The Employer <b>cannot apply LDs</b> for a delay it caused.', 'Case: <i>Peak Construction (Liverpool) Ltd v McKinney Foundations Ltd [1970]</i>.'] },
          ],
        },
        {
          t: 'points', title: 'Grounds of EOT — FIDIC 1999 Cl 8.4',
          items: [
            '(a) a <b>Variation</b> (unless time already agreed under 13.3) or substantial change in quantity.',
            '(b) a cause of delay giving EOT entitlement under a sub‑clause of the Conditions.',
            '(c) <b>exceptionally adverse climatic conditions</b>.',
            '(d) <b>Unforeseeable shortages</b> of personnel or Goods caused by epidemic or government action.',
            '(e) any delay/impediment/prevention caused by or attributable to the <b>Employer</b>, the Employer\'s Personnel or other contractors on Site.',
          ],
        },
        {
          t: 'steps', title: 'Claim procedure — FIDIC 1999 timeline',
          items: [
            { b: 'Initial notice', t: 'within <b>28 days</b> of the Contractor becoming aware of the event.' },
            { b: 'Detailed particulars', t: 'within <b>42 days</b> of awareness — kept ongoing until the event concludes; include all supporting documentation.' },
            { b: 'Final particulars', t: 'within <b>28 days</b> after the event ends.' },
            { b: 'Engineer\'s determination', t: 'the Engineer makes a fair determination; the extent of the award depends on the quality of substantiation.' },
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'Adverse weather → time only, not cost',
          html: 'For <b>exceptionally adverse climatic conditions</b> the Contractor is entitled to <b>EOT but not cost</b>. Why? The event is beyond both parties\' control, so each bears its own loss — the Contractor its prolongation cost, the Employer its lost revenue.',
        },
      ],
      flashcards: [
        { q: 'What is "time at large"?', a: 'No fixed completion date / no mechanism to extend time when the Employer delays — the Contractor must finish in a reasonable time and the Employer loses the right to LDs.' },
        { q: 'State the prevention principle (and a case).', a: 'A party cannot enforce an obligation it has itself prevented; if the Employer causes delay it can\'t enforce completion or levy LDs. Peak Construction v McKinney Foundations [1970].' },
        { q: 'FIDIC 1999 EOT notice timeline?', a: 'Initial notice within 28 days of awareness; detailed particulars within 42 days (ongoing); final particulars within 28 days after the event ends.' },
        { q: 'For exceptionally adverse weather, is the Contractor entitled to cost?', a: 'No — EOT only, not cost, because the event is beyond both parties\' control so each bears its own loss.' },
      ],
    },

    {
      id: 'prolongation',
      title: 'EOT vs Prolongation Costs',
      icon: '⏳',
      img: 'assets/img/prolongation.webp',
      mins: 8,
      tags: ['Preliminaries', 'Site OH', 'Head office OH'],
      summary:
        'EOT is the relief for time; prolongation cost is the money that goes with it. Prolongation compensates the extended site overheads (preliminaries) and a share of head‑office overheads for the delay period.',
      blocks: [
        {
          t: 'callout', kind: 'key', title: 'Time vs money',
          html: 'Two distinct effects of a delay: <b>prolongation of resources input</b> and <b>late completion</b>. The <b>relief</b> for late completion is an <b>Extension of Time</b>; the <b>relief</b> for the prolonged resource input is an <b>additional payment</b> (prolongation cost).',
        },
        { t: 'def', term: 'Prolongation cost', html: 'The cost associated with an EOT — principally the <b>extended site overheads (preliminaries)</b> incurred because the Contractor\'s resources stay on site longer, plus a share of head‑office overheads.' },
        {
          t: 'compare', title: 'Where the cost sits',
          cols: [
            { h: 'Site overheads (preliminaries)', tone: 'blue', items: ['Staff (Engineers, QS, Admin, PM, CM, assistants).', 'Plant & equipment (cranes, scaffolding).', 'Site facilities (portacabins, welfare, rest areas).', 'Site utilities (telephone, electricity, water, sewage).', 'Insurances & bonds.'] },
            { h: 'Head‑office overheads', tone: 'amber', items: ['Not specific to one project/site.', 'Head‑office building & furniture.', 'Head‑office personnel (managers).', 'Head‑office activities (marketing, etc.).'] },
          ],
        },
        {
          t: 'points', title: 'Formulae for head‑office overhead (recovery)',
          items: [
            { b: 'Hudson', t: '(HO/P ÷ 100) × (Contract Sum ÷ Contract Period wks) × Delay wks. Uses the tendered HO/P %.' },
            { b: 'Emden', t: '(h ÷ 100) × (c ÷ cp) × pd, where h is derived from the whole organisation\'s overhead+profit ÷ total turnover.' },
            { b: 'Eichleay', t: 'Allocable overhead → daily contract overhead → × days of compensable delay = additional payment.' },
          ],
        },
        {
          t: 'callout', kind: 'case', title: 'SCL Protocol & Hudson caution',
          html: 'These formulae are recognised in the <b>SCL Delay & Disruption Protocol</b>, which does <b>not</b> recommend the <b>Hudson</b> formula — it uses the tendered HO/P and so does not reflect the true contribution to overhead/profit. Hudson was held inappropriate in <i>Walter Lilly & Co Ltd v Mackay & DMW Developments Ltd [2012] EWHC 1773</i>.',
        },
      ],
      flashcards: [
        { q: 'EOT vs prolongation cost?', a: 'EOT is the relief for time (late completion); prolongation cost is the additional payment for the prolonged resource input — mainly extended preliminaries + a share of head‑office overheads.' },
        { q: 'Name the three head‑office overhead formulae.', a: 'Hudson, Emden and Eichleay.' },
        { q: 'Why does the SCL Protocol discourage the Hudson formula?', a: 'It uses the tendered HO/P %, not the true overhead/profit contribution; held inappropriate in Walter Lilly v Mackay [2012].' },
      ],
    },
  ],
});
