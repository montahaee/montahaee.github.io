---
layout: page
permalink: /projects/
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---
{%- assign proj_title_size = site.translations[site.lang].titles.projects | size -%}
{%- assign proj_description_size = site.translations[site.lang].descriptions.projects | size -%}
<!-- pages/projects.md -->
<div class="projects">

{%- if proj_title_size > 0 -%}

<h1>{%- t titles.projects -%}</h1>
{%- endif -%}
{%- if proj_description_size > 0 -%}
<h5>{%- t descriptions.projects -%}</h5>
{%- endif -%}
{%- if site.enable_project_categories and page.display_categories -%}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories -%}
  {%- capture localized_category -%}projects.categories.{{category}}{%- endcapture -%}
  <a id="{%- t localized_category -%}" href="#{%- t localized_category -%}">
    <h2 class="category">{%- t localized_category -%}</h2>
  </a>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {%- if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {%- include projects_horizontal.liquid -%}
    {%- endfor -%}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {%- include projects.liquid -%}
    {%- endfor -%}
  </div>
  {%- endif -%}
  {%- endfor -%}
{%- else -%}
<!-- Display projects without categories -->

{%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
{%- if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {%- include projects_horizontal.liquid -%}
    {%- endfor -%}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {%- include projects.liquid -%}
    {%- endfor -%}
  </div>
  {%- endif -%}
{%- endif -%}
</div>