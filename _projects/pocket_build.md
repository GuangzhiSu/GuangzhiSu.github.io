---
layout: page
title: Pocket Build – Ship iOS Apps Without a Mac
description: A web console and native app that trigger cloud iOS builds, from a phone, a Windows PC, or a ChatGPT conversation, and deliver installable IPAs through SideStore or TestFlight.
img: assets/img/projects/pocket_build.png
importance: 6
category: products
featured: true
badge: Dev tool
tags: [GitHub Actions, SwiftUI, PWA, Node.js, CI/CD]
demo: https://guangzhisu.github.io/iOS-app-builder/
download: https://github.com/GuangzhiSu/iOS-app-builder/releases/latest
github: https://github.com/GuangzhiSu/iOS-app-builder
---

{% include project_links.liquid size="lg" %}

<img class="project-hero" src="{{ '/assets/img/projects/pocket_build.png' | relative_url }}" alt="Pocket Build">

I wanted to build iPhone apps without owning a Mac. **Pocket Build** is the tool that made that possible, and it's how [VoiceCraft]({{ '/projects/voicecraft/' | relative_url }}) and [CrazyAlarm]({{ '/projects/crazyalarm/' | relative_url }}) get delivered.

<div class="project-highlights">
  <div class="highlight"><strong>0 servers</strong><span>web and native clients talk directly to GitHub</span></div>
  <div class="highlight"><strong>3 delivery routes</strong><span>PWA, SideStore, and TestFlight</span></div>
  <div class="highlight"><strong>Chat-triggered</strong><span>an AI agent can start a build from a phone</span></div>
  <div class="highlight"><strong>0 npm deps</strong><span>plain Node.js and vanilla web</span></div>
</div>

## How it works

- Connect a **fine-grained GitHub token** scoped to one repo. The web console keeps it only in memory, and the native app stores it in the Keychain.
- Hit **one-tap cloud build**: a macOS GitHub Actions runner compiles the app and publishes an unsigned IPA plus a SideStore source feed.
- **From ChatGPT/Codex on a phone:** the agent writes a build request file to the repo, and the workflow validates and runs it. No custom backend is needed.
- Each request carries a unique ID, the exact commit SHA, and the run ID, so an old successful build is never mistaken for the new one.
- **TestFlight** builds check signing configuration up front and report missing fields without ever printing secrets.
- **Re-signing reminders** use iOS Shortcuts with x-callback-url to log success, failure, or cancel. The app never claims a certificate was renewed when it wasn't.
