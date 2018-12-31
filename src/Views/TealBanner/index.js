import React, { Component } from 'react';
import _ from 'lodash';
import HeaderBanner from './components/HeaderBanner';
import WhiteCenterContainer from './components/WhiteCenterContainer';
import getData from '../../data';
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
    const name = _.get(this.props, 'match.params.name') || 'Jason';
    const data = getData(name);
    return (
      <div style={container}>
        <HeaderBanner data={data}/>
        <WhiteCenterContainer data={data}/>
        <FooterBanner />
      </div>
    );
  }
}
