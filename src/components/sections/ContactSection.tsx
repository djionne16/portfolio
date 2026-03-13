import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target as HTMLFormElement;
  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

  try {
   await emailjs.send(
  'service_v1wu7cr',
  'template_x6rhfqn',
  {
    name: name,
    email: email,
    message: message,
    time: new Date().toLocaleString('fr-FR'),
  },
  'DrrcLtzhybBd1O4DL'


  //emailjs.send("service_v1wu7cr","template_x6rhfqn",{
  //name: "Djonkounda",
  //time: "10H",
  //message: "TEST",
  //email: "soukounadjonkounda16@gmail.com",
  //});
  );
    toast({
      title: "Message envoyé ! ✅",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    formRef.current?.reset();
  } catch (error) {
    toast({
      title: "Erreur ❌",
      description: "Une erreur est survenue. Réessayez ou contactez-moi par email.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    { icon: Mail, label: 'soukounadjonkounda16@gmail.com', href: 'mailto:soukounadjonkounda16@gmail.com' },
    { icon: Phone, label: '07 46 38 69 69', href: 'tel:+33746386969' },
    { icon: MapPin, label: 'Montbéliard (25200), France', href: '#' },
    { icon: Github, label: 'github.com/djionne16', href: 'https://github.com/djionne16' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" className="py-24 bg-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-primary-foreground/70">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder={t('contact.name')}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-cyan"
              />
              <Input
                name="email"
                type="email"
                placeholder={t('contact.email')}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-cyan"
              />
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                required
                rows={5}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-cyan resize-none"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan hover:bg-cyan-light text-navy font-semibold py-6 text-lg"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full"
                  />
                ) : (
                  <>{t('contact.send')}<Send className="ml-2 w-5 h-5" /></>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-primary-foreground mb-8">{t('contact.info')}</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan/20 group-hover:bg-cyan/30 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors text-sm">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;