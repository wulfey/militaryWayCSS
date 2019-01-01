import React, { Component } from 'react';

import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  width          : '100%',
  height         : '4%',
  backgroundColor: COLORS.TEAL,
};

export default class FooterBanner extends Component {
  render() {
    return (
      <div style={container}/>
    );
  }
}
