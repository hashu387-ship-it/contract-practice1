/* =====================================================================
   Procurement & Tendering — MEGA HIERARCHY / ORG CHART (every element + explanation)
   Consumed by the "Hierarchy + notes" and "Org chart" modes of the mind-map view.
   Node shape: { t: title, d: English explanation, dt: Tamil explanation, col?, c?: [children] }.
   Tamil (dt) is written in plain, simple Tamil but KEEPS the hard technical terms in
   English (procurement, tender, risk, lump sum, D&B, …) so it stays exam-usable.
   ===================================================================== */
window.PT_HIERARCHY = {
  t: 'Procurement & Tendering',
  d: 'The technical competency covering how a construction project is structured and delivered (procurement) and how the contract price is obtained and fixed (tendering). Get the strategy right and the tender simply delivers the right contractor at the right price.',
  dt: 'ஒரு கட்டுமான project எப்படி structure செய்யப்பட்டு deliver செய்யப்படுகிறது (procurement), contract price எப்படி பெறப்பட்டு நிர்ணயிக்கப்படுகிறது (tendering) என்பதை உள்ளடக்கிய technical competency. Strategy சரியாக இருந்தால், tender சரியான contractor-ஐ சரியான விலையில் கொண்டுவரும்.',
  col: '#d4af37',
  c: [
    {
      t: 'PROCUREMENT — the strategy', col: '#0e7fb8',
      d: 'The end-to-end strategy: how the project is structured and delivered, fixing risk allocation and the contractual relationships long before work starts on site.',
      dt: 'முழுமையான strategy: project எப்படி structure செய்யப்பட்டு deliver செய்யப்படுகிறது; work தொடங்குவதற்கு முன்பே risk allocation மற்றும் contractual relationships-ஐ நிர்ணயிக்கிறது.',
      c: [
        {
          t: 'Fundamentals', col: '#0ea5a5',
          d: 'What procurement is and why the strategy decision matters so much.',
          dt: 'Procurement என்றால் என்ன, strategy முடிவு ஏன் இவ்வளவு முக்கியம் என்பது.',
          c: [
            { t: 'Definition', d: 'Procurement is the whole acquisition strategy — choosing the delivery route, the contractual relationships and the risk allocation for the entire project.', dt: 'Procurement என்பது முழு acquisition strategy — project முழுவதற்கும் delivery route, contractual relationships மற்றும் risk allocation-ஐ தேர்ந்தெடுப்பது.' },
            { t: 'Procurement vs tendering', d: 'Procurement is the strategy (the whole plan); tendering is the execution sub-process within it that obtains and evaluates offers to set the price.', dt: 'Procurement என்பது strategy (முழு திட்டம்); tendering என்பது அதற்குள் offers பெற்று மதிப்பீடு செய்து price நிர்ணயிக்கும் execution செயல்முறை.' },
            { t: 'Fixes risk allocation', d: 'The route chosen decides which party carries design, cost, time and performance risk — the single biggest consequence of the decision.', dt: 'தேர்ந்தெடுத்த route எந்த party design, cost, time மற்றும் performance risk-ஐ சுமக்கிறது என்பதை தீர்மானிக்கிறது — இதுவே மிக முக்கிய விளைவு.' },
            { t: 'Sets contractual relationships', d: 'It defines the contractual links between client, consultants, main contractor and subcontractors.', dt: 'Client, consultants, main contractor மற்றும் subcontractors இடையேயான contractual links-ஐ வரையறுக்கிறது.' },
            { t: 'Controls time · cost · quality', d: 'Route choice drives the balance between speed, price certainty and design/quality control.', dt: 'Route தேர்வு speed, price certainty மற்றும் design/quality control இடையேயான சமநிலையை தீர்மானிக்கிறது.' },
            { t: 'RICS competency (Levels 1–3)', d: 'An APC technical competency assessed at Level 1 (knowledge), Level 2 (application) and Level 3 (reasoned advice).', dt: 'Level 1 (knowledge), Level 2 (application), Level 3 (advice) என மதிப்பிடப்படும் APC technical competency.' },
          ],
        },
        {
          t: 'The three aspects of procurement', col: '#2f8fed',
          d: 'Every procurement decision resolves into three linked choices.',
          dt: 'ஒவ்வொரு procurement முடிவும் மூன்று தொடர்புடைய தேர்வுகளாக பிரியும்.',
          c: [
            { t: 'Working arrangement', d: 'The delivery/organisational path — who designs, who builds and how they relate (traditional, design & build, management, etc.).', dt: 'Delivery / organisational path — யார் design செய்கிறார், யார் build செய்கிறார், அவர்கள் எப்படி தொடர்பு கொள்கிறார்கள் (traditional, design & build, management போன்றவை).' },
            { t: 'Tendering process', d: 'How offers are sought and evaluated (open, selective or negotiated; single- or two-stage).', dt: 'Offers எப்படி கேட்கப்பட்டு மதிப்பிடப்படுகின்றன (open, selective அல்லது negotiated; single அல்லது two-stage).' },
            { t: 'Contract type', d: 'How the works are valued and priced, which sets the risk balance (lump sum, remeasurement, cost-plus, target cost).', dt: 'Works எப்படி value செய்யப்பட்டு price செய்யப்படுகிறது; இது risk balance-ஐ நிர்ணயிக்கிறது (lump sum, remeasurement, cost-plus, target cost).' },
          ],
        },
        {
          t: 'Working arrangements (delivery routes)', col: '#e0863b',
          d: 'The main organisational routes for delivering the works, each with a different risk/speed/control profile.',
          dt: 'Works-ஐ deliver செய்வதற்கான முக்கிய routes; ஒவ்வொன்றும் வெவ்வேறு risk / speed / control தன்மை கொண்டது.',
          c: [
            {
              t: 'Traditional (design–bid–build)',
              d: 'Consultants complete the design first; contractors then bid on the finished design and build under consultant supervision.',
              dt: 'முதலில் consultants design-ஐ முடிக்கிறார்கள்; பிறகு contractors முடிந்த design மீது bid செய்து, consultant supervision-இல் build செய்கிறார்கள்.',
              c: [
                { t: 'Sequential', d: 'Design fully complete before tender and construction — clear and controlled, but slow.', dt: 'Tender மற்றும் construction-க்கு முன் design முழுமையாக முடியும் — தெளிவானது ஆனால் மெதுவானது.' },
                { t: 'Accelerated', d: 'Design and construction overlap to save time, trading away some price certainty.', dt: 'நேரம் மிச்சப்படுத்த design-உம் construction-உம் ஒன்றுடன் ஒன்று overlap ஆகும்; சிறிது price certainty இழக்கப்படும்.' },
                { t: 'Consultant supervision', d: 'The design team administers the contract and checks quality on the client’s behalf.', dt: 'Design team client சார்பாக contract-ஐ நிர்வகித்து quality-ஐ சரிபார்க்கிறது.' },
                { t: 'Advantages', d: 'Strong client design control and good price certainty (design is complete before pricing).', dt: 'Client-க்கு வலுவான design control மற்றும் நல்ல price certainty (pricing-க்கு முன் design முடிந்திருக்கும்).' },
                { t: 'Disadvantages', d: 'Slow and sequential; the contractor’s buildability input comes too late.', dt: 'மெதுவானது, sequential; contractor-இன் buildability யோசனை மிகவும் தாமதமாக வரும்.' },
              ],
            },
            {
              t: 'Design & Build (D&B)',
              d: 'A single contractor takes responsibility for both design and construction — one point of responsibility.',
              dt: 'ஒரே contractor design மற்றும் construction இரண்டுக்கும் பொறுப்பேற்கிறார் — single point of responsibility.',
              c: [
                { t: 'Pure D&B', d: 'The contractor designs and builds from the client’s requirements; a single point of blame.', dt: 'Client requirements-ஐ வைத்து contractor design செய்து build செய்கிறார்; single point of blame.' },
                { t: 'Novated D&B', d: 'The client’s designers are transferred (novated) to the contractor after concept design, keeping design intent.', dt: 'Concept design-க்குப் பின் client-இன் designers contractor-க்கு novate செய்யப்படுகிறார்கள்; design intent பாதுகாக்கப்படுகிறது.' },
                { t: 'Turnkey / EPC', d: 'The contractor delivers a complete, ready-to-operate facility (engineer–procure–construct).', dt: 'Contractor முழுமையான, உடனே இயக்கக்கூடிய facility-ஐ ஒப்படைக்கிறார் (engineer–procure–construct).' },
                { t: 'Design & Manage', d: 'The contractor designs and manages the works but subcontracts the actual construction packages.', dt: 'Contractor design செய்து works-ஐ manage செய்கிறார், ஆனால் உண்மையான construction packages-ஐ subcontract செய்கிறார்.' },
                { t: 'Advantages', d: 'Speed, cost certainty and single-point responsibility.', dt: 'Speed, cost certainty மற்றும் single-point responsibility.' },
                { t: 'Disadvantages', d: 'The client loses direct control of design detail and quality.', dt: 'Client-க்கு design detail மற்றும் quality மீதான நேரடி control குறையும்.' },
              ],
            },
            {
              t: 'Management paths',
              d: 'The works are split into packages, let and managed for an early start on large/complex projects.',
              dt: 'பெரிய / சிக்கலான projects-இல் விரைவில் தொடங்க, works packages-ஆக பிரிக்கப்பட்டு let செய்து manage செய்யப்படுகிறது.',
              c: [
                { t: 'Management Contracting', d: 'The management contractor holds the trade-package subcontracts and is paid a management fee.', dt: 'Management contractor trade-package subcontracts-ஐ வைத்திருக்கிறார்; அவருக்கு management fee வழங்கப்படுகிறது.' },
                { t: 'Construction Management', d: 'The client holds the trade contracts directly; the construction manager coordinates them for a fee.', dt: 'Client trade contracts-ஐ நேரடியாக வைத்திருக்கிறார்; construction manager அவற்றை fee-க்கு coordinate செய்கிறார்.' },
                { t: 'Early start', d: 'Construction can begin before the design is fully complete (fast-track).', dt: 'Design முழுமையாக முடிவதற்கு முன்பே construction தொடங்கலாம் (fast-track).' },
                { t: 'Risk', d: 'The client carries more cost and time risk than in a lump-sum route.', dt: 'Lump-sum route-ஐ விட client அதிக cost மற்றும் time risk-ஐ சுமக்கிறார்.' },
              ],
            },
            {
              t: 'Relationship-based',
              d: 'Delivery built on collaboration and trust rather than adversarial contracting.',
              dt: 'எதிரெதிர் (adversarial) contracting-ஐ விட ஒத்துழைப்பு மற்றும் நம்பிக்கை மீது கட்டப்பட்ட delivery.',
              c: [
                { t: 'Partnering', d: 'Project (single job) or strategic (long-term) collaboration built on shared goals and trust.', dt: 'Project (ஒரு வேலை) அல்லது strategic (நீண்டகால) collaboration — பொதுவான goals மற்றும் நம்பிக்கை மீது.' },
                { t: 'Alliancing', d: 'Parties share risk and reward under a single collaborative agreement.', dt: 'ஒரே collaborative agreement-இன் கீழ் parties risk மற்றும் reward-ஐ பகிர்ந்து கொள்கிறார்கள்.' },
                { t: 'Open-book · pain/gain', d: 'Transparent costs with a shared pain/gain mechanism measured against an agreed target.', dt: 'வெளிப்படையான costs; ஒப்புக்கொண்ட target-க்கு எதிராக பகிரப்பட்ட pain/gain mechanism.' },
              ],
            },
            {
              t: 'Finance-based',
              d: 'Private capital funds — and often operates — the asset, repaid over its life.',
              dt: 'Private capital asset-ஐ fund செய்து (பெரும்பாலும் operate-உம் செய்து), அதன் ஆயுள் முழுவதும் திரும்பப் பெறப்படுகிறது.',
              c: [
                { t: 'PPP / PFI', d: 'Public–private partnership / private finance initiative — private capital builds and operates public assets.', dt: 'Public–private partnership / private finance initiative — private capital public assets-ஐ build செய்து operate செய்கிறது.' },
                { t: 'BOOT · BOO · concession', d: 'Build–own–operate(–transfer) and concession models over a long operating term.', dt: 'Build–own–operate(–transfer) மற்றும் concession models — நீண்ட operating காலத்திற்கு.' },
                { t: 'Whole-life focus', d: 'Emphasis on lifecycle cost and long-term performance, not just the capital cost.', dt: 'Capital cost மட்டுமல்ல, lifecycle cost மற்றும் நீண்டகால performance மீது கவனம்.' },
              ],
            },
          ],
        },
        {
          t: 'Contract types (pricing = risk)', col: '#d94f8a',
          d: 'How the works are valued — which is really a decision about who carries the risk.',
          dt: 'Works எப்படி value செய்யப்படுகிறது — உண்மையில் யார் risk-ஐ சுமக்கிறார் என்ற முடிவு.',
          c: [
            { t: 'Lump sum', d: 'A fixed price for defined works; the contractor carries the risk of quantities and productivity.', dt: 'வரையறுக்கப்பட்ட works-க்கு fixed price; quantities மற்றும் productivity risk-ஐ contractor சுமக்கிறார்.' },
            { t: 'Remeasurement', d: 'Priced on actual measured quantities against agreed rates — suits uncertain quantities.', dt: 'உண்மையில் measure செய்யப்பட்ட quantities-ஐ agreed rates-இல் price செய்கிறது — நிச்சயமற்ற quantities-க்கு ஏற்றது.' },
            { t: 'Cost-reimbursement', d: 'Actual cost plus a fee (percentage, fixed or fluctuating); the client carries the cost risk.', dt: 'உண்மையான cost + fee (percentage, fixed அல்லது fluctuating); cost risk-ஐ client சுமக்கிறார்.' },
            { t: 'Target cost / GMP', d: 'An agreed target (or guaranteed maximum price) with shared savings and overruns.', dt: 'ஒப்புக்கொண்ட target (அல்லது guaranteed maximum price); savings மற்றும் overruns பகிரப்படும்.' },
            { t: 'Framework · term · serial · call-off', d: 'Standing arrangements for repeat or ongoing work, drawn down via call-off orders.', dt: 'மீண்டும் மீண்டும் அல்லது தொடர்ச்சியான work-க்கான standing arrangements; call-off orders மூலம் பயன்படுத்தப்படுகிறது.' },
          ],
        },
      ],
    },
    {
      t: 'TENDERING — the execution', col: '#8a4fd0',
      d: 'The process of inviting, comparing and accepting competitive offers to select the contractor and fix the contract price.',
      dt: 'Contractor-ஐ தேர்ந்தெடுத்து contract price-ஐ நிர்ணயிக்க, competitive offers-ஐ invite செய்து, ஒப்பிட்டு, ஏற்கும் செயல்முறை.',
      c: [
        {
          t: 'Purpose & principles', col: '#9b57d6',
          d: 'Why tendering exists and the principles that keep it defensible.',
          dt: 'Tendering ஏன் தேவை, அதை நியாயமாக வைத்திருக்கும் principles என்ன.',
          c: [
            { t: 'Select the right contractor', d: 'Obtain a competent contractor able to deliver to time, cost and quality.', dt: 'Time, cost மற்றும் quality-க்கு deliver செய்யக்கூடிய திறமையான contractor-ஐ பெறுவது.' },
            { t: 'Fair, open competition', d: 'Give capable bidders an equal opportunity to compete for the work.', dt: 'திறமையான bidders-க்கு work-க்காக போட்டியிட சம வாய்ப்பு அளிப்பது.' },
            { t: 'Transparency & equal information', d: 'Every bidder receives the same information and is judged on published criteria.', dt: 'ஒவ்வொரு bidder-க்கும் ஒரே information; வெளியிடப்பட்ட criteria மீது மதிப்பீடு.' },
            { t: 'Confidentiality of bids', d: 'Bids are kept sealed and secret until opening to prevent collusion or manipulation.', dt: 'Collusion அல்லது manipulation-ஐ தடுக்க, opening வரை bids sealed-ஆக ரகசியமாக வைக்கப்படுகிறது.' },
            { t: 'Avoid disputes / challenges', d: 'A fair, documented process reduces the risk of legal challenge and later dispute.', dt: 'நியாயமான, ஆவணப்படுத்தப்பட்ட process legal challenge மற்றும் dispute risk-ஐ குறைக்கிறது.' },
          ],
        },
        {
          t: 'Tendering strategies', col: '#4f7fe0',
          d: 'The main ways of taking work to the market.',
          dt: 'Work-ஐ market-க்கு கொண்டு செல்லும் முக்கிய வழிகள்.',
          c: [
            { t: 'Open tendering', d: 'Anyone may bid — maximum competition, but heavy to evaluate and variable quality.', dt: 'யார் வேண்டுமானாலும் bid செய்யலாம் — அதிக competition, ஆனால் evaluate செய்வது கடினம், quality மாறுபடும்.' },
            { t: 'Single-stage selective', d: 'Only a shortlist of pre-qualified contractors is invited — balances competition with quality.', dt: 'Pre-qualified contractors shortlist மட்டுமே invite செய்யப்படுகிறது — competition-உம் quality-உம் சமநிலை.' },
            { t: 'Two-stage', d: 'The contractor is brought in early under a PCSA / early-contractor-involvement so buildability shapes the design before the price is fixed.', dt: 'PCSA / early-contractor-involvement மூலம் contractor முன்கூட்டியே சேர்க்கப்படுகிறார்; price நிர்ணயிக்கும் முன் buildability design-ஐ வடிவமைக்கிறது.' },
            { t: 'Negotiated', d: 'Terms are agreed with a single contractor — fast and flexible, but no price competition.', dt: 'ஒரே contractor-உடன் terms ஒப்புக்கொள்ளப்படுகிறது — வேகமானது, flexible, ஆனால் price competition இல்லை.' },
            { t: 'E-tendering', d: 'The whole process is run through a secure online portal for speed and auditability.', dt: 'முழு process-உம் secure online portal மூலம் நடத்தப்படுகிறது — speed மற்றும் auditability.' },
          ],
        },
        {
          t: 'Prequalification (PQ)', col: '#3aa76d',
          d: 'Screening contractors for capability before they are allowed to bid.',
          dt: 'Bid செய்ய அனுமதிக்கும் முன் contractors-இன் capability-ஐ screen செய்வது.',
          c: [
            { t: 'Technical capability', d: 'Relevant experience, resources and track record on similar works.', dt: 'இதுபோன்ற works-இல் தொடர்புடைய experience, resources மற்றும் track record.' },
            { t: 'Financial standing', d: 'Turnover, accounts and solvency to show the firm can carry the job.', dt: 'Firm வேலையை சுமக்க முடியும் என்பதை காட்ட turnover, accounts மற்றும் solvency.' },
            { t: 'Legal · H&S · insurance', d: 'Compliance, health-and-safety record and adequate insurance cover.', dt: 'Compliance, health-and-safety record மற்றும் போதிய insurance cover.' },
            { t: 'PQQ', d: 'A prequalification questionnaire filters out unqualified firms before tendering.', dt: 'Tendering-க்கு முன் தகுதியற்ற firms-ஐ வடிகட்டும் prequalification questionnaire.' },
            { t: 'Reduces evaluation effort', d: 'Only credible bidders reach the tender stage, saving time and improving bid quality.', dt: 'நம்பகமான bidders மட்டுமே tender stage-ஐ அடைவதால் நேரம் மிச்சம், bid quality மேம்படும்.' },
          ],
        },
        {
          t: 'Invitation to Tender (ITT)', col: '#c9863b',
          d: 'The formal, rules-based start of competitive bidding.',
          dt: 'Competitive bidding-இன் முறையான, rules-அடிப்படையிலான தொடக்கம்.',
          c: [
            { t: 'ITT letter', d: 'Sets the rules, the submission deadline and how bids will be evaluated.', dt: 'Rules, submission deadline மற்றும் bids எப்படி evaluate செய்யப்படும் என்பதை நிர்ணயிக்கிறது.' },
            { t: 'Same information to all', d: 'Identical documents go to every bidder to keep the competition fair.', dt: 'Competition நியாயமாக இருக்க ஒவ்வொரு bidder-க்கும் ஒரே documents.' },
            {
              t: 'Tender documents',
              d: 'The compiled package bidders price against.',
              dt: 'Bidders price செய்யும் தொகுக்கப்பட்ட package.',
              c: [
                { t: 'Drawings', d: 'The design information showing what is to be built.', dt: 'என்ன கட்டப்பட வேண்டும் என்பதை காட்டும் design information.' },
                { t: 'Bill of Quantities (BOQ)', d: 'Measured quantities of the works for consistent pricing and comparison.', dt: 'நிலையான pricing மற்றும் comparison-க்கான works-இன் measure செய்யப்பட்ட quantities.' },
                { t: 'Conditions of contract', d: 'The legal terms that will govern the works (e.g. FIDIC, JCT, NEC).', dt: 'Works-ஐ ஆளும் legal terms (எ.கா. FIDIC, JCT, NEC).' },
                { t: 'Specification', d: 'The required quality, materials and workmanship standards.', dt: 'தேவையான quality, materials மற்றும் workmanship standards.' },
                { t: 'Form of tender', d: 'The formal offer document the bidder completes and signs.', dt: 'Bidder நிரப்பி கையெழுத்திடும் முறையான offer document.' },
              ],
            },
            { t: 'Two-envelope', d: 'Technical and commercial submissions kept separate so price cannot bias the quality assessment.', dt: 'Price quality assessment-ஐ பாதிக்காதவாறு technical மற்றும் commercial submissions தனித்தனியாக வைக்கப்படுகிறது.' },
          ],
        },
        {
          t: 'Tender period', col: '#6a9bd8',
          d: 'The window in which bidders price the work.',
          dt: 'Bidders work-ஐ price செய்யும் கால அளவு.',
          c: [
            { t: 'Site visits', d: 'Often mandatory — bidders inspect real ground and site conditions to price accurately.', dt: 'பெரும்பாலும் mandatory — bidders சரியாக price செய்ய உண்மையான ground மற்றும் site conditions-ஐ பார்வையிடுகிறார்கள்.' },
            { t: 'Queries answered to all', d: 'Questions are answered in writing to every bidder simultaneously.', dt: 'கேள்விகள் எழுத்துப்பூர்வமாக அனைத்து bidders-க்கும் ஒரே நேரத்தில் பதிலளிக்கப்படுகிறது.' },
            { t: 'Addenda / bulletins', d: 'Formal changes or clarifications issued to all bidders during the period.', dt: 'இக்காலத்தில் அனைத்து bidders-க்கும் வழங்கப்படும் முறையான மாற்றங்கள் அல்லது தெளிவுபடுத்தல்கள்.' },
            { t: 'Adequate time to price', d: 'Bidders must be given enough time to prepare a considered, competitive bid.', dt: 'Bidders சிந்தித்த, competitive bid தயாரிக்க போதிய நேரம் வழங்கப்பட வேண்டும்.' },
          ],
        },
        {
          t: 'Submission & opening', col: '#b45fb0',
          d: 'How bids are received and formally opened.',
          dt: 'Bids எப்படி பெறப்பட்டு முறையாக open செய்யப்படுகிறது.',
          c: [
            { t: 'Sealed, by deadline', d: 'Bids are submitted sealed (or via secure portal) by a fixed deadline.', dt: 'Fixed deadline-க்குள் bids sealed-ஆக (அல்லது secure portal மூலம்) submit செய்யப்படுகிறது.' },
            { t: 'Late bids rejected', d: 'Bids received after the deadline are refused to protect fairness.', dt: 'நியாயத்தை பாதுகாக்க deadline-க்குப் பின் வரும் bids நிராகரிக்கப்படுகின்றன.' },
            { t: 'Formal committee opening', d: 'A committee opens the bids together, transparently, at the appointed time.', dt: 'நிர்ணயிக்கப்பட்ட நேரத்தில் committee bids-ஐ ஒன்றாக, வெளிப்படையாக open செய்கிறது.' },
            { t: 'Register & audit trail', d: 'Bids are logged so the process can be audited and defended.', dt: 'Process-ஐ audit செய்து defend செய்ய bids log செய்யப்படுகிறது.' },
          ],
        },
        {
          t: 'Tender evaluation', col: '#d9663b',
          d: 'Comparing bids fairly to find the best value, not simply the cheapest.',
          dt: 'மலிவானதை மட்டுமல்ல, best value-ஐ கண்டறிய bids-ஐ நியாயமாக ஒப்பிடுவது.',
          c: [
            { t: 'Technical first', d: 'Quality is assessed first against a threshold (a ~75-point cutoff is typical); only passing bids proceed.', dt: 'முதலில் quality ஒரு threshold-க்கு எதிராக மதிப்பிடப்படுகிறது (~75-point cutoff வழக்கம்); pass ஆனவை மட்டுமே தொடர்கின்றன.' },
            { t: 'Commercial / price second', d: 'Price is assessed only after the quality gate, so an unqualified low bid cannot simply win.', dt: 'Quality gate-க்குப் பின்னரே price மதிப்பிடப்படுகிறது; தகுதியற்ற low bid வெறுமனே வெல்ல முடியாது.' },
            { t: 'Normalisation & arithmetic check', d: 'Bids are corrected and put on a like-for-like basis before comparison.', dt: 'Comparison-க்கு முன் bids சரிசெய்யப்பட்டு like-for-like அடிப்படையில் வைக்கப்படுகிறது.' },
            { t: 'Watch: bid rigging', d: 'Collusion between bidders to fix or rotate who wins — illegal and must be guarded against.', dt: 'யார் வெல்வது என்பதை fix/rotate செய்ய bidders இடையேயான collusion — சட்டவிரோதம், தடுக்கப்பட வேண்டும்.' },
            { t: 'Watch: bid shopping', d: 'Playing bidders’ prices off against each other after tender — unethical and damages trust.', dt: 'Tender-க்குப் பின் bidders-இன் prices-ஐ ஒன்றுக்கொன்று எதிராக பயன்படுத்துவது — நெறிமுறையற்றது, நம்பிக்கையை சேதப்படுத்தும்.' },
            { t: 'Watch: abnormally low bid', d: 'A suspiciously low price may signal error or risk and should be investigated before award.', dt: 'சந்தேகமான low price error அல்லது risk-ஐ குறிக்கலாம்; award-க்கு முன் விசாரிக்கப்பட வேண்டும்.' },
          ],
        },
        {
          t: 'Recommendation & award', col: '#3f9d9d',
          d: 'Justifying the winner and forming the contract.',
          dt: 'வெற்றியாளரை நியாயப்படுத்தி contract-ஐ உருவாக்குவது.',
          c: [
            { t: 'In-Country Value (ICV)', d: 'Local employment, materials and SME content scored into the evaluation (often 5–20% of the score).', dt: 'Local employment, materials மற்றும் SME content evaluation-இல் score செய்யப்படுகிறது (பெரும்பாலும் score-இல் 5–20%).' },
            { t: 'Evaluation & recommendation report', d: 'Documents the scoring and justifies the recommended contractor.', dt: 'Scoring-ஐ ஆவணப்படுத்தி பரிந்துரைக்கப்பட்ட contractor-ஐ நியாயப்படுத்துகிறது.' },
            { t: 'Letter of award / acceptance', d: 'Formally accepts the winning tender and (with the tender) forms the contract.', dt: 'வெற்றி tender-ஐ முறையாக ஏற்று (tender-உடன்) contract-ஐ உருவாக்குகிறது.' },
            { t: 'Regret letters & debrief', d: 'Unsuccessful bidders are notified and offered feedback.', dt: 'வெற்றிபெறாத bidders-க்கு அறிவிக்கப்பட்டு feedback வழங்கப்படுகிறது.' },
            { t: 'Standstill period', d: 'A pause before signing lets unsuccessful bidders challenge the decision if needed.', dt: 'கையெழுத்திடுவதற்கு முன் ஒரு இடைவெளி — தேவைப்பட்டால் வெற்றிபெறாத bidders முடிவை challenge செய்யலாம்.' },
          ],
        },
      ],
    },
  ],
};
