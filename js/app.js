/* =====================================================================
   Contract Practice & Administration — app logic
   Renders all views from window.COURSE and wires interactivity.
   ===================================================================== */
(function () {
  'use strict';
  const C = window.COURSE;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const shade = (part) => part.color;

  /* ---------------- Block renderer ---------------- */
  function renderBlock(b) {
    switch (b.t) {
      case 'lead':
        return `<p class="blk blk-lead">${b.html}</p>`;
      case 'def':
        return `<div class="blk def"><span class="term">${b.term}</span><span>${b.html}</span></div>`;
      case 'points': {
        const items = b.items.map(it => typeof it === 'string'
          ? `<li>${it}</li>`
          : `<li>${it.b ? `<b>${it.b}</b> ` : ''}${it.t || ''}</li>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<ul class="points${b.dense ? ' dense' : ''}">${items}</ul></div>`;
      }
      case 'steps': {
        const items = b.items.map(it => typeof it === 'string'
          ? `<li>${it}</li>`
          : `<li>${it.b ? `<b>${it.b}</b>` : ''}${it.t || ''}</li>`).join('');
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
        const body = b.items
          ? `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`
          : (b.html || '');
        return `<div class="blk callout" data-kind="${b.kind}"><div class="co-ic">${ic}</div><div class="co-title">${b.title}</div><div class="co-body">${body}</div></div>`;
      }
      case 'flow': {
        const steps = b.steps.map(s => `<div class="flow-step">${s}</div>`).join('');
        return `<div class="blk">${b.title ? `<div class="blk-title">${b.title}</div>` : ''}<div class="flow">${steps}</div>${b.note ? `<div class="tbl-note">${b.note}</div>` : ''}</div>`;
      }
      case 'figure':
        return `<figure class="blk figure" data-full="${b.img}" data-cap="${(b.caption || '').replace(/"/g, '&quot;')}"><img loading="lazy" src="${b.img}" alt="${b.caption || ''}" onerror="this.closest('figure').style.display='none'"><figcaption>${b.caption || ''}</figcaption></figure>`;
      case 'stat': {
        const items = b.items.map(s => `<div class="stat"><b>${s.v}</b><span>${s.k}</span>${s.cap ? `<em>${s.cap}</em>` : ''}</div>`).join('');
        return `<div class="blk stat-row">${items}</div>`;
      }
      case 'quote':
        return `<blockquote class="blk def"><span>${b.html}</span>${b.cite ? `<footer style="margin-top:6px;color:var(--text-3);font-size:12.5px">— ${b.cite}</footer>` : ''}</blockquote>`;
      default:
        return '';
    }
  }

  /* ---------------- Notes view ---------------- */
  function renderNotes() {
    const totalSections = C.parts.reduce((a, p) => a + p.sections.length, 0);
    const totalCards = C.parts.reduce((a, p) => a + p.sections.reduce((x, s) => x + (s.flashcards ? s.flashcards.length : 0), 0), 0);
    let html = `
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-card">
          <div class="hero-media"><img src="${C.meta.hero}" alt="" onerror="this.style.display='none'"></div>
          <div class="hero-body">
            <span class="hero-tag">◆ Technical · Core Competency</span>
            <h1>Contract Practice <em>&amp;</em> Administration</h1>
            <p class="lead">${C.meta.subtitle}. Everything you need for the RICS &amp; AIQS APC — FIDIC, formation, securities, payments, insurance, EOT, claims, termination &amp; completion — with explainer media, mind maps, flashcards and quizzes.</p>
            <div class="hero-stats">
              <div class="hstat"><b>5</b><span>Parts</span></div>
              <div class="hstat"><b>${totalSections}</b><span>Topics</span></div>
              <div class="hstat"><b>${totalCards}</b><span>Flashcards</span></div>
              <div class="hstat"><b>${C.quiz.length}</b><span>Quiz Qs</span></div>
            </div>
            <div class="hero-meta"><span><b>Course:</b> ${C.meta.author}</span><span><b>Credential:</b> ${C.meta.credential}</span></div>
            <div class="hero-cta">
              <a class="btn primary" href="#part1">Start learning ↓</a>
              <button class="btn" data-goview="mindmap">🧠 Open mind maps</button>
              <button class="btn" data-goview="quiz">✅ Test yourself</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    C.parts.forEach(p => {
      html += `
      <div class="part" id="${p.id}">
        <div class="part-head reveal">
          <div class="part-kicker" style="color:${p.color}"><span class="pk-dot" style="background:${p.color}">${p.num}</span> Part ${p.num}</div>
          <h2>${p.title}</h2>
          <p class="part-summary">${p.summary}</p>
          <div class="part-actions">
            <span class="chip">${p.tag}</span>
            <span class="chip">${p.sections.length} topics</span>
            <a class="chip" href="${p.pdf}" target="_blank" rel="noopener">⬇ Source slides (PDF)</a>
          </div>
        </div>`;

      // Optional part explainer video (auto-hides if file missing)
      html += `<div class="sec-card reveal" style="margin-top:16px">
        <div class="sec-head"><div class="sec-eyebrow"><span class="sec-icon">🎬</span> Explainer video<span class="mins">Part ${p.num}</span></div><h3>Watch: ${p.title}</h3></div>
        <div class="sec-body"><div class="blk-video"><video controls preload="none" playsinline poster="${p.sections[0] ? p.sections[0].img : ''}" onerror="this.closest('.sec-card').style.display='none'"><source src="${p.video}" type="video/mp4"></video></div><div class="video-note">A short narrated animation summarising the key points of Part ${p.num}. (If it doesn't appear, the video is still rendering.)</div></div>
      </div>`;

      p.sections.forEach(s => {
        const banner = s.img
          ? `<div class="sec-banner" data-full="${s.img}" data-cap="${s.title}"><img loading="lazy" src="${s.img}" alt="${s.title}" onerror="this.style.display='none';this.parentElement.classList.add('failed');this.insertAdjacentHTML('afterend','<div class=noimg>${s.icon}</div>')"></div>`
          : '';
        const tags = (s.tags || []).map(t => `<span class="tg">${t}</span>`).join('');
        const blocks = s.blocks.map(renderBlock).join('');
        let flash = '';
        if (s.flashcards && s.flashcards.length) {
          flash = `<div class="sec-flash"><div class="blk-title">Quick recall · ${s.flashcards.length} cards</div>${s.flashcards.map((f, i) => `<details class="qa"><summary>${f.q}</summary><div class="qa-a">${f.a}</div></details>`).join('')}</div>`;
        }
        html += `
        <article class="section" id="${s.id}" data-part="${p.id}">
          <div class="sec-card reveal">
            ${banner}
            <div class="sec-head">
              <div class="sec-eyebrow"><span class="sec-icon">${s.icon}</span> Part ${p.num} · ${p.title.split(',')[0]}<span class="mins">⏱ ${s.mins} min</span></div>
              <h3>${s.title}</h3>
              <p class="sec-summary">${s.summary}</p>
              <div class="sec-tags">${tags}</div>
            </div>
            <div class="sec-body">${blocks}${flash}</div>
          </div>
        </article>`;
      });
      html += `</div>`;
    });

    html += `<footer class="site-foot"><p><strong>Contract Practice &amp; Administration</strong> — interactive study notes generated from the 5‑part APC coaching course by <strong>${C.meta.author.replace('Course by ', '')}</strong>.</p><p style="margin-top:6px">Study aid only · Always refer to your specific contract &amp; governing law. Clause numbers follow FIDIC 1999 Red Book unless stated.</p></footer>`;

    $('#view-notes').innerHTML = html;
    // inject minimal styles for QA details (kept here to avoid extra file)
  }

  /* ---------------- Sidebar nav ---------------- */
  function renderNav() {
    let html = '';
    C.parts.forEach(p => {
      html += `<div class="nav-part" data-part="${p.id}">
        <button class="nav-part-btn"><span class="nav-part-num" style="background:${p.color}">${p.num}</span><span>${p.title}</span><span class="chev">▾</span></button>
        <div class="nav-sub">${p.sections.map(s => `<a class="nav-link" href="#${s.id}" data-sec="${s.id}"><span class="ni">${s.icon}</span><span>${s.title}</span></a>`).join('')}</div>
      </div>`;
    });
    $('#nav').innerHTML = html;
    // set sub heights for animation
    $$('.nav-sub').forEach(sub => sub.style.height = sub.scrollHeight + 'px');

    $$('.nav-part-btn').forEach(btn => btn.addEventListener('click', () => {
      const part = btn.closest('.nav-part');
      const sub = $('.nav-sub', part);
      if (part.classList.contains('collapsed')) {
        part.classList.remove('collapsed'); sub.style.height = sub.scrollHeight + 'px';
      } else {
        part.classList.add('collapsed'); sub.style.height = '0px';
      }
    }));
    $$('.nav-link').forEach(a => a.addEventListener('click', () => {
      switchView('notes');
      if (window.innerWidth <= 860) closeSidebar();
    }));
  }

  /* ---------------- Views switching ---------------- */
  let mmReady = false;
  function switchView(view) {
    $$('.tab').forEach(t => t.classList.toggle('is-active', t.dataset.view === view));
    $$('.view').forEach(v => v.classList.remove('is-active'));
    $('#view-' + view).classList.add('is-active');
    if (view === 'mindmap') { initMindmap(); }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }
  $('#tabs').addEventListener('click', e => {
    const t = e.target.closest('.tab'); if (t) switchView(t.dataset.view);
  });
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-goview]'); if (g) switchView(g.dataset.goview);
  });

  /* ---------------- Scroll spy + progress ---------------- */
  function setupScrollSpy() {
    const links = new Map($$('.nav-link').map(a => [a.dataset.sec, a]));
    const sections = $$('.section');
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const l = links.get(en.target.id);
          if (l) {
            l.classList.add('active');
            // keep its part expanded + scroll into view within nav
            const part = l.closest('.nav-part');
            if (part && part.classList.contains('collapsed')) { part.classList.remove('collapsed'); $('.nav-sub', part).style.height = $('.nav-sub', part).scrollHeight + 'px'; }
            l.scrollIntoView({ block: 'nearest' });
          }
        }
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
  }

  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) : 0;
    $('#progressBar').style.width = (pct * 100) + '%';
    $('#readpct').textContent = Math.round(pct * 100) + '%';
    $('#toTop').classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- Reveal animation ---------------- */
  function setupReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  /* ---------------- Theme ---------------- */
  function setupTheme() {
    const saved = localStorage.getItem('cpa-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    updateThemeBtn();
    $('#themeBtn').addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cpa-theme', next);
      updateThemeBtn();
    });
  }
  function updateThemeBtn() {
    const cur = document.documentElement.getAttribute('data-theme');
    $('#themeBtn').textContent = cur === 'dark' ? '☀️' : '🌙';
  }

  /* ---------------- Sidebar (mobile) ---------------- */
  function openSidebar() { $('#sidebar').classList.add('open'); $('#scrim').classList.add('show'); }
  function closeSidebar() { $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('show'); }
  $('#menuBtn').addEventListener('click', openSidebar);
  $('#sidebarClose').addEventListener('click', closeSidebar);
  $('#scrim').addEventListener('click', closeSidebar);

  /* ---------------- Search ---------------- */
  function setupSearch() {
    const input = $('#search');
    const box = $('#searchResults');
    const index = [];
    C.parts.forEach(p => p.sections.forEach(s => {
      index.push({ type: 'Topic', label: s.title, sub: `Part ${p.num} · ${p.tag}`, hay: (s.title + ' ' + s.summary + ' ' + (s.tags || []).join(' ')).toLowerCase(), go: s.id, view: 'notes' });
    }));
    C.glossary.forEach(g => index.push({ type: 'Term', label: g.term, sub: g.def, hay: (g.term + ' ' + g.def + ' ' + (g.tags || []).join(' ')).toLowerCase(), view: 'glossary', term: g.term }));

    function run(q) {
      q = q.trim().toLowerCase();
      if (!q) { box.hidden = true; return; }
      const res = index.filter(i => i.hay.includes(q)).slice(0, 12);
      if (!res.length) { box.hidden = false; box.innerHTML = `<div class="sr-empty">No matches for “${q}”.</div>`; return; }
      const rx = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      box.hidden = false;
      box.innerHTML = res.map(r => `<a class="sr-item" data-view="${r.view}" data-go="${r.go || ''}" data-term="${r.term || ''}"><span class="sr-kind">${r.type}</span> ${r.label.replace(rx, '<mark>$1</mark>')}<div style="font-size:11.5px;color:var(--text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${(r.sub || '').replace(rx, '<mark>$1</mark>')}</div></a>`).join('');
    }
    input.addEventListener('input', () => run(input.value));
    box.addEventListener('click', e => {
      const it = e.target.closest('.sr-item'); if (!it) return;
      box.hidden = true; input.value = '';
      if (it.dataset.view === 'notes' && it.dataset.go) {
        switchView('notes');
        const el = document.getElementById(it.dataset.go);
        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
      } else if (it.dataset.view === 'glossary') {
        switchView('glossary');
        const gi = $('#glossSearch'); if (gi) { gi.value = it.dataset.term; gi.dispatchEvent(new Event('input')); }
      }
      if (window.innerWidth <= 860) closeSidebar();
    });
    document.addEventListener('keydown', e => {
      if (e.key === '/' && document.activeElement !== input && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }
      if (e.key === 'Escape') { box.hidden = true; input.blur(); }
    });
    document.addEventListener('click', e => { if (!e.target.closest('.search-box') && !e.target.closest('.search-results')) box.hidden = true; });
  }

  /* ---------------- Flashcards ---------------- */
  function setupFlashcards() {
    const decks = { all: [] };
    C.parts.forEach(p => {
      decks[p.id] = [];
      p.sections.forEach(s => (s.flashcards || []).forEach(f => {
        const card = { q: f.q, a: f.a, part: 'Part ' + p.num + ' · ' + s.title };
        decks.all.push(card); decks[p.id].push(card);
      }));
    });
    let deck = 'all', i = 0;
    const el = $('#view-flashcards');
    el.innerHTML = `<div class="fc-shell">
      <div class="fc-toolbar">
        <select class="fc-select" id="fcDeck">
          <option value="all">All parts (${decks.all.length} cards)</option>
          ${C.parts.map(p => `<option value="${p.id}">Part ${p.num}: ${p.title} (${decks[p.id].length})</option>`).join('')}
        </select>
        <button class="btn" id="fcShuffle">🔀 Shuffle</button>
        <span class="fc-counter" id="fcCounter"></span>
      </div>
      <div class="flashcard" id="flashcard">
        <div class="fc-inner">
          <div class="fc-face fc-front"><div class="fc-kicker" id="fcPart"></div><div class="fc-q" id="fcQ"></div><div class="fc-hint">Click to reveal answer</div></div>
          <div class="fc-face fc-back"><div class="fc-kicker">Answer</div><div class="fc-a" id="fcA"></div><div class="fc-hint">Click to flip back</div></div>
        </div>
      </div>
      <div class="fc-nav">
        <button class="btn" id="fcPrev">← Prev</button>
        <button class="btn primary" id="fcNext">Next →</button>
      </div>
      <div class="fc-dots" id="fcDots"></div>
    </div>`;

    const card = $('#flashcard');
    function show() {
      const d = decks[deck]; if (!d.length) return;
      i = (i + d.length) % d.length;
      card.classList.remove('flipped');
      $('#fcPart').textContent = d[i].part;
      $('#fcQ').innerHTML = d[i].q;
      $('#fcA').innerHTML = d[i].a;
      $('#fcCounter').textContent = `${i + 1} / ${d.length}`;
      $('#fcDots').innerHTML = d.map((_, k) => `<span class="fc-dot ${k === i ? 'on' : ''}" data-k="${k}"></span>`).join('');
    }
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    $('#fcNext').addEventListener('click', () => { i++; show(); });
    $('#fcPrev').addEventListener('click', () => { i--; show(); });
    $('#fcDeck').addEventListener('change', e => { deck = e.target.value; i = 0; show(); });
    $('#fcShuffle').addEventListener('click', () => { const d = decks[deck]; for (let k = d.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1));[d[k], d[j]] = [d[j], d[k]]; } i = 0; show(); });
    $('#fcDots').addEventListener('click', e => { const dot = e.target.closest('.fc-dot'); if (dot) { i = +dot.dataset.k; show(); } });
    document.addEventListener('keydown', e => {
      if (!$('#view-flashcards').classList.contains('is-active')) return;
      if (e.key === 'ArrowRight') { i++; show(); }
      if (e.key === 'ArrowLeft') { i--; show(); }
      if (e.key === ' ') { e.preventDefault(); card.classList.toggle('flipped'); }
    });
    show();
  }

  /* ---------------- Quiz ---------------- */
  function setupQuiz() {
    const el = $('#view-quiz');
    let pool = [], idx = 0, score = 0, answered = false, filter = 'all';
    function build() {
      pool = (filter === 'all' ? C.quiz : C.quiz.filter(q => 'part' + q.part === filter)).slice();
      for (let k = pool.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1));[pool[k], pool[j]] = [pool[j], pool[k]]; }
      idx = 0; score = 0; answered = false;
    }
    function intro() {
      el.innerHTML = `<div class="quiz-shell"><div class="quiz-intro">
        <h2>Test your knowledge</h2>
        <p>Answer multiple‑choice questions drawn from all five parts. Pick a scope, then get instant feedback with explanations.</p>
        <div class="qfilter" id="qfilter">
          <button class="qf on" data-f="all">All (${C.quiz.length})</button>
          ${C.parts.map(p => `<button class="qf" data-f="part${p.num}">Part ${p.num} (${C.quiz.filter(q => q.part === p.num).length})</button>`).join('')}
        </div>
        <button class="btn primary" id="qStart">Start quiz →</button>
      </div></div>`;
      $('#qfilter').addEventListener('click', e => { const b = e.target.closest('.qf'); if (!b) return; filter = b.dataset.f; $$('.qf').forEach(x => x.classList.toggle('on', x === b)); });
      $('#qStart').addEventListener('click', () => { build(); question(); });
    }
    function question() {
      if (idx >= pool.length) return results();
      answered = false;
      const q = pool[idx];
      el.innerHTML = `<div class="quiz-shell">
        <div class="q-progress"><i style="width:${(idx / pool.length) * 100}%"></i></div>
        <div class="qcard">
          <div class="qcount">Question ${idx + 1} of ${pool.length} · Part ${q.part}</div>
          <div class="qtext">${q.q}</div>
          <div class="qopts" id="qopts">${q.options.map((o, k) => `<button class="qopt" data-k="${k}"><span class="qletter">${'ABCD'[k]}</span><span>${o}</span></button>`).join('')}</div>
          <div class="qexplain" id="qexplain"></div>
          <div class="qfoot"><span class="score">Score: ${score}/${idx}</span><button class="btn primary" id="qnext" style="display:none">Next →</button></div>
        </div></div>`;
      $('#qopts').addEventListener('click', e => {
        const opt = e.target.closest('.qopt'); if (!opt || answered) return;
        answered = true;
        const k = +opt.dataset.k;
        const correct = q.answer;
        $$('.qopt').forEach(o => { o.disabled = true; if (+o.dataset.k === correct) o.classList.add('correct'); });
        if (k !== correct) opt.classList.add('wrong'); else score++;
        const ex = $('#qexplain'); ex.innerHTML = `<b>${k === correct ? '✅ Correct.' : '❌ Not quite.'}</b> ${q.why}`; ex.classList.add('show');
        $('#qnext').style.display = ''; $('.score').textContent = `Score: ${score}/${idx + 1}`;
      });
      $('#qnext').addEventListener('click', () => { idx++; question(); });
    }
    function results() {
      const pct = Math.round((score / pool.length) * 100);
      const msg = pct >= 80 ? 'Excellent — APC‑ready!' : pct >= 60 ? 'Good — a little more revision.' : 'Keep going — review the notes and retry.';
      const circ = 2 * Math.PI * 60;
      el.innerHTML = `<div class="quiz-shell"><div class="qcard quiz-result">
        <svg class="ring" viewBox="0 0 150 150"><circle cx="75" cy="75" r="60" fill="none" stroke="var(--line-2)" stroke-width="12"/><circle cx="75" cy="75" r="60" fill="none" stroke="var(--amber)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - score / pool.length)}" transform="rotate(-90 75 75)"/><text x="75" y="70" text-anchor="middle" font-size="34" font-weight="800" fill="var(--text)">${pct}%</text><text x="75" y="95" text-anchor="middle" font-size="13" fill="var(--text-3)">${score}/${pool.length}</text></svg>
        <h2>${msg}</h2><p>You scored ${score} out of ${pool.length}.</p>
        <div class="hero-cta" style="justify-content:center"><button class="btn primary" id="qRetry">↻ Try again</button><button class="btn" data-goview="notes">📖 Back to notes</button></div>
      </div></div>`;
      $('#qRetry').addEventListener('click', intro);
    }
    intro();
  }

  /* ---------------- Glossary ---------------- */
  function setupGlossary() {
    const el = $('#view-glossary');
    const terms = C.glossary.slice().sort((a, b) => a.term.localeCompare(b.term));
    el.innerHTML = `<div class="gloss-shell">
      <div class="mm-head" style="margin-bottom:12px"><h2>📚 Glossary</h2><p>${terms.length} key terms — search or filter by theme.</p></div>
      <div class="gloss-tools">
        <input id="glossSearch" type="search" placeholder="Search terms & definitions…">
      </div>
      <div class="gloss-grid" id="glossGrid"></div>
    </div>`;
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
    document.addEventListener('click', e => {
      const t = e.target.closest('[data-full]'); if (!t) return;
      $('#lbImg').src = t.dataset.full; $('#lbCap').textContent = t.dataset.cap || '';
      lb.hidden = false;
    });
    lb.addEventListener('click', e => { if (e.target.closest('.lb-close') || e.target === lb) lb.hidden = true; });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
  }

  /* =================================================================
     MIND MAP — custom radial, collapsible, pan + zoom
     ================================================================= */
  const MM = { map: 'course', collapsed: new Set(), scale: 1, tx: 0, ty: 0, dragging: false };
  const NS = 'http://www.w3.org/2000/svg';

  function buildCourseTree() {
    return {
      _id: 'root', label: C.meta.title, color: '#2f6df0',
      children: C.parts.map((p, i) => ({
        _id: 'p' + i, label: 'P' + p.num + '. ' + p.title.split(',')[0], color: p.color,
        children: p.sections.map((s, j) => ({ _id: 'p' + i + 's' + j, label: s.title, color: p.color }))
      }))
    };
  }
  function buildPartTree(p, pi) {
    return {
      _id: 'root', label: 'Part ' + p.num + ': ' + p.title.split(',')[0], color: p.color,
      children: p.sections.map((s, j) => ({
        _id: 's' + j, label: s.title, color: p.color,
        children: (s.tags || []).map((t, k) => ({ _id: 's' + j + 't' + k, label: t, color: p.color }))
      }))
    };
  }
  function currentTree() {
    if (MM.map === 'course') return buildCourseTree();
    const pi = +MM.map.slice(1); return buildPartTree(C.parts[pi], pi);
  }

  function wrapLabel(str, max) {
    const words = String(str).split(/\s+/);
    const lines = []; let cur = '';
    words.forEach(w => {
      if ((cur + ' ' + w).trim().length <= max) cur = (cur + ' ' + w).trim();
      else { if (cur) lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);
    return lines.slice(0, 3);
  }

  function layout(tree) {
    const nodes = [], links = [];
    nodes.push({ id: 'root', x: 0, y: 0, label: tree.label, kind: 'root', color: tree.color });
    const R1 = 255, R2 = 470;
    const kids = tree.children;
    kids.forEach(b => { b._open = b.children && b.children.length && !MM.collapsed.has(b._id); b._w = Math.max(1, b._open ? b.children.length : 1); });
    const total = kids.reduce((a, b) => a + b._w, 0);
    let ang = -Math.PI / 2;
    kids.forEach(b => {
      const span = 2 * Math.PI * b._w / total;
      const center = ang + span / 2;
      const bx = Math.cos(center) * R1, by = Math.sin(center) * R1;
      nodes.push({ id: b._id, x: bx, y: by, label: b.label, kind: 'branch', color: b.color, has: b.children && b.children.length, open: b._open });
      links.push({ x1: 0, y1: 0, x2: bx, y2: by, color: b.color });
      if (b._open) {
        const L = b.children.length;
        const pad = Math.min(span * 0.14, 0.14);
        const a0 = ang + pad, a1 = ang + span - pad;
        b.children.forEach((l, j) => {
          const t = L === 1 ? (a0 + a1) / 2 : a0 + (a1 - a0) * j / (L - 1);
          const rr = R2 + (j % 2) * 82;
          const lx = Math.cos(t) * rr, ly = Math.sin(t) * rr;
          nodes.push({ id: l._id, x: lx, y: ly, label: l.label, kind: 'leaf', color: b.color });
          links.push({ x1: bx, y1: by, x2: lx, y2: ly, color: b.color, thin: true });
        });
      }
      ang += span;
    });
    return { nodes, links };
  }

  function drawMindmap() {
    const stage = $('#mmStage'); if (!stage) return;
    const tree = currentTree();
    const { nodes, links } = layout(tree);
    const W = stage.clientWidth || 900, H = stage.clientHeight || 600;
    stage.setAttribute('viewBox', `0 0 ${W} ${H}`);

    let inner = '<g id="mmRoot">';
    links.forEach(l => { inner += `<path class="mm-link" d="M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}" stroke="${l.color}" style="opacity:${l.thin ? .35 : .6};stroke-width:${l.thin ? 1.6 : 2.4}"/>`; });
    nodes.forEach(n => {
      const max = n.kind === 'root' ? 20 : n.kind === 'branch' ? 17 : 16;
      const lines = wrapLabel(n.label, max);
      const longest = Math.max(...lines.map(s => s.length));
      const cw = n.kind === 'root' ? 9.6 : n.kind === 'branch' ? 7.7 : 7.1;
      const w = clamp(longest * cw + 26, 58, 250);
      const lh = n.kind === 'root' ? 20 : 16;
      const h = lines.length * lh + (n.kind === 'root' ? 24 : 16);
      const x = n.x - w / 2, y = n.y - h / 2;
      let fill, stroke, tcol, fw, fs;
      if (n.kind === 'root') { fill = 'url(#mmGrad)'; stroke = 'none'; tcol = '#fff'; fw = 800; fs = 16; }
      else if (n.kind === 'branch') { fill = n.color; stroke = 'rgba(255,255,255,.25)'; tcol = '#fff'; fw = 700; fs = 13.5; }
      else { fill = 'var(--panel-2)'; stroke = n.color; tcol = 'var(--text)'; fw = 600; fs = 12.5; }
      const tspans = lines.map((ln, k) => `<tspan x="${n.x}" dy="${k === 0 ? -((lines.length - 1) * lh) / 2 : lh}">${ln.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</tspan>`).join('');
      const badge = (n.kind === 'branch' && n.has) ? `<circle cx="${x + w - 2}" cy="${y + 2}" r="9" fill="${n.open ? 'var(--amber)' : 'var(--panel-3)'}" stroke="${n.color}" stroke-width="1.5"/><text x="${x + w - 2}" y="${y + 6}" text-anchor="middle" font-size="12" font-weight="800" fill="${n.open ? '#20140a' : 'var(--text-2)'}">${n.open ? '–' : '+'}</text>` : '';
      inner += `<g class="mm-node" data-id="${n.id}" data-kind="${n.kind}">
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${n.kind === 'root' ? 14 : 11}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <text x="${n.x}" y="${n.y + 4}" text-anchor="middle" fill="${tcol}" font-weight="${fw}" font-size="${fs}">${tspans}</text>
        ${badge}
      </g>`;
    });
    inner += '</g>';
    stage.innerHTML = `<defs><linearGradient id="mmGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f6df0"/><stop offset="1" stop-color="#9b51e0"/></linearGradient></defs>` + inner;

    // fit to view
    const pad = 90;
    const minX = Math.min(...nodes.map(n => n.x)) - 130, maxX = Math.max(...nodes.map(n => n.x)) + 130;
    const minY = Math.min(...nodes.map(n => n.y)) - 60, maxY = Math.max(...nodes.map(n => n.y)) + 60;
    const bw = maxX - minX, bh = maxY - minY;
    MM.scale = clamp(Math.min((W - pad) / bw, (H - pad) / bh), 0.28, 1.3);
    MM.tx = W / 2 - ((minX + maxX) / 2) * MM.scale;
    MM.ty = H / 2 - ((minY + maxY) / 2) * MM.scale;
    applyMM();

    $$('.mm-node[data-kind="branch"]', stage).forEach(g => g.addEventListener('click', () => {
      const id = g.dataset.id;
      if (MM.collapsed.has(id)) MM.collapsed.delete(id); else MM.collapsed.add(id);
      drawMindmap();
    }));
  }
  function applyMM() { const g = $('#mmRoot'); if (g) g.setAttribute('transform', `translate(${MM.tx} ${MM.ty}) scale(${MM.scale})`); }

  function initMindmap() {
    const el = $('#view-mindmap');
    if (!mmReady) {
      el.innerHTML = `<div class="mm-shell">
        <div class="mm-head">
          <h2>🧠 Mind Maps</h2>
          <div class="mm-picker" id="mmPicker">
            <button class="mm-pick on" data-map="course" style="background:#2f6df0">Whole course</button>
            ${C.parts.map((p, i) => `<button class="mm-pick" data-map="p${i}" style="--c:${p.color}">Part ${p.num}</button>`).join('')}
          </div>
          <p>Click a coloured branch to expand or collapse it. Drag to pan, scroll to zoom. Build the big picture, then drill into each part.</p>
        </div>
        <div class="mm-stage-wrap">
          <svg class="mm-stage" id="mmStage" xmlns="${NS}"></svg>
          <div class="mm-hint">Drag to pan · Scroll to zoom · Click branch to fold</div>
          <div class="mm-controls">
            <button id="mmIn">＋</button><button id="mmOut">－</button><button id="mmFit" title="Fit">⤢</button>
            <button id="mmExpand" title="Expand all">⊕</button><button id="mmCollapse" title="Collapse all">⊖</button>
          </div>
          <div class="mm-legend"><b><span class="dot" style="background:#2f6df0"></span>Central</b><b><span class="dot" style="background:var(--amber)"></span>Branch (topic)</b><b><span class="dot" style="background:transparent;border:2px solid var(--text-3)"></span>Leaf (concept)</b></div>
        </div>
      </div>`;
      wireMindmapControls();
      mmReady = true;
    }
    drawMindmap();
  }

  function wireMindmapControls() {
    const stage = $('#mmStage');
    $('#mmPicker').addEventListener('click', e => {
      const b = e.target.closest('.mm-pick'); if (!b) return;
      MM.map = b.dataset.map; MM.collapsed = new Set();
      $$('.mm-pick').forEach(x => { x.classList.toggle('on', x === b); if (x === b) x.style.background = x.dataset.map === 'course' ? '#2f6df0' : (x.style.getPropertyValue('--c') || '#2f6df0'); else if (x.dataset.map !== 'course') x.style.background = ''; });
      // ensure clicked part pill uses its colour
      if (b.dataset.map !== 'course') b.style.background = b.style.getPropertyValue('--c');
      drawMindmap();
    });
    const zoomAt = (factor) => { MM.scale = clamp(MM.scale * factor, 0.2, 2.2); applyMM(); };
    $('#mmIn').addEventListener('click', () => zoomAt(1.2));
    $('#mmOut').addEventListener('click', () => zoomAt(1 / 1.2));
    $('#mmFit').addEventListener('click', drawMindmap);
    $('#mmExpand').addEventListener('click', () => { MM.collapsed = new Set(); drawMindmap(); });
    $('#mmCollapse').addEventListener('click', () => {
      const tree = currentTree(); MM.collapsed = new Set(tree.children.filter(c => c.children && c.children.length).map(c => c._id)); drawMindmap();
    });
    // pan
    let sx, sy, ox, oy;
    stage.addEventListener('pointerdown', e => { MM.dragging = true; stage.classList.add('grabbing'); sx = e.clientX; sy = e.clientY; ox = MM.tx; oy = MM.ty; stage.setPointerCapture(e.pointerId); });
    stage.addEventListener('pointermove', e => { if (!MM.dragging) return; MM.tx = ox + (e.clientX - sx); MM.ty = oy + (e.clientY - sy); applyMM(); });
    stage.addEventListener('pointerup', e => { MM.dragging = false; stage.classList.remove('grabbing'); });
    stage.addEventListener('pointercancel', () => { MM.dragging = false; stage.classList.remove('grabbing'); });
    stage.addEventListener('wheel', e => {
      e.preventDefault();
      const rect = stage.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const ns = clamp(MM.scale * factor, 0.2, 2.2);
      // keep cursor point stable
      MM.tx = mx - (mx - MM.tx) * (ns / MM.scale);
      MM.ty = my - (my - MM.ty) * (ns / MM.scale);
      MM.scale = ns; applyMM();
    }, { passive: false });
    window.addEventListener('resize', () => { if ($('#view-mindmap').classList.contains('is-active')) drawMindmap(); });
  }

  /* ---------------- QA details style (inject once) ---------------- */
  function injectQAStyles() {
    const css = `
    details.qa{border:1px solid var(--line);border-radius:11px;margin-top:8px;background:var(--panel-2);overflow:hidden}
    details.qa summary{cursor:pointer;padding:11px 15px;font-weight:600;font-size:14px;list-style:none;display:flex;align-items:center;gap:10px}
    details.qa summary::-webkit-details-marker{display:none}
    details.qa summary::before{content:"?";width:22px;height:22px;flex:none;border-radius:7px;background:var(--brand);color:#fff;display:grid;place-items:center;font-weight:800;font-size:12px}
    details.qa[open] summary::before{content:"✓";background:var(--green)}
    details.qa .qa-a{padding:0 15px 13px 47px;color:var(--text-2);font-size:13.8px}`;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    injectQAStyles();
    renderNav();
    renderNotes();
    setupScrollSpy();
    setupReveal();
    setupTheme();
    setupSearch();
    setupFlashcards();
    setupQuiz();
    setupGlossary();
    setupLightbox();
    onScroll();
    // deep link
    if (location.hash) { const el = document.querySelector(location.hash); if (el) setTimeout(() => el.scrollIntoView(), 60); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
