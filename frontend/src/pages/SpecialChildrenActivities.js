import React from 'react';
import './StudentDashboard.css';

function SpecialChildrenActivities() {
    const activities = [
        {
            id: 1,
            name: 'Reading Adventure',
            type: 'Language',
            difficulty: 'Beginner',
            duration: '30 mins',
            description: 'Interactive story reading with voice support'
        },
        {
            id: 2,
            name: 'Math Fun',
            type: 'Mathematics',
            difficulty: 'Intermediate',
            duration: '25 mins',
            description: 'Number recognition and basic arithmetic'
        },
        {
            id: 3,
            name: 'Art Time',
            type: 'Creative',
            difficulty: 'Beginner',
            duration: '45 mins',
            description: 'Drawing and coloring activities'
        },
        {
            id: 4,
            name: 'Music & Movement',
            type: 'Physical',
            difficulty: 'Beginner',
            duration: '35 mins',
            description: 'Dance and rhythm exercises'
        }
    ];

    return (
        <div className="dashboard-container">
            <h1>Special Education Activities</h1>
            <div className="activities-grid">
                {activities.map(activity => (
                    <div key={activity.id} className="activity-card">
                        <h3>{activity.name}</h3>
                        <p><strong>Type:</strong> {activity.type}</p>
                        <p><strong>Difficulty:</strong> {activity.difficulty}</p>
                        <p><strong>Duration:</strong> {activity.duration}</p>
                        <p>{activity.description}</p>
                        <button className="start-activity-btn">Start Activity</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecialChildrenActivities; 