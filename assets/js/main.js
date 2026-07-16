/* Static website configuration
 * Insert your production endpoint here when ready.
 * Supported examples: Formspree, Web3Forms, or a separate Cloudflare Worker endpoint.
 * Do not place private API keys in this file.
 */
const CONTACT_FORM_ENDPOINT = '';

document.documentElement.classList.add('js-ready');

const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const heroBg = document.querySelector('[data-parallax]');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY * 0.08, 72);
      heroBg.style.transform = `translate3d(0, ${y}px, 0)`;
    }, { passive: true });
  }
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('[data-card]').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.getAttribute('data-card') !== filter);
    });
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('btn-primary'));
    button.classList.add('btn-primary');
  });
});

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-youtube]');
  if (!trigger) return;
  const id = trigger.getAttribute('data-youtube');
  const title = trigger.getAttribute('aria-label') || 'YouTube video';
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  iframe.title = title;
  iframe.loading = 'lazy';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.className = 'youtube-lite';
  trigger.replaceWith(iframe);
});

const lightbox = document.querySelector('[data-lightbox-root]');
if (lightbox) {
  document.querySelectorAll('[data-lightbox]').forEach((item) => {
    item.addEventListener('click', () => {
      lightbox.classList.add('is-open');
      lightbox.querySelector('button')?.focus();
    });
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.closest('[data-lightbox-close]')) lightbox.classList.remove('is-open');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') lightbox.classList.remove('is-open');
  });
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    if (!CONTACT_FORM_ENDPOINT) {
      event.preventDefault();
      const status = contactForm.querySelector('[data-form-status]');
      if (status) status.textContent = 'Formulář je vizuálně připravený. Doplňte endpoint pro Formspree, Web3Forms nebo Cloudflare Worker v assets/js/main.js.';
      return;
    }
    contactForm.setAttribute('action', CONTACT_FORM_ENDPOINT);
  });
}
