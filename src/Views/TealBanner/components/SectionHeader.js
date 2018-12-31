import React, { Component } from 'react';

import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  ...defaultFont,
  width: "100%",
  height: 80,
  lineHeight: 80 / 40,
  textAlign: 'left',
  fontSize: 40,
  letterSpacing: 1.5,
  fontWeight: FONT_WEIGHTS.medium,
  color: COLORS.FONT,
};

export default class SectionHeader extends Component {
  render() {
    return (
      <div style={container}>
        {this.props.children}
      </div>
    );
  }
}
