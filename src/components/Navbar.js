// Composant Navigation Planaxis

export function renderNavbar(activePage = 'accueil') {
  const links = [
    { id: 'accueil', label: 'Accueil', url: '/' },
    { id: 'centre', label: 'Le Centre', url: '/centre' },
    { id: 'prestations', label: 'Prestations', url: '/prestations' },
    { id: 'medecins', label: 'Médecins', url: '/medecins' },
    { id: 'contact', label: 'Accès & Contact', url: '/contact-acces' }
  ];

  const linksHtml = links.map(link => `
    <a href="${link.url}" class="nav-link ${activePage === link.id ? 'active' : ''}">${link.label}</a>
  `).join('');

  const mobileLinksHtml = links.map(link => `
    <a href="${link.url}" class="mobile-nav-link ${activePage === link.id ? 'active' : ''}">${link.label}</a>
  `).join('');

  return `
  <header class="site-header" id="siteHeader">
    <div class="container-wide nav-inner">
      <a href="/" class="nav-brand" aria-label="Planaxis - Accueil">
        <img src="/assets/logo/planaxis-logo.svg" alt="PLANAXIS Centre Médical Gland" width="220" height="44" />
      </a>

      <nav class="nav-menu" aria-label="Navigation principale">
        ${linksHtml}
      </nav>

      <div class="nav-actions">
        <a href="tel:+41223648000" class="nav-phone" title="Appeler le cabinet Planaxis">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>022 364 80 00</span>
        </a>

        <a href="/rendez-vous" class="btn btn-primary btn-sm">
          <span>Prendre rendez-vous</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <button class="nav-toggle" id="navToggleBtn" aria-label="Menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Menu mobile tiroir -->
  <div class="mobile-nav-drawer" id="mobileDrawer">
    ${mobileLinksHtml}
    <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
      <a href="tel:+41223648000" class="btn btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>Appeler le 022 364 80 00</span>
      </a>
      <a href="/rendez-vous" class="btn btn-primary">
        <span>Prendre rendez-vous en ligne</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
  `;
}
