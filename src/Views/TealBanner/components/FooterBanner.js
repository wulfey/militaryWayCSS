import React, { Component } from 'react';
import GradientDiv from '../../../components/GradientDiv';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  width          : '100%',
  height         : '10%',
  backgroundColor: COLORS.TRUE_BLUE,
};

export default class FooterBanner extends Component {
  render() {
    return (
      <div style={container}>
        <GradientDiv angle={'-75deg'} colors={[COLORS.TRUE_BLUE, COLORS.TRUE_BLUE_DARK]}/>
      </div>
    );
  }
}
