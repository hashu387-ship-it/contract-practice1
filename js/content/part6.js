/* ===== PART 6 — Advanced Topics, Claims & Clauses (from the reference doc) ===== */
window.COURSE.parts.push({
"id": "part6",
"num": 6,
"title": "Advanced Topics, Claims & Clauses",
"tag": "Delay · Loss & Expense · Clauses · Doctrines",
"color": "#6c5ce7",
"accent": "#ffcf6b",
"pdf": "assets/pdf/Contract_Practice_Reference.pdf",
"video": "",
"summary": "Deeper APC material distilled from the 57‑page reference: acceleration and delay analysis, concurrent delay, loss & expense and disruption, set‑off and fluctuations, fitness for purpose, boilerplate and time‑bar clauses, indemnity & joint‑names insurance, pricing types, practical completion, the dispute‑resolution ladder, decennial liability, and the key legal doctrines examiners expect you to name.",
"sections": [
{
"id": "acceleration",
"title": "Acceleration",
"icon": "🚀",
"img": "assets/img/eot.webp",
"mins": 5,
"tags": [
"Definition",
"How achieved"
],
"summary": "Definition: Increasing the planned/current rate of progress to finish earlier than the (current) completion date. If the contract has no acceleration…",
"blocks": [
{
"t": "points",
"items": [
"<b>Definition:</b> Increasing the planned/current rate of progress to finish earlier than the (current) completion date. If the contract has no acceleration clause, use a separate <b>acceleration agreement</b>.",
"<b>Constructive / voluntary acceleration:</b> Contractor accelerates at its own initiative to avoid LADs because it believes a due EOT has not been granted (or the employer pressures completion by the original date despite EOT entitlement). Contractor <i>may</i> recover costs if the EOT was in fact due.",
"<b>Instructed / directed acceleration:</b> Employer expressly instructs earlier completion; requires a separate arrangement, normally with extra payment. Contractor is entitled to compensation for the additional cost.",
"<b>How achieved:</b> more resources; re-sequence/alter programme; extended/overtime hours; change working method; change specification."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Distinguish \"true\" instructed acceleration (agreed, paid) from constructive acceleration (contentious — hinges on proving the withheld EOT was legitimate). Always price acceleration and record the instruction before proceeding."
}
]
},
{
"id": "concurrent-delay-delay-classification",
"title": "Concurrent Delay & Delay Classification",
"icon": "🔀",
"img": "assets/img/eot.webp",
"mins": 5,
"tags": [
"Delay by party",
"True concurrency"
],
"summary": "Delay by party: Contractor delay (solitary), Employer delay (solitary), neutral delay (neither party's fault, e.g. force majeure), concurrent delay…",
"blocks": [
{
"t": "points",
"items": [
"<b>Delay by party:</b> Contractor delay (<i>solitary</i>), Employer delay (<i>solitary</i>), <b>neutral delay</b> (neither party's fault, e.g. force majeure), <b>concurrent delay</b> (delays overlapping in effect on the critical path).",
"<b>True concurrency:</b> two+ delays occur at the <i>same time</i>, each independently affecting the critical path.",
"<b>Sequential concurrency:</b> delays occur one after another but both feed the overall critical-path delay.",
"<b>Four classification axes:</b> excusable / non-excusable; compensable / non-compensable; critical / non-critical; concurrent / non-concurrent."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Typical outcome of concurrent Employer + Contractor delay = Contractor gets <b>EOT but no prolongation cost</b> (time, not money — Malmaison approach); some jurisdictions apportion. Only <i>critical</i> delay attracts EOT; delay to a non-critical activity within float does not."
}
]
},
{
"id": "delay-analysis-methods",
"title": "Delay Analysis Methods",
"icon": "🔬",
"img": "assets/img/eot.webp",
"mins": 5,
"tags": [
"Impacted as-planned"
],
"summary": "As-planned vs as-built: compares baseline programme against actual",
"blocks": [
{
"t": "points",
"items": [
"<b>As-planned vs as-built:</b> compares baseline programme against actual progress.",
"<b>Impacted as-planned:</b> inserts delay events into the baseline to model their theoretical effect (prospective).",
"<b>Collapsed as-built (but-for):</b> removes delay events from the as-built to find the hypothetical earlier finish (retrospective).",
"<b>Window / Time Impact Analysis (TIA):</b> splits the programme into time windows and analyses delay within each.",
"<b>Contemporaneous period analysis / snapshot (time-slice):</b> assesses delay as it occurred at set review points.",
"<b>Forensic schedule analysis:</b> comprehensive retrospective reconstruction of delay causation."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Method choice depends on records quality and whether analysis is prospective (at the time) or retrospective (after the fact); the SCL Delay &amp; Disruption Protocol guides selection. A robust <b>causal link/nexus</b> between event and critical-path impact is essential."
}
]
},
{
"id": "loss-expense-claims",
"title": "Loss & Expense Claims",
"icon": "💸",
"img": "assets/img/prolongation.webp",
"mins": 5,
"tags": [
"Basis",
"Loss"
],
"summary": "Basis: additional loss/expense from delay, disruption or scope change not the claimant's fault (distinct from EOT, which only adjusts",
"blocks": [
{
"t": "points",
"items": [
"<b>Basis:</b> additional loss/expense from delay, disruption or scope change <b>not the claimant's fault</b> (distinct from EOT, which only adjusts time).",
"<b>Loss</b> = loss of opportunity/profit that could have been earned elsewhere; <b>Expense</b> = additional direct/indirect cost to maintain facilities and resources.",
"<b>Heads of claim structure:</b> introduction → facts/cause (contemporaneous records) → legal/contractual basis → liability/entitlement → quantum/substantiation (labour, plant, materials, HO overhead, staff, insurance, finance, loss of profit, subcontractor claims).",
"<b>Quantification methods:</b> <i>Actual cost</i> method (preferred — real records) vs <i>formulaic</i> methods for head-office overhead &amp; profit — <b>Hudson, Emden, Eichleay</b>.",
"<b>Supporting records:</b> MoM, idle-time/abortive-work logs, photos, site diaries, timesheets, labour histograms, productivity data."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Must show contractual compliance, impact assessment and mitigation efforts. Avoid <b>global claims</b> (see below) where individual causal links can be shown."
}
]
},
{
"id": "disruption-global-claims",
"title": "Disruption & Global Claims",
"icon": "📉",
"img": "assets/img/prolongation.webp",
"mins": 5,
"tags": [
"Disruption",
"Global claim",
"Exam angle"
],
"summary": "Disruption: loss of productivity/efficiency from interference with normal working — may or may not cause completion delay (unproductive overtime,…",
"blocks": [
{
"t": "points",
"items": [
"<b>Disruption:</b> loss of productivity/efficiency from interference with normal working — may or may not cause completion delay (unproductive overtime, idle resources, demobilisation). Measured as <i>lost productivity</i>, unlike delay (measured in time).",
"<b>Global claim:</b> a single combined claim for time and disruption arising from <i>multiple</i> events without linking each cause to each cost."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Disruption ≠ delay; it can occur without any EOT. Global claims are a last resort and vulnerable to challenge — tribunals prefer event-by-event causation; the \"measured mile\" is the strongest disruption technique."
}
]
},
{
"id": "set-off-contra-charge-on-account-payment",
"title": "Set-off, Contra-charge & On-account Payment",
"icon": "🧾",
"img": "assets/img/interim-payment.webp",
"mins": 5,
"tags": [
"Set-off",
"Contra-charge",
"On-account payment"
],
"summary": "Set-off: employer's right to deduct sums it is owed (e.g. defects, LADs, back-charges) from monies due to the",
"blocks": [
{
"t": "points",
"items": [
"<b>Set-off:</b> employer's right to deduct sums it is owed (e.g. defects, LADs, back-charges) from monies due to the contractor.",
"<b>Contra-charge:</b> charging back / offsetting costs, e.g. materials or services supplied by the main contractor to a subcontractor, deducted from the subcontractor's account.",
"<b>On-account payment:</b> a payment made toward a <i>future</i> invoice, tracked and later deducted when the invoice is submitted."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Set-off usually requires a valid contractual mechanism and often a <b>notice</b> (e.g. pay-less/withholding notice) within a defined period; deducting without notice or substantiation is a common CA error."
}
]
},
{
"id": "fluctuations",
"title": "Fluctuations",
"icon": "📈",
"img": "assets/img/interim-payment.webp",
"mins": 5,
"tags": [
"Definition",
"Types",
"Recovery methods"
],
"summary": "Definition: contract provisions allowing the contract price to be adjusted for cost changes, via a predetermined formula or",
"blocks": [
{
"t": "points",
"items": [
"<b>Definition:</b> contract provisions allowing the contract price to be <b>adjusted</b> for cost changes, via a predetermined formula or percentage.",
"<b>Types:</b> price (materials/goods), labour (wages), exchange-rate (currency, international contracts), inflation (indexed to an economic index).",
"<b>Recovery methods:</b> <i>traditional/full</i> (actual proven cost change) vs <i>formula/index</i> method (e.g. published cost indices)."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "A <b>fixed-price</b> contract places inflation risk on the contractor (higher tender to cover risk); a <b>fluctuating</b> contract shifts that risk to the employer and suits long-duration or volatile-market projects. Retention should exclude fluctuation amounts."
}
]
},
{
"id": "fitness-for-purpose-vs-reasonable-skill-care",
"title": "Fitness for Purpose vs Reasonable Skill & Care",
"icon": "🎯",
"img": "assets/img/what-is-contract.webp",
"mins": 5,
"tags": [
"Exam angle"
],
"summary": "Reasonable skill &amp; care (RSC): the professional/negligence standard — perform to the level of a reasonably competent practitioner.",
"blocks": [
{
"t": "points",
"items": [
"<b>Reasonable skill &amp; care (RSC):</b> the professional/negligence standard — perform to the level of a reasonably competent practitioner. Fault-based.",
"<b>Fitness for purpose (FFP):</b> an implied/express term that the end result must actually meet the employer's stated purpose — a <b>strict (absolute)</b> obligation, regardless of care taken. More onerous than RSC."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Consultants resist FFP because <b>PI insurance typically excludes strict FFP liability</b> (only covers negligence/RSC). FFP commonly arises in design-and-build (contractor warrants the works are fit for purpose) and via sale-of-goods implied terms for materials."
}
]
},
{
"id": "boilerplate-entire-agreement-particular-conditions",
"title": "Boilerplate, Entire-Agreement & Particular Conditions",
"icon": "📋",
"img": "assets/img/contract-documents.webp",
"mins": 5,
"tags": [
"Boilerplate terms",
"Appendix to Tender"
],
"summary": "Boilerplate terms: standard administrative/legal provisions — governing law, dispute resolution, force majeure, assignment/delegation",
"blocks": [
{
"t": "points",
"items": [
"<b>Boilerplate terms:</b> standard administrative/legal provisions — governing law, dispute resolution, force majeure, assignment/delegation clauses.",
"<b>Entire-agreement clause:</b> the contract embodies the <i>whole</i> agreement and supersedes all prior conversations, representations and undertakings; nothing outside it is part of the contract.",
"<b>Particular / Special Conditions:</b> project-specific modifications/additions to the <b>General Conditions of Contract</b> for the particular employer, location, law or procurement route (FIDIC Part B).",
"<b>Appendix to Tender:</b> contract-specific data supplementing the General Conditions (e.g. minimum IPC amount, daily LAD rate)."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "An entire-agreement clause limits reliance on pre-contract statements (curbing misrepresentation claims); where Particular Conditions conflict with General Conditions, the Particular Conditions usually prevail (document priority)."
}
]
},
{
"id": "time-bar-clauses",
"title": "Time-bar Clauses",
"icon": "⏳",
"img": "assets/img/claims.webp",
"mins": 5,
"tags": [
"Definition",
"FIDIC 1999 (Cl 20.1)",
"Benefits"
],
"summary": "Definition: a strict deadline within which a party must submit a claim (EOT, additional payment, other relief) — often drafted as a condition…",
"blocks": [
{
"t": "points",
"items": [
"<b>Definition:</b> a strict deadline within which a party must submit a claim (EOT, additional payment, other relief) — often drafted as a <b>condition precedent</b> to entitlement.",
"<b>FIDIC 1999 (Cl 20.1):</b> contractor must notify within <b>28 days</b> of becoming aware of the event, or lose EOT and cost entitlement.",
"<b>Benefits:</b> early alert to the employer on time/cost impact; certainty on likely final account; prevents late \"surprise\" claims; secures the contractor's entitlement if complied with."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "To bar a claim the clause must clearly be a condition precedent; tension exists with the <b>prevention principle</b> (an employer cannot bar a claim for delay it caused) — key litigated territory. Purpose is \"certainty through delivery rather than a surprise at final account.\""
}
]
},
{
"id": "indemnity-vs-insurance-joint-names",
"title": "Indemnity vs Insurance (& Joint-names)",
"icon": "🛡️",
"img": "assets/img/insurance.webp",
"mins": 5,
"tags": [
"Indemnity",
"Insurance",
"Exam angle"
],
"summary": "Indemnity: a contractual promise by one party to compensate the other for defined loss/liability — a primary obligation that can exceed any insurance…",
"blocks": [
{
"t": "points",
"items": [
"<b>Indemnity:</b> a <i>contractual</i> promise by one party to compensate the other for defined loss/liability — a primary obligation that can exceed any insurance and does not depend on a third party.",
"<b>Insurance:</b> transfer of risk to a third-party insurer for a premium, subject to policy limits, deductibles and exclusions.",
"<b>Joint-names insurance (e.g. CAR):</b> both employer and contractor insured under one policy — prevents the insurer <b>subrogating</b> against a co-insured and avoids disputes over which party caused the loss; supported by <b>waiver of subrogation</b> and <b>cross-liability</b> provisions."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "An indemnity is only as good as the indemnifier's solvency — insurance backs it up. Match indemnity scope to insurance cover so the contractor isn't indemnifying risks its policy excludes."
}
]
},
{
"id": "contract-pricing-types-stage-milestone-payments",
"title": "Contract Pricing Types & Stage/Milestone Payments",
"icon": "💷",
"img": "assets/img/interim-payment.webp",
"mins": 5,
"tags": [
"Lump sum"
],
"summary": "Lump sum: fixed price for defined scope; quantity risk sits with the contractor. Payment by milestone/activity schedule rather than measured…",
"blocks": [
{
"t": "points",
"items": [
"<b>Lump sum:</b> fixed price for defined scope; quantity risk sits with the contractor. Payment by <b>milestone/activity schedule</b> rather than measured quantities.",
"<b>Re-measurement (admeasurement):</b> paid on actual measured quantities against a BoQ (FIDIC Red Book default; Cl 12 Measurement &amp; Evaluation).",
"<b>Converting Red Book to lump sum (exam scenario):</b> amend Cl 1.1 definitions, delete/amend Cl 12 (no measurement), keep variations (Cl 13) valued separately without disturbing the lump sum, fix the price in Cl 14.1, base interim payment on milestones (Cl 14.3/14.6), mark the BoQ \"for reference only,\" and add Particular Conditions confirming lump-sum basis.",
"<b>Stage/milestone payments:</b> contractor paid on completion of defined stages/activities rather than monthly measured value."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Lump sum gives cost certainty but weak flexibility for change; re-measurement suits uncertain quantities but less price certainty. Milestone payment ties cash flow to demonstrable progress."
}
]
},
{
"id": "practical-substantial-completion",
"title": "Practical / Substantial Completion",
"icon": "🏁",
"img": "assets/img/completion-lad.webp",
"mins": 5,
"tags": [
"Definition",
"Effects at PC",
"Distinguish"
],
"summary": "Definition: works are substantially complete and fit for their intended purpose/beneficial occupation, with only minor items outstanding recorded on…",
"blocks": [
{
"t": "points",
"items": [
"<b>Definition:</b> works are substantially complete and <b>fit for their intended purpose/beneficial occupation</b>, with only minor items outstanding recorded on a snag/punch list. FIDIC issues a <b>Taking-Over Certificate (TOC)</b> (Cl 10.1).",
"<b>Effects at PC:</b> liability for LADs <b>ends</b>; <b>DLP/rectification period begins</b>; right to deduct retention ends and <b>half the retention is released</b>; risk/insurance in the works largely transfers to the employer (subject to residual obligations); regular interim certificates cease.",
"<b>Distinguish:</b> <i>Sectional completion</i> (Cl 10.1) — pre-defined sections with their own completion dates; <i>Partial possession</i> (Cl 10.2) — employer takes over a part not pre-planned as a section; contractor may then request a TOC for that part.",
"<b>Handover documents:</b> owner's manual, building user guide, H&amp;S file, building logbook, construction-stage report, warranties/guarantees, valid insurances."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "PC is not \"zero defects\" — it is fitness for beneficial use; the snag list does not defeat PC. Know precisely which contractual consequences trigger at PC."
}
]
},
{
"id": "dispute-avoidance-resolution-ladder",
"title": "Dispute Avoidance & Resolution Ladder",
"icon": "🤝",
"img": "assets/img/claims.webp",
"mins": 5,
"tags": [
"FIDIC (Cl 20)",
"Key mechanisms",
"Exam angle"
],
"summary": "Escalation tiers (tiered/multi-step clause): negotiation → mediation/conciliation → DAB/DAAB or adjudication → arbitration →",
"blocks": [
{
"t": "points",
"items": [
"<b>Escalation tiers (tiered/multi-step clause):</b> negotiation → mediation/conciliation → <b>DAB/DAAB or adjudication</b> → <b>arbitration</b> → <b>litigation</b>.",
"<b>FIDIC (Cl 20):</b> refer disputes to the <b>DAB</b> (1999) first, then amicable settlement, then arbitration; earlier 1987 form referred disputes to the <b>Engineer</b>.",
"<b>Key mechanisms:</b> <i>Negotiation</i> (cheapest, private); <i>Mediation</i> (non-binding, facilitated); <i>Adjudication</i> (fast, interim-binding \"pay now, argue later\" — statutory in some jurisdictions); <i>Arbitration</i> (private, binding, enforceable across borders via New York Convention); <i>Litigation</i> (public courts, binding, appealable)."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "ADR saves cost/time and preserves relationships; adjudication gives rapid cash-flow decisions; arbitration is favoured internationally for neutrality and enforceability. Dispute <b>avoidance</b> (early warning, good records, DAAB standing boards) is preferable to resolution."
}
]
},
{
"id": "patent-vs-latent-defects-decennial-liability",
"title": "Patent vs Latent Defects & Decennial Liability",
"icon": "🔍",
"img": "assets/img/defects.webp",
"mins": 5,
"tags": [
"Patent defect",
"Latent defect",
"Decennial liability"
],
"summary": "Patent defect: discoverable by reasonable inspection at completion; recorded on the snag/punch list; contractor rectifies within the…",
"blocks": [
{
"t": "points",
"items": [
"<b>Patent defect:</b> discoverable by reasonable inspection at completion; recorded on the snag/punch list; contractor rectifies within the <b>DLP/rectification period</b>.",
"<b>Latent defect:</b> not discoverable by reasonable inspection at completion (hidden structural/water damage); liability depends on contract terms, warranties/guarantees and the applicable limitation period.",
"<b>Decennial liability:</b> in GCC/civil-law jurisdictions, a <b>strict 10-year</b> liability on the <b>contractor and designer</b> for major/structural defects (collapse or threat to stability); generally <b>cannot be excluded</b> and is typically insurance-backed."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "DLP is <i>not</i> the limit of liability for latent defects — decennial and statutory limitation regimes extend exposure well beyond the DLP."
}
]
},
{
"id": "power-of-attorney-poa",
"title": "Power of Attorney (PoA)",
"icon": "✍️",
"img": "assets/img/loa.webp",
"mins": 5,
"tags": [
"Definition",
"Uses",
"Exam angle"
],
"summary": "Definition: a legal document giving one person (attorney-in-fact / authorised representative) authority to act on behalf of another person or",
"blocks": [
{
"t": "points",
"items": [
"<b>Definition:</b> a legal document giving one person (attorney-in-fact / authorised representative) authority to act on behalf of another person or entity.",
"<b>Uses:</b> signing the contract, tender submission, banking and financial authority, legal representation, acting as local representative."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "Verify the signatory's PoA scope before contract execution — a contract signed without valid authority risks being unenforceable."
}
]
},
{
"id": "critical-path-float-preliminaries-vs-overhead",
"title": "Critical Path, Float & Preliminaries vs Overhead",
"icon": "🧵",
"img": "assets/img/prolongation.webp",
"mins": 5,
"tags": [
"Critical path",
"Free float",
"Preliminaries"
],
"summary": "Critical path: the longest sequence of tasks with zero float that fixes the minimum project",
"blocks": [
{
"t": "points",
"items": [
"<b>Critical path:</b> the longest sequence of tasks with <b>zero float</b> that fixes the minimum project duration.",
"<b>Free float:</b> time a task can slip without delaying the <i>start</i> of any following task. <b>Total float:</b> time the project can slip without affecting <i>overall</i> completion.",
"<b>Preliminaries:</b> project-specific costs not tied to a single work element (site set-up, supervision, temporary works) — time-related prelims drive prolongation cost.",
"<b>Overhead:</b> ongoing company-wide operational costs not tied to any one project (head-office running costs)."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "\"Ownership of float\" matters in EOT — delay to a non-critical activity that only consumes float generally earns no EOT; prolongation recovers time-related prelims + off-site head-office overhead."
}
]
},
{
"id": "key-legal-doctrines-glossary-terms",
"title": "Key Legal Doctrines & Glossary Terms",
"icon": "💸",
"img": "assets/img/priority-documents.webp",
"mins": 5,
"tags": [
"Contra proferentem",
"Condition precedent",
"Estoppel"
],
"summary": "Contra proferentem: ambiguity is construed against the party that drafted the",
"blocks": [
{
"t": "points",
"items": [
"<b>Contra proferentem:</b> ambiguity is construed <b>against</b> the party that drafted the clause.",
"<b>Condition precedent:</b> an event/requirement that must be satisfied before a party's obligation (or entitlement) arises — the basis of time-bars.",
"<b>Estoppel:</b> prevents a party asserting a right contrary to its earlier representation/conduct that the other relied on.",
"<b>Laches:</b> bars a claim brought after unreasonable delay that prejudices the other party.",
"<b>Waiver:</b> intentional relinquishment of a contractual right (express or implied).",
"<b>Severability:</b> the contract survives even if a particular provision is held invalid/unenforceable.",
"<b>Repudiation:</b> conduct so serious it entitles the innocent party to terminate; <b>rescission:</b> cancelling a contract for fundamental mistake, fraud or duress (treated as void ab initio); <b>frustration:</b> discharge due to unforeseen events making performance impossible.",
"<b>Without prejudice:</b> communications (e.g. settlement offers) that cannot be used as evidence in court.",
"<b>Time is of the essence:</b> deadlines are strictly binding, breach entitling termination.",
"<b>Title-retention (Romalpa) clause:</b> goods remain the seller's property until payment — relevant to vesting of materials.",
"<b>Quasi-contract / quantum meruit:</b> obligation to pay a <i>reasonable</i> value for work done where there is no concluded contract (links to LOI / unjust enrichment).",
"<b>Good faith:</b> duty to perform honestly and fairly; <b>step-in clause:</b> lets a warranty beneficiary (e.g. funder) take over the employer's role if the employer defaults.",
"<b>Un-liquidated damages:</b> loss determined by a court/arbitrator where the contract fixes no LAD figure.",
"<b>Letter of credit:</b> bank guarantee of payment; <b>material breach:</b> a significant failure entitling the innocent party to demand performance or damages."
]
},
{
"t": "callout",
"kind": "tip",
"title": "Exam angle",
"html": "These doctrines underpin claims, interpretation and termination arguments — cite the specific doctrine (e.g. contra proferentem, condition precedent, prevention principle) rather than describing it generically."
}
]
}
]
});
