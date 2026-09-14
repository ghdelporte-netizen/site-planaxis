// Module interactif de prise de rendez-vous en ligne — Planaxis

import { specialties } from '../data/specialties.js';
import { doctors } from '../data/doctors.js';

export function renderBookingWizard(preselectedSpecialty = null, preselectedDoctor = null) {
  const specialtiesOptions = specialties.map((s, idx) => `
    <div class="option-card ${preselectedSpecialty === s.slug || idx === 0 ? 'selected' : ''}" 
         data-specialty-id="${s.slug}" onclick="window.selectBookingSpecialty('${s.slug}')">
      <div class="option-card-title">${s.title}</div>
      <div class="option-card-desc">${s.shortDesc}</div>
      <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
        <span class="badge badge-sage" style="font-size: 0.72rem;">${s.delay}</span>
        <span class="badge" style="font-size: 0.72rem;">${s.lamal}</span>
      </div>
    </div>
  `).join('');

  const doctorsOptions = [
    `
    <div class="option-card selected" data-doctor-id="any" onclick="window.selectBookingDoctor('any')">
      <div class="option-card-title">Premier praticien disponible</div>
      <div class="option-card-desc">Idéal pour une consultation rapide sans préférence de médecin.</div>
      <span class="badge badge-sage" style="margin-top: 0.5rem; font-size: 0.72rem;">Recommandé · Moins d'attente</span>
    </div>
    `,
    ...doctors.map(d => `
    <div class="option-card ${preselectedDoctor === d.slug ? 'selected' : ''}" 
         data-doctor-id="${d.slug}" onclick="window.selectBookingDoctor('${d.slug}')">
      <div class="option-card-title">${d.name}</div>
      <div class="option-card-desc">${d.title}</div>
      <span class="badge badge-sand" style="margin-top: 0.5rem; font-size: 0.72rem;">Prochain RDV : ${d.nextAvailable}</span>
    </div>
    `)
  ].join('');

  return `
  <div class="booking-card" id="bookingWizardApp">
    <!-- Indicateur d'étapes -->
    <div class="booking-progress">
      <div class="booking-progress-step active" id="stepIndicator1">
        <div class="step-indicator">1</div>
        <span class="step-label">Motif</span>
      </div>
      <div class="booking-progress-step" id="stepIndicator2">
        <div class="step-indicator">2</div>
        <span class="step-label">Praticien</span>
      </div>
      <div class="booking-progress-step" id="stepIndicator3">
        <div class="step-indicator">3</div>
        <span class="step-label">Date & Heure</span>
      </div>
      <div class="booking-progress-step" id="stepIndicator4">
        <div class="step-indicator">4</div>
        <span class="step-label">Coordonnées</span>
      </div>
    </div>

    <!-- Étape 1 : Choix du Motif -->
    <div class="booking-step-content active" id="bookingStep1">
      <div class="eyebrow">Étape 1 sur 4</div>
      <h3 style="margin-bottom: 0.5rem;">Sélectionnez votre motif de consultation</h3>
      <p style="color: var(--color-muted); font-size: 0.95rem;">Toutes nos consultations sont reconnues et remboursées par l'assurance de base (AOS / LAMal).</p>

      <div class="option-grid">
        ${specialtiesOptions}
      </div>

      <div style="display: flex; justify-content: flex-end; margin-top: 2rem;">
        <button class="btn btn-primary" onclick="window.goToBookingStep(2)">
          <span>Continuer vers le choix du praticien</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <!-- Étape 2 : Choix du Praticien -->
    <div class="booking-step-content" id="bookingStep2">
      <div class="eyebrow">Étape 2 sur 4</div>
      <h3 style="margin-bottom: 0.5rem;">Choisissez votre médecin</h3>
      <p style="color: var(--color-muted); font-size: 0.95rem;">Nos trois médecins FMH exercent en cabinet coordonné à Gland.</p>

      <div class="option-grid">
        ${doctorsOptions}
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
        <button class="btn btn-secondary" onclick="window.goToBookingStep(1)">Retour</button>
        <button class="btn btn-primary" onclick="window.goToBookingStep(3)">
          <span>Choisir un créneau</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <!-- Étape 3 : Date & Heure -->
    <div class="booking-step-content" id="bookingStep3">
      <div class="eyebrow">Étape 3 sur 4</div>
      <h3 style="margin-bottom: 0.5rem;">Sélectionnez votre jour et votre heure</h3>
      <p style="color: var(--color-muted); font-size: 0.95rem;">Créneaux en temps réel au cabinet Planaxis de Gland.</p>

      <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.5rem;">
        <button class="btn btn-sm btn-primary date-pill selected" onclick="window.selectBookingDate(this, 'Aujourd\\'hui')">Aujourd'hui (14 sept.)</button>
        <button class="btn btn-sm btn-secondary date-pill" onclick="window.selectBookingDate(this, 'Demain')">Demain (15 sept.)</button>
        <button class="btn btn-sm btn-secondary date-pill" onclick="window.selectBookingDate(this, 'Mercredi')">Mercredi (16 sept.)</button>
        <button class="btn btn-sm btn-secondary date-pill" onclick="window.selectBookingDate(this, 'Jeudi')">Jeudi (17 sept.)</button>
        <button class="btn btn-sm btn-secondary date-pill" onclick="window.selectBookingDate(this, 'Vendredi')">Vendredi (18 sept.)</button>
      </div>

      <div style="margin-top: 1.5rem;">
        <div style="font-weight: 700; color: var(--color-navy); font-size: 0.9rem; margin-bottom: 0.5rem;">Matinée</div>
        <div class="time-slots-grid">
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '08:40')">08:40</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '09:20')">09:20</button>
          <button class="time-slot-btn selected" onclick="window.selectBookingTime(this, '10:00')">10:00</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '10:40')">10:40</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '11:20')">11:20</button>
        </div>
      </div>

      <div style="margin-top: 1.5rem;">
        <div style="font-weight: 700; color: var(--color-navy); font-size: 0.9rem; margin-bottom: 0.5rem;">Après-midi</div>
        <div class="time-slots-grid">
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '14:00')">14:00</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '14:40')">14:40</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '15:20')">15:20</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '16:00')">16:00</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '16:40')">16:40</button>
          <button class="time-slot-btn" onclick="window.selectBookingTime(this, '17:20')">17:20</button>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
        <button class="btn btn-secondary" onclick="window.goToBookingStep(2)">Retour</button>
        <button class="btn btn-primary" onclick="window.goToBookingStep(4)">
          <span>Renseigner mes coordonnées</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <!-- Étape 4 : Coordonnées du Patient -->
    <div class="booking-step-content" id="bookingStep4">
      <div class="eyebrow">Étape 4 sur 4</div>
      <h3 style="margin-bottom: 0.5rem;">Informations du patient</h3>
      <p style="color: var(--color-muted); font-size: 0.95rem;">Vos données sont protégées conformément à la Loi fédérale sur la Protection des Données (LPD).</p>

      <form id="bookingForm" onsubmit="window.handleBookingSubmit(event)" style="margin-top: 1.5rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label" for="ptFirstName">Prénom *</label>
            <input type="text" id="ptFirstName" class="form-control" placeholder="ex. Alexandre" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="ptLastName">Nom *</label>
            <input type="text" id="ptLastName" class="form-control" placeholder="ex. De RHAM" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label" for="ptPhone">Numéro de téléphone mobile *</label>
            <input type="tel" id="ptPhone" class="form-control" placeholder="+41 79 123 45 67" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="ptEmail">Adresse e-mail *</label>
            <input type="email" id="ptEmail" class="form-control" placeholder="alexandre@exemple.ch" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label" for="ptInsurance">Caisse d'assurance maladie suisse (LAMal)</label>
            <input type="text" id="ptInsurance" class="form-control" placeholder="ex. Groupe Mutuel, Helsana, Swica, CSS..." />
          </div>
          <div class="form-group">
            <label class="form-label" for="ptBirth">Date de naissance</label>
            <input type="date" id="ptBirth" class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="ptNote">Précision pour le médecin (facultatif)</label>
          <input type="text" id="ptNote" class="form-control" placeholder="ex. Renouvellement traitement, bilan annuel, douleur récente..." />
        </div>

        <div style="margin: 1.25rem 0; padding: 0.85rem; border-radius: var(--radius-sm); background: var(--color-cloud); border: 1px solid var(--color-border); font-size: 0.8125rem; color: var(--color-muted);">
          🔒 <strong>Garantie médicale suisse :</strong> Un SMS et un e-mail de confirmation instantanée vous seront immédiatement adressés. Annulation sans frais possible jusqu'à 24h avant la consultation.
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
          <button type="button" class="btn btn-secondary" onclick="window.goToBookingStep(3)">Retour</button>
          <button type="submit" class="btn btn-primary btn-lg">
            <span>Confirmer mon rendez-vous</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </form>
    </div>

    <!-- Écran de Confirmation Succès -->
    <div class="booking-step-content" id="bookingSuccess" style="text-align: center; padding: 2rem 1rem;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-sage-light); color: var(--color-sage-dark); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>

      <div class="eyebrow" style="color: var(--color-sage);">Rendez-vous Confirmé</div>
      <h2 style="margin-bottom: 0.75rem;">Votre consultation est enregistrée</h2>
      <p style="color: var(--color-muted); max-width: 520px; margin: 0 auto 1.75rem auto;">
        Un SMS et un courriel de confirmation viennent d'être envoyés à votre attention avec les indications d'accès au cabinet de Gland.
      </p>

      <div id="bookingSummaryBox" style="background: var(--color-cloud); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.5rem; max-width: 480px; margin: 0 auto 2rem auto; text-align: left;">
        <!-- Injecté dynamiquement par JS -->
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/" class="btn btn-secondary">Retour à l'accueil</a>
        <button class="btn btn-primary" onclick="alert('Rendez-vous synchronisé avec votre calendrier !')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>Ajouter à mon agenda (iCal / Google)</span>
        </button>
      </div>
    </div>
  </div>
  `;
}
