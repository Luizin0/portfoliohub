import { loadRepositories } from './github-projects.js';

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('open', !isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

const refreshButton = document.querySelector('#refresh-repositories');
refreshButton?.addEventListener('click', () => loadRepositories());
loadRepositories();

menuButton?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menuButton.setAttribute('aria-expanded', 'false');
    navLinks?.classList.remove('open');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navLinks?.classList.contains('open')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    menuButton?.focus();
  }
});
