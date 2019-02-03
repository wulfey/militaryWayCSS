import React, { Component } from 'react';
import { PDF_HEIGHT } from '../../../components/Layout';
import { BLT, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';
import GradientDiv from '../../../components/GradientDiv';


const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  width          : '100%',
  height         : PDF_HEIGHT / 10,
};
const nameStyle = {
  ...centerColumn,
  color        : COLORS.WHITE,
  letterSpacing: 20,
  fontSize     : 72,
  height       : '70%',
  textAlign    : 'center',
  fontWeight   : FONT_WEIGHTS.black,
};
const contactStyle = {
  ...nameStyle,
  letterSpacing: 0.3,
  fontSize     : 32,
  height       : '30%',
  width        : '100%',
  textAlign    : 'center',
  fontWeight   : FONT_WEIGHTS.thin,
};

export default class HeaderBanner extends Component {
  render() {
    const { name, phone, address, email } = this.props.data;
    return (
      <div style={container}>
        <GradientDiv angle={'75deg'} colors={[COLORS.TRUE_BLUE, COLORS.TRUE_BLUE_DARK]}>
          <div style={nameStyle}>{name.toUpperCase()}</div>
          <div style={contactStyle}>{`${phone}${BLT}${address}${BLT}${email}`}</div>
        </GradientDiv>
      </div>
    );
  }
}
