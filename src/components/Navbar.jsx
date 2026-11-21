import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logomicrosystems.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Planes', href: '#planes' },
    { name: 'Proyectos Reales', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(8, 10, 15, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.25s ease',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Microsystems Brand with Official Globe & Red Arrow Logo */}
        <a
          href="#hero"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <img
            src={logo}
            alt="Microsystems Logo"
            style={{
              height: '42px',
              width: 'auto',
              filter: 'drop-shadow(0 2px 8px rgba(230, 0, 40, 0.4))',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.45rem',
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}>
              Microsystems
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.4px',
              marginTop: '-3px'
            }}>
              Desarrollo de Software &amp; Producciones
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color 0.2s, transform 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Direct CTA */}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.88rem',
            }}
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <div
          className="mobile-toggle"
          style={{
            display: 'none',
            cursor: 'pointer',
            padding: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '6px',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: '#0a0d14',
              borderBottom: '1px solid rgba(230, 0, 40, 0.3)',
            }}
          >
            <div className="container" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setIsOpen(false)}
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              >
                <span>Cotizar Proyecto por WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
