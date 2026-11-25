---
layout: page
title: VoiceCraft – On-Device Transcription for iPhone
description: A native iOS recorder with live captions that runs OpenAI Whisper entirely on the phone. No API key, no server, and it works offline once the model is cached.
img: assets/img/projects/voicecraft.png
importance: 4
category: products
featured: true
badge: iOS app
tags: [SwiftUI, WhisperKit, Core ML, Apple Speech, faster-whisper, GitHub Actions]
download: https://github.com/GuangzhiSu/VoiceCraft/releases
github: https://github.com/GuangzhiSu/VoiceCraft
---

{% include project_links.liquid size="lg" %}

<img class="project-hero" src="{{ '/assets/img/projects/voicecraft.png' | relative_url }}" alt="VoiceCraft">

Tap once to record, tap again to save the audio and the transcript. Under that one-button interface, **VoiceCraft** is an experiment in how far on-device speech recognition can go on a phone.

<div class="project-highlights">
  <div class="highlight"><strong>100% local</strong><span>Whisper runs on the iPhone via Core ML</span></div>
  <div class="highlight"><strong>3 engines</strong><span>Apple Speech, local Whisper, or a self-hosted server</span></div>
  <div class="highlight"><strong>~4 s chunks</strong><span>near-real-time captions with overlap merging</span></div>
  <div class="highlight"><strong>CI-built IPA</strong><span>installable without a Mac</span></div>
</div>

## Three recognition engines

- **Apple Speech** for continuous, low-latency captions, using on-device recognition when the phone supports it.
- **Whisper tiny.en via WhisperKit**, running locally after a one-time model download.
- **Optional faster-whisper backend** for older phones, so the same Whisper model can run on a server you control.

## Engineering details

- **Chunked streaming for Whisper:** every 4 seconds of new audio is transcribed with 0.5 s of context, and chunk boundaries are stitched with word-overlap merging.
- **Robust recording:** timer, live level meter, scrolling captions, history with playback, sharing, and clear handling of permission denials, audio interruptions, mic switches, and backgrounding.
- **Long sessions:** Apple Speech requests are rotated automatically to get past per-request limits.
- **Ship without a Mac:** a GitHub Actions pipeline builds, checks, and publishes an unsigned IPA to Releases, ready to sideload with SideStore.
