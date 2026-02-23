import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'white',
            borderTop: '1px solid var(--border)',
            padding: '4rem 0 2rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div className="flex justify-between" style={{ marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                backgroundColor: 'var(--primary)',
                                borderRadius: '6px'
                            }}></div>
                            <span style={{ fontWeight: 700 }}>ProblemMap</span>
                        </div>
                        <p style={{ fontSize: '0.875rem' }}>
                            Empowering citizens to build better cities through transparent reporting and AI-driven insights.
                        </p>
                    </div>

                    <div className="flex gap-12" style={{ flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>Product</h4>
                            <ul style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="/explore" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Explore Map</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="/submit" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Report Issue</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="/ai" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>AI Insights</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>Resources</h4>
                            <ul style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="/contact" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Contact Support</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="/about" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>About Us</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="/privacy" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '2rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    justifyContent: 'between'
                }}>
                    <p>© 2026 ProblemMap. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
