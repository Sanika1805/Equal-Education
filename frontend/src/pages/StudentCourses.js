import React from 'react';
import './StudentDashboard.css';

function StudentCourses() {
    const courses = [
        { id: 1, name: 'Mathematics', progress: 75, instructor: 'Dr. Smith' },
        { id: 2, name: 'Science', progress: 60, instructor: 'Mrs. Johnson' },
        { id: 3, name: 'English', progress: 85, instructor: 'Mr. Davis' },
        { id: 4, name: 'History', progress: 70, instructor: 'Dr. Wilson' }
    ];

    return (
        <div className="dashboard-container">
            <h1>My Courses</h1>
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <p>Instructor: {course.instructor}</p>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill"
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                        <p>{course.progress}% Complete</p>
                        <button className="view-course-btn">View Course</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentCourses; 