import React from 'react';
import { Smartphone, Globe, Database, Newspaper, Cpu, Check, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    icon: <Smartphone size={28} color="var(--brand-red)" />,
    title: 'Desarrollo de Apps Móviles (Android & iOS)',
    desc: 'Diseñamos y programamos aplicaciones móviles nativas y multiplataforma con interfaces modernas y lineamientos oficiales de experiencia de usuario (UX/UI). Construidas con protocolos seguros y monitoreo proactivo.',
    bullets: [
      'Desarrollo nativo y multiplataforma (Android & iOS)',
      'Blindaje bajo lineamientos OWASP Mobile Security',
      'Comunicaciones seguras HTTPS, TLS y cifrado bajo norma FIPS AES',
      'Integración de métricas y eventos con Google Analytics',
      'Detección y reporte automático de fallos en tiempo real'
    ]
  },
  {
    icon: <Globe size={28} color="#00d2ff" />,
    title: 'Tecnología & Desarrollo Web de Alto Rendimiento',
    desc: 'Construimos plataformas web y sistemas en la nube aplicando metodologías rigurosas y estándares modernos de la industria. Cada proyecto se somete a pruebas exhaustivas de carga y calidad antes de salir a producción.',
    bullets: [
      'Cumplimiento estricto de lineamientos de seguridad OWASP Web',
      'Pruebas de estrés para garantizar estabilidad con tráfico masivo',
      'Pruebas automatizadas de aceptación de usuario (UAT)',
      'Auditoría y optimización de velocidad de carga y rendimiento',
      'Evaluación de código fuente y control de versiones profesional (Git)'
    ]
  },
  {
    icon: <Database size={28} color="#27c93f" />,
    title: 'Sistemas a Medida (ERP, CRM & Gestión)',
    desc: 'Automatizamos los procesos centrales de tu empresa con software adaptado 100% a tus flujos operativos: facturación, control de inventario multicisterna, cuentas por cobrar y reportes ejecutivos.',
    bullets: [
      'Flujos administrativos y contables automatizados',
      'Control de stock, órdenes de compra y almacenes',
      'Perfiles de usuario granulares y auditoría de cambios',
      'Reportes exportables para toma de decisiones en tiempo real'
    ]
  },
  {
    icon: <Newspaper size={28} color="#f59e0b" />,
    title: 'Portales de Noticias & Medios de Gran Escala',
    desc: 'Desarrollo para empresas de prensa, cadenas de radio y televisión. Arquitecturas optimizadas para entregar contenidos al instante y resistir picos extremos de tráfico en noticias de última hora.',
    bullets: [
      'Gestión editorial multi-redactor rápida e intuitiva',
      'Integración de streaming de radio y video digital en vivo',
      'Arquitectura de caché acelerada para navegación móvil inmediata',
      'Indexación optimizada para motores de búsqueda (SEO)'
    ]
  },
  {
    icon: <Cpu size={28} color="#ec4899" />,
    title: 'Infraestructura, Servidores & Soporte Corporativo',
    desc: 'Configuración, mantenimiento y respaldo de entornos de producción para empresas. Garantizamos la continuidad operativa de tus sistemas con soporte técnico especializado.',
    bullets: [
      'Servidores dedicados Linux y contenedores Docker',
      'Copias de seguridad automatizadas y planes de recuperación rápida',
      'Monitoreo preventivo y actualización de entornos de producción',
      'Mantenimiento correctivo y preventivo de estaciones de trabajo'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: '#080a0f' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '50px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Servicios Profesionales de{' '}
            <span className="text-gradient-red">Ingeniería &amp; Desarrollo</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            En Microsystems aplicamos procedimientos formales, estándares internacionales de seguridad
            y pruebas rigurosas para que cada aplicación web o móvil opere con máxima fiabilidad en producción.
          </p>
        </div>

        {/* Bespoke Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {servicesList.map((srv, index) => (
            <div
              key={index}
              className="app-window"
              style={{
                padding: '32px',
                background: '#0d111a',
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
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  {srv.icon}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                }}>
                  {srv.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '22px',
                }}>
                  {srv.desc}
                </p>
              </div>

              <div>
                <div style={{
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}>
                  {srv.bullets.map((b, bi) => (
                    <div key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--brand-red)', fontWeight: 'bold', marginTop: '1px' }}>✓</span>
                      <span>{b}</span>
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
