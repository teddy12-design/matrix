import React from 'react';
import { useParams } from 'react-router-dom';

const ProblemDetailPage = () => {
    const { id } = useParams();

    // Mock data for the problem
    const problem = {
        title: "Major Pothole on Main St",
        category: "Infrastructure",
        description: "A very deep pothole has formed in the middle lane of Main St. It is approximately 2 feet wide and 5 inches deep. Multiple cars have already suffered tire damage.",
        location: "Main St, near the Central Park entrance",
        upvotes: 24,
        status: "Reported",
        aiSummary: "High-priority infrastructure hazard. Significant risk to vehicle safety and traffic flow. Immediate temporary patching followed by permanent resurfacing recommended.",
        suggestedSolutions: [
            "Immediate filling with cold patch asphalt.",
            "Investigation of potential water main leak beneath.",
            "Speed limit reduction until repaired."
        ],
        comments: [
            { user: "Sarah J.", text: "Almost hit this today! Please fix soon.", date: "1h ago" },
            { user: "Mike T.", text: "Sent a photo as well.", date: "3h ago" }
        ]
    };

    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <div className="flex gap-8 stack">
                {/* Main Content */}
                <div style={{ flex: '2', minWidth: '300px' }}>
                    <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                        <span style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: '#F3F4FB',
                            color: 'var(--primary)',
                            borderRadius: '99px',
                            fontWeight: 600,
                            fontSize: '0.875rem'
                        }}>
                            {problem.category}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Reported 2 days ago</span>
                    </div>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{problem.title}</h1>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '2rem' }}>{problem.description}</p>

                    <div style={{
                        height: '300px',
                        backgroundColor: '#E5E7EB',
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}>
                        [Location Map Placeholder]
                    </div>

                    <div className="card" style={{ borderLeft: '4px solid var(--primary)', backgroundColor: '#F8FAFF' }}>
                        <h3 className="flex items-center gap-4">
                            <span style={{ fontSize: '1.5rem' }}>✨</span> AI Summary
                        </h3>
                        <p style={{ fontStyle: 'italic', marginBottom: 0 }}>{problem.aiSummary}</p>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h3>Comments</h3>
                        <div className="flex gap-4" style={{ flexDirection: 'column', marginTop: '1.5rem' }}>
                            {problem.comments.map((comment, i) => (
                                <div key={i} className="card" style={{ padding: '1rem' }}>
                                    <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 600 }}>{comment.user}</span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{comment.date}</span>
                                    </div>
                                    <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{comment.text}</p>
                                </div>
                            ))}
                            <div className="flex gap-4" style={{ marginTop: '1rem' }}>
                                <input type="text" placeholder="Add a comment..." />
                                <button className="btn btn-primary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <div className="card" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>{problem.upvotes}</div>
                        <p style={{ fontWeight: 600 }}>Upvotes</p>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Upvote Report</button>
                    </div>

                    <div className="card">
                        <h3>Suggested Solutions</h3>
                        <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem' }}>
                            {problem.suggestedSolutions.map((sol, i) => (
                                <li key={i} style={{ marginBottom: '0.75rem', fontSize: '0.875rem' }}>{sol}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card" style={{ marginTop: '2rem' }}>
                        <h3>Problem Statistics</h3>
                        <div style={{ marginTop: '1rem' }}>
                            <div className="flex justify-between" style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                                <span>Impact Area</span>
                                <span style={{ fontWeight: 600 }}>300m radius</span>
                            </div>
                            <div className="flex justify-between" style={{ fontSize: '0.875rem' }}>
                                <span>Report Urgency</span>
                                <span style={{ color: 'var(--error)', fontWeight: 600 }}>High</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemDetailPage;
