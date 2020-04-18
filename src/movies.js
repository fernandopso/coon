import React from 'react';
import movies from './movies.json';
import Carousel from './carousel.js'
import Questions from './questions';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.randomId = Math.round(Math.random() * movies.length)
    this.movie = movies[this.randomId]
  }

  render() {
    return (
      <div>
        <Carousel movie={this.movie} />
        <Questions movie={this.movie} />
      </div>
    )
  };
}

export default Movies;