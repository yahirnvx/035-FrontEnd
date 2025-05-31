import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cartIcon from '../assets/cart.png';



const linkStyle = {
  color: '#140d0a',
  textDecoration: 'none',
  fontFamily: 'Raleway, sans-serif',
  fontSize: 'clamp(0.7rem, 2vw, 1rem)',
};

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        backgroundColor: '#ffffff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >






      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <img
          src={logo}
          alt="Logo Los Ébanos"
          style={{ height: '40px', objectFit: 'contain' }}
        />
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: 'clamp(10px, 2vw, 30px)',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" className='nav-link'>Inicio</Link>
          </li>
          <li>
            <Link to="/menu" className='nav-link'>Menú</Link>
          </li>
          <li><Link to="/ubicacion" className='nav-link'>Ubicación</Link></li> 

          <li><Link to="/galeria" className='nav-link'>Galería</Link></li>

        </ul>
      </div>





      <div>
      <img
        src={cartIcon}
        alt="Carrito de compras"
        style={{
          paddingRight:'50px',
          height: '4vh',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        onClick={() => {
          console.log('Carrito clickeado');
        }}
      />
    </div>

    </nav>
  );
}

export default Navbar;
