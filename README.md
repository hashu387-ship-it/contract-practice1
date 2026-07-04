# Contract Practice & Administration — Interactive Study Notes

A cutting‑edge, fully interactive, animated study‑notes website covering the
complete **Contract Practice & Administration** course for the **RICS (MRICS)**
and **AIQS (MAIQS)** APC — built from the 5‑part coaching programme by
**Roshan de Silva** (APC Coaching).

> 🎓 Study aid only. Always refer to your specific contract and governing law.
> Clause numbers follow the **FIDIC 1999 Red Book** unless otherwise stated.

## ✨ What's inside

- **📖 Complete notes** — every topic across all 5 parts, structured into
  definitions, comparison cards, tables, step‑by‑step procedures, law/case
  call‑outs and exam tips.
- **🖼️ 34 custom explainer illustrations** — one flat‑vector diagram per
  concept (formation, FIDIC family, bonds, insurance triggers, EOT, claims,
  termination, LADs…), generated to a single consistent art direction.
- **🎬 Explainer videos** — a narrated animated overview per part (rendered
  media; the slot auto‑hides until the file is present).
- **🧠 Interactive mind maps** — a radial, collapsible, pan‑&‑zoom map of the
  whole course and of each individual part.
- **🃏 Flashcards** — 90+ active‑recall cards with flip animation, shuffle and
  per‑part decks.
- **✅ Quiz** — 30 multiple‑choice questions with instant feedback,
  explanations and a scored result ring.
- **📚 Glossary** — 55+ searchable key terms.
- **🔎 Instant search**, **🌗 dark/light theme**, **scroll‑spy navigation**,
  a **reading‑progress bar**, an **image lightbox**, and smooth reveal
  animations throughout.

## 🗂️ The five parts

| # | Part | Covers |
|---|------|--------|
| 1 | Foundations, Formation & Documents | Competencies, what is a contract, prerequisites, rights & obligations, contract documents, priority of documents |
| 2 | Law, Standard Forms & Securities | Legislation, mandatory vs general provisions, LOI/LOA, FIDIC/JCT/NEC, FIDIC 1987↔1999↔2017, privity, novation, performance bonds |
| 3 | Advance Payment, Insurance & Interim Payments | Advance payments, CAR & construction insurances, occurrence vs claims‑made, cross liability & subrogation, interim valuations |
| 4 | Materials, Retention, Variations & Time | Material on/off site & vesting, retention, variations (Cl 13), extension of time, EOT vs prolongation cost |
| 5 | Claims, Termination & Completion | Claims, subcontractors, sectional completion, provisional sums, termination vs determination, force majeure vs frustration, defects, final account & LADs |

## 🚀 Running it

It's a **static site** with no build step. Either:

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000
```

…or enable **GitHub Pages** (Settings → Pages → deploy from branch). A
`.nojekyll` file is included so all assets are served as‑is.

## 🧱 Structure

```
index.html            # shell + script includes
css/styles.css        # design system (dark‑first, theme‑aware)
js/data.js            # global content store
js/content/part1..5.js# the notes for each part (blocks model)
js/content/glossary.js# glossary terms
js/content/quiz.js    # quiz bank
js/app.js             # rendering + all interactivity (nav, search, mind map,
                      #   flashcards, quiz, glossary, lightbox, theme)
assets/img/*.webp     # 34 explainer illustrations
assets/video/*.mp4    # per‑part explainer videos
assets/pdf/*.pdf      # original source slide decks
data/source-transcription.md  # full transcription of the source slides
```

All content is data‑driven: add a section to a `content/partN.js` file and it
automatically appears in the notes, sidebar, search, mind map and flashcards.
