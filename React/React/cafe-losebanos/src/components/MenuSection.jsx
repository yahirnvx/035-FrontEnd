import React, { useState } from 'react';
import Espresso from '../assets/espresso.jpg';
import Cappuccino from '../assets/cappuccino.jpg';
import Latte from '../assets/latte.jpg';
import Mocha from '../assets/mocha.jpg';
import CafeGrano from '../assets/cafegrano.png';
import FiltrosCafe from '../assets/filtroscafe.png';




import './MenuSection.css';


function MenuSection() {

  
  const [showToast, setShowToast] = useState(false);
    const handleAddToCart = () => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    };

    


    


  const items = [
    { name: 'Espresso', img: Espresso, bgColor: '#2b1b17', textColor: 'white', btnBg: '#fdf6ed', btnColor: '#2b1b17' },
    { name: 'Cappuccino', img: Cappuccino, bgColor: '#fddedb', textColor: '#140d0a', btnBg: '#35221b', btnColor: '#fdf6ed' },
    { name: 'Latte', img: Latte, bgColor: '#2b1b17', textColor: 'white', btnBg: '#fdf6ed', btnColor: '#2b1b17' },
    { name: 'Mocha', img: Mocha, bgColor: '#fddedb', textColor: '#140d0a', btnBg: '#35221b', btnColor: '#fdf6ed' },

  ];

  return (
    <section id="menu" className="menu-section">



            {showToast && (
              <div className="toast-notification">
                Agregado al carrito
              </div>
            )}


      <h2 className="menu-title">Menu</h2>
      <h2 className="menu-subtitle">Café Caliente</h2>


     


      <div className="menu-items">
        {items.map((item, i) => (
          <div key={i} className="menu-item" style={{ backgroundColor: item.bgColor, color: item.textColor }}>
            <img src={item.img} alt={item.name} className="menu-item-image" />
            <div className="menu-item-info">
              <h3>{item.name}</h3>

              <button onClick={handleAddToCart}   
                className={`comprar-btn ${item.btnColor === '#fdf6ed' ? 'claro' : 'oscuro'}`}
                >Comprar
              </button>
              
            </div>
          </div>
        ))}
      </div>


    <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px' }}>
       
        <h3 style={{ fontSize: '3rem', color: '#140d0a', fontFamily: 'Raleway, sans-serif', margin: '20px' }}>
          Para tu Café Casero
        </h3>

        {/*Café en Grano*/}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            backgroundColor: '#fddedb',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <div style={{ flex: 1, color: '#140d0a', fontFamily: 'Raleway, sans-serif', fontWeight: 'bold' }}>
            <p style={{ fontSize: '3vw', marginBottom: '10px', padding: '40px',  }}>Bolsa de Café en Grano (1 kg)</p>
          </div>

          <div style=
          {{ display: 'flex', flexDirection: 'column', alignItems:'center', }}>


            <img
              src={CafeGrano}
              style={{ width: 'clamp(150px, 35vw, 300px)', borderRadius: '50px', marginBottom: '10px'  }}
            />

            <button
              className="comprar-btn claro" onClick={handleAddToCart}
            >
              Comprar
            </button>
          </div>
        </div>



        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            backgroundColor: '#fddedb',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <div style={{ flex: 1, color: '#140d0a', fontFamily: 'Raleway, sans-serif' }}>
            <p style={{ fontSize: '3vw', marginBottom: '10px', padding: '40px',fontWeight: 'bold' }}>Filtros para Café 100pz</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={FiltrosCafe}
              style={{ width: 'clamp(150px, 35vw, 300px)',  borderRadius: '50px', marginBottom: '10px' }}
            />
            <button
              className="comprar-btn claro" onClick={handleAddToCart}
            >
              Comprar
            </button>
          </div>

          
        </div>
      </div>


    </section>
  );
}

export default MenuSection;
