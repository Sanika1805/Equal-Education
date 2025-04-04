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
  LucideIcon,
  Calendar,
  UserPlus,
  HelpCircle,
  FileQuestion,
  MessageSquare,
  MapPin,
  Upload,
  FileCheck,
  Heart
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Select, SelectItem } from '../../components/ui/Select';
import './SpecialChildrenDashboard.css';

interface SpecialChildProfile {
  name: string;
  gender: string;
  dob: string;
  address: string;
  disabilityType: string;
  disabilityCertificate: File | null;
  financialStatus: string;
  currentGrade: string;
  section: string;
  additionalNotes: string;
}

interface SpecialChildrenDashboardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const SpecialChildrenDashboard: React.FC<SpecialChildrenDashboardProps> = ({ user }) => {
  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [currentPage, setCurrentPage] = useState('home');
  const [profileData, setProfileData] = useState<SpecialChildProfile>({
    name: user.name || '',
    gender: '',
    dob: '',
    address: '',
    disabilityType: '',
    disabilityCertificate: null,
    financialStatus: '',
    currentGrade: '',
    section: '',
    additionalNotes: ''
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'gender', 'dob', 'address', 'disabilityType', 'financialStatus', 'currentGrade'];
    const emptyFields = requiredFields.filter(field => !profileData[field as keyof SpecialChildProfile]);
    
    if (emptyFields.length > 0 || !profileData.disabilityCertificate) {
      alert('Please fill in all required fields and upload disability certificate');
      return;
    }
    
    // Determine section based on current grade
    let section = '';
    const grade = parseInt(profileData.currentGrade);
    
    if (grade <= 4) {
      section = 'Section 1: Up to 4th Grade';
    } else if (grade <= 10) {
      section = 'Section 2: 5th to 10th Grade';
    } else if (grade <= 12) {
      section = 'Section 3: 11th & 12th Grade';
    } else {
      section = 'Section 4: Graduation';
    }
    
    setProfileData(prev => ({ ...prev, section }));
    setIsProfileSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileData(prev => ({ ...prev, disabilityCertificate: e.target.files![0] }));
    }
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('user');
    // Redirect to the authentication page
    window.location.href = '/';
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
          className={`nav-link ${currentPage === 'resources' ? 'active' : ''}`}
          onClick={() => setCurrentPage('resources')}
        >
          <Book size={20} />
          <span>Learning Resources</span>
        </button>
        <button
          className={`nav-link ${currentPage === 'support' ? 'active' : ''}`}
          onClick={() => setCurrentPage('support')}
        >
          <Heart size={20} />
          <span>Support</span>
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
        <button
          className="nav-link logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );

