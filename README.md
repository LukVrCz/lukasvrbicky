# Lukáš Vrbický — statický web

Nový samostatný web v čistém HTML5, CSS3 a vanilla JavaScriptu. Projekt nemá build krok, nepoužívá frameworky ani závislosti a lze ho nahrát na běžný hosting, GitHub Pages nebo Cloudflare Pages.

## Náhled

1. Dvojklik na `index.html` pro základní kontrolu.
2. Spusťte `preview.command` a otevřete `http://localhost:8000` pro plně správné testování root-relative cest.

Při otevření přes `file://` mohou root-relative cesty začínající lomítkem fungovat jinak než na produkční doméně.

## Stránky

- `/`
- `/portfolio/`
- `/portfolio/svatebni-video/`
- `/portfolio/svatebni-foto/`
- `/portfolio/maturitni-plesy/`
- `/reality/`
- `/recenze/`
- `/cenik/`
- `/kontakt/`
- `/faq/`
- `/lokality/`
- `/gdpr/`
- `/404.html`

## Placeholdery k doplnění

- Skutečné fotografie v `assets/images/`.
- Skutečná YouTube ID v atributech `data-youtube`.
- Skutečné recenze označené `[DOPLNIT SKUTEČNOU RECENZI]`.
- Skutečné lokality v poli `LOCATIONS_DATA` v `assets/js/main.js`.
- Finální právní text GDPR v `gdpr/index.html`.
- Formulářový endpoint v `assets/js/contact.js` v konstantě `CONTACT_FORM_ENDPOINT`.

## Úpravy obsahu

- Fotografie: složky `assets/images/placeholders`, `portfolio`, `weddings`, `graduation`, `real-estate`, `team`, `social`.
- Video: atributy `data-youtube` v HTML stránkách.
- Recenze: `index.html` a `recenze/index.html`.
- Lokality: `assets/js/main.js`.
- Endpoint formuláře: `assets/js/contact.js`.

Není potřeba instalovat Node.js ani spouštět build proces.
