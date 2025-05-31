import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import UbicacionPage from './pages/Ubicacion';
import Galeria from './pages/Galeria';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ubicacion" element={<UbicacionPage />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
