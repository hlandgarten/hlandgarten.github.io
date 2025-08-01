// assets/js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Random hero tagline
  if (window.taglines) {
    const t = window.taglines[Math.floor(Math.random() * window.taglines.length)];
    const titleEl = document.querySelector('.hero-title');
    const subEl   = document.querySelector('.hero-subtitle');
    if (titleEl && subEl) {
      titleEl.textContent    = t.title;
      subEl.textContent      = t.subtitle;
    }
  }

  // 2. Mobile nav toggle
  const nav       = document.querySelector('.site-nav');
  const toggle    = document.querySelector('.nav-toggle');
  const backdrop  = document.querySelector('.nav-backdrop');

  if (toggle && nav && backdrop) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      backdrop.classList.toggle('open');
    });
    backdrop.addEventListener('click', () => {
      nav.classList.remove('open');
      backdrop.classList.remove('open');
    });
  }
});

