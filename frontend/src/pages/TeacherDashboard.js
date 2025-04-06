import React from 'react';
import './StudentDashboard.css';
import Chatbot from '../components/Chatbot';

function TeacherDashboard({ user }) {
    const teacherStats = {
        totalStudents: 120,
        activeClasses: 5,
        pendingGrading: 25,
        upcomingLessons: 8
    };

    // Add teacher-specific chatbot responses
    const teacherChatbotResponses = {
        grading: {
            keywords: ['grade', 'grading', 'assessment', 'marks'],
            response: 'Grading Resources:\n' +
                '1. Access grading rubrics\n' +
                '2. View pending assignments\n' +
                '3. Grade submission history\n' +
                '4. Performance analytics'
        },
        lessons: {
            keywords: ['lesson', 'plan', 'curriculum', 'teaching'],
            response: 'Lesson Planning:\n' +
                '1. Create lesson plans\n' +
                '2. Access teaching materials\n' +
                '3. Schedule classes\n' +
                '4. View curriculum guidelines'
        },
        students: {
            keywords: ['student', 'class', 'attendance', 'performance'],
            response: 'Student Management:\n' +
                '1. View student profiles\n' +
                '2. Track attendance\n' +
                '3. Monitor progress\n' +
                '4. Generate reports'
        },
        resources: {
            keywords: ['resource', 'material', 'tool', 'template'],
            response: 'Teaching Resources:\n' +
                '1. Download templates\n' +
                '2. Access educational tools\n' +
                '3. Share materials\n' +
                '4. Collaboration tools'
        }
    };

    return (
        <div className="dashboard-container">
            <div className="profile-header">
                <h1>Educator Portal</h1>
                <p className="welcome-text">Welcome back, {user?.name || 'Teacher'}!</p>
                <div className="role-badge">Role: Teacher</div>
            </div>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Students</h3>
                    <p>{teacherStats.totalStudents}</p>
                    <span>Total Students</span>
                </div>
                <div className="stat-card">
                    <h3>Classes</h3>
                    <p>{teacherStats.activeClasses}</p>
                    <span>Active Classes</span>
                </div>
                <div className="stat-card">
                    <h3>Grading</h3>
                    <p>{teacherStats.pendingGrading}</p>
                    <span>Pending Reviews</span>
                </div>
                <div className="stat-card">
                    <h3>Schedule</h3>
                    <p>{teacherStats.upcomingLessons}</p>
                    <span>Upcoming Lessons</span>
                </div>
            </div>
            <div className="quick-actions">
                <h2>Quick Actions</h2>
                <div className="action-buttons">
                    <button>Take Attendance</button>
                    <button>Grade Assignments</button>
                    <button>Schedule Class</button>
                    <button>Send Announcements</button>
                </div>
            </div>

            {/* Add the Chatbot component */}
            <Chatbot 
                userRole="teacher"
                customResponses={teacherChatbotResponses}
                initialMessage="Hello! I'm your teaching assistant. How can I help you with grading, lessons, students, or resources?"
            />
        </div>
    );
}

export default TeacherDashboard; 