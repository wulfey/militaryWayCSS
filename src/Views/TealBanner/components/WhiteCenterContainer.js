import React, { Component } from 'react';
import CONTACT_INFO from '../../../data/contactInfo';
import { defaultFont, LATO_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'row',
  justifyContent : 'flex-start',
  width          : '100%',
  height         : '86%',
  backgroundColor: COLORS.WHITE,
};

export default class WhiteCenterContainer extends Component {
  render() {
    return (
      <div style={container}>
        {this.props.children}
      </div>
    );
  }
}
