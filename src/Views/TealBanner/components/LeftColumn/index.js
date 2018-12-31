import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import DegreeBlock from './DegreeBlock';
import { defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '46%',
  padding       : 40,
};

export default class LeftColumn extends Component {
  render() {
    const { summary, degrees } = this.props.data;
    return (
      <div style={container}>
        <SectionHeader >PROFESSIONAL PROFILE</SectionHeader>
        <SectionText>{summary}</SectionText>
        <SectionHeader >EDUCATION</SectionHeader>
        {degrees.map(degree => <DegreeBlock data={degree}/>)}
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
