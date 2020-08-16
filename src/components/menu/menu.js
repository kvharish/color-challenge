import React from 'react';

import classes from './menu.module.css';

const Menu = (props) => (
  <div className={classes.menu}>
    <span onClick={() => props.history.push('/')}>End</span>
    <span onClick={() => props.history.go(0)}>Restart</span>
    <span className={!props.showAnswer ? classes.disabled : null} onClick={props.showNextQuestion}>Next</span>
  </div>
);

export default Menu;
