import naturalImage from '../assets/naturalInicio.png';

function NaturalSection() {
  return (
    <section
      style={{
        flexWrap: 'wrap', 

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <img
        src={naturalImage}
        alt="Café Natural"
        style={{
          borderRadius: '50%',
          width: '300px', 
          height: '300px',
          objectFit: 'cover',
          margin: '20px',
        }}
      />
      <div
        style={{
          color: '#35221b',
          maxWidth: '500px',
          margin: '20px',
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '3rem', 
            marginBottom: '3rem',
            marginTop: '-2rem',
            fontWeight: 'bold',
            fontFamily: 'Raleway, sans-serif',
          }}
        >
          100% Natural
        </h2>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            fontFamily: 'Raleway, sans-serif',
          }}
        >
          Materia prima cultivada sin insecticidas con un proceso 100% orgánico y sustentable.
        </p>
      </div>
    </section>
  );
}

export default NaturalSection;
