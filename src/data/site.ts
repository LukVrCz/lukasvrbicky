import { Camera, Clapperboard, Home, PartyPopper, Building2, Trophy, Video, Mail, Sparkles, Heart, Send, MapPin, CalendarDays } from '@lucide/astro';

export const site = {
  name: 'Lukáš Vrbický',
  url: 'https://lukasvrbicky.cz',
  phone: '+420 601 381 461',
  email: 'info@lukasvrbicky.cz',
  address: 'Pod Dráhou 229, 541 01 Trutnov',
  ico: '04164245',
  tagline: 'Cinematic wedding, real estate and event films.',
  description: 'Prémiová filmová produkce pro svatby, realitní prezentace, maturitní plesy, komerční videa, sport a eventy v Královéhradeckém kraji i po celé ČR.',
  sameAs: ['https://www.instagram.com/vrbicky.video/', 'https://www.facebook.com/vrbickyvideo/', 'https://www.youtube.com/@lukasvrbicky']
};

export const nav = [
  { label: 'Úvod', href: '/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Svatební video', href: '/portfolio/svatebni-video/' },
  { label: 'Svatební fotografie', href: '/portfolio/svatebni-foto/' },
  { label: 'Maturitní plesy', href: '/portfolio/maturitni-plesy/' },
  { label: 'Reality', href: '/reality/' },
  { label: 'Recenze', href: '/recenze/' },
  { label: 'Ceník', href: '/cenik/' },
  { label: 'Kontakt', href: '/kontakt/' }
];

export const services = [
  { title: 'Svatební video', href: '/portfolio/svatebni-video/', icon: Video, text: 'Dva kameramani, 4K, dron, krátký highlight i dlouhý film. Elegantní vzpomínka bez rušivého stylizování.' },
  { title: 'Svatební fotografie', href: '/portfolio/svatebni-foto/', icon: Camera, text: 'Přirozené okamžiky, čistá barevnost a galerie, která nechá vyniknout emoce i atmosféru dne.' },
  { title: 'Maturitní plesy', href: '/portfolio/maturitni-plesy/', icon: PartyPopper, text: 'Aftermovie a kompletní záznam programu pro školy a třídy s individuální cenou.' },
  { title: 'Reality', href: '/reality/', icon: Building2, text: 'Fotografie, video, dron, voiceover, titulky a vizualizace pro prémiovou prezentaci nemovitostí.' },
  { title: 'Komerční videa', href: '/portfolio/?category=Commercial', icon: Clapperboard, text: 'Promo videa, firemní prezentace, produktové a instruktážní formáty s jasným obchodním cílem.' },
  { title: 'Sport & eventy', href: '/portfolio/?category=Events', icon: Trophy, text: 'Dynamické reportáže, aftermovie a sestřihy akcí, které udrží energii místa.' }
];

export const packages = [
  { name: 'Video A', hours: '8 hodin', price: '16 800 Kč', note: 'Pro kompaktní svatební den.' },
  { name: 'Video B', hours: '10 hodin', price: '21 800 Kč', note: 'Nejčastější volba pro celý den.', featured: true },
  { name: 'Video C', hours: '12 hodin', price: '26 800 Kč', note: 'Pro rozsáhlý program a večerní atmosféru.' }
];

export const packageIncludes = ['2 kameramani', '4K záznam', 'dron', 'krátký highlight film', 'dlouhý film', 'online předání'];

export const processSteps = [
  { title: 'Inquiry', cz: 'Poptávka', icon: Send, text: 'Pošlete termín, místo a představu. Rychle ověřím dostupnost a doporučím ideální řešení.' },
  { title: 'Planning', cz: 'Plánování', icon: CalendarDays, text: 'Doladíme harmonogram, priority a důležité momenty, aby natáčení působilo přirozeně.' },
  { title: 'Filming', cz: 'Natáčení', icon: Sparkles, text: 'V den akce pracujeme nenápadně, citlivě a s důrazem na obraz, zvuk a atmosféru.' },
  { title: 'Online Delivery', cz: 'Online předání', icon: Mail, text: 'Hotový film předám online. U svateb je zpracování většinou do 10 dnů.' }
];

export const reviews = [
  { name: 'Sára Podstatová', text: 'Maximální spokojenost. Lukáš je hrozně šikovnej, díky němu máme krásnou vzpomínku na náš maturitní ples.' },
  { name: 'Vendula Kelnerová', text: 'Velmi profesionální, zkušený a skvělý přístup. Při natáčení jsme se nasmáli, vše bylo spontánní a přirozené.' },
  { name: 'Klienti svatební produkce', text: 'Oceňujeme klidný přístup, nenápadné natáčení a výsledek, který má filmovou atmosféru i po letech.' }
];

export const contactHighlights = [
  { icon: Heart, label: 'Svatby, které působí přirozeně' },
  { icon: MapPin, label: 'Královéhradecký kraj i celá ČR' },
  { icon: Mail, label: 'Odpověď obvykle do 24 hodin' }
];
