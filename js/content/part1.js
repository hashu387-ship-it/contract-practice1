/* ============================ PART 1 ============================
   Foundations: Competencies, What is a Contract, Prerequisites,
   Rights & Obligations, Contract Documents, Priority of Documents
   ================================================================ */
window.COURSE.parts.push({
  id: 'part1',
  num: 1,
  title: 'Foundations, Formation & Documents',
  tag: 'Competencies · Formation · FIDIC documents',
  color: '#2f6df0',
  accent: '#f0a500',
  pdf: 'assets/pdf/Contract_Practice_Part_1.pdf',
  video: 'assets/video/part1.mp4',
  summary:
    'Sets the foundation: how the RICS & AIQS competencies map onto this topic, what a contract actually is, the seven prerequisites that make it binding, the rights and obligations of Employer / Contractor / Engineer, and how the contract documents are assembled and prioritised when they conflict.',
  sections: [
    /* ---------------------------------------------------------------- */
    {
      id: 'competencies',
      title: 'The Competency & the Big Picture',
      icon: '🎯',
      img: 'assets/img/competency.webp',
      mins: 8,
      tags: ['RICS', 'AIQS', 'APC'],
      summary:
        'Contract Practice is a RICS/AIQS core technical competency. Know the difference between Contract Practice (pre‑signature) and Contract Administration (post‑signature), and remember the iceberg — most of the value lives below the surface.',
      blocks: [
        { t: 'lead', html: 'This module is assessed as a <b>Technical / Core</b> competency in both the RICS and AIQS APC. Before the detail, fix two ideas: (1) where this sits in your competency map, and (2) the difference between <b>Contract Practice</b> and <b>Contract Administration</b>.' },
        {
          t: 'compare',
          title: 'Contract Practice vs Contract Administration',
          cols: [
            { h: 'Contract Practice', tone: 'blue', items: ['Deals with the <b>preparation, drafting and understanding</b> of contracts <b>before they are executed</b>.', 'Getting the deal right: forms of contract, terms, documents, risk allocation.', 'RICS: a <b>Core</b> (Level 3) competency.'] },
            { h: 'Contract Administration', tone: 'amber', items: ['Concerned with <b>managing the contract after it has been signed</b> — ensuring compliance and resolving issues during the project.', 'Running the deal: payments, variations, EOT, claims, completion.', 'RICS: an <b>Optional</b> (to Level 2) competency.'] },
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'The Iceberg',
          html: 'Contract practice, administration and law are like an <b>iceberg</b>. The small tip above the waterline is <b>contract creation & negotiation</b> (value definition). The huge hidden mass below is <b>contract management</b> (value realisation). Most disputes — and most of your fee — live below the surface.',
        },
        { t: 'figure', img: 'assets/img/iceberg.webp', caption: 'Value is defined above the waterline but realised below it — in day‑to‑day administration.' },
        {
          t: 'points', title: 'RICS — where it sits',
          items: [
            { b: 'Core (Level 3):', t: 'Contract Practice (alongside Commercial management, Procurement & tendering, Quantification & costing, etc.).' },
            { b: 'Optional (to Level 2):', t: 'Contract Administration, Insurance, Risk management and others.' },
            { b: 'Mandatory (Level 3):', t: 'Ethics, Rules of Conduct and professionalism underpin everything.' },
          ],
        },
        {
          t: 'points', title: 'AIQS — where it sits',
          items: [
            { b: 'Contract Documentation & Procurement:', t: 'general procurement advice; quantification, measurement & documentation; tender process; commercial management.' },
            { b: 'Contract Administration:', t: 'account management and construction change management (core units 9 & 10).' },
          ],
        },
        {
          t: 'callout', kind: 'tip', title: 'Competency choice',
          html: 'Candidates in a <b>commercial / contracting</b> environment usually take <b>Commercial Management</b> to Level 3; those in a <b>consulting</b> environment usually take <b>Design economics & cost planning</b> to Level 3.',
        },
      ],
      flashcards: [
        { q: 'Contract Practice vs Contract Administration?', a: 'Practice = preparing/drafting/understanding the contract BEFORE it is executed. Administration = managing the contract AFTER signature (compliance + resolving issues).' },
        { q: 'What does the "iceberg" analogy teach?', a: 'The visible tip is contract creation/negotiation (value definition); the hidden mass is contract management (value realisation) — where most effort and disputes lie.' },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'what-is-contract',
      title: 'What is a Contract? (Terms)',
      icon: '📜',
      img: 'assets/img/what-is-contract.webp',
      mins: 9,
      tags: ['Definition', 'Express', 'Implied', 'Incorporated'],
      summary:
        'A contract is a legally binding agreement with agreed terms — a promise to perform a task in return for a benefit. Terms can be Express, Incorporated or Implied. Contracts may be written or oral (property transactions must be written).',
      blocks: [
        { t: 'def', term: 'Contract', html: 'A <b>legally binding agreement</b> with specific terms, agreed between two or more parties, containing a <b>promise to perform a certain task</b> in return for <b>receiving a benefit</b> for performing it.' },
        {
          t: 'callout', kind: 'note', title: 'Written or oral?',
          html: 'A contract can be <b>written or oral</b>. <b>Exception:</b> contracts concerning <b>property transactions must be in writing</b>. In construction, always contract in writing so the terms are certain and provable.',
        },
        {
          t: 'compare',
          title: 'The three ways a term gets into a contract',
          cols: [
            { h: 'Express terms', tone: 'blue', items: ['Terms & conditions <b>specifically agreed</b> by the parties.', 'e.g. the priced BOQ, the Conditions of Contract, the completion date.'] },
            { h: 'Incorporated terms', tone: 'violet', items: ['Terms brought in <b>by notice or by a course of dealing</b>.', 'e.g. standard payment terms / LC payment terms adopted by reference.'] },
            { h: 'Implied terms', tone: 'amber', items: ['Not expressly stated but <b>assumed enforceable under the law</b>.', 'e.g. <b>decennial liability</b>, fitness for purpose, work in a workmanlike manner.'] },
          ],
        },
        {
          t: 'callout', kind: 'law', title: 'Implied by law — decennial liability',
          html: 'In many civil‑law / GCC jurisdictions the contractor and architect are liable for <b>10 years</b> for the total or partial collapse of a building or a defect threatening its stability — even if not written in the contract. Any clause trying to exclude or limit this is <b>void</b>.',
        },
      ],
      flashcards: [
        { q: 'Define a contract.', a: 'A legally binding agreement with specific agreed terms between two+ parties — a promise to perform a task in return for a benefit.' },
        { q: 'Name the three types of contract terms.', a: 'Express (specifically agreed), Incorporated (by notice / course of dealing), Implied (assumed enforceable under law, e.g. decennial liability).' },
        { q: 'When must a construction‑related contract be in writing?', a: 'Contracts concerning property transactions must be in writing (and in practice all construction contracts should be).' },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'prerequisites',
      title: 'Prerequisites to Form a Contract',
      icon: '🧩',
      img: 'assets/img/prerequisites.webp',
      mins: 9,
      tags: ['Offer', 'Acceptance', 'Consideration'],
      summary:
        'Seven ingredients must be present for a binding contract: Offer, Acceptance, Consideration, Intention to create legal relations, Legal capacity, Legality, and Good faith / fair dealing.',
      blocks: [
        { t: 'lead', html: 'Miss any one of these and you may have no enforceable contract. Learn them as a checklist — examiners love "what makes a contract binding?".' },
        {
          t: 'steps', title: 'The seven prerequisites',
          items: [
            { b: 'Offer', t: 'An expression of willingness to enter a contract, detailing what will be provided. May be written, oral or by conduct. The <b>offeror</b> makes it; the <b>offeree</b> receives it.' },
            { b: 'Acceptance', t: 'Unconditional acceptance by the offeree. A <b>conditional</b> acceptance is a <b>counter‑offer</b>, which the original offeror must then accept. <b>Silence is not acceptance.</b>' },
            { b: 'Consideration', t: 'The benefit (money or otherwise) given by the offeree in return for the offeror performing the offer. Something of value must pass both ways.' },
            { b: 'Intention to create legal relations', t: 'The parties must intend a legally binding arrangement whose rights and obligations are enforceable.' },
            { b: 'Legal capacity', t: 'The parties must be capable of contracting. Minors and those mentally incapacitated cannot contract.' },
            { b: 'Legality', t: 'The promise / work must be legal. A contract to do something unlawful is unenforceable.' },
            { b: 'Good faith & fair dealing', t: 'Parties must deal with each other honestly, fairly and in good faith.' },
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'Offer + Acceptance = agreement',
          html: 'A binding agreement needs a <b>mirror‑image</b> match: the acceptance must exactly mirror the offer. Any change of terms flips it into a counter‑offer and the ball goes back to the other party.',
        },
      ],
      flashcards: [
        { q: 'List the prerequisites of a contract.', a: 'Offer, Acceptance, Consideration, Intention to create legal relations, Legal capacity, Legality, and Good faith & fair dealing.' },
        { q: 'What is a counter‑offer?', a: 'A conditional / qualified "acceptance" — it rejects the original offer and becomes a new offer the original offeror must now accept. Silence is not acceptance.' },
        { q: 'What is "consideration"?', a: 'The benefit (monetary or otherwise) the offeree gives in return for the offeror performing the offer — value must pass both ways.' },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'obligations-rights',
      title: 'Rights & Obligations of the Parties',
      icon: '⚖️',
      img: 'assets/img/obligations-rights.webp',
      mins: 10,
      tags: ['Employer', 'Contractor', 'Engineer', 'FIDIC clauses'],
      summary:
        'Under FIDIC each party has defined obligations and rights. The Employer gives possession and pays; the Contractor executes, insures and secures; the Engineer administers impartially. Learn the headline clause numbers.',
      blocks: [
        { t: 'lead', html: 'The three players are the <b>Employer</b>, the <b>Contractor</b> and the <b>Engineer</b> (contract administrator). Clause numbers below follow FIDIC 1999 Red Book.' },
        {
          t: 'table', title: 'Employer',
          headers: ['Obligations', 'Rights'],
          rows: [
            ['Give access & possession of the Site (Cl 2.1)', 'Audit the Contractor\'s financial records (Cl 2.5)'],
            ['Appoint the Engineer (Cl 3.1)', 'Terminate the Contractor\'s employment (Cl 15)'],
            ['Provide financial evidence of funding (Cl 2.4)', 'Approve or reject Variations'],
            ['Pay the Contractor (Cl 14)', ''],
            ['Give approvals & assistance (Cl 2.2)', ''],
          ],
        },
        {
          t: 'table', title: 'Contractor',
          headers: ['Obligations', 'Rights'],
          rows: [
            ['Execute the Works (Cl 4.1)', 'Receive payments (Cl 14)'],
            ['Provide Performance Security (Cl 4.2)', 'Suspend work for non‑payment (Cl 16.1)'],
            ['Submit the work programme (Cl 8.3)', 'Terminate the Contract (Cl 16.2)'],
            ['Obtain required approvals (Cl 4.6) & comply with laws (Cl 4.18)', 'Request / claim for Variations (Cl 13.2)'],
            ['Insure the Works & care for the Works (Cl 18, 17.2)', ''],
            ['Report delays & claims (Cl 20.1)', ''],
          ],
        },
        {
          t: 'table', title: 'Engineer',
          headers: ['Obligations', 'Rights'],
          rows: [
            ['Act impartially / make fair determinations (Cl 3.5)', 'Delegate duties to assistants (Cl 3.2)'],
            ['Administer the Contract & issue instructions (Cl 3.1, 3.3)', 'Access to the Works (Cl 7.1)'],
            ['Certify payments (Cl 14.6)', 'Request submissions from the Contractor'],
            ['Approve Variations (Cl 13); inspect & test (Cl 7.4)', ''],
          ],
        },
        {
          t: 'callout', kind: 'note', title: 'Shared / key interactions',
          html: 'Dispute resolution (Cl 20.4) and Force Majeure / Exceptional Events (Cl 19) involve <b>all three</b> parties. Remember the Engineer is appointed and paid by the Employer <b>but must act impartially</b> when certifying and determining.',
        },
      ],
      flashcards: [
        { q: 'Under FIDIC, who must the Employer appoint and by which clause give the Contractor possession of the Site?', a: 'Appoint the Engineer (Cl 3.1) and give access & possession of the Site (Cl 2.1).' },
        { q: 'Two headline Contractor obligations under FIDIC 1999?', a: 'Execute the Works (Cl 4.1) and provide Performance Security (Cl 4.2); also insure (Cl 18) and report claims (Cl 20.1).' },
        { q: 'What is the Engineer\'s key duty when certifying and determining?', a: 'To act impartially / make a fair determination (Cl 3.5), even though appointed by the Employer.' },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'contract-documents',
      title: 'Contract Documents',
      icon: '🗂️',
      img: 'assets/img/contract-documents.webp',
      mins: 8,
      tags: ['Volumes', 'Tender vs Contract', 'FIDIC'],
      summary:
        'The contract documents are best assembled in volumes (agreement, specs, drawings, BOQ). A tender document becomes a contract document once the LOA, addenda and post‑tender clarifications are added.',
      blocks: [
        {
          t: 'points', title: 'A typical set of contract documents (in volumes)',
          items: [
            { b: 'Volume 1', t: 'Contract Agreement, Form of Tender, Instructions to Tenderers, Conditions of Contract (CoC), Appendix to Tender.' },
            { b: 'Volume 2', t: 'Specifications.' },
            { b: 'Volume 3', t: 'Drawings.' },
            { b: 'Volume 4', t: 'Bill of Quantities (BOQ) and any other documents.' },
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'Tender document → Contract document',
          html: 'A <b>tender document</b> becomes part of the <b>contract</b> once the <b>Contract Agreement, Letter of Acceptance, tender addenda and Post‑Tender Clarifications (PTCs)</b> are added to it.',
        },
        { t: 'figure', img: 'assets/img/fidic-redbooks.webp', caption: 'The FIDIC Red Book has evolved through 1987, 1999 and 2017 editions — each with its own document list and priority order.' },
        {
          t: 'table', title: 'Documents forming the Contract — FIDIC editions compared',
          headers: ['FIDIC 1987 Red Book', 'FIDIC 1999 Red Book', 'FIDIC 2017 Red Book'],
          rows: [
            ['Contract Agreement (if completed)', 'Contract Agreement (if any)', 'Contract Agreement'],
            ['Letter of Acceptance', 'Letter of Acceptance', 'Letter of Acceptance'],
            ['The Tender', 'Letter of Tender', 'Letter of Tender'],
            ['Part II of the Conditions', 'Particular Conditions', 'Particular Conditions Part A – Contract Data'],
            ['Part I of the Conditions', 'General Conditions', 'Particular Conditions Part B – Special Provisions'],
            ['Any other document', 'Specifications', 'General Conditions'],
            ['', 'Drawings', 'Specification'],
            ['', 'Schedules & any other documents', 'Drawings'],
            ['', '', 'Schedules; JV Undertaking; any other documents'],
          ],
          note: 'The ordered list above is also the priority order — see the next section.',
        },
      ],
      flashcards: [
        { q: 'What turns a tender document into a contract document?', a: 'Adding the Contract Agreement, Letter of Acceptance, tender addenda and Post‑Tender Clarifications (PTCs).' },
        { q: 'How are contract documents best organised?', a: 'In volumes — V1 Agreement/Tender/ITT/CoC/Appendix, V2 Specifications, V3 Drawings, V4 BOQ & others.' },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: 'priority-documents',
      title: 'Priority of Documents',
      icon: '🥇',
      img: 'assets/img/fidic-redbooks.webp',
      mins: 9,
      tags: ['Discrepancy', 'Ambiguity', 'Contra proferentem'],
      summary:
        'When documents conflict, a priority order resolves it — a proactive defence against disputes. Distinguish discrepancy (two different requirements) from ambiguity (no information at all), and know the contra proferentem rule.',
      blocks: [
        { t: 'lead', html: 'Where provisions of the Contract <b>conflict</b>, the conflict is resolved by the <b>priority of documents</b>. Defining priority up front is a proactive measure to safeguard against disputes.' },
        {
          t: 'compare',
          title: 'Know the difference',
          cols: [
            { h: 'Discrepancy', tone: 'blue', items: ['<b>Two different requirements</b> stated for the same aspect.', 'e.g. the spec says concrete 150&nbsp;mm, the drawing says 200&nbsp;mm.', 'Resolved through the <b>priority of documents</b>.'] },
            { h: 'Ambiguity', tone: 'amber', items: ['<b>No information</b> found in the contract for a certain aspect.', 'e.g. the concrete thickness is not given in <i>any</i> document.', 'Resolved by the Engineer issuing a clarification / instruction.'] },
          ],
        },
        {
          t: 'callout', kind: 'law', title: 'Contra proferentem rule',
          html: 'An <b>ambiguity is construed against the party who drafted</b> the contract — i.e. resolved in the way <b>least favourable to the drafter</b>. Draft your own clauses clearly, because doubt is read against you.',
        },
        {
          t: 'callout', kind: 'law', title: 'Civil‑code angle — doubt favours the obligor',
          html: 'e.g. <b>Article 226</b>: a doubt shall be resolved <b>in favour of the obligor</b> (the party who owes the obligation). Sits alongside contra proferentem in GCC contracts.',
        },
        {
          t: 'table', title: 'FIDIC 1999 — General vs Particular Conditions priority',
          headers: ['General Conditions (standard order)', 'Particular Conditions (typical amendment)'],
          rows: [
            ['(a) Contract Agreement', '(a) Contract Agreement'],
            ['(b) Letter of Acceptance', '(b) Particular Conditions'],
            ['(c) Letter of Tender', '(c) General Conditions'],
            ['(d) Particular Conditions', '(d) Value Engineering Schedule (Employer\'s Requirements)'],
            ['(e) General Conditions', '(e) Agreed Post‑Tender Clarification Schedule'],
            ['(f) Specifications', '(f) Remainder of Employer\'s Requirements'],
            ['(g) Drawings', '(g) Specifications'],
            ['(h) Schedules & other docs', '(h) Drawings → (i) BOQ → (j) Schedules & other docs'],
          ],
          note: 'Under the Particular Conditions amendment, an ambiguity/discrepancy within documents originally forming the Contract is corrected by Engineer\'s instruction — but carried out at the Contractor\'s cost.',
        },
      ],
      flashcards: [
        { q: 'Discrepancy vs ambiguity?', a: 'Discrepancy = two different requirements for the same thing (resolved by priority of documents). Ambiguity = no information at all (resolved by Engineer\'s clarification).' },
        { q: 'State the contra proferentem rule.', a: 'An ambiguity is interpreted against the party that drafted the clause — i.e. least favourably to the drafter.' },
        { q: 'Why define a priority of documents at all?', a: 'It is a proactive measure to resolve conflicts between documents and safeguard against disputes.' },
      ],
    },
  ],
});
