import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import LinkButton from '../../components/LinkButton';

export default class Landing extends Component {
  render() {
    return (
      <div >
        LANDING go here!
        <LinkButton text={'Teal Banner Jason'} href={'/TealBanner/Jason'} style={{ width: 275 }}/>
        <LinkButton text={'Teal Banner Pat'} href={'/TealBanner/Patrick'} style={{ width: 275 }}/>

      </div>
    );
  }
}
