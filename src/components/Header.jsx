import React, { useState, useEffect } from 'react';
import { Globe2, Leaf, Menu, X } from 'lucide-react';
import { useI18n } from '../i18n';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, toggleLanguage } = useI18n();
  const navIds = ['about', 'doshas', 'services', 'products', 'journal', 'contact'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: scrolled ? 'rgba(245,235,221,0.95)' : 'rgba(245,235,221,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(47,111,94,0.08)' : 'none',
      padding: '1.2rem 0',
      transition: 'all 0.3s',
    }}>
      <div className="resp-px" style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

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
            <div className="font-serif" style={{ fontSize: '1.5rem', color: 'rgb(47, 111, 94)', lineHeight: 1 }}>{t.common.brandShort}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgb(74, 107, 96)', textTransform: 'uppercase', marginTop: '0.3rem' }}>{t.common.brandSub}</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="mobile-hidden" style={{ display: 'flex', gap: '2.5rem' }}>
          {t.common.nav.map((item, index) => (
            <a key={item} href={`#${navIds[index]}`} className="nav-link" style={{
              fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '1rem', color: 'rgb(74, 107, 96)',
              textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500
            }}
              onMouseEnter={e => e.target.style.color = 'rgb(47, 111, 94)'}
              onMouseLeave={e => e.target.style.color = 'rgb(74, 107, 96)'}
            >{item}</a>
          ))}
        </nav>

        <div className="mobile-hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            aria-label={t.language.aria}
            onClick={toggleLanguage}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              padding: '0.72rem 1rem', borderRadius: '9999px',
              backgroundColor: 'rgba(255,255,255,0.55)', color: 'rgb(47, 111, 94)',
              fontFamily: 'Outfit, system-ui, sans-serif', fontWeight: 700, fontSize: '0.82rem',
              border: '1px solid rgba(47, 111, 94, 0.22)', cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Globe2 size={16} strokeWidth={2} /> {t.language.switchTo}
          </button>

        {/* CTA */}
        <button
          onClick={() => {
            window.location.href = '#contact';
          }}
          style={{
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
          {t.common.book}
        </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="desktop-hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={28} color="rgb(47, 111, 94)" style={{ cursor: 'pointer' }} />
        </div>

      </div>
    </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, #FAF6F0 0%, #F5EBDD 15%, #EBE0CD 100%)',
          zIndex: 100,
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Top Bar */}
          <div style={{ 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
            padding: '1.5rem 2.5rem', borderBottom: '1px solid rgba(47,111,94,0.06)' 
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', 
                border: '1px solid rgba(47, 111, 94, 0.3)',
                backgroundColor: 'rgba(47, 111, 94, 0.04)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                <Leaf size={20} color="rgb(47, 111, 94)" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-serif" style={{ fontSize: '1.35rem', color: 'rgb(47, 111, 94)', lineHeight: 1 }}>{t.common.brandShort}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'rgb(74, 107, 96)', textTransform: 'uppercase', marginTop: '0.2rem' }}>{t.common.brandSub}</div>
              </div>
            </div>
            {/* Close */}
            <X size={28} color="rgb(30, 63, 51)" style={{ cursor: 'pointer' }} onClick={() => setMobileMenuOpen(false)} />
          </div>

          {/* Links container */}
          <div style={{ padding: '2.5rem', flex: 1, overflowY: 'auto' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', alignItems: 'flex-start' }}>
              {t.common.nav.map((item, index) => (
                <a key={item} href={`#${navIds[index]}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '1.2rem', color: 'rgb(30, 63, 51)',
                    textDecoration: 'none', fontWeight: 500
                }}>
                  {item}
                </a>
              ))}

              <button
                aria-label={t.language.aria}
                onClick={toggleLanguage}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(47,111,94,0.22)',
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  color: 'rgb(47, 111, 94)',
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontWeight: 700,
                }}
              >
                <Globe2 size={17} /> {t.language.switchTo}
              </button>
              
              {/* Button */}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '#contact';
                }}
                style={{
                  marginTop: '1.5rem',
                  width: '100%',
                  padding: '1rem', borderRadius: '9999px',
                  backgroundColor: 'rgb(47, 111, 94)', color: 'white',
                  fontFamily: 'Outfit, system-ui, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                  border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(47,111,94,0.15)',
                }}
              >
                {t.common.book}
              </button>
              
              {/* Text below button */}
              <p style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '0.9rem',
                color: 'rgb(74, 107, 96)',
                lineHeight: 1.6,
                marginTop: '1.5rem',
                opacity: 0.9
              }}>
                {t.hero.description}
              </p>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
