import React from 'react';
import movies from './movies.json';
import Carousel from './carousel.js'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.movieId = Math.round(Math.random() * movies.length)
  }

  render() {
    return (
      <Carousel movie={movies[this.movieId]} />
    )
  };
}

export default Movies;