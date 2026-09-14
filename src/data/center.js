// Données officielles du Centre Médical Planaxis — Gland (Canton de Vaud, Suisse)

export const centerInfo = {
  name: "PLANAXIS",
  subtitle: "Centre Médical & Soins Ambulatoires",
  tagline: "La santé, simplement.",
  canton: "Vaud",
  district: "Nyon",
  city: "Gland",
  postalCode: "1196",
  address: "Rue du Nord 2",
  fullAddress: "Rue du Nord 2, 1196 Gland, Suisse",
  phone: "+41 22 364 80 00",
  phoneClean: "+41223648000",
  email: "contact@planaxis.ch",
  emailSecure: "planaxis@hin.ch",
  emergencyPhone: "144",
  cantonalGardePhone: "0848 133 133", // Centrale des médecins de garde vaudoise
  pharmacieGardePhone: "0848 024 024",
  
  hours: {
    weekdays: "08h00 – 18h30",
    saturday: "09h00 – 13h00 (Soins non programmés & Urgences)",
    sunday: "Fermé (Permanence de garde cantonale : 0848 133 133)"
  },

  schedule: [
    { day: "Lundi", hours: "08h00 – 18h30", status: "open" },
    { day: "Mardi", hours: "08h00 – 18h30", status: "open" },
    { day: "Mercredi", hours: "08h00 – 18h30", status: "open" },
    { day: "Jeudi", hours: "08h00 – 18h30", status: "open" },
    { day: "Vendredi", hours: "08h00 – 18h30", status: "open" },
    { day: "Samedi", hours: "09h00 – 13h00", status: "saturday" },
    { day: "Dimanche", hours: "Garde vaudoise (144 / 0848 133 133)", status: "closed" }
  ],

  access: {
    train: "À 3 minutes à pied de la gare CFF de Gland (Lignes Genève-Lausanne)",
    car: "Autoroute A1, Sortie 12 Gland (à 2 minutes du diffuseur)",
    parking: "Places de stationnement réservées aux patients au pied du cabinet (dont places PMR & bornes de recharge)",
    bus: "Arrêts TPN lignes 811 et 831 à proximité immédiate (Arrêt Gare de Gland / Rue du Nord)"
  },

  guarantees: [
    {
      title: "100% Pris en Charge LAMal / AOS",
      desc: "Tous les soins sont remboursés par l'assurance obligatoire des soins (LAMal) et les assurances complémentaires (LCA)."
    },
    {
      title: "Tarification TARMED / TARDOC Officielle",
      desc: "Facturation vaudoise transparente, tiers payant direct Medidata transmis automatiquement à votre assureur."
    },
    {
      title: "Résultats d'Analyses en < 3 Heures",
      desc: "Partenariat stratégique avec un laboratoire de pointe et biologie délocalisée pour un diagnostic immédiat."
    },
    {
      title: "Équipe Médicale Spécialisée FMH",
      desc: "Médecins diplômés, autorisations cantonales vaudoises validées, formés dans les centres hospitaliers suisses."
    }
  ],

  stats: [
    { value: "3", label: "Médecins par centre", sub: "Structure à taille humaine" },
    { value: "100%", label: "Conventionné LAMal", sub: "Reconnu toutes caisses suisses" },
    { value: "< 3h", label: "Résultats de biologie", sub: "Laboratoire partenaire rapide" },
    { value: "24/7", label: "Prise de RDV en ligne", sub: "Confirmation immédiate SMS" }
  ]
};
