---
layout: page
title: projects
permalink: /projects/
description: Products I've shipped, research systems I've built, and the coursework that got me here.
nav: true
nav_order: 3
display_categories: [products, research, coursework]
category_blurbs:
  products: Apps and AI products built end to end, from model to interface. Most can be tried today.
  research: Systems and methods from my research on AI safety and efficient multimodal models.
  coursework: Course and side projects in computer vision, data engineering, and tooling.
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <nav class="project-category-nav">
  {% for category in page.display_categories %}
    <a href="#{{ category }}">{{ category }}</a>
  {% endfor %}
  </nav>
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% if page.category_blurbs[category] %}
  <p class="category-blurb">{{ page.category_blurbs[category] }}</p>
  {% endif %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
