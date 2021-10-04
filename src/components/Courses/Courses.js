import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses , setCourses] = useState([]);

    useEffect(()=> {
        fetch('coursesData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    return (
        <div>
            <h2 className="text-center py-4">Our Courses</h2>
            <Row className="p-0 m-0">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;