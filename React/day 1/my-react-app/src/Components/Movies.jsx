import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../stores/userStore';

const MovieList = [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
    { id: 3, title: "The Dark Knight" },
]

const Movies = () =>{
    const navigate = useNavigate();
    const setSelectedMovie = 
        useUserStore((state) => state.setSelectedMovie);


    return(
        <div>
            <h1>Now Showing Movies</h1>
            <ul>
                {MovieList.map((movie) => (
                    <li key={movie.id} onClick = {(e) => {
                        setSelectedMovie(movie);
                        navigate('/book-movie');
                    }}>
                        <Link to="/movies">{movie.title}</Link>
                        
                    </li>
                ))}
            </ul>
        </div>
        
    )
}
export default Movies;