// Page : Nos Prestations Médicales — Planaxis

import { specialties } from '../data/specialties.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export function renderPrestationsPage() {
  const sectionsHtml = specialties.map((s, idx) => `
    <div class="specialty-detail-block" id="${s.slug}" style="padding: 3rem 0; border-bottom: 1px solid var(--color-border);">
      <div style="display: grid; grid-template-columns: 0.35fr 0.65fr; gap: 3rem; align-items: flex-start;">
        <div>
          <span class="badge ${s.accentColor === 'terracotta' ? 'badge-terracotta' : s.accentColor === 'sand' ? 'badge-sand' : 'badge-sage'}" style="margin-bottom: 0.75rem;">
            ${s.category}
          </span>
          <h2 style="font-size: 1.75rem; margin-bottom: 0.75rem;">${s.title}</h2>
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-navy); margin-bottom: 1rem;">
            ⚡ ${s.delay}
          </div>
          <div style="font-size: 0.85rem; color: var(--color-sage-dark); font-weight: 600; margin-bottom: 1.5rem;">
            ✓ ${s.lamal}
          </div>
          <a href="/rendez-vous" class="btn btn-primary btn-sm">
            <span>Prendre rendez-vous</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div>
          <p style="font-size: 1.1rem; color: var(--color-graphite); line-height: 1.65; margin-bottom: 1.5rem;">
            ${s.fullDesc}
          </p>

          <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-navy); margin-bottom: 1rem;">
            Actes et motifs pris en charge :
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            ${s.highlights.map(h => `
              <div style="background: var(--color-cloud); padding: 0.85rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-sage)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
  <!DOCTYPE html>
  <html lang="fr-CH">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nos Prestations & Spécialités Médicales · PLANAXIS Gland</title>
    <meta name="description" content="Découvrez les prestations du centre Planaxis à Gland : médecine interne générale, pédiatrie, soins non programmés, plateau technique ECG et bilans de santé." />
    <link rel="icon" type="image/svg+xml" href="/assets/logo/planaxis-shield.svg" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderNavbar('prestations')}

    <!-- En-tête Prestations -->
    <section class="section" style="padding-bottom: 2rem; background: var(--color-cloud);">
      <div class="container">
        <div style="max-width: 800px;">
          <div class="eyebrow">Excellence Médicale & Continuité des Soins</div>
          <h1>Une gamme complète de soins médicaux de premier recours.</h1>
          <p class="lead" style="margin-top: 1rem;">
            Au cabinet Planaxis de Gland, nous assurons une prise en charge globale, coordonnée et bienveillante pour les patients de tous âges. Toutes nos prestations relèvent du cadre légal suisse de l'assurance obligatoire des soins (AOS / LAMal).
          </p>
        </div>
      </div>
    </section>

    <!-- Liste détaillée des spécialités -->
    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        ${sectionsHtml}
      </div>
    </section>

    <!-- Bannière Tiers Payant & Remboursement LAMal -->
    <section class="section section-cloud">
      <div class="container">
        <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: clamp(2rem, 4vw, 3.5rem); box-shadow: var(--shadow-sm);">
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center;">
            <div>
              <div class="eyebrow">Transparence & Sérénité</div>
              <h2>Prise en charge intégrale LAMal / AOS</h2>
              <p style="color: var(--color-muted); line-height: 1.65; margin: 1rem 0 1.5rem 0;">
                Toutes les consultations et tous les examens diagnostiques pratiqués à Planaxis sont remboursés par votre assurance maladie obligatoire suisse selon la tarification cantonale officielle TARMED / TARDOC.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <span class="badge badge-sage">Tiers Payant Électronique Medidata</span>
                <span class="badge badge-navy">Aucun surcoût imprévu</span>
                <span class="badge badge-sand">Convention LAMal / LCA</span>
              </div>
            </div>

            <div style="background: var(--color-cloud); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <h4 style="font-size: 1rem; margin-bottom: 0.75rem; color: var(--color-navy);">Votre consultation en 3 points :</h4>
              <ul style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.875rem; color: var(--color-graphite);">
                <li style="display: flex; gap: 0.5rem;">
                  <strong style="color: var(--color-sage);">1.</strong> Munissez-vous simplement de votre carte d'assurance maladie suisse.
                </li>
                <li style="display: flex; gap: 0.5rem;">
                  <strong style="color: var(--color-sage);">2.</strong> La facture est transmise de manière dématérialisée à votre caisse.
                </li>
                <li style="display: flex; gap: 0.5rem;">
                  <strong style="color: var(--color-sage);">3.</strong> Vous recevez votre décompte habituel selon votre franchise choisie.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section" style="text-align: center;">
      <div class="container" style="max-width: 700px;">
        <h2>Besoin de consulter l'un de nos praticiens ?</h2>
        <p class="lead" style="margin: 1rem 0 2rem 0;">
          Prenez rendez-vous en ligne en moins de deux minutes.
        </p>
        <a href="/rendez-vous" class="btn btn-primary btn-lg">Prendre rendez-vous en ligne</a>
      </div>
    </section>

    ${renderFooter()}
    <script src="/app.js"></script>
  </body>
  </html>
  `;
}
