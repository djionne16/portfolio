import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Github, Code2, Globe, Database, BarChart3, Cpu, ChevronLeft, ChevronRight, ArrowLeft, ExternalLink,ShoppingBag  } from 'lucide-react';

// Images Afrix Streaming
import streaming1 from '@/assets/streaming1.jpg';
import streaming2 from '@/assets/streaming2.jpg';
import streaming3 from '@/assets/streaming3.jpg';
import streaming4 from '@/assets/streaming4.jpg';
import streaming5 from '@/assets/streaming5.jpg';

// Images Générateur d'Images IA
import generateurCover from '@/assets/generateur-cover.jpg';
import GEN1 from '@/assets/GEN1.jpg';
import GEN2 from '@/assets/GEN2.jpg';
import GEN3 from '@/assets/GEN3.jpg';
import GEN4 from '@/assets/GEN4.jpg';


// Images computer comparison
import TECH1 from '@/assets/TECH1.jpeg';
import TECH2 from '@/assets/TECH2.jpeg';
import TECH3 from '@/assets/TECH3.jpeg';
import TECH4 from '@/assets/TECH4.jpeg';
import TECH5 from '@/assets/TECH5.jpeg';
import TECH6 from '@/assets/TECH6.jpeg';
import TECH7 from '@/assets/TECH7.jpeg';

