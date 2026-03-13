import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const stack = ['React', 'Laravel', 'Vue.js', 'PHP', 'Python', 'MySQL'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto">

          {/* Carte animée */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="perspective-[1000px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{
                rotateY: isFlipped ? 180 : 0,
                y: [0, -10, 0],
              }}
              transition={{
                rotateY: { duration: 0.6, ease: 'easeInOut' },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative w-64 h-80 md:w-72 md:h-96"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-cyan/40 shadow-glow bg-card flex flex-col items-center justify-center p-6"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(217_100%_55%/0.15),transparent_60%)]" />
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center mb-6 shadow-glow">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-primary-foreground text-2xl font-bold mb-1 font-mono">DS</h3>
               <p className="text-cyan text-xs font-mono tracking-widest uppercase mb-6">Génie Informatique</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.slice(0, 4).map((s) => (
                    <span key={s} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-primary-foreground/70 font-mono">{s}</span>
                  ))}
                </div>
                <p className="text-primary-foreground/40 text-xs font-mono mt-6">← Retourner</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-cyan/40 shadow-glow bg-navy flex flex-col items-center justify-center p-6 text-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217_100%_55%/0.1),transparent_70%)]" />
                <p className="text-cyan font-mono text-4xl mb-4">{'</>'}</p>
                <h3 className="text-primary-foreground text-lg font-bold mb-2">Djonkounda SOUKOUNA</h3>
                <p className="text-cyan text-sm font-medium mb-4">L3 Informatique</p>
                <p className="text-primary-foreground/60 text-xs font-mono">Montbéliard, France</p>
                <p className="text-primary-foreground/60 text-xs font-mono mt-1">Stage dès mars 2026</p>
                <p className="text-cyan font-mono text-4xl mt-4">{'</>'}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-mono mb-6"
            >
              {'<'} Développeur Full Stack {'>'}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4"
            >
              {t('hero.name')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-foreground/80 mb-2"
            >
              {t('hero.title')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-cyan font-medium mb-4"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-primary-foreground/70 mb-8 max-w-lg"
            >
              {t('hero.alternance')}
            </motion.p>

            {/* Stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
            >
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-secondary border border-border text-foreground/70"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="bg-cyan hover:bg-cyan-light text-navy font-semibold px-8 py-6 text-lg"
              >
                {t('hero.cta')}
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-cyan/40 text-cyan hover:bg-cyan/10 font-semibold px-8 py-6 text-lg"
              >
               <a href="/CV_MASTER_Djonkounda_SOUKOUNA.pdf" download>
                  {t('hero.cv')}
                  <Download className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
