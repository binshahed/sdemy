import React from 'react';
import "./Course.css"

const Course = (props) => {
   const course=props.course;
    return (
    <div className="container">
        <div className="courseList">
            <img  src={course.image} alt=""/>
            <h4 className="courseHeading">{course.name}</h4>
            <p>duration: {course.duration}</p>
            <p>${course.price}</p>
            <button className="btn btn-success"
            id={course.id}
            onClick={()=>props.handleEnrollNow(course)}>

            Enrol Now</button>
            
        </div>
    </div>
    );
};


export default Course;