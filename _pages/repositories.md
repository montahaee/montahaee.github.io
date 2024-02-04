---
layout: page
title: Repositories
permalink: /repositories/
nav: true
nav_order: 4
#published: true
category: string
#horizontal: true
---


{% assign repo_description_size = site.translations[site.lang].repositories.description | size %}
{% if repo_description_size > 0 %}

 <h5>{% t repositories.description %}</h5>
{% endif %}



## {% t repositories.users %}

{% if site.data.repositories.github_users %}
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

## {% t repositories.repos %}

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

[//]: # (</div>)
