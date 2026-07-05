/* =====================================================================
   Procurement & Tendering — MEGA MIND MAP (full syllabus)
   A deep, colour-coded tree consumed by the mind-map engine in app.js.
   Nodes: { label, col?, children? }. Colours set on the two main branches
   and each sub-branch; leaves inherit their sub-branch colour. Kept terse
   (mind-map phrasing, not sentences) so the whole syllabus reads at a glance.
   ===================================================================== */
window.PT_MEGAMAP = {
  label: 'Procurement & Tendering',
  col: '#2f6df0',
  children: [
    {
      label: 'PROCUREMENT — the strategy', col: '#0e7fb8',
      children: [
        {
          label: 'Fundamentals', col: '#0ea5a5',
          children: [
            { label: 'How a project is structured & delivered' },
            { label: 'Procurement = strategy · Tendering = execution' },
            { label: 'Fixes risk allocation' },
            { label: 'Sets contractual relationships' },
            { label: 'Controls time · cost · quality' },
            { label: 'RICS competency (Levels 1–3)' },
          ],
        },
        {
          label: 'Three aspects of procurement', col: '#2f8fed',
          children: [
            { label: 'Working arrangement (delivery path)' },
            { label: 'Tendering process (how offers obtained)' },
            { label: 'Contract type (how works valued)' },
          ],
        },
        {
          label: 'Working arrangements (routes)', col: '#e0863b',
          children: [
            {
              label: 'Traditional',
              children: [
                { label: 'Sequential: design → tender → build' },
                { label: 'Accelerated (overlap design & build)' },
                { label: 'Consultant designs & supervises' },
                { label: '+ design control & price certainty' },
                { label: '− slow, sequential' },
              ],
            },
            {
              label: 'Design & Build',
              children: [
                { label: 'Pure D&B — single-point responsibility' },
                { label: 'Novated D&B' },
                { label: 'Turnkey / EPC' },
                { label: 'Design & Manage' },
                { label: '+ speed, one point of blame' },
                { label: '− client loses design control' },
              ],
            },
            {
              label: 'Management paths',
              children: [
                { label: 'Management Contracting (MC holds packages, fee)' },
                { label: 'Construction Management (client holds trades)' },
                { label: 'Early start on complex projects' },
                { label: 'Client carries more risk' },
              ],
            },
            {
              label: 'Relationship-based',
              children: [
                { label: 'Partnering — project / strategic' },
                { label: 'Alliancing' },
                { label: 'Open-book, pain / gain share' },
                { label: 'Built on trust & collaboration' },
              ],
            },
            {
              label: 'Finance-based',
              children: [
                { label: 'PPP / PFI' },
                { label: 'BOOT · BOO · concession' },
                { label: 'Private finance, whole-life delivery' },
              ],
            },
          ],
        },
        {
          label: 'Contract types (pricing = risk)', col: '#d94f8a',
          children: [
            { label: 'Lump sum — contractor carries risk' },
            { label: 'Remeasurement — pay for what is built' },
            { label: 'Cost-reimbursement — cost + fee (%, fixed, fluctuating)' },
            { label: 'Target cost / GMP — shared pain–gain' },
            { label: 'Framework · term · serial · call-off' },
          ],
        },
      ],
    },
    {
      label: 'TENDERING — the execution', col: '#8a4fd0',
      children: [
        {
          label: 'Purpose & principles', col: '#9b57d6',
          children: [
            { label: 'Select the right contractor' },
            { label: 'Fair, open competition' },
            { label: 'Transparency & equal information' },
            { label: 'Confidentiality of bids' },
            { label: 'Avoid disputes / challenges' },
          ],
        },
        {
          label: 'Tendering strategies', col: '#4f7fe0',
          children: [
            { label: 'Open — anyone bids, max competition' },
            { label: 'Single-stage selective — pre-qualified shortlist' },
            { label: 'Two-stage — PCSA / early contractor involvement' },
            { label: 'Negotiated — single source' },
            { label: 'E-tendering — online portal' },
          ],
        },
        {
          label: 'Prequalification (PQ)', col: '#3aa76d',
          children: [
            { label: 'Technical capability & experience' },
            { label: 'Financial standing' },
            { label: 'Legal · H&S · insurance' },
            { label: 'PQQ screens out the unqualified' },
            { label: 'Reduces evaluation effort' },
          ],
        },
        {
          label: 'Invitation to Tender (ITT)', col: '#c9863b',
          children: [
            { label: 'ITT letter — rules & deadline' },
            { label: 'Same information to every bidder' },
            {
              label: 'Tender documents',
              children: [
                { label: 'Drawings' },
                { label: 'Bill of Quantities (BOQ)' },
                { label: 'Conditions of contract' },
                { label: 'Specification' },
                { label: 'Form of tender' },
              ],
            },
            { label: 'Two-envelope (technical / commercial)' },
          ],
        },
        {
          label: 'Tender period', col: '#6a9bd8',
          children: [
            { label: 'Site visits (often mandatory)' },
            { label: 'Queries answered to all bidders' },
            { label: 'Addenda / bulletins issued' },
            { label: 'Adequate time to price' },
          ],
        },
        {
          label: 'Submission & opening', col: '#b45fb0',
          children: [
            { label: 'Sealed, by deadline' },
            { label: 'Late bids rejected' },
            { label: 'Formal committee opening' },
            { label: 'Register & audit trail' },
          ],
        },
        {
          label: 'Tender evaluation', col: '#d9663b',
          children: [
            { label: 'Technical first (~75-pt cutoff)' },
            { label: 'Commercial / price second' },
            { label: 'Normalisation & arithmetic check' },
            { label: 'Watch: bid rigging' },
            { label: 'Watch: bid shopping' },
            { label: 'Watch: abnormally low bid' },
          ],
        },
        {
          label: 'Recommendation & award', col: '#3f9d9d',
          children: [
            { label: 'In-Country Value (ICV) score' },
            { label: 'Evaluation & recommendation report' },
            { label: 'Letter of award / acceptance' },
            { label: 'Regret letters & debrief' },
            { label: 'Standstill period' },
          ],
        },
      ],
    },
  ],
};
