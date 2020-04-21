import React from 'react';
import './questions.css'
import RandomNumbers from './RandomNumbers';
import Answer from './Answer.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.questions = {
      title: "Qual o nome do filme?",
      director: "Quem dirigiu o filme?",
      actor: "Qual ator/atriz participou?",
      character: "Qual o nome da personagem?",
      year: "Em que ano foi produzido?"
    }
    this.state = { display: 'title' }
  }

  renderQuestion(key) {
    if (this.state.display === key) {
      return (
        <div className="center options" key={key}>
          <h3 className="question">{this.questions[key]}</h3>
          {this.randomOptions().map(id => this.answerFor(this.props.movies[id], key))}
        </div>
      )
    }
  }

  randomOptions() {
    return RandomNumbers(this.props.movieId, this.props.maxId).concat(this.props.movieId).sort()
  }

  answerFor(movie, key) {
    return (
      <p>
        <button className="start" onClick={() => this.setState({display: this.nextQuestion(key), [key]: this.valueFor(movie, key)})}>
          {this.valueFor(movie, key)}
        </button>
      </p>
    )
  }

  valueFor(movie, key) {
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
      default: return 'answer';
    }
  }

  render() {
    if (this.state.display == 'answer') {
      return <Answer movie={this.props.movies[this.props.movieId]} answer={this.state}/>
    } else {
      return Object.keys(this.questions).map(key => this.renderQuestion(key))
    }
  }
}

export default Questions;