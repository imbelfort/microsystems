import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logomicrosystems.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Servicios', href: '#services' },
        { name: 'Tecnologías', href: '#stack' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                padding: scrolled ? '15px 0' : '25px 0',
                transition: 'all 0.3s ease',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    <img src={logo} style={{ height: '40px', width: 'auto' }} /> MicroSystems
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '30px' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                            onMouseOver={(e) => e.target.style.color = 'white'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="white" /> : <Menu color="white" />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                        style={{
                            overflow: 'hidden',
                            background: 'rgba(5, 5, 5, 0.95)',
                            backdropFilter: 'blur(10px)',
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '20px 0' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        color: 'white',
                                        fontSize: '1.2rem',
                                        padding: '15px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                        textAlign: 'center'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
