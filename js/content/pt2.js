/* ===================== PROCUREMENT & TENDERING — Part 2 + glossary/quiz/viva ===================== */
window.COURSE_PT.parts.push({
  id: 'pt-part2',
  num: 2,
  title: 'Tendering',
  tag: 'Strategies · Prequalification · Evaluation · Award',
  color: '#8a4fd8',
  accent: '#ffcf6b',
  pdf: 'assets/pdf/Procurement_Tendering_Guidance_Note.pdf',
  summary:
    'Tendering is the execution: inviting, receiving and evaluating offers to establish a fair price and appoint the right contractor. This part covers the key principles, the four strategies (+ e-tendering), prequalification, the ITT and tender documents, the tender period, technical & commercial evaluation, ICV, and contract award with full governance.',
  sections: [
    {
      id: 'pt-tendering',
      title: 'Tendering & Its Key Principles',
      icon: '📜',
      img: 'assets/img/pt-tendering.webp',
      mins: 8,
      tags: ['Fairness', 'Bid rigging', 'Value for money'],
      summary:
        'Tendering exists to select the right contractor, promote fair competition, ensure transparency and avoid disputes. Principles: equal information, short qualified lists, confidentiality, adequate time, quality + price assessment, and no bid shopping or rigging.',
      blocks: [
        { t: 'def', term: 'Tendering', html: 'The <b>bidding process to obtain a price</b> — and how a contractor is actually appointed. Objectives: select a technically & financially competent contractor, promote competition for <b>value for money</b>, create commitment, ensure transparency and accountability, avoid disputes, and deliver to time-cost-quality.' },
        {
          t: 'points', title: 'Key principles of tendering',
          items: [
            'Ensure receipt of <b>compliant & competitive</b> tenders from a list of qualified contractors — keep the list <b>as short as possible</b>.',
            '<b>Same conditions and information</b> for all tenderers; confidentiality respected by all parties.',
            '<b>Sufficient time</b> for preparation and evaluation; sufficient information to price properly.',
            'Assess on <b>quality as well as price</b>, against a pre-tender estimate; explain the evaluation criteria and their weighting up front.',
            'Offer feedback to tenderers; commit to team-work; use a clean, <b>un-amended form of contract</b>.',
            { b: 'Avoid bid shopping', t: '— using one bidder\'s price to squeeze others.' },
            { b: 'Avoid bid rigging', t: '— illegal manipulation of the process so a pre-selected bidder wins unfairly.' },
          ],
        },
        {
          t: 'flow', title: 'The tender process at a glance',
          steps: ['Tender preparation (PQ + shortlist · ITT · documentation)', 'Tender period (queries · addenda · site visits · submission)', 'Evaluation (opening · technical · commercial · clarifications)', 'Recommendation & award'],
        },
        { t: 'callout', kind: 'tip', title: 'Why a robust strategy?', html: 'Competitive pricing, lower contractor-failure risk through PQ, fewer disputes via clear documents, regulatory transparency (no favouritism), realistic timelines, long-term contractor trust — and it can embed <b>ESG</b> criteria in bids. (RICS guidance + UK Construction Playbook.)' },
      ],
      flashcards: [
        { q: 'Name four key principles of tendering.', a: 'Equal information/conditions for all bidders; short list of qualified contractors; sufficient time & information; assess quality as well as price; confidentiality; avoid bid shopping/rigging; clean unamended form of contract.' },
        { q: 'Bid shopping vs bid rigging?', a: 'Bid shopping: disclosing one bidder\'s price to extract lower offers. Bid rigging: illegal collusion to falsely control competition so a pre-selected bidder wins.' },
      ],
    },

    {
      id: 'pt-strategies',
      title: 'Tendering Strategies',
      icon: '🗂️',
      img: 'assets/img/pt-strategies.webp',
      mins: 10,
      tags: ['Open', 'Two-stage', 'Negotiated', 'E-tendering'],
      summary:
        'Open tendering maximises competition; single-stage selective invites only prequalified bidders; two-stage brings the contractor in early under a PCSA before negotiating a fixed price; negotiated goes direct to one contractor. E-tendering is a platform, not a strategy.',
      blocks: [
        {
          t: 'compare', title: 'The four strategies',
          cols: [
            { h: 'Open', tone: 'blue', items: ['Public advertisement — <b>anyone may bid</b>.', '+ Maximum competition & prices; new entrants.', '− Long evaluation, admin burden, incompetent bidders, abortive tendering cost; price over quality.', 'Best for simple, well-defined works (e.g. government projects). RICS guidance is silent on it.'] },
            { h: 'Single-stage selective', tone: 'violet', items: ['Only <b>prequalified</b> contractors invited.', '+ Controlled competition; faster evaluation; higher bid quality.', '− Less competition → possibly higher prices; blocks newcomers; collusion / tender-rigging risk.', 'For clients prioritising speed + risk reduction over lowest price.'] },
            { h: 'Two-stage selective', tone: 'teal', items: ['Contractor appointed early on preliminary scope under a <b>PCSA</b> for <b>Early Contractor Involvement</b>; lump sum negotiated at Stage 2.', '+ Buildability & VE input; early start during design.', '− Cost certainty only after Stage 2; risk of price disputes; client dependency.', 'For complex, fast-track projects with incomplete design.'] },
            { h: 'Negotiated', tone: 'amber', items: ['Direct negotiation with a preferred contractor.', '+ Speed; confidentiality; trusted track record.', '− No competition → risk of inflated price; nothing to compare.', 'For limited competent suppliers, confidential projects, emergencies or continuity works.'] },
          ],
        },
        {
          t: 'steps', title: 'Two-stage in detail',
          items: [
            { b: 'Stage 1', t: '— tender on incomplete design + TOR: bidders submit programme & method, preliminaries + OH&P %, ad-hoc schedule of rates and design/VE suggestions; preferred contractor appointed under a PCSA (consultancy-style, no obligation for Stage 2).' },
            { b: 'Stage 2', t: '— with the design finalised, the contractor prices a lump sum (or remeasure/target cost) from the completed BOQ; agree and contract — or the client renegotiates / retenders.' },
          ],
        },
        { t: 'callout', kind: 'warn', title: 'E-tendering is a platform, not a choice', html: 'Digital advertisement, submission and evaluation (e.g. SAP Ariba, Mercell). Cuts cycle time ~30–50%, less bias, encrypted submissions, global reach — but needs robust IT, and small contractors may lack access. It can host any of the four strategies.' },
      ],
      flashcards: [
        { q: 'What is a PCSA and where does it appear?', a: 'Pre-Construction Services Agreement — the consultancy-style appointment of the preferred contractor during Stage 1 of two-stage tendering (Early Contractor Involvement), before the Stage 2 price is agreed.' },
        { q: 'When is negotiated tendering appropriate?', a: 'Limited competent contractors, confidential projects (palaces, military), emergencies, or continuity of existing works.' },
        { q: 'Is e-tendering a tendering strategy?', a: 'No — it is a tendering PLATFORM that can carry any strategy (open, selective, two-stage, negotiated).' },
      ],
    },

    {
      id: 'pt-prequal',
      title: 'Prequalification of Bidders',
      icon: '✅',
      img: 'assets/img/pt-prequal.webp',
      mins: 7,
      tags: ['PQ criteria', 'Weighted matrix'],
      summary:
        'PQ screens contractors for technical, financial and legal capability before they may bid — filtering out the unqualified, reducing evaluation effort and levelling competition. Assessed via a weighted matrix; can be project-specific or organisation-wide (annual).',
      blocks: [
        { t: 'def', term: 'Prequalification (PQ)', html: 'A screening process assessing contractors\' <b>capabilities, experience and financial stability</b> before allowing them to bid — ensuring only qualified firms participate. Performed per project, annually, or on demand.' },
        {
          t: 'table', title: 'What bidders must submit',
          headers: ['Category', 'Evaluation factors'],
          rows: [
            ['Technical', 'Relevant experience (similar size/scope); key personnel CVs & org charts; resources/equipment; current workload; HSE competence; QA approach; history of non-performed contracts; litigation history; conflicts of interest'],
            ['Financial', 'Audited financial statements (P&L, balance sheet, cash flow); creditworthiness / bank references; average annual turnover'],
            ['Legal / compliance', 'Valid licences & registrations; past litigation/safety record; labour & environmental compliance; local partnership / ICV'],
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Score it with a weighted matrix', html: 'e.g. Financial strength 25% · Technical experience 35% · Resources & staff 15% · HSE & QA/QC 10% · Local participation 15%. <b>Always record reasons for inclusion/exclusion</b> — procurement audits and APC assessors both probe procedural integrity.' },
      ],
      flashcards: [
        { q: 'Purpose of prequalification?', a: 'Reduce non-performance risk, save evaluation time by filtering unqualified firms, and ensure fair competition among competent bidders.' },
        { q: 'Name the three PQ criteria categories.', a: 'Technical (experience, people, resources, HSE/QA), Financial (audited accounts, credit, turnover), Legal/compliance (licences, litigation, ICV).' },
      ],
    },

    {
      id: 'pt-itt',
      title: 'Invitation to Tender & Tender Documents',
      icon: '📨',
      img: 'assets/img/pt-itt.webp',
      mins: 8,
      tags: ['ITT contents', '5 volumes', 'QS role'],
      summary:
        'The ITT formally starts competitive bidding under fair, transparent rules — same information to every bidder. The tender document is typically compiled in five volumes: tendering & contract conditions, specifications, drawings, BOQ, and supporting information.',
      blocks: [
        {
          t: 'points', title: 'ITT — minimum contents',
          items: [
            'Introduction, brief scope of work & project background; project duration.',
            'Document purchase price and where/when documents are obtained.',
            'Tender security (bid bond) and performance guarantee details.',
            'Closing date/venue and bidding period; contact person details; client/consultant/engineer details.',
            'Submission type — <b>single or two-envelope</b> (technical + commercial); tender acknowledgement.',
          ],
        },
        {
          t: 'table', title: 'Tender document — the five volumes (industry practice)',
          headers: ['Volume', 'Contents'],
          rows: [
            ['Vol 1 — Tendering & contract conditions', 'Instructions to Tenderers + annexures; acknowledgement & confirmation forms; Form of Tender + Appendix; Form of Agreement; Conditions Part I (General) & Part II (Particular); specimen forms (tender bond, insurances)'],
            ['Vol 2 — Specifications', 'Scope of work; general & particular specifications (civil, architectural, MEP; infra)'],
            ['Vol 3 — Drawings', 'Architectural, structural, mechanical, electrical, external'],
            ['Vol 4 — BOQ', 'Pricing preambles, bill sections, dayworks, PS & PC sums, summary'],
            ['Vol 5 — Other information', 'Anything supporting pricing — e.g. soil reports'],
          ],
        },
        { t: 'callout', kind: 'key', title: 'The QS role', html: 'Prepare the documentation, <b>check consistency between drawings, specification and BOQ</b>, and manage clarifications through a controlled, auditable channel — that consistency-checking is classic Level 2 evidence.' },
      ],
      flashcards: [
        { q: 'What are the five volumes of a typical tender document?', a: 'V1 tendering & contract conditions; V2 specifications; V3 drawings; V4 BOQ; V5 other supporting information (e.g. soil report).' },
        { q: 'What is the two-envelope system?', a: 'Technical and commercial bids submitted in separate sealed envelopes; the commercial envelope is opened only for technically acceptable bidders.' },
      ],
    },

    {
      id: 'pt-tenderperiod',
      title: 'Site Visits, Queries & Addenda',
      icon: '🔍',
      img: 'assets/img/pt-tenderperiod.webp',
      mins: 7,
      tags: ['Equality of information', 'Addenda'],
      summary:
        'During the tender period: site visits let bidders price real conditions (often mandatory); queries are answered in writing to all bidders simultaneously; addenda formally amend the documents and must be acknowledged; bulletins carry minor clarifications.',
      blocks: [
        {
          t: 'points', title: 'Site visits — why and what to check',
          items: [
            'Assess ground conditions, access and logistics; identify hidden hazards (utilities, soil, weather); verify site vs drawings; plan cranage, storage and workflows (buildability).',
            'Often <b>mandatory</b> — skipping may disqualify the bid; record attendance and distribute minutes.',
            { b: 'Contractor checklist:', t: 'location & nearest cities; surrounding structures; demolition needs; soil & obstructions; access; dumping areas / borrow pits — and evidence of attendance.' },
          ],
        },
        {
          t: 'compare', title: 'Queries vs Addenda vs Bulletins',
          cols: [
            { h: 'Tender queries', tone: 'blue', items: ['Bidders ask via email/portal in the query period (deadline e.g. 7 days before close).', 'Responses in writing <b>to all bidders</b> — a shared, numbered clarification log keeps it fair and auditable.'] },
            { h: 'Addenda', tone: 'amber', items: ['<b>Formal numbered amendments</b> (design changes, extended deadlines).', 'Receipt must be acknowledged on a returnable sheet and forms part of the tender; highlight changes and allow adjustment time.'] },
            { h: 'Bulletins', tone: 'teal', items: ['Minor clarifications / FAQ / site-visit info — less formal, via email or portal.'] },
          ],
        },
        { t: 'callout', kind: 'law', title: 'The governing principle', html: '<b>Equality of information</b> — every bidder receives the same information at the same time. Never respond to one bidder privately; it breaches RICS ethical standards and voids the fairness of the competition.' },
      ],
      flashcards: [
        { q: 'How must tender queries be answered?', a: 'In writing, simultaneously to ALL bidders, through a numbered clarification log — preserving equality of information.' },
        { q: 'Addendum vs bulletin?', a: 'Addendum: formal numbered amendment to the tender documents, acknowledged in writing and forming part of the tender. Bulletin: informal minor clarification/FAQ.' },
      ],
    },

    {
      id: 'pt-evaluation',
      title: 'Submission, Opening & Tender Evaluation',
      icon: '🧮',
      img: 'assets/img/pt-evaluation.webp',
      mins: 10,
      tags: ['75-point cutoff', 'Normalisation'],
      summary:
        'Sealed/e-submissions by deadline (late bids rejected), formal committee opening, then technical evaluation FIRST (typical 75-point cutoff) followed by commercial evaluation of only the technically acceptable bids — arithmetic checks, normalisation, rate analysis and clarifications.',
      blocks: [
        {
          t: 'points', title: 'Submission, opening & the compliance checklist',
          items: [
            'Sealed envelopes / tender box or e-tendering; envelopes marked “Technical bid” / “Commercial bid” under the two-envelope system; <b>late tenders rejected</b>; safe custody and confidentiality.',
            'Opening by a tender committee (quorum ≥ 2), communication restricted, tender opening form signed; one original stored securely.',
            { b: 'Checklist:', t: 'covering letter; signed & stamped Form of Tender; Power of Attorney; valid trade licence; tender bond value & validity; all documents + addenda signed and acknowledged; alternative offers / qualifications / deviations noted.' },
          ],
        },
        {
          t: 'compare', title: 'Technical first, commercial second — why?',
          cols: [
            { h: 'Technical evaluation', tone: 'blue', items: ['Done <b>before</b> commercial so price cannot bias competence decisions.', 'Weighted criteria: experience & past performance, methodology & work plan, key personnel & resources, HSE, QA/QC & ISO, financial stability, innovation/VE.', 'Typical <b>cut-off 75 points</b> — below it, the commercial envelope is never opened.'] },
            { h: 'Commercial evaluation', tone: 'amber', items: ['Open prices only for technically acceptable bidders; declare prices at the opening.', 'Check bonds; arithmetic corrections (<b>words govern figures</b>); unpriced items; normalisation/equalisation; rate analysis; clear qualifications; alternative offers; PS/PC & daywork rates; payment-term compliance; currency adjustments; life-cycle cost comparison.'] },
          ],
        },
        { t: 'callout', kind: 'case', title: 'Why normalisation matters', html: 'In a D&B hotel tender, Bidder B looked lowest — until arithmetic corrections and pricing the excluded scope made Bidder C the most competitive. A transparent normalisation process is what makes the recommendation defensible.' },
      ],
      flashcards: [
        { q: 'Why is technical evaluation done before commercial?', a: 'So only competent, compliant bidders advance — and the prices cannot influence the technical scoring. Typical pass mark: 75 points.' },
        { q: 'In an arithmetic mismatch, what governs?', a: 'The amount in words governs over figures; arithmetic errors are corrected and prices normalised before comparison.' },
        { q: 'What is normalisation/equalisation?', a: 'Adjusting all bids onto a like-for-like basis — correcting errors, pricing exclusions/unpriced items — so the comparison is fair and defensible.' },
      ],
    },

    {
      id: 'pt-award',
      title: 'ICV, Recommendation & Contract Award',
      icon: '🏁',
      img: 'assets/img/pt-award.webp',
      mins: 8,
      tags: ['ICV', 'Award report', 'Governance'],
      summary:
        'In-Country Value embeds local employment, materials and SMEs into evaluation (often 5–20% of the score). The evaluation report justifies the recommendation; award = LOA to the winner, regrets to the rest, bonds released, and a complete audit trail.',
      blocks: [
        {
          t: 'points', title: 'In-Country Value (ICV)',
          items: [
            'The economic benefit a project brings to the host country by prioritising <b>local labour, materials, suppliers and SMEs</b>, plus technology/knowledge transfer and CSR.',
            'Often a <b>weighted component of 5–20%</b> in tender evaluation; bidders submit ICV certificates or plans.',
            { b: 'Examples:', t: 'Saudi Vision 2030 — 30% local workforce; Oman Tawteen — 10–15% SME subcontracting; UAE ICV certificates — Emirati hiring; Qatar NV 2030 — 20% local materials.' },
          ],
        },
        {
          t: 'steps', title: 'From recommendation to award',
          items: [
            { b: 'Evaluation report', t: '— executive summary; project info & budget; tendering process (bidders, offers, events); technical + commercial evaluation with price summaries and variance vs estimate; recommendation; attachments (consolidated BOQ, revised-price letters).' },
            { b: 'Decision', t: '— by higher management or the tender committee; post-tender negotiations may clarify minor issues but must not distort fairness.' },
            { b: 'Award', t: '— Letter of Award/Acceptance to the successful bidder (contract forms on issue + acknowledgement, or on signing the agreement).' },
            { b: 'Close-out', t: '— regret letters to unsuccessful bidders; release tender bonds (usually once the winner\'s performance bond is in); administer the contract.' },
          ],
        },
        { t: 'callout', kind: 'key', title: 'Governance & audit', html: 'Keep the full audit trail — invitations, correspondence, evaluation sheets, minutes, approvals, award letters. <b>“If it isn\'t documented, it didn\'t happen.”</b>' },
      ],
      flashcards: [
        { q: 'What is ICV and how does it enter evaluation?', a: 'In-Country Value — local employment, materials, SME subcontracting, knowledge transfer & CSR; typically a weighted 5–20% component of the tender score, evidenced by ICV certificates/plans.' },
        { q: 'When are tender bonds released to unsuccessful bidders?', a: 'Generally only after the successful bidder submits its performance bond; regrets are then issued and the contract administered.' },
      ],
    },
  ],
});

/* ---------------- P&T glossary ---------------- */
window.COURSE_PT.glossary = [
  { term: 'Procurement', def: 'End-to-end process of acquiring works, goods or services — strategy, relationships and risk allocation from needs analysis to award.', tags: ['strategy'] },
  { term: 'Tendering', def: 'The bidding sub-process that obtains and evaluates competitive offers to establish price and select the contractor.', tags: ['process'] },
  { term: 'Traditional path', def: 'Design by consultants, then tender, then construction; employer retains design risk (design-bid-build).', tags: ['route'] },
  { term: 'Accelerated traditional', def: 'Traditional with overlapped design/tender/construction — tender at ~60–80% design, early enabling works.', tags: ['route'] },
  { term: 'Design & Build', def: 'One contractor designs and constructs — single-point responsibility, faster, less client design control.', tags: ['route'] },
  { term: 'Novated D&B', def: 'The client\'s design team is transferred to the D&B contractor post-tender for design continuity.', tags: ['route'] },
  { term: 'EPC / Turnkey', def: 'Contractor delivers a fully operational facility at a fixed price and date (FIDIC Silver); maximum risk transfer.', tags: ['route'] },
  { term: 'Management Contracting', def: 'MC appointed early on a fee; holds the package subcontracts; cost certainty only at last package FA.', tags: ['route'] },
  { term: 'Construction Management', def: 'CM is agent only; the client contracts each trade directly — fastest, most client control, most client risk.', tags: ['route'] },
  { term: 'Design & Manage', def: 'One firm designs and manages while specialist contractors execute; D&B + management hybrid.', tags: ['route'] },
  { term: 'Partnering', def: 'Collaborative delivery on trust, shared goals, open-book pricing and pain/gain — project or strategic.', tags: ['relationship'] },
  { term: 'PPP / PFI', def: 'Private-sector delivery of public assets via an SPV concession (PFI = 100% private finance, unitary charges).', tags: ['finance'] },
  { term: 'BOOT / BOT / BOOM', def: 'Concession models: Build-Own-Operate-Transfer; Build-Operate-Transfer; Build-Own-Operate-Maintain (no transfer).', tags: ['finance'] },
  { term: 'Swiss Challenge', def: 'Unsolicited proposal process where competitors bid and the original proponent may match/better the best offer.', tags: ['finance'] },
  { term: 'Target cost (pain/gain)', def: 'Agreed target price; savings/overruns shared per formula — the basis of NEC Option C.', tags: ['contract type'] },
  { term: 'GMP', def: 'Guaranteed Maximum Price — contractor bears cost beyond the cap; savings shared or returned per contract.', tags: ['contract type'] },
  { term: 'Framework agreement', def: 'Pre-approved panel and terms for future work, without guaranteed volume; orders placed via call-offs.', tags: ['arrangement'] },
  { term: 'Two-stage tendering', def: 'Early contractor involvement under a PCSA on preliminary scope (Stage 1), then a negotiated fixed price (Stage 2).', tags: ['strategy'] },
  { term: 'PCSA', def: 'Pre-Construction Services Agreement — consultancy-style appointment of the preferred contractor during Stage 1.', tags: ['strategy'] },
  { term: 'Prequalification', def: 'Screening of technical, financial and legal capability before bidders are invited; scored on a weighted matrix.', tags: ['process'] },
  { term: 'ITT', def: 'Invitation to Tender — the formal package (instructions, forms, conditions, spec, drawings, BOQ) starting the bid.', tags: ['process'] },
  { term: 'Two-envelope system', def: 'Technical and commercial bids sealed separately; prices opened only for technically acceptable bidders.', tags: ['process'] },
  { term: 'Addendum', def: 'Formal numbered amendment to tender documents; receipt acknowledged and forming part of the tender.', tags: ['process'] },
  { term: 'Normalisation', def: 'Adjusting bids to a like-for-like basis (arithmetic, exclusions, unpriced items) before comparison.', tags: ['evaluation'] },
  { term: 'Bid rigging', def: 'Illegal manipulation of the tender process so a pre-selected bidder wins unfairly.', tags: ['ethics'] },
  { term: 'Bid shopping', def: 'Improper disclosure of one bidder\'s price to extract lower offers from others.', tags: ['ethics'] },
  { term: 'ICV', def: 'In-Country Value — local employment, materials and SME content weighted (often 5–20%) in evaluation.', tags: ['evaluation'] },
  { term: 'E-tendering', def: 'A digital tendering platform (not a strategy) — faster cycles, auditability, encrypted submissions.', tags: ['process'] },
];

/* ---------------- P&T quiz ---------------- */
window.COURSE_PT.quiz = [
  { part: 1, q: 'Procurement vs tendering — which statement is correct?', options: ['They are the same process', 'Procurement is the end-to-end strategy; tendering is the sub-process that obtains and evaluates offers', 'Tendering comes before the procurement route is decided', 'Procurement only means buying materials'], answer: 1, why: 'Procurement = strategy (relationships + risk allocation); tendering = execution that establishes the price.' },
  { part: 1, q: 'Which route offers single-point responsibility for design and construction?', options: ['Traditional', 'Design & Build', 'Construction Management', 'Term contract'], answer: 1, why: 'In D&B one contractor carries both design and construction (FIDIC Yellow/Silver).' },
  { part: 1, q: 'In Construction Management, who holds the trade contracts?', options: ['The Construction Manager', 'The Management Contractor', 'The client, directly', 'The architect'], answer: 2, why: 'The CM is agent only — each trade contractor contracts directly with the employer.' },
  { part: 1, q: 'BOOT stands for…', options: ['Build-Own-Operate-Transfer', 'Build-Operate-Own-Tender', 'Buy-Own-Operate-Transfer', 'Build-Operate-Offset-Transfer'], answer: 0, why: 'Private entity builds, owns and operates for the concession (20–30 yrs), then transfers to government.' },
  { part: 1, q: 'Under a GMP contract, cost overruns beyond the cap are borne by…', options: ['The employer', 'The contractor', 'Shared 50/50 always', 'The insurer'], answer: 1, why: 'The contractor bears all costs beyond the guaranteed maximum price.' },
  { part: 1, q: 'Which is NOT one of the three aspects of procurement?', options: ['Working arrangement', 'Tendering process', 'Contract type & form', 'The defects liability period'], answer: 3, why: 'The three aspects: working arrangement, tendering process/method of selection, and contract type + form.' },
  { part: 2, q: 'The typical technical-evaluation cut-off before the commercial envelope is opened is…', options: ['50 points', '60 points', '75 points', '90 points'], answer: 2, why: 'A 75-point technical pass mark is the common practice; below it the commercial bid is never opened.' },
  { part: 2, q: 'In two-stage tendering, the Stage 1 appointment is made under a…', options: ['LOI', 'PCSA', 'GMP', 'Framework'], answer: 1, why: 'The preferred contractor delivers pre-construction services under a Pre-Construction Services Agreement.' },
  { part: 2, q: 'Tender queries must be answered…', options: ['Privately to the bidder who asked', 'In writing to all bidders simultaneously', 'Only at the site visit', 'After tender close'], answer: 1, why: 'Equality of information — responses go in writing to every bidder via a numbered clarification log.' },
  { part: 2, q: 'When figures and words differ in a bid, what governs?', options: ['Figures', 'Words', 'The lower of the two', 'The engineer decides freely'], answer: 1, why: 'The amount in words governs; arithmetic is corrected and the bid normalised.' },
  { part: 2, q: 'E-tendering is best described as…', options: ['A fifth tendering strategy', 'A tendering platform that can host any strategy', 'A form of contract', 'A type of prequalification'], answer: 1, why: 'It is a digital platform (SAP Ariba, Mercell…), not a selection strategy.' },
  { part: 2, q: 'ICV typically forms what share of the tender evaluation score?', options: ['1–2%', '5–20%', '40–50%', 'It never affects scoring'], answer: 1, why: 'ICV is commonly weighted at 5–20% of the total evaluation score in GCC tenders.' },
];

/* ---------------- P&T viva ---------------- */
window.COURSE_PT.viva = [
  { title: 'Procurement & Tendering — Viva Questions', items: [
    { q: 'How would you advise a client selecting between Traditional and Design & Build?', a: 'I would first assess their priorities: if cost and design quality are key, Traditional; if time and single-point responsibility are crucial, D&B delivers faster. I would explain the risk implications under FIDIC Red vs Yellow Book and align the contract conditions with the chosen route.', topic: 'Route advice' },
    { q: 'What is the difference between procurement and tendering?', a: 'Procurement is the end-to-end strategy for acquiring works — defining relationships and risk allocation from feasibility to award. Tendering is the sub-process within it that obtains and evaluates competitive offers to establish the price and appoint the contractor.', topic: 'Definitions' },
    { q: 'Why might you recommend two-stage tendering?', a: 'Where the design is incomplete (say ~60%) and the programme is critical: Stage 1 buys early contractor involvement under a PCSA for buildability and value engineering, and Stage 2 converts it into a negotiated lump sum once design is finalised.', topic: 'Two-stage' },
    { q: 'What would you check in prequalification?', a: 'Technical capability (similar-project experience, key personnel, resources, HSE/QA systems, workload, litigation history), financial standing (three years\' audited accounts, turnover, credit references) and legal compliance (licences, ICV) — scored on a weighted matrix with reasons recorded.', topic: 'Prequalification' },
    { q: 'How do you ensure fairness during the tender period?', a: 'Equality of information: identical documents to all bidders, queries answered in writing to everyone through a numbered clarification log, formal numbered addenda with acknowledgement, recorded site visits, and no private communication outside the controlled channel.', topic: 'Fairness' },
    { q: 'Walk me through a commercial evaluation.', a: 'Open prices only for technically acceptable bidders; check tender securities; correct arithmetic (words govern); price unpriced items and exclusions; normalise to like-for-like; analyse rates; clear qualifications; consider alternatives, PS/PC and daywork rates, payment terms, currency and life-cycle cost; then report with a justified recommendation.', topic: 'Evaluation' },
    { q: 'Why is the technical bid evaluated before the commercial bid?', a: 'To ensure only competent, compliant bidders advance and so commercial figures cannot bias the technical scoring — under the two-envelope system, commercial envelopes of failed bidders (below the ~75-point cutoff) are never opened.', topic: 'Evaluation' },
    { q: 'What is ICV and why does it matter?', a: 'In-Country Value measures the local economic benefit — national employment, local materials and suppliers, SME subcontracting, knowledge transfer and CSR. GCC clients typically weight it 5–20% of the evaluation score, so it directly affects award outcomes.', topic: 'ICV' },
    { q: 'What is bid rigging, and what would you do if you suspected it?', a: 'Illegal manipulation of the tender process so a pre-selected bidder wins — e.g. cover pricing or bid rotation. I would document the evidence, decline to proceed, and escalate through the client\'s governance and RICS ethical channels; integrity of the process is non-negotiable.', topic: 'Ethics' },
    { q: 'What happens at contract award?', a: 'Higher management or the tender committee approves the recommendation; a Letter of Award/Acceptance goes to the winner; regret letters to the rest; tender bonds are released once the winner\'s performance bond is received; the full audit trail is retained and contract administration begins.', topic: 'Award' },
  ]},
];
