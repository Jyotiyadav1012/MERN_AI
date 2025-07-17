import React, { useState } from 'react';
import { useFeedbackStore } from './useFeedbackStore';

const FeedbackFormControlled = ()=>{

    const[name, setName] = useState('');
    const[rating, setRating] = useState(5);
    const[comments, setComments] = useState('');
    const[course, setCourse] = useState('');

    useFeedbackStore((state => {}))

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, rating, comments, course});
        addFeedback({name, rating, comments, course});
        setName('')
        setRating(5)
        setComments('')
        setCourse('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='input-box'>
                <label>Name: </label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label>Course: </label>
                <input 
                    type="text" 
                    value={course}
                    onChange={(e) => {setCourse(e.target.value)}}
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
                name = "rating" id = "rating"
                value = {rating} 
                onChange =  {(e) => {setRating(e.target.value)}}>
                    {[1,2,3,4,5].map((val, index) => (
                        <option key={index} >{val}</option>
                    ))}
                </select> 
            </div>
            <div className='input-box'>
                <label>Comment: </label>
                <textarea 
                    type="text" 
                    value={comments}
                    onChange={(e) => {setComments(e.target.value)}}
                    placeholder="Enter comments here"
                    rows="3"
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}
export default FeedbackFormControlled;
