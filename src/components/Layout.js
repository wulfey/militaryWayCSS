import React, { Component } from 'react';
import COLORS from './Colors';

const PDF_WIDTH = 1394;
const PDF_HEIGHT = 1973;

const layoutStyle = {
  display        : 'flex',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  alignItems     : 'center',
  width          : PDF_WIDTH,
  height         : PDF_HEIGHT,
  backgroundColor: COLORS.LIGHT_LABEL,
  borderWidth    : 1,
  borderColor    : COLORS.ERROR_RED,
  borderStyle    : 'solid',
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
