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

<section class="recent-posts" markdown="1">
## Recent Posts

{% if site.posts.size > 0 %}
- {% for post in site.posts limit:5 %}[{{ post.title }}]({{ post.url | relative_url }})  
  {{ post.excerpt | strip_html | truncate: 160 }}{% endfor %}
{% else %}
_No blog posts yet. Stay tuned!_
{% endif %}
</section>

