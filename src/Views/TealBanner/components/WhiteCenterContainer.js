import React, { Component } from 'react';
import CONTACT_INFO from '../../../data/contactInfo';
import { defaultFont, LATO_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'column',
  justifyContent : 'center',
  width          : '100%',
  height         : '86%',
  backgroundColor: COLORS.WHITE,
  position: 'relative',
};

export default class WhiteCenterContainer extends Component {
  render() {
    return (
      <div style={container}>
        <LeftColumn />
        <RightColumn />
      </div>
    );
  }
}