// Images ERP Multi-Boutique
import GES1 from '@/assets/GES1.jpg';
import GES2 from '@/assets/GES2.jpg';
import GES3 from '@/assets/GES3.jpg';
import GES4 from '@/assets/GES4.jpg';
import GES5 from '@/assets/GES5.jpg';
import GES6 from '@/assets/GES6.jpg';
import GES7 from '@/assets/GES7.jpg';

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      id: 1,
      icon: Globe,
      title: language === 'fr' ? 'Afrix — Application de Streaming' : 'Afrix — Streaming Application',
      shortDesc: 'Laravel · PHP · MySQL',
      images: [streaming1, streaming2, streaming3, streaming4, streaming5],
      context: language === 'fr'
        ? "Afrix est une plateforme de streaming dédiée aux contenus africains — films, séries et audio. Le projet est né du constat qu'il existait peu de plateformes mettant en valeur le cinéma africain. L'objectif était de concevoir une expérience utilisateur fluide et moderne, inspirée des grandes plateformes comme Netflix, mais orientée vers un public africain et diaspora."
        : "Afrix is a streaming platform dedicated to African content — movies, series and audio. The project was born from the observation that few platforms showcase African cinema. The goal was to design a smooth and modern user experience, inspired by major platforms like Netflix, but oriented towards an African and diaspora audience.",
      features: language === 'fr' ? [
        'Page d\'accueil dynamique avec hero banner et carrousel de contenus',
        'Catalogue Films, Séries et Audio avec système de recherche',
        'Page de connexion et création de compte utilisateur',
        'Lecture vidéo avec gestion des épisodes par saison',
        'Système de favoris et recommandations',
        'Design responsive adapté mobile et desktop',
      ] : [
        'Dynamic homepage with hero banner and content carousel',
        'Movies, Series and Audio catalog with search system',
        'Login and user account creation page',
        'Video playback with episode management by season',
        'Favorites system and recommendations',
        'Responsive design for mobile and desktop',
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      type: language === 'fr' ? 'Projet personnel' : 'Personal Project',
      github: 'https://github.com/djionne16/afrix.git',
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-blue-950',
    },
    {
      id: 2,
      icon: Code2,
      title: language === 'fr' ? 'Générateur d\'Images IA' : 'AI Image Generator',
      shortDesc: 'JavaScript · API REST',
      images: [generateurCover, GEN1, GEN2, GEN3, GEN4],
      context: language === 'fr'
        ? "Application web connectée à l'API Pollinations permettant la génération d'images par intelligence artificielle à partir de prompts textuels saisis par l'utilisateur."
        : 'Web application connected to the Pollinations API for generating images from text prompts using artificial intelligence.',
      features: language === 'fr' ? [
        'Saisie de prompt textuel par l\'utilisateur',
        'Génération d\'image via API IA Pollinations',
        'Affichage dynamique du résultat',
        'Bibliothèque d\'images générées',
      ] : [
        'Text prompt input by user',
        'Image generation via Pollinations AI API',
        'Dynamic result display',
        'Library of generated images',
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'API REST', 'Pollinations API'],
      type: language === 'fr' ? 'Projet personnel' : 'Personal Project',
      github: 'https://github.com/djionne16/ia_generative_image.git',
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-purple-950',
    },
    /*{
      id: 3,
      icon: Globe,
      title: language === 'fr' ? 'Gestion Hôtelière' : 'Hotel Management App',
      shortDesc: 'PHP · MySQL · MCD/MLD',
      images: [],
      context: language === 'fr'
        ? "Application web complète pour la gestion d'un hôtel, incluant la gestion des réservations, des clients, des chambres et de la facturation. Le projet a nécessité une modélisation rigoureuse de la base de données avec un MCD/MLD complet."
        : 'Complete web application for hotel management including reservations, clients, rooms and billing management. The project required rigorous database modeling with a complete MCD/MLD.',
      features: language === 'fr' ? [
        'Gestion des réservations et disponibilités',
        'Fiche client et historique des séjours',
        'Gestion des chambres par catégorie et tarif',
        'Facturation et génération de reçus',
        'Tableau de bord administrateur',
        'Modélisation MCD/MLD complète',
      ] : [
        'Reservation and availability management',
        'Client profile and stay history',
        'Room management by category and rate',
        'Billing and receipt generation',
        'Administrator dashboard',
        'Complete MCD/MLD modeling',
      ],
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'MCD/MLD'],
      type: language === 'fr' ? 'Projet académique' : 'Academic Project',
      github: 'https://github.com',
      color: 'from-emerald-600 to-teal-400',
      bgColor: 'bg-emerald-950',
    },*/
    {
      
  id: 4,
  icon: BarChart3,
  title: 'TechMatch — Plateforme d\'Aide au Choix PC',
  shortDesc: 'Laravel 12 · Vue.js 3 · Inertia.js',
  images: [TECH1, TECH2, TECH3, TECH4, TECH5, TECH6, TECH7],
  context: language === 'fr'
    ? "TechMatch est une plateforme web d'aide au choix de PC conçue pour répondre à deux profils d'utilisateurs distincts. Le mode Novice permet de rechercher et comparer des PC complets facilement, tandis que le mode Expert offre un configurateur sur-mesure avec un interface graphe interactif (Vue Flow) pour assembler sa propre configuration. La plateforme intègre une vérification de compatibilité en temps réel et une génération de devis en PDF."
    : "TechMatch is a PC selection assistant platform designed for two distinct user profiles. The Novice mode allows easy search and comparison of complete PCs, while the Expert mode offers a custom configurator with an interactive graph interface (Vue Flow) to build custom configurations. The platform includes real-time compatibility checking and PDF quote generation.",
  features: language === 'fr' ? [
    'Mode Novice : recherche et comparaison de PC complets pour faciliter le choix',
    'Mode Expert : configurateur sur-mesure avec interface graphe interactif via Vue Flow',
    'Vérification de compatibilité des composants en temps réel',
    'Génération de devis PDF avec DomPDF',
    'Interface réactive construite avec Vue.js 3 et Inertia.js',
    'Backend robuste avec Laravel 12 et Tailwind CSS',
  ] : [
    'Novice mode: search and comparison of complete PCs for easy selection',
    'Expert mode: custom configurator with interactive graph interface via Vue Flow',
    'Real-time component compatibility checking',
    'PDF quote generation with DomPDF',
    'Reactive interface built with Vue.js 3 and Inertia.js',
    'Robust backend with Laravel 12 and Tailwind CSS',
  ],
  technologies: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'Tailwind CSS', 'DomPDF', 'MySQL'],
  type: language === 'fr' ? 'Projet personnel' : 'Personal Project',
  github: 'https://github.com/djionne16/TECHMATCH.git',
  color: 'from-orange-600 to-yellow-400',
  bgColor: 'bg-orange-950',
},
    /*{
      id: 5,
      icon: Database,
      title: 'Database Challenge — IAM',
      shortDesc: 'PHP · MySQL · MCD/MLD',
      images: [],
      context: language === 'fr'
        ? "Compétition académique organisée par l'Institut Africain de Management (IAM) en juillet 2023. L'objectif était de concevoir un système de base de données complet et de développer un site web dynamique fonctionnel en temps limité."
        : 'Academic competition organized by the Institut Africain de Management (IAM) in July 2023. The objective was to design a complete database system and develop a functional dynamic website in limited time.',
      features: language === 'fr' ? [
        'Élaboration d\'un dictionnaire de données complet',
        'Conception du modèle conceptuel (MCD)',
        'Transformation en modèle logique (MLD)',
        'Développement d\'un site web dynamique',
        'Gestion et optimisation de la base de données',
        'Présentation et défense du projet devant jury',
      ] : [
        'Development of a complete data dictionary',
        'Conceptual model design (MCD)',
        'Transformation into logical model (MLD)',
        'Dynamic website development',
        'Database management and optimization',
        'Project presentation and defense before jury',
      ],
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'MCD/MLD'],
      type: language === 'fr' ? 'Compétition — Juillet 2023' : 'Competition — July 2023',
      github: 'https://github.com',
      color: 'from-cyan-600 to-blue-400',
      bgColor: 'bg-cyan-950',
    },*/

    {
     
  id: 5, // Assure-toi que l'ID suit la logique de ton tableau
  icon: ShoppingBag, // Tu peux utiliser l'icône ShoppingBag de Lucide-React
  title: 'ERP Multi-Boutique — Fullstack Node.js',
  shortDesc: 'Node.js (Natif) · MySQL · Architecture Multi-Tenant',
  images: [GES1, GES2, GES3,GES4,GES5,GES6,GES7], // Tu pourras ajouter tes captures d'écran ici
  context: language === 'fr'
    ? "Conception d'un système de gestion commerciale (ERP) robuste permettant de piloter plusieurs boutiques indépendantes. Développé en Node.js pur sans framework (exigences académiques), le projet centralise la gestion des stocks, le suivi des commandes et une comptabilité précise (bénéfice net réel) pour garantir la concordance avec la caisse physique."
    : 'Design of a robust Business Management System (ERP) to manage multiple independent shops. Developed in native Node.js without frameworks (academic requirement), the project centralizes stock management, order tracking, and precise accounting (real net profit) to ensure consistency with physical cash.',
  features: language === 'fr' ? [
    'Architecture Multi-Tenant : Isolation stricte des données par boutique',
    'Dashboard Global : Synthèse en temps réel du bénéfice mensuel et de la valeur du stock',
    'Gestion d\'Inventaire : Mise à jour automatique des stocks lors des livraisons',
    'Workflow de Commandes : Suivi des états (En attente, Livré, Reporté) avec commentaires',
    'Journal de Caisse : Gestion des flux entrants/sortants avec motifs obligatoires',
    'Système de Rappel : Interface dédiée pour le suivi des commandes non livrées',
    'Développement Back-end : Routage manuel et parsing de données en Node.js natif',
  ] : [
    'Multi-Tenant Architecture: Strict data isolation for each shop',
    'Global Dashboard: Real-time synthesis of monthly profit and stock value',
    'Inventory Management: Automatic stock updates upon delivery',
    'Order Workflow: Status tracking (Pending, Delivered, Rescheduled) with comments',
    'Cash Journal: Management of cash flow with mandatory reasons for expenses',
    'Reminder System: Dedicated interface for tracking undelivered orders',
    'Back-end Development: Manual routing and data parsing in native Node.js',
  ],
  technologies: ['Node.js', 'MySQL', 'JavaScript (Vanilla)', 'HTML/CSS', 'Architecture Multi-Tenant'],
  type: language === 'fr' ? 'Projet Académique & Professionnel — 2026' : 'Academic & Professional Project — 2026',
  github: 'https://github.com/ton-depot', // Remplace par ton lien réel
  color: 'from-emerald-600 to-teal-400',
  bgColor: 'bg-emerald-950',
},
   /* {
      id: 6,
      icon: Cpu,
      title: language === 'fr' ? 'App Client/Serveur C++' : 'C++ Client/Server App',
      shortDesc: 'C++ · Qt · Multithread',
      images: [],
      context: language === 'fr'
        ? "Application client/serveur multithreadée développée en C++ avec le framework Qt. Le projet met en œuvre les concepts avancés de programmation système : gestion de threads, communication réseau TCP/IP et synchronisation des processus."
        : 'Multithreaded client/server application developed in C++ with the Qt framework. The project implements advanced system programming concepts: thread management, TCP/IP network communication and process synchronization.',
      features: language === 'fr' ? [
        'Serveur capable de gérer plusieurs clients simultanément',
        'Communication en temps réel via protocole TCP/IP',
        'Gestion des threads et synchronisation',
        'Interface graphique avec Qt Creator',
        'Gestion des connexions et déconnexions',
        'Échange de messages entre clients',
      ] : [
        'Server capable of handling multiple clients simultaneously',
        'Real-time communication via TCP/IP protocol',
        'Thread management and synchronization',
        'Graphical interface with Qt Creator',
        'Connection and disconnection management',
        'Message exchange between clients',
      ],
      technologies: ['C++', 'Qt', 'Multithread', 'TCP/IP'],
      type: language === 'fr' ? 'Projet académique' : 'Academic Project',
      github: 'https://github.com',
      color: 'from-red-600 to-rose-400',
      bgColor: 'bg-red-950',
    },*/
  ];

  const selected = selectedProject !== null ? projects[selectedProject] : null;

  const nextImage = () => {
    if (selected && selected.images.length > 0) {
      setCurrentImage((prev) => (prev + 1) % selected.images.length);
    }
  };

  const prevImage = () => {
    if (selected && selected.images.length > 0) {
      setCurrentImage((prev) => (prev - 1 + selected.images.length) % selected.images.length);
    }
  };

  const openProject = (index: number) => {
    setSelectedProject(index);
    setCurrentImage(0);
  };

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t('projects.subtitle')}</p>
          <p className="text-sm text-muted-foreground/60 font-mono">
            {language === 'fr' ? '← Cliquez sur un projet pour en savoir plus →' : '← Click a project to learn more →'}
          </p>
        </motion.div>

        {/* Grille style Pistone */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-card"
              onClick={() => openProject(index)}
            >
              {project.images.length > 0 ? (
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full ${project.bgColor} flex items-center justify-center`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/50 text-xs font-mono">{project.shortDesc}</span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white font-bold text-sm md:text-base leading-tight mb-2">{project.title}</p>
                <span className="text-cyan text-xs font-mono px-2 py-0.5 rounded-full bg-cyan/20 border border-cyan/30">
                  {project.type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-xs font-semibold truncate">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Page détail projet — plein écran */}
      <AnimatePresence>
        {selected !== null && selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background overflow-y-auto"
          >
            {/* Header fixe */}
            <div className="sticky top-0 z-10 glass border-b border-border px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
              </button>
              <div className="flex items-center gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">

              {/* Titre et type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-10"
              >
                <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono mb-4 bg-gradient-to-r ${selected.color} text-white`}>
                  {selected.type}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{selected.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Carrousel d'images */}
              {selected.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  {/* Image principale */}
                  <div className="relative rounded-2xl overflow-hidden bg-secondary mb-4 aspect-video">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={selected.images[currentImage]}
                        alt={`${selected.title} - ${currentImage + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {selected.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selected.images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImage(i)}
                              className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-white w-6' : 'bg-white/50'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {selected.images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selected.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImage(i)}
                          className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-cyan shadow-glow' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                          <img src={img} alt={`thumb ${i}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Contenu détaillé */}
              <div className="grid md:grid-cols-2 gap-10">

                {/* Contexte */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card rounded-2xl p-8 shadow-card"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selected.color} flex items-center justify-center mb-5`}>
                    <selected.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold mb-4">
                    {language === 'fr' ? '🎯 Contexte du projet' : '🎯 Project Context'}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {selected.context}
                  </p>
                </motion.div>

                {/* Fonctionnalités */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card rounded-2xl p-8 shadow-card"
                >
                  <h2 className="text-xl font-bold mb-5">
                    {language === 'fr' ? '⚙️ Fonctionnalités' : '⚙️ Features'}
                  </h2>
                  <ul className="space-y-3">
                    {selected.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-br ${selected.color}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Stack technique */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-card rounded-2xl p-8 shadow-card"
              >
                <h2 className="text-xl font-bold mb-5">
                  {language === 'fr' ? '🛠️ Stack technique' : '🛠️ Tech Stack'}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {selected.technologies.map((tech) => (
                    <div
                      key={tech}
                      className={`px-5 py-3 rounded-xl bg-gradient-to-br ${selected.color} bg-opacity-10 text-sm font-mono font-semibold text-white shadow-md`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bouton GitHub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex justify-center"
              >
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r ${selected.color} text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity`}
                >
                  <Github className="w-6 h-6" />
                  {language === 'fr' ? 'Voir le code source' : 'View source code'}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
