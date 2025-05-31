import imageInicio from '../assets/cafeInicio.png'; 
import { Link } from 'react-router-dom';
import './HeroSection.css';



function HeroSection() {
  return (
    <section
      style={{
        width: '100vw',               
        height: 'clamp(100px, 50vh, 300px)',              
        backgroundImage: `url(${imageInicio})`,
        backgroundSize: 'cover' ,
        backgroundPosition: 'center',
        padding: '140px 0px',
        textAlign: 'center',
        color: 'white',
        marginTop: '65px',
      }}
    >
      <h1 style={{ margin: '20px 0', fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 6rem)'}}>Café Los Ébanos</h1>
      <p style={{ margin: '20px 0', fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 2rem)'}}>Cafetería artesanal sirviendo lo mejor del café</p>
      
      <a href="#menu" style={{ textDecoration: 'none' }}>

      <Link to="/menu" className="ver-menu-btn">
        Ver Menú
      </Link>

          </a>
    </section>
  );
}

export default HeroSection;
