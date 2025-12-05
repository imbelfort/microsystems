import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Globe, Code, Database, Newspaper, ShieldCheck, Cpu, Headphones } from 'lucide-react';

const services = [
    {
        icon: <Database size={40} color="var(--secondary-color)" />,
        title: "Software a Medida",
        desc: "Sistemas de gestión empresarial (ERP, CRM) personalizados y adaptados a los flujos de trabajo de tu negocio."
    },
    {
        icon: <Code size={40} color="#ec4899" />,
        title: "Desarrollo de Apps Web",
        desc: "Aplicaciones web progresivas (PWA) y SPAs interactivas utilizando tecnologías modernas como React y Vue."
    },
    {
        icon: <Newspaper size={40} color="var(--accent-color)" />,
        title: "Portales de Noticias",
        desc: "Sitios web para medios de comunicación, optimizados para SEO y alto tráfico, auto-administrables."
    },
    {
        icon: <ShieldCheck size={40} color="#10b981" />,
        title: "Auditoría de Sistemas",
        desc: "Evaluación exhaustiva de seguridad, rendimiento y calidad de código de tus plataformas existentes."
    },
    {
        icon: <Headphones size={40} color="#f59e0b" />,
        title: "Asesoría Tecnológica",
        desc: "Consultoría experta para transformación digital, elección de infraestructura y arquitectura de software."
    },
    {
        icon: <Cpu size={40} color="#6366f1" />,
        title: "Mantenimiento de PC",
        desc: "Soporte técnico, mantenimiento preventivo y correctivo de equipos de computación para empresas."
    }
];

export default function Services() {
    return (
        <section id="services" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{ color: 'var(--primary-color)', fontWeight: 600, letterSpacing: '1px' }}>QUÉ HACEMOS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px' }}>Soluciones Integrales</h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{
                                marginBottom: '25px',
                                background: 'rgba(255,255,255,0.05)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
