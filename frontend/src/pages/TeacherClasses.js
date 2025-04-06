import React from 'react';
import './StudentDashboard.css';

function TeacherClasses() {
    const classes = [
        { id: 1, name: 'Mathematics 101', students: 30, time: '9:00 AM', room: '101' },
        { id: 2, name: 'Science 101', students: 25, time: '10:30 AM', room: '102' },
        { id: 3, name: 'English 101', students: 35, time: '1:00 PM', room: '103' },
        { id: 4, name: 'History 101', students: 28, time: '2:30 PM', room: '104' }
    ];

    return (
        <div className="dashboard-container">
            <h1>My Classes</h1>
            <div className="classes-grid">
                {classes.map(cls => (
                    <div key={cls.id} className="class-card">
                        <h3>{cls.name}</h3>
                        <p>Students: {cls.students}</p>
                        <p>Time: {cls.time}</p>
                        <p>Room: {cls.room}</p>
                        <button className="view-class-btn">View Class</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeacherClasses; 