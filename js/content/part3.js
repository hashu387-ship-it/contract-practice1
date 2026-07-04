/* ============================ PART 3 ============================
   Advance Payments, Insurances, Occurrence vs Claims‑made,
   Insurance administration, Cross liability & Subrogation,
   Interim valuations & payments
   ================================================================ */
window.COURSE.parts.push({
  id: 'part3',
  num: 3,
  title: 'Advance Payment, Insurance & Interim Payments',
  tag: 'Cash flow · CAR · Subrogation · IPC',
  color: '#00a3a3',
  accent: '#f0a500',
  pdf: 'assets/pdf/Contract_Practice_Part_3.pdf',
  video: 'assets/video/part3.mp4',
  summary:
    'The money and risk‑transfer machinery of a live project: advance payments and their bonds, the suite of construction insurances (CAR, works, third‑party, workmen), occurrence vs claims‑made triggers, cross liability and subrogation, and the monthly interim valuation → payment certificate cycle.',
  sections: [
    {
      id: 'advance-payment',
      title: 'Advance Payments',
      icon: '💰',
      img: 'assets/img/advance-payment.webp',
      mins: 6,
      tags: ['Cash flow', 'APG', 'Recovery'],
      summary:
        'An advance payment eases the Contractor\'s negative cash flow at the start and lowers the tender price by cutting financing cost. It is paid against an advance‑payment bond and recovered progressively from interim payments.',
      blocks: [
        {
          t: 'callout', kind: 'note', title: 'In which FIDIC?',
          html: 'Advance payment is <b>not in FIDIC 1987</b>, but is addressed in <b>FIDIC 1999 & 2017</b>.',
        },
        {
          t: 'points', title: 'Why an advance payment?',
          items: [
            'To overcome the Contractor\'s <b>negative cash‑flow</b> at the beginning of the project.',
            'It also <b>reduces the tender price</b> by eliminating (some of) the Contractor\'s financing costs.',
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'Advance Payment Bond / Guarantee',
          html: 'Advance payments are paid against an <b>advance payment bond</b> in approved wording from a bank. Be mindful of the <b>reduction of its value</b> as the advance is recovered (operational reduction), so the Employer is never over‑exposed.',
        },
        {
          t: 'steps', title: 'Certifying an advance payment',
          items: [
            'Upon LOA issuance or signing of the Contract Agreement.',
            'The provision for advance payment is stated in the Contract.',
            'The amount or % of the Contract Sum is stated in the Contract.',
            'Performance + advance‑payment securities have been submitted.',
            'The Contractor has applied for the advance payment.',
          ],
        },
      ],
      flashcards: [
        { q: 'Why pay an advance?', a: 'To overcome the Contractor\'s early negative cash flow and to reduce the tender price by cutting financing costs.' },
        { q: 'What secures an advance payment and what happens to it over time?', a: 'An advance‑payment bond in approved bank wording; its value reduces operationally as the advance is recovered from interim payments.' },
        { q: 'Is advance payment in FIDIC 1987?', a: 'No — it is addressed in FIDIC 1999 & 2017, not 1987.' },
      ],
    },

    {
      id: 'insurance',
      title: 'Insurances in Construction',
      icon: '☂️',
      img: 'assets/img/insurance.webp',
      mins: 9,
      tags: ['CAR', 'Works', 'Third party', 'PI'],
      summary:
        'Core policies: Works (full reinstatement), Third‑Party liability, Contractor\'s Plant & Equipment, and Workmen\'s Compensation — plus Professional Indemnity if the Contractor designs. CAR (Contractor All Risk) bundles works + third‑party cover.',
      blocks: [
        {
          t: 'table', title: 'Core construction insurances',
          headers: ['Insurance type', 'Coverage'],
          rows: [
            ['Insurance for Works', 'Not less than full reinstatement cost — incl. demolition, debris removal, professional fees and profit.'],
            ['Third Party', 'Per occurrence, not less than the amount stated in the Appendix to Tender.'],
            ['Contractor\'s Plant & Equipment', 'Not less than full reinstatement cost, incl. delivery to site.'],
            ['Workmen\'s Compensation', 'Cover for claims, damages, losses & expenses (incl. legal fees) from injury, sickness or death of any person employed by the Contractor.'],
          ],
          note: 'If the Contractor is involved in design, add Professional Indemnity (PI) Insurance.',
        },
        {
          t: 'callout', kind: 'key', title: 'CAR — Contractor All Risk',
          html: 'A non‑standard policy that generally bundles: <b>material damage</b> (fire, theft, flood or other accidental causes = Insurance for Works) <b>+ liability</b> for accidental injury, death or property damage to a <b>third party</b> (= Third‑Party Insurance).',
        },
      ],
      flashcards: [
        { q: 'To what value must the Works be insured?', a: 'Not less than the full reinstatement cost — including demolition, debris removal, and professional fees & profit.' },
        { q: 'What does CAR insurance bundle?', a: 'Material damage (Insurance for Works) + third‑party liability cover in one Contractor All Risk policy.' },
        { q: 'What extra cover is needed if the Contractor designs?', a: 'Professional Indemnity (PI) insurance.' },
      ],
    },

    {
      id: 'occurrence-claims',
      title: 'Occurrence vs Claims‑made Basis',
      icon: '⏱️',
      img: 'assets/img/occurrence-claims.webp',
      mins: 7,
      tags: ['Trigger', 'Long‑tail', 'Premium'],
      summary:
        'Occurrence‑basis policies cover incidents that happen during the policy period even if the claim is made later (long‑tail protection). Claims‑made policies only cover claims both made and reported during the policy period.',
      blocks: [
        {
          t: 'compare', title: 'Two triggers',
          cols: [
            { h: 'Occurrence basis ✔ Covered', tone: 'green', items: ['Covers incidents that <b>occur during</b> the policy period, <b>even if the claim is made after</b> the policy expires.', 'Trigger = <b>date of the incident</b>.', 'Provides <b>long‑tail</b> protection.', 'Higher premium.'] },
            { h: 'Claims‑made basis ✘ Not covered', tone: 'red', items: ['Covers only claims <b>made & reported during</b> the policy period, regardless of when the incident occurred.', 'Trigger = <b>date the claim is reported</b>.', 'Limited to the policy period / extended reporting period.', 'Lower premium.'] },
          ],
        },
        {
          t: 'table', title: 'At a glance',
          headers: ['Feature', 'Occurrence', 'Claims‑made'],
          rows: [
            ['Trigger', 'Date of the incident', 'Date the claim is reported'],
            ['Coverage period', 'Incidents during term, even if claimed later', 'Claims made during the term only'],
            ['Premium cost', 'Higher', 'Lower'],
            ['Long‑term protection', 'Long‑tail', 'Limited to policy / extended reporting period'],
          ],
        },
      ],
      flashcards: [
        { q: 'Occurrence vs claims‑made — the trigger?', a: 'Occurrence triggers on the date of the incident (covered even if claimed later). Claims‑made triggers on the date the claim is reported (must be within the policy period).' },
        { q: 'Which gives long‑tail protection and which is cheaper?', a: 'Occurrence gives long‑tail protection (higher premium); claims‑made is cheaper but limited to the policy/extended reporting period.' },
      ],
    },

    {
      id: 'insurance-admin',
      title: 'Administering an Insurance Claim',
      icon: '🧾',
      img: 'assets/img/insurance.webp',
      mins: 8,
      tags: ['Loss adjuster', 'PI claim', 'Deductible', 'Umbrella'],
      summary:
        'For a Works claim: notify, evidence, police & incident reports, facilitate the loss adjuster, submit with support. For a PI claim: establish duty of care, breach, causation and damages. Know deductibles, umbrella cover and the remedy if the Contractor fails to insure.',
      blocks: [
        {
          t: 'compare', title: 'Two claim workflows',
          cols: [
            { h: 'Insurance for Works claim', tone: 'blue', items: ['Notify the insurance company.', 'Photos of the incident.', 'Police report.', 'Incident report.', 'Facilitate the <b>loss adjuster\'s</b> visit (appointed by the insurer to assess damage).', 'Submit the claim with supporting information.'] },
            { h: 'Professional Indemnity claim', tone: 'violet', items: ['Establish the <b>duty of care</b>.', 'Prove <b>breach</b> of duty.', 'Link the breach to <b>harm (causation)</b>.', 'Prove <b>damages</b>.', 'Follow the contractual / legal framework.', 'Give notice, gather evidence, attempt negotiation, then litigate if necessary.'] },
          ],
        },
        {
          t: 'points', title: 'Insurance points to know',
          items: [
            { b: 'Remedy if the Contractor fails to insure', t: 'the Employer may take out the insurance and deduct the premium from the Contractor (Works only, with the third‑party exception below).' },
            { b: 'When the Employer takes third‑party insurance', t: 'where liability is large and disproportionate to the contract sum — e.g. harbours, airports, nuclear plants.' },
            { b: 'Umbrella cover', t: 'in large developments the Employer takes Works + Third‑Party cover; additional packages are added as a schedule subject to a maximum liability cap.' },
            { b: 'Deductible', t: 'the amount not claimable from the insurer — a remedy to avoid small claims.' },
          ],
        },
      ],
      flashcards: [
        { q: 'What are the four elements to prove in a PI claim?', a: 'Duty of care, breach of that duty, causation (link breach to harm), and damages.' },
        { q: 'What is a deductible and why have one?', a: 'The amount not claimable from the insurer — it avoids/handles small claims.' },
        { q: 'Remedy if the Contractor fails to insure the Works?', a: 'The Employer may take out the insurance and deduct the premium from the Contractor.' },
      ],
    },

    {
      id: 'cross-subrogation',
      title: 'Cross Liability & Subrogation',
      icon: '↔️',
      img: 'assets/img/subrogation.webp',
      mins: 7,
      tags: ['Cross liability', 'Subrogation', 'Waiver'],
      summary:
        'Cross liability treats co‑insured parties as if separately insured, so each can claim against the other. Subrogation lets the insurer, after paying, pursue whoever caused the loss; a waiver of subrogation removes that right.',
      blocks: [
        { t: 'def', term: 'Cross liability', html: 'Where both the Contractor and Employer (or Main Contractor and Subcontractor) are insured under one policy, damage suffered by either is treated <b>as if each had individual cover</b> — so both can seek compensation for their own losses independently.' },
        {
          t: 'callout', kind: 'note', title: 'Cross‑liability example',
          html: 'Both Main Contractor and Employer are insured under the Works policy. If the Employer damages the works, the Main Contractor can claim against the Employer (and vice versa) and the policy will cover the damage.',
        },
        {
          t: 'compare', title: 'Subrogation and its waiver',
          cols: [
            { h: 'Subrogation', tone: 'blue', items: ['The insurer\'s right, after paying the insured, to <b>sue whoever caused the loss</b>.', 'Insurer → pays claim to Business → then seeks compensation from the liable third party.', '<i>Seldom used now.</i>'] },
            { h: 'Waiver of subrogation', tone: 'amber', items: ['<b>Removes</b> the insurer\'s right to pursue the party responsible.', 'e.g. the parties agree to waive subrogation; if the Employer\'s employee negligently causes a $5M fire, the Contractor\'s Works insurer must pay but <b>cannot recover</b> from the Employer.'] },
          ],
        },
      ],
      flashcards: [
        { q: 'What is subrogation?', a: 'The insurer\'s right, after paying the insured, to step into their shoes and sue whoever caused the loss.' },
        { q: 'What does a waiver of subrogation do?', a: 'Removes the insurer\'s right to recover from the responsible party — so co‑insured parties can\'t be pursued by the insurer.' },
        { q: 'What does cross liability achieve?', a: 'Treats co‑insured parties as separately insured, so each can claim against the other under the same policy.' },
      ],
    },

    {
      id: 'interim-payment',
      title: 'Interim Valuations & Payments',
      icon: '📈',
      img: 'assets/img/interim-payment.webp',
      mins: 9,
      tags: ['Monthly statement', 'IPC', 'Retention', 'MOS'],
      summary:
        'Each month the Contractor submits a payment application (permanent works + variations, other BOQ items, MOS, fluctuations). The Engineer issues an Interim Payment Certificate deducting retention, advance recovery and contra charges, subject to a minimum amount.',
      blocks: [
        {
          t: 'points', title: 'Monthly statement — Interim Payment Application (what the Contractor claims)',
          items: [
            'Value of <b>permanent works</b> (original + variations).',
            'Any other items in the BOQ (dayworks, Contractor\'s equipment, temp works, etc.).',
            '<b>Material on/off site (MOS)</b> — % as per the contract.',
            'Price fluctuations (if applicable).',
            'Any other sum.',
          ],
        },
        {
          t: 'points', title: 'Interim Payment Certificate — IPC (what the Engineer certifies)',
          items: [
            'Issued within the <b>time frame</b> stated in the Contract.',
            'Deduct <b>retention</b> — the % stated in the Contract.',
            'Deduct <b>advance‑payment recovery</b> — the % stated in the Contract.',
            'Deduct other <b>contra charges</b> (excluding LDs) — e.g. Engineer\'s overtime, insurances taken by the Employer, payments to NSCs.',
            'Respect the <b>minimum amount</b> stated in the Contract (below which no certificate issues).',
            'Confirm the Performance Security is in place — unconditional & on demand, approved by the Employer.',
          ],
        },
        {
          t: 'callout', kind: 'warn', title: 'LDs are NOT a contra charge here',
          html: 'Liquidated Damages are <b>excluded</b> from the contra‑charge deductions in the IPC — they are handled separately, not netted off in the routine interim valuation.',
        },
      ],
      flashcards: [
        { q: 'Name the main heads of an interim payment application.', a: 'Value of permanent works (original + variations), other BOQ items (dayworks/equipment/temp works), material on/off site %, price fluctuations, any other sum.' },
        { q: 'What does the Engineer deduct in an IPC?', a: 'Retention %, advance‑payment recovery %, and contra charges (excluding LDs) such as Engineer\'s OT, Employer insurances, NSC payments — subject to a minimum amount.' },
        { q: 'Are LDs deducted as a contra charge in the IPC?', a: 'No — LDs are excluded from the IPC contra charges and dealt with separately.' },
      ],
    },
  ],
});
