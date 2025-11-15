import { useTranslation } from 'react-i18next';
import { BedDouble, Bath, Car, Maximize } from 'lucide-react';
import { Property } from '../../data/properties';

interface PropertyHighlightsProps {
  property: Property;
}

const PropertyHighlights = ({ property }: PropertyHighlightsProps) => {
  const { t } = useTranslation();

  const highlights = [
    { icon: BedDouble, label: t('propertyDetail.bedrooms'), value: property.highlights.bedrooms },
    { icon: Bath, label: t('propertyDetail.bathrooms'), value: property.highlights.bathrooms },
    { icon: Maximize, label: t('propertyDetail.area'), value: `${property.minArea}${t('featuredProperties.areaUnit')}` },
    { icon: Car, label: t('propertyDetail.parking'), value: property.highlights.parking },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-4 border-y border-brand-gray">
      {highlights.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <item.icon className="w-7 h-7 text-gold-elegant mb-2" />
          <span className="font-bold text-lg text-ocean-deep">{item.value}</span>
          <span className="text-sm text-gray-500">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights;
