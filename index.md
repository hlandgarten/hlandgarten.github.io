---
layout: home
title: Home
---
<script>window.taglines = {{ site.data.taglines | jsonify }};</script>

<section class="hero">
  <h1 class="hero-title"></h1>
  <p class="hero-subtitle"></p>
  <a href="#timeline" class="btn">Explore My Journey</a>
</section>

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

