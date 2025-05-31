import React from 'react';
import GaleriaSection from '../components/GaleriaSection';
import { motion } from 'framer-motion';

function Galeria() {
  return (
  <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
  
  <GaleriaSection />
  </motion.div>
  );
}

export default Galeria;
