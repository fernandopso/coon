import React from 'react';
import './questions.css'
import RandomNumbers from './RandomNumbers';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.questions = {
      title: "Qual o nome do filme?",
      director: "Quem dirigiu o filme?",
      actor: "Qual actor participou do filme",
      character: "Qual o nome do personagem?",
      year: "Em que ano foi produzido?"
    }
    this.state = {
      questionDisplayed: 'title'
    }
  }

  renderQuestion(key) {
    if (this.state.questionDisplayed === key) {
      return (
        <div key={key}>
          <h3 className="question">{this.questions[key]}</h3>
          {this.randomOptions().map(id => this.buttonFor(this.props.movies[id], key))}
        </div>
      )
    }
  }

  randomOptions() {
    return RandomNumbers(this.props.movieId, this.props.maxId).concat(this.props.movieId).sort()
  }

  buttonFor(movie, key) {
    return (
      <p>
        <button className="start" onClick={() => this.setState({questionDisplayed: this.nextQuestion(key)})}>
          {this.answerFor(movie, key)}
        </button>
      </p>
    )
  }

  answerFor(movie, key) {
    switch(key) {
      case 'title': return movie.title;
      case 'director': return movie.director.name;
      case 'actor': return movie.actors[0].name;
      case 'character': return movie.actors[0].character;
      case 'year': return movie.year;
    }
  }

  nextQuestion(key) {
    switch(key) {
      case 'title': return 'director';
      case 'director': return 'actor';
      case 'actor': return 'character';
      case 'character': return 'year';
    }
  }

  render() {
    return (
      <div className="center options">
        {Object.keys(this.questions).map(key => this.renderQuestion(key))}
      </div>
    )
  }
}

export default Questions;