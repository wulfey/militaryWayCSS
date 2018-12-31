import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import { BLT, defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const schoolRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'space-between',
  width         : '100%',
};
const schoolStyle = {
  fontSize  : 32,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: 1.4,
  textAlign : 'left',
};
const degreeStyle = {
  ...schoolStyle,
  textAlign: 'right',
};
const bulletStyle = {
  ...schoolStyle,
  fontSize  : 22,
  fontWeight: FONT_WEIGHTS.medium,
  lineHeight: 1.4,
  marginTop: 3,
  marginBottom: 3,
};
const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '100%',
  textAlign     : 'left',
  paddingRight  : 20,
};

export default class LeftColumn extends Component {
  render() {
    const { school, degree, bullets } = this.props.data;
    return (
      <div style={container}>
        <div style={schoolRow}>
          <div style={schoolStyle}>{school}</div>
          <div style={degreeStyle}>{degree}</div>
        </div>
        {bullets.map(bull => <div style={bulletStyle}>{bull}</div>)}
      </div>
    );
  }
}
