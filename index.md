---
layout: home
title: "Welcome"
permalink: /
# you can delete or repurpose any old keys you no longer need:
# author_profile: true
# sidebar:
#   nav: "main"
---

<section class="hero">
  <h1>Welcome to my personal site.</h1>
  <p>I'm Harris Landgarten – inventor, trader, and AI innovator.  
     Explore my work in market theory, cutting-edge AI modeling, and practical product design.</p>
</section>

<section class="recent-posts">
  <div markdown=1>
  ## Recent Posts
  {% if site.posts.size > 0 %}
    <ul>
      {% for post in site.posts limit:5 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br/>
          <small>{{ post.excerpt | strip_html | truncate: 160 }}</small>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No blog posts yet. Stay tuned!</p>
  {% endif %}
  </div>
</section>

