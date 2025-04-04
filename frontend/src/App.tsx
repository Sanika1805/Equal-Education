import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage';
import DonorRegistration from './pages/DonorRegistration';
import DonorHome from './pages/DonorHome';
import DonationSelection from './pages/DonationSelection';
import DonationDetails from './pages/DonationDetails';
import DonationConfirmation from './pages/DonationConfirmation';
import DonorProfile from './pages/DonorProfile';
import DonationHistory from './pages/DonationHistory';
import DonorImpact from './pages/DonorImpact';
import DonorLayout from './components/DonorLayout';
import AlumniRegistration from './pages/AlumniRegistration';
import AlumniDashboard from './pages/AlumniDashboard';
import AlumniProfile from './pages/AlumniProfile';
import AlumniLayout from './components/AlumniLayout';
import ParentLogin from './pages/ParentLogin';
import ParentDashboard from './pages/ParentDashboard';
import ParentLayout from './components/ParentLayout';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        
        {/* Alumni routes */}
        <Route path="/alumni/register" element={<AlumniRegistration />} />
        <Route path="/alumni/dashboard" element={
          <AlumniLayout activePage="dashboard">
            <AlumniDashboard />
          </AlumniLayout>
        } />
        <Route path="/alumni/profile" element={
          <AlumniLayout activePage="profile">
            <AlumniProfile />
          </AlumniLayout>
        } />
        <Route path="/alumni/sponsorships" element={
          <AlumniLayout activePage="sponsorships">
            <AlumniDashboard />
          </AlumniLayout>
        } />
        <Route path="/alumni/mentorship" element={
          <AlumniLayout activePage="mentorship">
            <AlumniDashboard />
          </AlumniLayout>
        } />
        <Route path="/alumni/classroom" element={
          <AlumniLayout activePage="classroom">
            <AlumniDashboard />
          </AlumniLayout>
        } />
        <Route path="/alumni/scholarships" element={
          <AlumniLayout activePage="scholarships">
            <AlumniDashboard />
          </AlumniLayout>
        } />
        <Route path="/alumni/gifts" element={
          <AlumniLayout activePage="gifts">
            <AlumniDashboard />
          </AlumniLayout>
        } />
        <Route path="/alumni/welfare" element={
          <AlumniLayout activePage="welfare">
            <AlumniDashboard />
          </AlumniLayout>
        } />

        {/* Donor routes */}
        <Route path="/donor/register" element={<DonorRegistration />} />
        
        {/* Donor routes with layout */}
        <Route path="/donor/home" element={
          <DonorLayout activePage="home">
            <DonorHome />
          </DonorLayout>
        } />
        <Route path="/donor/donate" element={
          <DonorLayout activePage="donate">
            <DonationSelection />
          </DonorLayout>
        } />
        <Route path="/donor/donation-details/:type" element={
          <DonorLayout activePage="donate">
            <DonationDetails />
          </DonorLayout>
        } />
        <Route path="/donor/confirmation" element={
          <DonorLayout activePage="donate">
            <DonationConfirmation />
          </DonorLayout>
        } />
        <Route path="/donor/profile" element={
          <DonorLayout activePage="profile">
            <DonorProfile />
          </DonorLayout>
        } />
        <Route path="/donor/history" element={
          <DonorLayout activePage="history">
            <DonationHistory />
          </DonorLayout>
        } />
        <Route path="/donor/impact" element={
          <DonorLayout activePage="impact">
            <DonorImpact />
          </DonorLayout>
        } />

        {/* Parent routes */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/dashboard" element={
          <ParentLayout activePage="dashboard">
            <ParentDashboard />
          </ParentLayout>
        } />
        <Route path="/parent/education" element={
          <ParentLayout activePage="education">
            <ParentDashboard />
          </ParentLayout>
        } />
        <Route path="/parent/planning" element={
          <ParentLayout activePage="planning">
            <ParentDashboard />
          </ParentLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
