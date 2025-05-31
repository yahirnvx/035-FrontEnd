import MenuSection from '../components/MenuSection';
import { motion } from 'framer-motion';


function Menu() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
    <>
      <MenuSection />
    </>
    </motion.div>
  );
}

export default Menu;

