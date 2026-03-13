import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-navy border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60"
        >
          <p className="text-sm font-mono">
            © {new Date().getFullYear()} Djonkounda SOUKOUNA. Tous droits réservés.
          </p>
          <p className="text-sm flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-cyan fill-cyan mx-1" /> et <Code2 className="w-4 h-4 text-cyan mx-1" /> à Montbéliard
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
