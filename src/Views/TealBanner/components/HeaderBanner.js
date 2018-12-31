import React, { Component } from 'react';
import { PDF_HEIGHT } from '../../../components/Layout';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';


const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  width          : '100%',
  height         : PDF_HEIGHT / 10,
  backgroundColor: COLORS.TEAL,
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
  fontSize     : 24,
  height       : '30%',
  width        : '100%',
  textAlign    : 'center',
  fontWeight   : FONT_WEIGHTS.thin,
};

const BLT = ' • ';

export default class HeaderBanner extends Component {
  render() {
    const { name, phone, address, email } = this.props.data
    return (
      <div style={container}>
        <div style={nameStyle}>{name.toUpperCase()}</div>
        <div style={contactStyle}>{`${phone}${BLT}${address}${BLT}${email}`}</div>
      </div>
    );
  }
}
