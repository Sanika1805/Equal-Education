import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Book, 
  Trophy, 
  Lightbulb, 
  Wallet, 
  PieChart,
  Users,
  Target,
  Award,
  FileText,
  Globe,
  Library,
  LucideIcon
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Select, SelectItem } from '../../components/ui/Select';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AcademicSection {
  id: string;
  name: string;
  level: string;
  icon: React.ReactNode;
  features: Feature[];
}

interface AcademicSectionDetailsProps {
  section: AcademicSection;
}

const AcademicSections = [
  {
    id: 'junior',
    name: 'Junior Section',
    level: 'Up to 4th Standard',
    icon: <Book className="w-6 h-6" />,
    features: [
      {
        title: 'Classroom Management',
        description: 'Parent or volunteer-managed Google Classroom',
        icon: <Users />
      },
      {
        title: 'Student Collaboration',
        description: 'Discussion boards and project work',
        icon: <Globe />
      }
    ]
  },
  {
    id: 'middle',
    name: 'Middle School',
    level: '5th to 8th Standard',
    icon: <GraduationCap className="w-6 h-6" />,
    features: [
      {
        title: 'Advanced Learning',
        description: 'Online tests and reward system',
        icon: <Target />
      },
      {
        title: 'Scholarship Support',
        description: 'Personalized scholarship recommendations',
        icon: <Award />
      },
      {
        title: 'Career Exploration',
        description: 'Career path guidance and counseling',
        icon: <FileText />
      }
    ]
  },
  {
    id: 'higher',
    name: 'Higher Secondary',
    level: '11th & 12th Standard',
    icon: <Library className="w-6 h-6" />,
    features: [
      {
        title: 'Stream-based Education',
        description: 'Specialized resources for Science, Commerce, Arts',
        icon: <Book />
      },
      {
        title: 'Exam Preparation',
        description: 'Career updates and entrance exam resources',
        icon: <GraduationCap />
      },
      {
        title: 'Scholarship Support',
        description: 'AI-driven scholarship and loan recommendations',
        icon: <Award />
      }
    ]
  },
  {
    id: 'graduation',
    name: 'Graduation & Masters',
    level: 'College Level',
    icon: <Users className="w-6 h-6" />,
    features: [
      {
        title: 'Opportunity Hub',
        description: 'Scholarships and internship information',
        icon: <Globe />
      },
      {
        title: 'Mentorship Program',
        description: 'Mentor younger students, build community',
        icon: <Users />
      },
      {
        title: 'Study Resources',
        description: 'Free study materials and mock exams',
        icon: <Library />
      }
    ]
  }
];

const AcademicSectionDetails: React.FC<AcademicSectionDetailsProps> = ({ section }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  if (!section || !section.features) {
    return (
      <div className="section-details">
        <p>No section details available</p>
      </div>
    );
  }

  return (
    <div className="section-details">
      <div className="section-info">
        <h2 className="section-title">
          {section.icon}
          <span>{section.name || 'Section Name'}</span>
        </h2>
        <p className="section-level">{section.level || 'Academic Level'}</p>
        
        <div className="features-list">
          {section.features.map((feature: Feature, index: number) => (
            <button
              key={feature.title || `feature-${index}`}
              onClick={() => setActiveFeature(index)}
              className={`feature-button ${activeFeature === index ? 'active' : ''}`}
            >
              {feature.icon}
              <span>{feature.title || 'Feature'}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="feature-details">
        <h3 className="feature-title">
          {section.features[activeFeature]?.title || 'Feature Details'}
        </h3>
        <p className="feature-description">
          {section.features[activeFeature]?.description || 'No description available'}
        </p>
        
        {section.id === 'junior' && activeFeature === 0 && (
          <div className="feature-extras">
            <h4>Classroom Management Details:</h4>
            <ul>
              <li>Parent/volunteer managed classrooms</li>
              <li>Connect students with teachers</li>
              <li>Regional volunteer support groups</li>
            </ul>
          </div>
        )}
        
        {section.id === 'middle' && activeFeature === 1 && (
          <div className="feature-extras">
            <h4>Scholarship Support:</h4>
            <ul>
              <li>AI-powered financial analysis</li>
              <li>Personalized scholarship matching</li>
              <li>Tailored recommendations</li>
            </ul>
          </div>
        )}
        
        {section.id === 'higher' && activeFeature === 0 && (
          <div className="feature-extras">
            <h4>Stream-based Resources:</h4>
            <ul>
              <li>Science Stream Specialization</li>
              <li>Commerce Stream Guidance</li>
              <li>Arts Stream Support</li>
            </ul>
          </div>
        )}
        
        {section.id === 'graduation' && activeFeature === 1 && (
          <div className="feature-extras">
            <h4>Mentorship Program:</h4>
            <ul>
              <li>Guide younger students</li>
              <li>Build community connections</li>
              <li>Social responsibility initiative</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const StudentDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [selectedSection, setSelectedSection] = useState(AcademicSections[0]);
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

  const renderAcademicSections = () => {
    return (
      <Card className="dashboard-section">
        <div className="section-header">
          <GraduationCap className="section-icon" />
          <h2>Academic Sections</h2>
        </div>
        <div className="academic-sections-container">
          <div className="sections-nav">
            {AcademicSections.map((section) => (
              <button 
                key={section.id}
                onClick={() => setSelectedSection(section)}
                className={`section-nav-button ${selectedSection.id === section.id ? 'active' : ''}`}
              >
                {section.icon}
                <span>{section.name}</span>
              </button>
            ))}
          </div>
          
          <AcademicSectionDetails section={selectedSection} />
        </div>
      </Card>
    );
  };

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