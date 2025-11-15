import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FloorPlan } from '../../data/properties';

interface FloorPlanTabsProps {
  floorPlans: FloorPlan[];
}

const FloorPlanTabs = ({ floorPlans }: FloorPlanTabsProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('pt') ? 'pt' : 'en';
  const [selectedTab, setSelectedTab] = useState(floorPlans[0]);

  if (!floorPlans || floorPlans.length === 0) return null;

  return (
    <div>
      <div className="flex border-b border-brand-gray">
        {floorPlans.map((plan) => (
          <button
            key={plan.id}
            className={`py-2 px-4 text-sm md:text-base font-medium transition-colors ${
              plan.id === selectedTab.id
                ? 'border-b-2 border-gold-elegant text-ocean-deep'
                : 'text-gray-500 hover:text-ocean-light'
            }`}
            onClick={() => setSelectedTab(plan)}
          >
            {plan.name[lang]}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab.id}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <img src={selectedTab.image} alt={`Floor plan for ${selectedTab.name[lang]}`} className="w-full rounded-lg shadow-md" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloorPlanTabs;
