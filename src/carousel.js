import React from 'react';
import './carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.pictures = this.props.movie.pictures.slice(0,5)
    this.state = {
      imgDisplayed: 0
    }
  };

  prevImage() {
    return this.state.imgDisplayed - 1
  };

  prevButton() {
    if (this.state.imgDisplayed !== 0) {
      return <span className="prev" onClick={() => this.setState({imgDisplayed: this.prevImage()})}>&laquo;</span>
    }
  };

  nextImage() {
    return this.state.imgDisplayed + 1
  };

  nextButton() {
    if (this.state.imgDisplayed < this.pictures.length - 1) {
      return <span className="next" onClick={() => this.setState({imgDisplayed: this.nextImage()})}>&raquo;</span>
    }
  };

  renderImage(pic, i) {
    return (
      <figure key={i} className={i === this.state.imgDisplayed ? 'show' : 'hide'}>
        <img className="center crop" src={pic.src} alt="" />
      </figure>
    )
  };

  render() {
    return (
      <div>
        <div className="slideshow">
          {this.pictures.map((pic, i) => this.renderImage(pic, i))}
        </div>
        {this.prevButton()}
        {this.nextButton()}
      </div>
    )
  };
}

export default Carousel;