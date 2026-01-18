import { useState, useEffect } from 'react'
import Hero from './components/Hero'
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
        background: scrollY > 50 ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        zIndex: 100,
        transition: 'all 0.3s ease',
        borderBottom: scrollY > 50 ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '1.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            MK
          </div>
          <div>
            <a href="#about" style={{ marginLeft: '20px', fontSize: '0.9rem', fontWeight: '500', opacity: 0.8 }}>About</a>
            <a href="#contact" style={{ marginLeft: '20px', fontSize: '0.9rem', fontWeight: '500', opacity: 0.8 }}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
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
