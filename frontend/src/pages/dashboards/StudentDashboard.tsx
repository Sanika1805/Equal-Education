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
  extraInfo?: {
    title: string;
    points: string[];
  };
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
        description: 'Interactive virtual classrooms managed by parents or volunteer teachers. Access to age-appropriate learning materials, educational games, and basic skill development tools. Regular progress tracking and personalized learning paths.',
        icon: <Users />,
        extraInfo: {
          title: 'Learning Environment Features:',
          points: [
            'Safe and moderated online learning spaces',
            'Interactive educational games and activities',
            'Basic computer skills development',
            'Regular parent-teacher communication',
            'Foundational skills assessment tools',
            'Personalized homework assistance'
          ]
        }
      },
      {
        title: 'Student Collaboration',
        description: 'Engaging discussion boards and collaborative projects designed for young learners. Foster teamwork, communication skills, and creative thinking through guided group activities.',
        icon: <Globe />,
        extraInfo: {
          title: 'Collaboration Tools:',
          points: [
            'Kid-friendly discussion forums',
            'Group project platforms',
            'Virtual show and tell sessions',
            'Peer learning activities',
            'Creative expression workshops',
            'Cultural exchange programs'
          ]
        }
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
        description: 'Comprehensive online testing system with immediate feedback and rewards. Track progress across subjects, identify areas for improvement, and celebrate achievements through a gamified learning experience.',
        icon: <Target />,
        extraInfo: {
          title: 'Learning Features:',
          points: [
            'Subject-wise practice tests',
            'Adaptive learning paths',
            'Performance analytics',
            'Virtual badges and rewards',
            'Competitive challenges',
            'Parent progress reports'
          ]
        }
      },
      {
        title: 'Scholarship Support',
        description: 'Early scholarship guidance and financial planning support. Access to a database of age-appropriate scholarships, merit-based opportunities, and educational funding resources.',
        icon: <Award />,
        extraInfo: {
          title: 'Scholarship Resources:',
          points: [
            'Government scheme information',
            'Merit-based opportunities',
            'Sports and cultural scholarships',
            'Financial literacy education',
            'Application assistance',
            'Document preparation guidance'
          ]
        }
      },
      {
        title: 'Career Exploration',
        description: 'Early career guidance and skill assessment tools. Explore different career paths through interactive sessions, virtual field trips, and expert talks designed for middle school students.',
        icon: <FileText />,
        extraInfo: {
          title: 'Career Discovery Tools:',
          points: [
            'Interest assessment tests',
            'Virtual career fairs',
            'Industry expert sessions',
            'Skill development workshops',
            'Parent guidance sessions',
            'Future planning resources'
          ]
        }
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
        description: 'Comprehensive resources tailored for Science, Commerce, and Arts streams. Access specialized study materials, practical guides, and stream-specific career counseling to excel in your chosen field.',
        icon: <Book />,
        extraInfo: {
          title: 'Stream-specific Resources:',
          points: [
            'Detailed subject guides',
            'Practical experiment videos',
            'Industry case studies',
            'Project assistance',
            'Expert faculty support',
            'Stream transition guidance'
          ]
        }
      },
      {
        title: 'Exam Preparation',
        description: 'Intensive preparation resources for board exams and competitive entrance tests. Access mock tests, previous year papers, and expert guidance for JEE, NEET, CLAT, and other competitive exams.',
        icon: <GraduationCap />,
        extraInfo: {
          title: 'Exam Preparation Tools:',
          points: [
            'Mock test series',
            'Previous year analysis',
            'Expert doubt clearing',
            'Time management tips',
            'Stress management sessions',
            'Performance tracking'
          ]
        }
      },
      {
        title: 'Scholarship Support',
        description: 'Advanced AI-driven scholarship matching system and comprehensive financial aid guidance. Get personalized recommendations for higher education funding, including international opportunities.',
        icon: <Award />,
        extraInfo: {
          title: 'Financial Aid Resources:',
          points: [
            'International scholarship database',
            'Education loan guidance',
            'Merit-based opportunities',
            'Research fellowship information',
            'Application strategy planning',
            'Interview preparation'
          ]
        }
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
        description: 'Comprehensive platform for discovering scholarships, internships, and research opportunities. Connect with universities, research institutions, and industry partners for advanced academic and professional growth.',
        icon: <Globe />,
        extraInfo: {
          title: 'Opportunity Resources:',
          points: [
            'Global university connections',
            'Research internship programs',
            'Industry collaboration projects',
            'Publication opportunities',
            'Conference participation',
            'Academic networking events'
          ]
        }
      },
      {
        title: 'Mentorship Program',
        description: 'Dual-benefit mentorship system where you can both receive guidance from industry experts and mentor younger students. Build leadership skills while giving back to the community.',
        icon: <Users />,
        extraInfo: {
          title: 'Mentorship Benefits:',
          points: [
            'Industry expert mentoring',
            'Peer mentoring opportunities',
            'Leadership skill development',
            'Community building activities',
            'Social impact projects',
            'Professional networking'
          ]
        }
      },
      {
        title: 'Study Resources',
        description: 'Advanced study materials and exam preparation resources for higher education. Access research papers, academic journals, and specialized course materials across various disciplines.',
        icon: <Library />,
        extraInfo: {
          title: 'Advanced Resources:',
          points: [
            'Digital library access',
            'Research methodology guides',
            'Academic writing support',
            'Thesis preparation tools',
            'Citation management',
            'Publication guidance'
          ]
        }
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

  const currentFeature = section.features[activeFeature];

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
          {currentFeature?.title || 'Feature Details'}
        </h3>
        <p className="feature-description">
          {currentFeature?.description || 'No description available'}
        </p>
        
        {currentFeature?.extraInfo && (
          <div className="feature-extras">
            <h4>{currentFeature.extraInfo?.title}</h4>
            <ul>
              {currentFeature.extraInfo?.points?.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
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