// src/components/Cast/Cast.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TmdbAPI from '../../api/ApiTheMovieDB';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const castData = await TmdbAPI.getMovieCredits(movieId);
      setCast(castData);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
