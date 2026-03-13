import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t, language } = useLanguage();

  const education = [
    {
      degree: 'Licence 3 Informatique',
      specialization: language === 'fr' ? '' : '',
      school: 'Université Marie et Louis Pasteur — UFR-STGI de Montbéliard, France',
      period: 'Depuis août 2025',
      description: language === 'fr'
        ? ''
        : '',
      current: true,
      icon: GraduationCap,
    },
    {
      degree: language === 'fr' ? 'Licence en Développement d\'Applications' : 'Degree in Application Development',
      specialization: '',
      school: 'Institut Africain de Management (IAM) — Bamako, Mali',
      period: 'Novembre 2021 - Juillet 2024',
      description: language === 'fr'
        ? 'Formation en développement logiciel, conception de bases de données, programmation web et gestion de projets informatiques.'
        : 'Training in software development, database design, web programming and IT project management.',
      current: false,
      icon: GraduationCap,
    },
    {
      degree: language === 'fr' ? 'Formation en Digital Marketing' : 'Digital Marketing Training',
      specialization: '',
      school: 'SAYNA — Bamako, Mali',
      period: 'Septembre – Décembre 2023',
      description: language === 'fr'
        ? 'Formation en ligne : stratégie digitale, community management, SEO et marketing des réseaux sociaux.'
        : 'Online training: digital strategy, community management, SEO and social media marketing.',
      current: false,
      icon: Award,
    },
    {
      degree: language === 'fr' ? 'Baccalauréat — Série Sciences Exactes' : 'Baccalaureate — Exact Sciences',
      specialization: '',
      school: 'Rosey Abantara — Bamako, Mali',
      period: '2020 – 2021',
      description: language === 'fr'
        ? 'Baccalaureat scientifique .'
        : 'General scientific education ',
      current: false,
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('education.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('education.subtitle')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan to-primary/30" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <div className={`absolute left-5 w-6 h-6 rounded-full border-4 ${
                  edu.current
                    ? 'bg-cyan border-cyan animate-pulse-glow'
                    : 'bg-card border-primary'
                }`} />

                <div className={`bg-card rounded-2xl p-6 shadow-card ${edu.current ? 'border-2 border-cyan/30' : ''}`}>
                  {edu.current && (
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan/10 text-cyan mb-3">
                      {language === 'fr' ? 'En cours' : 'Current'}
                    </span>
                  )}

                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      {edu.specialization && (
                        <p className="text-cyan font-medium mb-2">{edu.specialization}</p>
                      )}
                      <p className="text-muted-foreground flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 flex-shrink-0" />
                        {edu.school}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="mt-4 text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
