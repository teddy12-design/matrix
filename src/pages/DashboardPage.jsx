import React from 'react';

const DashboardPage = () => {
    const userProblems = [
        { id: 1, title: "Pothole on Main St", status: "Reported", date: "Oct 12, 2026", upvotes: 24 },
        { id: 4, title: "Graffiti on Park Wall", status: "Resolved", date: "Sep 28, 2026", upvotes: 8 },
    ];

    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
                <div>
                    <h1>User Dashboard</h1>
                    <p>Manage and track your reported problems.</p>
                </div>
                <a href="/submit" className="btn btn-primary">Report New Problem</a>
            </div>

            <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
                {/* Stats Summary */}
                <div style={{ flex: '1', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {[
                        { label: 'Total Reported', count: 2, color: 'var(--primary)' },
                        { label: 'In Progress', count: 0, color: 'var(--warning)' },
                        { label: 'Resolved', count: 1, color: 'var(--success)' }
                    ].map((stat, i) => (
                        <div key={i} className="card" style={{ flex: '1', minWidth: '150px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: stat.color }}>{stat.count}</div>
                            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Listings */}
                <div style={{ flex: '2', minWidth: '300px' }}>
                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem' }}>Your Reports</h3>
                        <div className="flex gap-4" style={{ flexDirection: 'column' }}>
                            {userProblems.map(prob => (
                                <div key={prob.id} className="flex justify-between items-center" style={{
                                    padding: '1rem',
                                    borderBottom: '1px solid var(--border)',
                                    lastChild: { borderBottom: 'none' }
                                }}>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>{prob.title}</h4>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Reported on {prob.date}</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: prob.status === 'Resolved' ? 'var(--success)' : 'var(--primary)'
                                        }}>
                                            {prob.status}
                                        </span>
                                        <a href={`/problem/${prob.id}`} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>View</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
