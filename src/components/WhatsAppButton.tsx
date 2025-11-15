import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const { t } = useTranslation();
    const phoneNumber = "5585997677000";
    const message = encodeURIComponent("Olá! Tenho interesse nos imóveis da JOOL e gostaria de mais informações.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('whatsapp')}
            className="fixed bottom-6 right-6 z-40"
        >
            <motion.div
                className="bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle className="h-8 w-8" />
            </motion.div>
        </a>
    );
};

export default WhatsAppButton;
