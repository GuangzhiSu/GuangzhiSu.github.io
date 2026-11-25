---
layout: page
title: Annu – Find Care in India
description: Ask in English, Hindi, or Hinglish and get nearby hospitals ranked by real evidence that they offer the care you need, with the source quotes behind every pick.
img: assets/img/projects/annu.png
importance: 2
category: products
featured: true
badge: Team project
tags: [React, FastAPI, Databricks, Retrieval & ranking, Whisper, Leaflet]
video: https://www.youtube.com/watch?v=j7H9Bkurgv8
github: https://github.com/Americium3/annu
---

{% include project_links.liquid size="lg" %}

<div class="row justify-content-center mb-3">
  <div class="col-sm-10">
    {% include video.liquid path="https://www.youtube.com/embed/j7H9Bkurgv8" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

*"My father needs dialysis near Bhubaneswar."* In India, finding a facility that actually provides a specific service is hard: listings are incomplete, inconsistent, and often contradictory. **Annu** turns that everyday sentence into a short list of nearby facilities, and shows *why* each one made the list.

<div class="project-highlights">
  <div class="highlight"><strong>0.37 → 0.88</strong><span>P@3 vs. the earlier rules baseline (29-query dev set)</span></div>
  <div class="highlight"><strong>3 languages</strong><span>English, Hindi, and Hinglish input</span></div>
  <div class="highlight"><strong>Evidence first</strong><span>quotes, sources, and uncertainty for every result</span></div>
  <div class="highlight"><strong>Safety screen</strong><span>emergency red flags routed before any search</span></div>
</div>

## What it does

- **Ask naturally.** Annu extracts the care needed, the place, and the urgency, shows which words it used, and asks a follow-up when the request is too broad.
- **Search anywhere.** City, district, six-digit PIN code, or device location, with aliases for older and alternate place names.
- **Compare with proof.** Ranked results on a map, plus a *"Why this hospital?"* panel with original quotes, score factors, and uncertainty.
- **Act on it.** Directions, tap-to-call, WhatsApp sharing, voice input via Whisper, and a mobile-first UI in English and Hindi.

## How recommendations work

1. **Understand** the request with shared vocabulary and rules; an optional LLM fills gaps, but every extracted claim must be grounded in the user's words.
2. **Retrieve** candidates from an index that separates explicit service support from mentions that are negated, planned, referred, or misattributed.
3. **Check eligibility.** A claim guard drops contradictory or historical claims before ranking.
4. **Widen the radius** (25 → 50 → 100 → 200 km) until at least three eligible facilities are found.
5. **Rank and explain** by combining proof strength with distance, scaled per care type.

We benchmarked rules, TF-IDF, BM25, bi-encoders, and cross-encoders on Databricks. The largest gains came from better location resolution and candidate retrieval, a useful reminder that data plumbing often beats a bigger model.

<p class="text-muted small">Annu searches documented facility information. It does not diagnose conditions or verify current staffing, beds, or clinical quality. Built on the Virtue Foundation healthcare-facility dataset in Databricks.</p>
