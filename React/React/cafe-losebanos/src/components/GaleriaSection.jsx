import React from 'react';
import './GaleriaSection.css';

import Foto1 from '../assets/galeria2.jpg';
import Foto2 from '../assets/galeria1.jpg';
import Foto3 from '../assets/galeria4.jpg';
import Foto4 from '../assets/galeria5.jpg';
import Foto5 from '../assets/galeria3.jpg';

function GaleriaSection() {
  return (
    <section className="galeria-section" id="galeria">
      <h2 className="galeria-title">Galería</h2>
      <div className="galeria-grid">
        {[Foto1, Foto2, Foto3, Foto4, Foto5].map((img, index) => (
          <img key={index} src={img}  className="galeria-img" />
        ))}
      </div>
    </section>
  );
}

export default GaleriaSection;
