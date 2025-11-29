---
layout: page
title: SmoothGuard – Robust Defense for Multimodal LLMs
description: A lightweight, model-agnostic defense for multimodal large language models that improves robustness against adversarial attacks using noise perturbation and clustering aggregation.
img: assets/img/smoothguard.png
importance: 0
category: work
github: https://github.com/GuangzhiSu/SmoothGuard
---

SmoothGuard is a **lightweight, model-agnostic defense** for multimodal large language models (MLLMs) that improves robustness against adversarial attacks ([repo](https://github.com/GuangzhiSu/SmoothGuard)).  
The method injects calibrated **noise perturbations** into inputs and applies **clustering aggregation** over multiple noisy runs to filter out harmful or unstable responses while preserving model utility.  
This project includes evaluation pipelines on MM-SafetyBench, Bench-in-the-Wild, and POPE, demonstrating that SmoothGuard can significantly reduce attack success rates with minimal impact on standard multimodal performance.  


