---
layout: home
title: Home
---

<section class="hero">
  <h1 class="hero-title"></h1>
  <p class="hero-subtitle"></p>
  <a href="#timeline" class="btn">Explore My Journey</a>
</section>

<script>
  (function() {
    const taglines = [
      { title: "Seven Decades of Tech in My Rear‐View", subtitle: "From black-and-white TV to the AI frontier..." },
      { title: "My Life, One Tech Milestone at a Time", subtitle: "Born in ’51..." },
      { title: "From Rabbit-Ears to Neural Nets", subtitle: "I watched WHT’s first test pattern..." },
      { title: "Witness to Every Tech Revolution", subtitle: "TV → PC → Internet → Cloud → AI… and I’ve built at every turn." },
      { title: "My 70-Year Ride Through Tech", subtitle: "Prop-planes in fog..." }
    ];
    document.addEventListener('DOMContentLoaded', () => {
      const pick = taglines[Math.floor(Math.random() * taglines.length)];
      document.querySelector('.hero-title').textContent = pick.title;
      document.querySelector('.hero-subtitle').textContent = pick.subtitle;
    });
  })();
</script>
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

