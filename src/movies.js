import React from 'react';
import movies from './movies.json';
import Carousel from './carousel.js'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.movies = {
      total: movies.length,
      sample: movies[3]
    }
  }

  render() {
    return (
      <div>{this.movies.total}</div>
    )
  };
}

export default Movies;