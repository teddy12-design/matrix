import React, { useState } from 'react';

const ContactPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        { q: "How do I report a problem?", a: "Click the 'Report Problem' button in the navbar, fill out the form with details and a photo, and pin the location on the map." },
        { q: "How does AI work here?", a: "Our AI analyzes the reports to categorize severity, suggest potential solutions, and group similar problems for city officials." },
        { q: "How do I delete my account?", a: "You can find the account deletion option in your Profile settings under the 'Privacy' tab." }
    ];

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="text-center" style={{ marginBottom: '3rem' }}>Contact Center</h1>

            <div className="flex gap-4" style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {/* Support Info & FAQ */}
                <div style={{ flex: '1.2', minWidth: '300px' }}>
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h3>Support Information</h3>
                        <p>We're here to help you make your city better. Our typical response time is under 24 hours.</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <div className="flex items-center gap-4" style={{ marginBottom: '0.5rem' }}>
                                <span style={{ fontWeight: 600 }}>Email:</span>
                                <a href="mailto:support@cityproblemmap.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>support@cityproblemmap.com</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span style={{ fontWeight: 600 }}>Response Time:</span>
                                <span>24/7 Monitoring</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Frequently Asked Questions</h3>
                        <div style={{ marginTop: '1.5rem' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ borderBottom: i !== faqs.length - 1 ? '1px solid var(--border)' : 'none', padding: '1rem 0' }}>
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'between',
                                            alignItems: 'center',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            color: 'var(--text-primary)'
                                        }}
                                    >
                                        <span>{faq.q}</span>
                                        <span>{activeFaq === i ? '−' : '+'}</span>
                                    </button>
                                    {activeFaq === i && (
                                        <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>{faq.a}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <div className="card">
                        <h3>Send us a message</h3>
                        <form className="flex gap-4" style={{ flexDirection: 'column', marginTop: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Category</label>
                                <select required>
                                    <option value="">Select a category</option>
                                    <option value="bug">Report a Bug</option>
                                    <option value="suggestion">Suggestion</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Message</label>
                                <textarea placeholder="How can we help you?" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
