import axios from 'axios';

const API_KEY = '236da5ba2bdceb8bb441784b05481df2';

const TmdbAPI = {
  getTrendingMovies: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  },

  searchMovies: async query => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  },

  getMovieDetails: async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  },

  getMovieCredits: async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return response.data.cast;
    } catch (error) {
      console.error('Error fetching movie credits:', error);
      return [];
    }
  },

  getMovieReviews: async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
      return [];
    }
  },
};

export default TmdbAPI;
