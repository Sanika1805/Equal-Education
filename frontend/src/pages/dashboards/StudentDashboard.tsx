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
  Home,
  MessageCircle,
  Info,
  Phone,
  Mail,
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
        title: 'Introduction & Mission',
        description: 'Welcome to the Junior Section! Our mission is to reconnect young students with education through personalized offline teaching by dedicated student volunteers from your local region.',
        icon: <Users />,
        extraInfo: {
          title: 'Key Highlights:',
          points: [
            'Local volunteer-based teaching support',
            'Personalized learning approach',
            'Community-driven education system',
            'Safe and nurturing learning environment',
            'Regular progress monitoring',
            'Parent-teacher collaboration'
          ]
        }
      },
      {
        title: 'Offline Teaching Network',
        description: 'Connect with qualified volunteers from higher education sections who are ready to teach in your area. Our system matches students with nearby volunteers for effective face-to-face learning.',
        icon: <GraduationCap />,
        extraInfo: {
          title: 'Volunteer Support:',
          points: [
            'Local volunteer matching system',
            'Qualified higher section students as teachers',
            'Regular offline classes',
            'Progress tracking by volunteers',
            'Safe learning environment',
            'Community engagement opportunities'
          ]
        }
      },
      {
        title: 'Virtual Classroom Hub',
        description: 'Access AI-powered Google Classroom integration for enhanced learning. Join virtual classrooms managed by volunteers and participate in interactive discussion forums.',
        icon: <Globe />,
        extraInfo: {
          title: 'Virtual Features:',
          points: [
            'Google Classroom integration',
            'AI-based student grouping',
            'Virtual discussion forums',
            'Interactive learning sessions',
            'Region-based class matching',
            'Subject-wise virtual rooms'
          ]
        }
      },
      {
        title: 'Funding & Transparency',
        description: 'Track how funds are being utilized to support your education through our AI-powered system. View real-time updates on fund allocation and usage.',
        icon: <Wallet />,
        extraInfo: {
          title: 'Financial Features:',
          points: [
            'Real-time fund tracking',
            'Transparent allocation system',
            'Donation progress tracker',
            'Fund utilization reports',
            'Donor engagement updates',
            'Financial support status'
          ]
        }
      },
      {
        title: 'Volunteer & Alumni Portal',
        description: 'Engage with our network of alumni mentors and volunteers who are committed to guiding students. Monitor progress and receive personalized mentoring support.',
        icon: <Users />,
        extraInfo: {
          title: 'Engagement Features:',
          points: [
            'Alumni mentor registration',
            'Progress monitoring dashboard',
            'Volunteer-student matching',
            'Mentorship programs',
            'Regular guidance sessions',
            'Community building activities'
          ]
        }
      },
      {
        title: 'Student Resources & Support',
        description: 'Access our AI-powered data management system and connect with educational resources. Get immediate assistance through our support system.',
        icon: <Library />,
        extraInfo: {
          title: 'Support Features:',
          points: [
            'Secure data management',
            'Simple registration process',
            'Educational resource links',
            'Live chat support',
            'YouTube learning channels',
            'Telegram study groups'
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

interface ProfileData {
  name: string;
  gender: string;
  dob: string;
  address: string;
  financialStatus: string;
  schoolInfo: string;
  academicSection: string;
}

const StudentDashboard: React.FC = () => {
  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);
  const [selectedSection, setSelectedSection] = useState(AcademicSections[0]);
  const [activeTab, setActiveTab] = useState('academic');
  const [currentPage, setCurrentPage] = useState('home');
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    gender: '',
    dob: '',
    address: '',
    financialStatus: '',
    schoolInfo: '',
    academicSection: ''
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profileData.academicSection) {
      const selected = AcademicSections.find(section => section.id === profileData.academicSection);
      if (selected) {
        setSelectedSection(selected);
        setIsProfileSubmitted(true);
      }
    }
  };

  const handleSelectChange = (field: keyof ProfileData) => (value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const renderResourceSection = () => (
    <div className="dashboard-section">
      <div className="section-header">
        <Lightbulb className="section-icon" />
        <h2>Free Educational Resources</h2>
      </div>
      <div className="resources-grid">
        <Card className="resource-card">
          <h3>Video Tutorials</h3>
          <p>Access curated educational videos from top educators</p>
          <ul className="resource-list">
            <li>Subject-specific video lessons</li>
            <li>Interactive learning content</li>
            <li>Practice exercises and solutions</li>
          </ul>
        </Card>
        <Card className="resource-card">
          <h3>Study Materials</h3>
          <p>Download comprehensive study materials and notes</p>
          <ul className="resource-list">
            <li>PDF study guides</li>
            <li>Practice worksheets</li>
            <li>Previous year papers</li>
          </ul>
        </Card>
        <Card className="resource-card">
          <h3>Online Courses</h3>
          <p>Enroll in free online courses from leading platforms</p>
          <ul className="resource-list">
            <li>Self-paced learning</li>
            <li>Certificate programs</li>
            <li>Skill development courses</li>
          </ul>
        </Card>
      </div>
    </div>
  );

  const renderScholarshipSection = () => (
    <div className="dashboard-section">
      <div className="section-header">
        <Wallet className="section-icon" />
        <h2>Scholarships & Financial Aid</h2>
      </div>
      <div className="scholarship-grid">
        <Card className="scholarship-card">
          <h3>Available Scholarships</h3>
          <p>Personalized scholarship recommendations based on your profile</p>
          <ul className="scholarship-list">
            <li>Merit-based scholarships</li>
            <li>Need-based financial aid</li>
            <li>Government schemes</li>
          </ul>
        </Card>
        <Card className="scholarship-card">
          <h3>Application Status</h3>
          <p>Track your scholarship applications</p>
          <ul className="scholarship-list">
            <li>Application deadlines</li>
            <li>Required documents</li>
            <li>Selection status</li>
          </ul>
        </Card>
        <Card className="scholarship-card">
          <h3>Financial Planning</h3>
          <p>Tools and resources for educational financial planning</p>
          <ul className="scholarship-list">
            <li>Education loan options</li>
            <li>Budget planning</li>
            <li>Financial counseling</li>
          </ul>
        </Card>
      </div>
    </div>
  );

  const renderGrowthTracking = () => (
    <div className="dashboard-section">
      <div className="section-header">
        <PieChart className="section-icon" />
        <h2>Personal Growth Tracking</h2>
      </div>
      <div className="growth-container">
        <Card className="growth-card">
          <h3>Academic Progress</h3>
          <p>Track your academic performance and improvements</p>
          <div className="growth-chart">
            <p>Performance Analytics Coming Soon</p>
          </div>
        </Card>
        <Card className="growth-card">
          <h3>Skill Development</h3>
          <p>Monitor your skill acquisition and mastery</p>
          <ul className="growth-list">
            <li>Technical skills progress</li>
            <li>Soft skills development</li>
            <li>Achievement badges</li>
          </ul>
        </Card>
        <Card className="growth-card">
          <h3>Goals & Milestones</h3>
          <p>Set and track your educational goals</p>
          <ul className="growth-list">
            <li>Short-term objectives</li>
            <li>Long-term goals</li>
            <li>Achievement timeline</li>
          </ul>
        </Card>
      </div>
    </div>
  );

  const renderProfileSetup = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <User className="section-icon" />
        <h2>Profile Setup</h2>
      </div>
      <form onSubmit={handleProfileSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <Input
            id="name"
            value={profileData.name}
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            placeholder="Enter your full name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <Select
            value={profileData.gender}
            onValueChange={handleSelectChange('gender')}
          >
            <SelectItem value="">Select Gender</SelectItem>
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
            onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            value={profileData.address}
            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
            placeholder="Enter your address"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="academicSection">Academic Section</label>
          <Select
            value={profileData.academicSection}
            onValueChange={handleSelectChange('academicSection')}
          >
            <SelectItem value="">Select Academic Section</SelectItem>
            {AcademicSections.map((section) => (
              <SelectItem key={section.id} value={section.id}>
                {section.name} ({section.level})
              </SelectItem>
            ))}
          </Select>
        </div>
        
        <div className="form-group">
          <label htmlFor="financialStatus">Financial Status</label>
          <Select
            value={profileData.financialStatus}
            onValueChange={handleSelectChange('financialStatus')}
          >
            <SelectItem value="">Select Financial Status</SelectItem>
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
            onChange={(e) => setProfileData({ ...profileData, schoolInfo: e.target.value })}
            placeholder="Enter your school or college details"
          />
        </div>

        <Button type="submit" className="submit-button">
          Save Profile & Continue to Dashboard
        </Button>
      </form>
    </Card>
  );

  const renderPersonalizedDashboard = () => {
    return (
      <div className="personalized-dashboard">
        <div className="dashboard-header">
          <div className="user-info">
            <h2>Welcome, {profileData.name}!</h2>
            <p className="section-info">{selectedSection.name} - {selectedSection.level}</p>
          </div>
          <Button 
            onClick={() => setIsProfileSubmitted(false)}
            className="edit-profile-button"
          >
            Edit Profile
          </Button>
        </div>

        <div className="dashboard-nav">
          {[
            { id: 'academic', label: 'Academic Section', icon: <GraduationCap /> },
            { id: 'resources', label: 'Resources', icon: <Lightbulb /> },
            { id: 'scholarships', label: 'Scholarships', icon: <Wallet /> },
            { id: 'growth', label: 'Growth Tracking', icon: <PieChart /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="dashboard-content">
          {activeTab === 'academic' && (
            <div className="features-container">
              {selectedSection.features.map((feature, index) => (
                <Card key={feature.title} className="feature-card">
                  <div className="feature-header">
                    {feature.icon}
                    <h3>{feature.title}</h3>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  {feature.extraInfo && (
                    <div className="feature-details">
                      <h4>{feature.extraInfo.title}</h4>
                      <ul>
                        {feature.extraInfo.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
          {activeTab === 'resources' && renderResourceSection()}
          {activeTab === 'scholarships' && renderScholarshipSection()}
          {activeTab === 'growth' && renderGrowthTracking()}
        </div>
      </div>
    );
  };

  const renderMainNav = () => (
    <div className="main-nav">
      <div className="nav-logo">
        <h1>Equal Education</h1>
      </div>
      <div className="nav-links">
        <button 
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button 
          className={`nav-link ${currentPage === 'mentor' ? 'active' : ''}`}
          onClick={() => setCurrentPage('mentor')}
        >
          <MessageCircle size={20} />
          <span>Virtual Mentor</span>
        </button>
        <button 
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          <Info size={20} />
          <span>About Us</span>
        </button>
        <button 
          className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => setCurrentPage('contact')}
        >
          <Phone size={20} />
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  );

  const renderAboutUs = () => (
    <div className="about-us">
      <Card className="about-card">
        <div className="section-header">
          <Info className="section-icon" />
          <h2>About Equal Education</h2>
        </div>
        <div className="about-content">
          <div className="mission-section">
            <h3>Our Mission</h3>
            <p>Equal Education is dedicated to breaking down barriers in education by connecting students with resources, mentors, and financial support to ensure every student has an equal opportunity to succeed.</p>
          </div>
          
          <div className="vision-section">
            <h3>Our Vision</h3>
            <p>We envision a world where every student, regardless of their background or financial status, has access to quality education and the support they need to achieve their academic goals.</p>
          </div>
          
          <div className="values-section">
            <h3>Our Values</h3>
            <ul className="values-list">
              <li>Equal Opportunity for All</li>
              <li>Community-Driven Support</li>
              <li>Transparency in Operations</li>
              <li>Innovation in Education</li>
              <li>Student-Centric Approach</li>
            </ul>
          </div>
          
          <div className="team-section">
            <h3>Our Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Users size={40} />
                <h4>Dedicated Volunteers</h4>
                <p>Our network of student volunteers and mentors</p>
              </div>
              <div className="team-member">
                <Award size={40} />
                <h4>Expert Educators</h4>
                <p>Experienced teachers and education specialists</p>
              </div>
              <div className="team-member">
                <Target size={40} />
                <h4>Support Staff</h4>
                <p>Administrative and technical support team</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderContactUs = () => (
    <div className="contact-us">
      <Card className="contact-card">
        <div className="section-header">
          <Phone className="section-icon" />
          <h2>Contact Us</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions or need support? We're here to help!</p>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <Input
                id="subject"
                placeholder="Enter subject"
                type="text"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="contact-textarea"
                placeholder="Enter your message"
                rows={5}
              />
            </div>
            
            <Button type="submit" className="contact-submit">
              Send Message
            </Button>
          </form>
          
          <div className="contact-methods">
            <div className="contact-method">
              <MessageCircle size={24} />
              <h4>Chat Support</h4>
              <p>Available 24/7 for your queries</p>
            </div>
            <div className="contact-method">
              <Mail size={24} />
              <h4>Email</h4>
              <p>support@equaleducation.org</p>
            </div>
            <div className="contact-method">
              <Phone size={24} />
              <h4>Phone</h4>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="student-dashboard">
      {renderMainNav()}
      {currentPage === 'home' && (
        !isProfileSubmitted ? renderProfileSetup() : renderPersonalizedDashboard()
      )}
      {currentPage === 'about' && renderAboutUs()}
      {currentPage === 'contact' && renderContactUs()}
    </div>
  );
};

export default StudentDashboard; 