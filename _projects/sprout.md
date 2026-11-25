---
layout: page
title: Sprout – Social Practice for Autistic Children
description: A speech-driven practice world where autistic children rehearse real social moments, like joining play at a playground, with an adaptive AI coach and a caregiver dashboard.
img: assets/img/projects/sprout.png
importance: 3
category: products
featured: true
badge: "🏆 1st place · CMU hackathon"
tags: [Next.js, LLM state machine, Speech, Cloudflare, Child-centered design]
demo: https://buildathon-2.replit.app
github: https://github.com/GuangzhiSu/Sprout
---

{% include project_links.liquid size="lg" %}

<img class="project-hero" src="{{ '/assets/img/projects/sprout.png' | relative_url }}" alt="Sprout playground scenario">

Walking up to a group of kids and asking *"Can I play too?"* is one of the hardest moments for many autistic children. **Sprout** lets them practice that moment, and others like it, as many times as they need, in a calm and predictable space.

<div class="project-highlights">
  <div class="highlight"><strong>🏆 1st place</strong><span>at a Carnegie Mellon hackathon (2026)</span></div>
  <div class="highlight"><strong>Speak or tap</strong><span>voice input with typed and card fallbacks</span></div>
  <div class="highlight"><strong>Adaptive</strong><span>prompts fade as the child succeeds</span></div>
  <div class="highlight"><strong>2 audiences</strong><span>a playful child view and a calm caregiver view</span></div>
  <div class="highlight"><strong>Private by default</strong><span>child profile stays on the device</span></div>
</div>

## Designing the AI so it can't go off-script

A free-running chatbot is the wrong tool for a child who needs predictability. Sprout puts the language model **inside a controlled state machine**:

- An **interaction analyzer** classifies the child's communicative intent (greeting, asking to join, sharing...).
- A deterministic **scenario manager** owns progression, difficulty, and prompt fading, so the model never decides what happens next.
- A separate **NPC language step** produces short, in-character replies from the other children.
- A background **visual check** can surface a gentle pause prompt when it sees a clear observable concern. It is explicitly not a diagnosis.

## The experience

- **Child:** an eight-step first-run tutorial on the practice screen itself, reply cards that read aloud, a level-based course map, and a celebration screen after every session.
- **Caregiver:** progress overview, SRS-2 score tracking with subscale detail, and the full transcript of each practice conversation.

The first release ships one complete adaptive scenario (meeting peers at a playground), with more scenes such as sharing a toy, saying sorry, and asking for a break designed into the course catalogue.
