import React from 'react';
import './StudentDashboard.css';

function TeacherStudents() {
    const students = [
        { id: 1, name: 'John Doe', grade: 'A', attendance: '95%', class: 'Mathematics 101' },
        { id: 2, name: 'Jane Smith', grade: 'B+', attendance: '88%', class: 'Science 101' },
        { id: 3, name: 'Mike Johnson', grade: 'A-', attendance: '92%', class: 'English 101' },
        { id: 4, name: 'Sarah Williams', grade: 'B', attendance: '85%', class: 'History 101' }
    ];

    return (
        <div className="dashboard-container">
            <h1>My Students</h1>
            <div className="students-list">
                {students.map(student => (
                    <div key={student.id} className="student-card">
                        <h3>{student.name}</h3>
                        <p>Grade: {student.grade}</p>
                        <p>Attendance: {student.attendance}</p>
                        <p>Class: {student.class}</p>
                        <button className="view-student-btn">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeacherStudents; 