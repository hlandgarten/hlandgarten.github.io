---
layout: single
title: "Welcome"
permalink: /
author_profile: true
sidebar:
  nav: "main"
---

Welcome to my personal site. I’m Harris Landgarten — inventor, trader, and AI innovator.

Explore my work in market theory, cutting-edge AI modeling, and practical product design.

## Recent Posts

{% if site.posts.size > 0 %}
<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br />
      <small>{{ post.excerpt | strip_html | truncate: 160 }}</small>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No blog posts yet. Stay tuned!</p>
{% endif %}

