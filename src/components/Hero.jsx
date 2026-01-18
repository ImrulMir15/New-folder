export default function Hero() {
  return (
    <section className="section hero-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <p className="animate-in" style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '10px' }}>
            Hello, I am
          </p>
          <h1 className="animate-in delay-1">
            MD Imrul Kowsar Mir
          </h1>
          <h3 className="animate-in delay-2" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            BSc in CSE Final Year
          </h3>
          <p className="animate-in delay-2" style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
            A passionate student at <strong>Southeast University</strong>, dedicated to building modern web technologies and software solutions.
          </p>
          <div className="animate-in delay-3">
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-primary)',
        filter: 'blur(150px)',
        opacity: '0.2',
        zIndex: '-1',
        borderRadius: '50%'
      }}></div>
    </section>
  );
}
