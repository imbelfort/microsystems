import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Eye,
  BarChart2,
  FileText,
  Users,
  Newspaper,
  Zap,
  Shield,
  MessageSquare,
  DollarSign,
  Package,
  Receipt,
  UserCheck,
  CheckCircle2,
  Check
} from 'lucide-react';

const sceneConfigs = [
  {
    id: 'erp',
    title: 'Sistema de gestión (ERP)',
    url: 'microsystems.bo/sistema-erp',
    blocksCount: 7,
  },
  {
    id: 'news',
    title: 'Portal de noticias',
    url: 'microsystems.bo/noticias-digital',
    blocksCount: 4,
  },
  {
    id: 'web',
    title: 'Web informativa',
    url: 'microsystems.bo/tu-empresa',
    blocksCount: 4,
  }
];

export default function Hero() {
  const [activeScene, setActiveScene] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [assembledBlocks, setAssembledBlocks] = useState([]);
  const [isWireframe, setIsWireframe] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 80, y: 350, opacity: 0 });
  const [showRipple, setShowRipple] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [chartGrown, setChartGrown] = useState(false);

  // Estados de reacción post-clic (en acento rojo o neutral, sin verde)
  const [erpNewRowVisible, setErpNewRowVisible] = useState(false);
  const [newsAlertVisible, setNewsAlertVisible] = useState(false);
  const [webSentAlertVisible, setWebSentAlertVisible] = useState(false);

  const timersRef = useRef([]);
  const viewportRef = useRef(null);
  const targetBtnRef = useRef(null);

  const addTimer = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timersRef.current.push(id);
    return id;
  };

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    clearAllTimers();

    setIsWireframe(true);
    setAssembledBlocks([]);
    setCursorPos({ x: 80, y: 350, opacity: 0 });
    setShowRipple(false);
    setBtnClicked(false);
    setChartGrown(false);
    setErpNewRowVisible(false);
    setNewsAlertVisible(false);
    setWebSentAlertVisible(false);

    const config = sceneConfigs[activeScene];

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsWireframe(false);
      setChartGrown(true);
      setAssembledBlocks(Array.from({ length: config.blocksCount }, (_, i) => i));
      setErpNewRowVisible(true);
      setNewsAlertVisible(true);
      setWebSentAlertVisible(true);

      addTimer(() => {
        setActiveScene((prev) => (prev + 1) % sceneConfigs.length);
      }, 5000);
      return clearAllTimers;
    }

    // 1. Bloques Lego entrando con rebote suave
    for (let i = 0; i < config.blocksCount; i++) {
      addTimer(() => {
        setAssembledBlocks((prev) => [...prev, i]);
      }, 100 + i * 150);
    }

    // 2. Colorización y contenido real
    const colorizeDelay = 150 + config.blocksCount * 150;
    addTimer(() => {
      setIsWireframe(false);
      if (activeScene === 0) {
        setChartGrown(true);
      }
    }, colorizeDelay);

    // 3. Cursor viaja hacia el botón objetivo y hace clic
    const cursorDelay = colorizeDelay + 500;
    addTimer(() => {
      if (targetBtnRef.current && viewportRef.current) {
        const vRect = viewportRef.current.getBoundingClientRect();
        const bRect = targetBtnRef.current.getBoundingClientRect();
        const targetX = bRect.left - vRect.left + bRect.width / 2;
        const targetY = bRect.top - vRect.top + bRect.height / 2;

        setCursorPos({ x: targetX, y: targetY, opacity: 1 });

        addTimer(() => {
          setShowRipple(true);
          setBtnClicked(true);

          addTimer(() => setBtnClicked(false), 180);

          // Reacciones visibles en rojo de marca
          if (activeScene === 0) {
            setErpNewRowVisible(true);
          } else if (activeScene === 1) {
            setNewsAlertVisible(true);
          } else if (activeScene === 2) {
            setWebSentAlertVisible(true);
          }
        }, 450);
      }
    }, cursorDelay);

    // 4. Pausa de 2.2 segundos para apreciar el resultado y salto continuo
    const nextSceneDelay = cursorDelay + 2700;
    addTimer(() => {
      setActiveScene((prev) => (prev + 1) % sceneConfigs.length);
    }, nextSceneDelay);

    return () => clearAllTimers();
  }, [activeScene, cycleCount]);

  const jumpToScene = (idx) => {
    clearAllTimers();
    if (idx === activeScene) {
      setCycleCount((c) => c + 1);
    } else {
      setActiveScene(idx);
    }
  };

  const currentConfig = sceneConfigs[activeScene];

  return (
    <section id="hero" className="hero-fixed-section">
      <div className="container">
        <div className="hero-grid-wrapper">

          {/* COLUMNA IZQUIERDA: LENGUAJE CLARO PARA DUEÑOS DE NEGOCIO */}
          <div className="hero-text-col">
            <h1 className="hero-main-title">
              Tu negocio merece una web o sistema que <span className="text-gradient-red">trabaje por ti</span>
            </h1>

            <p className="hero-description">
              Creamos sistemas de gestión, portales de noticias y páginas web a tu medida.
              Fáciles de usar, rápidos y pensados para ordenar y hacer crecer tu empresa.
            </p>

            <div className="hero-buttons-group">
              <a href="#contact" className="btn-primary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
                <span>Cotiza tu proyecto</span>
                <ArrowRight size={18} />
              </a>

              <a href="#portfolio" className="btn-secondary" style={{ padding: '14px 26px', fontSize: '1rem' }}>
                <Eye size={18} color="var(--brand-red)" />
                <span>Ver ejemplos</span>
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-point">
                <CheckCircle2 size={18} color="var(--brand-red)" />
                <span>Fácil de usar para tu equipo</span>
              </div>
              <div className="trust-point">
                <CheckCircle2 size={18} color="var(--brand-red)" />
                <span>Soporte directo por WhatsApp</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MARCO OSCURO CON INTERIOR TEMA CLARO BRILLANTE */}
          <div className="hero-screen-col">
            <div className="mockup-laptop-browser">

              {/* Barra superior oscura del marco (hace que el interior claro salte a la vista) */}
              <div className="mockup-frame-bar">
                <div style={{ display: 'flex', gap: '7px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                </div>

                <div className="mockup-address-pill">
                  <span>🔒 {currentConfig.url}</span>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>
                  {currentConfig.title}
                </div>
              </div>

              {/* INTERIOR DEL NAVEGADOR: TEMA CLARO BLANCO Y LIMPIO (ALTO IMPACTO VISUAL) */}
              <div ref={viewportRef} className="mockup-light-viewport">

                {/* Cursor virtual animado */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '24px',
                    height: '24px',
                    pointerEvents: 'none',
                    zIndex: 60,
                    opacity: cursorPos.opacity,
                    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                    transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5">
                    <path d="M3 3l7 18 3-7 7-3L3 3z" />
                  </svg>
                  {showRipple && <div className="cursor-ripple-effect" />}
                </div>

                {/* =========================================================
                    ESCENA 1: SISTEMA DE GESTIÓN (ERP)
                    ========================================================= */}
                {activeScene === 0 && (
                  <div className="scene-container">
                    <div style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: '14px', height: '100%' }}>

                      {/* Barra lateral */}
                      <div
                        className="lego-item"
                        style={{
                          background: isWireframe ? '#f1f5f9' : '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          padding: '12px 6px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '14px',
                          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                          opacity: assembledBlocks.includes(0) ? 1 : 0,
                          transform: assembledBlocks.includes(0) ? 'translateY(0)' : 'translateY(20px)',
                        }}
                      >
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: isWireframe ? '#e2e8f0' : 'var(--brand-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                          <BarChart2 size={20} />
                        </div>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isWireframe ? 'transparent' : '#64748b' }}>
                          <FileText size={20} />
                        </div>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isWireframe ? 'transparent' : '#64748b' }}>
                          <Users size={20} />
                        </div>
                      </div>

                      {/* Contenido ERP */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>

                        {/* 4 Tarjetas de Métricas en tema claro (solo acento rojo y gris) */}
                        <div className="erp-cards-grid">
                          {[
                            { label: 'Ventas del Mes', val: 'Bs. 54,200', note: '+18% este mes', icon: <DollarSign size={16} color="var(--brand-red)" /> },
                            { label: 'Inventario', val: '1,420 unid.', note: 'Stock al día', icon: <Package size={16} color="#64748b" /> },
                            { label: 'Facturas', val: '48 emitidas', note: 'Al día', icon: <Receipt size={16} color="#64748b" /> },
                            { label: 'Clientes', val: '324 activos', note: 'Verificados', icon: <UserCheck size={16} color="#64748b" /> },
                          ].map((card, i) => (
                            <div
                              key={i}
                              className="lego-item"
                              style={{
                                background: isWireframe ? '#f1f5f9' : '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '10px',
                                padding: '10px 12px',
                                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                                opacity: assembledBlocks.includes(i + 1) ? 1 : 0,
                                transform: assembledBlocks.includes(i + 1) ? 'translateY(0)' : 'translateY(20px)',
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.8rem', color: isWireframe ? 'transparent' : '#64748b', fontWeight: 600 }}>{card.label}</span>
                                {isWireframe ? null : card.icon}
                              </div>
                              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: isWireframe ? 'transparent' : '#0f172a', marginTop: '2px' }}>
                                {card.val}
                              </div>
                              <div style={{ fontSize: '0.8rem', color: isWireframe ? 'transparent' : 'var(--brand-red)', fontWeight: 600 }}>{card.note}</div>
                            </div>
                          ))}
                        </div>

                        {/* Gráfica y Tabla */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '12px', flex: 1 }}>

                          {/* Gráfica limpia con acento rojo de marca */}
                          <div
                            className="lego-item"
                            style={{
                              background: isWireframe ? '#f1f5f9' : '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: '10px',
                              padding: '12px 14px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                              opacity: assembledBlocks.includes(5) ? 1 : 0,
                              transform: assembledBlocks.includes(5) ? 'translateY(0)' : 'translateY(20px)',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700, color: isWireframe ? 'transparent' : '#0f172a' }}>
                              <span>Ventas Semanales</span>
                              <span style={{ color: 'var(--brand-red)' }}>+24%</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '100px', paddingTop: '6px' }}>
                              {[
                                { l: 'Lun', h: '45%' },
                                { l: 'Mar', h: '65%' },
                                { l: 'Mié', h: '55%' },
                                { l: 'Jue', h: '80%' },
                                { l: 'Vie', h: '95%' },
                              ].map((bar, bi) => (
                                <div key={bi} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', width: '24px' }}>
                                  <div
                                    style={{
                                      width: '100%',
                                      height: chartGrown ? bar.h : '10%',
                                      background: isWireframe ? '#e2e8f0' : bi === 4 ? 'var(--brand-red)' : '#cbd5e1',
                                      borderRadius: '4px 4px 0 0',
                                      transition: 'height 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                  />
                                  <span style={{ fontSize: '0.8rem', color: isWireframe ? 'transparent' : '#64748b', fontWeight: 600 }}>{bar.l}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tabla de cobros */}
                          <div
                            className="lego-item"
                            style={{
                              background: isWireframe ? '#f1f5f9' : '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: '10px',
                              padding: '12px 14px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                              opacity: assembledBlocks.includes(6) ? 1 : 0,
                              transform: assembledBlocks.includes(6) ? 'translateY(0)' : 'translateY(20px)',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: isWireframe ? 'transparent' : '#0f172a' }}>
                                Clientes &amp; Cobros
                              </span>
                              <button
                                ref={targetBtnRef}
                                style={{
                                  padding: '5px 12px',
                                  background: 'var(--brand-red)',
                                  color: '#ffffff',
                                  border: 'none',
                                  borderRadius: '6px',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  cursor: 'pointer',
                                  transform: btnClicked ? 'scale(0.93)' : 'scale(1)',
                                  transition: 'transform 0.15s ease',
                                }}
                              >
                                + Nueva Venta
                              </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {erpNewRowVisible && (
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '7px 8px',
                                    borderRadius: '6px',
                                    background: '#fee2e2',
                                    border: '1px solid #fecdd3',
                                    fontSize: '0.82rem',
                                    animation: 'slideInRow 0.35s ease-out',
                                  }}
                                >
                                  <span style={{ color: '#0f172a', fontWeight: 600 }}>Distribuidora El Fuerte</span>
                                  <span style={{ color: '#0f172a', fontWeight: 700 }}>Bs. 9,800</span>
                                  <span style={{ padding: '2px 8px', borderRadius: '4px', background: 'var(--brand-red)', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700 }}>
                                    ✓ Registrado
                                  </span>
                                </div>
                              )}

                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.82rem' }}>
                                <span style={{ color: isWireframe ? 'transparent' : '#334155', fontWeight: 500 }}>Comercial El Sol</span>
                                <span style={{ color: isWireframe ? 'transparent' : '#0f172a', fontWeight: 700 }}>Bs. 8,400</span>
                                <span style={{ padding: '2px 8px', borderRadius: '4px', background: isWireframe ? 'transparent' : '#f1f5f9', color: isWireframe ? 'transparent' : '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                                  Pagado
                                </span>
                              </div>

                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', fontSize: '0.82rem' }}>
                                <span style={{ color: isWireframe ? 'transparent' : '#334155', fontWeight: 500 }}>Importadora Oriente</span>
                                <span style={{ color: isWireframe ? 'transparent' : '#0f172a', fontWeight: 700 }}>Bs. 12,300</span>
                                <span style={{ padding: '2px 8px', borderRadius: '4px', background: isWireframe ? 'transparent' : '#f1f5f9', color: isWireframe ? 'transparent' : '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                                  Pagado
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    ESCENA 2: PORTAL DE NOTICIAS
                    ========================================================= */}
                {activeScene === 1 && (
                  <div className="scene-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div
                      className="lego-item"
                      style={{
                        background: isWireframe ? '#f1f5f9' : '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '10px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                        opacity: assembledBlocks.includes(0) ? 1 : 0,
                        transform: assembledBlocks.includes(0) ? 'translateY(0)' : 'translateY(20px)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: isWireframe ? 'transparent' : 'var(--brand-red)' }}>
                        {!isWireframe && <Newspaper size={20} color="var(--brand-red)" />}
                        <span>DIARIO DIGITAL</span>
                      </div>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '0.84rem', color: isWireframe ? 'transparent' : '#64748b', fontWeight: 500 }}>
                        <span style={{ color: isWireframe ? 'transparent' : '#0f172a', fontWeight: 700 }}>Portada</span>
                        <span>Economía</span>
                        <span>Santa Cruz</span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '12px', flex: 1 }}>
                      <div
                        className="lego-item"
                        style={{
                          background: isWireframe ? '#f1f5f9' : '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                          opacity: assembledBlocks.includes(1) ? 1 : 0,
                          transform: assembledBlocks.includes(1) ? 'translateY(0)' : 'translateY(20px)',
                        }}
                      >
                        <div style={{ height: '120px', background: isWireframe ? '#e2e8f0' : '#fee2e2', position: 'relative' }}>
                          <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                            <rect width="300" height="120" fill={isWireframe ? 'transparent' : '#fee2e2'} />
                            <circle cx="230" cy="40" r="28" fill={isWireframe ? 'transparent' : '#fecdd3'} />
                            <path d="M0,120 L70,80 L150,105 L230,65 L300,95 L300,120 Z" fill={isWireframe ? 'transparent' : '#fda4af'} opacity="0.6" />
                          </svg>
                        </div>

                        <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isWireframe ? 'transparent' : 'var(--brand-red)' }}>
                            REPORTE EXCLUSIVO
                          </span>

                          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: isWireframe ? 'transparent' : '#0f172a', lineHeight: 1.35, margin: '4px 0' }}>
                            Santa Cruz lidera el crecimiento comercial del país este trimestre
                          </h4>

                          <p style={{ fontSize: '0.82rem', color: isWireframe ? 'transparent' : '#475569', lineHeight: 1.4 }}>
                            Empresas locales reportan aumento en transacciones y modernización digital.
                          </p>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                            <button
                              ref={targetBtnRef}
                              style={{
                                padding: '6px 14px',
                                borderRadius: '6px',
                                background: 'var(--brand-red)',
                                color: '#ffffff',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                border: 'none',
                                cursor: 'pointer',
                                transform: btnClicked ? 'scale(0.93)' : 'scale(1)',
                                transition: 'transform 0.15s ease',
                              }}
                            >
                              Leer Noticia
                            </button>

                            {newsAlertVisible && (
                              <span style={{ fontSize: '0.8rem', color: 'var(--brand-red)', fontWeight: 700, animation: 'fadeInToast 0.3s ease-out' }}>
                                ✓ Noticia publicada
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                          { title: 'Nuevas inversiones impulsan la producción local', time: 'Hace 20 min' },
                          { title: 'Señal de radio y TV digital transmiten 24/7 sin caídas', time: 'Hace 1 hora' },
                        ].map((side, si) => (
                          <div
                            key={si}
                            className="lego-item"
                            style={{
                              background: isWireframe ? '#f1f5f9' : '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: '10px',
                              padding: '12px',
                              display: 'flex',
                              gap: '12px',
                              alignItems: 'center',
                              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                              opacity: assembledBlocks.includes(si + 2) ? 1 : 0,
                              transform: assembledBlocks.includes(si + 2) ? 'translateY(0)' : 'translateY(20px)',
                            }}
                          >
                            <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: isWireframe ? '#e2e8f0' : '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', flexShrink: 0 }}>
                              <Newspaper size={20} />
                            </div>
                            <div>
                              <h5 style={{ fontSize: '0.85rem', fontWeight: 600, color: isWireframe ? 'transparent' : '#0f172a', lineHeight: 1.3 }}>
                                {side.title}
                              </h5>
                              <span style={{ fontSize: '0.8rem', color: isWireframe ? 'transparent' : '#64748b' }}>{side.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    ESCENA 3: WEB INFORMATIVA (CON ILUSTRACIÓN & AIRE ESPACIOSO)
                    ========================================================= */}
                {activeScene === 2 && (
                  <div className="scene-container" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                    {/* Menú superior */}
                    <div
                      className="lego-item"
                      style={{
                        background: isWireframe ? '#f1f5f9' : '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '12px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                        opacity: assembledBlocks.includes(0) ? 1 : 0,
                        transform: assembledBlocks.includes(0) ? 'translateY(0)' : 'translateY(20px)',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: isWireframe ? 'transparent' : '#0f172a' }}>
                        MI EMPRESA
                      </div>
                      <div style={{ display: 'flex', gap: '18px', fontSize: '0.84rem', color: isWireframe ? 'transparent' : '#64748b' }}>
                        <span>Inicio</span>
                        <span>Servicios</span>
                        <span>Contacto</span>
                      </div>
                    </div>

                    {/* BANNER DIVIDIDO EN DOS: Texto a la izquierda, ILUSTRACIÓN MODERNA a la derecha */}
                    <div
                      className="lego-item"
                      style={{
                        background: isWireframe ? '#f1f5f9' : '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '24px 22px',
                        display: 'grid',
                        gridTemplateColumns: '1.3fr 1fr',
                        alignItems: 'center',
                        gap: '20px',
                        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                        opacity: assembledBlocks.includes(1) ? 1 : 0,
                        transform: assembledBlocks.includes(1) ? 'translateY(0)' : 'translateY(20px)',
                      }}
                    >
                      {/* Texto a la izquierda */}
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: isWireframe ? 'transparent' : '#0f172a', lineHeight: 1.25, marginBottom: '6px' }}>
                          Soluciones digitales que impulsan tu negocio
                        </h4>

                        <p style={{ fontSize: '0.84rem', color: isWireframe ? 'transparent' : '#475569', lineHeight: 1.45, marginBottom: '14px' }}>
                          Te ayudamos a ordenar tus ventas, captar clientes y destacar con una plataforma moderna.
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <button
                            ref={targetBtnRef}
                            style={{
                              padding: '9px 24px',
                              background: 'var(--brand-red)',
                              color: '#ffffff',
                              borderRadius: '6px',
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.84rem',
                              fontWeight: 600,
                              border: 'none',
                              cursor: 'pointer',
                              boxShadow: '0 4px 14px rgba(230, 0, 40, 0.25)',
                              transform: btnClicked ? 'scale(0.93)' : 'scale(1)',
                              transition: 'transform 0.15s ease',
                            }}
                          >
                            Contáctanos
                          </button>

                          {webSentAlertVisible && (
                            <div
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                background: '#fee2e2',
                                color: 'var(--brand-red)',
                                fontSize: '0.82rem',
                                fontWeight: 700,
                                animation: 'fadeInToast 0.3s ease-out',
                              }}
                            >
                              <Check size={16} />
                              <span>¡Mensaje enviado!</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ILUSTRACIÓN MODERNA VECTORIAL A LA DERECHA */}
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px' }}>
                        {!isWireframe ? (
                          <svg width="100%" height="135" viewBox="0 0 200 135" fill="none">
                            {/* Formas redondeadas de fondo en rojo suave y pizarra */}
                            <circle cx="150" cy="50" r="42" fill="#fee2e2" />
                            <rect x="20" y="80" width="160" height="40" rx="10" fill="#f1f5f9" />

                            {/* Base de la laptop y pantalla */}
                            <rect x="55" y="32" width="90" height="58" rx="6" fill="#0f172a" />
                            <rect x="60" y="36" width="80" height="50" rx="3" fill="#ffffff" />

                            {/* Mini gráfica dentro de la laptop */}
                            <path d="M68 74 L84 60 L100 66 L116 48 L132 54" stroke="#e60028" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="116" cy="48" r="3" fill="#e60028" />

                            {/* Teclado / base */}
                            <path d="M42 92 L158 92 L150 98 L50 98 Z" fill="#334155" />

                            {/* Tarjeta flotante de éxito */}
                            <rect x="120" y="20" width="60" height="26" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                            <circle cx="132" cy="33" r="6" fill="#fee2e2" />
                            <path d="M130 33 L132 35 L135 31" stroke="#e60028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="142" y="30" width="30" height="5" rx="2" fill="#e60028" />

                            {/* Taza de café / detalle */}
                            <rect x="35" y="76" width="12" height="15" rx="3" fill="#e60028" opacity="0.85" />
                          </svg>
                        ) : (
                          <div style={{ width: '100%', height: '120px', background: '#e2e8f0', borderRadius: '8px' }} />
                        )}
                      </div>
                    </div>

                    {/* TESTIMONIO CON AVATAR EN INICIALES "CM" EN ROJO SUAVE (DANDO AIRE Y MENOS BLOQUES) */}
                    <div
                      className="lego-item"
                      style={{
                        background: isWireframe ? '#f1f5f9' : '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '14px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                        opacity: assembledBlocks.includes(2) ? 1 : 0,
                        transform: assembledBlocks.includes(2) ? 'translateY(0)' : 'translateY(20px)',
                      }}
                    >
                      {/* Avatar con iniciales CM en rojo suave */}
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          background: isWireframe ? '#e2e8f0' : '#fee2e2',
                          color: isWireframe ? 'transparent' : 'var(--brand-red)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                          fontSize: '0.95rem',
                          flexShrink: 0,
                        }}
                      >
                        CM
                      </div>
                      <div style={{ fontSize: '0.84rem', color: isWireframe ? 'transparent' : '#475569' }}>
                        <strong style={{ color: isWireframe ? 'transparent' : '#0f172a', display: 'inline', marginRight: '6px' }}>
                          "Aumentamos nuestras ventas un 40% desde el primer mes."
                        </strong>
                        <span>— Lic. Carlos Medina, Gerente Comercial</span>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* Pestañas inferiores de control manual */}
            <div className="scene-tabs-bar">
              {sceneConfigs.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => jumpToScene(idx)}
                  className={`scene-tab-btn ${activeScene === idx ? 'active' : ''}`}
                >
                  <span className="scene-dot-indicator" style={{ background: activeScene === idx ? 'var(--brand-red)' : '#64748b' }} />
                  <span>{idx + 1}. {sc.title}</span>
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .hero-fixed-section {
          position: relative;
          min-height: 88vh;
          padding: 100px 0 60px;
          display: flex;
          align-items: center;
          background: #080a0f;
          overflow: hidden;
        }

        .hero-grid-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: center;
        }

        .hero-text-col {
          max-width: 560px;
        }

        .hero-main-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.3rem, 3.8vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .hero-description {
          font-size: clamp(1.05rem, 1.35vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 34px;
        }

        .hero-buttons-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }

        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.88rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .trust-point {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-screen-col {
          width: 100%;
        }

        /* MARCO OSCURO DEL NAVEGADOR EXTERNO */
        .mockup-laptop-browser {
          background: #0f172a;
          border-radius: 16px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          width: 100%;
        }

        .mockup-frame-bar {
          background: #1e293b;
          padding: 12px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .mockup-address-pill {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 4px 14px;
          font-size: 0.8rem;
          color: #94a3b8;
          font-family: 'Inter', -apple-system, sans-serif;
          max-width: 55%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* INTERIOR CLARO BRILLANTE QUE HACE QUE EL MOCKUP SALTE */
        .mockup-light-viewport {
          background: #f8fafc;
          height: 420px;
          min-height: 420px;
          max-height: 420px;
          position: relative;
          overflow: hidden;
          padding: 20px;
          width: 100%;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .scene-container {
          position: absolute;
          inset: 20px;
          height: calc(100% - 40px);
          width: calc(100% - 40px);
        }

        .erp-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .lego-item {
          transition: all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .scene-tabs-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .scene-tab-btn {
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .scene-tab-btn.active {
          background: #ffffff;
          border-color: #ffffff;
          color: #0f172a;
        }

        .scene-dot-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .cursor-ripple-effect {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(230, 0, 40, 0.35);
          animation: rippleAnim 0.6s ease-out forwards;
        }

        @keyframes rippleAnim {
          0% {
            transform: scale(0.2);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes slideInRow {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInToast {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 968px) {
          .hero-grid-wrapper {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }

          .hero-text-col {
            max-width: 100%;
          }

          .hero-buttons-group {
            justify-content: center;
          }

          .hero-trust-row {
            justify-content: center;
          }

          .mockup-light-viewport {
            height: 390px;
            min-height: 390px;
            max-height: 390px;
          }
        }

        @media (max-width: 640px) {
          .erp-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lego-item {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          .cursor-ripple-effect,
          .virtual-cursor {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
