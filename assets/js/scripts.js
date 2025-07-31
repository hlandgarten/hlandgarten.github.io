// assets/js/scripts.js

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero tagline randomizer
  if (window.taglines) {
    const pick = window.taglines[Math.floor(Math.random() * window.taglines.length)];
    const titleEl = document.querySelector('.hero-title');
    const subEl   = document.querySelector('.hero-subtitle');
    if (titleEl && subEl) {
      // Fade-out
      titleEl.classList.add('fade-out');
      subEl.classList.add('fade-out');
      // Swap text after fade-out
      setTimeout(() => {
        titleEl.textContent    = pick.title;
        subEl.textContent      = pick.subtitle;
        // Fade-in
        titleEl.classList.remove('fade-out');
        titleEl.classList.add('fade-in');
        subEl.classList.remove('fade-out');
        subEl.classList.add('fade-in');
      }, 300);
    }
  }

  // 2. Navigation drawer toggles
  const navToggle = document.querySelector('.nav-toggle');
  const navClose  = document.querySelector('.nav-close');
  const nav       = document.querySelector('.site-nav');
  const backdrop  = document.querySelector('.nav-backdrop');
  if (navToggle && navClose && nav && backdrop) {
    navToggle.addEventListener('click', () => {
      nav.classList.add('open');
      backdrop.classList.add('open');
    });
    navClose.addEventListener('click', () => {
      nav.classList.remove('open');
      backdrop.classList.remove('open');
    });
    backdrop.addEventListener('click', () => {
      nav.classList.remove('open');
      backdrop.classList.remove('open');
    });
  }

  // 3. Sub-menu toggles for mobile
  document.querySelectorAll('.site-nav .has-sub > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // 4. Desktop hover to open/close sub-menus
  document.querySelectorAll('.site-nav .has-sub').forEach(item => {
    item.addEventListener('mouseenter', () => item.classList.add('open'));
    item.addEventListener('mouseleave', () => item.classList.remove('open'));
  });
});

