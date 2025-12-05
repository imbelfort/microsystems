import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, User, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section" style={{ background: 'linear-gradient(to top, #000000, #0a0a0a)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px'
                }}>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', maxWidth: '600px' }}
                    >
                        <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '20px' }}>
                            Hablemos de tu <br />
                            <span className="text-gradient">Próximo Proyecto</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '1.2rem' }}>
                            Estamos listos para llevar tu idea al siguiente nivel. Contáctanos Directamente.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '40px'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%' }}>
                                    <User size={30} color="var(--accent-color)" />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>WhatsApp/Celular</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <a href="https://wa.me/59160851148" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                            +591 608-51148
                                        </a>
                                        <a href="https://wa.me/59177390707" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                            +591 773-90707
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%' }}>
                                    <Mail size={30} color="var(--secondary-color)" />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>erickbelfort@hotmail.es</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%' }}>
                                    <MapPin size={30} color="var(--primary-color)" />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>Ubicación</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Santa Cruz de la Sierra, Bolivia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
