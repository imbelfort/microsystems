import React from 'react';
import { ArrowUp } from 'lucide-react';
import logo from '../assets/logomicrosystems.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#06080c',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '50px 0 30px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '30px',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={logo}
              alt="Microsystems Logo"
              style={{ height: '36px', width: 'auto' }}
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.3rem',
                color: '#ffffff',
              }}>
                Microsystems
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Santa Cruz de la Sierra, Bolivia
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <a href="#hero" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              Inicio
            </a>
            <a href="#services" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              Servicios
            </a>
            <a href="#portfolio" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              Proyectos Reales
            </a>
            <a href="#contact" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              Contacto
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            title="Subir al inicio"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
            }}
          >
            <span>Subir</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}>
          <div>
            © {new Date().getFullYear()} Microsystems. Todos los derechos reservados.
          </div>
          <div>
            Ingeniería de software y desarrollo web para producciones reales.
          </div>
        </div>
      </div>
    </footer>
  );
}
