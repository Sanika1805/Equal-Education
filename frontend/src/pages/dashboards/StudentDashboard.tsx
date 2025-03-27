import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Book, 
  Trophy, 
  Lightbulb, 
  Wallet, 
  PieChart 
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Select, SelectItem } from '../../components/ui/Select';

const AcademicSections = [
  { 
    name: 'Juniors', 
    range: 'Up to 4th Standard',
    icon: <Book className="w-6 h-6" />
  },
  { 
    name: 'Middle School', 
    range: '5th – 10th Standard',
    icon: <GraduationCap className="w-6 h-6" />
  },
  { 
    name: 'Higher Secondary', 
    range: '11th & 12th Standard',
    icon: <Trophy className="w-6 h-6" />
  },
  { 
    name: 'Graduation & Masters', 
    range: 'College Level',
    icon: <User className="w-6 h-6" />
  }
];

const StudentDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: '',
    gender: '',
    dob: '',
    address: '',
    financialStatus: '',
    schoolInfo: ''
  });

  const renderProfileSetup = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <User className="section-icon" />
        <h2>Profile Setup</h2>
      </div>
      <div className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <Input
            id="name"
            value={profileData.name}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <Select
            value={profileData.gender}
            onValueChange={(value) => setProfileData({...profileData, gender: value})}
          >
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </Select>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <Input
            id="dob"
            type="date"
            value={profileData.dob}
            onChange={(e) => setProfileData({...profileData, dob: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            value={profileData.address}
            onChange={(e) => setProfileData({...profileData, address: e.target.value})}
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="financialStatus">Financial Status</label>
          <Select
            value={profileData.financialStatus}
            onValueChange={(value) => setProfileData({...profileData, financialStatus: value})}
          >
            <SelectItem value="below_poverty">Below Poverty Line</SelectItem>
            <SelectItem value="low_income">Low Income</SelectItem>
            <SelectItem value="middle_income">Middle Income</SelectItem>
            <SelectItem value="high_income">High Income</SelectItem>
          </Select>
        </div>
        <div className="form-group">
          <label htmlFor="schoolInfo">School/College Information</label>
          <Input
            id="schoolInfo"
            value={profileData.schoolInfo}
            onChange={(e) => setProfileData({...profileData, schoolInfo: e.target.value})}
            placeholder="Enter your school/college details"
          />
        </div>
        <Button className="submit-button">Save Profile</Button>
      </div>
    </Card>
  );

  const renderAcademicSections = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <GraduationCap className="section-icon" />
        <h2>Academic Sections</h2>
      </div>
      <div className="sections-grid">
        {AcademicSections.map((section) => (
          <div key={section.name} className="section-card">
            {section.icon}
            <div className="section-info">
              <h3>{section.name}</h3>
              <p>{section.range}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const renderResourceSection = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <Lightbulb className="section-icon" />
        <h2>Free Educational Resources</h2>
      </div>
      <div className="resources-grid">
        {['YouTube', 'Telegram', 'Online Courses'].map((platform) => (
          <div key={platform} className="resource-card">
            <h3>{platform}</h3>
            <p>Educational Content</p>
          </div>
        ))}
      </div>
    </Card>
  );

  const renderScholarshipSection = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <Wallet className="section-icon" />
        <h2>Scholarships & Financial Aid</h2>
      </div>
      <div className="scholarship-grid">
        <div className="scholarship-card">
          <h3>Scholarship Matching</h3>
          <p>AI-powered scholarship recommendations</p>
        </div>
        <div className="scholarship-card">
          <h3>Educational Loans</h3>
          <p>Explore financial aid options</p>
        </div>
      </div>
    </Card>
  );

  const renderGrowthTracking = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <PieChart className="section-icon" />
        <h2>Personal Growth Tracking</h2>
      </div>
      <div className="growth-chart">
        <p>AI-Powered Growth Chart Placeholder</p>
      </div>
    </Card>
  );

  const renderDashboardNavigation = () => (
    <div className="dashboard-nav">
      {[
        { key: 'profile', label: 'Profile', icon: <User /> },
        { key: 'sections', label: 'Academic Sections', icon: <GraduationCap /> },
        { key: 'resources', label: 'Resources', icon: <Lightbulb /> },
        { key: 'scholarships', label: 'Scholarships', icon: <Wallet /> },
        { key: 'growth', label: 'Growth Tracking', icon: <PieChart /> }
      ].map((nav) => (
        <button 
          key={nav.key}
          onClick={() => setActiveSection(nav.key)}
          className={`nav-button ${activeSection === nav.key ? 'active' : ''}`}
        >
          {nav.icon}
          <span>{nav.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="student-dashboard">
      {renderDashboardNavigation()}
      <div className="dashboard-content">
        {activeSection === 'profile' && renderProfileSetup()}
        {activeSection === 'sections' && renderAcademicSections()}
        {activeSection === 'resources' && renderResourceSection()}
        {activeSection === 'scholarships' && renderScholarshipSection()}
        {activeSection === 'growth' && renderGrowthTracking()}
      </div>
    </div>
  );
};

export default StudentDashboard; 