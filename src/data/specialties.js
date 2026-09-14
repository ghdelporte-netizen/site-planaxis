// Spécialités & Prestations du Centre Médical Planaxis à Gland

export const specialties = [
  {
    id: "medecine-generale",
    slug: "medecine-generale",
    title: "Médecine Générale & Premier Recours",
    category: "Premier Recours",
    shortDesc: "Suivi médical global, bilans de santé préventifs, pathologies aiguës et chroniques pour adultes et adolescents.",
    fullDesc: "Au cœur de notre mission, la médecine générale Planaxis assure une prise en charge holistique et continue. Nos médecins généralistes FMH coordonnent l'ensemble de votre parcours de santé, du diagnostic initial au suivi spécialisé, en intégrant les standards suisses de rigueur et d'écoute.",
    icon: "stethoscope",
    accentColor: "navy",
    highlights: [
      "Consultations de médecine interne générale & médecin de famille",
      "Prise en charge des maladies aiguës et chroniques (diabète, HTA, cardiologie)",
      "Bilans de santé complets et certificats médicaux",
      "Vaccinations officielles et conseils de santé voyageur"
    ],
    delay: "Rendez-vous sous 24h à 48h",
    lamal: "Pris en charge à 100% par l'AOS (LAMal)"
  },
  {
    id: "pediatrie",
    slug: "pediatrie",
    title: "Pédiatrie & Santé de l'Enfant",
    category: "Enfance & Famille",
    shortDesc: "Accompagnement attentif de la naissance à l'adolescence : contrôles du développement, vaccins et petites urgences.",
    fullDesc: "Nos pédiatres accueillent les enfants et leurs familles dans un environnement pensé pour désamorcer l'anxiété médicale : mobilier en bois naturel, salle d'attente végétalisée avec coin ludique, et gestes d'examen tout en douceur.",
    icon: "baby",
    accentColor: "sage",
    highlights: [
      "Contrôles pédiatriques réguliers (1 mois, 2 mois, 4 mois, 6 mois, bilans annuels)",
      "Calendrier vaccinal suisse de l'OFSP",
      "Suivi de la croissance staturo-pondérale et du développement psychomoteur",
      "Urgences pédiatriques ambulatoires (fièvre, otites, bronchiolites, éruptions)"
    ],
    delay: "Priorité pour les nourrissons et urgences",
    lamal: "Pris en charge à 100% par l'AOS (LAMal)"
  },
  {
    id: "soins-non-programmes",
    slug: "soins-non-programmes",
    title: "Soins Non Programmés & Urgences Ambulatoires",
    category: "Urgences Douces",
    shortDesc: "Accueil rapide des urgences du quotidien sans passage par les urgences hospitalières : plaies, traumatologie, infections aiguës.",
    fullDesc: "Pour les affections qui ne peuvent pas attendre mais ne nécessitent pas une hospitalisation lourde, Planaxis propose des créneaux dédiés le jour même. Évitez les heures d'attente aux urgences des grands hôpitaux tout en bénéficiant d'un plateau technique immédiat.",
    icon: "zap",
    accentColor: "terracotta",
    highlights: [
      "Sutures de plaies, pansements techniques et soins de brûlures",
      "Traumatologie bénigne, entorses, contusions et immobilisations",
      "Infections aiguës (angines, bronchites, infections urinaires, pneumonies)",
      "Douleurs aiguës, coliques néphrétiques et crises de migraine"
    ],
    delay: "Accueil le jour même (sur appel ou RDV express)",
    lamal: "Pris en charge à 100% par l'AOS (LAMal)"
  },
  {
    id: "plateau-technique",
    slug: "plateau-technique",
    title: "Plateau Technique, ECG & Analyses Rapides",
    category: "Diagnostics de Précision",
    shortDesc: "Électrocardiogramme haute résolution, prélèvements sanguins avec résultats de laboratoire en moins de 3 heures.",
    fullDesc: "Notre centre dispose d'équipements diagnostiques de dernière génération. Grâce à notre chaîne d'analyse rapide et à la biologie délocalisée, votre médecin dispose des paramètres clés pendant ou dans les quelques heures qui suivent votre consultation.",
    icon: "activity",
    accentColor: "navy",
    highlights: [
      "Électrocardiogramme de repos (ECG 12 dérivations numérique)",
      "Bilans sanguins et urinaires complets (partenariat laboratoire agréé)",
      "Résultats biologiques urgents disponibles en moins de 3 heures",
      "Spirométrie (exploration fonctionnelle respiratoire) & Oxymétrie"
    ],
    delay: "Réalisé sur place lors de votre consultation",
    lamal: "Pris en charge selon tarifs TARMED / TARDOC"
  },
  {
    id: "prevention-bilan",
    slug: "prevention-bilan",
    title: "Médecine Préventive & Bilans Personnalisés",
    category: "Longévité & Prévention",
    shortDesc: "Évaluation personnalisée de vos facteurs de risque, dépistages ciblés et optimisation durable de votre capital santé.",
    fullDesc: "La meilleure médecine est celle qui anticipe. Nos bilans de santé sur-mesure combinent examens cliniques approfondis, profil biologique complet et recommandations personnalisées sur l'hygiène de vie, la nutrition et la prévention cardiovasculaire.",
    icon: "shield-check",
    accentColor: "sand",
    highlights: [
      "Bilan de santé préventif approfondi (Check-up personnalisé)",
      "Évaluation du risque cardiovasculaire et métabolique",
      "Dépistage des pathologies silencieuses et bilans d'aptitude",
      "Conseils personnalisés en micro-nutrition et gestion du stress"
    ],
    delay: "Consultation sur rendez-vous programmé",
    lamal: "Prestations prises en charge ou bilans spécifiques"
  },
  {
    id: "teleconsultation",
    slug: "teleconsultation",
    title: "Téléconsultation Sécurisée",
    category: "Santé Digitale",
    shortDesc: "Consultez votre praticien Planaxis en visioconférence sécurisée suisse pour un suivi, un résultat ou un avis rapide.",
    fullDesc: "Lorsque votre état ne requiert pas un examen physique direct, la téléconsultation Planaxis vous évite tout déplacement inutile. Hébergée sur des serveurs suisses certifiés conformes à la LPD, elle assure la stricte confidentialité de vos données médicales.",
    icon: "video",
    accentColor: "sage",
    highlights: [
      "Interprétation et debriefing d'analyses biologiques et d'imageries",
      "Renouvellement d'ordonnance pour traitement chronique stabilisé",
      "Avis médical de suivi post-consultation",
      "Échange sécurisé de documents et ordonnances électroniques"
    ],
    delay: "Créneaux flexibles du lundi au vendredi",
    lamal: "Pris en charge par l'AOS (LAMal)"
  }
];
