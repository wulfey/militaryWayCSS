import React, { Component } from 'react';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const DIM = 35;

const container = {
  width          : DIM,
  height         : DIM,
  backgroundColor: COLORS.TRUE_BLUE,
  borderWidth    : 1,
  borderStyle    : 'solid',
  borderColor    : COLORS.TRUE_BLUE,
  borderRadius   : DIM,
  position       : 'relative',
  marginTop: 8,
  marginBottom: 8,
};
const innerCircle = {
  width          : DIM * (3 / 8),
  height         : DIM * (3 / 8),
  backgroundColor: COLORS.WHITE,
  borderWidth    : 1,
  borderStyle    : 'solid',
  borderColor    : COLORS.WHITE,
  borderRadius   : DIM,
  position       : 'absolute',
  left           : DIM * (5 / 16) - 1,
  top            : DIM * (5 / 16) - 1,
};

export default class BigTealCircle extends Component {
  static getDim(){
    return DIM;
  }
  render() {
    return (
      <div style={container}>
        <div style={innerCircle} />
      </div>
    );
  }
}
