import React, { useState } from 'react';
import './UbicacionSection.css';

function UbicacionSection() {

  const [mapLoaded, setMapLoaded] = useState(false);
  return (


    <section className="ubicacion-section">
      <h2 className="ubicacion-title">Ubicación</h2>



    <div className="map-container">
    {!mapLoaded && <div className="map-loading">Cargando mapa...</div>}

        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14370.103629868463!2d-100.2314555!3d25.7862185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ec98faa5add7%3A0xc6ad3536974d5f7d!2sPlaza%20Sendero%20Apodaca!5e0!3m2!1ses!2smx!4v1748649693568!5m2!1ses!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapLoaded(true)}
          className="map-iframe"

        ></iframe>
      </div>

      <div className="map-button-container">
        <a
          href="https://maps.app.goo.gl/3Q2dB5JMcSnFYBJg6" 
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Abrir en Maps
        </a>
      </div>
    </section>
  );
}

export default UbicacionSection;
