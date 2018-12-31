import React, { Component } from 'react';

import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  ...defaultFont,
  width: "100%",
  lineHeight: 30 / 25,
  textAlign: 'left',
  fontSize: 25,
  letterSpacing: 0.5,
  fontWeight: FONT_WEIGHTS.light,
  color: COLORS.FONT,
};

export default class SectionText extends Component {
  render() {
    return (
      <div style={container}>
        {this.props.children}
      </div>
    );
  }
}
