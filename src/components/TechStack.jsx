import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Shield,
  Radio,
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { soundFx } from '../utils/audio';

const stackCategories = [
  {
    id: 'frontend',
    name: 'Frontend & Reactive UI',
    icon: <Code2 size={16} />,
    color: '#00f0ff',
    items: [
      { name: 'React 19', role: 'Motor UI Reactivo', metric: '60 FPS Rendering' },
      { name: 'TypeScript', role: 'Tipado Fuerte & AST', metric: 'Zero Runtime Type Errors' },
      { name: 'Next.js', role: 'SSR & ISR Edge', metric: 'Sub-second Hydration' },
      { name: 'Vue 3', role: 'Single Page Apps', metric: 'Ultra-light Runtime' },
      { name: 'Vite', role: 'Bundler de Próxima Gen', metric: 'Hot Reload <50ms' },
      { name: 'Framer Motion', role: 'Animaciones Físicas', metric: 'Hardware Accelerated' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Microservicios',
    icon: <Server size={16} />,
    color: '#ff1e42',
    items: [
      { name: 'Node.js', role: 'Runtime Concurrente', metric: 'Event Loop Non-blocking' },
      { name: 'Golang', role: 'Servicios de Red', metric: 'Goroutines de Baja Latencia' },
      { name: 'Python', role: 'Automatización & Datos', metric: 'Worker Pipelines' },
      { name: 'WebSockets', role: 'Canales Duplex en Vivo', metric: '<10ms Packet Sync' },
      { name: 'REST & GraphQL', role: 'APIs Tipadas', metric: 'Strict OpenAPI 3.0' },
      { name: 'RabbitMQ', role: 'Message Broker', metric: 'Persistencia de Mensajes' },
    ],
  },
  {
    id: 'database',
    name: 'Datos & Caching Distribuido',
    icon: <Database size={16} />,
    color: '#10b981',
    items: [
      { name: 'PostgreSQL HA', role: 'Base Relacional ACID', metric: 'Failover <3s' },
      { name: 'Redis', role: 'Caché In-Memory', metric: 'Sub-millisecond Read' },
      { name: 'Supabase', role: 'BaaS & Realtime Auth', metric: 'Row-Level Security' },
      { name: 'Firebase', role: 'Mobile Sync', metric: 'Offline Persistence' },
      { name: 'MinIO / S3', role: 'Almacenamiento de Objetos', metric: 'Encrypted at Rest' },
    ],
  },
  {
    id: 'security',
    name: 'Seguridad & Infraestructura Cloud',
    icon: <Shield size={16} />,
    color: '#f59e0b',
    items: [
      { name: 'Cloudflare WAF', role: 'Mitigación DDoS L7', metric: 'Terabit Capacity' },
      { name: 'Docker', role: 'Contenedores Inmutables', metric: 'Reproducible Deploy' },
      { name: 'Linux Server Hardening', role: 'OS de Grado Militar', metric: 'AppArmor & UFW' },
      { name: 'Nginx Reverse Proxy', role: 'Balanceo de Carga', metric: 'Zero-Downtime Reload' },
      { name: 'GitHub Actions CI/CD', role: 'Pipelines Automatizados', metric: 'Automated Test Suite' },
    ],
  },
  {
    id: 'media',
    name: 'Media, Streaming & CMS',
    icon: <Radio size={16} />,
    color: '#ec4899',
    items: [
      { name: 'Icecast / Shoutcast', role: 'Streaming Audio en Vivo', metric: 'Hi-Fi AAC 128kbps' },
      { name: 'HLS Video Engine', role: 'Streaming TV Digital', metric: 'Adaptive Bitrate' },
      { name: 'WordPress Headless', role: 'Redacción Periodística', metric: 'Custom Rest API' },
      { name: 'WebP / AVIF Engine', role: 'Compresión Multimedia', metric: '70% Payload Reduction' },
    ],
  },
];

const tickerTechnologies = [
  'REACT 19', 'TYPESCRIPT', 'POSTGRESQL HA', 'DOCKER', 'CLOUDFLARE WAF',
  'REDIS CACHE', 'NODE.JS', 'GOLANG', 'NEXT.JS', 'VUE 3', 'SUPABASE',
  'NGINX MESH', 'ICECAST STREAMING', 'PYTHON', 'VITE', 'LINUX HARDENING'
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);
  const current = stackCategories[activeTab];

  return (
    <section id="stack" className="section" style={{ background: '#070a10', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span className="status-pill red" style={{ marginBottom: '14px' }}>
            <span className="status-indicator-dot red" />
            STACK TECNOLÓGICO DE PRODUCCIÓN
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginTop: '12px',
              marginBottom: '18px',
            }}
          >
            Matriz de Tecnologías &amp; <br />
            <span className="text-gradient-red">Herramientas Verificadas</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Seleccionamos herramientas probadas para soportar cargas críticas, garantizar mantenibilidad
            a largo plazo y ofrecer tiempos de respuesta insuperables.
          </p>
        </div>

        {/* Layer Selector Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}
        >
          {stackCategories.map((cat, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(idx);
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  background: isSelected ? 'rgba(255, 30, 66, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isSelected ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ color: isSelected ? 'var(--brand-red)' : 'var(--text-muted)' }}>
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Items Grid */}
        <div className="hud-panel corner-bracket" style={{ padding: '36px', marginBottom: '60px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="status-indicator-dot" style={{ background: current.color, boxShadow: `0 0 10px ${current.color}` }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
                {current.name}
              </span>
            </div>

            <span className="telemetry-chip" style={{ color: current.color, borderColor: current.color }}>
              ESTÁNDAR DE INGENIERÍA MICROSYSTEMS
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
              }}
            >
              {current.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '18px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = current.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                      {item.name}
                    </div>
                    <CheckCircle2 size={16} color={current.color} />
                  </div>

                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '12px' }}>
                    {item.role}
                  </div>

                  <div style={{
                    padding: '6px 10px',
                    borderRadius: '4px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: current.color,
                  }}>
                    {item.metric}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Infinite Moving Ticker Tape */}
        <div style={{
          overflow: 'hidden',
          padding: '20px 0',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '50px', whiteSpace: 'nowrap', width: 'fit-content' }}
          >
            {[...tickerTechnologies, ...tickerTechnologies].map((tech, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.18)',
                  letterSpacing: '2px',
                  cursor: 'default',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--brand-red)';
                  e.currentTarget.style.WebkitTextStroke = '1px var(--brand-red)';
                  e.currentTarget.style.textShadow = '0 0 15px rgba(255, 30, 66, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'transparent';
                  e.currentTarget.style.WebkitTextStroke = '1px rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {tech} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
