import React, { Component } from 'react';

import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '48%',
  padding       : 20,
};

export default class RightColumn extends Component {
  render() {
    return (
      <div style={container}>
        <div>SOFTWARE EXPERIENCE</div>
        <div>many text</div>
        <div>EDUMCATION</div>
        <div>many text</div>
        <div>many text</div>
        <div>COOL LINKS AND ICONS</div>
        <div>many text</div>
        <div>many text</div>
        <div>SKILLZ FOR BILLZ</div>
        <div>many text</div>
        <div>many text</div>
        <div>many text</div>
      </div>
    );
  }
}
