// assets/js/scripts.js

// Elements
const navToggle = document.querySelector('.nav-toggle');
const navClose  = document.querySelector('.nav-close');
const nav       = document.querySelector('.site-nav');
const backdrop  = document.querySelector('.nav-backdrop');

// Open mobile nav drawer
navToggle.addEventListener('click', () => {
  nav.classList.add('open');
  backdrop.classList.add('open');
});

// Close mobile nav drawer
navClose.addEventListener('click', () => {
  nav.classList.remove('open');
  backdrop.classList.remove('open');
});
backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  backdrop.classList.remove('open');
});

// Toggle sub-menus on mobile
document.querySelectorAll('.site-nav .has-sub > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

