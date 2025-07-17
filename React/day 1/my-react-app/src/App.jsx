import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";
import BookMovie from "./components/BookMovie.jsx";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> | 
      <Link to="/movies">Movies</Link> | 
      <Link to="/book-movie">Book Movie</Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/book-movie" element={<BookMovie />} />

      </Routes>
    </BrowserRouter>
  );
 
}

 export default App;