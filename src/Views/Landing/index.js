import React, { Component } from 'react';
import LinkButton from '../../components/LinkButton';

export default class Landing extends Component {
  render() {
    return (
      <div >
        LANDING go here!
        <LinkButton text={'Teal Banner'} href={'/TealBanner'} style={{ width: 275 }}/>
      </div>
    );
  }
}
