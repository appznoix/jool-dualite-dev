import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isPt = i18n.language.startsWith('pt');

  return (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <button onClick={() => changeLanguage('pt')} className={`${isPt ? 'text-gold-elegant' : 'text-white/70 hover:text-white'}`}>
        PT
      </button>
      <div className="w-px h-4 bg-white/30"></div>
      <button onClick={() => changeLanguage('en')} className={`${!isPt ? 'text-gold-elegant' : 'text-white/70 hover:text-white'}`}>
        EN
      </button>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t('header.home'), href: '#home' },
    { label: t('header.properties'), href: '#properties' },
    { label: t('header.whyJool'), href: '#why-jool' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/80 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-3xl font-serif font-bold text-gold-elegant">
            JOOL
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white/80 hover:text-gold-highlight transition-colors duration-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-ocean-deep"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navItems.map((item) => (
                <motion.a key={item.label} variants={itemVariants} href={item.href} onClick={() => setIsOpen(false)} className="text-white/80 hover:text-gold-highlight text-lg">
                  {item.label}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="pt-4">
                <LanguageSwitcher />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
