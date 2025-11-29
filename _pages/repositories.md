---
layout: page
permalink: /repositories/
title: repositories
description: A curated list of project repositories from this site, with short descriptions and links to GitHub.
nav: true
nav_order: 4
---

{% assign project_repos = site.projects | where_exp: "p", "p.github" | sort: "importance" %}
{% if project_repos and project_repos.size > 0 %}

## Project repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-stretch">
  {% for project in project_repos %}
    <div class="repo p-3 text-left w-100 w-md-50">
      <h5 class="mb-1">
        <a href="{{ project.github }}" target="_blank" rel="noopener">
          {{ project.title }}
        </a>
      </h5>
      {% if project.description %}
        <p class="mb-0">
          {{ project.description }}
        </p>
      {% endif %}
    </div>
  {% endfor %}
</div>
{% else %}

<p>No project repositories available yet.</p>

{% endif %}
