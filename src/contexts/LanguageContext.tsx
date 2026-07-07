import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.contact': 'Contact',
    'hero.name': 'Djonkounda SOUKOUNA',
   'hero.title': 'Développeur Full Stack — Orientation Génie Informatique',
    'hero.subtitle': 'Université Marie et Louis Pasteur · Montbéliard',
   'hero.alternance': "Admis en Master Informatique à l'Université Marie et Louis Pasteur, j'approfondis mes compétences en génie informatique et en IA agentique pour la rentrée 2026.",
    'hero.cta': 'Découvrir mon profil',
    'hero.cv': 'Télécharger CV',
    'about.title': 'À propos de moi',
    'about.description': "Passionné par le développement web et logiciel, j'ai acquis une solide maîtrise des technologies full stack (React, Laravel, Vue.js, PHP, Python, MySQL) à travers une formation rigoureuse, des stages en entreprise et des compétitions académiques. Mes projets récents m'ont amené à concevoir des architectures complètes, structurer des APIs et intégrer des services d'intelligence artificielle. Je souhaite poursuivre en Master Informatique pour approfondir la conception de systèmes logiciels robustes et les pratiques modernes de développement et de déploiement.",
    'skills.title': 'Compétences',
    'skills.subtitle': 'Mon stack technique',
    'skills.frontend': 'Front-end',
    'skills.frontend.desc': 'Interfaces modernes et réactives avec Next.js, React, Vue.js et TypeScript.',
    'skills.backend': 'Back-end',
    'skills.backend.desc': 'Développement serveur et APIs avec Node.js, Python, Laravel et bases SQL/NoSQL.',
    'skills.data': 'IA & Automatisation',
    'skills.data.desc': 'IA agentique, automatisation de workflows et intégration de modèles (n8n, Gemini, embeddings).',
    'skills.tools': 'DevOps & Outils',
    'skills.tools.desc': 'Déploiement, conteneurisation et outillage : Git, Docker, CI/CD et intégrations tierces.',
    'projects.title': 'Projets',
    'projects.subtitle': 'Réalisations académiques et personnelles',
    'education.title': 'Formation',
    'education.subtitle': 'Mon parcours académique',
    'experience.title': 'Expérience',
    'experience.subtitle': 'Mon parcours professionnel',
    'contact.title': 'Contact',
    'contact.subtitle': 'Travaillons ensemble',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.info': 'Informations de contact',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.name': 'Djonkounda SOUKOUNA',
   'hero.title': 'Full Stack Developer — Computer Engineering',
    'hero.subtitle': 'Université Marie et Louis Pasteur · Montbéliard',
    'hero.alternance': 'Admitted to a Master\'s in Computer Science at Université Marie et Louis Pasteur, I am deepening my skills in software engineering and agentic AI for the 2026 intake.',
    'hero.cta': 'Discover my profile',
    'hero.cv': 'Download CV',
    'about.title': 'About me',
    'about.description': "Passionate about web and software development, I have gained solid full stack expertise (React, Laravel, Vue.js, PHP, Python, MySQL) through rigorous training, internships and academic competitions. My recent projects led me to design complete architectures, build APIs and integrate artificial intelligence services. I wish to pursue a Master's in Computer Science to deepen my knowledge in robust software system design and modern development and deployment practices.",
    'skills.title': 'Skills',
    'skills.subtitle': 'My technical stack',
    'skills.frontend': 'Front-end',
    'skills.frontend.desc': 'Modern and reactive interfaces with Next.js, React, Vue.js and TypeScript.',
    'skills.backend': 'Back-end',
    'skills.backend.desc': 'Server-side development and APIs with Node.js, Python, Laravel and SQL/NoSQL databases.',
    'skills.data': 'AI & Automation',
    'skills.data.desc': 'Agentic AI, workflow automation and model integration (n8n, Gemini, embeddings).',
    'skills.tools': 'DevOps & Tools',
    'skills.tools.desc': 'Deployment, containerization and tooling: Git, Docker, CI/CD and third-party integrations.',
    'projects.title': 'Projects',
    'projects.subtitle': 'Academic and personal achievements',
    'education.title': 'Education',
    'education.subtitle': 'My academic journey',
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',
    'contact.title': 'Contact',
    'contact.subtitle': "Let's work together",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contact Information',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
