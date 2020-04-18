import React from 'react';
import './questions.css'

class Questions extends React.Component {
  render() {
    return (
      <div className="center">
        <button className="start">{this.props.movie.title}</button>
      </div>
    )
  };
}

export default Questions;