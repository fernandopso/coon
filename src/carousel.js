import React from 'react';
import './carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.totalPictures = this.props.movie.pictures.length
    this.state = {
      imgDisplayed: 0
    }
  };

  renderImage(pic, i) {
    return (
      <figure className={i == this.state.imgDisplayed ? 'show' : 'hide'}>
        <img className="center" src={pic.src} alt="" />
      </figure>
    )
  };

  nextImage() {
    if (this.state.imgDisplayed < this.totalPictures) {
      return this.state.imgDisplayed + 1
    }
  };

  prevImage() {
    if (this.state.imgDisplayed !== 0) {
      return this.state.imgDisplayed - 1
    }
  };

  render() {
    return (
      <div className="slideshow">
        {this.props.movie.pictures.map((pic, i) => this.renderImage(pic, i))}
        <span className="prev" onClick={() => this.setState({imgDisplayed: this.prevImage()})}>&laquo;</span>
        <span className="next" onClick={() => this.setState({imgDisplayed: this.nextImage()})}>&raquo;</span>
      </div>
    )
  };
}

export default Carousel;