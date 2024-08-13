import React from 'react';
import { Link } from 'react-router-dom';

const SubcourseList = () => {
    const subcourses = [
        { id: 1, title: "UX/UI Introduction" },
        { id: 2, title: "Section 2" },
        { id: 3, title: "Section 3" },
        { id: 4, title: "Section 4" },
        { id: 5, title: "Section 5" },
import React from 'react';
import { Link } from 'react-router-dom';

const SubcourseList = () => {
    const subcourses = [
        { id: 1, title: "UX/UI Introduction" },
        { id: 2, title: "Section 2" },
        { id: 3, title: "Section 3" },
        { id: 4, title: "Section 4" },
        { id: 5, title: "Section 5" },

        // Add other subcourses here...
    ];

    return (
        <div className="subcourse-list">
            {subcourses.map((course) => (
                <Link to={`/course/${course.id}`} key={course.id}>
                    <div className="subcourse-item">
                        <h3>{course.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SubcourseList;

        // Add other subcourses here...
    ];

    return (
        <div className="subcourse-list">
            {subcourses.map((course) => (
                <Link to={`/course/${course.id}`} key={course.id}>
                    <div className="subcourse-item">
                        <h3>{course.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SubcourseList;
