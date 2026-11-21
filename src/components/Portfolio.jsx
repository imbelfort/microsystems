import React, { useState } from 'react';
import { ExternalLink, Newspaper, Radio, Tv, Globe, Shield, ArrowUpRight } from 'lucide-react';

const realProjects = [
  {
    id: 'elmundo',
    name: 'El Mundo',
    domain: 'elmundo.com.bo',
    url: 'https://elmundo.com.bo',
    category: 'Portal de Noticias Nacional',
    desc: 'Diario histórico y portal de prensa líder en Bolivia. Plataforma de alta disponibilidad construida para soportar picos intensos de tráfico masivo durante acontecimientos periodísticos de última hora.',
    icon: <Newspaper size={24} color="var(--brand-red)" />,
    highlights: [
      'Arquitectura de carga rápida para lectura móvil inmediata',
      'Panel editorial multi-redactor para periodistas en tiempo real',
      'Infraestructura preparada para millones de visitas mensuales'
    ]
  },
  {
    id: 'mega',
    name: 'Radio Mega 97.3 FM',
    domain: 'lamega973fm.com',
    url: 'https://lamega973fm.com',
    category: 'Emisora Radial & Audio Online',
    desc: 'Estación de radio líder en Santa Cruz de la Sierra. Servidor dedicado de streaming en vivo continuo con reproductor web adaptado para celulares y computadoras.',
    icon: <Radio size={24} color="#f59e0b" />,
    highlights: [
      'Transmisión ininterrumpida de audio 24/7 sin caídas',
      'Reproductor optimizado para mínimo consumo de datos móviles',
      'Programación radial y contenidos musicales en directo'
    ]
  },
  {
    id: 'megavision',
    name: 'TV Megavisión',
    domain: 'tvmegavision.com',
    url: 'https://tvmegavision.com',
    category: 'Canal de TV Digital & Streaming',
    desc: 'Portal oficial del canal de televisión abierta en Santa Cruz. Integración de señal de video digital en directo, catálogo de notas informativas y cobertura audiovisual continua.',
    icon: <Tv size={24} color="#00d2ff" />,
    highlights: [
      'Señal de video digital en vivo con transmisión continua',
      'Portal de contenidos audiovisuales y noticieros',
      'Servidores dedicados de contingencia para eventos especiales'
    ]
  },
  {
    id: 'nuevapresencia',
    name: 'Nueva Presencia',
    domain: 'nuevapresencia.com',
    url: 'https://nuevapresencia.com',
    category: 'Portal Informativo & Análisis',
    desc: 'Medio de comunicación y análisis con diseño enfocado en la lectura clara, velocidad de respuesta instantánea y posicionamiento orgánico en motores de búsqueda.',
    icon: <Globe size={24} color="#27c93f" />,
    highlights: [
      'Carga ultrarrápida optimizada para lectores desde celular',
      'Estructura editorial ordenada para posicionamiento en Google',
      'Panel auto-administrable para redacción ágil de artículos'
    ]
  },
  {
    id: 'masarboles',
    name: 'Fundación Más Árboles',
    domain: 'fundacionmasarbolesbolivia.org',
    url: 'https://fundacionmasarbolesbolivia.org',
    category: 'Organización Ecológica Sin Fines de Lucro',
    desc: 'Plataforma institucional para la difusión de proyectos de reforestación, educación ambiental y registro activo de voluntarios en todo el territorio boliviano.',
    icon: <Shield size={24} color="#10b981" />,
    highlights: [
      'Módulo de registro y coordinación de voluntarios',
      'Catálogo de proyectos forestales e iniciativas ecológicas',
      'Diseño accesible, transparente y de navegación rápida'
    ]
  }
];

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="portfolio" className="section" style={{ background: '#080a0f', position: 'relative' }}>
      <div className="container">
        {/* Encabezado limpio */}
        <div style={{ maxWidth: '820px', marginBottom: '50px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Casos Reales &amp;{' '}
            <span className="text-gradient-red">Producciones en Producción</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.25vw, 1.12rem)', lineHeight: 1.65 }}>
            El mejor respaldo de Microsystems son las empresas y medios de comunicación que confían
            sus plataformas y transmisiones digitales en nuestro trabajo diario:
          </p>
        </div>

        {/* Grilla limpia de Casos Reales */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '26px',
          }}
        >
          {realProjects.map((p) => {
            const isHovered = hoveredCard === p.id;

            return (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#0d121c',
                  border: isHovered ? '1px solid rgba(230, 0, 40, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isHovered
                    ? '0 16px 40px rgba(230, 0, 40, 0.12), 0 4px 20px rgba(0,0,0,0.5)'
                    : '0 8px 24px rgba(0,0,0,0.3)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div>
                  {/* Barra superior de navegador limpia con el dominio real */}
                  <div
                    style={{
                      background: '#121826',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '11px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: '#cbd5e1',
                          marginLeft: '6px',
                        }}
                      >
                        🔒 {p.domain}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: '#22c55e',
                          boxShadow: '0 0 6px #22c55e',
                        }}
                      />
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
                        En Producción
                      </span>
                    </div>
                  </div>

                  {/* Contenido principal del caso */}
                  <div style={{ padding: '26px 24px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--brand-red)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {p.category}
                      </div>

                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {p.icon}
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '10px',
                      }}
                    >
                      {p.name}
                    </h3>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                      }}
                    >
                      {p.desc}
                    </p>

                    <div
                      style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        paddingTop: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {p.highlights.map((h, hi) => (
                        <div
                          key={hi}
                          style={{
                            fontSize: '0.84rem',
                            color: '#cbd5e1',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span style={{ color: 'var(--brand-red)', fontSize: '0.9rem' }}>▪</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón directo para visitar la web oficial */}
                <div style={{ padding: '0 24px 24px' }}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      padding: '11px 18px',
                      borderRadius: '8px',
                      background: isHovered ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.04)',
                      border: isHovered ? '1px solid var(--brand-red)' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      boxShadow: isHovered ? '0 4px 16px rgba(230, 0, 40, 0.3)' : 'none',
                    }}
                  >
                    <span>Visitar Sitio Web</span>
                    <ArrowUpRight
                      size={16}
                      style={{
                        transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
