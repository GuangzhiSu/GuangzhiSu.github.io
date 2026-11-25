---
layout: page
title: CrazyAlarm – Wake Up by Completing Missions
description: An iOS alarm you can't snooze your way out of. Do squats, find a mug, or say a word on the beat, all verified on-device with computer vision and speech recognition.
img: assets/img/projects/crazyalarm.png
importance: 5
category: products
featured: true
badge: iOS app
tags: [SwiftUI, AlarmKit, Vision, Speech, Core Motion, iOS 26]
github: https://github.com/GuangzhiSu/CrazyAlarm
---

{% include project_links.liquid size="lg" %}

<img class="project-hero" src="{{ '/assets/img/projects/crazyalarm.png' | relative_url }}" alt="CrazyAlarm">

Most alarms are easy to silence half-asleep. **CrazyAlarm** keeps the music playing until you finish a sequence of wake-up missions you chose the night before, and the phone checks that you really did them.

<div class="project-highlights">
  <div class="highlight"><strong>12 missions</strong><span>mix, match, and reorder per alarm</span></div>
  <div class="highlight"><strong>On-device AI</strong><span>Vision and Speech, with no paid API</span></div>
  <div class="highlight"><strong>Private</strong><span>photos stay local and audio is never uploaded</span></div>
  <div class="highlight"><strong>AlarmKit</strong><span>native Lock Screen alarms on iOS 26</span></div>
</div>

## Missions

| Move | Look & listen | Think |
| --- | --- | --- |
| **Squats**, counted with front-camera pose tracking of hips, knees, and ankles | **Household item hunt**: photograph a cup, book, or shoe, classified by Apple Vision | **Math** at three difficulty levels |
| **Steps**, counted fresh after the alarm starts | **Photo match** against a reference shot, using image feature distance | **Missing symbol** (+ − × ÷) |
| **Shake**, with debounced, gravity-removed acceleration | **QR / barcode** you bound in advance | **Typing** a sentence you chose |
| | **Say the word on the beat**: Mandarin or English speech checked against audio timestamps | **Custom quiz** and **find the odd color tile** |

## Engineering details

- Requests **only the permissions a chosen mission needs**, shows status in settings, and keeps checking at runtime.
- Mission progress and random questions **persist across launches**, so force-quitting doesn't reset the challenge.
- Editing an alarm safely **reschedules with rollback** if the system alarm update fails.
- Includes an original ringtone, imports audio from Files, and ducks music with echo processing during speech missions.
