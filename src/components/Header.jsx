import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: scrolled ? 'rgba(245,235,221,0.95)' : 'rgba(245,235,221,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(47,111,94,0.08)' : 'none',
      padding: '1.2rem 0',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
          <div style={{ 
            width: '44px', height: '44px', borderRadius: '50%', 
            border: '1px solid rgba(47, 111, 94, 0.3)',
            backgroundColor: 'rgba(47, 111, 94, 0.04)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center' 
          }}>
            <Leaf size={22} color="rgb(47, 111, 94)" strokeWidth={1.5} />
          </div>
          <div>
            <div className="font-serif" style={{ fontSize: '1.5rem', color: 'rgb(47, 111, 94)', lineHeight: 1 }}>Vd. Prajakta</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgb(74, 107, 96)', textTransform: 'uppercase', marginTop: '0.3rem' }}>AYURVEDA</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem' }}>
          {['About', 'Doshas', 'Services', 'Products', 'Journal', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{
              fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '1rem', color: 'rgb(74, 107, 96)',
              textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500
            }}
              onMouseEnter={e => e.target.style.color = 'rgb(47, 111, 94)'}
              onMouseLeave={e => e.target.style.color = 'rgb(74, 107, 96)'}
            >{item}</a>
          ))}
        </nav>

        {/* CTA */}
        <button style={{
          padding: '0.75rem 1.8rem', borderRadius: '9999px',
          backgroundColor: 'rgb(47, 111, 94)', color: 'white',
          fontFamily: 'Outfit, system-ui, sans-serif', fontWeight: 600, fontSize: '0.9rem',
          border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(47,111,94,0.2)',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.backgroundColor = 'rgb(30, 63, 51)'; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.backgroundColor = 'rgb(47, 111, 94)'; e.target.style.transform = 'translateY(0)'; }}
        >
          Book Consultation
        </button>

      </div>
    </header>
  );
};

export default Header;
