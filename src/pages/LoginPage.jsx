import React, { useState } from 'react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for login would go here
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
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
                    <p style={{ fontSize: '0.875rem' }}>Please enter your details to sign in.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-4" style={{ flexDirection: 'column' }}>
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

                    <div style={{ position: 'relative' }}>
                        <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                            <a href="/forgot" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none' }}>Forgot password?</a>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: 'absolute',
                                right: '1rem',
                                top: '2.4rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-secondary)',
                                fontSize: '0.75rem'
                            }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className="flex items-center gap-4" style={{ margin: '0.5rem 0' }}>
                        <input type="checkbox" id="remember" style={{ width: '16px', height: '16px' }} />
                        <label htmlFor="remember" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Remember for 30 days</label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}>
                        Sign In
                    </button>
                </form>

                <div className="text-center" style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                    <p>Don't have an account? <a href="/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
