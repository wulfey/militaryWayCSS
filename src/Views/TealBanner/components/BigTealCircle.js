import React, { Component } from 'react';
import CONTACT_INFO from '../../../data/contactInfo';
import { defaultFont, LATO_WEIGHTS, centerColumn, COLORS } from '../../../components/CommonStyle';

const DIM = 35;

const container = {
  width          : DIM,
  height         : DIM,
  backgroundColor: COLORS.TEAL,
  borderWidth    : 1,
  borderStyle    : 'solid',
  borderColor    : COLORS.TEAL,
  borderRadius   : DIM,
};
export default class BigTealCircle extends Component {
  render() {
    return (
      <div style={container} />
    );
  }
}