  const renderProfileSetup = () => (
    <Card className="dashboard-section">
      <div className="section-header">
        <User className="section-icon" />
        <h2>Special Child Profile Setup</h2>
      </div>
      <form onSubmit={handleProfileSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <Input
            id="name"
            value={profileData.name}
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <Select
            value={profileData.gender}
            onValueChange={(value) => setProfileData({ ...profileData, gender: value })}
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
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            value={profileData.address}
            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
            placeholder="Enter your address"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="disabilityType">Type of Disability</label>
          <Select
            value={profileData.disabilityType}
            onValueChange={(value) => setProfileData({ ...profileData, disabilityType: value })}
          >
            <SelectItem value="">Select Disability Type</SelectItem>
            <SelectItem value="physical">Physical Disability</SelectItem>
            <SelectItem value="visual">Visual Impairment</SelectItem>
            <SelectItem value="hearing">Hearing Impairment</SelectItem>
            <SelectItem value="intellectual">Intellectual Disability</SelectItem>
            <SelectItem value="learning">Learning Disability</SelectItem>
            <SelectItem value="autism">Autism Spectrum</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </Select>
        </div>
        
        <div className="form-group">
          <label htmlFor="disabilityCertificate">Disability Certificate</label>
          <div className="file-upload">
            <input
              type="file"
              id="disabilityCertificate"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
            <label htmlFor="disabilityCertificate" className="file-upload-label">
              <Upload size={16} />
              <span>Upload Certificate</span>
            </label>
            {profileData.disabilityCertificate && (
              <div className="file-preview">
                <FileCheck size={16} />
                <span>{profileData.disabilityCertificate.name}</span>
              </div>
            )}
          </div>
          <p className="form-help">Please upload a scanned copy of the disability certificate (PDF, JPG, PNG)</p>
        </div>
        
        <div className="form-group">
          <label htmlFor="financialStatus">Financial Status</label>
          <Select
            value={profileData.financialStatus}
            onValueChange={(value) => setProfileData({ ...profileData, financialStatus: value })}
          >
            <SelectItem value="">Select Financial Status</SelectItem>
            <SelectItem value="below_poverty">Below Poverty Line</SelectItem>
            <SelectItem value="low_income">Low Income</SelectItem>
            <SelectItem value="middle_income">Middle Income</SelectItem>
            <SelectItem value="high_income">High Income</SelectItem>
          </Select>
        </div>
        
        <div className="form-group">
          <label htmlFor="currentGrade">Current Grade Level</label>
          <Select
            value={profileData.currentGrade}
            onValueChange={(value) => setProfileData({ ...profileData, currentGrade: value })}
          >
            <SelectItem value="">Select Current Grade</SelectItem>
            <SelectItem value="1">Grade 1</SelectItem>
            <SelectItem value="2">Grade 2</SelectItem>
            <SelectItem value="3">Grade 3</SelectItem>
            <SelectItem value="4">Grade 4</SelectItem>
            <SelectItem value="5">Grade 5</SelectItem>
            <SelectItem value="6">Grade 6</SelectItem>
            <SelectItem value="7">Grade 7</SelectItem>
            <SelectItem value="8">Grade 8</SelectItem>
            <SelectItem value="9">Grade 9</SelectItem>
            <SelectItem value="10">Grade 10</SelectItem>
            <SelectItem value="11">Grade 11</SelectItem>
            <SelectItem value="12">Grade 12</SelectItem>
            <SelectItem value="13">Graduation</SelectItem>
          </Select>
        </div>
        
        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes</label>
          <textarea
            id="additionalNotes"
            value={profileData.additionalNotes}
            onChange={(e) => setProfileData({ ...profileData, additionalNotes: e.target.value })}
            placeholder="Any additional information that would help us provide better support"
            rows={4}
          ></textarea>
        </div>

        <Button type="submit" className="submit-button">
          Save Profile & Continue to Dashboard
        </Button>
      </form>
    </Card>
  );

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="welcome-banner">
        <div className="welcome-content">
          <h2>Welcome, {profileData.name}!</h2>
          <p>You are enrolled in {profileData.section}</p>
        </div>
      </div>
      
      <div className="dashboard-nav">
        {[
          { id: 'profile', label: 'My Profile', icon: <User /> },
          { id: 'learning', label: 'Learning Plan', icon: <Book /> },
          { id: 'resources', label: 'Resources', icon: <Library /> },
          { id: 'support', label: 'Support', icon: <Heart /> },
          { id: 'progress', label: 'Progress', icon: <PieChart /> }
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
      
      {activeTab === 'profile' && (
        <Card className="dashboard-section">
          <div className="section-header">
            <User className="section-icon" />
            <h2>My Profile</h2>
          </div>
          <div className="profile-details">
            <div className="profile-info">
              <div className="info-group">
                <h3>Personal Information</h3>
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">{profileData.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Gender:</span>
                  <span className="info-value">{profileData.gender}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Date of Birth:</span>
                  <span className="info-value">{profileData.dob}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Address:</span>
                  <span className="info-value">{profileData.address}</span>
                </div>
              </div>
              
              <div className="info-group">
                <h3>Educational Information</h3>
                <div className="info-item">
                  <span className="info-label">Current Grade:</span>
                  <span className="info-value">Grade {profileData.currentGrade}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Section:</span>
                  <span className="info-value">{profileData.section}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Disability Type:</span>
                  <span className="info-value">{profileData.disabilityType}</span>
                </div>
              </div>
              
              <div className="info-group">
                <h3>Additional Notes</h3>
                <p>{profileData.additionalNotes || 'No additional notes provided.'}</p>
              </div>
            </div>
            
            <div className="profile-actions">
              <Button className="edit-profile-button">
                Edit Profile
              </Button>
            </div>
          </div>
        </Card>
      )}
      
      {activeTab === 'learning' && (
        <Card className="dashboard-section">
          <div className="section-header">
            <Book className="section-icon" />
            <h2>Personalized Learning Plan</h2>
          </div>
          <div className="learning-plan">
            <p>Your personalized learning plan is being generated based on your profile information. This will include:</p>
            <ul>
              <li>Adapted curriculum for your specific needs</li>
              <li>Recommended learning resources</li>
              <li>Suggested learning pace</li>
              <li>Special accommodations</li>
            </ul>
            <div className="plan-status">
              <div className="status-indicator loading"></div>
              <p>Generating your personalized learning plan...</p>
            </div>
          </div>
        </Card>
      )}
      
      {activeTab === 'resources' && (
        <Card className="dashboard-section">
          <div className="section-header">
            <Library className="section-icon" />
            <h2>Learning Resources</h2>
          </div>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Adaptive Learning Materials</h3>
              <p>Access learning materials adapted to your specific needs</p>
              <Button className="view-button">View Materials</Button>
            </div>
            <div className="resource-card">
              <h3>Assistive Technology</h3>
              <p>Tools and technologies to support your learning</p>
              <Button className="view-button">Explore Tools</Button>
            </div>
            <div className="resource-card">
              <h3>Interactive Exercises</h3>
              <p>Engaging exercises designed for your learning style</p>
              <Button className="view-button">Start Exercises</Button>
            </div>
          </div>
        </Card>
      )}
      
      {activeTab === 'support' && (
        <Card className="dashboard-section">
          <div className="section-header">
            <Heart className="section-icon" />
            <h2>Support Services</h2>
          </div>
          <div className="support-services">
            <div className="service-card">
              <h3>Special Education Teacher</h3>
              <p>Connect with a qualified special education teacher</p>
              <Button className="connect-button">Connect Now</Button>
            </div>
            <div className="service-card">
              <h3>Therapy Services</h3>
              <p>Access speech, occupational, or physical therapy</p>
              <Button className="connect-button">Schedule Session</Button>
            </div>
            <div className="service-card">
              <h3>Parent Support Group</h3>
              <p>Join a community of parents for support and guidance</p>
              <Button className="connect-button">Join Group</Button>
            </div>
          </div>
        </Card>
      )}
      
      {activeTab === 'progress' && (
        <Card className="dashboard-section">
          <div className="section-header">
            <PieChart className="section-icon" />
            <h2>Learning Progress</h2>
          </div>
          <div className="progress-tracking">
            <p>Your progress tracking dashboard is being set up. This will include:</p>
            <ul>
              <li>Academic progress indicators</li>
              <li>Skill development tracking</li>
              <li>Behavioral progress monitoring</li>
              <li>Communication development</li>
            </ul>
            <div className="progress-placeholder">
              <p>Progress tracking will be available once you start your learning journey.</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const renderResourcesPage = () => (
    <div className="dashboard-content">
      <Card className="dashboard-section">
        <div className="section-header">
          <Book className="section-icon" />
          <h2>Learning Resources</h2>
        </div>
        <div className="resources-container">
          <div className="resource-category">
            <h3>Adaptive Learning Materials</h3>
            <div className="resource-list">
              <div className="resource-item">
                <h4>Visual Learning Aids</h4>
                <p>Interactive visual materials for better understanding</p>
                <Button className="access-button">Access</Button>
              </div>
              <div className="resource-item">
                <h4>Audio Learning Resources</h4>
                <p>Audio-based learning materials for auditory learners</p>
                <Button className="access-button">Access</Button>
              </div>
              <div className="resource-item">
                <h4>Kinesthetic Learning Tools</h4>
                <p>Hands-on learning activities and manipulatives</p>
                <Button className="access-button">Access</Button>
              </div>
            </div>
          </div>
          
          <div className="resource-category">
            <h3>Assistive Technology</h3>
            <div className="resource-list">
              <div className="resource-item">
                <h4>Screen Readers</h4>
                <p>Tools to read text aloud for visual impairments</p>
                <Button className="access-button">Access</Button>
              </div>
              <div className="resource-item">
                <h4>Speech-to-Text</h4>
                <p>Convert speech to text for easier note-taking</p>
                <Button className="access-button">Access</Button>
              </div>
              <div className="resource-item">
                <h4>Adaptive Keyboards</h4>
                <p>Customizable keyboards for different needs</p>
                <Button className="access-button">Access</Button>
              </div>
            </div>
          </div>
          
          <div className="resource-category">
            <h3>Interactive Exercises</h3>
            <div className="resource-list">
              <div className="resource-item">
                <h4>Math Games</h4>
                <p>Fun math games adapted to different learning styles</p>
                <Button className="access-button">Access</Button>
              </div>
              <div className="resource-item">
                <h4>Language Activities</h4>
                <p>Interactive language learning exercises</p>
                <Button className="access-button">Access</Button>
              </div>
              <div className="resource-item">
                <h4>Science Experiments</h4>
                <p>Safe and accessible science experiments</p>
                <Button className="access-button">Access</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderSupportPage = () => (
    <div className="dashboard-content">
      <Card className="dashboard-section">
        <div className="section-header">
          <Heart className="section-icon" />
          <h2>Support Services</h2>
        </div>
        <div className="support-container">
          <div className="support-category">
            <h3>Educational Support</h3>
            <div className="support-list">
              <div className="support-item">
                <h4>Special Education Teachers</h4>
                <p>Connect with qualified special education teachers for personalized instruction</p>
                <Button className="connect-button">Find Teacher</Button>
              </div>
              <div className="support-item">
                <h4>Learning Assistants</h4>
                <p>Get help from trained learning assistants for classroom support</p>
                <Button className="connect-button">Request Assistant</Button>
              </div>
              <div className="support-item">
                <h4>Educational Consultants</h4>
                <p>Consult with experts for educational planning and advocacy</p>
                <Button className="connect-button">Schedule Consultation</Button>
              </div>
            </div>
          </div>
          
          <div className="support-category">
            <h3>Therapy Services</h3>
            <div className="support-list">
              <div className="support-item">
                <h4>Speech Therapy</h4>
                <p>Professional speech therapy services for communication development</p>
                <Button className="connect-button">Schedule Session</Button>
              </div>
              <div className="support-item">
                <h4>Occupational Therapy</h4>
                <p>OT services to improve daily living and academic skills</p>
                <Button className="connect-button">Schedule Session</Button>
              </div>
              <div className="support-item">
                <h4>Physical Therapy</h4>
                <p>PT services to enhance mobility and physical capabilities</p>
                <Button className="connect-button">Schedule Session</Button>
              </div>
            </div>
          </div>
          
          <div className="support-category">
            <h3>Community Support</h3>
            <div className="support-list">
              <div className="support-item">
                <h4>Parent Support Groups</h4>
                <p>Join groups of parents facing similar challenges</p>
                <Button className="connect-button">Join Group</Button>
              </div>
              <div className="support-item">
                <h4>Peer Mentoring</h4>
                <p>Connect with peers who have similar experiences</p>
                <Button className="connect-button">Find Mentor</Button>
              </div>
              <div className="support-item">
                <h4>Community Events</h4>
                <p>Participate in inclusive community activities</p>
                <Button className="connect-button">View Events</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderAboutUs = () => (
    <div className="dashboard-content">
      <Card className="dashboard-section">
        <div className="section-header">
          <Info className="section-icon" />
          <h2>About Equal Education</h2>
        </div>
        <div className="about-content">
          <h3>Our Mission</h3>
          <p>To provide equal educational opportunities to all students regardless of their socioeconomic background or special needs. We believe that quality education should be accessible to everyone, and we work tirelessly to bridge the gap between privileged and underprivileged students.</p>
          
          <h3>Our Vision</h3>
          <p>Creating a world where quality education is accessible to every student, empowering them to achieve their full potential. We envision a future where no student is left behind due to financial constraints, lack of resources, or special needs.</p>
          
          <h3>What We Do</h3>
          <ul>
            <li>Connect students with qualified volunteer teachers who provide personalized attention</li>
            <li>Provide access to quality educational resources through our digital library</li>
            <li>Facilitate scholarship opportunities for deserving students</li>
            <li>Offer mentorship and guidance from industry professionals</li>
            <li>Track and support student growth through our innovative analytics platform</li>
            <li>Organize community events and workshops to promote education</li>
            <li>Partner with educational institutions to expand our reach</li>
            <li>Provide specialized support for students with special needs</li>
          </ul>

          <h3>Our Impact</h3>
          <div className="impact-stats">
            <div className="impact-stat">
              <h4>10,000+</h4>
              <p>Students Supported</p>
            </div>
            <div className="impact-stat">
              <h4>500+</h4>
              <p>Volunteer Teachers</p>
            </div>
            <div className="impact-stat">
              <h4>200+</h4>
              <p>Partner Schools</p>
            </div>
            <div className="impact-stat">
              <h4>85%</h4>
              <p>Success Rate</p>
            </div>
          </div>

          <h3>Our Team</h3>
          <p>Equal Education is led by a dedicated team of educators, technologists, and social workers who are passionate about making a difference in the lives of students. Our diverse team brings together expertise from various fields to create innovative solutions for educational challenges.</p>
        </div>
      </Card>
    </div>
  );

  const renderContactUs = () => (
    <div className="dashboard-content">
      <Card className="dashboard-section">
        <div className="section-header">
          <Mail className="section-icon" />
          <h2>Contact Us</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions or need assistance? We're here to help! Our support team is available Monday through Friday, 9:00 AM to 6:00 PM.</p>
            <ul>
              <li>
                <Mail size={16} />
                <span>support@equaleducation.org</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>123 Education Street, Learning City, 12345</span>
              </li>
            </ul>
          </div>

          <div className="contact-faq">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-item">
              <h4>How can I volunteer as a teacher?</h4>
              <p>Visit our Volunteer Portal to register and complete the verification process. We'll match you with students based on your expertise and location.</p>
            </div>
            <div className="faq-item">
              <h4>How do I apply for scholarships?</h4>
              <p>Complete your profile and check the Scholarships section for available opportunities. Our AI-powered system will match you with relevant scholarships.</p>
            </div>
            <div className="faq-item">
              <h4>Can I donate to support your mission?</h4>
              <p>Yes! Visit our Donation page to contribute. All donations are tax-deductible and directly support student education.</p>
            </div>
          </div>

          <form className="contact-form">
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <label>Name</label>
              <Input placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <Input placeholder="Enter your email" type="email" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <Input placeholder="Enter subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-textarea"
                placeholder="Type your message here..."
                rows={4}
              ></textarea>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="special-children-dashboard">
      {renderMainNav()}
      {currentPage === 'home' && (
        <>
          {!isProfileSubmitted ? (
            renderProfileSetup()
          ) : (
            renderDashboard()
          )}
        </>
      )}
      {currentPage === 'resources' && renderResourcesPage()}
      {currentPage === 'support' && renderSupportPage()}
      {currentPage === 'about' && renderAboutUs()}
      {currentPage === 'contact' && renderContactUs()}
    </div>
  );
};

export default SpecialChildrenDashboard; 