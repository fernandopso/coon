import React from 'react';
import movies from './movies.json'

class Movies extends React.Component {
  renderPicture(picture) {
    return (
      <div>
        <img src={picture.src} />
      </div>
    )
  };

  renderMovie(movie) {
    return (
      <div>
        {movie.title}
        {movie.pictures.map(picture => this.renderPicture(picture))}
      </div>
    )
  };

  render() {
    return (
      <div>{movies.map(movie => this.renderMovie(movie))}</div>
    )
  };
}

export default Movies;