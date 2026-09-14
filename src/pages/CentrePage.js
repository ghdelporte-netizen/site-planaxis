// Page : Le Centre Médical de Gland — Planaxis

import { centerInfo } from '../data/center.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export function renderCentrePage() {
  return `
  <!DOCTYPE html>
  <html lang="fr-CH">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Le Centre de Gland · Cabinet Médical Contemporain · PLANAXIS</title>
    <meta name="description" content="Découvrez le centre médical Planaxis à Gland (Vaud) : architecture apaisante en chêne clair et marbre, mur végétal, plateau technique moderne et accès PMR." />
    <link rel="icon" type="image/svg+xml" href="/assets/logo/planaxis-shield.svg" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderNavbar('centre')}

    <!-- Header de Page Épuré -->
    <section class="section" style="padding-bottom: 2rem; background: var(--color-cloud);">
      <div class="container">
        <div style="max-width: 780px;">
          <div class="eyebrow">Architecture & Espaces de Soins</div>
          <h1>Un cadre médical serein, à la hauteur des exigences suisses.</h1>
          <p class="lead" style="margin-top: 1rem;">
            Implanté à Gland, au cœur de La Côte, le cabinet Planaxis a été pensé pour rompre avec l'austérité hospitalière traditionnelle. L'alliance de matériaux nobles, de lumière naturelle et d'équipements de pointe crée une atmosphère rassurante et professionnelle.
          </p>
        </div>
      </div>
    </section>

    <!-- 1. VISITE DES ESPACES RÉELS DU CABINET -->
    <section class="section">
      <div class="container">
        <!-- Espace 1 : Accueil & Réception -->
        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
          <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img src="/assets/photos/planaxis-reception.jpg" alt="Comptoir d'accueil en chêne clair et marbre Calacatta doré à Planaxis Gland" style="width: 100%; height: auto;" />
          </div>
          <div>
            <span class="badge badge-sand" style="margin-bottom: 1rem;">Espace d'Accueil</span>
            <h2>Une prise en charge humaine dès le pas de la porte.</h2>
            <p style="color: var(--color-muted); line-height: 1.65; margin: 1rem 0 1.5rem 0;">
              Dès votre arrivée, notre équipe vous accueille autour d'un comptoir sur-mesure combinant le bois de chêne clair chaleureux et la noblesse d'un marbre doré veiné.
            </p>
            <ul style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem;">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Accueil attentif sans guichet vitré impersonnel
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Formalités administratives rapides et dématérialisées
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Démarches sécurisées conformes à la loi suisse LPD
              </li>
            </ul>
          </div>
        </div>

        <!-- Espace 2 : Salle d'attente végétalisée -->
        <div style="display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
          <div>
            <span class="badge badge-sage" style="margin-bottom: 1rem;">Espace d'Attente</span>
            <h2>Le calme d'un salon apaisé par un mur végétal vivant.</h2>
            <p style="color: var(--color-muted); line-height: 1.65; margin: 1rem 0 1.5rem 0;">
              L'attente ne doit jamais être une source d'angoisse. Notre salon d'accueil intègre un mur végétal intérieur luxuriant, des suspensions circulaires au design scandinave et des fauteuils confortables.
            </p>
            <ul style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem;">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Mur végétal régulateur d'hygrométrie et purificateur d'air
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Espace adapté aux jeunes enfants avec table en bois et jeux calmes
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Confort acoustique étudié pour préserver l'intimité sonore
              </li>
            </ul>
          </div>
          <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img src="/assets/photos/planaxis-waiting-room.jpg" alt="Salle d'attente végétalisée avec mur de plantes et fauteuils design à Gland" style="width: 100%; height: auto;" />
          </div>
        </div>

        <!-- Espace 3 : Salles de consultation -->
        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center;">
          <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img src="/assets/photos/planaxis-consultation.jpg" alt="Consultation médicale personnalisée à Planaxis : une assistante médicale accueille un patient autour du bureau en marbre et chêne" style="width: 100%; height: auto;" />
          </div>
          <div>
            <span class="badge badge-navy" style="margin-bottom: 1rem;">Cabinets de Consultation</span>
            <h2>Haute technologie médicale et bienveillance.</h2>
            <p style="color: var(--color-muted); line-height: 1.65; margin: 1rem 0 1.5rem 0;">
              Chaque cabinet de consultation a été pensé pour le confort du patient et l'efficacité du médecin : table d'examen ergonomique motorisée, poste de désinfection avec vasque marbre et robinetterie laiton, toise et balance de haute précision.
            </p>
            <ul style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem;">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Tables d'examen médicales ergonomiques multipositions
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Électrocardiogramme (ECG) numérique 12 dérivations intégré
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-sage); font-weight: 700;">✓</span> Matériel de petite chirurgie et sutures stériles à usage unique
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. LES STANDARDS DE QUALITÉ SUISSES -->
    <section class="section section-cloud">
      <div class="container">
        <div class="section-header text-center">
          <div class="eyebrow">Rigueur & Déontologie</div>
          <h2>Conçu selon les plus hauts standards sanitaires suisses.</h2>
          <p class="lead" style="margin-top: 0.75rem;">
            Planaxis applique une politique stricte d'hygiène, de protection des données médicales et de confort d'usage.
          </p>
        </div>

        <div class="grid-3">
          <div style="background: var(--color-white); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: var(--color-sage-light); color: var(--color-sage-dark); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Hygiène & Asepsie Rigoureuses</h3>
            <p style="color: var(--color-muted); font-size: 0.9rem; line-height: 1.6;">
              Protocoles de désinfection stricts entre chaque patient, ventilation contrôlée et utilisation d'instruments médicaux sécurisés conformes aux normes fédérales.
            </p>
          </div>

          <div style="background: var(--color-white); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: var(--color-sand-light); color: var(--color-sand-dark); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Conformité LPD & HIN</h3>
            <p style="color: var(--color-muted); font-size: 0.9rem; line-height: 1.6;">
              Vos dossiers médicaux sont hébergés en Suisse sur des serveurs sécurisés certifiés santé. Nos communications professionnelles transitent par le réseau sécurisé HIN.
            </p>
          </div>

          <div style="background: var(--color-white); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: var(--color-cloud); color: var(--color-navy); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Accessibilité Universelle & PMR</h3>
            <p style="color: var(--color-muted); font-size: 0.9rem; line-height: 1.6;">
              Accès de plain-pied intégral pour les personnes à mobilité réduite et les poussettes. Places de parc réservées directement devant la porte du cabinet.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Visite & Rendez-vous -->
    <section class="section" style="text-align: center;">
      <div class="container" style="max-width: 720px;">
        <div class="eyebrow" style="margin-left: auto; margin-right: auto;">Prise de Contact</div>
        <h2>Venez découvrir le cabinet Planaxis à Gland.</h2>
        <p class="lead" style="margin-bottom: 2rem;">
          Nos médecins généralistes et pédiatres vous reçoivent du lundi au samedi.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="/rendez-vous" class="btn btn-primary btn-lg">Prendre rendez-vous en ligne</a>
          <a href="/contact-acces" class="btn btn-secondary btn-lg">Plan d'accès & Stationnement</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
    <script src="/app.js"></script>
  </body>
  </html>
  `;
}
