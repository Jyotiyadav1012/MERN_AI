import React, { use, useState } from 'react';
import { useRef } from 'react';

const FeedbackFormUncontrolled = ()=>{

        const nameRef = useRef();
        const courseRef = useRef();
        const ratingRef = useRef();
        const commentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: nameRef.current.value,
            course: courseRef.current.value,
            rating: ratingRef.current.value,
            comment: commentRef.current.value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='input-box'>
                <label>Name: </label>
                <input 
                    ref={nameRef}
                    type="text" 
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label>Course: </label>
                <input 
                    ref={courseRef}
                    type="text" 
                    placeholder="Enter course name"
                />
            </div>
            <div>
                <label>Rating: </label>
               {/*
                <input 
                    type="range" 
                    value={rating}
                    onChange={(e) => {setRating(e.target.value)}}
                    min="1"
                    max="5"
                />
               */} 
                <select 
                ref={ratingRef}
                name = "rating" id = "rating">
                    {[1,2,3,4,5].map((val, index) => (
                        <option key={index} >{val}</option>
                    ))}
                </select> 
            </div>
            <div className='input-box'>
                <label>Comment: </label>
                <textarea 
                    ref={commentRef}
                    type="text" 
                    placeholder="Enter comments here"
                    rows="3"
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}
export default FeedbackFormUncontrolled;
