import React from 'react';

class Answer extends React.Component {
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="center">
        <h3 className="question">Respostas</h3>
        <h4>{this.props.answer.title}</h4>
        <p>{this.props.movie.title}</p>
  
        <h4>{this.props.answer.director}</h4>
        <p>{this.props.movie.director.name}</p>
  
        <h4>{this.props.answer.actor}</h4>
        <p>{this.props.movie.actors[0].name}</p>
  
        <h4>{this.props.answer.character}</h4>
        <p>{this.props.movie.actors[0].character}</p>
  
        <h4>{this.props.answer.year}</h4>
        <p>{this.props.movie.year}</p>

        <p>
          <button className="start" onClick={() => this.refreshPage()}>Jogar Novamente</button>
        </p>
      </div>
    )
  }
}

export default Answer;