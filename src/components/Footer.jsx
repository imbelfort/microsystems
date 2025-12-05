import React from 'react';

export default function Footer() {
    return (
        <footer style={{ padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', background: '#050505' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} MicroSystems. Todos los derechos reservados.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.6 }}>
                    Santa Cruz de la Sierra, Bolivia
                </p>
            </div>
        </footer>
    );
}
