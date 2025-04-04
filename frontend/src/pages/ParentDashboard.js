import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ParentDashboard.css';

const ParentDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split('/parent/')[1] || 'dashboard';

  const navItems = [
    { id: 'dashboard', label: '1. Growth Tracker', path: '/parent/dashboard' },
    { id: 'education', label: '2. Education Content', path: '/parent/education' },
    { id: 'planning', label: '3. Future Planning', path: '/parent/planning' }
  ];

  const subjects = [
    { name: 'Mathematics', score: 85, improvement: '+5%', lastTest: 'Unit Test 3', date: '2024-03-15' },
    { name: 'Science', score: 92, improvement: '+8%', lastTest: 'Unit Test 3', date: '2024-03-14' },
    { name: 'English', score: 88, improvement: '+3%', lastTest: 'Unit Test 3', date: '2024-03-13' }
  ];

  const attendance = {
    percentage: 95,
    present: 57,
    total: 60,
    leaves: 3
  };

  const educationContent = [
    {
      subject: 'Mathematics',
      topics: ['Fractions', 'Decimals', 'Geometry'],
      resources: [
        { type: 'Video', title: 'Understanding Fractions', duration: '15 mins' },
        { type: 'Practice', title: 'Decimal Worksheets', questions: 20 }
      ]
    },
    {
      subject: 'Science',
      topics: ['Plant Life', 'Solar System', 'Simple Machines'],
      resources: [
        { type: 'Interactive', title: 'Solar System Explorer', duration: '30 mins' },
        { type: 'Quiz', title: 'Plant Parts Quiz', questions: 15 }
      ]
    }
  ];

  const futurePlanning = {
    goals: [
      {
        title: 'Academic Goals',
        items: ['Improve Mathematics score by 10%', 'Complete Science project', 'Read 5 books this semester']
      },
      {
        title: 'Extra-curricular Goals',
        items: ['Join the Science Club', 'Participate in Math Olympiad', 'Learn a musical instrument']
      }
    ],
    skills: [
      {
        name: 'Problem Solving',
        level: 'Advanced',
        items: ['Mathematical reasoning', 'Scientific method', 'Critical thinking']
      },
      {
        name: 'Communication',
        level: 'Intermediate',
        items: ['Public speaking', 'Written expression', 'Team collaboration']
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="growth-tracker">
            <section className="academic-progress">
              <h2>Academic Progress</h2>
              <div className="subjects-grid">
                {subjects.map((subject, index) => (
                  <div key={index} className="subject-card">
                    <h3>{subject.name}</h3>
                    <div className="score-section">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${subject.score}%` }} />
                      </div>
                      <div className="score-details">
                        <span>{subject.score}%</span>
                        <span className="improvement">{subject.improvement}</span>
                      </div>
                    </div>
                    <div className="test-info">
                      <p>Last Test: {subject.lastTest}</p>
                      <p>Date: {subject.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="attendance-section">
              <h2>Attendance Overview</h2>
              <div className="attendance-card">
                <div className="attendance-circle">
                  <svg viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4299E1"
                      strokeWidth="3"
                      strokeDasharray={`${attendance.percentage}, 100`}
                    />
                  </svg>
                  <div className="attendance-percentage">{attendance.percentage}%</div>
                </div>
                <div className="attendance-details">
                  <p>Present: {attendance.present} days</p>
                  <p>Total Days: {attendance.total} days</p>
                  <p>Leaves Taken: {attendance.leaves} days</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'education':
        return (
          <div className="education-content">
            {educationContent.map((subject, index) => (
              <div key={index} className="education-card">
                <h2>{subject.subject}</h2>
                <div className="topics-section">
                  <h3>Current Topics</h3>
                  <ul className="topics-list">
                    {subject.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="resources-section">
                  <h3>Learning Resources</h3>
                  <div className="resources-grid">
                    {subject.resources.map((resource, i) => (
                      <div key={i} className="resource-card">
                        <span className="resource-type">{resource.type}</span>
                        <h4>{resource.title}</h4>
                        {resource.duration && <p>Duration: {resource.duration}</p>}
                        {resource.questions && <p>Questions: {resource.questions}</p>}
                        <button className="access-btn">Access Now</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'planning':
        return (
          <div className="future-planning">
            <section className="goals-section">
              <h2>Academic & Personal Goals</h2>
              <div className="goals-grid">
                {futurePlanning.goals.map((goalGroup, index) => (
                  <div key={index} className="goal-card">
                    <h3>{goalGroup.title}</h3>
                    <ul>
                      {goalGroup.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="skills-section">
              <h2>Skills Development</h2>
              <div className="skills-grid">
                {futurePlanning.skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <h3>{skill.name}</h3>
                    <div className="skill-item">
                      <span>Current Level</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <ul>
                      {skill.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="parent-dashboard">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-content">
            <div className="header-title">
              <h1>Welcome, Parent Name</h1>
              <p>Child Name - Class 8A - Roll No. 42</p>
            </div>
            <nav className="dashboard-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard; 