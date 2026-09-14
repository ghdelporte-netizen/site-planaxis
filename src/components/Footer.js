// Composant Footer Institutionnel Suisse Planaxis

export function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Colonne 1 : Marque & Philosophie -->
        <div>
          <a href="/" aria-label="Planaxis accueil">
            <img src="/assets/logo/planaxis-logo-white.svg" alt="PLANAXIS" width="200" height="40" style="margin-bottom: 1rem;" />
          </a>
          <p class="footer-tagline">
            Cabinet médical de nouvelle génération situé à Gland. L'alliance d'une médecine suisse d'excellence, de la chaleur humaine et d'une prise en charge coordonnée et sereine.
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span class="badge" style="background: rgba(255,255,255,0.1); color: #FFF; border: none;">Canton de Vaud</span>
            <span class="badge" style="background: rgba(255,255,255,0.1); color: #FFF; border: none;">District de Nyon</span>
            <span class="badge" style="background: rgba(231, 201, 133, 0.2); color: #E7C985; border: none;">AOS / LAMal 100%</span>
          </div>
        </div>

        <!-- Colonne 2 : Navigation & Soins -->
        <div>
          <h4 class="footer-title">Prestations</h4>
          <div class="footer-links">
            <a href="/prestations#medecine-generale" class="footer-link">Médecine Générale</a>
            <a href="/prestations#pediatrie" class="footer-link">Pédiatrie</a>
            <a href="/prestations#soins-non-programmes" class="footer-link">Soins Non Programmés</a>
            <a href="/prestations#plateau-technique" class="footer-link">Plateau Technique & ECG</a>
            <a href="/prestations#prevention-bilan" class="footer-link">Bilans de Prévention</a>
            <a href="/prestations#teleconsultation" class="footer-link">Téléconsultation</a>
          </div>
        </div>

        <!-- Colonne 3 : Le Centre & Horaires -->
        <div>
          <h4 class="footer-title">Cabinet de Gland</h4>
          <div class="footer-links">
            <span style="font-size: 0.875rem; color: #FFF; font-weight: 600;">2 Rue du Nord<br/>1196 Gland · Suisse</span>
            <span style="font-size: 0.8125rem; color: rgba(255,255,255,0.7); margin-top: 0.5rem;">À 3 min de la gare CFF de Gland<br/>Parking patient réservé & PMR</span>
            <div style="margin-top: 0.75rem; font-size: 0.8125rem;">
              <strong style="color: var(--color-sand);">Lu – Ve :</strong> 08h00 – 18h30<br/>
              <strong style="color: var(--color-sand);">Samedi :</strong> 09h00 – 13h00 (Urgences)
            </div>
          </div>
        </div>

        <!-- Colonne 4 : Contact & Urgences -->
        <div>
          <h4 class="footer-title">Contact & Urgences</h4>
          <div class="footer-links">
            <a href="tel:+41223648000" class="footer-link" style="color: #FFF; font-weight: 700; font-size: 1rem;">
              Tél : 022 364 80 00
            </a>
            <a href="mailto:contact@planaxis.ch" class="footer-link">
              contact@planaxis.ch
            </a>
            <span style="font-size: 0.8125rem; color: rgba(255,255,255,0.6);">Messagerie sécurisée : planaxis@hin.ch</span>
            <div style="margin-top: 1rem; padding: 0.75rem; border-radius: 8px; background: rgba(216, 131, 112, 0.15); border: 1px solid rgba(216, 131, 112, 0.3);">
              <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-sand); font-weight: 700;">Urgences Vitales</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #FFF; margin-top: 0.2rem;">Appelez le 144</div>
              <div style="font-size: 0.75rem; color: rgba(255,255,255,0.7);">Garde vaudoise : 0848 133 133</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bas de page & Certifications -->
      <div class="footer-bottom">
        <div class="footer-certifications">
          <span class="footer-cert-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5z"/></svg>
            Standards Médicaux Suisses
          </span>
          <span class="footer-cert-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            Titulaires FMH & Membres SVM
          </span>
          <span class="footer-cert-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
            Conforme LPD (Protection des Données)
          </span>
        </div>

        <div>
          © ${new Date().getFullYear()} PLANAXIS Sàrl. Tous droits réservés. · <a href="/contact-acces" style="color: inherit; text-decoration: underline;">Mentions Légales & Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}
