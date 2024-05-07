import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

//import MoviesList from '../MoviesList/MoviesList';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" exact component={MovieDetails} />
        <Route path="/movies/:movieId/cast" exact component={Cast} />
        <Route path="/movies/:movieId/reviews" exact component={Reviews} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
