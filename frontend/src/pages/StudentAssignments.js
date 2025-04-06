import React from 'react';
import './StudentDashboard.css';

function StudentAssignments() {
    const assignments = [
        { id: 1, title: 'Math Homework', subject: 'Mathematics', dueDate: '2024-04-15', status: 'Pending' },
        { id: 2, title: 'Science Project', subject: 'Science', dueDate: '2024-04-20', status: 'Submitted' },
        { id: 3, title: 'English Essay', subject: 'English', dueDate: '2024-04-18', status: 'Pending' },
        { id: 4, title: 'History Report', subject: 'History', dueDate: '2024-04-25', status: 'Not Started' }
    ];

    return (
        <div className="dashboard-container">
            <h1>My Assignments</h1>
            <div className="assignments-list">
                {assignments.map(assignment => (
                    <div key={assignment.id} className="assignment-card">
                        <h3>{assignment.title}</h3>
                        <p>Subject: {assignment.subject}</p>
                        <p>Due Date: {assignment.dueDate}</p>
                        <span className={`status ${assignment.status.toLowerCase()}`}>
                            {assignment.status}
                        </span>
                        <button className="view-assignment-btn">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentAssignments; 