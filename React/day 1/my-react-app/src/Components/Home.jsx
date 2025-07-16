import { Link } from 'react-router-dom';
import React from 'react';

const Home = () =>{
    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/movies">Movies</Link>
        </div>
        
    )
}
export default Home;