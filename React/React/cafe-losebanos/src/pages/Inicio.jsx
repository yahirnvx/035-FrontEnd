import HeroSection from '../components/HeroSection';
import NaturalSection from '../components/NaturalSection';
import RelajarSection from '../components/RelajarSection';
import { motion } from 'framer-motion';


function Inicio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
    <div>
      <HeroSection />
      <NaturalSection />
      <RelajarSection />
    </div>
    </motion.div>
  );
}

export default Inicio;
