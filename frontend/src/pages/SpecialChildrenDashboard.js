import React from 'react';
import './StudentDashboard.css';

function SpecialChildrenDashboard({ user }) {
    const learningStats = {
        dailyActivities: 5,
        achievementsEarned: 12,
        currentLevel: 'Level 3',
        nextMilestone: 'Reading Fluency'
    };

    return (
        <div className="dashboard-container">
            <div className="profile-header">
                <h1>Special Learning Portal</h1>
                <p className="welcome-text">Welcome back, {user?.name || 'Student'}!</p>
                <div className="role-badge">Role: Special Children</div>
            </div>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Today's Plan</h3>
                    <p>{learningStats.dailyActivities}</p>
                    <span>Fun Activities</span>
                </div>
                <div className="stat-card">
                    <h3>Achievements</h3>
                    <p>{learningStats.achievementsEarned}</p>
                    <span>Stars Earned</span>
                </div>
                <div className="stat-card">
                    <h3>Current Level</h3>
                    <p>{learningStats.currentLevel}</p>
                    <span>Keep Going!</span>
                </div>
                <div className="stat-card">
                    <h3>Next Goal</h3>
                    <p>{learningStats.nextMilestone}</p>
                    <span>Coming Soon</span>
                </div>
            </div>
            <div className="learning-activities">
                <h2>Today's Activities</h2>
                <div className="activity-cards">
                    <div className="activity-card">
                        <h3>Reading Time</h3>
                        <p>Interactive story with pictures</p>
                        <button>Start Activity</button>
                    </div>
                    <div className="activity-card">
                        <h3>Math Games</h3>
                        <p>Fun with numbers and shapes</p>
                        <button>Start Activity</button>
                    </div>
                    <div className="activity-card">
                        <h3>Creative Art</h3>
                        <p>Express yourself through colors</p>
                        <button>Start Activity</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialChildrenDashboard; 