import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Navigation (Simple Overlay) */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px',
        background: scrollY > 50 ? 'rgba(5, 10, 14, 0.9)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        zIndex: 100,
        transition: 'all 0.3s ease',
        borderBottom: scrollY > 50 ? '1px solid rgba(0, 255, 157, 0.1)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="mono" style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--accent-primary)' }}>
            MK_
          </div>
          <div className="mono">
            <a href="#about" style={{ marginLeft: '20px', fontSize: '0.9rem' }}>About</a>
            <a href="#experience" style={{ marginLeft: '20px', fontSize: '0.9rem' }}>Exp.</a>
            <a href="#contact" style={{ marginLeft: '20px', fontSize: '0.9rem' }}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <About />
        <Contact />
      </main>

      <footer style={{ padding: '30px 0', textAlign: 'center', color: '#666', borderTop: '1px solid #222', marginTop: '40px' }}>
        <p style={{ fontSize: '0.8rem', margin: 0 }}>
          &copy; {new Date().getFullYear()} MD Imrul Kowsar Mir. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
