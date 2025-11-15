import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Gem, Map, ShieldCheck } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import AnimatedSection from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1470&q=80')]"></div>
      <div className="absolute inset-0 bg-ocean-deep opacity-60"></div>
      <motion.div 
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">{t('hero.headline')}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">{t('hero.subheadline')}</p>
        <motion.a 
          href="#properties"
          className="bg-gold-elegant text-ocean-deep font-bold py-3 px-8 rounded-md text-lg hover:bg-gold-highlight transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
};

const FeaturedPropertiesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="properties" className="py-20 lg:py-28 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-center text-ocean-deep mb-12">{t('featuredProperties.title')}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <AnimatedSection key={prop.id} delay={index * 0.2}>
              <PropertyCard property={prop} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyJoolSection = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Map, title: t('whyJool.item1_title'), desc: t('whyJool.item1_desc') },
    { icon: Gem, title: t('whyJool.item2_title'), desc: t('whyJool.item2_desc') },
    { icon: ShieldCheck, title: t('whyJool.item3_title'), desc: t('whyJool.item3_desc') },
  ];
  return (
    <section id="why-jool" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-center text-ocean-deep mb-12">{t('whyJool.title')}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center">
                <div className="bg-gold-elegant/10 p-4 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-gold-elegant" />
                </div>
                <h3 className="text-xl font-bold text-ocean-deep mb-2">{item.title}</h3>
                <p className="text-gray-600 max-w-xs">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 lg:py-28 bg-ocean-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">{t('testimonials.title')}</h2>
                    <blockquote className="max-w-3xl mx-auto">
                        <p className="text-xl italic text-white/90">"{t('testimonials.quote')}"</p>
                        <footer className="mt-6 text-gold-highlight font-semibold">{t('testimonials.author')}</footer>
                    </blockquote>
                </AnimatedSection>
            </div>
        </section>
    )
}

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesSection />
      <WhyJoolSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
