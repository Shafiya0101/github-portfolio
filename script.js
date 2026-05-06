document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.spine .nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // active state on nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.spine .nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  // live Paris time in masthead
  const clock = document.querySelector('.js-clock');
  if (clock) {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
      clock.textContent = t + ' CET';
    };
    tick();
    setInterval(tick, 1000);
  }

  // scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.reveal, .timeline-entry, .gallery-item, .award-row, .profile-piece, .metric-cell, .feature-strip, .feature-article'
  ).forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });
});
