import React, { useState } from 'react';
import fakeData from '../../FakeData/CourseData'
import Course from '../Course/Course';
import Cart from '../Cart/Cart'


const Shop = () => { 

    const [courseList, setCourseList]=useState(fakeData)
    const [cart, setCart]=useState([])

    const handleEnrollNow =(item) =>{
        console.log(item);
        const newCart=[...cart, item]
        setCart(newCart)
        const enrollButton = document.getElementById(item.id);
        enrollButton.innerText = "Enrolled";
        enrollButton.style.backgroundColor = "green";
        enrollButton.disabled = true;
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    {courseList.map((course)=>(
                    <Course
                    handleEnrollNow={()=>{
                        handleEnrollNow(course);
                    }}
                    course={course}
                    key={course.id}>

                    </Course>
                    ))}
                    
                </div>

                <div className="col-md-4">
                    <Cart cart={cart}></Cart>
                    {/* <p>Order Summary</p> */}

                </div>
            </div>
        </div>
    );
};

export default Shop;