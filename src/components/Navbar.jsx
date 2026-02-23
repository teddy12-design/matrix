import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav style={{ 
      backgroundColor: 'white', 
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container flex justify-between items-center" style={{ height: '72px' }}>
        <div className="flex items-center gap-4">
          <div style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '8px' 
          }}></div>
          <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>ProblemMap</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="/" className="btn btn-outline" style={{ border: 'none' }}>Home</a>
          <a href="/explore" className="btn btn-outline" style={{ border: 'none' }}>Explore</a>
          {isLoggedIn ? (
            <>
              <a href="/submit" className="btn btn-primary">Report Problem</a>
              <div className="flex items-center gap-4" style={{ marginLeft: '1rem' }}>
                <a href="/profile" style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: '#E5E7EB', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}>
                  U
                </a>
                <button onClick={onLogout} className="btn btn-outline">Logout</button>
              </div>
            </>
          ) : (
            <>
              <a href="/login" className="btn btn-outline">Login</a>
              <a href="/register" className="btn btn-primary">Sign Up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
