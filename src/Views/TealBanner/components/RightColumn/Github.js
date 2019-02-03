import React, { Component } from 'react';
import { BlueGithub } from '../../../../components/icons';
import { COLORS, defaultFont, FONT_WEIGHTS } from '../../../../components/CommonStyle';

const iconRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'flex-start',
  width         : 600,
  height: 150,
  position: 'absolute',
  bottom        : 100,
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

const gitHub = 'https://github.com/wulfey';

export default class Github extends Component {
  render() {
    return (
      <div style={iconRow}>
        <BlueGithub/>
        <div style={linkText}>{gitHub}</div>
      </div>
    );
  }
}
