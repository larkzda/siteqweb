/**
 * JULIJA'S ROYAL DOBERMANS - Interactivité + i18n (FR / EN / SR)
 */

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  fr: {
    // Navbar
    nav_home:    'Accueil',
    nav_about:   'À Propos',
    nav_dogs:    'Nos Dobermans',
    nav_puppies: 'Chiots',
    nav_gallery: 'Galerie',
    nav_partners:'Partenaires',
    nav_rdv:     'Prendre RDV',
    // Hero
    hero_title_1:  "L'Excellence",
    hero_title_2:  'du Doberman',
    hero_subtitle: "Découvrez l'élégance et la force brute à travers nos lignées d'exception.<br />Élevés par Julija, passionnée et experte de la race.",
    hero_btn_rdv:  'Prendre Rendez-vous',
    hero_btn_dogs: 'Découvrir nos chiens',
    stat_puppies:  'Chiots placés',
    stat_years:    "Années d'élevage",
    stat_titles:   'Titres champions',
    hero_scroll:   'Défiler',
    // About
    about_tag:   'Notre Histoire',
    about_title: 'La vision de',
    about_p1:    "Chez <strong>Julija's Royal Dobermans</strong>, chaque Doberman est bien plus qu'un animal — c'est un compagnon d'exception. Sous la direction de Julija, notre élevage s'est imposé comme une référence pour les passionnés de la race.",
    about_p2:    "Julija sélectionne personnellement chaque lignée pour garantir non seulement la beauté physique, mais aussi un mental d'acier et une santé parfaite. Son approche unique combine entraînement rigoureux et vie de famille harmonieuse.",
    feat1_title: 'Expertise de Julija',
    feat1_desc:  "Plus de 15 ans passés à perfectionner les lignées les plus nobles.",
    feat2_title: 'Santé Garantie',
    feat2_desc:  'Tests génétiques rigoureux et suivi vétérinaire constant.',
    feat3_title: 'Lien Unique',
    feat3_desc:  "Chaque chien est élevé comme un membre de la famille dès le premier jour.",
    about_badge: 'Julija S. Propriétaire',
    // Dogs
    dogs_tag:    'Nos Reproducteurs',
    dogs_title:  'Rencontrez',
    dogs_title2: 'Nos Champions',
    dogs_desc:   "Nos chiens sont le reflet du travail acharné de Julija et de notre engagement pour la race.",
    gender_female: '♀ Femelle',
    gender_male: '♂ Mâle',
    dog_featured: ' Vedette',
    dog_lyna_age: '1 an',
    dog_lyna_title: "Espoir de l'élevage",
    dog_lyna_desc: 'Jeune et pleine de vie, Lyna apporte une belle énergie à notre élevage. Une chienne très prometteuse avec un tempérament en or.',
    dog_tesla_age: '2 ans',
    dog_tesla_title: 'Pure race certifiée',
    dog_tesla_desc: 'Excellente chienne pure race au standard parfait. Ses tests génétiques ont été approuvés avec succès, garantissant une santé et des lignées irréprochables.',
    dog_zidan_age: '2 ans',
    dog_zidan_title: 'Tests génétiques effectués',
    dog_zidan_desc: "Mâle pure race d'une carrure impressionnante. Zidan combine une génétique irréprochable et un équilibre de caractère parfait pour l'élevage.",
    // Puppies
    pups_tag:    'Portées',
    pups_title:  'Prochaines',
    pups_title2: 'Portées',
    pups_desc:   "Les portées seront annoncées ici dès qu'elles seront disponibles. Inscrivez-vous pour être informé en priorité.",
    puppies_soon_title: 'Aucun chiot disponible pour le moment',
    puppies_soon_desc: "Julija travaille à préparer les prochaines portées avec le plus grand soin.<br />Chaque portée est planifiée pour garantir la santé, le tempérament et la qualité génétique de nos Dobermans.",
    puppies_step1_title: 'Annonce de la portée',
    puppies_step1_desc: 'Dès la confirmation de la gestation',
    puppies_step2_title: 'Ouverture des réservations',
    puppies_step2_desc: 'Quelques semaines avant la naissance',
    puppies_step3_title: 'Remise des chiots',
    puppies_step3_desc: 'À 8–10 semaines, vaccinés et vermifugés',
    puppies_notify_text: "Vous souhaitez être informé dès l'annonce d'une nouvelle portée ?",
    puppies_notify_btn: "Nous contacter pour s'inscrire",
    // Gallery
    gallery_tag:   'Galerie',
    gallery_title: 'en Images',
    gallery_desc_0: 'Julija et ses champions',
    gallery_desc_1: 'Portrait de champion',
    gallery_desc_2: 'Regard perçant',
    gallery_desc_3: 'Élégance naturelle',
    gallery_desc_4: 'Majesté royale',
    gallery_desc_5: 'Puissance et grâce',
    gallery_desc_6: "L'âme du Doberman",
    gallery_desc_7: 'Noblesse naturelle',
    gallery_desc_8: 'Complicité',
    gallery_desc_9: 'Noble silhouette',
    gallery_desc_10: 'Fierté et élégance',
    gallery_desc_11: 'Force brute',
    gallery_desc_12: 'Caractère unique',
    gallery_desc_13: 'Jeune champion',
    gallery_desc_14: 'Duo de champions',
    gallery_desc_15: 'Allure royale',
    gallery_desc_16: 'Le regard du champion',
    gallery_desc_17: 'Noblesse innée',
    gallery_desc_18: 'Excellence royale',
    gallery_desc_19: "Portée d'exception",
    gallery_desc_20: "À l'élevage",
    gallery_desc_21: 'Jeunesse prometteuse',
    gallery_desc_22: 'Instant précieux',
    gallery_videos_tag: 'En Mouvement',
    gallery_video1_label: 'Nos Dobermans en action',
    gallery_video2_label: "La vie à l'élevage",
    // Reviews
    reviews_tag:    'Avis Clients',
    reviews_title:  'Ce que disent',
    reviews_title2: 'Nos Familles',
    review1_text: '"Notre Doberman de chez Julija\'s Royal Dobermans est absolument magnifique et a un caractère en or. Le suivi de l\'élevage est exceptionnel, ils sont toujours disponibles pour nos questions."',
    review1_author: 'Marc & Rachel T.',
    review1_location: 'Montréal, QC',
    review2_text: '"J\'ai cherché pendant deux ans avant de trouver un élevage sérieux. Julija\'s Royal Dobermans dépasse toutes mes attentes — professionnalisme, transparence et amour des animaux au rendez-vous."',
    review2_author: 'Sophie C.',
    review2_location: 'Québec, QC',
    review3_text: '"Titan, notre mâle, est arrivé parfaitement socialisé. À 3 ans, c\'est un chien équilibré, protecteur et affectueux. Merci Julija\'s Royal Dobermans pour ce cadeau inestimable."',
    review3_author: 'Pierre B.',
    review3_location: 'Laval, QC',
    // Partners
    partners_tag:    'Nos Collaborations',
    partners_title:  'Nos',
    partners_title2: 'Partenaires',
    partners_desc:   "Julija's Royal Dobermans s'associe aux meilleurs professionnels pour garantir la santé, la beauté et l'excellence de nos Dobermans.",
    partner_collab_tag: 'Collaborations',
    partner_become_title: 'Devenez Partenaire',
    partner_become_desc: 'Vous êtes un professionnel du monde canin engagé envers le bien-être animal ? Associez votre expertise à notre élevage.',
    partner_become_link: 'Contactez-nous',
    partner_assoc_tag: 'Association Officielle',
    partner_ckc_title: 'Club Canin Canadien (CKC)',
    partner_ckc_desc: "Élevage enregistré et reconnu par le Club Canin Canadien, garantissant une pureté génétique et des standards d'excellence pour nos Dobermans.",
    partner_visit_link: 'Visiter le site',
    partner_trainer_tag: 'Entraîneure Canin',
    partner_trainer_title: 'Marie-France Poulin',
    partner_trainer_desc: "Entraîneure canin professionnelle chez Espace Canin Estrie. Experte en éducation, comportement et réhabilitation (éducation de l'Australien Banjo, etc.).",
    partner_vet_tag: 'Vétérinaire Partenaire',
    partner_vet_title: 'Carrefour Santé Animale',
    partner_vet_desc: 'Clinique vétérinaire de référence à Sherbrooke offrant des soins professionnels, bienveillants et un suivi rigoureux pour nos Dobermans.',
    partner_cta_text: "Vous souhaitez devenir partenaire de Julija's Royal Dobermans ?",
    partner_cta_btn: 'Contactez-nous',
    // RDV / Form
    rdv_tag:    'Contact & Rendez-vous',
    rdv_title:  'Prenez',
    rdv_title2: 'Rendez-vous',
    rdv_desc:   "Que ce soit pour visiter nos installations, rencontrer nos reproducteurs, vous informer sur une portée à venir ou réserver votre chiot, nous sommes là pour vous accueillir.",
    rdv_address_label: 'Adresse',
    rdv_phone_label: 'Téléphone',
    rdv_email_label: 'Courriel',
    rdv_hours_label: 'Heures de visite',
    rdv_hours_val: 'Sur rendez-vous seulement',
    form_title: 'Demande de Rendez-vous',
    form_firstname_label: 'Prénom *',
    form_firstname_placeholder: 'Jean',
    form_lastname_label: 'Nom *',
    form_lastname_placeholder: 'Tremblay',
    form_email_label: 'Courriel *',
    form_email_placeholder: 'jean@exemple.com',
    form_phone_label: 'Téléphone',
    form_phone_placeholder: '(819) 000-0000',
    form_subject_label: 'Objet de la visite *',
    form_subject_default: 'Choisissez un objet…',
    form_subject_opt1: "Visite de l'élevage",
    form_subject_opt2: 'Réserver un chiot disponible',
    form_subject_opt3: "S'inscrire pour une future portée",
    form_subject_opt4: 'Information sur la reproduction',
    form_subject_opt5: 'Autre demande',
    form_date_label: 'Date préférée *',
    form_time_label: 'Heure préférée',
    form_message_label: 'Message / Questions',
    form_message_placeholder: 'Décrivez votre projet, vos questions sur nos chiots disponibles, ou toute autre information utile…',
    form_consent_label: "J'accepte d'être contacté(e) par Julija's Royal Dobermans concernant ma demande.",
    form_btn_submit: 'Envoyer ma demande',
    form_btn_loading: 'Envoi en cours…',
    form_success_title: 'Demande envoyée !',
    form_success_text: 'Merci pour votre message. Nous vous contacterons dans les 24 à 48 heures pour confirmer votre rendez-vous.',
    form_success_btn: "Retour à l'accueil",
    // Footer
    footer_nav:     'Navigation',
    footer_puppies: 'Chiots disponibles',
    footer_desc: 'Élevage professionnel de Dobermans pure race. Qualité, santé et tempérament irréprochables depuis 2009.',
    footer_services: 'Services',
    footer_srv1: 'Prendre rendez-vous',
    footer_srv2: 'Réserver un chiot',
    footer_srv3: 'Contact',
    footer_srv4: "Conseils d'élevage",
    footer_srv5: 'Club du Doberman',
    footer_contact_title: 'Nous Rejoindre',
    footer_contact_visit: 'Visites (Sur RDV)',
    footer_contact_hours: "Heures d'ouverture",
    footer_contact_hours_val: 'Sur rendez-vous seulement',
    footer_copy: '© 2026 Julija\'s Royal Dobermans – Élevage de Dobermans Pure Race. Tous droits réservés.',
    footer_reg: 'Enregistré au Club du Doberman du Québec & Canin Club du Canada',
  },

  en: {
    // Navbar
    nav_home:    'Home',
    nav_about:   'About',
    nav_dogs:    'Our Dobermans',
    nav_puppies: 'Puppies',
    nav_gallery: 'Gallery',
    nav_partners:'Partners',
    nav_rdv:     'Book a Visit',
    // Hero
    hero_title_1:  'Excellence',
    hero_title_2:  'in Dobermans',
    hero_subtitle: "Discover elegance and raw power through our exceptional bloodlines.<br />Bred by Julija, a passionate expert of the breed.",
    hero_btn_rdv:  'Book an Appointment',
    hero_btn_dogs: 'Meet our dogs',
    stat_puppies:  'Puppies placed',
    stat_years:    'Years of breeding',
    stat_titles:   'Champion titles',
    hero_scroll:   'Scroll',
    // About
    about_tag:   'Our Story',
    about_title: "Julija's vision",
    about_p1:    "At <strong>Julija's Royal Dobermans</strong>, every Doberman is more than an animal — it is an exceptional companion. Under Julija's leadership, our kennel has become a benchmark for breed enthusiasts.",
    about_p2:    "Julija personally selects every bloodline to ensure not only physical beauty but also a strong character and perfect health. Her unique approach combines rigorous training with a harmonious family life.",
    feat1_title: "Julija's Expertise",
    feat1_desc:  "Over 15 years spent perfecting the most noble bloodlines.",
    feat2_title: 'Health Guaranteed',
    feat2_desc:  'Rigorous genetic testing and constant veterinary monitoring.',
    feat3_title: 'Unique Bond',
    feat3_desc:  "Every dog is raised as a family member from day one.",
    about_badge: 'Julija S. Owner',
    // Dogs
    dogs_tag:    'Our Breeding Dogs',
    dogs_title:  'Meet',
    dogs_title2: 'Our Champions',
    dogs_desc:   "Our dogs reflect Julija's tireless work and our commitment to the breed.",
    gender_female: '♀ Female',
    gender_male: '♂ Male',
    dog_featured: ' Featured',
    dog_lyna_age: '1 year old',
    dog_lyna_title: 'Future of the Kennel',
    dog_lyna_desc: 'Young and full of life, Lyna brings great energy to our kennel. A highly promising female with a golden temperament.',
    dog_tesla_age: '2 years old',
    dog_tesla_title: 'Certified Purebred',
    dog_tesla_desc: 'Excellent purebred female with perfect standards. Her genetic tests have been successfully cleared, ensuring top-tier health and bloodlines.',
    dog_zidan_age: '2 years old',
    dog_zidan_title: 'Genetic Tests Completed',
    dog_zidan_desc: 'Purebred male with an impressive build. Zidan combines flawless genetics and a perfectly balanced temperament for breeding.',
    // Puppies
    pups_tag:    'Litters',
    pups_title:  'Upcoming',
    pups_title2: 'Litters',
    pups_desc:   "Litters will be announced here as soon as they are available. Register to be notified first.",
    puppies_soon_title: 'No puppies available at the moment',
    puppies_soon_desc: "Julija is working on preparing the next litters with the utmost care.<br />Each litter is planned to guarantee the health, temperament, and genetic quality of our Dobermans.",
    puppies_step1_title: 'Litter announcement',
    puppies_step1_desc: 'As soon as pregnancy is confirmed',
    puppies_step2_title: 'Booking opens',
    puppies_step2_desc: 'A few weeks before birth',
    puppies_step3_title: 'Delivery of puppies',
    puppies_step3_desc: 'At 8–10 weeks, vaccinated and dewormed',
    puppies_notify_text: "Would you like to be notified as soon as a new litter is announced?",
    puppies_notify_btn: "Contact us to register",
    // Gallery
    gallery_tag:   'Gallery',
    gallery_title: 'in Photos',
    gallery_desc_0: 'Julija and her champions',
    gallery_desc_1: 'Champion portrait',
    gallery_desc_2: 'Piercing gaze',
    gallery_desc_3: 'Natural elegance',
    gallery_desc_4: 'Royal majesty',
    gallery_desc_5: 'Power and grace',
    gallery_desc_6: 'The soul of the Doberman',
    gallery_desc_7: 'Natural nobility',
    gallery_desc_8: 'Bond',
    gallery_desc_9: 'Noble silhouette',
    gallery_desc_10: 'Pride and elegance',
    gallery_desc_11: 'Raw power',
    gallery_desc_12: 'Unique character',
    gallery_desc_13: 'Young champion',
    gallery_desc_14: 'Duo of champions',
    gallery_desc_15: 'Royal posture',
    gallery_desc_16: "The champion's gaze",
    gallery_desc_17: 'Innate nobility',
    gallery_desc_18: 'Royal excellence',
    gallery_desc_19: 'Exceptional litter',
    gallery_desc_20: 'At the kennel',
    gallery_desc_21: 'Promising youth',
    gallery_desc_22: 'Precious moment',
    gallery_videos_tag: 'In Motion',
    gallery_video1_label: 'Our Dobermans in action',
    gallery_video2_label: 'Life at the kennel',
    // Reviews
    reviews_tag:    'Client Reviews',
    reviews_title:  'What our',
    reviews_title2: 'Families Say',
    review1_text: '"Our Doberman from Julija\'s Royal Dobermans is absolutely beautiful and has a heart of gold. The support from the kennel is outstanding, they are always available for our questions."',
    review1_author: 'Marc & Rachel T.',
    review1_location: 'Montreal, QC',
    review2_text: '"I searched for two years before finding a serious breeder. Julija\'s Royal Dobermans exceeds all my expectations — professionalism, transparency and love for animals are all present."',
    review2_author: 'Sophie C.',
    review2_location: 'Quebec, QC',
    review3_text: '"Titan, our male, arrived perfectly socialized. At 3 years old, he is a balanced, protective and affectionate dog. Thank you Julija\'s Royal Dobermans for this invaluable gift."',
    review3_author: 'Pierre B.',
    review3_location: 'Laval, QC',
    // Partners
    partners_tag:    'Our Collaborations',
    partners_title:  'Our',
    partners_title2: 'Partners',
    partners_desc:   "Julija's Royal Dobermans partners with the best professionals to guarantee the health, beauty and excellence of our Dobermans.",
    partner_collab_tag: 'Collaborations',
    partner_become_title: 'Become a Partner',
    partner_become_desc: 'Are you a dog professional committed to animal welfare? Partner with our kennel.',
    partner_become_link: 'Contact us',
    partner_assoc_tag: 'Official Association',
    partner_ckc_title: 'Canadian Kennel Club (CKC)',
    partner_ckc_desc: 'Kennel registered and recognized by the Canadian Kennel Club, ensuring genetic purity and standards of excellence for our Dobermans.',
    partner_visit_link: 'Visit website',
    partner_trainer_tag: 'Dog Trainer',
    partner_trainer_title: 'Marie-France Poulin',
    partner_trainer_desc: 'Professional dog trainer at Espace Canin Estrie. Expert in education, behavior and rehabilitation (training of the Australian shepherd Banjo, etc.).',
    partner_vet_tag: 'Partner Veterinarian',
    partner_vet_title: 'Carrefour Santé Animale',
    partner_vet_desc: 'Reference veterinary clinic in Sherbrooke offering professional, caring treatment and rigorous monitoring for our Dobermans.',
    partner_cta_text: "Would you like to become a partner of Julija's Royal Dobermans?",
    partner_cta_btn: 'Contact us',
    // RDV / Form
    rdv_tag:    'Contact & Appointments',
    rdv_title:  'Book an',
    rdv_title2: 'Appointment',
    rdv_desc:   "Whether you want to visit our facilities, meet our breeding dogs, learn about an upcoming litter, or reserve your puppy — we are here to welcome you.",
    rdv_address_label: 'Address',
    rdv_phone_label: 'Phone',
    rdv_email_label: 'Email',
    rdv_hours_label: 'Visiting Hours',
    rdv_hours_val: 'By appointment only',
    form_title: 'Appointment Request',
    form_firstname_label: 'First Name *',
    form_firstname_placeholder: 'John',
    form_lastname_label: 'Last Name *',
    form_lastname_placeholder: 'Smith',
    form_email_label: 'Email *',
    form_email_placeholder: 'john@example.com',
    form_phone_label: 'Phone',
    form_phone_placeholder: '(819) 000-0000',
    form_subject_label: 'Purpose of visit *',
    form_subject_default: 'Choose a purpose...',
    form_subject_opt1: 'Visit the kennel',
    form_subject_opt2: 'Reserve an available puppy',
    form_subject_opt3: 'Register for a future litter',
    form_subject_opt4: 'Breeding information',
    form_subject_opt5: 'Other request',
    form_date_label: 'Preferred Date *',
    form_time_label: 'Preferred Time',
    form_message_label: 'Message / Questions',
    form_message_placeholder: 'Describe your project, your questions about our available puppies, or any other useful information...',
    form_consent_label: "I agree to be contacted by Julija's Royal Dobermans regarding my request.",
    form_btn_submit: 'Send request',
    form_btn_loading: 'Sending...',
    form_success_title: 'Request Sent!',
    form_success_text: 'Thank you for your message. We will contact you within 24 to 48 hours to confirm your appointment.',
    form_success_btn: 'Back to Home',
    // Footer
    footer_nav:     'Navigation',
    footer_puppies: 'Available Puppies',
    footer_desc: 'Professional breeder of purebred Dobermans. Uncompromising quality, health and temperament since 2009.',
    footer_services: 'Services',
    footer_srv1: 'Book an appointment',
    footer_srv2: 'Reserve a puppy',
    footer_srv3: 'Contact',
    footer_srv4: 'Breeding advice',
    footer_srv5: 'Doberman Club',
    footer_contact_title: 'Reach Us',
    footer_contact_visit: 'Visits (By Appt)',
    footer_contact_hours: 'Opening Hours',
    footer_contact_hours_val: 'By appointment only',
    footer_copy: '© 2026 Julija\'s Royal Dobermans – Purebred Dobermans Kennel. All rights reserved.',
    footer_reg: 'Registered with the Quebec Doberman Club & Canadian Kennel Club',
  },

  sr: {
    // Navbar
    nav_home:    'Početna',
    nav_about:   'O Nama',
    nav_dogs:    'Naši Dobermani',
    nav_puppies: 'Štenci',
    nav_gallery: 'Galerija',
    nav_partners:'Partneri',
    nav_rdv:     'Zakaži Posetu',
    // Hero
    hero_title_1:  'Izvrsnost',
    hero_title_2:  'Dobermana',
    hero_subtitle: "Otkrijte eleganciju i sirovu snagu kroz naše izuzetne linije.<br />Uzgajeno od strane Julije, strastvene stručnjakinje za rasu.",
    hero_btn_rdv:  'Zakaži Termin',
    hero_btn_dogs: 'Upoznajte naše pse',
    stat_puppies:  'Raspoređenih štenaca',
    stat_years:    'Godina uzgajanja',
    stat_titles:   'Šampionskih titula',
    hero_scroll:   'Skrolovati',
    // About
    about_tag:   'Naša Priča',
    about_title: 'Julijina vizija',
    about_p1:    "U <strong>Julija's Royal Dobermans</strong>, svaki Doberman je više od životinje — to je izuzetan pratilac. Pod Julijinim vodstvom, naš uzgajivač se nametnuo kao referenca za ljubitelje rase.",
    about_p2:    "Julija lično bira svaku liniju kako bi garantovala ne samo fizičku lepotu, već i čelični karakter i savršeno zdravlje. Njen jedinstven pristup kombinuje strogi trening i skladan porodični život.",
    feat1_title: 'Julijino Iskustvo',
    feat1_desc:  'Više od 15 godina posvećenih usavršavanju najplemenitijih linija.',
    feat2_title: 'Garantovano Zdravlje',
    feat2_desc:  'Rigorozna genetička testiranja i stalni veterinarski nadzor.',
    feat3_title: 'Jedinstvena Veza',
    feat3_desc:  'Svaki pas se odgaja kao član porodice od prvog dana.',
    about_badge: 'Julija S. Vlasnica',
    // Dogs
    dogs_tag:    'Naši Priplodnjaci',
    dogs_title:  'Upoznajte',
    dogs_title2: 'Naše Šampione',
    dogs_desc:   "Naši psi odražavaju Julijin neuman rad i našu posvećenost rasi.",
    gender_female: '♀ Ženka',
    gender_male: '♂ Mužjak',
    dog_featured: ' Istaknuto',
    dog_lyna_age: '1 godina',
    dog_lyna_title: 'Nada uzgajivačnice',
    dog_lyna_desc: 'Mlada i puna života, Lyna donosi divnu energiju u našu uzgajivačnicu. Veoma obećavajuća ženka sa zlatnim temperamentom.',
    dog_tesla_age: '2 godine',
    dog_tesla_title: 'Sertifikovani čistokrvni',
    dog_tesla_desc: 'Izuzetna čistokrvna ženka savršenog standarda. Njeni genetski testovi su uspešno odobreni, što garantuje vrhunsko zdravlje i rodoslov.',
    dog_zidan_age: '2 godine',
    dog_zidan_title: 'Genetski testovi obavljeni',
    dog_zidan_desc: 'Čistokrvni mužjak impresivne građe. Zidan kombinuje besprekornu genetiku i savršeno uravnotežen karakter za uzgoj.',
    // Puppies
    pups_tag:    'Legla',
    pups_title:  'Predstojeće',
    pups_title2: 'Legla',
    pups_desc:   'Legla će biti ovde objavljena čim budu dostupna. Registrujte se da biste bili obavešteni prvi.',
    puppies_soon_title: 'Trenutno nema dostupnih štenaca',
    puppies_soon_desc: "Julija pažljivo priprema sledeća legla sa najvećom pažnjom.<br />Svako leglo je planirano kako bi se garantovalo zdravlje, temperament i genetski kvalitet naših dobermana.",
    puppies_step1_title: 'Najava legla',
    puppies_step1_desc: 'Čim se potvrdi trudnoća',
    puppies_step2_title: 'Otvaranje rezervacija',
    puppies_step2_desc: 'Nekoliko nedelja pre rođenja',
    puppies_step3_title: 'Preuzimanje štenaca',
    puppies_step3_desc: 'Sa 8-10 nedelja, vakcinisani i očišćeni od parazita',
    puppies_notify_text: 'Želite li da budete obavešteni čim se najavi novo leglo?',
    puppies_notify_btn: 'Kontaktirajte nas za prijavu',
    // Gallery
    gallery_tag:   'Galerija',
    gallery_title: 'u Slikama',
    gallery_desc_0: 'Julija i njeni šampioni',
    gallery_desc_1: 'Portret šampiona',
    gallery_desc_2: 'Prodirući pogled',
    gallery_desc_3: 'Prirodna elegancija',
    gallery_desc_4: 'Kraljevsko veličanstvo',
    gallery_desc_5: 'Snaga i milost',
    gallery_desc_6: 'Duša dobermana',
    gallery_desc_7: 'Prirodno plemstvo',
    gallery_desc_8: 'Bliskost',
    gallery_desc_9: 'Plemenita silueta',
    gallery_desc_10: 'Ponos i elegancija',
    gallery_desc_11: 'Sirova snaga',
    gallery_desc_12: 'Jedinstveni karakter',
    gallery_desc_13: 'Mladi šampion',
    gallery_desc_14: 'Duo šampiona',
    gallery_desc_15: 'Kraljevski stav',
    gallery_desc_16: 'Pogled šampiona',
    gallery_desc_17: 'Urođeno plemstvo',
    gallery_desc_18: 'Kraljevska izvrsnost',
    gallery_desc_19: 'Izuzetno leglo',
    gallery_desc_20: 'U uzgajivačnici',
    gallery_desc_21: 'Mladost koja obećava',
    gallery_desc_22: 'Dragoceni trenutak',
    gallery_videos_tag: 'U pokretu',
    gallery_video1_label: 'Naši dobermani u akciji',
    gallery_video2_label: 'Život u uzgajivačnici',
    // Reviews
    reviews_tag:    'Recenzije Klijenata',
    reviews_title:  'Šta kažu',
    reviews_title2: 'Naše Porodice',
    review1_text: '"Naš doberman iz Julija\'s Royal Dobermans je apsolutno predivan i ima zlatno srce. Podrška iz uzgajivačnice je izuzetna, uvek su tu za naša pitanja."',
    review1_author: 'Marc & Rachel T.',
    review1_location: 'Montreal, QC',
    review2_text: '"Tražila sam dve godine pre nego što sam pronašla ozbiljnog odgajivača. Julija\'s Royal Dobermans prevazilazi sva moja očekivanja — profesionalizam, transparentnost i ljubav prema životinjama su na visokom nivou."',
    review2_author: 'Sophie C.',
    review2_location: 'Kvebek, QC',
    review3_text: '"Titan, naš mužjak, stigao je savršeno socijalizovan. Sa 3 godine, on je uravnotežen, zaštitnički nastrojen i privržen pas. Hvala Julija\'s Royal Dobermans na ovom neprocenjivom poklonu."',
    review3_author: 'Pierre B.',
    review3_location: 'Laval, QC',
    // Partners
    partners_tag:    'Naše Saradnje',
    partners_title:  'Naši',
    partners_title2: 'Partneri',
    partners_desc:   "Julija's Royal Dobermans sarađuje sa najboljim stručnjacima kako bi garantovala zdravlje, lepotu i izuzetnost naših Dobermana.",
    partner_collab_tag: 'Saradnja',
    partner_become_title: 'Postanite Partner',
    partner_become_desc: 'Da li ste profesionalac u svetu pasa posvećen dobrobiti životinja? Povežite svoju stručnost sa našom uzgajivačnicom.',
    partner_become_link: 'Kontaktirajte nas',
    partner_assoc_tag: 'Zvanično udruženje',
    partner_ckc_title: 'Kanadski kinološki savez (CKC)',
    partner_ckc_desc: 'Uzgajivačnica registrovana i priznata od strane Kanadskog kinološkog saveza, što garantuje genetsku čistotu i šampionske standarde za naše dobermane.',
    partner_visit_link: 'Posetite sajt',
    partner_trainer_tag: 'Trener pasa',
    partner_trainer_title: 'Marie-France Poulin',
    partner_trainer_desc: 'Profesionalni trener pasa u Espace Canin Estrie. Ekspert za vaspitanje, ponašanje i rehabilitaciju (vaspitanje australijskog ovčara Banja, itd.).',
    partner_vet_tag: 'Partnerski veterinar',
    partner_vet_title: 'Carrefour Santé Animale',
    partner_vet_desc: 'Referentna veterinarska klinika u Šerbruku koja nudi profesionalnu, brižnu negu i rigorozan nadzor za naše dobermane.',
    partner_cta_text: "Želite li da postanete partner Julija's Royal Dobermans?",
    partner_cta_btn: 'Kontaktirajte nas',
    // RDV / Form
    rdv_tag:    'Kontakt & Termini',
    rdv_title:  'Zakažite',
    rdv_title2: 'Termin',
    rdv_desc:   "Bilo da želite da posetite naše prostorije, upoznate naše priplodnjake, saznate nešto o predstojećem leglu ili rezervišete vašeg šteneta — tu smo da vas dočekamo.",
    rdv_address_label: 'Adresa',
    rdv_phone_label: 'Telefon',
    rdv_email_label: 'E-pošta',
    rdv_hours_label: 'Radno vreme',
    rdv_hours_val: 'Samo po dogovoru',
    form_title: 'Zahtev za Termin',
    form_firstname_label: 'Ime *',
    form_firstname_placeholder: 'Jovan',
    form_lastname_label: 'Prezime *',
    form_lastname_placeholder: 'Petrović',
    form_email_label: 'E-pošta *',
    form_email_placeholder: 'jovan@example.com',
    form_phone_label: 'Telefon',
    form_phone_placeholder: '+381 11 000 0000',
    form_subject_label: 'Svrha posete *',
    form_subject_default: 'Izaberite svrhu...',
    form_subject_opt1: 'Poseta uzgajivačnici',
    form_subject_opt2: 'Rezervacija slobodnog šteneta',
    form_subject_opt3: 'Prijava za sledeće leglo',
    form_subject_opt4: 'Informacije o uzgoju',
    form_subject_opt5: 'Drugo',
    form_date_label: 'Željeni datum *',
    form_time_label: 'Željeno vreme',
    form_message_label: 'Poruka / Pitanja',
    form_message_placeholder: 'Opišite svoje planove, svoja pitanja o našim dostupnim štencima ili bilo koje druge korisne informacije...',
    form_consent_label: 'Saglasan/na sam da me Julija\'s Royal Dobermans kontaktira u vezi sa mojim zahtevom.',
    form_btn_submit: 'Pošalji zahtev',
    form_btn_loading: 'Slanje u toku...',
    form_success_title: 'Zahtev poslat!',
    form_success_text: 'Hvala na poruci. Kontaktiraćemo vas u roku od 24 do 48 sati radi potvrde termina.',
    form_success_btn: 'Nazad na početnu',
    // Footer
    footer_nav:     'Navigacija',
    footer_puppies: 'Dostupni Štenci',
    footer_desc: 'Profesionalni uzgoj čistokrvnih dobermana. Besprekoran kvalitet, zdravlje i temperament od 2009. godine.',
    footer_services: 'Usluge',
    footer_srv1: 'Zakažite termin',
    footer_srv2: 'Rezervišite štene',
    footer_srv3: 'Kontakt',
    footer_srv4: 'Saveti za uzgoj',
    footer_srv5: 'Doberman klub',
    footer_contact_title: 'Kontakt',
    footer_contact_visit: 'Posete (po dogovoru)',
    footer_contact_hours: 'Radno vreme',
    footer_contact_hours_val: 'Samo po dogovoru',
    footer_copy: '© 2026 Julija\'s Royal Dobermans – Uzgajivačnica čistokrvnih dobermana. Sva prava zadržana.',
    footer_reg: 'Registrovani kod Kvebečkog Doberman kluba i Kanadskog kinološkog saveza',
  }
};

