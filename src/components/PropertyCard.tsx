import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Maximize } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('pt') ? 'pt' : 'en';

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
      style: 'currency',
      currency: lang === 'pt' ? 'BRL' : 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative">
        <img src={property.gallery[0].src} alt={property.gallery[0].alt} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-ocean-deep mb-2">{property.name[lang]}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2 text-gold-elegant" />
          <span>{property.location[lang]}</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-6">
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-2 text-gray-400" />
            <span>{t('featuredProperties.from')} {property.minArea}{t('featuredProperties.areaUnit')}</span>
          </div>
          <div className="font-bold text-ocean-light">
            {t('featuredProperties.from')} {formatPrice(property.minPrice)}
          </div>
        </div>
        <div className="mt-auto">
          <Link 
            to={`/empreendimento/${property.id}`}
            className="block w-full text-center bg-ocean-deep text-white py-3 rounded-md hover:bg-ocean-light transition-colors duration-300 font-medium"
          >
            {t('featuredProperties.explore')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
