import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TmdbAPI from '../../API/TmdbAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const history = useHistory();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await TmdbAPI.getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div className="movie-details">
        {movieDetails && (
          <>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.overview}</p>
            {/* Add more details here */}
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
