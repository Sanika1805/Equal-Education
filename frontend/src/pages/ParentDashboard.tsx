import React, { useState } from 'react';
import './ParentDashboard.css';

interface ChildData {
  name: string;
  class: string;
  rollNumber: string;
  subjects: SubjectProgress[];
  attendance: AttendanceRecord[];
  assignments: Assignment[];
}

interface SubjectProgress {
  subject: string;
  score: number;
  improvement: string;
  lastTestScore: number;
  teacherRemarks: string;
}

interface AttendanceRecord {
  month: string;
  percentage: number;
  daysPresent: number;
  totalDays: number;
  leaves: number;
}

interface Assignment {
  subject: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
}

const ParentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('growth');
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Mock data - Replace with API calls in production
  const childData: ChildData = {
    name: "John Smith",
    class: "8th Grade",
    rollNumber: "2024-08-001",
    subjects: [
      { subject: 'Mathematics', score: 85, improvement: '+5%', lastTestScore: 82, teacherRemarks: 'Good progress in algebra' },
      { subject: 'Science', score: 78, improvement: '+3%', lastTestScore: 75, teacherRemarks: 'Needs to focus on physics' },
      { subject: 'English', score: 92, improvement: '+7%', lastTestScore: 88, teacherRemarks: 'Excellent writing skills' },
      { subject: 'Social Studies', score: 88, improvement: '+4%', lastTestScore: 85, teacherRemarks: 'Active participation in discussions' }
    ],
    attendance: [
      { month: 'January', percentage: 95, daysPresent: 19, totalDays: 20, leaves: 1 },
      { month: 'February', percentage: 90, daysPresent: 18, totalDays: 20, leaves: 2 },
      { month: 'March', percentage: 100, daysPresent: 22, totalDays: 22, leaves: 0 }
    ],
    assignments: [
      { subject: 'Mathematics', title: 'Quadratic Equations', dueDate: '2024-03-25', status: 'pending' },
      { subject: 'Science', title: 'Lab Report: Plant Growth', dueDate: '2024-03-20', status: 'submitted' },
      { subject: 'English', title: 'Book Review', dueDate: '2024-03-15', status: 'graded', score: 90 }
    ]
  };

  const educationContent = [
    {
      subject: 'Mathematics',
      topics: ['Algebra', 'Geometry', 'Statistics'],
      resources: [
        { type: 'Video', title: 'Understanding Quadratic Equations', duration: '15 mins' },
        { type: 'Practice', title: 'Geometry Problems Set', questions: 20 },
        { type: 'Interactive', title: 'Statistics Calculator', format: 'Web Tool' }
      ],
      upcomingTopics: ['Trigonometry', 'Linear Equations']
    },
    {
      subject: 'Science',
      topics: ['Physics', 'Chemistry', 'Biology'],
      resources: [
        { type: 'Video', title: 'Forces and Motion', duration: '20 mins' },
        { type: 'Lab', title: 'Virtual Chemistry Lab', format: 'Simulation' },
        { type: 'Quiz', title: 'Biology Chapter Test', questions: 30 }
      ],
      upcomingTopics: ['Electricity', 'Chemical Reactions']
    }
  ];

  const futurePlanning = [
    {
      category: 'Academic Goals',
      shortTerm: [
        'Improve Mathematics score by 10%',
        'Complete all pending assignments',
        'Maintain above 95% attendance'
      ],
      longTerm: [
        'Prepare for high school entrance exams',
        'Develop strong foundation in sciences',
        'Improve English writing skills'
      ]
    },
    {
      category: 'Skill Development',
      current: [
        { skill: 'Public Speaking', level: 'Intermediate', nextMilestone: 'Class Presentation' },
        { skill: 'Computer Programming', level: 'Beginner', nextMilestone: 'Basic Python Course' },
        { skill: 'Scientific Research', level: 'Beginner', nextMilestone: 'Science Fair Project' }
      ]
    }
  ];

  const renderGrowthTracker = () => (
    <div className="growth-tracker">
      <section className="progress-section">
        <div className="section-header">
          <h2>Academic Progress</h2>
          <div className="subject-filter">
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="subject-select"
            >
              <option value="all">All Subjects</option>
              {childData.subjects.map(subject => (
                <option key={subject.subject} value={subject.subject}>
                  {subject.subject}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="progress-grid">
          {childData.subjects
            .filter(subject => selectedSubject === 'all' || subject.subject === selectedSubject)
            .map((subject) => (
              <div key={subject.subject} className="progress-card">
                <h3>{subject.subject}</h3>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${subject.score}%` }}
                  ></div>
                </div>
                <div className="progress-details">
                  <span>Current: {subject.score}%</span>
                  <span className="improvement">{subject.improvement}</span>
                </div>
                <div className="teacher-remarks">
                  <p><strong>Last Test:</strong> {subject.lastTestScore}%</p>
                  <p><strong>Teacher's Note:</strong> {subject.teacherRemarks}</p>
                </div>
              </div>
          ))}
        </div>
      </section>

      <section className="attendance-section">
        <h2>Attendance Record</h2>
        <div className="attendance-grid">
          {childData.attendance.map((month) => (
            <div key={month.month} className="attendance-card">
              <h3>{month.month}</h3>
              <div className="attendance-circle">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4a90e2"
                    strokeWidth="3"
                    strokeDasharray={`${month.percentage}, 100`}
                  />
                </svg>
                <span className="percentage">{month.percentage}%</span>
              </div>
              <div className="attendance-details">
                <p>Present: {month.daysPresent}/{month.totalDays} days</p>
                <p>Leaves: {month.leaves} days</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="assignments-section">
        <h2>Recent Assignments</h2>
        <div className="assignments-grid">
          {childData.assignments.map((assignment, index) => (
            <div key={index} className="assignment-card">
              <div className="assignment-header">
                <h3>{assignment.subject}</h3>
                <span className={`status ${assignment.status}`}>{assignment.status}</span>
              </div>
              <div className="assignment-details">
                <p className="title">{assignment.title}</p>
                <p className="due-date">Due: {assignment.dueDate}</p>
                {assignment.score && (
                  <p className="score">Score: {assignment.score}%</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderEducationContent = () => (
    <div className="education-content">
      {educationContent.map((subject) => (
        <div key={subject.subject} className="subject-card">
          <h2>{subject.subject}</h2>
          <div className="content-section">
            <div className="topics">
              <h3>Current Topics</h3>
              <ul>
                {subject.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
            <div className="resources">
              <h3>Learning Resources</h3>
              <ul>
                {subject.resources.map((resource, index) => (
                  <li key={index} className="resource-item">
                    <span className="resource-type">{resource.type}</span>
                    <span className="resource-title">{resource.title}</span>
                    {resource.duration && (
                      <span className="resource-duration">{resource.duration}</span>
                    )}
                    {resource.questions && (
                      <span className="resource-questions">{resource.questions} Questions</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="upcoming-topics">
            <h3>Upcoming Topics</h3>
            <ul>
              {subject.upcomingTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          <button className="access-btn">Access Learning Materials</button>
        </div>
      ))}
    </div>
  );

  const renderFuturePlanning = () => (
    <div className="future-planning">
      {futurePlanning.map((category, index) => (
        <div key={index} className="planning-card">
          <h2>{category.category}</h2>
          {category.shortTerm && (
            <div className="goals-section">
              <h3>Short-term Goals</h3>
              <ul>
                {category.shortTerm.map((goal, idx) => (
                  <li key={idx} className="goal-item">
                    <span className="goal-icon">🎯</span>
                    <span className="goal-text">{goal}</span>
                  </li>
                ))}
              </ul>
              <h3>Long-term Goals</h3>
              <ul>
                {category.longTerm?.map((goal, idx) => (
                  <li key={idx} className="goal-item">
                    <span className="goal-icon">🌟</span>
                    <span className="goal-text">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {category.current && (
            <div className="skills-section">
              {category.current.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-header">
                    <h3>{skill.skill}</h3>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <p className="next-milestone">Next: {skill.nextMilestone}</p>
                  <button className="learn-more-btn">View Development Plan</button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="parent-dashboard">
      <div className="dashboard-header">
        <h1>Welcome to {childData.name}'s Dashboard</h1>
        <p>Class: {childData.class} | Roll Number: {childData.rollNumber}</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === 'growth' ? 'active' : ''}`}
          onClick={() => setActiveTab('growth')}
        >
          Growth Tracker
        </button>
        <button
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education Content
        </button>
        <button
          className={`tab-btn ${activeTab === 'future' ? 'active' : ''}`}
          onClick={() => setActiveTab('future')}
        >
          Future Planning
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'growth' && renderGrowthTracker()}
        {activeTab === 'education' && renderEducationContent()}
        {activeTab === 'future' && renderFuturePlanning()}
      </div>
    </div>
  );
};

export default ParentDashboard; 