/* ============================================================
   i18n ENGINE
   ============================================================ */
let currentLang = 'fr';

function detectBrowserLang() {
  const lang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('sr') || lang.startsWith('hr') || lang.startsWith('bs')) return 'sr';
  if (lang.startsWith('en')) return 'en';
  return 'fr';
}

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update label in button
  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('preferredLang', lang);

  // Update <html lang="">
  document.documentElement.lang = lang === 'sr' ? 'sr' : lang;
}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // --- Language init ---
  const savedLang = localStorage.getItem('preferredLang') || detectBrowserLang();
  applyLang(savedLang);

  // --- Language switcher toggle ---
  const langSwitcher = document.getElementById('langSwitcher');
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      langSwitcher.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('open');
    }
  });

  // 1. Navigation Sticky & Animation au défilement
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Menu Mobile (Hamburger)
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  const navOverlay = document.getElementById('navOverlay');

  function openMobileMenu() {
    navLinks.classList.add('active');
    hamburger.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Fermer le menu sur clic d'un lien
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Fermer sur clic en dehors du menu (overlay)
  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Fermer sur touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // 3. Gestion du formulaire de rendez-vous
  const rdvForm = document.getElementById('rdvForm');
  if (rdvForm) {
    rdvForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const successMessage= document.getElementById('formSuccess');
      const submitBtn     = document.getElementById('submitBtn');
      const submitText    = document.getElementById('submitText');
      const submitLoader  = document.getElementById('submitLoader');

      // Change button state to loading
      submitText.classList.add('hidden');
      submitLoader.classList.remove('hidden');
      submitBtn.disabled = true;

      // Prepare form data for FormSubmit.co
      const formData = new FormData(rdvForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Add custom subject and template option for FormSubmit
      data['_subject'] = "Nouveau rendez-vous - Julija's Royal Dobermans";
      data['_template'] = "table"; // Generates a clean tabular layout in the email

      // Submit via AJAX
      fetch("https://formsubmit.co/ajax/Julijajuric1@iCloud.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        // Success: Hide form and show sleek custom success message
        rdvForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
      })
      .catch(error => {
        console.error("Form submission error:", error);
        
        // Localized error alert
        let errorMsg = "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par courriel.";
        if (currentLang === 'en') {
          errorMsg = "An error occurred while sending. Please try again or contact us directly by email.";
        } else if (currentLang === 'sr') {
          errorMsg = "Došlo je do greške prilikom slanja. Molimo pokušajte ponovo ili nas kontaktirajte direktno putem e-pošte.";
        }
        alert(errorMsg);
        
        // Reset button state to allow retrying
        submitText.classList.remove('hidden');
        submitLoader.classList.add('hidden');
        submitBtn.disabled = false;
      });
    });
  }

  // 4. Animation d'entrée des éléments au scroll (Intersection Observer)
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.dog-card, .chiot-card, .feature, .temoignage-card');
  animateElements.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition= 'all 0.6s ease-out';
    observer.observe(el);
  });

  // 5. Date minimale pour le sélecteur de date
  const dateInput = document.getElementById('date-pref');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // 6. Lightbox Galerie
  const thumbs    = document.querySelectorAll('.galerie-thumb');
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbCounter = document.getElementById('lbCounter');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');

  if (!lightbox) return;

  const slides = Array.from(thumbs).map(t => {
    const bg = t.style.backgroundImage || '';
    const src = bg.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    return {
      src: src,
      caption: t.querySelector('span') ? t.querySelector('span').textContent : ''
    };
  });

  let current = 0;

  function openLightbox(index) {
    current = index;
    showSlide(current, false);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showSlide(index, animate = true) {
    if (animate) {
      lbImg.classList.add('fading');
      setTimeout(() => {
        updateSlide(index);
        lbImg.classList.remove('fading');
      }, 220);
    } else {
      updateSlide(index);
    }
  }

  function updateSlide(index) {
    lbImg.src              = slides[index].src;
    lbImg.alt              = slides[index].caption;
    lbCaption.textContent  = slides[index].caption;
    lbCounter.textContent  = `${index + 1} / ${slides.length}`;
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => openLightbox(i)));
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', prevSlide);
  lbNext.addEventListener('click', nextSlide);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });
});
