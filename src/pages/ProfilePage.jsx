import React from 'react';

const ProfilePage = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '3rem' }}>Profile Settings</h1>

                <div className="flex gap-8" style={{ flexDirection: 'column' }}>
                    {/* Account Info */}
                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem' }}>Account Information</h3>
                        <div className="flex gap-6" style={{ flexDirection: 'column' }}>
                            <div className="flex items-center gap-8">
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#E5E7EB',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    U
                                </div>
                                <div>
                                    <button className="btn btn-outline">Change Avatar</button>
                                    <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>First Name</label>
                                    <input type="text" defaultValue="John" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Last Name</label>
                                    <input type="text" defaultValue="Doe" />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address</label>
                                <input type="email" defaultValue="john@example.com" />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                <button className="btn btn-primary">Save Changes</button>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem' }}>Security</h3>
                        <div>
                            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Manage your password and account security settings.</p>
                            <button className="btn btn-outline">Update Password</button>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="card" style={{ borderColor: '#FEE2E2', backgroundColor: '#FEF2F2' }}>
                        <h3 style={{ color: '#991B1B' }}>Danger Zone</h3>
                        <p style={{ fontSize: '0.875rem', color: '#991B1B' }}>Once you delete your account, there is no going back. Please be certain.</p>
                        <button className="btn" style={{ backgroundColor: '#EF4444', color: 'white', marginTop: '1rem' }}>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
