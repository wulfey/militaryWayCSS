import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import { BLT, defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';


const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '100%',
  textAlign     : 'left',
};
const skillRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'flex-start',
  width         : '100%',
};
const skillText = {
  fontSize  : 22,
  fontWeight: FONT_WEIGHTS.thin,
  lineHeight: 1.6,
  textAlign : 'left',
  width     : 200,
};
const ratingContainer = {
  display       : 'flex',
  alignItems    : 'center',
  flexDirection : 'row',
  justifyContent: 'flex-start',
  width         : '60%',
};

const filledBoxStyle = {
  height         : 24,
  width          : 24,
  backgroundColor: COLORS.TEAL,
  borderStyle    : 'solid',
  borderWidth    : 1,
  borderColor    : COLORS.TEAL,
  margin: 5,
};
const FilledBox = () => <div style={filledBoxStyle} />;

const emptyBoxStyle = {
  ...filledBoxStyle,
  backgroundColor: COLORS.WHITE,
};
const EmptyBox = () => <div style={emptyBoxStyle} />;

const BoxRow = rating => {
  const ary = [];
  let i = 0;
  for (i; i < rating; i += 1) {
    ary.push(FilledBox);
  }
  while (i < 6) {
    ary.push(EmptyBox);
    i += 1;
  }
  return ary;
};

export default class TechnicalSkills extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={container}>
        {data && data.map(({ string, rating }) => (
          <div style={skillRow}>
            <div style={skillText}>{string}</div>
            <div style={ratingContainer}>{BoxRow(rating).map(boxFunc => boxFunc())}</div>
          </div>
        ))}
      </div>
    );
  }
}
