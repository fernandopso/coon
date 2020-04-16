import React from 'react';
import movies from './movies.json';
import Carousel from './carousel.js'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.random_id = Math.round(Math.random() * movies.length)
  }

  render() {
    return (
      <Carousel movie={movies[this.random_id]} />
    )
  };
}

export default Movies;