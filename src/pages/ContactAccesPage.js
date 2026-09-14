// Page : Accès, Contact & Urgences — Planaxis

import { centerInfo } from '../data/center.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export function renderContactAccesPage() {
  const scheduleRows = centerInfo.schedule.map(s => `
    <tr style="border-bottom: 1px solid var(--color-border);">
      <td style="padding: 0.85rem 0; font-weight: 600; color: var(--color-navy);">${s.day}</td>
      <td style="padding: 0.85rem 0; text-align: right; color: ${s.status === 'closed' ? 'var(--color-terracotta)' : 'var(--color-graphite)'}; font-weight: ${s.status === 'open' ? '500' : '600'};">
        ${s.hours}
      </td>
    </tr>
  `).join('');

  return `
  <!DOCTYPE html>
  <html lang="fr-CH">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accès, Contact & Urgences · Centre Médical PLANAXIS Gland</title>
    <meta name="description" content="Toutes les coordonnées du cabinet Planaxis à Gland (Vaud) : plan d'accès, gare CFF à 3 min, autoroute A1 sortie 12, parking réservé et numéros d'urgence suisses." />
    <link rel="icon" type="image/svg+xml" href="/assets/logo/planaxis-shield.svg" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderNavbar('contact')}

    <!-- En-tête -->
    <section class="section" style="padding-bottom: 2rem; background: var(--color-cloud);">
      <div class="container">
        <div style="max-width: 780px;">
          <div class="eyebrow">District de Nyon · Canton de Vaud</div>
          <h1>Accès, Horaires & Contact à Gland.</h1>
          <p class="lead" style="margin-top: 1rem;">
            Le cabinet Planaxis est situé au cœur de Gland, à proximité immédiate de la gare CFF et des principaux axes routiers de La Côte.
          </p>
        </div>
      </div>
    </section>

    <!-- Informations d'Accès & Horaires -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem;">
          
          <!-- Colonne 1 : Coordonnées & Horaires -->
          <div>
            <h2 style="font-size: 1.75rem; margin-bottom: 1.5rem;">Coordonnées Directes</h2>

            <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2.5rem;">
              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: var(--radius-sm); background: var(--color-cloud); color: var(--color-navy); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong style="color: var(--color-navy); font-size: 1.05rem;">Adresse du Cabinet</strong>
                  <div style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0.2rem;">
                    Rue du Nord 2<br/>
                    1196 Gland · Suisse
                  </div>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: var(--radius-sm); background: var(--color-cloud); color: var(--color-navy); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong style="color: var(--color-navy); font-size: 1.05rem;">Téléphone & Accueil Médical</strong>
                  <div style="margin-top: 0.2rem;">
                    <a href="tel:+41223648000" style="color: var(--color-navy); font-weight: 700; font-size: 1.1rem; text-decoration: underline;">
                      +41 22 364 80 00
                    </a>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--color-muted);">Ligne ouverte du lundi au vendredi dès 08h00</div>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: var(--radius-sm); background: var(--color-cloud); color: var(--color-navy); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong style="color: var(--color-navy); font-size: 1.05rem;">Messagerie Électronique</strong>
                  <div style="color: var(--color-muted); font-size: 0.95rem; margin-top: 0.2rem;">
                    contact@planaxis.ch<br/>
                    <span style="font-size: 0.8rem;">Transmission sécurisée confrères : planaxis@hin.ch</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">Horaires d'Ouverture du Cabinet</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; margin-bottom: 2rem;">
              <tbody>
                ${scheduleRows}
              </tbody>
            </table>
          </div>

          <!-- Colonne 2 : Formulaire de Contact Sécurisé -->
          <div>
            <div style="background: var(--color-cloud); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: clamp(2rem, 3.5vw, 2.5rem);">
              <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">Écrire au Secrétariat Médical</h3>
              <p style="color: var(--color-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
                Pour toute question administrative, demande d'information ou transmission de document.
              </p>

              <form onsubmit="event.preventDefault(); alert('Votre message a bien été transmis au secrétariat de Planaxis. Nous vous répondrons dans les plus brefs délais.'); this.reset();">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                  <div>
                    <label class="form-label" for="contactNom">Nom & Prénom *</label>
                    <input type="text" id="contactNom" class="form-control" placeholder="ex. Jean Dupont" required />
                  </div>
                  <div>
                    <label class="form-label" for="contactTel">Téléphone *</label>
                    <input type="tel" id="contactTel" class="form-control" placeholder="+41 79 000 00 00" required />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contactMail">Adresse e-mail *</label>
                  <input type="email" id="contactMail" class="form-control" placeholder="jean.dupont@exemple.ch" required />
                </div>

                <div class="form-group">
                  <label class="form-label" for="contactSujet">Objet de votre demande</label>
                  <select id="contactSujet" class="form-control">
                    <option>Demande d'information générale</option>
                    <option>Question relative aux remboursements LAMal</option>
                    <option>Transmission de dossier médical antérieur</option>
                    <option>Candidature médicale / Espace professionnel</option>
                    <option>Autre motif</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contactMsg">Votre message *</label>
                  <textarea id="contactMsg" rows="4" class="form-control" placeholder="Rédigez votre message ici..." required></textarea>
                </div>

                <div style="margin-bottom: 1.5rem; font-size: 0.78rem; color: var(--color-muted);">
                  🔒 Conformément à la Loi fédérale sur la Protection des Données (LPD), vos coordonnées sont traitées sous le secret médical le plus strict.
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">
                  <span>Envoyer mon message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Urgences Officielles Suisse & Vaud -->
    <section class="section section-cloud">
      <div class="container">
        <div class="section-header text-center">
          <div class="eyebrow" style="color: var(--color-terracotta);">Services d'Urgence</div>
          <h2>Numéros d'Urgence & Permanences Médicales</h2>
          <p class="lead" style="margin-top: 0.5rem;">
            En Suisse romande et dans le canton de Vaud, le dispositif d'urgence médicale est organisé comme suit :
          </p>
        </div>

        <div class="grid-3">
          <div style="background: var(--color-white); border-radius: var(--radius-lg); padding: 2rem; border-top: 4px solid var(--color-terracotta); box-shadow: var(--shadow-sm);">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-terracotta); text-transform: uppercase;">Urgence Vitale Immédiate</div>
            <div style="font-size: 2.25rem; font-weight: 800; color: var(--color-navy); margin: 0.5rem 0;">144</div>
            <p style="color: var(--color-muted); font-size: 0.9rem; line-height: 1.55;">
              Ambulance, SMUR et régulation sanitaire cantonale 24h/24. À composer en cas de douleur thoracique brutale, perte de connaissance, AVC ou détresse respiratoire sévère.
            </p>
          </div>

          <div style="background: var(--color-white); border-radius: var(--radius-lg); padding: 2rem; border-top: 4px solid var(--color-sand-dark); box-shadow: var(--shadow-sm);">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-sand-dark); text-transform: uppercase;">Médecins de Garde Vaud</div>
            <div style="font-size: 2.25rem; font-weight: 800; color: var(--color-navy); margin: 0.5rem 0;">0848 133 133</div>
            <p style="color: var(--color-muted); font-size: 0.9rem; line-height: 1.55;">
              Centrale téléphonique des médecins de garde du Canton de Vaud pour toute situation médicale urgente en dehors des heures d'ouverture de votre cabinet traitant.
            </p>
          </div>

          <div style="background: var(--color-white); border-radius: var(--radius-lg); padding: 2rem; border-top: 4px solid var(--color-sage); box-shadow: var(--shadow-sm);">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-sage-dark); text-transform: uppercase;">Permanence Planaxis Gland</div>
            <div style="font-size: 1.65rem; font-weight: 800; color: var(--color-navy); margin: 0.5rem 0;">022 364 80 00</div>
            <p style="color: var(--color-muted); font-size: 0.9rem; line-height: 1.55;">
              Soins non programmés le jour même : plaies, points de suture, traumatologie bénigne, infections aiguës. Du lundi au vendredi 8h–18h30 et samedi 9h–13h.
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
