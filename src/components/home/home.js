import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './home.module.css';

class Home extends Component {
  state = {
    code: 'hex',
    difficulty: 'easy'
  }

  codeChangeHandler = (event) => {
    this.setState({
      code: event.target.value
    });
  }

  difficultyChangeHandler = (event) => {
    this.setState({
      difficulty: event.target.value
    });
  }

  render = () => {
    return (
      <div className={classes.home}>
        <label>
          Color Code:
          <select value={this.state.code} onChange={this.codeChangeHandler}>
            <option value="hex">Hex</option>
            <option value="rgb">RGB</option>
          </select>
        </label>
        <label>
          Difficulty:
          <select value={this.state.difficulty} onChange={this.difficultyChangeHandler}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <Link to={`/challenge/${this.state.code}/${this.state.difficulty}`}>Start</Link>
      </div>
    );
  }
}

export default Home;
