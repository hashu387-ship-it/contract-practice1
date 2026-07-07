/* ===================== PROCUREMENT & TENDERING — store + Part 1 =====================
   Second subject of the RICS APC hub. Sources: APC Coaching P&T presentation
   (Parts 1–2, Roshan de Silva) + APC Guidance Note (Procurement & Tendering).
   ==================================================================================== */
window.COURSE_PT = window.COURSE_PT || {
  meta: {
    title: 'Procurement & Tendering',
    titleHTML: 'Procurement <em>&amp;</em> Tendering',
    subtitle: 'MRICS & AIQS APC — Complete Interactive Study Notes',
    lead: 'How a project is structured and delivered — risk allocation, contractual relationships, and how tendering establishes the contract price. Routes, strategies, prequalification, evaluation and award — with explainer videos, mind maps, flashcards and a quiz.',
    author: 'Course by Roshan de Silva · APC Coaching',
    hero: 'assets/img/pt-hero.webp',
  },
  parts: [],
  glossary: [],
  quiz: [],
  viva: [],
};

window.COURSE_PT.parts.push({
  id: 'pt-part1',
  num: 1,
  title: 'Procurement',
  tag: 'Routes · Working arrangements · PPP · Contract types',
  color: '#0e7fb8',
  accent: '#ffcf6b',
  pdf: 'assets/pdf/Procurement_Tendering_Presentation.pdf',
  summary:
    'Procurement is the strategy: how the project is structured and delivered in terms of risk allocation and contractual relationships. This part covers the competency, why procurement matters, the three-aspect framework, every working arrangement (traditional, accelerated, D&B, management routes), relationship & finance-based delivery (partnering, PPP/PFI, BOOT), and contract types & forms.',
  sections: [
    {
      id: 'pt-competency',
      title: 'The Competency & Procurement vs Tendering',
      icon: '🎯',
      img: 'assets/img/pt-competency.webp',
      mins: 7,
      tags: ['RICS levels', 'Strategy vs execution'],
      summary:
        'A core technical competency: how a project is structured and delivered, and how tendering establishes the price. Procurement is the end-to-end strategy; tendering is the execution sub-process that obtains and evaluates offers.',
      blocks: [
        { t: 'quote', html: '“This competency covers how a project is structured and delivered in terms of risk allocation and contractual relationships, and how tendering processes are used to establish a contract price.”', cite: 'RICS competency definition' },
        {
          t: 'table', title: 'RICS / AIQS competency levels',
          headers: ['Level', 'Expectation'],
          rows: [
            ['Level 1 — Knowledge', 'Explain the procurement routes and tendering methods, their advantages, disadvantages and risk allocation.'],
            ['Level 2 — Application', 'Apply procurement procedures, assist in preparing tender documentation, participate in evaluations.'],
            ['Level 3 — Advice', 'Provide strategic advice on procurement selection considering time, cost, quality, risk and market factors.'],
          ],
          note: 'APC tip: at Level 3 use the formula “I advised … because …” and explain how your advice influenced the client\'s decision.',
        },
        {
          t: 'compare', title: 'Procurement vs Tendering — know the difference',
          cols: [
            { h: 'Procurement = strategy', tone: 'blue', items: ['<b>End-to-end</b> process of acquiring works, goods or services — from needs analysis to contract award.', 'Defines the <b>strategic framework</b> and contractual relationships.', 'Output: <b>Procurement Strategy Report</b> (preferred route + rationale).', 'Begins during early design / feasibility.'] },
            { h: 'Tendering = execution', tone: 'amber', items: ['A <b>sub-process</b> focused on obtaining and evaluating competitive offers.', 'Establishes the <b>price</b> and selects the contractor.', 'Output: <b>Tender Evaluation Report</b> & Recommendation for Award.', 'Occurs after the procurement route is decided.'] },
          ],
        },
        { t: 'callout', kind: 'key', title: 'One-liner', html: '<b>Procurement decides HOW to buy; tendering is the bidding process that decides WHO builds and at WHAT price.</b> Candidates who conflate the two lose easy marks.' },
      ],
      flashcards: [
        { q: 'Procurement vs tendering — one line each?', a: 'Procurement = the end-to-end strategy for acquiring works (relationships + risk allocation). Tendering = the sub-process of obtaining and evaluating competitive offers to establish the price.' },
        { q: 'What does Level 3 of this competency require?', a: 'Strategic ADVICE on procurement selection considering time, cost, quality, risk and market factors — “I advised … because …”.' },
      ],
    },

    {
      id: 'pt-importance',
      title: 'Why Procurement Matters',
      icon: '⚖️',
      img: 'assets/img/pt-importance.webp',
      mins: 7,
      tags: ['Time-cost-quality', 'Selection factors'],
      summary:
        'The chosen strategy fixes contractual relationships, risk allocation and control of time, cost and quality — long before work starts on site. Selection balances the project triangle plus risk appetite, complexity, variations, client involvement and design separation.',
      blocks: [
        { t: 'lead', html: 'Procurement defines <b>who does what, when, and under what risk profile</b>. A wrong choice undermines cost certainty, delays delivery or causes disputes; a good one aligns every party\'s commercial incentive with the client\'s objectives. Early procurement planning has been shown to cut post-contract variation costs by up to <b>20%</b>.' },
        {
          t: 'points', title: 'Client objectives the strategy must translate',
          items: [
            { b: 'Time', t: '— speed or certainty of completion (early start? phased delivery?).' },
            { b: 'Cost', t: '— lowest price or budget certainty.' },
            { b: 'Performance / Quality', t: '— design, quality and functionality aspirations.' },
            { b: 'Risk', t: '— appetite to transfer or retain risk.' },
            { b: 'Flexibility', t: '— ability to adapt scope (variations) during construction.' },
          ],
        },
        {
          t: 'steps', title: 'The 8 factors affecting selection of the procurement method',
          items: [
            'Time — speed or certainty.',
            'Performance — design, quality and functionality.',
            'Cost — price or certainty.',
            'Client\'s risk-taking ability.',
            'Complexity of the project.',
            'Need for variations.',
            'Client involvement.',
            'Separation of design from management.',
          ],
        },
        { t: 'callout', kind: 'tip', title: 'The project triangle', html: 'Every route sits somewhere on the <b>time–cost–quality triangle</b>: Traditional gives cost & quality certainty but is slow; Management routes buy speed at the price of cost certainty; D&B trades design control for a single point of responsibility.' },
      ],
      flashcards: [
        { q: 'Name the three headline drivers plus three more selection factors.', a: 'Time, cost, performance/quality; plus client risk appetite, project complexity, need for variations, client involvement, and separation of design from management.' },
        { q: 'How much can early procurement planning cut post-contract variation costs?', a: 'Up to ~20% (RICS/BCIS evidence).' },
      ],
    },

    {
      id: 'pt-framework',
      title: 'The Three Aspects of Procurement',
      icon: '🧭',
      img: 'assets/img/pt-framework.webp',
      mins: 8,
      tags: ['Framework', 'Route comparison'],
      summary:
        'Every procurement decision has three aspects: the working arrangement (traditional / D&B / management paths), the tendering process (open, selective, two-stage, negotiated), and the contract type + form to be used (remeasured, lump sum, cost-reimbursement… under FIDIC/JCT/NEC).',
      blocks: [
        {
          t: 'flow', title: 'Procurement — three aspects',
          steps: ['1. Working arrangement (Traditional · D&B · Management path · Design & Manage)', '2. Tendering process (Open · Single-stage · Two-stage · Negotiated)', '3. Contract type + Form (Remeasured · Lump sum · Cost-reimbursement · Target cost · GMP → FIDIC / JCT / NEC / bespoke)'],
          note: 'Aspect 1 fixes relationships & risk; aspect 2 fixes how the contractor is selected; aspect 3 fixes how the works are valued and under which form.',
        },
        {
          t: 'table', title: 'Comparative analysis of the main routes',
          headers: ['Criteria', 'Traditional', 'Design & Build', 'Management Contracting', 'Construction Management'],
          rows: [
            ['Design responsibility', 'Client / consultants', 'Contractor', 'Client', 'Client'],
            ['Cost certainty at award', 'High', 'Medium–High', 'Medium', 'Low'],
            ['Programme speed', 'Slowest', 'Faster', 'Fast', 'Fastest'],
            ['Client control of design', 'High', 'Medium', 'High', 'Very high'],
            ['Risk to client', 'Low', 'Medium', 'High', 'Very high'],
            ['Suits complex projects', 'Moderate', 'Moderate', 'High', 'High'],
          ],
        },
        { t: 'callout', kind: 'key', title: 'No “best” route', html: 'The professional skill is <b>matching the route to the project drivers and the client\'s risk appetite</b> — not naming a favourite. That reasoning is exactly what Level 3 assesses.' },
      ],
      flashcards: [
        { q: 'What are the three aspects of procurement?', a: '1) Working arrangement, 2) Tendering process / method of selection, 3) Contract type and form of contract to be used.' },
        { q: 'Which route gives the fastest programme, and at what price?', a: 'Construction Management — fastest, but lowest cost certainty and highest client risk.' },
      ],
    },

    {
      id: 'pt-traditional',
      title: 'Traditional & Accelerated Paths',
      icon: '🏛️',
      img: 'assets/img/pt-traditional.webp',
      mins: 8,
      tags: ['Design-bid-build', 'Fast-track'],
      summary:
        'Traditional (sequential): consultants complete the design, contractors bid, and the contractor builds under consultant supervision. Accelerated traditional overlaps design, tendering and construction (tender at ~60–80% design) to start early without transferring design responsibility.',
      blocks: [
        { t: 'def', term: 'Traditional (sequential) path', html: 'The client employs consultants to <b>design</b> the works; contractors <b>bid and build</b>; consultants supervise and certify. Sequence: <b>design → tender → construction</b>. The employer retains design responsibility (typically FIDIC Red Book / JCT SBC, lump sum or remeasured).' },
        {
          t: 'compare', title: 'Traditional — advantages vs disadvantages',
          cols: [
            { h: 'Advantages', tone: 'green', items: ['Well understood across the region; procedures known.', 'Quality under Employer\'s control; power to change.', 'Cost certainty (if no variations) and less contractor risk premium.', 'Contractor responsible for subcontractors & supply chain.', 'Competitive tendering ensures transparency.'] },
            { h: 'Disadvantages', tone: 'red', items: ['No single point of responsibility for design + construction.', 'Longer pre-construction period (time & cost of tendering).', 'Variations expected; tender price vs budget uncertain.', 'Buildability limited — contractor not involved in design.'] },
          ],
        },
        {
          t: 'table', title: 'Traditional vs Accelerated Traditional',
          headers: ['Stage', 'Traditional', 'Accelerated'],
          rows: [
            ['Design', 'Fully completed before tender', 'Tender issued at ~60–80% design information'],
            ['Tendering', 'Main contractor bids on full design', 'Contractor engaged earlier (negotiated / two-stage / package-wise)'],
            ['Construction start', 'After award, full design', 'Early (enabling works, piling, foundations) while design continues'],
            ['Contract structure', 'Employer–Designer–Contractor separate', 'Same — no design transfer, tighter coordination'],
          ],
          note: 'Accelerated risks: design changes → remeasurement claims; supply-chain pressure → quality issues. Mitigate with a clear early-works scope and change control.',
        },
      ],
      flashcards: [
        { q: 'What is the traditional path sequence and who holds design risk?', a: 'Design → tender → construction; the Employer (through its consultants) retains design responsibility.' },
        { q: 'How does accelerated traditional shorten the programme?', a: 'By overlapping design, tendering and construction — tendering at ~60–80% design and starting enabling works early, without transferring design responsibility.' },
      ],
    },

    {
      id: 'pt-db',
      title: 'Design & Build, Turnkey & Design-and-Manage',
      icon: '🏗️',
      img: 'assets/img/pt-db.webp',
      mins: 8,
      tags: ['Single point', 'Novated', 'EPC'],
      summary:
        'D&B gives one contractor design + construction — single-point responsibility and a fast track, at the cost of design control. Variants: pure D&B, novated D&B and turnkey/EPC. Design & Manage combines D&B with the management path.',
      blocks: [
        { t: 'def', term: 'Design & Build (performance-based)', html: 'The client procures the <b>completed product</b> — design and construction — from one contractor (FIDIC <b>Yellow</b> or <b>Silver</b>). Fast-track; risk transfers to the contractor, but the client loses some control over the project.' },
        {
          t: 'steps', title: 'Three D&B variants',
          items: [
            { b: 'Pure D&B', t: '— contractor develops the design from the employer\'s performance requirements.' },
            { b: 'Novated D&B', t: '— the client\'s design team is transferred (novated) to the contractor post-tender for design continuity.' },
            { b: 'Turnkey / EPC', t: '— contractor delivers a fully operational facility at a fixed price and date (FIDIC Silver). Maximum risk transfer — but “risk transfer is never free”: watch for hidden risk premiums.' },
          ],
        },
        {
          t: 'compare', title: 'D&B — advantages vs disadvantages',
          cols: [
            { h: 'Advantages', tone: 'green', items: ['Firm price before construction; cost certainty (if no design interference).', '<b>Single-point responsibility</b>.', 'Less time-consuming; buildability & fitness for purpose built in.'] },
            { h: 'Disadvantages', tone: 'red', items: ['Design control passes to the contractor; quality may be compromised.', 'Bids difficult to compare; variations costly.', 'No design overview unless the client appoints its own consultants.', 'Risk premiums in the price.'] },
          ],
        },
        { t: 'callout', kind: 'note', title: 'Design & Manage', html: 'A hybrid of D&B + management: one firm <b>designs and manages</b> while specialist contractors execute (cf. FIDIC Gold — design, build & operate). Single-point responsibility and time saving, but management fees can be high and there is no direct contractual control of the works contractors.' },
      ],
      flashcards: [
        { q: 'Name the three D&B variants.', a: 'Pure D&B (performance spec), Novated D&B (client design team novated to contractor), Turnkey/EPC (fully operational facility, FIDIC Silver).' },
        { q: 'The big trade-off of D&B?', a: 'Single-point responsibility and speed in exchange for reduced client design control (and embedded risk premiums).' },
      ],
    },

    {
      id: 'pt-management',
      title: 'Management Contracting vs Construction Management',
      icon: '🧑‍💼',
      img: 'assets/img/pt-management.webp',
      mins: 8,
      tags: ['MC fee basis', 'CM agent', 'Packages'],
      summary:
        'Both are management paths for early starts on complex projects. In Management Contracting the MC holds the package subcontracts (fee basis); in Construction Management the client contracts each trade contractor directly and the CM acts only as agent.',
      blocks: [
        {
          t: 'compare', title: 'The critical difference',
          cols: [
            { h: 'Management Contracting', tone: 'blue', items: ['Client appoints the <b>Management Contractor</b> early (fixed or % fee).', 'MC advises on programming & buildability and <b>holds the package subcontracts</b>.', 'Packages let lump sum / remeasured / cost-reimbursable; can start as design is approved.'] },
            { h: 'Construction Management', tone: 'violet', items: ['Client appoints a <b>Construction Manager</b> early on a fee basis — <b>agent only</b>.', 'The client <b>contracts directly</b> with each trade contractor.', 'Maximum client control & visibility; CM has no liability for trade performance.'] },
          ],
        },
        {
          t: 'compare', title: 'Strengths vs weaknesses',
          cols: [
            { h: 'Advantages (both)', tone: 'green', items: ['Early start – early completion; parallel working inherent.', 'Experienced contractor input to manage buildability.', 'Late changes easily accommodated.', 'Work packages tendered competitively (open-book transparency).'] },
            { h: 'Disadvantages', tone: 'red', items: ['<b>No cost certainty</b> until the last package final account is agreed.', 'No single point of design + construction responsibility.', 'Management costs can be high; needs a quality brief and competent team.', 'Client exposed to MC/CM failure; CM route adds heavy coordination burden on the client.'] },
          ],
        },
        { t: 'callout', kind: 'tip', title: 'When to choose', html: 'Choose a management route when <b>time is the driver</b> and the client is mature enough to carry the risk — e.g. a stadium letting steel & façade packages in parallel to save months.' },
      ],
      flashcards: [
        { q: 'MC vs CM — who holds the trade contracts?', a: 'Management Contracting: the MC holds the package subcontracts. Construction Management: the client contracts each trade directly; the CM is only an agent.' },
        { q: 'When is cost certainty achieved on a management route?', a: 'Only when the final account of the last package is agreed — cost certainty is inherently low.' },
      ],
    },

    {
      id: 'pt-relationship',
      title: 'Partnering, PPP/PFI & Finance-Based Routes',
      icon: '🤝',
      img: 'assets/img/pt-relationship.webp',
      mins: 9,
      tags: ['Partnering', 'BOOT/BOT', 'Swiss Challenge'],
      summary:
        'Relationship-based delivery: partnering (project or strategic) built on trust, open-book pricing and pain/gain share. Finance-based delivery: PPP and PFI concessions through an SPV, with models such as BOOT, BOT and BOOM, plus the Swiss Challenge for unsolicited proposals.',
      blocks: [
        {
          t: 'points', title: 'Partnering agreements',
          items: [
            'Collaborative team of client, contractors and suppliers — <b>trust, shared goals, problem-solving instead of blame</b>.',
            { b: 'Project partnering', t: '— for one specific project. <b>Strategic partnering</b> — long-term across multiple projects (framework agreements).' },
            'Open-book pricing, shared risk (pain/gain), early contractor involvement — cf. <b>NEC Option C</b> target cost.',
            'Best for large, complex, long-term programmes; needs strong client leadership and genuine shared incentive.',
          ],
        },
        {
          t: 'table', title: 'PPP vs PFI',
          headers: ['Feature', 'PPP', 'PFI'],
          rows: [
            ['Definition', 'Broad term for private-sector collaboration in public projects', 'A specific type of PPP with full private financing (UK-originated)'],
            ['Funding', 'Private or joint public–private', 'Strictly 100% private'],
            ['Payment', 'User fees, government payments, or hybrid', 'Government pays unitary charges (long-term service payments)'],
            ['Risk', 'Balanced sharing', 'Private sector bears most risks'],
            ['Duration', '5–30 years', 'Typically 25–30 years'],
            ['Applications', 'Highways, airports, power, urban development', 'Hospitals, schools, prisons'],
          ],
          note: 'Delivered through an SPV (special purpose vehicle) funded by debt + equity, paid on availability or usage.',
        },
        {
          t: 'steps', title: 'PPP models + the Swiss Challenge',
          items: [
            { b: 'BOOT', t: '— Build-Own-Operate-Transfer: private entity builds, owns & operates (20–30 yrs), then transfers to government.' },
            { b: 'BOT', t: '— Build-Operate-Transfer: builds & operates (no ownership), then transfers — e.g. Istanbul Airport, Jebel Ali Port.' },
            { b: 'BOOM', t: '— Build-Own-Operate-Maintain: permanently owns and maintains (no transfer).' },
            { b: 'Swiss Challenge', t: '— a private entity submits an unsolicited proposal; the government invites competing bids; the original proponent may match or better the best offer to win.' },
          ],
        },
      ],
      flashcards: [
        { q: 'Project vs strategic partnering?', a: 'Project partnering = one specific project. Strategic partnering = long-term relationship across multiple projects (e.g. framework agreements).' },
        { q: 'BOOT vs BOT vs BOOM?', a: 'BOOT: build-own-operate then transfer. BOT: build-operate (no ownership) then transfer. BOOM: build-own-operate-maintain — never transfers.' },
        { q: 'What is the Swiss Challenge?', a: 'A transparent process for unsolicited proposals: government invites competing bids and the original proponent can match/better the best offer to win.' },
      ],
    },

    {
      id: 'pt-types',
      title: 'Contract Types, Forms & Other Arrangements',
      icon: '💷',
      img: 'assets/img/pt-types.webp',
      mins: 9,
      tags: ['Target cost', 'GMP', 'Frameworks'],
      summary:
        'Contract types allocate risk by fixing how the works are valued: remeasured, lump sum, cost-reimbursement (%, fixed or fluctuating fee), target cost (pain/gain) and GMP. Plus term, call-off, serial, continuation and framework arrangements, hybrids, and the FIDIC/JCT/NEC forms.',
      blocks: [
        {
          t: 'table', title: 'Contract types (methods of valuing the works)',
          headers: ['Type', 'How it works', 'Best use'],
          rows: [
            ['Re-measurement (measure & pay)', 'Paid on actual quantities against a BOQ', 'Infrastructure / uncertain quantities'],
            ['Lump sum', 'Fixed price for a defined scope', 'Traditional & D&B with complete definition'],
            ['Cost-reimbursement', 'Actual cost + fee: <b>percentage</b>, <b>fixed</b> or <b>fluctuating</b> fee', 'Renovation / emergency works'],
            ['Target cost plus', 'Pain/gain share around an agreed target (e.g. 50/50)', 'Partnering & alliances — but hard to negotiate, needs open cost data'],
            ['GMP', 'Contractor bears all cost beyond a guaranteed maximum; savings shared or returned per contract', 'Fast-track with a capped price'],
          ],
        },
        {
          t: 'points', title: 'Other procurement arrangements',
          items: [
            { b: 'Term contract', t: '— long-term agreement for recurring services at pre-agreed rates (routine maintenance).' },
            { b: 'Call-off contract', t: '— master agreement to “call off” goods/services as needed, no fixed quantity (variable or emergency demand).' },
            { b: 'Serial contract', t: '— repeated similar projects priced on rates from a previous competitive tender (batch housing, schools).' },
            { b: 'Continuation contract', t: '— extends an existing contract beyond its original term.' },
            { b: 'Framework agreement', t: '— pre-approved panel & terms for future work with no guaranteed volume; single- or multi-supplier.' },
            { b: 'Hybrid procurement', t: '— combining strategies (e.g. D&B + PPP; CM + target cost; framework + call-offs) when one method can\'t meet complex needs.' },
          ],
        },
        {
          t: 'callout', kind: 'note', title: 'Forms of contract',
          html: 'The form translates the strategy into legal terms: the <b>FIDIC rainbow</b> (Red — employer design; Yellow — plant & D&B; Silver — EPC/turnkey; Green — short form; Pink — MDB; White — consultancy; Gold — DBO; Blue — dredging; Emerald — underground), <b>NEC4</b> (collaboration, early warnings), <b>JCT 2016</b> (prescriptive, design-led UK works) and bespoke forms. Choosing the wrong form can nullify a well-chosen route.',
        },
      ],
      flashcards: [
        { q: 'How does target cost plus work?', a: 'Parties agree a target price; overruns and savings are shared on an agreed pain/gain formula (e.g. 50/50). Uncommon — hard to negotiate and relies on open cost data.' },
        { q: 'Framework vs call-off?', a: 'A framework sets a pre-approved panel and terms with no guaranteed work; call-offs are the individual orders placed under it (or under a master call-off contract) as demand arises.' },
        { q: 'GMP — who carries the overrun?', a: 'The contractor bears all costs beyond the guaranteed maximum price; treatment of savings (returned or shared) depends on the contract terms.' },
      ],
    },
  ],
});
