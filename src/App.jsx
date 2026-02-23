import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import ExploreMapPage from './pages/ExploreMapPage';
import ProblemDetailPage from './pages/ProblemDetailPage';
import RegisterPage from './pages/RegisterPage';
import SubmitProblemPage from './pages/SubmitProblemPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore" element={<ExploreMapPage />} />
          <Route path="/problem/:id" element={<ProblemDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/submit" element={<SubmitProblemPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Fallback for other pages while they are being built */}
          <Route path="*" element={
            <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
              <h1 style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '1rem' }}>404</h1>
              <h2>Page Not Found</h2>
              <p style={{ maxWidth: '500px', margin: '1rem auto 2rem auto' }}>
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
              <a href="/" className="btn btn-primary">Back to Home</a>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
