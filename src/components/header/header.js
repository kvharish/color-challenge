import React from 'react';

import classes from './header.module.css';
import { generateRandomHexColor } from '../../util/util';

const Header = () => (
  <header className={classes.header}>
    <h1>
      <span style={{'color': generateRandomHexColor()}}>C</span>
      <span style={{'color': generateRandomHexColor()}}>o</span>
      <span style={{'color': generateRandomHexColor()}}>l</span>
      <span style={{'color': generateRandomHexColor()}}>o</span>
      <span style={{'color': generateRandomHexColor()}}>r</span>
      <span>&nbsp;</span>
      <span style={{'color': generateRandomHexColor()}}>C</span>
      <span style={{'color': generateRandomHexColor()}}>h</span>
      <span style={{'color': generateRandomHexColor()}}>a</span>
      <span style={{'color': generateRandomHexColor()}}>l</span>
      <span style={{'color': generateRandomHexColor()}}>l</span>
      <span style={{'color': generateRandomHexColor()}}>e</span>
      <span style={{'color': generateRandomHexColor()}}>n</span>
      <span style={{'color': generateRandomHexColor()}}>g</span>
      <span style={{'color': generateRandomHexColor()}}>e</span>
    </h1>
  </header>
);

export default React.memo(Header);
