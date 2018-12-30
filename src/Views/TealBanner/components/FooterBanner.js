import React, { Component } from 'react';
import CONTACT_INFO from '../../../data/contactInfo';
import { defaultFont, LATO_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const { name, phone, address, email } = CONTACT_INFO;
const container = {
  display        : 'flex',
  alignItems     : 'center',
  flexDirection  : 'column',
  justifyContent : 'flex-start',
  width          : '100%',
  height         : '4%',
  backgroundColor: COLORS.TEAL,
};

export default class FooterBanner extends Component {
  render() {
    return (
      <div style={container}/>
    );
  }
}
