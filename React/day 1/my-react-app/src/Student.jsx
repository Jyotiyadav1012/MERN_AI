import React from 'react';
const StudentCard = (props) =>{
    console.log(props.Student)
    const [likes, setLikes] = React.useState(0);
    const stdCardStyle = {
        border: '1px solid blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    };

    return (
        <div style={stdCardStyle}>
            <h1>Student: {props.Student.Sname}</h1>
            <p>Age: <b>{props.Student.age}</b></p>
            <p>City: <b>{props.Student.StudentCity}</b></p>
            <button onClick={()=>
                setLikes(likes + 1)
            }>Like {likes}</button>
        </div>
      );
};
export default StudentCard;