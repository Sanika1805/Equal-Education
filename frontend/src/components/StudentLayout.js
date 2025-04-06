import React from 'react';
import Chatbot from './Chatbot';
import './Layout.css';

function StudentLayout({ children, activePage }) {
    return (
        <div className="layout">
            <nav className="sidebar">
                <div className="sidebar-header">Student Dashboard</div>
                <ul className="nav-links">
                    <li className={activePage === "dashboard" ? "active" : ""}>
                        <a href="/student/dashboard">Dashboard</a>
                    </li>
                    <li className={activePage === "courses" ? "active" : ""}>
                        <a href="/student/courses">My Courses</a>
                    </li>
                    <li className={activePage === "assignments" ? "active" : ""}>
                        <a href="/student/assignments">Assignments</a>
                    </li>
                    <li className={activePage === "progress" ? "active" : ""}>
                        <a href="/student/progress">Progress</a>
                    </li>
                    <li className={activePage === "resources" ? "active" : ""}>
                        <a href="/student/resources">Resources</a>
                    </li>
                </ul>
            </nav>
            <main className="main-content">
                {children}
            </main>
            <Chatbot userRole="student" />
        </div>
    );
}

export default StudentLayout; 