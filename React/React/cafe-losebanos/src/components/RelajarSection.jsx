import relajarImage from '../assets/relajarInicio.png';

function RelajarSection() {
  return (
    <section
      style={{
        backgroundColor: '#140d0a',
        color: 'white',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap', 
        gap: '40px', 
        

      }}
    >
      <div style={{ maxWidth: '500px', flex: '1 1 300px' }}>
        <h2 style={{ fontFamily: 'Raleway, sans-serif' ,fontSize: '3rem', margin: '20px', marginBottom: '10px', color :'#fad8a5' }}>Ven a relajarte</h2>
        <p style={{fontFamily: 'Raleway, sans-serif', lineHeight: '1.6', margin: '20px', fontSize: '1rem', color: '#fad8a5'}}>
          Lugar tranquilo libre de distracciones, ideal para pasar un rato calmado.
        </p>
      </div>

      <img
        src={relajarImage}
        
        style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '8px',
          flex: '1 1 300px',
          marginBottom: '40px',
          marginTop: '40px'


        }}
      />
    </section>
  );
}

export default RelajarSection;
