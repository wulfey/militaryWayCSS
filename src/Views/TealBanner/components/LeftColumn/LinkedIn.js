import React, { Component } from 'react';
import { BlueLinkedIn } from '../../../../components/icons';
import { COLORS, defaultFont, FONT_WEIGHTS } from '../../../../components/CommonStyle';

const iconRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'flex-start',
  width         : 600,
  height: 150,
  position      : 'absolute',
  bottom        : 90,
};

const linkText = {
  ...defaultFont,
  width: "100%",
  lineHeight: 30 / 25,
  textAlign: 'justify',
  fontSize: 25,
  letterSpacing: 0.5,
  fontWeight: FONT_WEIGHTS.light,
  color: COLORS.FONT,
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 20,

};

const linkedIn2 = 'https://www.linkedin.com/in/jason-wolfe-44148a69/';
const linkedIn = '/jason-wolfe-44148a69/';

export default class LinkedIn extends Component {
  render() {
    return (
      <div style={iconRow}>
        <BlueLinkedIn />
        <div style={linkText}>{linkedIn}</div>
      </div>
    );
  }
}
