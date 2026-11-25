---
layout: page
title: fun
permalink: /fun/
description: The non-research side of me. Where I've been, and what I do when I'm not training models.
nav: true
nav_order: 6
chart:
  echarts: true
---

<div class="fun-page" data-map-base="{{ '/assets/json/maps/' | relative_url }}">

<div class="fun-facts">
  <div class="fun-fact">
    <span class="fun-emoji">🎤</span>
    <strong>Tenor</strong>
    <span>Four years singing in the <a href="https://space.bilibili.com/3537124773071708" target="_blank" rel="noopener">DKU Chorus</a></span>
  </div>
  <div class="fun-fact">
    <span class="fun-emoji">🏸</span>
    <strong>Badminton</strong>
    <span>One season on the <a href="https://athletics.dukekunshan.edu.cn/latest-in-athletics/meet-dku-varsity-teams/" target="_blank" rel="noopener">DKU varsity team</a></span>
  </div>
  <div class="fun-fact">
    <span class="fun-emoji">🛠️</span>
    <strong>Weekend builder</strong>
    <span>I make the apps I wish existed, like an <a href="{{ '/projects/crazyalarm/' | relative_url }}">alarm that makes me do squats</a></span>
  </div>
  <div class="fun-fact">
    <span class="fun-emoji">✈️</span>
    <strong>Traveler</strong>
    <span>Born in Nantong, college in Suzhou, now in Pittsburgh. The maps below show where else I've been.</span>
  </div>
</div>

<h2 class="fun-section-title">places I've been</h2>

<div class="travel-stats">
  <a href="#china" class="travel-stat"><strong>13</strong><span>provinces & regions in China</span></a>
  <a href="#world" class="travel-stat"><strong>6</strong><span>countries</span></a>
  <a href="#usa" class="travel-stat"><strong>10</strong><span>U.S. states</span></a>
</div>

<div class="globe-wrap">
  <div class="globe-controls">
    <button type="button" class="globe-btn active" data-view="world">🌏 World</button>
    <button type="button" class="globe-btn" data-view="china">🇨🇳 China</button>
    <button type="button" class="globe-btn" data-view="usa">🇺🇸 United States</button>
  </div>
  <div id="travel-globe" class="travel-globe"></div>
  <p class="travel-legend">
    <span class="legend-swatch legend-visited"></span> visited
    <span class="legend-swatch legend-pin"></span> places that matter to me
    <span class="text-muted">· drag to spin, scroll or pinch to zoom, hover a dot for its name</span>
  </p>
</div>

<h3 id="china" class="travel-title">🇨🇳 China</h3>
<div class="travel-chips">
  <span class="travel-chip travel-chip-home">Jiangsu · born in Nantong, college in Suzhou</span>
  <span class="travel-chip">Shanghai</span>
  <span class="travel-chip">Beijing</span>
  <span class="travel-chip">Zhejiang</span>
  <span class="travel-chip">Anhui</span>
  <span class="travel-chip">Fujian</span>
  <span class="travel-chip">Shandong</span>
  <span class="travel-chip">Hubei</span>
  <span class="travel-chip">Guizhou</span>
  <span class="travel-chip">Yunnan</span>
  <span class="travel-chip">Guangxi</span>
  <span class="travel-chip">Xinjiang</span>
  <span class="travel-chip">Hong Kong</span>
</div>

<h3 id="world" class="travel-title">🌏 Countries</h3>
<div class="travel-chips">
  <span class="travel-chip travel-chip-home">China</span>
  <span class="travel-chip">United States</span>
  <span class="travel-chip">Japan</span>
  <span class="travel-chip">South Korea</span>
  <span class="travel-chip">Singapore</span>
  <span class="travel-chip">Türkiye</span>
</div>

<h3 id="usa" class="travel-title">🇺🇸 U.S. states</h3>
<div class="travel-chips">
  <span class="travel-chip travel-chip-home">Pennsylvania · Pittsburgh (CMU)</span>
  <span class="travel-chip travel-chip-home">North Carolina · Durham (Duke)</span>
  <span class="travel-chip">California</span>
  <span class="travel-chip">New York</span>
  <span class="travel-chip">Massachusetts · Boston</span>
  <span class="travel-chip">New Jersey</span>
  <span class="travel-chip">Florida · Miami</span>
  <span class="travel-chip">Georgia · Atlanta</span>
  <span class="travel-chip">Missouri · St. Louis</span>
  <span class="travel-chip">Kentucky</span>
</div>

</div>

<script src="{{ '/assets/js/travel-globe.js' | relative_url | bust_file_cache }}"></script>
