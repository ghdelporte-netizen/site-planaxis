// Page : Prise de Rendez-vous en Ligne — Planaxis

import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingWizard } from '../components/BookingWizard.js';

export function renderRendezVousPage() {
  return `
  <!DOCTYPE html>
  <html lang="fr-CH">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prendre Rendez-vous en Ligne · Centre Médical PLANAXIS Gland</title>
    <meta name="description" content="Prenez rendez-vous en ligne 24h/24 au cabinet médical Planaxis à Gland (Vaud). Médecine générale, pédiatrie et soins non programmés. Prise en charge 100% LAMal." />
    <link rel="icon" type="image/svg+xml" href="/assets/logo/planaxis-shield.svg" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderNavbar('rendez-vous')}

    <!-- En-tête -->
    <section class="section" style="padding-bottom: 2rem; background: var(--color-cloud);">
      <div class="container text-center" style="max-width: 760px;">
        <div class="eyebrow" style="margin-left: auto; margin-right: auto;">Réservation en Ligne 24/7</div>
        <h1>Prendre rendez-vous au cabinet Planaxis.</h1>
        <p class="lead" style="margin-top: 0.75rem;">
          Sélectionnez votre consultation en quelques clics. Confirmation immédiate par SMS et e-mail. Prise en charge 100% LAMal garantie.
        </p>

        <div style="display: inline-flex; align-items: center; gap: 0.75rem; margin-top: 1.5rem; background: var(--color-white); padding: 0.65rem 1.25rem; border-radius: var(--radius-full); border: 1px solid var(--color-border); font-size: 0.875rem;">
          <span>Vous préférez réserver par téléphone ?</span>
          <a href="tel:+41223648000" style="color: var(--color-navy); font-weight: 700; text-decoration: underline;">
            022 364 80 00
          </a>
        </div>
      </div>
    </section>

    <!-- Module interactif de réservation -->
    <section class="section" style="padding-top: 3rem;">
      <div class="container">
        ${renderBookingWizard()}
      </div>
    </section>

    <!-- Informations pratiques pour la consultation -->
    <section class="section section-cloud">
      <div class="container" style="max-width: 860px;">
        <div class="section-header text-center">
          <div class="eyebrow">Préparez Votre Visite</div>
          <h2>Documents à apporter lors de votre venue</h2>
        </div>

        <div class="grid-3">
          <div style="background: var(--color-white); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🪪</div>
            <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--color-navy);">Carte d'Assurance Maladie</h4>
            <p style="color: var(--color-muted); font-size: 0.85rem; line-height: 1.5;">
              Votre carte suisse d'assurance obligatoire (AOS / LAMal) avec votre numéro d'assuré.
            </p>
          </div>

          <div style="background: var(--color-white); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">💊</div>
            <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--color-navy);">Traitements en Cours</h4>
            <p style="color: var(--color-muted); font-size: 0.85rem; line-height: 1.5;">
              La liste de vos ordonnances et médicaments actuels pour adapter votre prise en charge.
            </p>
          </div>

          <div style="background: var(--color-white); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📒</div>
            <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--color-navy);">Carnet de Vaccination</h4>
            <p style="color: var(--color-muted); font-size: 0.85rem; line-height: 1.5;">
              Indispensable pour les consultations pédiatriques et les bilans vaccinaux de l'enfant.
            </p>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
    <script src="/app.js"></script>
  </body>
  </html>
  `;
}
