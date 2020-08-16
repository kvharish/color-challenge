import React from 'react';

import classes from './option.module.css';

const Option = props => (
  <div className={classes.option}
        style={{backgroundColor: props.optionColor.color,
                transform: (props.showAnswer && props.optionColor.isCorrect) ? 'scale(1.3)' : 'scale(1)',
                pointerEvents: props.showAnswer ? 'none' : 'all'}}
        onClick={() => props.onOptionClicked(props.optionColor)}>
    {props.showAnswer ? <span>{props.optionColor.color}</span> : null}
  </div>
);

export default React.memo(Option, (prevProps, nextProps) => prevProps.optionColor === nextProps.optionColor &&
                                                            prevProps.showAnswer === nextProps.showAnswer);
