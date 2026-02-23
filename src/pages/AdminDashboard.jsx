import React from 'react';

const AdminDashboard = () => {
    const allReports = [
        { id: 1, title: "Pothole on Main St", user: "John D.", severity: "High", status: "Reported" },
        { id: 2, title: "Broken Streetlight", user: "Sarah J.", severity: "Medium", status: "In Progress" },
        { id: 3, title: "Illegal Dumping", user: "Mike T.", severity: "Low", status: "Reported" },
    ];

    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Admin Console</h1>

            <div className="flex gap-4" style={{ marginBottom: '3rem', flexWrap: 'wrap' }}>
                {[
                    { label: 'Pending Review', count: 12, color: 'var(--primary)' },
                    { label: 'Active Tasks', count: 4, color: 'var(--warning)' },
                    { label: 'System Health', count: '98%', color: 'var(--success)' }
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: stat.color }}>{stat.count}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="card">
                <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                    <h3>All Reports</h3>
                    <div className="flex gap-4">
                        <select style={{ width: 'auto' }}>
                            <option>Status: All</option>
                            <option>Reported</option>
                            <option>In Progress</option>
                            <option>Resolved</option>
                        </select>
                        <button className="btn btn-outline">Export CSV</button>
                    </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem' }}>ID</th>
                                <th style={{ padding: '1rem' }}>Problem</th>
                                <th style={{ padding: '1rem' }}>Reporter</th>
                                <th style={{ padding: '1rem' }}>Severity</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                                <th style={{ padding: '1rem' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allReports.map(report => (
                                <tr key={report.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '1rem' }}>#{report.id}</td>
                                    <td style={{ padding: '1rem', fontWeight: 600 }}>{report.title}</td>
                                    <td style={{ padding: '1rem' }}>{report.user}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            color: report.severity === 'High' ? 'var(--error)' : 'var(--text-primary)',
                                            fontWeight: report.severity === 'High' ? 700 : 400
                                        }}>
                                            {report.severity}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{report.status}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
