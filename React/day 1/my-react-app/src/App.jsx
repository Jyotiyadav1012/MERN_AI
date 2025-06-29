import React from 'react';
import StudentCard from './Student';

const CreateStudent = (props) => {
    const [Sname, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [StudentCity, setCity] = React.useState('');
    const formContainerStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        margin: '20px auto',
        borderRadius: '5px',
        backgroundColor: '#b9c',
    };
    const hOneStyle = {
        textDecoration: 'underline',
        color: '#fff',
        textAlign: 'center',
    };
    const inputStyle = {
        width: '50%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: '2px 2px 5px gray'
    };
    return(
        <div style={formContainerStyle}>
            <h1 style={hOneStyle}>Create Student Form</h1>
            <input value={Sname} onChange={(e)=>{setName(e.target.value)}} style={inputStyle} type="text" placeholder='Student name'/>
            <input value={age} onChange={(e)=>{setAge(e.target.value)}} style={inputStyle} type="Number" placeholder='Student age'/>
            <input value={StudentCity} onChange={(e)=>{setCity(e.target.value)}} style={inputStyle} type="text" placeholder='Student city'/><br/>
            <button onClick={() => {
                props.addStd(Sname, age, StudentCity);
                setName('');
                setAge('0');
                setCity('');
            }}>Add Student</button>
        </div>
    );
}
const App = () => {
    // const Student = [
    //    {Sname: 'Jyoti', age: 21,StudentCity: 'New Delhi'},
    //    {Sname: 'Avinash', age: 23,StudentCity: 'Uttar Pradesh'},
    //    {Sname: 'Vinay', age: 23,StudentCity: 'Haryana'},
    //    {Sname: 'Pawan', age: 23,StudentCity: 'Faridabad'},
    // ];
    const [Student, setStudent] = React.useState([
        {Sname: 'Jyoti', age: 21, StudentCity: 'New Delhi'},
        {Sname: 'Sandeep', age: 24, StudentCity: 'Uttar Pradesh'},
       
    ]);
    const addStudent = (Sname, age, StudentCity)=>{
        let newStudent = {Sname, age, StudentCity};
        setStudent([...Student, newStudent]);
    }
  return (
        <div>
            <h1>Total available students #{Student.length}</h1>
            <CreateStudent addStd = {addStudent}/>
            {
                Student.map(function(std, index) {
                return <StudentCard key={index} Student={std} ></StudentCard>
            })
            } 
        </div>
      ); 
}
export default App;
