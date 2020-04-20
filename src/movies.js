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
    this.movie = movies[this.movieId]
    this.randomIds = RandomNumbers(this.movieId, this.length)
  }

  render() {
    return (
      <div>
        <Carousel movie={this.movie} />
        <Questions movie={this.movie} randomMovies={this.randomIds} />
      </div>
    )
  };
}

export default Movies;