import React from 'react';

import classes from './question.module.css';

const Question = props => <div className={classes.question}>Which one among these is {props.randomColor}?</div>;

export default React.memo(Question, (prevProps, nextProps) => prevProps.randomColor === nextProps.randomColor);
