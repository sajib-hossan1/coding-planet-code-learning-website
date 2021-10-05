import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    // destructuring from the props
    const {img,courseName,instructor,learn,about,price} = props.course;
    return (
        <Col sm={12} lg={4} md={6}>
            <div className="card h-auto">
                <img src={img}  alt="" />
                <div className="card-body">
                    <h2>Course name : {courseName}</h2>
                    <h3>Instructor : {instructor}</h3>
                    <h4>Learn : {learn}</h4>
                    <p>About This Course : {about}</p>
                    <h3>Price : ${price}</h3>
                    <Button className="btn btn-outline-success font-weight-bold">Add To Cart</Button>
                </div>
            </div>
        </Col>
    );
};

export default Course;