import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section style={{
                padding: '6rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid var(--border)'
            }}>
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                        Report City Problems, <span style={{ color: 'var(--primary)' }}>Build Better Cities.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
                        A transparent platform for citizens to report issues, track resolutions, and gain AI-powered insights into city infrastructure.
                    </p>
                    <div className="flex gap-4" style={{ justifyContent: 'center' }}>
                        <a href="/submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>Report Problem</a>
                        <a href="/explore" className="btn btn-outline" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>Explore Map</a>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container flex items-center justify-between stack" style={{ gap: '4rem' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2rem' }}>Our Mission</h2>
                        <p>
                            We believe in the power of collective reporting and data transparency. Our platform bridges the gap between citizens and city maintenance, ensuring that every pothole, broken streetlight, or graffiti is accounted for and addressed.
                        </p>
                        <p>
                            By providing AI-driven summaries and progress tracking, we hold authorities accountable and empower communities to take pride in their urban environment.
                        </p>
                    </div>
                    <div style={{
                        flex: '1',
                        minWidth: '300px',
                        height: '300px',
                        backgroundColor: '#E5E7EB',
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)'
                    }}>
                        [Mission Illustration]
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '4rem' }}>How It Works</h2>
                    <div className="flex gap-4 stack" style={{ justifyContent: 'center' }}>
                        {[
                            {
                                title: 'Report',
                                desc: 'Snap a photo and describe the problem you found in your neighborhood.',
                                icon: '📸'
                            },
                            {
                                title: 'Track',
                                desc: 'See your report on the map and track its status as it moves toward resolution.',
                                icon: '📍'
                            },
                            {
                                title: 'Improve',
                                desc: 'Help city officials prioritize work with our AI-driven urgency scoring.',
                                icon: '📈'
                            }
                        ].map((step, i) => (
                            <div key={i} className="card" style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
