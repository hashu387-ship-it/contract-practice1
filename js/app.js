/* =====================================================================
   Contract Practice & Administration — app logic (Liquid Glass edition)
   No sidebar · linear in-order notes · floating Contents · Viva Q&A
   ===================================================================== */
(function () {
  'use strict';
  /* ---- RICS APC hub: each subject is one tab, with its own course store ---- */
  const SUBJECTS = { cpa: window.COURSE, pt: window.COURSE_PT };
  let activeSubject = localStorage.getItem('apc-subject') || 'cpa';
  if (!SUBJECTS[activeSubject]) activeSubject = 'cpa';
  let C = SUBJECTS[activeSubject];
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ---------------- Block renderer ---------------- */
  function renderBlock(b) {
    switch (b.t) {
      case 'lead': return `<p class="blk blk-lead">${b.html}</p>`;
      case 'def': return `<div class="blk def"><span class="term">${b.term}</span><span>${b.html}</span></div>`;
      case 'points': {
        const items = b.items.map(it => typeof it === 'string' ? `<li>${it}</li>` : `<li>${it.b ? `<b>${it.b}</b> ` : ''}${it.t || ''}</li>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<ul class="points${b.dense ? ' dense' : ''}">${items}</ul></div>`;
      }
      case 'steps': {
        const items = b.items.map(it => typeof it === 'string' ? `<li>${it}</li>` : `<li>${it.b ? `<b>${it.b}</b>` : ''}${it.t || ''}</li>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<ol class="steps">${items}</ol></div>`;
      }
      case 'table': {
        const head = `<tr>${b.headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
        const rows = b.rows.map(r => `<tr>${r.map(c => `<td>${c || ''}</td>`).join('')}</tr>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<div class="tbl-wrap"><table class="tbl"><thead>${head}</thead><tbody>${rows}</tbody></table></div>${b.note ? `<div class="tbl-note">${b.note}</div>` : ''}</div>`;
      }
      case 'compare': {
        const cols = b.cols.map(col => `<div class="cmp-col" data-tone="${col.tone || 'blue'}"><div class="cmp-h">${col.h}</div><div class="cmp-body"><ul>${col.items.map(i => `<li>${i}</li>`).join('')}</ul></div></div>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<div class="compare">${cols}</div></div>`;
      }
      case 'callout': {
        const ic = { key: '🔑', tip: '💡', law: '§', case: '⚖️', warn: '⚠️', note: 'ℹ️' }[b.kind] || 'ℹ️';
        const body = b.items ? `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>` : (b.html || '');
        return `<div class="blk callout" data-kind="${b.kind}"><div class="co-ic">${ic}</div><div class="co-title">${b.title}</div><div class="co-body">${body}</div></div>`;
      }
      case 'flow': {
        const steps = b.steps.map(s => `<div class="flow-step">${s}</div>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<div class="flow">${steps}</div>${b.note ? `<div class="tbl-note">${b.note}</div>` : ''}</div>`;
      }
      case 'figure':
        return `<figure class="blk figure" data-full="${b.img}" data-cap="${(b.caption || '').replace(/"/g, '&quot;')}"><img loading="lazy" src="${b.img}" alt="${b.caption || ''}" onerror="this.closest('figure').style.display='none'"><figcaption>${b.caption || ''}</figcaption></figure>`;
      case 'quote':
        return `<blockquote class="blk def"><span>${b.html}</span>${b.cite ? `<footer style="margin-top:6px;color:var(--ink-3);font-size:14px">— ${b.cite}</footer>` : ''}</blockquote>`;
      default: return '';
    }
  }

  /* ---------------- Notes (linear, in order) ---------------- */
  function renderNotes() {
    const totalSections = C.parts.reduce((a, p) => a + p.sections.length, 0);
    const totalCards = C.parts.reduce((a, p) => a + p.sections.reduce((x, s) => x + (s.flashcards ? s.flashcards.length : 0), 0), 0);
    const vivaCount = (C.viva || []).reduce((a, g) => a + (g.items ? g.items.length : 0), 0);

    let html = `
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-card glass">
          <div class="hero-media"><img src="${C.meta.hero}" alt="" onerror="this.style.display='none'"></div>
          <div class="hero-body">
            <span class="hero-tag">✦ Technical · Core Competency</span>
            <h1>${C.meta.titleHTML || C.meta.title}</h1>
            <p class="lead">${C.meta.lead || C.meta.subtitle}</p>
            <div class="hero-stats">
              <div class="hstat"><b>${C.parts.length}</b><span>Parts</span></div>
              <div class="hstat"><b>${totalSections}</b><span>Topics</span></div>
              <div class="hstat"><b>${totalCards}</b><span>Cards</span></div>
              <div class="hstat"><b>${C.quiz.length}</b><span>Quiz</span></div>
              <div class="hstat"><b>${vivaCount || '—'}</b><span>Viva Qs</span></div>
            </div>
            <div class="hero-meta"><span><b>Course:</b> ${C.meta.author}</span></div>
            <div class="hero-cta">
              <a class="btn primary" href="#${C.parts[0] ? C.parts[0].id : 'top'}">Start learning ↓</a>
              <button class="btn" data-goview="mindmap">🧠 Mind maps</button>
              <button class="btn" data-goview="viva">🎤 Viva Q&amp;A</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    C.parts.forEach(p => {
      html += `
      <div class="part" id="${p.id}">
        <div class="part-head glass reveal">
          <div class="part-kicker" style="color:${p.color}"><span class="pk-dot" style="background:${p.color}">${p.num}</span> Part ${p.num}</div>
          <h2>${p.title}</h2>
          <p class="part-summary">${p.summary}</p>
          <div class="part-actions">
            <span class="chip">${p.tag}</span>
            <span class="chip">${p.sections.length} topics</span>
            ${p.pdf ? `<a class="chip" href="${p.pdf}" target="_blank" rel="noopener">⬇ Source PDF</a>` : ''}
          </div>
        </div>`;

      p.sections.forEach(s => {
        const banner = s.img
          ? `<div class="sec-banner" data-full="${s.img}" data-cap="${s.title}"><img loading="lazy" src="${s.img}" alt="${s.title}" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<div class=noimg>${s.icon || '📄'}</div>')"></div>`
          : '';
        const tags = (s.tags || []).map(t => `<span class="tg">${t}</span>`).join('');
        const hasVideo = !window.VIDEO_MANIFEST || window.VIDEO_MANIFEST[s.id];
        const video = hasVideo ? `<div class="blk blk-video"><video controls preload="none" playsinline poster="${s.img || ''}" src="assets/video/${s.id}.mp4" onerror="this.closest('.blk-video').style.display='none'"></video></div>` : '';
        const blocks = s.blocks.map(renderBlock).join('');
        let flash = '';
        if (s.flashcards && s.flashcards.length) {
          flash = `<div class="sec-flash"><div class="blk-title">Quick recall · ${s.flashcards.length} cards</div>${s.flashcards.map(f => `<details class="qa"><summary>${f.q}</summary><div class="qa-a">${f.a}</div></details>`).join('')}</div>`;
        }
        html += `
        <article class="section" id="${s.id}" data-part="${p.id}">
          <div class="sec-card glass reveal">
            ${banner}
            <div class="sec-head">
              <div class="sec-eyebrow"><span class="sec-icon">${s.icon || '📄'}</span> Part ${p.num}<span class="mins">⏱ ${s.mins || 6} min</span></div>
              <h3>${s.title}</h3>
              <p class="sec-summary">${s.summary}</p>
              <div class="sec-tags">${tags}</div>
            </div>
            <div class="sec-body">${video}${blocks}${flash}</div>
          </div>
        </article>`;
      });
      html += `</div>`;
    });

    html += `<footer class="site-foot glass"><p><strong>${C.meta.title}</strong> — RICS APC interactive study notes.</p><p style="margin-top:6px">Study aid only · always refer to your specific contract &amp; governing law. Clause numbers follow FIDIC 1999 Red Book unless stated.</p></footer>`;
    $('#view-notes').innerHTML = html;
  }

  /* ---------------- Floating Contents (TOC) ---------------- */
  function renderTOC() {
    let html = `<input id="tocFilter" type="search" placeholder="Filter topics…" style="width:100%;margin:10px 0;padding:10px 12px;border-radius:12px;background:var(--glass-2);border:1px solid var(--edge);color:var(--ink);font-family:var(--font-ui);font-size:15px" />`;
    C.parts.forEach(p => {
      html += `<div class="toc-part"><b><span class="n" style="background:${p.color}">${p.num}</span> ${p.title}</b>` +
        p.sections.map(s => `<a class="toc-link" href="#${s.id}" data-sec="${s.id}">${s.icon || '·'} ${s.title}</a>`).join('') + `</div>`;
    });
    $('#tocList').innerHTML = html;
    $$('#tocList .toc-link').forEach(a => a.addEventListener('click', () => { switchView('notes'); closeTOC(); }));
    $('#tocFilter').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      $$('#tocList .toc-part').forEach(part => {
        let any = false;
        $$('.toc-link', part).forEach(l => { const m = l.textContent.toLowerCase().includes(q); l.style.display = m ? '' : 'none'; if (m) any = true; });
        part.style.display = any ? '' : 'none';
      });
    });
  }
  function openTOC() { $('#tocModal').classList.add('open'); $('#tocModal').setAttribute('aria-hidden', 'false'); }
  function closeTOC() { $('#tocModal').classList.remove('open'); $('#tocModal').setAttribute('aria-hidden', 'true'); }
  $('#tocFab').addEventListener('click', openTOC);
  $$('[data-toc-close]').forEach(el => el.addEventListener('click', closeTOC));

  /* ---------------- View switching ---------------- */
  let mmReady = false, vivaReady = false;
  function switchView(view) {
    $$('.tab').forEach(t => t.classList.toggle('is-active', t.dataset.view === view));
    $$('.view').forEach(v => v.classList.remove('is-active'));
    const el = $('#view-' + view); if (el) el.classList.add('is-active');
    if (view === 'mindmap') initMindmap();
    if (view === 'viva') initViva();
    window.scrollTo({ top: 0 });
  }
  $('#tabs').addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) switchView(t.dataset.view); });
  document.addEventListener('click', e => { const g = e.target.closest('[data-goview]'); if (g) switchView(g.dataset.goview); });

  /* ---------------- Scroll spy + progress ---------------- */
  function setupScrollSpy() {
    const links = new Map($$('#tocList .toc-link').map(a => [a.dataset.sec, a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const l = links.get(en.target.id);
          if (l) { l.classList.add('active'); const part = en.target.dataset.part; const pnum = (C.parts.find(p => p.id === part) || {}).num; if (pnum) $('#tocFab').textContent = '✎ Part ' + pnum; }
        }
      });
    }, { rootMargin: '-12% 0px -75% 0px', threshold: 0 });
    $$('.section').forEach(s => io.observe(s));
  }
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? h.scrollTop / max : 0;
    $('#progressBar').style.width = (pct * 100) + '%';
    $('#readpct').textContent = Math.round(pct * 100) + '%';
    $('#toTop').classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- Reveal ---------------- */
  function setupReveal() {
    const io = new IntersectionObserver(entries => { entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  /* ---------------- Theme ---------------- */
  function setupTheme() {
    const saved = localStorage.getItem('cpa-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    const upd = () => { $('#themeBtn').textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'; };
    upd();
    $('#themeBtn').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next); localStorage.setItem('cpa-theme', next); upd();
    });
  }

  /* ---------------- Flashcards ---------------- */
  function setupFlashcards() {
    const decks = { all: [] };
    C.parts.forEach(p => {
      decks[p.id] = [];
      p.sections.forEach(s => (s.flashcards || []).forEach(f => { const c = { q: f.q, a: f.a, part: 'Part ' + p.num + ' · ' + s.title }; decks.all.push(c); decks[p.id].push(c); }));
    });
    let deck = 'all', i = 0;
    $('#view-flashcards').innerHTML = `<div class="fc-shell">
      <div class="fc-toolbar">
        <select class="fc-select" id="fcDeck"><option value="all">All parts (${decks.all.length})</option>${C.parts.map(p => `<option value="${p.id}">Part ${p.num}: ${p.title} (${decks[p.id].length})</option>`).join('')}</select>
        <button class="btn" id="fcShuffle">🔀 Shuffle</button><span class="fc-counter" id="fcCounter"></span>
      </div>
      <div class="flashcard" id="flashcard"><div class="fc-inner">
        <div class="fc-face fc-front"><div class="fc-kicker" id="fcPart"></div><div class="fc-q" id="fcQ"></div><div class="fc-hint">Tap to reveal</div></div>
        <div class="fc-face fc-back"><div class="fc-kicker">Answer</div><div class="fc-a" id="fcA"></div><div class="fc-hint">Tap to flip back</div></div>
      </div></div>
      <div class="fc-nav"><button class="btn" id="fcPrev">← Prev</button><button class="btn primary" id="fcNext">Next →</button></div>
      <div class="fc-dots" id="fcDots"></div></div>`;
    const card = $('#flashcard');
    function show() {
      const d = decks[deck]; if (!d.length) return; i = (i + d.length) % d.length; card.classList.remove('flipped');
      $('#fcPart').textContent = d[i].part; $('#fcQ').innerHTML = d[i].q; $('#fcA').innerHTML = d[i].a; $('#fcCounter').textContent = `${i + 1} / ${d.length}`;
      $('#fcDots').innerHTML = d.map((_, k) => `<span class="fc-dot ${k === i ? 'on' : ''}" data-k="${k}"></span>`).join('');
    }
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    $('#fcNext').addEventListener('click', () => { i++; show(); });
    $('#fcPrev').addEventListener('click', () => { i--; show(); });
    $('#fcDeck').addEventListener('change', e => { deck = e.target.value; i = 0; show(); });
    $('#fcShuffle').addEventListener('click', () => { const d = decks[deck]; for (let k = d.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1));[d[k], d[j]] = [d[j], d[k]]; } i = 0; show(); });
    $('#fcDots').addEventListener('click', e => { const dot = e.target.closest('.fc-dot'); if (dot) { i = +dot.dataset.k; show(); } });
    if (window.__fcKeyHandler) document.removeEventListener('keydown', window.__fcKeyHandler);
    window.__fcKeyHandler = e => { if (!$('#view-flashcards').classList.contains('is-active')) return; if (e.key === 'ArrowRight') { i++; show(); } if (e.key === 'ArrowLeft') { i--; show(); } if (e.key === ' ') { e.preventDefault(); card.classList.toggle('flipped'); } };
    document.addEventListener('keydown', window.__fcKeyHandler);
    show();
  }

  /* ---------------- Quiz ---------------- */
  function setupQuiz() {
    const el = $('#view-quiz');
    let pool = [], idx = 0, score = 0, answered = false, filter = 'all';
    function build() { pool = (filter === 'all' ? C.quiz : C.quiz.filter(q => 'part' + q.part === filter)).slice(); for (let k = pool.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1));[pool[k], pool[j]] = [pool[j], pool[k]]; } idx = 0; score = 0; }
    function intro() {
      el.innerHTML = `<div class="quiz-shell"><div class="quiz-intro glass">
        <h2>Test yourself</h2><p>Multiple-choice questions across all parts, with instant feedback &amp; explanations.</p>
        <div class="qfilter" id="qfilter"><button class="qf on" data-f="all">All (${C.quiz.length})</button>${C.parts.map(p => { const n = C.quiz.filter(q => q.part === p.num).length; return n ? `<button class="qf" data-f="part${p.num}">Part ${p.num} (${n})</button>` : ''; }).join('')}</div>
        <button class="btn primary" id="qStart">Start quiz →</button></div></div>`;
      $('#qfilter').addEventListener('click', e => { const b = e.target.closest('.qf'); if (!b) return; filter = b.dataset.f; $$('.qf').forEach(x => x.classList.toggle('on', x === b)); });
      $('#qStart').addEventListener('click', () => { build(); question(); });
    }
    function question() {
      if (idx >= pool.length) return results();
      answered = false; const q = pool[idx];
      el.innerHTML = `<div class="quiz-shell">
        <div class="q-progress"><i style="width:${(idx / pool.length) * 100}%"></i></div>
        <div class="qcard glass"><div class="qcount">Question ${idx + 1} of ${pool.length} · Part ${q.part}</div>
          <div class="qtext">${q.q}</div>
          <div class="qopts" id="qopts">${q.options.map((o, k) => `<button class="qopt" data-k="${k}"><span class="qletter">${'ABCD'[k]}</span><span>${o}</span></button>`).join('')}</div>
          <div class="qexplain" id="qexplain"></div>
          <div class="qfoot"><span class="score">Score: ${score}/${idx}</span><button class="btn primary" id="qnext" style="display:none">Next →</button></div></div></div>`;
      $('#qopts').addEventListener('click', e => {
        const opt = e.target.closest('.qopt'); if (!opt || answered) return; answered = true;
        const k = +opt.dataset.k, correct = q.answer;
        $$('.qopt').forEach(o => { o.disabled = true; if (+o.dataset.k === correct) o.classList.add('correct'); });
        if (k !== correct) opt.classList.add('wrong'); else score++;
        const ex = $('#qexplain'); ex.innerHTML = `<b>${k === correct ? '✅ Correct.' : '❌ Not quite.'}</b> ${q.why}`; ex.classList.add('show');
        $('#qnext').style.display = ''; $('.score').textContent = `Score: ${score}/${idx + 1}`;
      });
      $('#qnext').addEventListener('click', () => { idx++; question(); });
    }
    function results() {
      const pct = Math.round((score / pool.length) * 100), circ = 2 * Math.PI * 60;
      const msg = pct >= 80 ? 'Excellent — APC-ready!' : pct >= 60 ? 'Good — a little more revision.' : 'Keep going — review & retry.';
      el.innerHTML = `<div class="quiz-shell"><div class="qcard glass quiz-result">
        <svg class="ring" viewBox="0 0 150 150"><circle cx="75" cy="75" r="60" fill="none" stroke="var(--edge-2)" stroke-width="12"/><circle cx="75" cy="75" r="60" fill="none" stroke="var(--amber)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - score / pool.length)}" transform="rotate(-90 75 75)"/><text x="75" y="70" text-anchor="middle" font-size="34" font-weight="800" fill="var(--ink)" font-family="var(--font-display)">${pct}%</text><text x="75" y="95" text-anchor="middle" font-size="13" fill="var(--ink-3)">${score}/${pool.length}</text></svg>
        <h2>${msg}</h2><p>You scored ${score} out of ${pool.length}.</p>
        <div class="hero-cta" style="justify-content:center"><button class="btn primary" id="qRetry">↻ Try again</button><button class="btn" data-goview="notes">📖 Notes</button></div></div></div>`;
      $('#qRetry').addEventListener('click', intro);
    }
    intro();
  }

  /* ---------------- Viva Q&A (with related notes + pictures) ---------------- */
  // Build section index once
  let SEC_INDEX = null;
  function secIndex() {
    if (SEC_INDEX) return SEC_INDEX;
    SEC_INDEX = {};
    C.parts.forEach(p => p.sections.forEach(s => { SEC_INDEX[s.id] = { p, s }; }));
    return SEC_INDEX;
  }
  // keyword -> section id (ordered; first match wins). Uses topic + question text.
  const REL_MAP = [
    [['retention bond'], 'retention'], [['retention'], 'retention'],
    [['partial possession', 'sectional'], 'sectional-completion'],
    [['acceleration'], 'acceleration'],
    [['concurrent'], 'concurrent-delay-delay-classification'],
    [['delay analysis', 'as-built', 'time impact'], 'delay-analysis-methods'],
    [['loss and expense', 'loss & expense', 'loss/expense', 'l&e', 'disruption', 'global claim'], 'loss-expense-claims'],
    [['novation'], 'novation'], [['assignment', 'collateral warranty'], 'privity'], [['privity'], 'privity'],
    [['liquidated', 'lad', 'l&ad', 'delay damages'], 'completion-lad'],
    [['time at large', 'prevention principle'], 'eot'],
    [['extension of time', 'eot'], 'eot'],
    [['prolongation', 'head office overhead', 'hudson', 'emden', 'eichleay', 'critical path', 'float', 'preliminaries'], 'prolongation'],
    [['on demand', 'parent company', 'performance bond', 'bond', 'security', 'guarantee', 'sblc'], 'performance-bond'],
    [['interim', 'ipc', 'stage payment', 'on-account', 'valuation', 'certificate'], 'interim-payment'],
    [['advance payment'], 'advance-payment'],
    [['fit for purpose', 'fitness', 'reasonable skill'], 'fitness-for-purpose-vs-reasonable-skill-care'],
    [['material off site', 'material on site', 'materials', 'vesting'], 'materials'],
    [['subrogation', 'cross liability'], 'cross-subrogation'],
    [['indemnity', 'joint', 'insurance premium'], 'indemnity-vs-insurance-joint-names'],
    [['insurance'], 'insurance'],
    [['loi', 'letter of intent', 'quantum meruit', 'comfort letter'], 'loi'],
    [['letter of acceptance', 'loa'], 'loa'],
    [['force majeure', 'frustration'], 'force-majeure'],
    [['set-off', 'set off', 'contra'], 'set-off-contra-charge-on-account-payment'],
    [['suspension'], 'suspension-termination'],
    [['determination', 'termination'], 'termination-determination'],
    [['latent', 'patent', 'decennial'], 'patent-vs-latent-defects-decennial-liability'],
    [['defect', 'dlp', 'rectification'], 'defects'],
    [['provisional sum'], 'provisional-sums'],
    [['nominated', 'named subcontractor', 'domestic', 'subcontractor', 'nomination'], 'subcontractors'],
    [['variation', 'change management', 'compensation event'], 'variations'],
    [['fluctuation'], 'fluctuations'],
    [['time-bar', 'time bar', 'condition precedent'], 'time-bar-clauses'],
    [['practical completion', 'substantial completion', 'taking over', 'toc', 'beneficial'], 'practical-substantial-completion'],
    [['dispute', 'adjudication', 'arbitration', 'mediation', 'dab', 'daab'], 'dispute-avoidance-resolution-ladder'],
    [['power of attorney', 'poa'], 'power-of-attorney-poa'],
    [['entire agreement', 'boilerplate', 'limitation clause', 'particular condition'], 'boilerplate-entire-agreement-particular-conditions'],
    [['contra proferentem', 'estoppel', 'without prejudice', 'doctrine', 'severability', 'repudiation'], 'key-legal-doctrines-glossary-terms'],
    [['standard form', 'bespoke', 'fidic', 'jct', 'nec', 'blue book', 'green book', 'yellow book', 'silver book'], 'standard-forms'],
    [['mandatory', 'general provision'], 'general-mandatory'],
    [['legislation', 'law of the land', 'sharia', 'court'], 'legislation'],
    [['priority of document', 'discrepancy', 'ambiguity'], 'priority-documents'],
    [['express', 'implied', 'incorporated', 'oral contract', 'agreement', 'offer', 'acceptance', 'consideration', 'binding'], 'what-is-contract'],
    [['engineer', 'role', 'responsib', 'obligation'], 'obligations-rights'],
    [['pricing', 'lump sum', 're-measure', 'milestone'], 'contract-pricing-types-stage-milestone-payments'],
    /* Procurement & Tendering subject (ids only exist when that subject is active) */
    [['prequalification', 'pre-qualification'], 'pt-prequal'],
    [['two-stage', 'two stage', 'pcsa', 'early contractor'], 'pt-strategies'],
    [['open tender', 'selective tender', 'negotiated tender', 'e-tender', 'tendering strateg'], 'pt-strategies'],
    [['invitation to tender', 'itt', 'tender document', 'two-envelope', 'two envelope'], 'pt-itt'],
    [['addend', 'site visit', 'tender quer', 'bulletin'], 'pt-tenderperiod'],
    [['normalis', 'technical evaluation', 'commercial evaluation', 'tender evaluation', 'tender opening', 'bid rigging', 'bid shopping'], 'pt-evaluation'],
    [['icv', 'in-country value', 'contract award', 'regret letter', 'award report'], 'pt-award'],
    [['ppp', 'pfi', 'boot', 'boom', 'swiss', 'partnering', 'alliance'], 'pt-relationship'],
    [['management contracting', 'construction management'], 'pt-management'],
    [['design & build', 'design and build', 'd&b', 'turnkey', 'epc', 'novated'], 'pt-db'],
    [['traditional', 'accelerated', 'design-bid-build'], 'pt-traditional'],
    [['gmp', 'target cost', 'framework', 'call-off', 'call off', 'serial contract', 'term contract', 'cost reimburs', 'remeasure'], 'pt-types'],
    [['route', 'procurement'], 'pt-competency'],
    [['tender'], 'pt-tendering'],
  ];
  function findRelated(it) {
    const hay = ((it.topic || '') + ' ' + it.q).toLowerCase();
    for (const [keys, id] of REL_MAP) { if (keys.some(k => hay.includes(k))) { if (secIndex()[id]) return id; } }
    return null;
  }
  function relatedHTML(id) {
    const rec = secIndex()[id]; if (!rec) return '';
    const { p, s } = rec;
    const img = s.img ? `<figure class="viva-relimg" data-full="${s.img}" data-cap="${s.title}"><img loading="lazy" src="${s.img}" alt="${s.title}" onerror="this.closest('figure').remove()"></figure>` : '';
    const notes = s.blocks.map(renderBlock).join('');
    return `<div class="viva-rel">
      <div class="viva-rel-head">📖 Complete notes · <b>${s.title}</b> <span class="vtag">Part ${p.num}</span>
        <button class="btn viva-open" data-sec="${s.id}" style="margin-left:auto;padding:6px 14px;font-size:14px">Open in Notes →</button></div>
      ${img}
      <p class="viva-relsum">${s.summary || ''}</p>
      ${notes}</div>`;
  }
  function initViva() {
    if (vivaReady) return; vivaReady = true;
    const el = $('#view-viva');
    const groups = C.viva || [];
    const total = groups.reduce((a, g) => a + (g.items ? g.items.length : 0), 0);
    if (!total) { el.innerHTML = `<div class="viva-shell"><div class="viva-head glass"><h2>🎤 Viva Q&amp;A</h2><p>The examiner-style question bank is being prepared.</p></div></div>`; return; }
    el.innerHTML = `<div class="viva-shell">
      <div class="viva-head glass"><h2>🎤 Viva Q&amp;A</h2><p>Real RICS/AIQS APC assessor-style questions. Tap a question to reveal the model answer, the topic's picture and the complete related notes. <span class="viva-count">${total} questions</span></p>
        <div class="viva-tools"><input id="vivaSearch" type="search" placeholder="Search questions & answers…"></div>
      </div>
      <div id="vivaBody"></div></div>`;
    const body = $('#vivaBody');
    function draw(q) {
      q = (q || '').trim().toLowerCase();
      let out = '';
      groups.forEach(g => {
        const items = (g.items || []).filter(it => !q || (it.q + ' ' + it.a + ' ' + (it.topic || '')).toLowerCase().includes(q));
        if (!items.length) return;
        out += `<div class="viva-group"><h3>${g.title}</h3>` + items.map((it, i) => {
          const rel = findRelated(it);
          return `<details class="viva-q" ${rel ? `data-rel="${rel}"` : ''}><summary><span class="qn">${i + 1}</span><span>${it.q}</span>${it.topic ? `<span class="vtag">${it.topic}</span>` : ''}</summary>` +
            `<div class="va"><div class="va-answer"><span class="va-label">Model answer</span>${it.a}</div><div class="va-rel-slot"></div></div></details>`;
        }).join('') + `</div>`;
      });
      body.innerHTML = out || `<div class="sr-empty">No questions match “${q}”.</div>`;
    }
    // Lazy-inject related notes when a question opens (toggle captured on parent)
    body.addEventListener('toggle', e => {
      const d = e.target; if (!(d instanceof HTMLElement) || !d.classList.contains('viva-q') || !d.open) return;
      const slot = $('.va-rel-slot', d); if (!slot || slot.dataset.done) return;
      slot.dataset.done = '1';
      const rel = d.dataset.rel; if (rel) slot.innerHTML = relatedHTML(rel);
    }, true);
    body.addEventListener('click', e => {
      const o = e.target.closest('.viva-open'); if (o) { const sec = o.dataset.sec; switchView('notes'); const el2 = document.getElementById(sec); if (el2) setTimeout(() => el2.scrollIntoView({ behavior: 'smooth' }), 60); }
    });
    $('#vivaSearch').addEventListener('input', e => draw(e.target.value));
    draw('');
  }

  /* ---------------- Glossary ---------------- */
  function setupGlossary() {
    const el = $('#view-glossary');
    const terms = C.glossary.slice().sort((a, b) => a.term.localeCompare(b.term));
    el.innerHTML = `<div class="gloss-shell"><div class="mm-head" style="margin-bottom:12px"><h2>📚 Glossary</h2><p>${terms.length} key terms — search or scan.</p></div>
      <div class="gloss-tools"><input id="glossSearch" type="search" placeholder="Search terms & definitions…"></div>
      <div class="gloss-grid" id="glossGrid"></div></div>`;
    const grid = $('#glossGrid');
    function draw(q) {
      q = (q || '').trim().toLowerCase();
      const list = terms.filter(t => !q || (t.term + ' ' + t.def + ' ' + (t.tags || []).join(' ')).toLowerCase().includes(q));
      grid.innerHTML = list.length ? list.map(t => `<div class="gcard"><h4>${t.term}</h4><p>${t.def}</p><div class="gtags">${(t.tags || []).map(x => `<span>${x}</span>`).join('')}</div></div>`).join('') : `<div class="sr-empty">No terms match “${q}”.</div>`;
    }
    $('#glossSearch').addEventListener('input', e => draw(e.target.value));
    draw('');
  }

  /* ---------------- Lightbox ---------------- */
  function setupLightbox() {
    const lb = $('#lightbox');
    document.addEventListener('click', e => { const t = e.target.closest('[data-full]'); if (!t) return; $('#lbImg').src = t.dataset.full; $('#lbCap').textContent = t.dataset.cap || ''; lb.hidden = false; });
    lb.addEventListener('click', e => { if (e.target.closest('.lb-close') || e.target === lb) lb.hidden = true; });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { lb.hidden = true; closeTOC(); } });
  }

  /* =================================================================
     MIND MAP — radial, collapsible, pan + zoom
     ================================================================= */
  const MM = { map: 'course', collapsed: new Set(), scale: 1, tx: 0, ty: 0, dragging: false };
  const NS = 'http://www.w3.org/2000/svg';
  function buildCourseTree() {
    return { _id: 'root', label: C.meta.title, color: '#2f6df0', children: C.parts.map((p, i) => ({ _id: 'p' + i, label: 'P' + p.num + '. ' + p.title.split(',')[0], color: p.color, children: p.sections.map((s, j) => ({ _id: 'p' + i + 's' + j, label: s.title, color: p.color })) })) };
  }
  function buildPartTree(p) { return { _id: 'root', label: 'Part ' + p.num + ': ' + p.title.split(',')[0], color: p.color, children: p.sections.map((s, j) => ({ _id: 's' + j, label: s.title, color: p.color, children: (s.tags || []).map((t, k) => ({ _id: 's' + j + 't' + k, label: t, color: p.color })) })) }; }
  function currentTree() { if (MM.map === 'course') return buildCourseTree(); return buildPartTree(C.parts[+MM.map.slice(1)]); }
  function wrapLabel(str, max) { const words = String(str).split(/\s+/); const lines = []; let cur = ''; words.forEach(w => { if ((cur + ' ' + w).trim().length <= max) cur = (cur + ' ' + w).trim(); else { if (cur) lines.push(cur); cur = w; } }); if (cur) lines.push(cur); return lines.slice(0, 3); }
  function layout(tree) {
    const nodes = [], links = [], R1 = 255, R2 = 470;
    nodes.push({ id: 'root', x: 0, y: 0, label: tree.label, kind: 'root', color: tree.color });
    const kids = tree.children;
    kids.forEach(b => { b._open = b.children && b.children.length && !MM.collapsed.has(b._id); b._w = Math.max(1, b._open ? b.children.length : 1); });
    const total = kids.reduce((a, b) => a + b._w, 0); let ang = -Math.PI / 2;
    kids.forEach(b => {
      const span = 2 * Math.PI * b._w / total, center = ang + span / 2, bx = Math.cos(center) * R1, by = Math.sin(center) * R1;
      nodes.push({ id: b._id, x: bx, y: by, label: b.label, kind: 'branch', color: b.color, has: b.children && b.children.length, open: b._open });
      links.push({ x1: 0, y1: 0, x2: bx, y2: by, color: b.color });
      if (b._open) { const L = b.children.length, pad = Math.min(span * 0.14, 0.14), a0 = ang + pad, a1 = ang + span - pad; b.children.forEach((l, j) => { const t = L === 1 ? (a0 + a1) / 2 : a0 + (a1 - a0) * j / (L - 1), rr = R2 + (j % 2) * 82, lx = Math.cos(t) * rr, ly = Math.sin(t) * rr; nodes.push({ id: l._id, x: lx, y: ly, label: l.label, kind: 'leaf', color: b.color }); links.push({ x1: bx, y1: by, x2: lx, y2: ly, color: b.color, thin: true }); }); }
      ang += span;
    });
    return { nodes, links };
  }
  function drawMindmap() {
    const stage = $('#mmStage'); if (!stage) return;
    const { nodes, links } = layout(currentTree());
    const W = stage.clientWidth || 900, H = stage.clientHeight || 600; stage.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let inner = '<g id="mmRoot">';
    links.forEach(l => { inner += `<path class="mm-link" d="M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}" stroke="${l.color}" style="opacity:${l.thin ? .35 : .6};stroke-width:${l.thin ? 1.6 : 2.6}"/>`; });
    nodes.forEach(n => {
      const max = n.kind === 'root' ? 20 : n.kind === 'branch' ? 17 : 16, lines = wrapLabel(n.label, max), longest = Math.max(...lines.map(s => s.length));
      const cw = n.kind === 'root' ? 10 : n.kind === 'branch' ? 8.2 : 7.6, w = clamp(longest * cw + 26, 60, 260), lh = n.kind === 'root' ? 21 : 17, h = lines.length * lh + (n.kind === 'root' ? 24 : 16);
      const x = n.x - w / 2, y = n.y - h / 2;
      let fill, stroke, tcol, fs;
      if (n.kind === 'root') { fill = 'url(#mmGrad)'; stroke = 'none'; tcol = '#fff'; fs = 17; }
      else if (n.kind === 'branch') { fill = n.color; stroke = 'rgba(255,255,255,.28)'; tcol = '#fff'; fs = 14.5; }
      else { fill = 'var(--glass-2)'; stroke = n.color; tcol = 'var(--ink)'; fs = 13.5; }
      const tspans = lines.map((ln, k) => `<tspan x="${n.x}" dy="${k === 0 ? -((lines.length - 1) * lh) / 2 : lh}">${ln.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</tspan>`).join('');
      const badge = (n.kind === 'branch' && n.has) ? `<circle cx="${x + w - 2}" cy="${y + 2}" r="10" fill="${n.open ? 'var(--amber)' : 'var(--glass-strong)'}" stroke="${n.color}" stroke-width="1.5"/><text x="${x + w - 2}" y="${y + 6}" text-anchor="middle" font-size="14" font-weight="800" fill="${n.open ? '#20140a' : 'var(--ink-2)'}">${n.open ? '–' : '+'}</text>` : '';
      inner += `<g class="mm-node" data-id="${n.id}" data-kind="${n.kind}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${n.kind === 'root' ? 15 : 12}" fill="${fill}" stroke="${stroke}" stroke-width="2"/><text x="${n.x}" y="${n.y + 5}" text-anchor="middle" fill="${tcol}" font-weight="700" font-size="${fs}">${tspans}</text>${badge}</g>`;
    });
    inner += '</g>';
    stage.innerHTML = `<defs><linearGradient id="mmGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f6df0"/><stop offset="1" stop-color="#9b51e0"/></linearGradient></defs>` + inner;
    const pad = 90, minX = Math.min(...nodes.map(n => n.x)) - 130, maxX = Math.max(...nodes.map(n => n.x)) + 130, minY = Math.min(...nodes.map(n => n.y)) - 60, maxY = Math.max(...nodes.map(n => n.y)) + 60;
    MM.scale = clamp(Math.min((W - pad) / (maxX - minX), (H - pad) / (maxY - minY)), 0.26, 1.3);
    MM.tx = W / 2 - ((minX + maxX) / 2) * MM.scale; MM.ty = H / 2 - ((minY + maxY) / 2) * MM.scale; applyMM();
    $$('.mm-node[data-kind="branch"]', stage).forEach(g => g.addEventListener('click', () => { const id = g.dataset.id; if (MM.collapsed.has(id)) MM.collapsed.delete(id); else MM.collapsed.add(id); drawMindmap(); }));
  }
  function applyMM() { const g = $('#mmRoot'); if (g) g.setAttribute('transform', `translate(${MM.tx} ${MM.ty}) scale(${MM.scale})`); }
  function initMindmap() {
    const el = $('#view-mindmap');
    if (!mmReady) {
      el.innerHTML = `<div class="mm-shell"><div class="mm-head"><h2>🧠 Mind Maps</h2>
        <div class="mm-picker" id="mmPicker"><button class="mm-pick on" data-map="course" style="background:#2f6df0">Whole course</button>${C.parts.map((p, i) => `<button class="mm-pick" data-map="p${i}" style="--c:${p.color}">Part ${p.num}</button>`).join('')}</div>
        <p>Click a coloured branch to fold/unfold. Drag to pan, scroll to zoom.</p></div>
        <div class="mm-stage-wrap"><svg class="mm-stage" id="mmStage" xmlns="${NS}"></svg>
          <div class="mm-hint">Drag · Scroll to zoom · Click branch to fold</div>
          <div class="mm-controls"><button id="mmIn">＋</button><button id="mmOut">－</button><button id="mmFit" title="Fit">⤢</button><button id="mmExpand" title="Expand all">⊕</button><button id="mmCollapse" title="Collapse all">⊖</button></div>
          <div class="mm-legend"><b><span class="dot" style="background:#2f6df0"></span>Central</b><b><span class="dot" style="background:var(--amber)"></span>Topic</b><b><span class="dot" style="background:transparent;border:2px solid var(--ink-3)"></span>Concept</b></div>
        </div></div>`;
      wireMindmap(); mmReady = true;
    }
    drawMindmap();
  }
  function wireMindmap() {
    const stage = $('#mmStage');
    $('#mmPicker').addEventListener('click', e => { const b = e.target.closest('.mm-pick'); if (!b) return; MM.map = b.dataset.map; MM.collapsed = new Set(); $$('.mm-pick').forEach(x => { x.classList.toggle('on', x === b); if (x !== b && x.dataset.map !== 'course') x.style.background = ''; }); if (b.dataset.map !== 'course') b.style.background = b.style.getPropertyValue('--c'); drawMindmap(); });
    const zoom = f => { MM.scale = clamp(MM.scale * f, 0.2, 2.4); applyMM(); };
    $('#mmIn').addEventListener('click', () => zoom(1.2)); $('#mmOut').addEventListener('click', () => zoom(1 / 1.2)); $('#mmFit').addEventListener('click', drawMindmap);
    $('#mmExpand').addEventListener('click', () => { MM.collapsed = new Set(); drawMindmap(); });
    $('#mmCollapse').addEventListener('click', () => { MM.collapsed = new Set(currentTree().children.filter(c => c.children && c.children.length).map(c => c._id)); drawMindmap(); });
    let sx, sy, ox, oy;
    stage.addEventListener('pointerdown', e => { MM.dragging = true; stage.classList.add('grabbing'); sx = e.clientX; sy = e.clientY; ox = MM.tx; oy = MM.ty; stage.setPointerCapture(e.pointerId); });
    stage.addEventListener('pointermove', e => { if (!MM.dragging) return; MM.tx = ox + (e.clientX - sx); MM.ty = oy + (e.clientY - sy); applyMM(); });
    stage.addEventListener('pointerup', () => { MM.dragging = false; stage.classList.remove('grabbing'); });
    stage.addEventListener('pointercancel', () => { MM.dragging = false; stage.classList.remove('grabbing'); });
    stage.addEventListener('wheel', e => { e.preventDefault(); const r = stage.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top, f = e.deltaY < 0 ? 1.12 : 1 / 1.12, ns = clamp(MM.scale * f, 0.2, 2.4); MM.tx = mx - (mx - MM.tx) * (ns / MM.scale); MM.ty = my - (my - MM.ty) * (ns / MM.scale); MM.scale = ns; applyMM(); }, { passive: false });
    window.addEventListener('resize', () => { if ($('#view-mindmap').classList.contains('is-active')) drawMindmap(); });
  }

  /* ---------------- Subject switching ---------------- */
  function renderSubjectUI() {
    $$('.subject-pill').forEach(b => b.classList.toggle('is-active', b.dataset.subject === activeSubject));
  }
  function renderAll() {
    renderNotes(); renderTOC(); setupScrollSpy(); setupReveal();
    setupFlashcards(); setupQuiz(); setupGlossary();
  }
  function switchSubject(id) {
    if (!SUBJECTS[id] || id === activeSubject) return;
    activeSubject = id; C = SUBJECTS[id];
    localStorage.setItem('apc-subject', id);
    SEC_INDEX = null; mmReady = false; vivaReady = false;
    MM.map = 'course'; MM.collapsed = new Set();
    $('#view-mindmap').innerHTML = ''; $('#view-viva').innerHTML = '';
    $('#tocFab').textContent = '✎ Contents';
    renderSubjectUI(); renderAll(); switchView('notes');
  }
  $('#subjectbar').addEventListener('click', e => { const b = e.target.closest('.subject-pill'); if (b) switchSubject(b.dataset.subject); });

  /* ---------------- Boot ---------------- */
  function boot() {
    renderSubjectUI();
    renderNotes();
    renderTOC();
    setupScrollSpy();
    setupReveal();
    setupTheme();
    setupFlashcards();
    setupQuiz();
    setupGlossary();
    setupLightbox();
    onScroll();
    if (location.hash) { const el = document.querySelector(location.hash); if (el) setTimeout(() => el.scrollIntoView(), 60); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
