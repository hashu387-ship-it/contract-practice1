/* ============================ PART 2 ============================
   Legislation, LOI / LOA, Standard Forms, FIDIC differences,
   Privity, Novation, Performance Security
   ================================================================ */
window.COURSE.parts.push({
  id: 'part2',
  num: 2,
  title: 'Law, Standard Forms & Securities',
  tag: 'Legislation · LOI/LOA · FIDIC · Bonds',
  color: '#9b51e0',
  accent: '#f0a500',
  pdf: 'assets/pdf/Contract_Practice_Part_2.pdf',
  video: 'assets/video/part2.mp4',
  summary:
    'The law of the land frames every contract. This part covers mandatory vs general provisions, the Letter of Intent and Letter of Acceptance, the family of standard forms (FIDIC / JCT / NEC), the key differences between FIDIC 1987, 1999 and 2017, privity and how to overcome it (assignment & novation), and performance securities.',
  sections: [
    {
      id: 'legislation',
      title: 'Legislation — Law of the Land',
      icon: '🏛️',
      img: 'assets/img/legislation.webp',
      mins: 7,
      tags: ['Sources of law', 'Sharia', 'Courts'],
      summary:
        'The law of a country provides the legal framework within which a contract operates. In the GCC, sources typically include Sharia law, the constitution/basic law, decrees and custom, with a tiered court structure.',
      blocks: [
        { t: 'lead', html: 'The law of a country plays a crucial role in the conditions of contract because it provides the <b>legal framework</b> within which the contract operates. Your contract cannot override the mandatory law of the governing jurisdiction.' },
        {
          t: 'table', title: 'Sources of law (GCC snapshot)',
          headers: ['Country', 'Typical sources of law', 'Court structure (tiers)'],
          rows: [
            ['UAE', 'Constitution; Federal laws (7 emirates); local Emirate laws; Islamic Sharia; custom & practice', 'Court of First Instance → Court of Appeal → Court of Cassation (Dubai/RAK) / Federal Supreme Court (Abu Dhabi)'],
            ['Oman', 'Islamic Sharia; Royal Decrees; private international law (commercial/financial)', 'First Instance → Appellate → Supreme Court'],
            ['KSA', 'Islamic Sharia; Basic Law; Royal Decrees; Islamic courts; custom', 'First Instance → Courts of Appeal → Supreme Judicial Council'],
            ['Qatar', 'Islamic Sharia; custom; rules of justice', 'Preliminary → Appeal → Cassation'],
            ['Bahrain', 'Islamic Sharia; civil law; custom', 'Lower / High / High Appeal / Cassation (plus Urgent Matters & Execution courts)'],
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Exam angle', html: 'You will not be asked to memorise every court — but be able to say <b>why</b> the governing law matters (mandatory provisions, decennial liability, force majeure articles) and give one or two examples.' },
      ],
      flashcards: [
        { q: 'Why does the "law of the land" matter to a contract?', a: 'It provides the legal framework within which the contract operates; the contract cannot override mandatory provisions of that law.' },
        { q: 'Typical GCC sources of law?', a: 'Islamic Sharia, the constitution/basic law, federal/royal decrees & laws, and custom & practice.' },
      ],
    },

    {
      id: 'general-mandatory',
      title: 'General vs Mandatory Provisions',
      icon: '🚦',
      img: 'assets/img/legislation.webp',
      mins: 7,
      tags: ['Mandatory law', 'Void clauses', 'Decennial'],
      summary:
        'Parties can freely agree "general" provisions but cannot contract out of "mandatory" ones. Mandatory law overrides contract; clauses that exclude decennial liability or one‑sided cancellation, or exempt harmful‑act liability, are void.',
      blocks: [
        { t: 'lead', html: 'The parties <b>cannot agree to vary mandatory provisions</b> of the law, but they are free to agree "general" provisions.' },
        {
          t: 'compare', title: 'Two worked examples',
          cols: [
            { h: 'You CANNOT (mandatory)', tone: 'red', items: ['Grant <b>exclusive termination rights</b> to one party contrary to mandatory legal requirements.', 'Exclude or limit <b>decennial liability</b> — such a clause is void.'] },
            { h: 'You CAN (general)', tone: 'green', items: ['Agree to <b>restrict the Defects Liability Period to 1 year</b>, even if the default in law is 3 years, if the parties agree.'] },
          ],
        },
        {
          t: 'callout', kind: 'law', title: 'Key civil‑code articles',
          items: [
            '<b>Article 31 (Mandatory Provisions)</b> — a mandatory provision of law takes precedence over a contractual stipulation.',
            '<b>Article 218 (Termination)</b> — a condition letting one party cancel without mutual consent or a court order is not binding.',
            '<b>Article 296 (Harmful acts)</b> — any condition purporting to exempt liability for a harmful act is void.',
            '<b>Article 882 (Decennial liability)</b> — any agreement exempting or limiting the contractor\'s/architect\'s decennial liability is void.',
          ],
        },
      ],
      flashcards: [
        { q: 'Can parties contract out of a mandatory provision?', a: 'No. A mandatory provision of law takes precedence over any contractual stipulation (e.g. Art 31). Clauses excluding decennial liability (Art 882) are void.' },
        { q: 'Give an example of a "general" provision the parties may vary.', a: 'They may agree to restrict the Defects Liability Period to 1 year even if the legal default is 3 years.' },
      ],
    },

    {
      id: 'loi',
      title: 'Letter of Intent (LOI) & Quantum Meruit',
      icon: '✉️',
      img: 'assets/img/loi.webp',
      mins: 9,
      tags: ['LOI', 'Quantum meruit', 'Unjust enrichment'],
      summary:
        'An LOI expresses a party\'s interest to contract in future; generally it creates no contract and limits liability. If work is done under it, quantum meruit (a fair & reasonable amount) applies. Know the three types of LOI.',
      blocks: [
        { t: 'def', term: 'Letter of Intent (LOI)', html: 'An expression of a party\'s <b>interest to enter into a contract at a future date</b>. Generally it forms <b>no contractual relationship</b>, liabilities are limited, and it is a one‑sided assurance to form a contract — though depending on its wording it may amount to an LOA.' },
        {
          t: 'points', title: 'Why use an LOI?',
          items: [
            'To bridge any delay in finalising the LOA / Contract.',
            'To engage the contractor early for authority approvals, resource planning, long‑lead procurement, mobilisation, etc.',
          ],
        },
        {
          t: 'steps', title: 'Three types of LOI',
          items: [
            { b: 'Letter of comfort', t: 'States a party\'s intention for future action but does not create a binding contract.' },
            { b: 'Instruction to proceed (with consent to spend)', t: 'Enables work to start up to a <b>specified value</b> while the contract is still being finalised.' },
            { b: 'Letter recognising a binding contract', t: 'Used to formally finalise the contract after substantial agreement — marking the end of negotiations.' },
          ],
        },
        {
          t: 'callout', kind: 'law', title: 'Paid on quantum meruit',
          html: 'If works are executed under an LOI, the <b>quantum meruit</b> principle applies — "as much as he has earned" / a <b>fair & reasonable amount</b>. <b>Articles 888/889:</b> if the price is not specified, a fair remuneration plus the value of materials provided must be paid. This prevents <b>unjust enrichment</b> — one party being enriched at the expense of the other.',
        },
      ],
      flashcards: [
        { q: 'Does an LOI create a binding contract?', a: 'Generally no — it expresses interest to contract in future, with limited liability; but depending on wording it can amount to an LOA.' },
        { q: 'How is work done under an LOI valued?', a: 'On quantum meruit — a fair & reasonable amount ("as much as earned"), preventing unjust enrichment (Arts 888/889).' },
        { q: 'Name the three types of LOI.', a: 'Letter of comfort; instruction to proceed with consent to spend (to a specified value); letter recognising an existing binding contract.' },
      ],
    },

    {
      id: 'loa',
      title: 'Letter of Acceptance / Award (LOA)',
      icon: '📝',
      img: 'assets/img/loa.webp',
      mins: 6,
      tags: ['LOA', 'Binding', 'Consequences'],
      summary:
        'The LOA is the Employer\'s formal acceptance of the Contractor\'s offer — it creates a binding contract. It should carry enough terms to run the works until the formal contract is signed, and it triggers a set of consequences.',
      blocks: [
        {
          t: 'points', title: 'What the LOA is',
          items: [
            'Expression of the formal <b>acceptance</b> by the offeree (Employer) of the offeror\'s (Contractor\'s) offer.',
            'Creates a <b>binding contract</b> between the parties.',
            'If the formal contract will be delayed, the LOA should include the terms & conditions needed to administer the works until then.',
          ],
        },
        {
          t: 'points', title: 'Consequences of the LOA',
          items: [
            'Commencement date to be advised.',
            'Performance Bond / Advance Payment Bond to be submitted within the stated duration (if required).',
            'Programme & method statements to be submitted within the stated duration.',
            'Cash‑flow estimate to be provided.',
            'Breakdown of lump‑sum items to be provided.',
            'Release of advance payment (subject to receipt of the advance payment bond/guarantee).',
            'Evidence of insurance to be submitted.',
          ],
        },
        { t: 'callout', kind: 'key', title: 'LOI vs LOA in one line', html: '<b>LOI</b> = intention to contract in future (usually no binding contract). <b>LOA</b> = formal acceptance that <b>creates</b> the binding contract.' },
      ],
      flashcards: [
        { q: 'What is the legal effect of an LOA?', a: 'It is the Employer\'s formal acceptance of the Contractor\'s offer and creates a binding contract.' },
        { q: 'Name three consequences triggered by the LOA.', a: 'Any of: commencement date advised; performance/advance bonds submitted; programme & method statements; cash‑flow; lump‑sum breakdown; advance‑payment release; evidence of insurance.' },
      ],
    },

    {
      id: 'standard-forms',
      title: 'Standard Forms of Contract',
      icon: '📚',
      img: 'assets/img/standard-forms.webp',
      mins: 9,
      tags: ['FIDIC', 'JCT', 'NEC'],
      summary:
        'FIDIC\'s "rainbow" of books maps to project types (Red = employer design, Yellow = plant/design‑build, Silver = EPC turnkey, etc.). JCT and NEC are the main UK families. Standard forms give balanced, time‑tested risk allocation.',
      blocks: [
        {
          t: 'table', title: 'The FIDIC "rainbow"',
          headers: ['Use case', 'FIDIC book'],
          rows: [
            ['Civil engineering works', 'Red Book 1987'],
            ['Electro‑mechanical works', 'Yellow Book 1987'],
            ['Design‑Build & Turnkey', 'Orange Book 1995'],
            ['Works designed by the Employer', 'Red Book 1999 / 2017'],
            ['Short form of contract', 'Green Book 1999'],
            ['Plant & Design‑Build', 'Yellow Book 1999 / 2017'],
            ['EPC / Turnkey', 'Silver Book 1999 / 2017'],
            ['Consultancy', 'White Book 1999'],
            ['Multilateral Development Banks (MDB)', 'Pink Book — 1999 Harmonised Edition'],
            ['Dredging & reclamation', 'Blue Book 2006 / 2016'],
            ['Underground works', 'Emerald Book 2019 (new)'],
          ],
        },
        {
          t: 'compare', title: 'JCT and NEC families',
          cols: [
            { h: 'JCT', tone: 'blue', items: ['Standard Building Contract', 'Intermediate / Minor Works', 'Major Project Construction', 'Design & Build', 'Management / Construction Management', 'Constructing Excellence'] },
            { h: 'NEC', tone: 'violet', items: ['NEC3 / NEC4 Engineering & Construction Contract (ECC)', 'NEC3 / NEC4 Engineering & Construction Short Contract', 'Emphasis on proactive, collaborative management & early warnings'] },
          ],
        },
        {
          t: 'points', title: 'Advantages of using standard forms',
          items: [
            'Balanced risk allocation (though FIDIC 1999 leans towards the Employer).',
            'Parties are well aware of their risks, rights and obligations.',
            'Time‑tested and drafted with input from multiple professionals.',
            'Disputes are less likely — and a dispute‑resolution mechanism is built in.',
            'Legal fees can be avoided — but amending standard CoC without a lawyer can create disputes.',
          ],
        },
      ],
      flashcards: [
        { q: 'Which FIDIC book for EPC/Turnkey, and which for Employer‑designed works?', a: 'Silver Book (EPC/Turnkey); Red Book 1999/2017 (works designed by the Employer). Yellow = plant/design‑build.' },
        { q: 'Give two advantages of standard forms.', a: 'Balanced, time‑tested risk allocation; parties know their rights/obligations; built‑in dispute resolution; lower legal fees.' },
        { q: 'What is the risk of amending a standard form?', a: 'Amending the CoC without legal input can unbalance risk and create disputes.' },
      ],
    },

    {
      id: 'fidic-differences',
      title: 'FIDIC 1987 vs 1999 vs 2017',
      icon: '🔀',
      img: 'assets/img/fidic-redbooks.webp',
      mins: 8,
      tags: ['DAB/DAAB', 'Claims Cl 20/21', 'Exceptional Events'],
      summary:
        '1999 introduced the DAB, termination for convenience, value engineering and a new priority of documents. 2017 tightened notices, split claims (Cl 20) from disputes (Cl 21), renamed DAB→DAAB, and consolidated Employer\'s Risks & Force Majeure into "Exceptional Events".',
      blocks: [
        {
          t: 'compare', title: 'Key differences',
          cols: [
            { h: '1987 → 1999', tone: 'blue', items: [
              'The Engineer acts on behalf of the Employer.',
              '<b>Dispute Adjudication Board (DAB)</b> introduced.',
              '<b>Termination for Convenience</b> clause added.',
              '<b>Value Engineering</b> clause allows VE proposals.',
              'Rates revisable if quantities exceed estimates by >10%.',
              'Taking‑Over Certificates issued within 28 days.',
              'Cost fluctuations based on price indices.',
              'Different priority of documents.',
            ] },
            { h: '1999 → 2017', tone: 'amber', items: [
              '"Claim" now includes requests for relief under the contract.',
              '"No‑objection" introduced and defined.',
              'More prescriptive notice requirements.',
              'Party may issue a <b>Notice of Dissatisfaction</b> with the Engineer\'s determination.',
              '<b>Advance warning</b> provisions introduced.',
              'Evaluating & agreeing Variations more prescriptive.',
              'Employer\'s Risks + Force Majeure → <b>Exceptional Events</b>.',
              'Employer\'s & Contractor\'s claims both under <b>Clause 20</b>; disputes moved to new <b>Clause 21</b>.',
              'Claim period extended to <b>84 days</b> (condition precedent); Engineer deemed to respond after <b>42 days</b>.',
              'DAB → <b>DAAB</b> (Dispute Avoidance/Adjudication Board).',
            ] },
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Memory hook', html: '<b>1999 = new machinery</b> (DAB, VE, termination for convenience). <b>2017 = tighter procedure</b> (notices, condition‑precedent claims, DAAB, Exceptional Events, split of Cl 20 / Cl 21).' },
      ],
      flashcards: [
        { q: 'What did FIDIC 1999 introduce over 1987?', a: 'The DAB, termination for convenience, value engineering, TOC within 28 days, rate revision if quantities exceed >10%, and a new priority of documents.' },
        { q: 'Three headline changes in FIDIC 2017?', a: 'Split of claims (Cl 20) from disputes (Cl 21); DAB→DAAB; Exceptional Events (merging Employer\'s risks + FM); 84‑day condition‑precedent claim period; advance warning.' },
      ],
    },

    {
      id: 'privity',
      title: 'Privity of Contract & Assignment',
      icon: '🔗',
      img: 'assets/img/privity.webp',
      mins: 8,
      tags: ['Privity', 'Assignment', 'Collateral warranty'],
      summary:
        'Privity means only the parties to a contract can enforce it. To give rights to third parties you overcome privity by assignment (transfers the benefit only) — often via collateral warranties — or by novation (transfers benefit AND burden).',
      blocks: [
        { t: 'def', term: 'Privity of contract', html: 'A common‑law principle stating that <b>only the parties to a contract</b> have the right to enforce its terms or seek damages for breach. (In some jurisdictions — e.g. KSA, Qatar — the principle may not apply.)' },
        {
          t: 'compare', title: 'Two mechanisms to overcome privity',
          cols: [
            { h: 'Assignment', tone: 'blue', items: ['Transfers the <b>benefit (right) only</b> — not the burden.', 'e.g. right to payment, right to take legal action, assignment of collateral warranties.', 'Often delivered via <b>collateral warranties</b>.'] },
            { h: 'Novation', tone: 'amber', items: ['Transfers <b>both the benefit and the burden</b>.', 'The original party is <b>replaced</b> by a new party.', 'Creates a <b>new</b> contractual relationship.'] },
          ],
        },
        {
          t: 'callout', kind: 'note', title: 'Collateral warranty',
          html: 'A <b>collateral warranty</b> gives certain rights to a <b>third party</b> (Employer, Contractor, tenant, end‑user) who is not party to the original contract. It extends a <b>duty of care</b> from one of the contracting parties to that third party.',
        },
      ],
      flashcards: [
        { q: 'State the privity of contract principle.', a: 'Only the parties to a contract may enforce its terms or claim for breach.' },
        { q: 'Assignment vs novation — the one‑line difference?', a: 'Assignment transfers the benefit only; novation transfers both benefit and burden and creates a new contract with a replacing party.' },
        { q: 'What is a collateral warranty for?', a: 'To extend a duty of care / give enforceable rights to a third party (tenant, funder, end‑user) who is not party to the original contract — overcoming privity.' },
      ],
    },

    {
      id: 'novation',
      title: 'Novation — Ab initio vs Switch',
      icon: '🔄',
      img: 'assets/img/novation.webp',
      mins: 7,
      tags: ['Novation', 'Ab initio', 'Switch', 'D&B'],
      summary:
        'Novation replaces a party and creates a new contract. In design‑build, the Employer\'s design consultant is novated to the D&B contractor. Ab initio novation transfers all historic liabilities; switch novation only from the date of novation.',
      blocks: [
        { t: 'lead', html: 'Classic use: the Employer appoints a design consultant, then <b>novates</b> that consultant to the D&B Contractor so the Contractor takes full single‑point responsibility for the design.' },
        { t: 'flow', title: 'Design‑Build novation', steps: ['Employer ↔ Design Consultant (design contract)', 'Employer signs new D&B contract with Contractor', 'Consultant novated → now under the D&B Contractor', 'Rights & obligations now run between Contractor & Consultant'], note: 'The original Employer–Consultant link is severed and re‑routed under the Contractor.' },
        {
          t: 'compare', title: 'Two types of novation',
          cols: [
            { h: 'Ab initio novation', tone: 'blue', items: ['New party assumes <b>all historic</b> rights and liabilities (as if from the beginning).', 'e.g. the consultant becomes liable to the Contractor for design done <i>before</i> novation; the Contractor becomes liable to the Employer for <b>all</b> design (pre & post).'] },
            { h: 'Switch novation', tone: 'amber', items: ['New party assumes rights & liabilities <b>only from the point of novation</b>.', 'e.g. the consultant stays responsible to the Employer for <i>pre‑novation</i> design; the Contractor is responsible only for <i>post‑novation</i> design.'] },
          ],
        },
      ],
      flashcards: [
        { q: 'What does novation transfer that assignment does not?', a: 'The burden as well as the benefit — it replaces a party and creates a new contract.' },
        { q: 'Ab initio vs switch novation?', a: 'Ab initio = new party takes ALL historic (pre & post) rights/liabilities. Switch = new party takes liabilities only from the date of novation.' },
      ],
    },

    {
      id: 'performance-bond',
      title: 'Performance Security, Bonds & Alternatives',
      icon: '🛡️',
      img: 'assets/img/performance-bond.webp',
      mins: 9,
      tags: ['Performance bond', 'On demand', 'SBLC', 'PCG'],
      summary:
        'A performance bond (≈10% of the contract sum) from a bank protects the Employer if the Contractor breaches. It must be unconditional and on demand — the Employer need not prove default. Alternatives include SBLC, parent company guarantee and extra cash retention.',
      blocks: [
        {
          t: 'points', title: 'Performance Bond / Security / Guarantee',
          items: [
            'Issued by a <b>bank / financial institution</b> for an amount <b>stated in the contract</b> — generally <b>10% of the contract sum</b>.',
            'Verify the issuing bank is <b>locally available and reputable</b> (some contracts require this expressly).',
            '<b>Purpose:</b> if the Contractor <b>breaches its obligations</b>, the Employer can en‑cash the bond to recover losses (a performance breach).',
            '<b>Mandatory wording: unconditional and on demand</b> — the Employer does <b>not</b> need to prove the Contractor\'s default. Use the approved specimen wording in the contract.',
            'If not submitted: the Contractor is not entitled to payment and cannot carry out works; the Employer may terminate.',
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'On‑demand = no proof needed',
          html: 'Because the bond is <b>unconditional & on demand</b>, the Employer does not have to prove entitlement before en‑cashing it. A demand letter to the bank quoting the guarantee reference and amount is enough — e.g. "We hereby demand the amount of $5,400,000 under the Guarantee…".',
        },
        {
          t: 'compare', title: 'Alternatives to a performance bond',
          cols: [
            { h: 'Standby Letter of Credit (SBLC)', tone: 'blue', items: ['Issuer pays on presentation of <b>specific documents</b>, not on default itself.', 'May <b>not</b> be strictly unconditional / on demand.', 'Used by companies with limited funds or uncertain credit.'] },
            { h: 'Parent Company Guarantee (PCG)', tone: 'violet', items: ['A pledge from the <b>parent company</b> to complete the project per the contract if the subsidiary cannot.', 'Good where the contractor is part of a larger group.'] },
            { h: 'Additional cash retention', tone: 'amber', items: ['Extra retention withheld <b>in lieu of</b> a bond.', 'Not recommended, but used in industry.'] },
          ],
        },
      ],
      flashcards: [
        { q: 'What is a performance bond and its typical value?', a: 'A bank security (usually ~10% of the contract sum) the Employer can en‑cash if the Contractor breaches its obligations.' },
        { q: 'Why must the bond be "unconditional and on demand"?', a: 'So the Employer can en‑cash it without proving the Contractor\'s default.' },
        { q: 'Name three alternatives to a performance bond.', a: 'Standby Letter of Credit (SBLC), Parent Company Guarantee (PCG), and additional cash retention.' },
      ],
    },
  ],
});
