import React from 'react';

import classes from './score.module.css';

const Score = props => (
  <div className={classes.score}>
    <div>
      <span>Correct:</span>
      <span>{props.totalCorrect}</span>
    </div>
    <div>
      <span>Total:</span>
      <span>{props.totalQuestions}</span>
    </div>
    <div>
      <span>Success Rate:</span>
      {props.totalQuestions ? <span>{`${Math.round((props.totalCorrect / props.totalQuestions) * 100)}%`}</span> : <span>0%</span>}
    </div>
  </div>
);

export default React.memo(Score, (prevProps, nextProps) => prevProps.totalCorrect === nextProps.totalCorrect &&
                                                           prevProps.totalQuestions === nextProps.totalQuestions);
