/* ============================ PART 5 ============================
   Claims, Subcontractors, Sectional completion / Partial possession,
   Provisional Sums, Termination vs Determination, Force majeure vs
   Frustration, Suspension & Termination, Defects Liability Period,
   Completion / Final Account / LADs
   ================================================================ */
window.COURSE.parts.push({
  id: 'part5',
  num: 5,
  title: 'Claims, Termination & Completion',
  tag: 'Claims · Subcontractors · Termination · LADs',
  color: '#2d9d5b',
  accent: '#f0a500',
  pdf: 'assets/pdf/Contract_Practice_Part_5.pdf',
  video: 'assets/video/part5.mp4',
  summary:
    'The end‑game of contract administration: the claims machinery and how a claim differs from a variation, the three kinds of subcontractor, sectional completion & partial possession, provisional sums, the crucial difference between termination and determination, force majeure vs frustration, suspension & termination mechanics, the defects liability period, and final account & liquidated damages.',
  sections: [
    {
      id: 'claims',
      title: 'Claims & Variations vs Claims',
      icon: '📣',
      img: 'assets/img/claims.webp',
      mins: 9,
      tags: ['Cl 20', 'Cause & effect', 'Ex gratia'],
      summary:
        'A claim is a legitimate request for extra time and/or money due to a change or breach. Know the four types (contractual, at law, quantum meruit, ex gratia) and the structure (facts, legal basis, liability, quantum). A claim differs from a variation: it must prove cause and effect.',
      blocks: [
        { t: 'def', term: 'Claim', html: 'A <b>legitimate request for additional compensation of time and/or cost</b> on account of a <b>change or a breach</b> of the terms of the contract.' },
        {
          t: 'compare', title: 'Four types of claim',
          cols: [
            { h: 'Contractual', tone: 'blue', items: ['Arising out of the <b>express provisions</b> of the Contract (Clause 20 in FIDIC 1999).'] },
            { h: 'At law', tone: 'violet', items: ['Breach of <b>implied terms</b> of the Contract (e.g. decennial liability).'] },
            { h: 'Quantum meruit', tone: 'teal', items: ['e.g. works done based on an <b>LOI</b> — a fair & reasonable amount.'] },
            { h: 'Ex gratia', tone: 'amber', items: ['Out of <b>kindness / sympathy</b> to maintain relationship — e.g. exceptional price fluctuations, COVID costs.'] },
          ],
        },
        {
          t: 'points', title: 'Structure of a typical claim',
          items: [
            { b: 'Facts', t: 'contemporary records, witness statements, other evidence.' },
            { b: 'Legal basis', t: 'the contractual and legal provisions relied on.' },
            { b: 'Liability', t: 'the Employer\'s liability to provide relief.' },
            { b: 'Quantum', t: 'the amount of EOT and/or additional payment.' },
          ],
        },
        {
          t: 'table', title: 'Variation vs Claim',
          headers: ['Variation', 'Claim'],
          rows: [
            ['Formal scope change in the contract.', 'Request for extra time/money due to unexpected event(s).'],
            ['Can be initiated by client or contractor.', 'Arises from disputes, delays or unforeseen conditions.'],
            ['Managed, valued & executed per contract terms.', 'Requires evidence of the event\'s impact.'],
            ['May affect price, schedule, or both.', 'Contract sets out the claim procedure.'],
            ['Can be negotiated before or after the work.', 'Often adversarial; must demonstrate "cause" and "effect".'],
          ],
        },
      ],
      flashcards: [
        { q: 'Define a claim.', a: 'A legitimate request for additional time and/or cost due to a change or breach of the contract terms.' },
        { q: 'Name the four types of claim.', a: 'Contractual (express, Cl 20), at law (implied terms), quantum meruit (e.g. LOI work), and ex gratia (goodwill).' },
        { q: 'Key difference between a variation and a claim?', a: 'A variation is a managed scope change valued per the contract; a claim must prove cause and effect of an unexpected event to get relief.' },
      ],
    },

    {
      id: 'subcontractors',
      title: 'Domestic / Named / Nominated Subcontractors',
      icon: '🧑‍🔧',
      img: 'assets/img/subcontractors.webp',
      mins: 7,
      tags: ['NSC', 'Named', 'Domestic'],
      summary:
        'Domestic subcontractors are chosen by the Main Contractor; named ones are picked from an Employer\'s list; nominated ones are chosen by the Employer but contract with the Main Contractor — bringing special Employer obligations.',
      blocks: [
        {
          t: 'compare', title: 'Three types of subcontractor',
          cols: [
            { h: 'Domestic', tone: 'blue', items: ['Appointed by the Main Contractor to <b>its own requirements</b>, subject to Engineer\'s approval (if required).'] },
            { h: 'Named', tone: 'violet', items: ['Appointed by the Main Contractor from a <b>list provided by the Employer</b>.'] },
            { h: 'Nominated (NSC)', tone: 'amber', items: ['<b>Selected by the Employer</b> but <b>contracts with the Main Contractor</b>.'] },
          ],
        },
        {
          t: 'points', title: 'Employer\'s obligations towards a Nominated Subcontractor',
          items: [
            'Select and appoint a suitable subcontractor <b>on time</b>.',
            'If the Main Contractor raises a <b>reasonable objection</b>, nominate another subcontractor.',
            'Make <b>direct payments</b> to the NSC if the Main Contractor fails to pay.',
            'Appoint another subcontractor if the NSC fails to perform.',
          ],
        },
      ],
      flashcards: [
        { q: 'Domestic vs Named vs Nominated subcontractor?', a: 'Domestic = MC picks (Engineer may approve). Named = MC picks from Employer\'s list. Nominated = Employer picks but the NSC contracts with the MC.' },
        { q: 'Give two Employer obligations to a nominated subcontractor.', a: 'Appoint a suitable NSC on time; renominate on a reasonable MC objection; pay the NSC directly if the MC fails; replace an NSC that fails to perform.' },
      ],
    },

    {
      id: 'sectional-completion',
      title: 'Sectional Completion & Partial Possession',
      icon: '🏗️',
      img: 'assets/img/sectional-completion.webp',
      mins: 8,
      tags: ['TOC', 'Substantial completion', 'Beneficial use'],
      summary:
        'Sectional completion is planned completion of defined sections; partial possession is the Employer taking use of a substantially complete part. Both can trigger a Taking‑Over Certificate — which starts the DLP, releases the first half of retention and ends LDs for that part.',
      blocks: [
        {
          t: 'compare', title: 'Sectional completion vs Partial possession',
          cols: [
            { h: 'Sectional completion', tone: 'blue', items: ['Completion of any <b>section</b> for which a <b>separate Time for Completion</b> is provided under the Contract.', 'Planned in the contract from the outset.'] },
            { h: 'Partial possession', tone: 'amber', items: ['The Employer <b>occupies or uses</b> a <b>substantially completed part</b> of the permanent works — before or after completion — to the Engineer\'s satisfaction.', 'Often unplanned / by agreement.'] },
          ],
        },
        {
          t: 'points', title: 'Requirements to issue a TOC',
          items: [
            'The permanent works are <b>substantially completed</b>.',
            'They have satisfactorily <b>passed any Tests on Completion</b>.',
            'A written undertaking from the Contractor to finish any <b>outstanding work during the DLP</b>.',
          ],
        },
        { t: 'def', term: 'Substantial completion', html: 'The point at which the <b>Employer can take beneficial use</b> of the project for its intended purpose.' },
        {
          t: 'points', title: 'Consequences of issuing the TOC',
          items: [
            'Commencement of the <b>Defects Liability Period</b>.',
            'If the contract permits, the <b>first half of retention</b> is released.',
            'The Contractor\'s <b>insurance for works</b> is limited to the outstanding works only.',
            'The Contractor is <b>no longer liable for LDs</b> (for that part).',
            'A <b>statement at completion</b> is provided within the specified days.',
            'Commencement of <b>decennial liability</b>.',
          ],
        },
      ],
      flashcards: [
        { q: 'Sectional completion vs partial possession?', a: 'Sectional = planned completion of a section with its own Time for Completion. Partial possession = Employer takes use of a substantially complete part (often unplanned).' },
        { q: 'What does "substantial completion" mean?', a: 'The Employer can take beneficial use of the works for their intended purpose.' },
        { q: 'Three consequences of issuing a TOC.', a: 'DLP starts; first half of retention released; LDs stop; insurance limited to outstanding works; decennial liability starts; statement at completion due.' },
      ],
    },

    {
      id: 'provisional-sums',
      title: 'Provisional Sums — Defined & Undefined',
      icon: '❓',
      img: 'assets/img/provisional-sums.webp',
      mins: 7,
      tags: ['Cl 13.5', 'NRM', 'Programme allowance'],
      summary:
        'A provisional sum is an allowance for work not yet fully defined, or that the Employer may or may not want. Under NRM, defined sums are detailed enough for the Contractor to allow for in its programme & preliminaries; undefined sums are not.',
      blocks: [
        {
          t: 'callout', kind: 'law', title: 'FIDIC 1999 definition',
          html: 'A <b>"Provisional Sum"</b> is a sum specified in the Contract as a provisional sum, for the execution of any part of the Works or the supply of Plant, Materials or services under <b>Sub‑Clause 13.5 [Provisional Sums]</b>.',
        },
        {
          t: 'points', title: 'When is a provisional sum used?',
          items: [
            'Work <b>not sufficiently defined, designed or detailed</b> to price accurately when the contract is entered; and/or',
            'Work the Employer <b>may or may not</b> wish to be carried out.',
          ],
        },
        {
          t: 'compare', title: 'NRM: Defined vs Undefined',
          cols: [
            { h: 'Defined provisional sum', tone: 'blue', items: ['Well enough defined for the Contractor to <b>allow for it in programme, planning & preliminaries</b>.', 'Includes: nature & construction of the work; how/where it is fixed; a quantity indicating scope; any specific limitations.'] },
            { h: 'Undefined provisional sum', tone: 'amber', items: ['Falls <b>outside</b> those parameters.', 'e.g. work below an existing structure (piling) where ground conditions — and therefore the extent — can\'t be known until the structure is demolished and the ground opened.'] },
          ],
        },
      ],
      flashcards: [
        { q: 'What is a provisional sum?', a: 'An allowance in the contract price for work not sufficiently defined to price accurately, and/or work the Employer may or may not want (FIDIC Cl 13.5).' },
        { q: 'Defined vs undefined provisional sum (NRM)?', a: 'Defined = detailed enough for the Contractor to allow for in programme/planning/preliminaries. Undefined = not (e.g. piling below an existing structure).' },
      ],
    },

    {
      id: 'termination-determination',
      title: 'Termination vs Determination',
      icon: '🔚',
      img: 'assets/img/termination.webp',
      mins: 7,
      tags: ['Breach', 'Mutual', 'Muqawala'],
      summary:
        'Determination is a mutual/agreed ending of a contract; termination ends it due to breach or default. Note FIDIC uses "determination" to mean the Engineer\'s decision/opinion. A contract can also end by discharge, mutual agreement, or court order.',
      blocks: [
        {
          t: 'compare', title: 'Know the difference',
          cols: [
            { h: 'Determination', tone: 'blue', items: ['<b>Mutual or agreed</b> ending of a contract.', '⚠️ In FIDIC, "Determination" also means the Engineer <b>deciding / expressing an opinion</b> (e.g. Cl 3.5) — context matters!'] },
            { h: 'Termination', tone: 'red', items: ['Ending a contract due to a <b>breach or default</b> by one party.'] },
          ],
        },
        {
          t: 'points', title: 'How a contract ends (at law)',
          items: [
            'Discharge from performance (e.g. Defects Liability Certificate).',
            'Terminated by <b>mutual agreement</b>.',
            'Termination by <b>court order</b> (e.g. bankruptcy).',
          ],
        },
        {
          t: 'callout', kind: 'law', title: 'Civil‑code articles',
          items: [
            '<b>Article 890 (Muqawala)</b> — a contract of Muqawala terminates on completion of the agreed work, or on cancellation by consent or court order.',
            '<b>Article 268 (Mutual consent)</b> — the parties may mutually revoke the contract by consent after it has been concluded.',
          ],
        },
      ],
      flashcards: [
        { q: 'Termination vs determination?', a: 'Determination = mutual/agreed ending. Termination = ending for breach/default. (In FIDIC "determination" can also mean the Engineer\'s decision.)' },
        { q: 'Three ways a contract ends at law?', a: 'Discharge from performance (e.g. DLC), mutual agreement, or court order (e.g. bankruptcy).' },
      ],
    },

    {
      id: 'force-majeure',
      title: 'Force Majeure vs Frustration',
      icon: '🌪️',
      img: 'assets/img/force-majeure.webp',
      mins: 6,
      tags: ['Art 273', 'Art 893', 'Impossible'],
      summary:
        'Force majeure excuses performance when unforeseeable events (war, disaster, pandemic) prevent it. Frustration cancels a contract when unforeseen events make completion impossible, releasing both parties.',
      blocks: [
        {
          t: 'compare', title: 'Force majeure vs Frustration',
          cols: [
            { h: 'Force majeure', tone: 'blue', items: ['Unexpected events (war, strikes, natural disaster, terrorism, pandemic) <b>prevent</b> parties from fulfilling obligations — they may be <b>excused</b> from performance.', '<b>Art 273:</b> if FM makes performance impossible, the corresponding obligation ceases and the contract is automatically cancelled.'] },
            { h: 'Frustration', tone: 'amber', items: ['Unforeseen events make it <b>impossible to complete</b> the contract, leading to its <b>cancellation</b>; both parties are released.', '<b>Art 893:</b> if a cause prevents performance/completion, either party may require the contract be cancelled or terminated.'] },
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Nuance', html: 'Both deal with events beyond the parties\' control. Loosely: <b>force majeure</b> is usually a defined contract mechanism that <b>suspends/excuses</b> performance; <b>frustration</b> is a doctrine of law that <b>ends</b> the contract when performance becomes impossible or radically different.' },
      ],
      flashcards: [
        { q: 'Force majeure vs frustration?', a: 'FM: defined events prevent performance and may excuse/suspend it (Art 273 → obligation ceases, contract cancelled). Frustration: unforeseen events make completion impossible, cancelling the contract and releasing both parties (Art 893).' },
      ],
    },

    {
      id: 'suspension-termination',
      title: 'Suspension & Termination Mechanics',
      icon: '⏸️',
      img: 'assets/img/termination.webp',
      mins: 10,
      tags: ['Cl 8.8/8.11', 'Cl 15.2', 'Cl 16.2', 'Timelines'],
      summary:
        'The Engineer may suspend work (Cl 8.8); a prolonged suspension >84 days lets the Contractor treat it as an omission. The Contractor may suspend for non‑payment after 21 days\' notice. Termination by the Employer (Cl 15.2) and Contractor (Cl 16.2) each have specific grounds and notice periods.',
      blocks: [
        {
          t: 'compare', title: 'Suspension',
          cols: [
            { h: 'By the Employer (Cl 8.8 / 8.11)', tone: 'blue', items: ['<b>Cl 8.8</b>: the Engineer may instruct suspension of part or all of the Works; during it the Contractor must protect the Works from loss/damage.', '<b>Cl 8.11 (Prolonged suspension)</b>: if it lasts <b>&gt;84 days</b>, the Contractor asks to resume; if the Engineer does not permit within <b>28 days</b>, the Contractor may give notice and treat the affected part as an <b>omission</b> (Cl 13).'] },
            { h: 'By the Contractor (Cl 16.1)', tone: 'amber', items: ['The Contractor may suspend after <b>not less than 21 days\' notice</b> if:', '• the Engineer fails to certify (Cl 14.6);', '• the Employer fails to give evidence of financial arrangements within 28 days (Cl 2.4);', '• the Employer fails to pay per the contract (e.g. within 56 days) (Cl 14.7).'] },
          ],
        },
        {
          t: 'points', title: 'Termination by the Employer — grounds (Cl 15.2)',
          items: [
            '(a) failure to comply with Cl 4.2 (Performance Security) or a Cl 15.1 Notice to Correct.',
            '(b) abandonment of the Works or clear intention not to continue.',
            '(c) failure to proceed without reasonable excuse (Cl 8) or remedy defects (Cl 7.6).',
            '(d) subcontracting the whole Works or assigning without the required agreement.',
            '(e) bankruptcy, insolvency, liquidation, receiving/administration order, or similar.',
            '(f) bribery — offering gifts/inducements to influence the Contract.',
          ],
        },
        {
          t: 'callout', kind: 'warn', title: 'Employer termination procedure',
          html: 'The Employer may terminate on <b>14 days\' notice</b>. For grounds <b>(e) insolvency</b> or <b>(f) bribery</b>, termination is <b>immediate</b> upon the notice.',
        },
        {
          t: 'points', title: 'Termination by the Contractor — grounds (Cl 16.2)',
          items: [
            'Prolonged suspension of the Works (typically <b>&gt;84 days</b>).',
            'No reasonable evidence of the Employer\'s financial arrangements within <b>42 days</b> of suspending for that reason.',
            'The Engineer fails to issue an IPC within <b>56 days</b> of receiving all required information (28 + 28).',
            'The Contractor is not paid the amount properly due within <b>42 days</b> after the 56‑day period (i.e. 56 + 42 = <b>98 days</b>).',
            'The Employer substantially fails to perform its obligations.',
          ],
        },
        { t: 'callout', kind: 'note', title: 'Contractor termination procedure', html: 'The Contractor may terminate on <b>not less than 14 days\' notice</b> — except for <b>prolonged suspension or insolvency</b>, where termination can be <b>immediate</b>.' },
      ],
      flashcards: [
        { q: 'Prolonged suspension threshold and the Contractor\'s remedy?', a: '>84 days (Cl 8.11); if the Engineer won\'t permit resumption within 28 days of request, the Contractor can treat the affected part as an omission under Cl 13.' },
        { q: 'For which Employer‑termination grounds is termination immediate?', a: '(e) insolvency and (f) bribery — otherwise 14 days\' notice (Cl 15.2).' },
        { q: 'How long before non‑payment lets the Contractor terminate?', a: '56 days (to certify) + 42 days (to pay) = 98 days; also >84‑day suspension. Notice is ≥14 days (immediate for prolonged suspension/insolvency).' },
      ],
    },

    {
      id: 'defects',
      title: 'Defects Liability / Notification Period',
      icon: '🔧',
      img: 'assets/img/defects.webp',
      mins: 7,
      tags: ['Cl 11', 'Patent', 'Latent', 'DLC'],
      summary:
        'The DLP/DNP (Cl 11) is when the Contractor makes good defects. Patent defects are evident now; latent defects appear later. It is usually ~12 months to cover all climatic conditions. Its end triggers the Defects Liability Certificate, second‑half retention release and the final statement.',
      blocks: [
        {
          t: 'compare', title: 'Two kinds of defect',
          cols: [
            { h: 'Patent defects', tone: 'blue', items: ['<b>Evident now</b> — visible / discoverable on inspection.'] },
            { h: 'Latent defects', tone: 'amber', items: ['<b>Appear at a later stage</b> — hidden until they manifest (link to decennial liability).'] },
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Why ~12 months?', html: 'A DLP of about <b>12 months</b> is common so the works experience <b>all climatic conditions</b> (a full seasonal cycle) before final sign‑off.' },
        {
          t: 'points', title: 'Consequences of ending the DLP',
          items: [
            'The Engineer issues the <b>Defects Liability Certificate (DLC)</b> within <b>28 days</b> after the latest expiry date.',
            'The <b>second half of retention</b> is released.',
            'The Contractor submits the <b>final statement (account)</b> within <b>56 days</b> of the DLC.',
            'End of the Contractor\'s <b>insurance</b> obligation.',
            'The <b>performance security</b> is released.',
          ],
        },
      ],
      flashcards: [
        { q: 'Patent vs latent defect?', a: 'Patent = evident now / discoverable on inspection. Latent = appears later, hidden until it manifests.' },
        { q: 'Why is the DLP typically ~12 months?', a: 'To cover a full cycle of all climatic conditions before final sign‑off.' },
        { q: 'What happens at the end of the DLP?', a: 'DLC issued within 28 days; second‑half retention released; final statement within 56 days of DLC; insurance ends; performance security released.' },
      ],
    },

    {
      id: 'completion-lad',
      title: 'Final Account & Liquidated Damages',
      icon: '🏁',
      img: 'assets/img/completion-lad.webp',
      mins: 9,
      tags: ['Cl 14.11', 'FPC', 'LAD', 'Genuine pre‑estimate'],
      summary:
        'After the performance certificate, the Contractor submits a draft final statement (Cl 14.11); with the discharge, the Engineer issues the Final Payment Certificate. LADs are a genuine pre‑estimate of the Employer\'s loss — as opposed to unliquidated damages assessed on actual loss.',
      blocks: [
        {
          t: 'steps', title: 'Final account & completion — Cl 14.11 timeline',
          items: [
            { b: 'Trigger', t: '56 days after receiving the Performance Certificate.' },
            { b: 'Draft final statement', t: 'the Contractor submits it with supporting documents: value of all work done per the Contract, plus any further sums considered due.' },
            { b: 'Discharge', t: 'if agreed, the final statement goes with a discharge letter (Cl 14.12).' },
            { b: 'Final Payment Certificate', t: 'the Engineer issues the FPC within 28 days of receiving the final statement + discharge.' },
            { b: 'Dispute?', t: 'the Engineer certifies the undisputed part; the disputed part is referred to the DAB (Cl 20.4).' },
            { b: 'Payment', t: 'the Employer pays within 56 days of receiving the Payment Certificate (Cl 14.7(c)).' },
          ],
        },
        {
          t: 'def', term: 'Liquidated & Ascertained Damages (LAD)',
          html: '<b>Liquidated</b> = represented by a monetary value; <b>Ascertained</b> = the amount is stated <b>before</b> the contract commences. LADs are a <b>genuine pre‑estimate</b> of the Employer\'s likely loss from the Contractor\'s breach (late completion).',
        },
        {
          t: 'compare', title: 'Liquidated vs Unliquidated damages',
          cols: [
            { h: 'Liquidated damages', tone: 'blue', items: ['A <b>genuine pre‑estimate</b> of the Employer\'s potential loss due to the Contractor\'s breach.', 'Fixed in the contract — no need to prove actual loss.'] },
            { h: 'Unliquidated damages', tone: 'amber', items: ['<b>Not pre‑determined</b> in the contract.', 'Assessed on the <b>actual losses</b> suffered by the Employer.'] },
          ],
        },
        {
          t: 'callout', kind: 'key', title: 'LD vs LAD — the subtlety',
          html: '<b>Liquidated damages</b> = pre‑agreed but not necessarily yet quantified. <b>Liquidated & Ascertained damages</b> = pre‑agreed <b>and</b> clearly calculable (a definite figure/rate). A sum that is a penalty rather than a genuine pre‑estimate risks being unenforceable.',
        },
      ],
      flashcards: [
        { q: 'What are LADs?', a: 'Liquidated (a monetary value) & Ascertained (stated before commencement) damages — a genuine pre‑estimate of the Employer\'s loss from late completion; no need to prove actual loss.' },
        { q: 'Liquidated vs unliquidated damages?', a: 'Liquidated = pre‑agreed genuine pre‑estimate in the contract. Unliquidated = not pre‑set, assessed on actual loss.' },
        { q: 'Final Payment Certificate timeline (Cl 14.11/14.12)?', a: 'Draft final statement 56 days after the Performance Certificate; with discharge, Engineer issues FPC within 28 days; Employer pays within 56 days of the PC.' },
      ],
    },
  ],
});
