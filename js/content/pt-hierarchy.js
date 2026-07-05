/* =====================================================================
   Procurement & Tendering — MEGA HIERARCHY CHART (every element + its explanation)
   Consumed by the "Hierarchy + notes" mode of the mind-map view in app.js.
   Node shape: { t: title, d: explanation, col?: branch colour, c?: [children] }.
   Every element carries a plain-English explanation so the whole syllabus can be
   read top-to-bottom as an explained outline.
   ===================================================================== */
window.PT_HIERARCHY = {
  t: 'Procurement & Tendering',
  d: 'The technical competency covering how a construction project is structured and delivered (procurement) and how the contract price is obtained and fixed (tendering). Get the strategy right and the tender simply delivers the right contractor at the right price.',
  col: '#2f6df0',
  c: [
    {
      t: 'PROCUREMENT — the strategy', col: '#0e7fb8',
      d: 'The end-to-end strategy: how the project is structured and delivered, fixing risk allocation and the contractual relationships long before work starts on site.',
      c: [
        {
          t: 'Fundamentals', col: '#0ea5a5',
          d: 'What procurement is and why the strategy decision matters so much.',
          c: [
            { t: 'Definition', d: 'Procurement is the whole acquisition strategy — choosing the delivery route, the contractual relationships and the risk allocation for the entire project.' },
            { t: 'Procurement vs tendering', d: 'Procurement is the strategy (the whole plan); tendering is the execution sub-process within it that obtains and evaluates offers to set the price.' },
            { t: 'Fixes risk allocation', d: 'The route chosen decides which party carries design, cost, time and performance risk — the single biggest consequence of the decision.' },
            { t: 'Sets contractual relationships', d: 'It defines the contractual links between client, consultants, main contractor and subcontractors.' },
            { t: 'Controls time · cost · quality', d: 'Route choice drives the balance between speed, price certainty and design/quality control.' },
            { t: 'RICS competency (Levels 1–3)', d: 'An APC technical competency assessed at Level 1 (knowledge), Level 2 (application) and Level 3 (reasoned advice).' },
          ],
        },
        {
          t: 'The three aspects of procurement', col: '#2f8fed',
          d: 'Every procurement decision resolves into three linked choices.',
          c: [
            { t: 'Working arrangement', d: 'The delivery/organisational path — who designs, who builds and how they relate (traditional, design & build, management, etc.).' },
            { t: 'Tendering process', d: 'How offers are sought and evaluated (open, selective or negotiated; single- or two-stage).' },
            { t: 'Contract type', d: 'How the works are valued and priced, which sets the risk balance (lump sum, remeasurement, cost-plus, target cost).' },
          ],
        },
        {
          t: 'Working arrangements (delivery routes)', col: '#e0863b',
          d: 'The main organisational routes for delivering the works, each with a different risk/speed/control profile.',
          c: [
            {
              t: 'Traditional (design–bid–build)',
              d: 'Consultants complete the design first; contractors then bid on the finished design and build under consultant supervision.',
              c: [
                { t: 'Sequential', d: 'Design fully complete before tender and construction — clear and controlled, but slow.' },
                { t: 'Accelerated', d: 'Design and construction overlap to save time, trading away some price certainty.' },
                { t: 'Consultant supervision', d: 'The design team administers the contract and checks quality on the client’s behalf.' },
                { t: 'Advantages', d: 'Strong client design control and good price certainty (design is complete before pricing).' },
                { t: 'Disadvantages', d: 'Slow and sequential; the contractor’s buildability input comes too late.' },
              ],
            },
            {
              t: 'Design & Build (D&B)',
              d: 'A single contractor takes responsibility for both design and construction — one point of responsibility.',
              c: [
                { t: 'Pure D&B', d: 'The contractor designs and builds from the client’s requirements; a single point of blame.' },
                { t: 'Novated D&B', d: 'The client’s designers are transferred (novated) to the contractor after concept design, keeping design intent.' },
                { t: 'Turnkey / EPC', d: 'The contractor delivers a complete, ready-to-operate facility (engineer–procure–construct).' },
                { t: 'Design & Manage', d: 'The contractor designs and manages the works but subcontracts the actual construction packages.' },
                { t: 'Advantages', d: 'Speed, cost certainty and single-point responsibility.' },
                { t: 'Disadvantages', d: 'The client loses direct control of design detail and quality.' },
              ],
            },
            {
              t: 'Management paths',
              d: 'The works are split into packages, let and managed for an early start on large/complex projects.',
              c: [
                { t: 'Management Contracting', d: 'The management contractor holds the trade-package subcontracts and is paid a management fee.' },
                { t: 'Construction Management', d: 'The client holds the trade contracts directly; the construction manager coordinates them for a fee.' },
                { t: 'Early start', d: 'Construction can begin before the design is fully complete (fast-track).' },
                { t: 'Risk', d: 'The client carries more cost and time risk than in a lump-sum route.' },
              ],
            },
            {
              t: 'Relationship-based',
              d: 'Delivery built on collaboration and trust rather than adversarial contracting.',
              c: [
                { t: 'Partnering', d: 'Project (single job) or strategic (long-term) collaboration built on shared goals and trust.' },
                { t: 'Alliancing', d: 'Parties share risk and reward under a single collaborative agreement.' },
                { t: 'Open-book · pain/gain', d: 'Transparent costs with a shared pain/gain mechanism measured against an agreed target.' },
              ],
            },
            {
              t: 'Finance-based',
              d: 'Private capital funds — and often operates — the asset, repaid over its life.',
              c: [
                { t: 'PPP / PFI', d: 'Public–private partnership / private finance initiative — private capital builds and operates public assets.' },
                { t: 'BOOT · BOO · concession', d: 'Build–own–operate(–transfer) and concession models over a long operating term.' },
                { t: 'Whole-life focus', d: 'Emphasis on lifecycle cost and long-term performance, not just the capital cost.' },
              ],
            },
          ],
        },
        {
          t: 'Contract types (pricing = risk)', col: '#d94f8a',
          d: 'How the works are valued — which is really a decision about who carries the risk.',
          c: [
            { t: 'Lump sum', d: 'A fixed price for defined works; the contractor carries the risk of quantities and productivity.' },
            { t: 'Remeasurement', d: 'Priced on actual measured quantities against agreed rates — suits uncertain quantities.' },
            { t: 'Cost-reimbursement', d: 'Actual cost plus a fee (percentage, fixed or fluctuating); the client carries the cost risk.' },
            { t: 'Target cost / GMP', d: 'An agreed target (or guaranteed maximum price) with shared savings and overruns.' },
            { t: 'Framework · term · serial · call-off', d: 'Standing arrangements for repeat or ongoing work, drawn down via call-off orders.' },
          ],
        },
      ],
    },
    {
      t: 'TENDERING — the execution', col: '#8a4fd0',
      d: 'The process of inviting, comparing and accepting competitive offers to select the contractor and fix the contract price.',
      c: [
        {
          t: 'Purpose & principles', col: '#9b57d6',
          d: 'Why tendering exists and the principles that keep it defensible.',
          c: [
            { t: 'Select the right contractor', d: 'Obtain a competent contractor able to deliver to time, cost and quality.' },
            { t: 'Fair, open competition', d: 'Give capable bidders an equal opportunity to compete for the work.' },
            { t: 'Transparency & equal information', d: 'Every bidder receives the same information and is judged on published criteria.' },
            { t: 'Confidentiality of bids', d: 'Bids are kept sealed and secret until opening to prevent collusion or manipulation.' },
            { t: 'Avoid disputes / challenges', d: 'A fair, documented process reduces the risk of legal challenge and later dispute.' },
          ],
        },
        {
          t: 'Tendering strategies', col: '#4f7fe0',
          d: 'The main ways of taking work to the market.',
          c: [
            { t: 'Open tendering', d: 'Anyone may bid — maximum competition, but heavy to evaluate and variable quality.' },
            { t: 'Single-stage selective', d: 'Only a shortlist of pre-qualified contractors is invited — balances competition with quality.' },
            { t: 'Two-stage', d: 'The contractor is brought in early under a PCSA / early-contractor-involvement so buildability shapes the design before the price is fixed.' },
            { t: 'Negotiated', d: 'Terms are agreed with a single contractor — fast and flexible, but no price competition.' },
            { t: 'E-tendering', d: 'The whole process is run through a secure online portal for speed and auditability.' },
          ],
        },
        {
          t: 'Prequalification (PQ)', col: '#3aa76d',
          d: 'Screening contractors for capability before they are allowed to bid.',
          c: [
            { t: 'Technical capability', d: 'Relevant experience, resources and track record on similar works.' },
            { t: 'Financial standing', d: 'Turnover, accounts and solvency to show the firm can carry the job.' },
            { t: 'Legal · H&S · insurance', d: 'Compliance, health-and-safety record and adequate insurance cover.' },
            { t: 'PQQ', d: 'A prequalification questionnaire filters out unqualified firms before tendering.' },
            { t: 'Reduces evaluation effort', d: 'Only credible bidders reach the tender stage, saving time and improving bid quality.' },
          ],
        },
        {
          t: 'Invitation to Tender (ITT)', col: '#c9863b',
          d: 'The formal, rules-based start of competitive bidding.',
          c: [
            { t: 'ITT letter', d: 'Sets the rules, the submission deadline and how bids will be evaluated.' },
            { t: 'Same information to all', d: 'Identical documents go to every bidder to keep the competition fair.' },
            {
              t: 'Tender documents',
              d: 'The compiled package bidders price against.',
              c: [
                { t: 'Drawings', d: 'The design information showing what is to be built.' },
                { t: 'Bill of Quantities (BOQ)', d: 'Measured quantities of the works for consistent pricing and comparison.' },
                { t: 'Conditions of contract', d: 'The legal terms that will govern the works (e.g. FIDIC, JCT, NEC).' },
                { t: 'Specification', d: 'The required quality, materials and workmanship standards.' },
                { t: 'Form of tender', d: 'The formal offer document the bidder completes and signs.' },
              ],
            },
            { t: 'Two-envelope', d: 'Technical and commercial submissions kept separate so price cannot bias the quality assessment.' },
          ],
        },
        {
          t: 'Tender period', col: '#6a9bd8',
          d: 'The window in which bidders price the work.',
          c: [
            { t: 'Site visits', d: 'Often mandatory — bidders inspect real ground and site conditions to price accurately.' },
            { t: 'Queries answered to all', d: 'Questions are answered in writing to every bidder simultaneously.' },
            { t: 'Addenda / bulletins', d: 'Formal changes or clarifications issued to all bidders during the period.' },
            { t: 'Adequate time to price', d: 'Bidders must be given enough time to prepare a considered, competitive bid.' },
          ],
        },
        {
          t: 'Submission & opening', col: '#b45fb0',
          d: 'How bids are received and formally opened.',
          c: [
            { t: 'Sealed, by deadline', d: 'Bids are submitted sealed (or via secure portal) by a fixed deadline.' },
            { t: 'Late bids rejected', d: 'Bids received after the deadline are refused to protect fairness.' },
            { t: 'Formal committee opening', d: 'A committee opens the bids together, transparently, at the appointed time.' },
            { t: 'Register & audit trail', d: 'Bids are logged so the process can be audited and defended.' },
          ],
        },
        {
          t: 'Tender evaluation', col: '#d9663b',
          d: 'Comparing bids fairly to find the best value, not simply the cheapest.',
          c: [
            { t: 'Technical first', d: 'Quality is assessed first against a threshold (a ~75-point cutoff is typical); only passing bids proceed.' },
            { t: 'Commercial / price second', d: 'Price is assessed only after the quality gate, so an unqualified low bid cannot simply win.' },
            { t: 'Normalisation & arithmetic check', d: 'Bids are corrected and put on a like-for-like basis before comparison.' },
            { t: 'Watch: bid rigging', d: 'Collusion between bidders to fix or rotate who wins — illegal and must be guarded against.' },
            { t: 'Watch: bid shopping', d: 'Playing bidders’ prices off against each other after tender — unethical and damages trust.' },
            { t: 'Watch: abnormally low bid', d: 'A suspiciously low price may signal error or risk and should be investigated before award.' },
          ],
        },
        {
          t: 'Recommendation & award', col: '#3f9d9d',
          d: 'Justifying the winner and forming the contract.',
          c: [
            { t: 'In-Country Value (ICV)', d: 'Local employment, materials and SME content scored into the evaluation (often 5–20% of the score).' },
            { t: 'Evaluation & recommendation report', d: 'Documents the scoring and justifies the recommended contractor.' },
            { t: 'Letter of award / acceptance', d: 'Formally accepts the winning tender and (with the tender) forms the contract.' },
            { t: 'Regret letters & debrief', d: 'Unsuccessful bidders are notified and offered feedback.' },
            { t: 'Standstill period', d: 'A pause before signing lets unsuccessful bidders challenge the decision if needed.' },
          ],
        },
      ],
    },
  ],
};
