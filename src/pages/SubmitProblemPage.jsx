import React, { useState } from 'react';

const SubmitProblemPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        urgency: 'medium'
    });

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1rem' }}>Report a New Problem</h1>
                <p style={{ marginBottom: '3rem' }}>Provide as much detail as possible to help city officials address the issue quickly.</p>

                <div className="flex gap-8" style={{ flexWrap: 'wrap-reverse' }}>
                    <div style={{ flex: '1.5', minWidth: '300px' }}>
                        <div className="card">
                            <form className="flex gap-6" style={{ flexDirection: 'column' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Short Title</label>
                                    <input type="text" placeholder="e.g., Pothole on Maple Ave" required />
                                    <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>A concise summary of the issue.</p>
                                </div>

                                <div className="flex gap-4">
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Category</label>
                                        <select required>
                                            <option value="">Select category</option>
                                            <option value="infrastructure">Infrastructure</option>
                                            <option value="lighting">Lighting</option>
                                            <option value="cleanliness">Cleanliness</option>
                                            <option value="safety">Safety</option>
                                        </select>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Urgency</label>
                                        <select value={formData.urgency} onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Detailed Description</label>
                                    <textarea rows="6" placeholder="Describe the problem, its exact location, and any hazards it poses..." required></textarea>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Upload Photos</label>
                                    <div style={{
                                        border: '2px dashed var(--border)',
                                        borderRadius: 'var(--radius-xl)',
                                        padding: '3rem',
                                        textAlign: 'center',
                                        backgroundColor: '#FAFAFA',
                                        cursor: 'pointer'
                                    }}>
                                        <span style={{ fontSize: '2rem' }}>📸</span>
                                        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                            Drag and drop images here, or click to browse
                                        </p>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1rem', fontWeight: 600 }}>
                                    Submit Report
                                </button>
                            </form>
                        </div>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div className="card" style={{ position: 'sticky', top: '100px' }}>
                            <h3>Location</h3>
                            <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Drag the pin to the exact location of the problem.</p>
                            <div style={{
                                height: '300px',
                                backgroundColor: '#E5E7EB',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-secondary)'
                            }}>
                                [Interactive Map Pin]
                            </div>
                            <div style={{ marginTop: '1.5rem' }}>
                                <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Detected Address:</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>123 Main St, Springfield</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitProblemPage;
