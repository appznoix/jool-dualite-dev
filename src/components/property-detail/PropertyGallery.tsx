import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Property } from '../../data/properties';

interface PropertyGalleryProps {
  property: Property;
}

const PropertyGallery = ({ property }: PropertyGalleryProps) => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slides = property.gallery.map(img => ({ src: img.src }));

  return (
    <>
      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${property.gallery[0].src})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        <motion.button
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-white/90 text-ocean-deep px-4 py-2 rounded-lg shadow-md hover:bg-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Camera className="w-5 h-5" />
          <span className="font-semibold">{t('propertyDetail.viewGallery')}</span>
        </motion.button>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
      />
    </>
  );
};

export default PropertyGallery;
