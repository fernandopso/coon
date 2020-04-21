import React from 'react';
import './Answer.css'

class Answer extends React.Component {
  refreshPage() {
    window.location.reload(false);
  }

  answerForTitle() {
    return <h4 className={this.props.answer.title == this.props.movie.title ? 'right' : 'wrong'}>{this.props.answer.title}</h4>
  }

  answerForDirector() {
    return <h4 className={this.props.answer.director == this.props.movie.director.name ? 'right' : 'wrong'}>{this.props.movie.director.name}</h4>
  }

  answerForActor() {
    return <h4 className={this.props.answer.actor == this.props.movie.actors[0].name ? 'right' : 'wrong'}>{this.props.movie.actors[0].name}</h4>
  }

  answerForCharacter() {
    return <h4 className={this.props.answer.character == this.props.movie.actors[0].character ? 'right' : 'wrong'}>{this.props.movie.actors[0].character}</h4>
  }

  answerForYear() {
    return <h4 className={this.props.answer.year == this.props.movie.year ? 'right' : 'wrong'}>{this.props.movie.year}</h4>
  }

  render() {
    return (
      <div className="center">
        <h3 className="question">Respostas</h3>
        {this.answerForTitle()}
        {this.answerForDirector()}
        {this.answerForActor()}
        {this.answerForCharacter()}
        {this.answerForYear()}
        <p>
          <button className="start" onClick={() => this.refreshPage()}>Jogar Novamente</button>
        </p>
      </div>
    )
  }
}

export default Answer;