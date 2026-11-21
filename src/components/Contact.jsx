import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const projectOptions = [
  'Plan A: Esencial',
  'Plan B: Gestión Empresarial',
  'Plan C: Gestión Integral',
  'App Móvil (Android / iOS)',
  'Sistema Web o Plataforma a Medida',
  'Servidores & Soporte Técnico'
];

export default function Contact() {
  const [selectedProject, setSelectedProject] = useState(projectOptions[0]);
  const [details, setDetails] = useState('');

  const buildWhatsAppUrl = (phone = '59160851148') => {
    const text = `Hola Ishmael, te escribo desde la web de Microsystems para cotizar un proyecto:
• Requerimiento: ${selectedProject}
${details.trim() ? `• Detalle: ${details.trim()}` : ''}

¿Podemos coordinar para revisar la propuesta?`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="section" style={{ background: '#080a0f', position: 'relative' }}>
      <div className="container">
        {/* Encabezado limpio y directo */}
        <div style={{ maxWidth: '780px', marginBottom: '46px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Hablemos de tu Próximo{' '}
            <span className="text-gradient-red">Proyecto de Software</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            En Microsystems estamos listos para construir la solución digital que tu empresa necesita.
            Cuéntanos tu requerimiento o contáctanos de forma directa para coordinar una reunión.
          </p>
        </div>

        {/* Layout simple y plano, sin saturación 3D */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Columna Izquierda: Formulario directo y ágil */}
          <div
            style={{
              background: '#0d121c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '32px 28px',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Envía tu requerimiento por WhatsApp
            </h3>

            {/* Selector de solución */}
            <div style={{ marginBottom: '22px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#cbd5e1',
                  marginBottom: '10px',
                }}
              >
                1. ¿Qué solución necesitas para tu negocio?
              </label>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {projectOptions.map((opt) => {
                  const isSelected = selectedProject === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedProject(opt)}
                      style={{
                        padding: '9px 15px',
                        borderRadius: '8px',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        background: isSelected ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.04)',
                        border: isSelected ? '1px solid var(--brand-red)' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detalle o notas opcionales */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#cbd5e1',
                  marginBottom: '10px',
                }}
              >
                2. Cuéntanos brevemente sobre tu proyecto (opcional):
              </label>

              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Ejemplo: Necesitamos controlar las ventas diarias y el stock de 2 sucursales con 3 usuarios..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'none',
                  lineHeight: 1.5,
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--brand-red)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
              />
            </div>

            {/* Botón directo a WhatsApp de Ishmael */}
            <a
              href={buildWhatsAppUrl('59160851148')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '14px 20px',
                fontSize: '0.95rem',
                gap: '10px',
                borderRadius: '8px',
              }}
            >
              <MessageSquare size={18} />
              <span>Enviar Consulta a Ishmael por WhatsApp</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Columna Derecha: Canales directos de contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Tarjeta Ishmael Belfort (WhatsApp 608) */}
            <div
              style={{
                background: '#0d121c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '24px 26px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid var(--brand-red)',
                    background: 'rgba(230, 0, 40, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-red)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Atención &amp; Cotizaciones
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '3px 0 8px' }}>
                    Ishmael Belfort
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a
                      href="https://wa.me/59160851148"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--brand-red)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')}
                    >
                      <span>+591 608-51148 (WhatsApp directo)</span>
                    </a>

                    <a
                      href="https://wa.me/59177390707"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <span>+591 773-90707 (Línea de soporte)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta Correo Electrónico */}
            <div
              style={{
                background: '#0d121c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '24px 26px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Correo Electrónico
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '3px 0 6px' }}>
                    Consultas &amp; Propuestas Formales
                  </div>
                  <a
                    href="mailto:erickbelfort@hotmail.es"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--brand-red)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    erickbelfort@hotmail.es
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta Ubicación */}
            <div
              style={{
                background: '#0d121c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '24px 26px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Ubicación
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '3px 0 4px' }}>
                    Santa Cruz de la Sierra, Bolivia
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Desarrollo de proyectos con alcance local, nacional e internacional.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
