---
layout: post
title:  posts.titles.post6
date: 2021-03-28 21:01:00
description: posts.descriptions.post6
categories: posts.categories.sample_post posts.categories.external-service
---

A sample blog page that demonstrates the accessing of github meta data.

## What does Github-MetaData do?
* Propagates the site.github namespace with repository metadata
* Setting site variables :
  * `site.title`
  * `site.description`
  * `site.url`
  * `site.baseurl`
* Accessing the metadata - duh.
* Generating edittable links.

## Additional Reading
* If you're recieving incorrect/missing data, you may need to perform a Github API<a href="https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md"> authentication</a>.
* Go through this <a href="https://jekyll.github.io/github-metadata/">README</a> for more details on the topic.
* <a href= "https://github.com/jekyll/github-metadata/blob/master/docs/site.github.md">This page</a> highlights all the feilds you can access with github-metadata.
<br />

## Example MetaData


<br> 

| MetaData     | Variable                                                                                                                                                                                                                                                                                   | Result                                                                                                                                 |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| Hostname     | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.hostname }}</span>{% endraw %}                                                                                                                                                                                       | <span style="color:#4169E1; font-weight:bold">{{ site.github.hostname }}</span>                                                        |
| URL          | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.url }}</span>{% endraw %}                                                                                                                                                                                            | <span style="color:#4169E1; font-weight:bold">{{ site.github.url }}</span>                                                             |
| BaseURL      | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.baseurl }}</span>{% endraw %}                                                                                                                                                                                        | <span style="color:#4169E1; font-weight:bold">{{ site.github.baseurl }}</span>                                                         |
| Archived     | {% raw %}<span style="color:#808080; font-weight:bold">{{ site.github.archived }}</span>{% endraw %}                                                                                                                                                                                       | <span style="color:#4169E1; font-weight:bold">{{ site.github.archived }}</span>                                                        |
| Contributors | {% raw %}<span style="color:#808080; font-weight:bold">{% for contributor in site.github.contributors %}<br/>{{ contributor.login }}<span style="display:inline-block; width: 145px;"></span><br> {% endfor %}<span style="display:inline-block; width: 245px;"></span></span>{% endraw %} | {% for contributor in site.github.contributors %}<span style="color:#4169E1; font-weight:bold">{{ contributor.login }}<br>{% endfor %} |


