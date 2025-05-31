import React from 'react';
import UbicacionSection from '../components/UbicacionSection';
import { motion } from 'framer-motion';

function UbicacionPage() {
  return (

    <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
    <div>
      <UbicacionSection />
    </div>

    </motion.div>
  );
}

export default UbicacionPage;
