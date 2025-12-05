import React from 'react';
import { motion } from 'framer-motion';

const techs = [
    "React", "Vue.js", "WordPress", "Next.js", "Supabase", "Firebase",
    "PostgreSQL", "Node.js", "TypeScript", "Vite", "Framer Motion"
];

export default function TechStack() {
    return (
        <section id="stack" style={{ padding: '80px 0', overflow: 'hidden', background: '#050505' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                    POTENCIADO POR
                </motion.p>
            </div>

            <div style={{ display: 'flex', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ display: 'flex', gap: '80px', whiteSpace: 'nowrap', minWidth: 'fit-content' }}
                >
                    {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
                        <span key={i} style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            color: 'transparent',
                            WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                            fontFamily: 'sans-serif',
                            cursor: 'default',
                            transition: 'color 0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.target.style.color = 'var(--accent-color)';
                                e.target.style.WebkitTextStroke = '2px var(--accent-color)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = 'transparent';
                                e.target.style.WebkitTextStroke = '2px rgba(255,255,255,0.2)';
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
