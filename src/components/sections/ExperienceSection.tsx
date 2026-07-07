import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { language } = useLanguage();

  const nagaTasks = language === 'fr' ? [
    'Développé deux bots Python autonomes : un bot de veille qui surveille des jeux indépendants sur X, Steam et Bluesky et envoie des alertes Discord quand un jeu gagne en popularité, et un bot de captation de leads qui lit les forums Discord et organise automatiquement les échanges commerciaux dans un CRM Notion',
    'Diagnostiqué et corrigé des bugs silencieux en production — le système continuait de fonctionner, mais les données étaient incorrectes sans aucune erreur visible',
    'Mis en place 104 tests automatisés (pytest) pour protéger le projet contre les régressions',
    'Stack : Python · Scweet · API Discord · API Notion · AT Protocol · SQLite · pytest',
  ] : [
    'Developed two autonomous Python bots: a monitoring bot that tracks indie games on X, Steam and Bluesky and sends Discord alerts when a game gains popularity, and a lead capture bot that reads Discord forums and automatically organizes commercial exchanges into a Notion CRM',
    'Diagnosed and fixed silent production bugs — the system kept running, but data was incorrect with no visible error message',
    'Set up 104 automated tests (pytest) to protect the project against regressions',
    'Stack: Python · Scweet · Discord API · Notion API · AT Protocol · SQLite · pytest',
  ];

  const aidreTasks = language === 'fr' ? [
    'Maintenu et amélioré la plateforme hirra.jobs en production : correction de 15+ bugs, nouvelles fonctionnalités et intégration complète de Stripe (paiements, abonnements, portail client)',
    'Conçu un moteur de scoring IA pour évaluer la compatibilité entre un profil et une offre d\'emploi, avec des règles éthiques pour les professions réglementées (médecin, avocat...)',
    'Piloté la migration de la base de données MongoDB vers PostgreSQL : conception du schéma, migration de 16 utilisateurs sans perte de données, déploiement sur Scaleway',
    'Migration du frontend vers Next.js 16 (SSR, SEO), renforcement de la sécurité (XSS, injections, brute force) et automatisation des workflows avec n8n et l\'API Gemini',
    'Stack : Next.js 16 · Node.js · PostgreSQL · MongoDB · Prisma ORM · Gemini API · Stripe · n8n · Socket.io · Scaleway · Nginx · PM2',
  ] : [
    'Maintained and improved the hirra.jobs platform in production: fixed 15+ bugs, new features and full Stripe integration (payments, subscriptions, customer portal)',
    'Designed an AI scoring engine to evaluate compatibility between a profile and a job offer, with ethical rules for regulated professions (doctor, lawyer...)',
    'Led the MongoDB to PostgreSQL migration: schema design, migration of 16 users with zero data loss, deployed on Scaleway',
    'Frontend migration to Next.js 16 (SSR, SEO), security hardening (XSS, injections, brute force) and workflow automation with n8n and the Gemini API',
    'Stack: Next.js 16 · Node.js · PostgreSQL · MongoDB · Prisma ORM · Gemini API · Stripe · n8n · Socket.io · Scaleway · Nginx · PM2',
  ];

  const mainTasks = language === 'fr' ? [
    'Maintenance et optimisation des logiciels de l\'entreprise',
    'Collaboration en équipe de développement',
    'Participation aux revues de code et documentation technique',
    'Échanges avec les différents acteurs du projet',
  ] : [
    'Maintenance and optimization of company software',
    'Collaboration in the development team',
    'Participation in code reviews and technical documentation',
    'Communication with various project stakeholders',
  ];

  const bankTasks = language === 'fr' ? [
    
    'Approfondissement des outils numériques bancaires',
    'Participation à des projets de communication digitale',
  ] : [
    
    'Deepening knowledge of digital banking tools',
    'Participation in digital communication projects',
  ];

  const hackathonTasks = language === 'fr' ? [
    'Matérialisation d\'une solution anti-vol de véhicule',
    'Définition d\'un système de géolocalisation',
    'Schématisation du dispositif et de l\'application',
    'Gestion d\'équipe — 4ème prix obtenu',
  ] : [
    'Designed an anti-vehicle theft solution',
    'Defined a geolocation system',
    'Schematized the device and application',
    'Team management — 4th prize awarded',
  ];

  return (
    <section id="experience" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'fr' ? 'Expériences' : 'Experience'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'fr' ? 'Mon parcours professionnel' : 'My professional journey'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Stage Naga Agency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-cyan"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-cyan flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold">
                    {language === 'fr' ? 'Stagiaire Développeur Automatisation & IA Agentique' : 'Automation & Agentic AI Developer Intern'}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan/10 text-cyan border border-cyan/30">
                    {language === 'fr' ? 'Stage' : 'Internship'}
                  </span>
                </div>
                <p className="text-lg text-primary font-medium mb-3">Naga Agency</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{language === 'fr' ? 'Mai – Juin 2026' : 'May – June 2026'}</span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {nagaTasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{task}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stage AIDRE Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-primary"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan to-primary flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold">
                    {language === 'fr' ? 'Stagiaire Développeur Full Stack' : 'Full Stack Developer Intern'}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
                    {language === 'fr' ? 'Stage' : 'Internship'}
                  </span>
                </div>
                <p className="text-lg text-primary font-medium mb-3">AIDRE Technologies — hirra.jobs</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{language === 'fr' ? 'Mars – Mai 2026' : 'March – May 2026'}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />La Défense, Paris</span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {aidreTasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{task}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stage Tam Communication dev */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-cyan"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-cyan flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold">
                    {language === 'fr' ? 'Stagiaire en Développement' : 'Development Intern'}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan/10 text-cyan border border-cyan/30">
                    {language === 'fr' ? 'Stage' : 'Internship'}
                  </span>
                </div>
                <p className="text-lg text-primary font-medium mb-3">Tam Communication</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Janvier – Mai 2025</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Bamako, Mali</span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {mainTasks.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{task}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stage BDM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-primary"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan to-primary flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold">
                    {language === 'fr' ? 'Stage Professionnel' : 'Professional Internship'}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
                    {language === 'fr' ? 'Stage' : 'Internship'}
                  </span>
                </div>
                <p className="text-lg text-primary font-medium mb-3">
                  Banque de Développement du Mali (BDM)
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Août – Octobre 2024</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Bamako, Mali</span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {bankTasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{task}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hackathon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-yellow-500/60"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/80 to-orange-500/80 flex-shrink-0">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold">4ème Prix — Hackathon SAYNA</h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                    Compétition
                  </span>
                </div>
                <p className="text-lg text-primary font-medium mb-3">Institut Africain de Management (IAM)</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Octobre 2022</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Bamako, Mali</span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {hackathonTasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{task}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
