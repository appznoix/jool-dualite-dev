import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: MapPin, text: 'Av. Abolição, 3340, Sobre Loja' },
    { icon: Phone, text: '+55 85 99767 7000', href: 'tel:+5585997677000' },
    { icon: Mail, text: 'sunny@jool.com.br', href: 'mailto:sunny@jool.com.br' },
  ];

  return (
    <footer id="contact" className="bg-ocean-deep text-white/80 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-serif font-bold text-gold-elegant">JOOL</h2>
            <p className="mt-2 text-sm">{t('footer.slogan')}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-white mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start space-x-2">
                  <item.icon className="w-4 h-4 text-gold-elegant" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-gold-highlight transition-colors text-sm">{item.text}</a>
                  ) : (
                    <span className="text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
             {/* Can be used for social media links in the future */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs">
          <p>&copy; {currentYear} JOOL. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
