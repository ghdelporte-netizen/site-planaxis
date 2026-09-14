// Page : L'Équipe Médicale FMH — Planaxis

import { doctors } from '../data/doctors.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export function renderMedecinsPage() {
  const doctorsDetailedHtml = doctors.map(d => `
    <div class="doctor-detail-card" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); overflow: hidden; margin-bottom: 3.5rem; box-shadow: var(--shadow-sm);">
      <div style="display: grid; grid-template-columns: 0.35fr 0.65fr; gap: 3rem;">
        <div style="position: relative; aspect-ratio: 4/5; background: var(--color-cloud);">
          <img src="${d.photo}" alt="${d.name}" style="width: 100%; height: 100%; object-fit: cover;" />
          <span class="badge badge-sand" style="position: absolute; top: 16px; left: 16px;">Titre de Spécialiste FMH</span>
        </div>

        <div style="padding: 2.5rem 2.5rem 2.5rem 0; display: flex; flex-direction: column;">
          <div class="eyebrow" style="margin-bottom: 0.5rem;">${d.role}</div>
          <h2 style="font-size: 2rem; margin-bottom: 0.25rem;">${d.name}</h2>
          <div style="font-size: 1rem; color: var(--color-sage-dark); font-weight: 600; margin-bottom: 1.5rem;">
            ${d.title}
          </div>

          <p style="font-size: 1.05rem; color: var(--color-graphite); line-height: 1.65; margin-bottom: 1.75rem;">
            ${d.bio}
          </p>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-navy); margin-bottom: 0.75rem;">
              Titres & Parcours Hospitalier Universitaire :
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.875rem; color: var(--color-muted);">
              ${d.credentials.map(c => `
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--color-sage); font-weight: 700;">✓</span> ${c}
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="display: flex; gap: 2rem; align-items: center; margin-bottom: 2rem; flex-wrap: wrap;">
            <div>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-navy); text-transform: uppercase;">Langues parlées :</span>
              <div style="font-size: 0.9rem; color: var(--color-graphite);">${d.languages.join(' · ')}</div>
            </div>
            <div>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-navy); text-transform: uppercase;">Jours de présence :</span>
              <div style="font-size: 0.9rem; color: var(--color-graphite);">${d.days}</div>
            </div>
          </div>

          <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="badge badge-sage">Disponibilité</span>
              <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-navy); margin-left: 0.5rem;">${d.nextAvailable}</span>
            </div>

            <a href="/rendez-vous" class="btn btn-primary">
              <span>Prendre rendez-vous avec ${d.name.split(' ')[0]} ${d.name.split(' ')[1]}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
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
    <title>Nos Médecins FMH · Centre Médical PLANAXIS Gland</title>
    <meta name="description" content="Découvrez les médecins spécialistes FMH du cabinet Planaxis à Gland : médecine générale, pédiatrie et médecine d'urgence ambulatoire." />
    <link rel="icon" type="image/svg+xml" href="/assets/logo/planaxis-shield.svg" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderNavbar('medecins')}

    <!-- En-tête de page -->
    <section class="section" style="padding-bottom: 2rem; background: var(--color-cloud);">
      <div class="container">
        <div style="max-width: 800px;">
          <div class="eyebrow">Corps Médical Diplômé</div>
          <h1>Une équipe de spécialistes FMH dévouée à votre écoute.</h1>
          <p class="lead" style="margin-top: 1rem;">
            Chez Planaxis, chaque centre regroupe au maximum 3 praticiens afin de garantir une relation médecin-patient privilégiée. Tous nos médecins sont titulaires du titre de spécialiste FMH et bénéficient d'une solide expérience au sein des centres hospitaliers universitaires romands (CHUV, HUG).
          </p>
        </div>
      </div>
    </section>

    <!-- Liste des fiches médecins -->
    <section class="section" style="padding-top: 3rem;">
      <div class="container">
        ${doctorsDetailedHtml}
      </div>
    </section>

    <!-- Encadré Recrutement / Espace Confrères -->
    <section class="section section-cloud">
      <div class="container">
        <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: clamp(2rem, 4vw, 3.5rem); box-shadow: var(--shadow-sm);">
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center;">
            <div>
              <div class="eyebrow">Espace Professionnels Médicaux</div>
              <h2>Vous êtes médecin FMH ? Rejoignez le modèle Planaxis.</h2>
              <p style="color: var(--color-muted); line-height: 1.65; margin: 1rem 0 1.5rem 0;">
                Planaxis propose une nouvelle manière d'exercer en Suisse romande : sécurité du salariat, plateau technique performant, assistance numérique à la rédaction médicale pour libérer 100% de votre temps pour le soin, et structure agile à 3 médecins par centre.
              </p>
              <a href="mailto:contact@planaxis.ch?subject=Candidature%20Médecin%20FMH%20Planaxis" class="btn btn-secondary">
                <span>Contacter la direction médicale</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div style="background: var(--color-cloud); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <h4 style="font-size: 1rem; color: var(--color-navy); margin-bottom: 0.75rem;">Les avantages de la pratique Planaxis :</h4>
              <ul style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.875rem; color: var(--color-graphite);">
                <li>✓ Zéro bureaucratie administrative chronophage</li>
                <li>✓ Rémunération attractive (fixe + bonus de performance)</li>
                <li>✓ Plateau technique complet : ECG, biologie rapide &lt; 3h</li>
                <li>✓ Équilibre vie professionnelle & vie privée préservé</li>
              </ul>
            </div>
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
