---
layout: default
permalink: /blog/
title: titles.blog
#description: descriptions.blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3  # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.translations[site.lang].blog.name | size %}
{% assign blog_description_size = site.translations[site.lang].blog.description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <!--<div class="header-bar">
    <h1>{% t blog.name %}</h1>
    <h3>{% t blog.description %}</h3>
  </div>-->
  {% endif %}
    
{% assign post_tags = post.tags | join: "" %}

{% if site.translations[site.lang].blog.display_tags or site.translations[site.lang].blog.display_categories and post_tags != "" %}
  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.translations[site.lang].blog.display_tags %}
        {% assign english_tag = site.translations['en'].blog.display_tags[forloop.index0] %}
        <span class="post-span">
            <span class="squared-medium-dot"></span>
            <a href="{{ 'posts-tags-' | append: english_tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl }}">
            <i class="fa-solid fa-hashtag fa-sm">&nbsp;</i>{{ tag }}</a>
        </span>
        {% unless forloop.last %}
             
        {% endunless %}
    {% endfor %}
      {% for category in site.translations[site.lang].blog.display_categories %}
        {% assign english_category = site.translations['en'].blog.display_categories[forloop.index0] %}
        <span class="post-span">
            <span class="squared-medium-dot"></span>
            <a href="{{ 'posts-categories-' | append: english_category | slugify | prepend: '/blog/category/' | prepend: site.baseurl }}">
                <i class="fa-solid fa-tag fa-sm text-capitalize"></i> {{ category }}</a>
        </span>
        {% unless forloop.last %}
             
        {% endunless %}
    {% endfor %}
    </ul>
  </div>
{% endif %}




{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>
<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="card-item col">
<a href="{{ post.url | prepend: site.baseurl }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>

<h3 class="card-title text-lowercase">{%- t post.title -%}</h3>
<p class="card-text">{%- t post.description -%}</p>
                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 120 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_liquid | number_of_words | divided_by: 120 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}
                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl }}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>
{% endif %}

  <ul class="post-list">
    {%- if page.pagination.enabled -%}
      {%- assign postlist = paginator.posts -%}
    {%- else -%}
      {%- assign postlist = site.posts -%}
    {%- endif -%}
    {% for post in postlist %}
    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 120 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_liquid | number_of_words | divided_by: 120 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}
    <li>
{%- if post.thumbnail -%}
<div class="row">
          <div class="col-sm-9">
{%- endif -%}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{% t post.title %}</a>
        {% elsif post.redirect contains '://' or post.redirect contains '/assets/pdf/' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{% t post.title %}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path 
             d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" 
            class="icon_svg-stroke"
            stroke="#999" stroke-width="1.5" 
            fill="none" 
            fill-rule="evenodd" 
            stroke-linecap="round" 
            stroke-linejoin="round">
            </path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | prepend: site.baseurl }}">{% t post.title %}</a>
        {% endif %}
      </h3>
      <p>{%- t post.description -%}</p>
      <p class="post-meta">
        {% include reading_time.liquid read_time=read_time %} 
         <span class="small-dot"></span>
        {% include date_format.liquid format="long" date_from=post %}
        {%- if post.external_source %}
        <span class="small-dot"></span>
         {{ post.external_source }}
        {%- endif %}
      </p>
      <p class="post-tags">
        <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl }}">
          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
          {% if tags != "" %}
            {% for tag in post.tags %}
        <span class="squared-small-dot"></span>
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl }}">
              <i class="fa-solid fa-hashtag fa-sm">&nbsp;</i> {%- t tag -%}</a> 
              {% endfor %}
          {% endif %}
          {% if categories != "" %}
            {% for category in post.categories %}
                <span style="display: inline-block;">
                 <span class="squared-small-dot"></span>
                 <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl }}">
                <i class="fa-solid fa-tag fa-sm"></i> {% t category %}</a> 
                </span>
              {% endfor %}
          {% endif %}
    </p>
{%- if post.thumbnail -%}
</div>
  <div class="col-sm-3">
    <img class="card-img" src="{{post.thumbnail | relative_url}}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{%- endif -%}
    </li>

    {% endfor %}
</ul>

{%- if page.pagination.enabled -%}
{%- include pagination.liquid -%}
{%- endif -%}
</div>
