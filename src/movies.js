import React from 'react';
import movies from './movies.json';
import Carousel from './carousel.js'
import Questions from './questions';
import RandomNumbers from './RandomNumbers';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.length = movies.length
    this.movieId = Math.round(Math.random() * this.length)
    this.options = RandomNumbers(this.movieId, this.length - 1).concat(this.movieId).sort()
  }

  render() {
    return (
      <div>
        <Carousel movie={movies[this.movieId]} />
        <Questions movies={movies} options={this.options} />
      </div>
    )
  };
}

export default Movies;