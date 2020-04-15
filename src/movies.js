import React from 'react';
import movies from './movies.json';
import './carousel.css'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgDisplayed: 0
    }
  }

  renderImage(pic, index) {
    return (
      <figure className={index == this.state.imgDisplayed ? 'show' : 'hide'}>
        <img className="center" src={pic.src} />
      </figure>
    )
  };

  nextImage(lastPicture) {
    if (this.state.imgDisplayed < lastPicture) {
      return this.state.imgDisplayed + 1
    }
  };

  prevImage() {
    if (this.state.imgDisplayed !== 0) {
      return this.state.imgDisplayed - 1
    }
  };

  slideShow(pictures) {
    return (
      <div className="slideshow">
        {pictures.map((pic, index) => this.renderImage(pic, index))}
        <span className="prev" onClick={() => this.setState({imgDisplayed: this.prevImage()})}>&laquo;</span>
        <span className="next" onClick={() => this.setState({imgDisplayed: this.nextImage(pictures.length)})}>&raquo;</span>
      </div>
    )
  };

  renderMovie(movie) {
    return (
      <div>
        {this.slideShow(movie.pictures)}
      </div>
    )
  };

  render() {
    return (
      <div>{this.renderMovie(movies[4])}</div>
    )
  };
}

export default Movies;