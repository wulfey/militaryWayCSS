import React, { Component } from 'react';
import HeaderBanner from './components/HeaderBanner';
import WhiteCenterContainer from './components/WhiteCenterContainer';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import FooterBanner from './components/FooterBanner';

const container = {
  display       : 'flex',
  alignItems    : 'center',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '100%',
  height        : '100%',
};

export default class TealBanner extends Component {
  render() {
    return (
      <div style={container}>
        <HeaderBanner />
        <WhiteCenterContainer>
          <LeftColumn/>
          <RightColumn/>
        </WhiteCenterContainer>
        <FooterBanner />
      </div>
    );
  }
}
