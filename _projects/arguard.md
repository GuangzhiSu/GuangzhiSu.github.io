---
layout: page
title: ARGuard – Circuit-Breaker Defense for AR Models
description: A circuit-breaker-powered safety framework for Infinity AR models, combining harmfulness probing, red-team prompt generation, and gated image synthesis.
img: assets/img/arguard.png
importance: 7
category: work
github: https://github.com/GuangzhiSu/ARGuard
---

ARGuard is a **circuit-breaker-powered defense** for Infinity AR models, designed to reduce harmful generations while preserving model utility ([repo](https://github.com/GuangzhiSu/ARGuard)).  
It integrates automated **red-team prompt generation**, a **harmfulness probing** module that learns to flag risky prompts from internal embeddings, and a **circuit breaker** that blocks or sanitizes prompts before they reach the AR generator.  
The framework provides an end-to-end pipeline—from prompt generation and probe training to guarded Infinity inference and logging—illustrating practical alignment and safety engineering for large autoregressive image models.  


