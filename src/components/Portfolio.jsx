import React from 'react';
import { ExternalLink, Newspaper, Radio, Tv, Globe, Shield } from 'lucide-react';

const realProjects = [
  {
    name: 'El Mundo',
    domain: 'elmundo.com.bo',
    url: 'https://elmundo.com.bo',
    category: 'Portal de Noticias Nacional',
    desc: 'Diario histórico y portal de noticias de gran escala en Bolivia. Plataforma preparada para soportar picos intensos de tráfico durante acontecimientos de cobertura masiva.',
    icon: <Newspaper size={24} color="var(--brand-red)" />,
    highlights: ['Millones de visitas mensuales', 'Caché acelerada para lectura móvil', 'Redacción periodística multi-usuario']
  },
  {
    name: 'Radio Mega 97.3 FM',
    domain: 'lamega973fm.com',
    url: 'https://lamega973fm.com',
    category: 'Emisora Radial & Audio Online',
    desc: 'Estación de radio líder en Santa Cruz de la Sierra. Servidor de streaming en vivo con reproductor web continuo y programación musical en tiempo real.',
    icon: <Radio size={24} color="#f59e0b" />,
    highlights: ['Transmisión ininterrumpida 24/7', 'Reproductor adaptativo para celular y PC', 'Bajo consumo de datos para oyentes']
  },
  {
    name: 'TV Megavisión',
    domain: 'tvmegavision.com',
    url: 'https://tvmegavision.com',
    category: 'Canal de TV Digital & Streaming',
    desc: 'Portal oficial del canal de televisión abierta en Santa Cruz, con transmisión de video en directo, noticias y cobertura en línea.',
    icon: <Tv size={24} color="#00d2ff" />,
    highlights: ['Señal de video digital en vivo', 'Portal de contenidos audiovisuales', 'Optimización para eventos y noticias de último momento']
  },
  {
    name: 'Nueva Presencia',
    domain: 'nuevapresencia.com',
    url: 'https://nuevapresencia.com',
    category: 'Portal Informativo & Análisis',
    desc: 'Medio de comunicación y análisis informativo con diseño enfocado en la lectura clara, velocidad de navegación y posicionamiento en motores de búsqueda.',
    icon: <Globe size={24} color="#27c93f" />,
    highlights: ['Estructura SEO optimizada', 'Carga ultrarrápida de artículos', 'Plataforma auto-administrable']
  },
  {
    name: 'Fundación Más Árboles',
    domain: 'fundacionmasarbolesbolivia.org',
    url: 'https://fundacionmasarbolesbolivia.org',
    category: 'Organización Ecológica Sin Fines de Lucro',
    desc: 'Plataforma web para proyectos de conservación ambiental, educación ecológica y captación de voluntarios en el territorio boliviano.',
    icon: <Shield size={24} color="#10b981" />,
    highlights: ['Registro de proyectos de reforestación', 'Difusión de actividades y voluntariado', 'Diseño moderno y accesible']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{ background: '#0a0d15' }}>
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
            Casos de Éxito &amp;{' '}
            <span className="text-gradient-red">Producciones Reales</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            El mejor respaldo de Microsystems son las empresas y medios de comunicación que confían
            su presencia y sistemas digitales en nuestras manos:
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {realProjects.map((p, index) => (
            <div
              key={index}
              className="app-window"
              style={{
                padding: '30px',
                background: '#0f1420',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(230, 0, 40, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {p.icon}
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visitar ${p.domain}`}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'background 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'var(--brand-red)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                  >
                    <span>Visitar Web</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--brand-red)', fontWeight: 600, marginBottom: '6px' }}>
                  {p.category}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                }}>
                  {p.name}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}>
                  {p.desc}
                </p>
              </div>

              <div>
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}>
                  {p.highlights.map((h, hi) => (
                    <div key={hi} style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#27c93f' }}>●</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
