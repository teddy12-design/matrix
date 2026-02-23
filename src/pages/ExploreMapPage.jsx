import React, { useState } from 'react';

const ExploreMapPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Infrastructure', 'Safety', 'Cleanliness', 'Lighting'];

    const problems = [
        { id: 1, title: "Pothole on Main St", category: "Infrastructure", upvotes: 24, status: "Reported", summary: "Damaged asphalt causing traffic slowing." },
        { id: 2, title: "Broken Streetlight", category: "Lighting", upvotes: 12, status: "In Progress", summary: "Hazardous area at night due to lack of light." },
        { id: 3, title: "Illegal Dumping", category: "Cleanliness", upvotes: 45, status: "Reported", summary: "Large pile of waste blocking the sidewalk." },
    ];

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 style={{ marginBottom: '0.5rem' }}>Explore Map</h1>
                    <p>Discover and support local improvements in your city.</p>
                </div>
                <div className="flex gap-4">
                    <input type="text" placeholder="Search problems..." style={{ maxWidth: '300px' }} />
                    <button className="btn btn-primary">Find</button>
                </div>
            </div>

            <div className="flex gap-4" style={{ marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="btn"
                        style={{
                            backgroundColor: activeCategory === cat ? 'var(--primary)' : 'white',
                            color: activeCategory === cat ? 'white' : 'var(--text-primary)',
                            border: '1px solid var(--border)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex gap-4 stack">
                <div style={{ flex: '1.5', minWidth: '300px' }}>
                    <div style={{
                        height: '500px',
                        backgroundColor: '#E5E7EB',
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}>
                        [Interactive Map Placeholder]
                    </div>
                </div>

                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Local Reports</h3>
                    <div className="flex gap-4" style={{ flexDirection: 'column' }}>
                        {problems.map(prob => (
                            <a href={`/problem/${prob.id}`} key={prob.id} className="card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
                                <div className="flex justify-between items-start" style={{ marginBottom: '0.5rem' }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.5rem',
                                        backgroundColor: '#F3F4FB',
                                        color: 'var(--primary)',
                                        borderRadius: '4px',
                                        fontWeight: 600
                                    }}>
                                        {prob.category}
                                    </span>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                        🔼 {prob.upvotes}
                                    </span>
                                </div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{prob.title}</h4>
                                <p style={{ fontSize: '0.875rem', margin: 0 }}>{prob.summary}</p>
                                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: prob.status === 'In Progress' ? 'var(--warning)' : 'var(--primary)',
                                        fontWeight: 600
                                    }}>
                                        ● {prob.status}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>2 days ago</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreMapPage;
