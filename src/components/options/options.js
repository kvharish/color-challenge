import React from 'react';

import classes from './options.module.css';
import Option from '../option/option';

const Options = props => (
  <div className={classes.options}>
    { props.optionsElement.map(option => <Option optionColor={option}
                                                 key={option.color}
                                                 onOptionClicked={props.optionClickHandler}
                                                 showAnswer={props.showAnswer} />) }
  </div>
);

export default React.memo(Options, (prevProps, nextProps) => prevProps.optionsElement === nextProps.optionsElement &&
                                                             prevProps.showAnswer === nextProps.showAnswer);
