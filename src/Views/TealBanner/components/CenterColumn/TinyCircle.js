import React, { Component } from 'react';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const DIM = 10;

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


export default class TinyCircle extends Component {
  static getDim(){
    return DIM;
  }
  render() {
    return (
      <div style={container}/>
    );
  }
}
