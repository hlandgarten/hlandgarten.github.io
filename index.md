---
layout: home
title: Home
permalink: /
---

<!-- This page’s body goes into the `{{ content }}` slot of `_layouts/home.html`. -->

<!-- You don’t need to re-declare the hero here; it lives in the layout. -->

<section class="recent-posts">
  <h2>Recent Posts</h2>
  <ul>
    {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</span>
    </li>
    {% endfor %}
  </ul>
</section>

