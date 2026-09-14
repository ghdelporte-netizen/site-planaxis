// ==========================================================================
// PLANAXIS — SCRIPTS D'INTERACTION CLIENT-SIDE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
});

// 1. Navigation Sticky & Drawer Mobile
function initNavbar() {
  const header = document.getElementById('siteHeader');
  const toggleBtn = document.getElementById('navToggleBtn');
  const drawer = document.getElementById('mobileDrawer');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le drawer au clic sur un lien
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// 2. Accordéon FAQ
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-question-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isExpanded = item.classList.contains('open');

      // Fermer les autres
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        const otherBtn = other.querySelector('.faq-question-btn');
        const otherAns = other.querySelector('.faq-answer');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAns) otherAns.style.display = 'none';
      });

      // Basculer l'actuel
      if (!isExpanded) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.display = 'block';
      } else {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.display = 'none';
      }
    });
  });
}

// 3. Module interactif de Prise de Rendez-vous (Global Window Functions)
window.bookingState = {
  step: 1,
  specialty: 'Médecine Générale & Premier Recours',
  doctor: 'Premier praticien disponible',
  date: "Aujourd'hui",
  time: '10:00',
  patient: {}
};

window.selectBookingSpecialty = function(slug) {
  document.querySelectorAll('#bookingStep1 .option-card').forEach(card => card.classList.remove('selected'));
  const target = document.querySelector(`#bookingStep1 .option-card[data-specialty-id="${slug}"]`);
  if (target) {
    target.classList.add('selected');
    const title = target.querySelector('.option-card-title').innerText;
    window.bookingState.specialty = title;
  }
};

window.selectBookingDoctor = function(slug) {
  document.querySelectorAll('#bookingStep2 .option-card').forEach(card => card.classList.remove('selected'));
  const target = document.querySelector(`#bookingStep2 .option-card[data-doctor-id="${slug}"]`);
  if (target) {
    target.classList.add('selected');
    const title = target.querySelector('.option-card-title').innerText;
    window.bookingState.doctor = title;
  }
};

window.selectBookingDate = function(btn, dateStr) {
  document.querySelectorAll('.date-pill').forEach(b => {
    b.classList.remove('btn-primary', 'selected');
    b.classList.add('btn-secondary');
  });
  btn.classList.add('btn-primary', 'selected');
  btn.classList.remove('btn-secondary');
  window.bookingState.date = dateStr;
};

window.selectBookingTime = function(btn, timeStr) {
  document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  window.bookingState.time = timeStr;
};

window.goToBookingStep = function(stepNumber) {
  window.bookingState.step = stepNumber;

  // Mettre à jour les indicateurs
  for (let i = 1; i <= 4; i++) {
    const indicator = document.getElementById(`stepIndicator${i}`);
    if (indicator) {
      if (i < stepNumber) {
        indicator.classList.remove('active');
        indicator.classList.add('completed');
      } else if (i === stepNumber) {
        indicator.classList.add('active');
        indicator.classList.remove('completed');
      } else {
        indicator.classList.remove('active', 'completed');
      }
    }
  }

  // Afficher le bon contenu d'étape
  document.querySelectorAll('.booking-step-content').forEach(stepContent => {
    stepContent.classList.remove('active');
  });

  const currentStep = document.getElementById(`bookingStep${stepNumber}`);
  if (currentStep) {
    currentStep.classList.add('active');
  }

  // Scroll fluide vers le haut de la carte
  const wizard = document.getElementById('bookingWizardApp');
  if (wizard) {
    wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.handleBookingSubmit = function(event) {
  event.preventDefault();

  const firstName = document.getElementById('ptFirstName').value;
  const lastName = document.getElementById('ptLastName').value;
  const phone = document.getElementById('ptPhone').value;
  const email = document.getElementById('ptEmail').value;
  const insurance = document.getElementById('ptInsurance').value || 'Assurance de base (LAMal)';

  window.bookingState.patient = { firstName, lastName, phone, email, insurance };

  // Générer le récapitulatif
  const summaryBox = document.getElementById('bookingSummaryBox');
  if (summaryBox) {
    const refCode = 'PLX-' + Math.floor(100000 + Math.random() * 900000);
    summaryBox.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-border); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-sage-dark); text-transform: uppercase;">N° de Référence : ${refCode}</span>
        <span class="badge badge-sage">Confirmé</span>
      </div>
      <div style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Motif :</strong> ${window.bookingState.specialty}</div>
      <div style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Praticien :</strong> ${window.bookingState.doctor}</div>
      <div style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Date & Heure :</strong> ${window.bookingState.date} à ${window.bookingState.time}</div>
      <div style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Patient :</strong> ${firstName} ${lastName}</div>
      <div style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Lieu :</strong> Planaxis · Rue du Nord 2, 1196 Gland</div>
      <div style="font-size: 0.85rem; color: var(--color-muted); margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--color-border);">
        Prise en charge : 100% LAMal (${insurance}). Tiers payant direct Medidata.
      </div>
    `;
  }

  // Masquer les étapes et afficher l'écran de succès
  document.querySelectorAll('.booking-step-content').forEach(s => s.classList.remove('active'));
  const successScreen = document.getElementById('bookingSuccess');
  if (successScreen) {
    successScreen.classList.add('active');
    successScreen.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
