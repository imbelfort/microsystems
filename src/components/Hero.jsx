import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" style={{
            height: '100vh',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'var(--primary-color)',
                    filter: 'blur(120px)',
                    opacity: 0.2,
                    borderRadius: '50%'
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                style={{
                    position: 'absolute',
                    bottom: '0%',
                    right: '0%',
                    width: '600px',
                    height: '600px',
                    background: 'var(--secondary-color)',
                    filter: 'blur(120px)',
                    opacity: 0.2,
                    borderRadius: '50%'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.9rem',
                            marginBottom: '24px',
                            color: 'var(--accent-color)',
                            fontWeight: 500
                        }}>
                        MicroSystems • Santa Cruz de la Sierra, Bolivia
                    </motion.span>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        letterSpacing: '-0.02em'
                    }}>
                        Software que impulsa <br />
                        <span className="text-gradient">tu Crecimiento</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        lineHeight: 1.6
                    }}>
                        Desarrollamos sitios web, portales de noticias y sistemas a medida con tecnologías modernas como React, Vue y Supabase.
                    </p>

                    <motion.a
                        href="https://wa.me/59160851148"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Cotizar Proyecto
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
