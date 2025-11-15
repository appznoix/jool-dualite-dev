import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { properties, Property } from '../data/properties';
import { Check } from 'lucide-react';
import PropertyGallery from '../components/property-detail/PropertyGallery';
import PropertyHighlights from '../components/property-detail/PropertyHighlights';
import InterestForm from '../components/property-detail/InterestForm';
import FloorPlanTabs from '../components/property-detail/FloorPlanTabs';
import LocationMap from '../components/property-detail/LocationMap';
import AnimatedSection from '../hooks/useScrollAnimation';

const DetailSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <AnimatedSection className="py-8">
        <h2 className="text-3xl font-serif text-ocean-deep mb-6">{title}</h2>
        {children}
    </AnimatedSection>
);

const PropertyDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const lang = i18n.language.startsWith('pt') ? 'pt' : 'en';

    const property = properties.find(p => p.id === id);

    if (!property) {
        return <div className="text-center py-20">Empreendimento não encontrado.</div>;
    }

    return (
        <div className="bg-brand-light">
            <PropertyGallery property={property} />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                    {/* Main content */}
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-serif text-ocean-deep">{property.name[lang]}</h1>
                            <p className="text-lg text-gray-500 mt-2">{property.location[lang]}</p>
                        </AnimatedSection>

                        <AnimatedSection>
                            <PropertyHighlights property={property} />
                        </AnimatedSection>
                        
                        <DetailSection title={t('propertyDetail.description')}>
                            <p className="text-gray-600 leading-relaxed">{property.description[lang]}</p>
                        </DetailSection>

                        <DetailSection title={t('propertyDetail.amenities')}>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {property.amenities[lang].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <Check className="w-5 h-5 text-gold-elegant mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </DetailSection>

                        <DetailSection title={t('propertyDetail.floorPlans')}>
                            <FloorPlanTabs floorPlans={property.floorPlans} />
                        </DetailSection>

                        <DetailSection title={t('propertyDetail.location')}>
                            <LocationMap mapEmbed={property.mapEmbed} />
                        </DetailSection>
                    </div>

                    {/* Sidebar / Form */}
                    <div className="lg:col-span-1 mt-12 lg:mt-0">
                        <div className="sticky top-28">
                            <InterestForm propertyName={property.name[lang]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailPage;
