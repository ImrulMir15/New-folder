import profileImg from '../assets/imrul.jpeg';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', alignItems: 'center' }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap-reverse',
        gap: '40px'
      }}>

        {/* Text Content */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div className="animate-in">
            <span className="mono" style={{ color: 'var(--accent-secondary)' }}>&lt;Hello /&gt;</span>
            <span style={{ color: 'var(--text-secondary)', marginLeft: '10px' }}>I am</span>
          </div>

          <h1 className="animate-in delay-1" style={{ position: 'relative' }}>
            MD Imrul <br />
            <span style={{ color: 'var(--accent-primary)' }}>Kowsar Mir</span>
          </h1>

          <div className="animate-in delay-2" style={{ borderLeft: '2px solid var(--accent-secondary)', paddingLeft: '15px', marginBottom: '30px' }}>
            <h3 className="mono" style={{ fontSize: '1.2rem', color: '#fff' }}>QA in 2D Floor Plan Designer</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>@ IOT Lab BD | Cubicasa Vendor</p>
          </div>

          <div className="animate-in delay-3" style={{ display: 'flex', gap: '20px' }}>
            <a href="#experience" className="btn">
              Explore Work
            </a>
            <a href="#contact" className="btn" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Picture Slot */}
        <div className="animate-in delay-1" style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          flexShrink: 0
        }}>
          {/* Decorative Rings */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            border: '1px dashed var(--accent-primary)',
            borderRadius: '50%',
            animation: 'spin 10s linear infinite'
          }}></div>

          {/* Image Container */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--accent-secondary)',
            boxShadow: '0 0 50px rgba(0, 255, 157, 0.2)',
            background: '#111'
          }}>
            <img
              src={profileImg}
              alt="MD Imrul Kowsar Mir"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>

      {/* CSS Spin Animation for the ring */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
