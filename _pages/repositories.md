---
layout: page
permalink: /repositories/
title: repositories
description: Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
# nav: true
# nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

{% assign project_repos = site.projects | where_exp: "p", "p.github" | sort: "importance" %}
{% if project_repos and project_repos.size > 0 %}

---

## Project repositories (from this site)

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
{% endif %}
