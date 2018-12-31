import React, { Component } from 'react';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';
import BigTealCircle from './BigTealCircle';
import TinyCircle from './TinyCircle';
import SmallTealCircle from './SmallTealCircle';
import { PDF_HEIGHT } from '../../../../components/Layout';

const CIRCLE_HEIGHT = PDF_HEIGHT * 0.8;
const BIG_HEIGHT = BigTealCircle.getDim() + 16;
const MED_HEIGHT = SmallTealCircle.getDim() + 16;
const SML_HEIGHT = TinyCircle.getDim() + 16;

const container = {
  display       : 'flex',
  alignItems    : 'center',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '6%',
  paddingTop    : BIG_HEIGHT * 2,
};

export default class RightColumn extends Component {
  buildCircleArray(){
    let spaceLeft = CIRCLE_HEIGHT - BIG_HEIGHT;
    let mediumsLeft = 6;
    let i = 0;
    const circles = [];
    while (spaceLeft >= SML_HEIGHT * 2) {
      if (i % 6 === 0 && mediumsLeft > 0 && i > 0) {
        circles.push(<SmallTealCircle />);
        mediumsLeft -= 1;
        spaceLeft = spaceLeft - MED_HEIGHT;
      } else {
        circles.push(<TinyCircle />);
        spaceLeft = spaceLeft - SML_HEIGHT;
      }
      i += 1;
    }
    return circles;
  }

  render() {
    const circles = this.buildCircleArray();

    return (
      <div style={container}>
        <BigTealCircle />
        {circles.map(circle => circle)}
      </div>
    );
  }
}
