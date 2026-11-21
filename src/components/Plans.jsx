import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    letter: 'A',
    name: 'Esencial',
    target: 'Para empresas que están empezando y buscan digitalizar su primer proceso con orden.',
    achieve:
      'Ideal para empresas que están empezando y quieren resolver una necesidad concreta. Por ejemplo, registrar pedidos, organizar clientes o llevar el control básico de sus productos.',
    points: [
      'Registro ágil de pedidos sin pérdidas de notas ni confusiones',
      'Base de datos centralizada y ordenada de tus clientes',
      'Control básico de catálogo de productos y stock disponible',
      'Puesta en marcha rápida con uso sencillo para todo tu equipo'
    ],
    isFeatured: false
  },
  {
    letter: 'B',
    name: 'Gestión Empresarial',
    target: 'Para empresas con equipo de trabajo activo que necesitan coordinar tareas y supervisión.',
    achieve:
      'Para empresas que ya tienen un equipo y necesitan coordinar varias tareas. Por ejemplo, controlar ventas e inventario, asignar permisos al personal y consultar reportes desde un mismo sistema.',
    points: [
      'Control simultáneo de ventas y stock en tiempo real',
      'Asignación de permisos y roles de acceso según cada empleado',
      'Reportes ejecutivos de ingresos, cobros y rendimiento diario',
      'Acceso simultáneo desde cualquier computadora, celular o tablet'
    ],
    isFeatured: true
  },
  {
    letter: 'C',
    name: 'Gestión Integral',
    target: 'Para empresas consolidadas que requieren unificar todas sus áreas en un solo lugar.',
    achieve:
      'Para empresas que quieren conectar áreas completas en una sola plataforma. El proyecto puede integrar ventas, seguimiento de clientes, compras, inventario, facturación y contabilidad, según el alcance acordado.',
    points: [
      'Conexión total entre ventas, compras, almacenes y cobranzas',
      'Módulo de seguimiento y atención personalizada a clientes (CRM)',
      'Integración con facturación y flujos contables automatizados',
      'Software 100% a la medida con soporte prioritario continuo'
    ],
    isFeatured: false
  }
];

export default function Plans() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const getWhatsAppLink = (letter, name) => {
    const text = `Hola Ishmael, me interesa consultar el *Plan ${letter} (${name})* para mi empresa en Microsystems. ¿Podemos revisar los detalles?`;
    return `https://wa.me/59160851148?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="planes" className="section" style={{ background: '#090d16', position: 'relative' }}>
      {/* Luz ambiental sutil */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(230, 0, 40, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Cabecera limpia y clara */}
        <div style={{ maxWidth: '820px', margin: '0 auto 56px', textAlign: 'center' }}>
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
            Elige el Plan que Impulsará el{' '}
            <span className="text-gradient-red">Crecimiento de tu Empresa</span>
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Construimos cada sistema a la medida según el momento de tu negocio: desde resolver una necesidad puntual hasta centralizar todas tus áreas operativas.
          </p>
        </div>

        {/* Grilla de 3 cards con las letras A, B, C centradas en redondo con líneas delgadas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
            marginBottom: '48px',
          }}
        >
          {plans.map((p) => {
            const isHovered = hoveredPlan === p.letter;
            const isPlanB = p.isFeatured;

            return (
              <div
                key={p.letter}
                onMouseEnter={() => setHoveredPlan(p.letter)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  background: isPlanB ? '#0d1322' : '#0b0f18',
                  border: isPlanB
                    ? '1px solid rgba(230, 0, 40, 0.55)'
                    : isHovered
                    ? '1px solid rgba(255, 255, 255, 0.25)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isPlanB
                    ? '0 16px 40px rgba(230, 0, 40, 0.12), 0 4px 20px rgba(0,0,0,0.5)'
                    : isHovered
                    ? '0 14px 35px rgba(0,0,0,0.5)'
                    : '0 8px 24px rgba(0,0,0,0.3)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* LETRA A, B, C EN EL MEDIO DEL CARD, EN REDONDO CON LÍNEAS DELGADAS */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      marginBottom: '24px',
                    }}
                  >
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '50%',
                        border: isPlanB
                          ? '1px solid var(--brand-red)'
                          : isHovered
                          ? '1px solid rgba(255, 255, 255, 0.5)'
                          : '1px solid rgba(255, 255, 255, 0.18)',
                        background: isPlanB
                          ? 'rgba(230, 0, 40, 0.08)'
                          : 'rgba(255, 255, 255, 0.02)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.9rem',
                        fontWeight: 600,
                        color: isPlanB ? 'var(--brand-red)' : '#ffffff',
                        boxShadow: isPlanB
                          ? '0 0 20px rgba(230, 0, 40, 0.2)'
                          : 'none',
                        transition: 'all 0.25s ease',
                        marginBottom: '16px',
                      }}
                    >
                      {p.letter}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.55rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '8px',
                      }}
                    >
                      Plan {p.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {p.target}
                    </p>
                  </div>

                  {/* LÍNEA DIVISORIA SUTIL */}
                  <div
                    style={{
                      height: '1px',
                      background: isPlanB ? 'rgba(230, 0, 40, 0.25)' : 'rgba(255, 255, 255, 0.07)',
                      marginBottom: '22px',
                    }}
                  />

                  {/* SECCIÓN "¿QUÉ PUEDES LOGRAR?" */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderLeft: `3px solid ${isPlanB ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.3)'}`,
                      padding: '14px 16px',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '26px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '6px',
                      }}
                    >
                      ¿Qué puedes lograr?
                    </div>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#cbd5e1',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {p.achieve}
                    </p>
                  </div>

                  {/* LISTA DE PUNTOS INCLUIDOS */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
                    {p.points.map((pt, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.87rem',
                          color: '#94a3b8',
                          lineHeight: 1.45,
                        }}
                      >
                        <span
                          style={{
                            color: isPlanB ? 'var(--brand-red)' : '#cbd5e1',
                            marginTop: '2px',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={16} strokeWidth={2.5} />
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTÓN DE ACCIÓN */}
                <a
                  href={getWhatsAppLink(p.letter, p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPlanB ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '13px 20px',
                    fontSize: '0.92rem',
                    textAlign: 'center',
                  }}
                >
                  <span>Consultar Plan {p.letter}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* PIE DE ESPECIFICACIONES CLARAS Y TRANSPARENTES */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '24px 30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
              Alcance 100% Acordado
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Entregables, pantallas y funciones acordados formalmente antes de comenzar.
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
              Capacitación al Personal
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Explicación paso a paso para que tu equipo opere el software con facilidad.
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
              Atención Directa por WhatsApp
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Comunicación fluida y soporte con los profesionales a cargo de tu proyecto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
