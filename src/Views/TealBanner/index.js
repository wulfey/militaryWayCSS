import React, { Component } from 'react';
import HeaderBanner from './components/HeaderBanner';
import WhiteCenterContainer from './components/WhiteCenterContainer';

import FooterBanner from './components/FooterBanner';

const container = {
  display       : 'flex',
  alignItems    : 'center',
  flexDirection : 'column',
  justifyContent: 'space-between',
  width         : '100%',
  height        : '100%',
};

export default class TealBanner extends Component {
  render() {
    return (
      <div style={container}>
        <HeaderBanner />
        <WhiteCenterContainer />
        <FooterBanner />
      </div>
    );
  }
}
