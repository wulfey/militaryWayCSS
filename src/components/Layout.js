import React, { Component } from 'react';
import { defaultFont, COLORS } from './CommonStyle';

export const PDF_WIDTH = 1394;
export const PDF_HEIGHT = 1973.2;

const layoutStyle = {
  ...defaultFont,
  display        : 'flex',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  alignItems     : 'center',
  width          : PDF_WIDTH,
  height         : PDF_HEIGHT,
  backgroundColor: COLORS.LIGHT_LABEL,
};


export default class Layout extends Component {
  render() {
    return (
      <div style={layoutStyle}>
        {this.props.children}
      </div>
    );
  }
}
