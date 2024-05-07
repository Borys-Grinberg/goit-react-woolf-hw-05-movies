// src/components/Movies/Movies.js
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <Link to="/movies/search">Search movies</Link>
    </div>
  );
};

export default Movies;
