import React from 'react';
import './StudentDashboard.css';

function SpecialChildrenProgress() {
    const progressData = [
        {
            id: 1,
            area: 'Language Skills',
            progress: 75,
            achievements: ['Reading Level 2', 'Word Recognition'],
            nextGoal: 'Simple Sentence Formation'
        },
        {
            id: 2,
            area: 'Mathematical Skills',
            progress: 60,
            achievements: ['Number Recognition', 'Basic Counting'],
            nextGoal: 'Simple Addition'
        },
        {
            id: 3,
            area: 'Motor Skills',
            progress: 85,
            achievements: ['Basic Drawing', 'Object Handling'],
            nextGoal: 'Advanced Coordination'
        },
        {
            id: 4,
            area: 'Social Skills',
            progress: 70,
            achievements: ['Group Participation', 'Basic Communication'],
            nextGoal: 'Interactive Play'
        }
    ];

    return (
        <div className="dashboard-container">
            <h1>Learning Progress</h1>
            <div className="progress-grid">
                {progressData.map(area => (
                    <div key={area.id} className="progress-card">
                        <h3>{area.area}</h3>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill"
                                style={{ width: `${area.progress}%` }}
                            ></div>
                        </div>
                        <p>{area.progress}% Complete</p>
                        <div className="achievements">
                            <h4>Achievements:</h4>
                            <ul>
                                {area.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        <p><strong>Next Goal:</strong> {area.nextGoal}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecialChildrenProgress; 