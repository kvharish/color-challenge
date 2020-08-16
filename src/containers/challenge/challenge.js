import React, { Component, Fragment } from 'react';

import classes from './challenge.module.css';
import { generateRandomHexColor, generateRandomRGBColor } from '../../util/util';
import Question from '../../components/question/question';
import Options from '../../components/options/options';
import Menu from '../../components/menu/menu';
import Score from '../../components/score/score';

class Challenge extends Component {
  state = {
    randomColor: null,
    optionsElement: [],
    totalCorrect: 0,
    totalQuestions: 0,
    showAnswer: false,
    isCorrect: false
  };

  optionsLength = {
    easy: 2,
    medium: 4,
    hard: 6
  };

  prepareOptions = (randomColor) => {
    if(!this.optionsLength[this.props.match.params.difficulty]) {
      this.props.history.push('/');
    }

    const optionsElement = Array(this.optionsLength[this.props.match.params.difficulty]);

    optionsElement[Math.floor(Math.random() * Math.floor(this.optionsLength[this.props.match.params.difficulty]))] = {
      color: randomColor,
      isCorrect: true
    };

    const generateUniqueColor = () => {
      let generatedColor = null;

      while(!generatedColor || (optionsElement.indexOf(generatedColor) !== -1 && generatedColor === randomColor)) {
        generatedColor = (this.props.match.params.code === 'hex') ? generateRandomHexColor() : generateRandomRGBColor();
      }

      return generatedColor;
    };

    for(let optionIndex = 0; optionIndex < this.optionsLength[this.props.match.params.difficulty]; optionIndex++) {
      if(!optionsElement[optionIndex]) {
        optionsElement[optionIndex] = {
          color: generateUniqueColor(),
          isCorrect: false
        }
      }
    }

    return optionsElement;
  }

  showNextQuestion = () => {
    const randomColor = (this.props.match.params.code === 'hex') ? generateRandomHexColor() : generateRandomRGBColor();
    const optionsElement = this.prepareOptions(randomColor);
    this.setState({
      randomColor: randomColor,
      optionsElement: optionsElement,
      showAnswer: false,
      isCorrect: false
    });
  }

  componentDidMount = () => {
    this.showNextQuestion();
  }

  optionClickHandler = (clickedColor) => {
    if(this.state.showAnswer) {
      return;
    }
    if(clickedColor.isCorrect) {
      this.setState({
        totalCorrect: this.state.totalCorrect + 1,
        totalQuestions: this.state.totalQuestions + 1,
        showAnswer: true,
        isCorrect: true
      });
    }
    else {
      this.setState({
        totalQuestions: this.state.totalQuestions + 1,
        showAnswer: true,
        isCorrect: false
      });
    }
  }

  render = () => {
    const mainElements = this.state.randomColor ? (
      <main>
        <Question randomColor={this.state.randomColor}/>
        <Options optionClickHandler={this.optionClickHandler}
                 showAnswer={this.state.showAnswer}
                 optionsElement={this.state.optionsElement} />
      </main>
    ) : null;

    let emoji;

    if(this.state.showAnswer) {
      emoji = this.state.isCorrect ? <span role="img" aria-label="correct">&#128522; &nbsp; Spot on!</span> : <span role="img" aria-label="correct">&#128543; &nbsp; So close!</span>;
    }

    return (
      <Fragment>
        {mainElements}
        {this.state.showAnswer ? <p className={classes.continueMsg}>{emoji}</p> : <p className={`${classes.continueMsg} ${classes.mobile}`}>&nbsp;</p>}
        <Menu history={this.props.history} showAnswer={this.state.showAnswer} showNextQuestion={this.showNextQuestion}/>
        <Score totalCorrect={this.state.totalCorrect} totalQuestions={this.state.totalQuestions} />
      </Fragment>
    );
  }
}

export default Challenge;
