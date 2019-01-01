import React, { Component } from 'react';
import { PDF_HEIGHT } from '../../../components/Layout';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

const container = {
  display        : 'flex',
  alignItems     : 'flex-start',
  flexDirection  : 'row',
  justifyContent : 'space-between',
  width          : '100%',
  height         : PDF_HEIGHT * (80 / 100),
  backgroundColor: COLORS.WHITE,
};


export default class WhiteCenterContainer extends Component {
  render() {
    return (
      <div style={container}>
        <LeftColumn data={this.props.data}/>
        <CenterColumn />
        <RightColumn data={this.props.data}/>
      </div>
    );
  }
}
