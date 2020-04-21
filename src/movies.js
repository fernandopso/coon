import React from 'react';
import movies from './movies.json';
import Carousel from './carousel.js'
import Questions from './questions';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.length = movies.length
    this.movieId = Math.round(Math.random() * this.length)
  }

  render() {
    return (
      <div>
        <Carousel movie={movies[this.movieId]} />
        <Questions movies={movies} movieId={this.movieId} maxId={this.length - 1} />
      </div>
    )
  };
}

export default Movies;