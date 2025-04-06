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
import StudentLayout from './components/StudentLayout';
import TeacherLayout from './components/TeacherLayout';
import SpecialChildrenLayout from './components/SpecialChildrenLayout';
import StudentDashboard from './pages/StudentDashboard';
import StudentCourses from './pages/StudentCourses';
import StudentAssignments from './pages/StudentAssignments';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherClasses from './pages/TeacherClasses';
import TeacherStudents from './pages/TeacherStudents';
import SpecialChildrenDashboard from './pages/SpecialChildrenDashboard';
import SpecialChildrenActivities from './pages/SpecialChildrenActivities';
import SpecialChildrenProgress from './pages/SpecialChildrenProgress';
import './styles/theme.css';

function App() {
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

        {/* Student routes */}
        <Route path="/student/dashboard" element={
          <StudentLayout activePage="dashboard">
            <StudentDashboard />
          </StudentLayout>
        } />
        <Route path="/student/courses" element={
          <StudentLayout activePage="courses">
            <StudentCourses />
          </StudentLayout>
        } />
        <Route path="/student/assignments" element={
          <StudentLayout activePage="assignments">
            <StudentAssignments />
          </StudentLayout>
        } />

        {/* Teacher routes */}
        <Route path="/teacher/dashboard" element={
          <TeacherLayout activePage="dashboard">
            <TeacherDashboard />
          </TeacherLayout>
        } />
        <Route path="/teacher/classes" element={
          <TeacherLayout activePage="classes">
            <TeacherClasses />
          </TeacherLayout>
        } />
        <Route path="/teacher/students" element={
          <TeacherLayout activePage="students">
            <TeacherStudents />
          </TeacherLayout>
        } />

        {/* Special Children routes */}
        <Route path="/special/dashboard" element={
          <SpecialChildrenLayout activePage="dashboard">
            <SpecialChildrenDashboard />
          </SpecialChildrenLayout>
        } />
        <Route path="/special/activities" element={
          <SpecialChildrenLayout activePage="activities">
            <SpecialChildrenActivities />
          </SpecialChildrenLayout>
        } />
        <Route path="/special/progress" element={
          <SpecialChildrenLayout activePage="progress">
            <SpecialChildrenProgress />
          </SpecialChildrenLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App; 