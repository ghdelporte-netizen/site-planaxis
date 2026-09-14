// Page d'Accueil de PLANAXIS — Gland (Vaud, Suisse)

import { centerInfo } from '../data/center.js';
import { specialties } from '../data/specialties.js';
import { doctors } from '../data/doctors.js';
import { faqItems } from '../data/faq.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export function renderHomePage() {
  const specialtiesCards = specialties.slice(0, 6).map(s => `
    <div class="service-card">
      <div class="service-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.shortDesc}</p>
      
      <div class="service-points">
        ${s.highlights.slice(0, 2).map(h => `
          <div class="service-point-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>

      <div class="service-footer">
        <span class="badge badge-sage" style="font-size: 0.75rem;">${s.lamal}</span>
        <a href="/rendez-vous" class="link-arrow">
          <span>Réserver</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  const doctorsCards = doctors.map(d => `
    <div class="doctor-card">
      <div class="doctor-photo-wrap">
        <img src="${d.photo}" alt="${d.name}" loading="lazy" />
        <span class="badge badge-sand doctor-specialty-tag">Spécialiste FMH</span>
      </div>
      <div class="doctor-content">
        <h3 class="doctor-name">${d.name}</h3>
        <div class="doctor-sub">${d.role}</div>
        <p class="doctor-bio">${d.bio}</p>

        <div class="doctor-tags">
          ${d.specialties.map(tag => `<span class="doctor-tag">${tag}</span>`).join('')}
        </div>

        <div style="margin-top: auto; padding-top: 1.25rem; border-top: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.775rem; color: var(--color-sage-dark); font-weight: 600;">● ${d.nextAvailable}</span>
          <a href="/rendez-vous" class="btn btn-primary btn-sm">Prendre RDV</a>
        </div>
      </div>
    </div>
  `).join('');

  const faqAccordion = faqItems.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-bottom: 0.75rem; overflow: hidden;">
      <button class="faq-question-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}" style="width: 100%; text-align: left; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; font-weight: 700; color: var(--color-navy); font-size: 1.05rem;">
        <span>${item.question}</span>
        <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.2s; flex-shrink: 0;"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-answer" style="padding: 0 1.5rem 1.25rem 1.5rem; font-size: 0.95rem; color: var(--color-muted); line-height: 1.6; display: ${idx === 0 ? 'block' : 'none'};">
        ${item.answer}
      </div>
    </div>
  `).join('');

  return `
  <!DOCTYPE html>
  <html lang="fr-CH">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PLANAXIS · Centre Médical & Soins Ambulatoires · Gland (Vaud)</title>
    <meta name="description" content="Planaxis est un cabinet médical de référence à Gland (Canton de Vaud) : médecine générale, pédiatrie, soins non programmés et urgences ambulatoires. Prise en charge 100% LAMal." />
    <link rel="icon" type="image/svg+xml" href="/assets/logo/planaxis-shield.svg" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderNavbar('accueil')}

    <!-- 1. HERO SPECTACULAIRE AVEC PHOTOGRAPHIE RÉELLE DU CABINET -->
    <section class="hero-section">
      <div class="container-wide">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="eyebrow">Cabinet Médical · Gland (Canton de Vaud)</div>
            <h1 class="hero-title">
              Une médecine suisse de confiance, <span class="highlight-sage">humaine et accessible.</span>
            </h1>
            <p class="hero-desc">
              Bienvenue chez <strong>PLANAXIS</strong>. Un environnement médical contemporain et chaleureux, réunissant des praticiens FMH en médecine générale, pédiatrie et soins non programmés, au cœur de La Côte.
            </p>

            <div class="hero-ctas">
              <a href="/rendez-vous" class="btn btn-primary btn-lg">
                <span>Prendre rendez-vous en ligne</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/centre" class="btn btn-secondary btn-lg">
                <span>Découvrir le cabinet de Gland</span>
              </a>
            </div>

            <!-- Bar de réassurance suisse -->
            <div class="hero-trust-bar">
              <div class="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>100% Remboursé LAMal / AOS</span>
              </div>
              <div class="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Spécialistes diplômés FMH</span>
              </div>
              <div class="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Gare de Gland à 3 min</span>
              </div>
            </div>
          </div>

          <!-- Média Hero avec photo authentique du comptoir en chêne et marbre Calacatta -->
          <div class="hero-media">
            <div class="hero-card-image">
              <img src="/assets/photos/planaxis-reception.jpg" alt="Accueil du cabinet médical Planaxis à Gland, agencement chêne clair et marbre" />
            </div>

            <!-- Badge flottant 1 : Disponibilité immédiate -->
            <div class="hero-floating-badge">
              <div class="badge-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div class="badge-text-title">Soins Sans Attente</div>
                <div class="badge-text-sub">Créneaux du jour disponibles à Gland</div>
              </div>
            </div>

            <!-- Badge flottant 2 : Localisation Canton de Vaud -->
            <div class="hero-location-badge">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Gland · Canton de Vaud</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SECTION : L'EXPÉRIENCE PLANAXIS (Les 6 Différenciants) -->
    <section class="section section-cloud">
      <div class="container">
        <div class="section-header text-center">
          <div class="eyebrow">Le Nouveau Standard Médical</div>
          <h2>La médecine peut être exigeante sans être compliquée.</h2>
          <p class="lead" style="margin-top: 1rem;">
            Planaxis redéfinit le cabinet médical suisse de proximité en combinant une organisation sans lourdeur administrative, une écoute attentive et des technologies utiles.
          </p>
        </div>

        <div class="grid-3">
          <div class="service-card">
            <div class="service-icon-wrapper" style="background-color: var(--color-sand-light); color: var(--color-sand-dark);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 class="service-title">Cabinet à Taille Humaine</h3>
            <p class="service-desc">
              Chaque centre Planaxis est volontairement limité à 3 médecins par site. Pas de gigantisme hospitalier, mais des visages familiers et un suivi personnalisé.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon-wrapper" style="background-color: var(--color-sage-light); color: var(--color-sage-dark);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 class="service-title">Accès Simple et Rapide</h3>
            <p class="service-desc">
              Prise de rendez-vous en ligne 24h/24 en 3 clics, créneaux ouverts le jour même pour les imprévus et ponctualité rigoureuse.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3 class="service-title">Atmosphère Apaisante</h3>
            <p class="service-desc">
              Finies les salles d'attente anxiogènes. Nos espaces sont conçus en bois clair naturel, pierre lumineuse et mur végétalisé pour votre sérénité.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3 class="service-title">Plateau Technique & Analyses &lt; 3h</h3>
            <p class="service-desc">
              Électrocardiogramme haute résolution, prélèvements sanguins et résultats biologiques sous 3 heures grâce à notre partenariat laboratoire.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon-wrapper" style="background-color: var(--color-sand-light); color: var(--color-sand-dark);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 class="service-title">Temps Médical Protégé</h3>
            <p class="service-desc">
              Nos praticiens utilisent des outils numériques d'assistance pour alléger les tâches administratives et consacrer 100 % de leur temps à votre écoute.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon-wrapper" style="background-color: var(--color-terracotta-light); color: var(--color-terracotta);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="service-title">Exigence & Prise en Charge LAMal</h3>
            <p class="service-desc">
              Rigueur médicale suisse, médecins diplômés FMH, télétransmission directe Medidata et conformité stricte aux lois fédérales LAMal et LPD.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SECTION : NOS SPÉCIALITÉS & PRESTATIONS -->
    <section class="section" id="prestations">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1.5rem;">
          <div style="max-width: 620px;">
            <div class="eyebrow">Offre de Soins Pluridisciplinaire</div>
            <h2>Une prise en charge médicale complète à Gland.</h2>
            <p class="lead" style="margin-top: 0.75rem;">
              Des consultations de premier recours aux soins non programmés, nos praticiens répondent aux besoins de santé de toute la famille.
            </p>
          </div>
          <a href="/prestations" class="btn btn-secondary">
            <span>Voir toutes les prestations</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div class="grid-3">
          ${specialtiesCards}
        </div>
      </div>
    </section>

    <!-- 4. SECTION : LE CENTRE DE GLAND (Visite des Espaces Réels) -->
    <section class="section section-cloud" id="centre">
      <div class="container">
        <div class="section-header text-center">
          <div class="eyebrow">Le Cabinet de Gland</div>
          <h2>Un environnement pensé pour votre bien-être.</h2>
          <p class="lead" style="margin-top: 0.75rem;">
            Découvrez nos espaces conçus comme la rencontre d'une clinique de haute précision et d'un hôtel contemporain : lumière naturelle, marbre noble, chêne clair et végétalisation.
          </p>
        </div>

        <div class="gallery-grid">
          <!-- Grande photo : Accueil & Banque d'accueil courbée en chêne & marbre -->
          <div class="gallery-item large">
            <img src="/assets/photos/planaxis-reception.jpg" alt="Banque d'accueil courbée en chêne clair et marbre Calacatta du cabinet Planaxis à Gland" />
            <div class="gallery-caption">
              <div class="gallery-caption-title">Espace d'Accueil & Réception</div>
              <div class="gallery-caption-sub">Comptoir sur-mesure en chêne clair, marbre veiné et luminaires dorés</div>
            </div>
          </div>

          <!-- Photo 2 : Salle d'attente avec mur végétal luxuriant -->
          <div class="gallery-item">
            <img src="/assets/photos/planaxis-waiting-room.jpg" alt="Salle d'attente avec mur végétal, fauteuils scandinaves et espace enfants" />
            <div class="gallery-caption">
              <div class="gallery-caption-title">Espace d'Attente Végétalisé</div>
              <div class="gallery-caption-sub">Mur végétal vivant, assises confortables et coin enfants dédié</div>
            </div>
          </div>

          <!-- Photo 3 : Salle de consultation avec mobilier moderne et lit d'examen -->
          <div class="gallery-item">
            <img src="/assets/photos/planaxis-consultation-modern.jpg" alt="Salle de consultation médicale moderne avec plateau d'examen, hygiène clinique et lumière naturelle" />
            <div class="gallery-caption">
              <div class="gallery-caption-title">Salles de Consultation Médicale</div>
              <div class="gallery-caption-sub">Plateau d'examen moderne, hygiène clinique et lumière naturelle</div>
            </div>
          </div>
        </div>

        <!-- Chiffres clés du centre -->
        <div style="margin-top: 3.5rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center;">
          <div style="background: var(--color-white); padding: 1.75rem 1rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="font-size: 2.25rem; font-weight: 800; color: var(--color-navy); line-height: 1;">3</div>
            <div style="font-weight: 700; font-size: 0.95rem; margin-top: 0.5rem; color: var(--color-navy);">Médecins Spécialistes</div>
            <div style="font-size: 0.8rem; color: var(--color-muted);">Structure humaine sans bureaucratie</div>
          </div>

          <div style="background: var(--color-white); padding: 1.75rem 1rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="font-size: 2.25rem; font-weight: 800; color: var(--color-sage); line-height: 1;">&lt; 3h</div>
            <div style="font-weight: 700; font-size: 0.95rem; margin-top: 0.5rem; color: var(--color-navy);">Analyses Biologiques</div>
            <div style="font-size: 0.8rem; color: var(--color-muted);">Résultats sanguins ultra-rapides</div>
          </div>

          <div style="background: var(--color-white); padding: 1.75rem 1rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="font-size: 2.25rem; font-weight: 800; color: var(--color-sand-dark); line-height: 1;">100%</div>
            <div style="font-weight: 700; font-size: 0.95rem; margin-top: 0.5rem; color: var(--color-navy);">Prise en Charge LAMal</div>
            <div style="font-size: 0.8rem; color: var(--color-muted);">Toutes caisses suisses reconnues</div>
          </div>

          <div style="background: var(--color-white); padding: 1.75rem 1rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
            <div style="font-size: 2.25rem; font-weight: 800; color: var(--color-navy); line-height: 1;">3 min</div>
            <div style="font-weight: 700; font-size: 0.95rem; margin-top: 0.5rem; color: var(--color-navy);">De la Gare CFF</div>
            <div style="font-size: 0.8rem; color: var(--color-muted);">Parkings patients au pied du centre</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. SECTION : LES MÉDECINS -->
    <section class="section" id="medecins">
      <div class="container">
        <div class="section-header text-center">
          <div class="eyebrow">Corps Médical FMH</div>
          <h2>Une équipe dédiée à votre santé.</h2>
          <p class="lead" style="margin-top: 0.75rem;">
            Des praticiens suisses chevronnés, formés dans les meilleurs centres universitaires (CHUV, HUG), animés par le souci de l'écoute et de l'excellence diagnostique.
          </p>
        </div>

        <div class="grid-3">
          ${doctorsCards}
        </div>
      </div>
    </section>

    <!-- 6. SECTION : PARCOURS PATIENT EN 4 ÉTAPES -->
    <section class="section section-cloud">
      <div class="container">
        <div class="section-header text-center">
          <div class="eyebrow">Simplicité & Fluidité</div>
          <h2>Votre parcours patient, en toute transparence.</h2>
          <p class="lead" style="margin-top: 0.75rem;">
            De la prise de rendez-vous en ligne jusqu'à la coordination de vos soins, chaque étape a été conçue pour éliminer le stress.
          </p>
        </div>

        <div class="journey-grid">
          <div class="journey-step">
            <div class="journey-step-num">01</div>
            <h3 class="journey-step-title">Choisir sa consultation</h3>
            <p class="journey-step-desc">
              Sélectionnez votre motif (médecine générale, pédiatrie, soins non programmés ou téléconsultation) selon vos besoins du moment.
            </p>
          </div>

          <div class="journey-step">
            <div class="journey-step-num">02</div>
            <h3 class="journey-step-title">Prendre RDV en ligne 24/7</h3>
            <p class="journey-step-desc">
              Choisissez votre créneau horaire en temps réel. Confirmation immédiate par SMS et e-mail avec ajout automatique à votre agenda.
            </p>
          </div>

          <div class="journey-step">
            <div class="journey-step-num">03</div>
            <h3 class="journey-step-title">Être accueilli à Gland</h3>
            <p class="journey-step-desc">
              Un accueil chaleureux et sans attente dans un espace végétalisé et apaisant. Stationnement patient réservé sur place.
            </p>
          </div>

          <div class="journey-step">
            <div class="journey-step-num">04</div>
            <h3 class="journey-step-title">Bénéficier de soins coordonnés</h3>
            <p class="journey-step-desc">
              Diagnostic immédiat (ECG, biologie express &lt; 3h), compte-rendu clair et transmission directe LAMal à votre assurance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. SECTION : LOCALISATION & ACCÈS À GLAND -->
    <section class="section" id="acces">
      <div class="container">
        <div class="location-grid">
          <div class="location-info-card">
            <div class="eyebrow">Localisation & Stationnement</div>
            <h2>Accéder au cabinet de Gland.</h2>
            <p style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0.5rem;">
              Situé à mi-chemin entre Genève et Lausanne, le centre Planaxis est idéalement desservi au cœur de la commune de Gland.
            </p>

            <div class="location-details-list">
              <div class="location-item">
                <div class="location-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div class="location-item-title">Adresse</div>
                  <div class="location-item-text">2 Rue du Nord, 1196 Gland (Canton de Vaud)</div>
                </div>
              </div>

              <div class="location-item">
                <div class="location-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div>
                  <div class="location-item-title">En Train (CFF)</div>
                  <div class="location-item-text">Gare CFF de Gland à 3 minutes à pied (Lignes directes RE / S-Bahn Genève et Lausanne).</div>
                </div>
              </div>

              <div class="location-item">
                <div class="location-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <div>
                  <div class="location-item-title">En Voiture & Parking</div>
                  <div class="location-item-text">Autoroute A1, Sortie 12 Gland (2 min). Places de stationnement gratuites réservées aux patients et accès PMR.</div>
                </div>
              </div>

              <div class="location-item">
                <div class="location-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div class="location-item-title">Horaires d'Ouverture</div>
                  <div class="location-item-text">Lundi – Vendredi : 08h00 – 18h30<br/>Samedi : 09h00 – 13h00 (Urgences ambulatoires)</div>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="https://maps.google.com/?q=2+Rue+du+Nord+1196+Gland" target="_blank" rel="noopener" class="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                <span>Itinéraire Google Maps</span>
              </a>
              <a href="tel:+41223648000" class="btn btn-secondary">
                <span>022 364 80 00</span>
              </a>
            </div>
          </div>

          <!-- Carte stylisée Planaxis Gland -->
          <div class="map-container">
            <div class="map-canvas" style="background: #E8ECE9; padding: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
              <div style="width: 72px; height: 72px; margin-bottom: 1.5rem; filter: drop-shadow(0 4px 10px rgba(38,57,68,0.15));">
                <img src="/assets/logo/planaxis-shield.svg" alt="Planaxis Shield" width="72" height="72" />
              </div>
              <h3 style="color: var(--color-navy); margin-bottom: 0.5rem;">Centre Médical PLANAXIS</h3>
              <p style="color: var(--color-muted); font-size: 0.9rem; max-width: 320px;">
                2 Rue du Nord<br/>
                1196 Gland · District de Nyon
              </p>
              <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem;">
                <span class="badge badge-sage">Gare CFF : 250m</span>
                <span class="badge badge-navy">A1 Sortie 12 : 800m</span>
              </div>
              <a href="https://maps.google.com/?q=2+Rue+du+Nord+1196+Gland" target="_blank" rel="noopener" class="btn btn-white btn-sm" style="margin-top: 1.5rem;">
                Ouvrir dans l'application Carte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. SECTION : FOIRE AUX QUESTIONS (FAQ) -->
    <section class="section section-cloud">
      <div class="container" style="max-width: 860px;">
        <div class="section-header text-center">
          <div class="eyebrow">Réassurance & Clarté</div>
          <h2>Questions fréquentes de nos patients.</h2>
          <p class="lead" style="margin-top: 0.75rem;">
            Tout ce qu'il faut savoir sur vos remboursements LAMal, la tarification et le déroulement de votre consultation à Gland.
          </p>
        </div>

        <div class="faq-list">
          ${faqAccordion}
        </div>
      </div>
    </section>

    <!-- 9. SECTION : BANNIÈRE D'URGENCE AMBULATOIRE -->
    <section class="section" style="padding-top: 0; padding-bottom: 0;">
      <div class="container">
        <div style="background: linear-gradient(135deg, #263944 0%, #1b2931 100%); border-radius: var(--radius-xl); padding: clamp(2.5rem, 5vw, 4rem); color: var(--color-white); display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2.5rem; align-items: center; box-shadow: var(--shadow-lg);">
          <div>
            <span class="badge badge-terracotta" style="margin-bottom: 1rem;">Soins Non Programmés</span>
            <h2 style="color: var(--color-white); margin-bottom: 1rem;">Une urgence médicale qui ne peut attendre ?</h2>
            <p style="color: rgba(255,255,255,0.8); font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.75rem;">
              Plaies à suturer, brûlures, traumatismes du sport, infections aiguës : notre permanence ambulatoire vous accueille le jour même à Gland sans les délais interminables des services hospitaliers.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="tel:+41223648000" class="btn btn-terracotta btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Appeler le cabinet : 022 364 80 00</span>
              </a>
              <a href="/rendez-vous" class="btn btn-outline-white btn-lg">
                <span>Créneau express en ligne</span>
              </a>
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-lg); padding: 1.75rem;">
            <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-sand); letter-spacing: 0.05em; margin-bottom: 0.5rem;">Orientation Urgences en Suisse</div>
            <div style="font-size: 0.95rem; line-height: 1.5; color: rgba(255,255,255,0.85); margin-bottom: 1.25rem;">
              Pour une détresse vitale immédiate (malaise cardiaque, perte de connaissance), contactez sans délai le <strong>144</strong>.
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem;">
              <div style="display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span>Centrale Urgences Santé</span>
                <strong style="color: var(--color-sand);">144</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span>Médecins de garde Vaud</span>
                <strong style="color: var(--color-sand);">0848 133 133</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 0.4rem 0;">
                <span>Pharmacie de garde</span>
                <strong style="color: var(--color-sand);">0848 024 024</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. CTA FINAL : PRISE DE RENDEZ-VOUS -->
    <section class="section" style="text-align: center;">
      <div class="container" style="max-width: 760px;">
        <div class="eyebrow" style="margin-left: auto; margin-right: auto;">Prise de Rendez-vous 24/7</div>
        <h2 style="margin-bottom: 1rem;">Besoin d'une consultation médicale à Gland ?</h2>
        <p class="lead" style="margin-bottom: 2.25rem;">
          Nos médecins vous accueillent du lundi au samedi. Réservez votre créneau en ligne en quelques secondes avec confirmation immédiate.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="/rendez-vous" class="btn btn-primary btn-lg">
            <span>Prendre rendez-vous maintenant</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="tel:+41223648000" class="btn btn-secondary btn-lg">
            <span>022 364 80 00</span>
          </a>
        </div>
      </div>
    </section>

    ${renderFooter()}

    <script src="/app.js"></script>
  </body>
  </html>
  `;
}
