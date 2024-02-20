---
layout: post
title:  posts.titles.post6
date: 2021-03-28 21:01:00
description: posts.descriptions.post6
categories: posts.categories.sample_post posts.categories.external-service
---

Ein Beispiel für eine Blogseite, die den Zugriff auf Github-Metadaten demonstriert

## Was macht Github-Metadaten?
* Propagiert den `site.github` Namespace mit Repository-Metadaten
* Setzt Site-Variablen:
  * `site.title`
  * `site.description`
  * `site.url`
  * `site.baseurl`
* Zugriff auf die Metadaten
* Generiert bearbeitbare Links.

## Weiterführende Informationen
* Bei fehlerhaften/fehlenden Daten müssen Sie möglicherweise eine Github API-<a href="https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md">Authentifizierung</a> durchführen.
* Lesen Sie diese <a href="https://jekyll.github.io/github-metadata/">README</a> für weitere Details zum Thema.
* <a href= "https://github.com/jekyll/github-metadata/blob/master/docs/site.github.md">Diese Seite</a> hebt alle Felder hervor, auf die Sie mit Github-Metadaten zugreifen können.


## Beispiel-Metadaten

| Metadaten    | Variable                                                                                                                                                                                                                                                                                   | Result                                                                                                                                 |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| Hostname     | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.hostname }}</span>{% endraw %}                                                                                                                                                                                       | <span style="color:#4169E1; font-weight:bold">{{ site.github.hostname }}</span>                                                        |
| URL          | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.url }}</span>{% endraw %}                                                                                                                                                                                            | <span style="color:#4169E1; font-weight:bold">{{ site.github.url }}</span>                                                             |
| BaseURL      | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.baseurl }}</span>{% endraw %}                                                                                                                                                                                        | <span style="color:#4169E1; font-weight:bold">{{ site.github.baseurl }}</span>                                                         |
| Archiviert   | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.archived }}</span>{% endraw %}                                                                                                                                                                                       | <span style="color:#4169E1; font-weight:bold">{{ site.github.archived }}</span>                                                        |
| Contributors | {% raw %}<span style="color:#808080; font-weight:bold">{% for contributor in site.github.contributors %}<br/>{{ contributor.login }}<span style="display:inline-block; width: 145px;"></span><br> {% endfor %}<span style="display:inline-block; width: 245px;"></span></span>{% endraw %} | {% for contributor in site.github.contributors %}<span style="color:#4169E1; font-weight:bold">{{ contributor.login }}<br>{% endfor %} |





