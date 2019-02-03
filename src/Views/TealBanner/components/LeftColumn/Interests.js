import React, { Component } from 'react';
import { BlueBell, BlueCook, BlueMechanicus } from '../../../../components/icons';


const iconRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'space-around',
  width         : '100%',
};

export default class Interests extends Component {
  render() {
    return (
      <div style={iconRow}>
        <BlueBell/>
        <BlueCook/>
        <BlueMechanicus/>
      </div>
    );
  }
}
