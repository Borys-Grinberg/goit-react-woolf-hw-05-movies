// src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList'; // Додали імпорт MoviesList
import TmdbAPI from '../../API/TmdbAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await TmdbAPI.getTrendingMovies();
      setTrendingMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} /> {/* Додали MoviesList */}
    </div>
  );
};

export default Home;
