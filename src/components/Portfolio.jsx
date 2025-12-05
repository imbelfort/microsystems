import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        name: 'El Mundo',
        url: 'https://elmundo.com.bo',
        category: 'Portal de Noticias'
    },
    {
        name: 'Radio Mega 97.3 FM',
        url: 'https://lamega973fm.com',
        category: 'Radio Online & Streaming'
    },
    {
        name: 'TV Megavisión',
        url: 'https://tvmegavision.com',
        category: 'Canal de TV Digital'
    },
    {
        name: 'Nueva Presencia',
        url: 'https://nuevapresencia.com',
        category: 'Portal de Noticias Digitales'
    },
    {
        name: 'Fundación Más Árboles',
        url: 'https://fundacionmasarbolesbolivia.org',
        category: 'Organización Sin Fines de Lucro'
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="section" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '1px' }}>NUESTRO TRABAJO</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '10px' }}>Proyectos Destacados</h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, borderColor: 'var(--primary-color)' }}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '200px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', top: 0, right: 0, padding: '20px', opacity: 0.5 }}>
                                <ExternalLink size={24} />
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <span style={{
                                    color: 'var(--accent-color)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    display: 'block',
                                    marginBottom: '10px'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{project.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '5px', fontSize: '0.9rem' }}>{project.url.replace('https://', '')}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
