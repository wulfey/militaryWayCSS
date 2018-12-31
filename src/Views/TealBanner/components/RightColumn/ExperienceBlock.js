import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import { Spacer, BLT, defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const experienceRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'space-between',
  width         : '100%',
};
const leftTextStyle = {
  fontSize  : 32,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: 1.4,
  textAlign : 'left',
};
const dateStyle = {
  ...leftTextStyle,
  textAlign: 'right',
};

const bulletRow = {
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'space-between',
  width         : '100%',
};
const bulletStyle = {
  ...leftTextStyle,
  width    : '100%',
  textAlign: 'justify',
  fontSize   : 22,
  fontWeight : FONT_WEIGHTS.medium,
  lineHeight : 1.4,
  marginTop: 5,
  marginBottom: 5,
};
const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '100%',
  textAlign     : 'left',
};

const sideBulletStyle = {
  ...bulletStyle,
  width: "50%",
  textAlign : 'left',
}

const SidewayBullets = ({left, right}) => (
  <div style={experienceRow}>
    <div style={sideBulletStyle}>{left}</div>
    <div style={sideBulletStyle}>{right}</div>
  </div>
)

export default class LeftColumn extends Component {
  render() {
    const { title, company, description, start, end, bullets, sideBullets } = this.props.data;
    return (
      <div style={container}>

        <div style={experienceRow}>
          <div style={leftTextStyle}>{title.toUpperCase()}</div>
          <div style={dateStyle}>{end || 'PRESENT'}</div>
        </div>
        <div style={experienceRow}>
          <div style={leftTextStyle}>{company}</div>
          <div style={dateStyle}>{start}</div>
        </div>
        <SectionText>{description}</SectionText>
        {bullets && bullets.map(bull => <div style={bulletStyle}>{bull}</div>)}
        {sideBullets && sideBullets.map(bull => SidewayBullets(bull))}
        <Spacer height={15} />
      </div>
    );
  }
}
