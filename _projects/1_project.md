---
layout: subpage
title: projects.titles.project1 
description: projects.descriptions.project1
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

[//]: # ({%- assign proj_title_size = site.translations[site.lang].projects.titles | size -%})

[//]: # ({%- assign proj_description_size = site.translations[site.lang].projects.descriptions | size -%})

[//]: # (<!-- pages/projects.md -->)

[//]: # (<div class="projects">)

[//]: # ()
[//]: # ({%- if proj_title_size > 0 -%})

[//]: # ()
[//]: # (<h1>{%- t page.title -%}</h1>)

[//]: # ({%- endif -%})

[//]: # ({%- if proj_description_size > 0 -%})

[//]: # (<p>{%- t page.description -%}</p>)

[//]: # (<br>)

[//]: # ({%- endif -%})

[//]: # (</div>)
{% translate_file _projects/1_project.md %}