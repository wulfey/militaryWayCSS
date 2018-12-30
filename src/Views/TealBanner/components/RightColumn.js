import React, { Component } from 'react';
import CONTACT_INFO from '../../../data/contactInfo';
import { defaultFont, LATO_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';
import BigTealCircle from './BigTealCircle';
import SmallTealCircle from './SmallTealCircle';
const container = {
  display        : 'flex',
  alignItems     : 'flex-start',
  flexDirection  : 'column',
  justifyContent :  'flex-start',
  width          : '53%',
  height         : '100%',
};

export default class RightColumn extends Component {
  render() {
    return (
      <div style={container}>
        <div>SOFTWARE EXPERIENCE</div>
        <BigTealCircle />
        <div>many text</div>
        <div>EDUMCATION</div>
        <div>many text</div>
        <div>many text</div>
        <div>COOL LINKS AND ICONS</div>
        <SmallTealCircle />
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
