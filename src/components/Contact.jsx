import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Phone, ArrowRight, Shield } from 'lucide-react';

const projectTypes = [
  'App Móvil (Android / iOS)',
  'Desarrollo Web de Alto Rendimiento',
  'Sistema ERP / CRM a Medida',
  'Portal de Noticias & Medios',
  'Servidores & Soporte Corporativo'
];

const scales = [
  'Uso interno de empresa (10 - 100 usuarios)',
  'Mediana escala (1,000 - 10,000 usuarios)',
  'Alto tráfico masivo (+50,000 visitas/día)'
];

const timelines = [
  'Prioridad Alta (2 a 4 semanas)',
  'Plazo Normal (1 a 2 meses)',
  'Proyecto por Fases Continuas'
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedScale, setSelectedScale] = useState(scales[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1]);
  const [notes, setNotes] = useState('');

  const createWhatsAppUrl = (phone = '59160851148') => {
    const text = `Hola Erick, te escribo desde la web de Microsystems para cotizar un desarrollo:
• Tipo de Proyecto: ${selectedType}
• Escala de uso: ${selectedScale}
• Tiempo estimado: ${selectedTimeline}
${notes ? `• Detalle: ${notes}` : ''}

¿Podemos coordinar para revisar la propuesta?`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="section" style={{ background: '#080a0f' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '50px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Hablemos de tu Próximo{' '}
            <span className="text-gradient-red">Proyecto de Software</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            En Microsystems estamos listos para construir la solución digital que tu empresa necesita.
            Define tus requerimientos básicos para iniciar una conversación directa por WhatsApp.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'start',
          }}
        >
          {/* Left: Quick Project Configurator */}
          <div
            className="app-window"
            style={{ padding: '32px', background: '#0e131d' }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Configurar Requerimientos del Proyecto
            </h3>

            {/* Type */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                1. ¿Qué tipo de software necesitas?
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {projectTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedType(t)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      background: selectedType === t ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${selectedType === t ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Scale */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                2. Escala esperada de usuarios / tráfico:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {scales.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedScale(s)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      background: selectedScale === s ? 'rgba(0, 210, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${selectedScale === s ? '#00d2ff' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                3. Plazo aproximado:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {timelines.map((tl) => (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => setSelectedTimeline(tl)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      background: selectedTimeline === tl ? 'rgba(39, 201, 63, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${selectedTimeline === tl ? '#27c93f' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {tl}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Notas adicionales (opcional):
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Cuéntanos brevemente sobre las funcionalidades clave que requieres..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '6px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              />
            </div>

            <a
              href={createWhatsAppUrl('59160851148')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '1rem' }}
            >
              <MessageSquare size={18} />
              <span>Enviar Requerimientos por WhatsApp</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="app-window" style={{ padding: '24px', background: '#0e131d' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  background: 'rgba(230, 0, 40, 0.12)',
                  border: '1px solid var(--brand-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Phone size={20} color="var(--brand-red)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    ATENCIÓN DIRECTA / WHATSAPP
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: '4px 0' }}>
                    Erick Belfort
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.95rem' }}>
                    <a href="https://wa.me/59160851148" target="_blank" rel="noopener noreferrer" style={{ color: '#00d2ff' }}>
                      +591 608-51148
                    </a>
                    <a href="https://wa.me/59177390707" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      +591 773-90707
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-window" style={{ padding: '24px', background: '#0e131d' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  background: 'rgba(0, 210, 255, 0.12)',
                  border: '1px solid #00d2ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Mail size={20} color="#00d2ff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    CORREO ELECTRÓNICO
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: '4px 0' }}>
                    Consultas &amp; Propuestas
                  </div>
                  <a href="mailto:erickbelfort@hotmail.es" style={{ color: '#00d2ff', fontSize: '0.95rem' }}>
                    erickbelfort@hotmail.es
                  </a>
                </div>
              </div>
            </div>

            <div className="app-window" style={{ padding: '24px', background: '#0e131d' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  background: 'rgba(39, 201, 63, 0.12)',
                  border: '1px solid #27c93f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={20} color="#27c93f" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    UBICACIÓN
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: '4px 0' }}>
                    Santa Cruz de la Sierra, Bolivia
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
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
