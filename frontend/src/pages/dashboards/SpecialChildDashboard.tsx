import React, { useState } from 'react';
import './SpecialChildDashboard.css';

// Grade level sections
const GRADE_SECTIONS = {
  SECTION_1: 'Up to 4th Grade',
  SECTION_2: '5th to 10th Grade',
  SECTION_3: '11th & 12th Grade',
  SECTION_4: 'Graduation & Masters'
};

interface SpecialChildDashboardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface SpecialChildProfile {
  personalInfo: {
    name: string;
    gender: string;
    dateOfBirth: string;
    address: string;
  };
  disabilityCertificate: {
    file: File | null;
    verified: boolean;
  };
  financialInfo: {
    familyIncome: string;
    scholarshipNeeded: boolean;
    supportingDocuments: File[];
  };
  education: {
    currentGrade: string;
    section: string;
    specialNeeds: string[];
    preferredSubjects: string[];
  };
  learningProgress: {
    currentTasks: { id: number; title: string; completed: boolean }[];
    achievements: { id: number; title: string; date: Date }[];
  };
}

const SpecialChildDashboard: React.FC<SpecialChildDashboardProps> = ({ user }) => {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState<SpecialChildProfile>({
    personalInfo: {
      name: '',
      gender: '',
      dateOfBirth: '',
      address: ''
    },
    disabilityCertificate: {
      file: null,
      verified: false
    },
    financialInfo: {
      familyIncome: '',
      scholarshipNeeded: false,
      supportingDocuments: []
    },
    education: {
      currentGrade: '',
      section: '',
      specialNeeds: [],
      preferredSubjects: []
    },
    learningProgress: {
      currentTasks: [
        { id: 1, title: 'Complete Math Exercise 1', completed: false },
        { id: 2, title: 'Read Story Book', completed: false }
      ],
      achievements: [
        { id: 1, title: 'First Login Bonus', date: new Date() }
      ]
    }
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'certificate' | 'financial') => {
    const files = e.target.files;
    if (!files) return;

    if (type === 'certificate') {
      setProfile(prev => ({
        ...prev,
        disabilityCertificate: {
          ...prev.disabilityCertificate,
          file: files[0]
        }
      }));
    } else {
      setProfile(prev => ({
        ...prev,
        financialInfo: {
          ...prev.financialInfo,
          supportingDocuments: [...prev.financialInfo.supportingDocuments, ...Array.from(files)]
        }
      }));
    }
  };

  const determineSection = (grade: string): string => {
    const gradeNum = parseInt(grade);
    if (gradeNum <= 4) return GRADE_SECTIONS.SECTION_1;
    if (gradeNum <= 10) return GRADE_SECTIONS.SECTION_2;
    if (gradeNum <= 12) return GRADE_SECTIONS.SECTION_3;
    return GRADE_SECTIONS.SECTION_4;
  };

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const grade = e.target.value;
    const section = determineSection(grade);
    setProfile(prev => ({
      ...prev,
      education: {
        ...prev.education,
        currentGrade: grade,
        section: section
      }
    }));
  };

  const renderPersonalInfoForm = () => (
    <div className="form-section">
      <h2>Personal Information</h2>
      <div className="form-grid">
        <input
          type="text"
          placeholder="Full Name"
          value={profile.personalInfo.name}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, name: e.target.value }
          }))}
          required
        />
        <select
          value={profile.personalInfo.gender}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, gender: e.target.value }
          }))}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          value={profile.personalInfo.dateOfBirth}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, dateOfBirth: e.target.value }
          }))}
          required
        />
        <textarea
          placeholder="Address"
          value={profile.personalInfo.address}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, address: e.target.value }
          }))}
          required
          className="full-width"
        />
      </div>
    </div>
  );

  const renderCertificateUpload = () => (
    <div className="form-section">
      <h2>Disability Certificate</h2>
      <div className="upload-section">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileUpload(e, 'certificate')}
          required
        />
        <p className="helper-text">Please upload disability certificate (PDF, JPG, PNG formats accepted)</p>
      </div>
    </div>
  );

  const renderFinancialInfo = () => (
    <div className="form-section">
      <h2>Financial Information</h2>
      <div className="form-grid">
        <input
          type="number"
          placeholder="Annual Family Income"
          value={profile.financialInfo.familyIncome}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            financialInfo: { ...prev.financialInfo, familyIncome: e.target.value }
          }))}
        />
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={profile.financialInfo.scholarshipNeeded}
            onChange={(e) => setProfile(prev => ({
              ...prev,
              financialInfo: { ...prev.financialInfo, scholarshipNeeded: e.target.checked }
            }))}
          />
          <label>Need Scholarship Support</label>
        </div>
        <div className="upload-section full-width">
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => handleFileUpload(e, 'financial')}
          />
          <p className="helper-text">Upload supporting financial documents (optional)</p>
        </div>
      </div>
    </div>
  );

  const renderEducationInfo = () => (
    <div className="form-section">
      <h2>Educational Information</h2>
      <div className="form-grid">
        <select
          value={profile.education.currentGrade}
          onChange={handleGradeChange}
          required
        >
          <option value="">Select Current Grade</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>Grade {i + 1}</option>
          ))}
          <option value="13">Graduation</option>
        </select>
        <input
          type="text"
          placeholder="Special Needs (comma-separated)"
          value={profile.education.specialNeeds.join(', ')}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            education: { ...prev.education, specialNeeds: e.target.value.split(', ').filter(Boolean) }
          }))}
        />
        <input
          type="text"
          placeholder="Preferred Subjects (comma-separated)"
          value={profile.education.preferredSubjects.join(', ')}
          onChange={(e) => setProfile(prev => ({
            ...prev,
            education: { ...prev.education, preferredSubjects: e.target.value.split(', ').filter(Boolean) }
          }))}
        />
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {profile.personalInfo.name}!</h1>
        <p>Section: {profile.education.section}</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h2>Current Tasks</h2>
          <div className="tasks-list">
            {profile.learningProgress.currentTasks.map(task => (
              <div key={task.id} className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    setProfile(prev => ({
                      ...prev,
                      learningProgress: {
                        ...prev.learningProgress,
                        currentTasks: prev.learningProgress.currentTasks.map(t =>
                          t.id === task.id ? { ...t, completed: !t.completed } : t
                        )
                      }
                    }));
                  }}
                />
                <span className={task.completed ? 'completed' : ''}>{task.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Achievements</h2>
          <div className="achievements-list">
            {profile.learningProgress.achievements.map(achievement => (
              <div key={achievement.id} className="achievement-item">
                <span className="achievement-title">{achievement.title}</span>
                <span className="achievement-date">
                  {achievement.date.toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section full-width">
          <h2>Learning Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Interactive Lessons</h3>
              <button className="resource-button">Start Learning</button>
            </div>
            <div className="resource-card">
              <h3>Video Tutorials</h3>
              <button className="resource-button">Watch Videos</button>
            </div>
            <div className="resource-card">
              <h3>Practice Exercises</h3>
              <button className="resource-button">Practice Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsProfileComplete(true);
    }
  };

  if (!isProfileComplete) {
    return (
      <form onSubmit={handleSubmit} className="profile-setup-form">
        <div className="steps-indicator">
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
          <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>4</div>
        </div>

        {currentStep === 1 && renderPersonalInfoForm()}
        {currentStep === 2 && renderCertificateUpload()}
        {currentStep === 3 && renderFinancialInfo()}
        {currentStep === 4 && renderEducationInfo()}

        <div className="form-buttons">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="back-button"
            >
              Back
            </button>
          )}
          <button type="submit" className="next-button">
            {currentStep === 4 ? 'Complete Setup' : 'Next'}
          </button>
        </div>
      </form>
    );
  }

  return renderDashboard();
};

export default SpecialChildDashboard; 