---
layout: page
title: Prospectus AI
description: A multi-agent system that turns a company's spreadsheets into a structured, citation-ready IPO prospectus working draft for sponsors and counsel.
img: assets/img/projects/prospectus_ai.png
importance: 1
category: products
featured: true
badge: Founder
tags: [LangGraph, Qwen, Multi-agent, RAG, Next.js, Electron]
website: https://www.ai-prospectus.com/
github: https://github.com/GuangzhiSu/Prospectus-AI
---

{% include project_links.liquid size="lg" %}

<img class="project-hero" src="{{ '/assets/img/projects/prospectus_ai.png' | relative_url }}" alt="Prospectus AI workspace">

Writing a listing prospectus means weeks of sponsors and lawyers copying numbers out of spreadsheets into hundreds of pages of tightly regulated prose. **Prospectus AI** is the product I founded to compress that first draft from weeks into hours, without pretending a model can replace professional judgment.

<div class="project-highlights">
  <div class="highlight"><strong>2 agents</strong><span>extract evidence, then draft section by section</span></div>
  <div class="highlight"><strong>A–H buckets</strong><span>source data routed to the sections that need it</span></div>
  <div class="highlight"><strong>Every gap flagged</strong><span>missing data is marked, never invented</span></div>
  <div class="highlight"><strong>Word export</strong><span>one click to a .docx counsel can edit</span></div>
</div>

## How it works

**Upload → Agent 1 → Agent 2 → Export.** A user uploads the issuer's Excel or JSON materials in the web app.

- **Agent 1 (extraction)** reads every sheet, summarizes it with Qwen, and builds two retrieval stores: narrative text chunks and a structured *fact store* of metrics, periods, and values. Content is classified into A–H evidence buckets.
- **Agent 2 (drafting)** is a LangGraph pipeline: Retriever → Writer → deterministic validation → risk-based Reviewer → at most one revision → Assembler. A section spec compiled from the exchange's requirements drives the outline for each chapter.
- **Export** combines the sections into a Word document.

## Built for how counsel actually works

The output is deliberately a **sponsor-counsel working draft**, not a filing copy:

- Prospectus-style prose wherever the source materials support it, and the required section skeleton wherever they don't.
- Explicit gap markers (`[● field]`, `DATA_MISSING`, `COUNSEL_INPUT_REQUIRED`) instead of plausible-sounding fabrications.
- Inline review tags such as `[[AI:VERIFY]]` and `[[AI:CITE]]` so reviewers know exactly what to check.
- Guardrails against promotional language, unqualified forward-looking statements, and implied profit forecasts.

## Stack

Python AI runtime (Qwen via Hugging Face, LangGraph, hybrid semantic + fact retrieval) · Next.js web app · Electron desktop shell · optional FastAPI + Chroma local-LLM service · a separate document-graph toolkit for mining the structure of past prospectuses.
