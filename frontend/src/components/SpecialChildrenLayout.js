import React from 'react';
import Chatbot from './Chatbot';
import './Layout.css';

function SpecialChildrenLayout({ children, activePage }) {
    return (
        <div className="layout">
            <nav className="sidebar">
                <div className="sidebar-header">Special Education Dashboard</div>
                <ul className="nav-links">
                    <li className={activePage === "dashboard" ? "active" : ""}>
                        <a href="/special/dashboard">Dashboard</a>
                    </li>
                    <li className={activePage === "activities" ? "active" : ""}>
                        <a href="/special/activities">Activities</a>
                    </li>
                    <li className={activePage === "progress" ? "active" : ""}>
                        <a href="/special/progress">Progress</a>
                    </li>
                    <li className={activePage === "support" ? "active" : ""}>
                        <a href="/special/support">Support</a>
                    </li>
                    <li className={activePage === "resources" ? "active" : ""}>
                        <a href="/special/resources">Resources</a>
                    </li>
                </ul>
            </nav>
            <main className="main-content">
                {children}
            </main>
            <Chatbot userRole="specialChildren" />
        </div>
    );
}

export default SpecialChildrenLayout; 