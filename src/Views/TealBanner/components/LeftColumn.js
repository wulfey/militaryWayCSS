import React, { Component } from 'react';
import CONTACT_INFO from '../../../data/contactInfo';
import { defaultFont, LATO_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '45%',
  height        : '100%',
  position      : 'absolute',
  top           : 0,
  left          : 0,
};

export default class LeftColumn extends Component {
  render() {
    return (
      <div style={container}>
        <div>PROFESIONAL PROFILOE</div>
        <div>many text</div>
        <div>EDUMCATION</div>
        <div>many text</div>
        <div>many text</div>
        <div>COOL LINKS AND ICONS</div>
        <div>many text</div>
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
