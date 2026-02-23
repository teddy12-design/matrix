import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 144px)', padding: '2rem 0' }}>
            <div className="card" style={{ width: '100%', maxWidth: '450px', padding: '2.5rem' }}>
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '12px',
                        margin: '0 auto 1.5rem auto'
                    }}></div>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Create an Account</h2>
                    <p style={{ fontSize: '0.875rem' }}>Join the community and help build a better city.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-4" style={{ flexDirection: 'column' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>

                    <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        By signing up, you agree to our <a href="/terms" style={{ color: 'var(--primary)' }}>Terms of Service</a> and <a href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', marginTop: '1rem' }}>
                        Create Account
                    </button>
                </form>

                <div className="text-center" style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                    <p>Already have an account? <a href="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign in</a></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
