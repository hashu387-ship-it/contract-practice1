/* =====================================================================
   Contract Practice & Administration — Interactive Study Notes
   Global content store. Each content file (content/partN.js, glossary.js,
   quiz.js) pushes into these structures. Loaded before app.js.

   Block schema used inside every section.blocks[]:
     {t:'lead',   html}
     {t:'def',    term, html}
     {t:'points', title?, dense?, items:[ 'str' | {b,t} | {b,t,sub:[...]} ]}
     {t:'table',  title?, headers:[...], rows:[[...]], note?}
     {t:'compare',title?, cols:[{h, tone?, items:[...]}]}
     {t:'steps',  title?, items:['str' | {b,t}]}
     {t:'callout',kind:'key|tip|law|case|warn|note', title, html?, items?}
     {t:'stat',   items:[{v, k, cap?}]}
     {t:'flow',   title?, steps:['A','B',...], note?}
     {t:'figure', img, caption}
     {t:'quote',  html, cite?}
   ===================================================================== */
window.COURSE = {
  meta: {
    title: 'Contract Practice & Administration',
    titleHTML: 'Contract Practice <em>&amp;</em> Administration',
    lead: 'MRICS & AIQS APC — everything for the RICS & AIQS APC: formation, FIDIC, securities, payments, insurance, time, claims, termination & completion — with realistic explainer videos, mind maps, flashcards, a quiz and a viva Q&A bank.',
    subtitle: 'MRICS & AIQS APC — Complete Interactive Study Notes',
    author: 'Course by Roshan de Silva · APC Coaching',
    credential: 'BSc(Hons)QS, LLM (Construction Law), MRICS, MAIQS, CQS',
    hero: 'assets/img/hero.webp',
  },
  parts: [],
  glossary: [],
  quiz: [],
  viva: [],
};
