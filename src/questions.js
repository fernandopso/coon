import React from 'react';
import './questions.css'

class Questions extends React.Component {
  renderButton(movie) {
    return (
      <p>
        <button className="start">{movie.title}</button>
      </p>
    )
  };

  render() {
    return (
      <div className="center options">
        {this.props.options.map(id => this.renderButton(this.props.movies[id]))}
      </div>
    )
  };
}

export default Questions;