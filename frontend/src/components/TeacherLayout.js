import React from 'react';
import Chatbot from './Chatbot';
import './Layout.css';

function TeacherLayout({ children, activePage }) {
    return (
        <div className="layout">
            <nav className="sidebar">
                <div className="sidebar-header">Teacher Dashboard</div>
                <ul className="nav-links">
                    <li className={activePage === "dashboard" ? "active" : ""}>
                        <a href="/teacher/dashboard">Dashboard</a>
                    </li>
                    <li className={activePage === "classes" ? "active" : ""}>
                        <a href="/teacher/classes">My Classes</a>
                    </li>
                    <li className={activePage === "students" ? "active" : ""}>
                        <a href="/teacher/students">Students</a>
                    </li>
                    <li className={activePage === "assignments" ? "active" : ""}>
                        <a href="/teacher/assignments">Assignments</a>
                    </li>
                    <li className={activePage === "resources" ? "active" : ""}>
                        <a href="/teacher/resources">Resources</a>
                    </li>
                </ul>
            </nav>
            <main className="main-content">
                {children}
            </main>
            <Chatbot userRole="teacher" />
        </div>
    );
}

export default TeacherLayout; 