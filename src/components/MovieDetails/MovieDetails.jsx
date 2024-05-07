import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div className="movie-details">{/* Movie details content here */}</div>
    </div>
  );
};

export default MovieDetails;
