import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import DegreeBlock from './DegreeBlock';
import TechnicalSkills from './TechnicalSkills';
import Interests from './Interests';
import LinkedIn from './LinkedIn';
import { Spacer, defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '46%',
  padding       : 40,
  height: "100%",
  position: 'relative',
};

export default class LeftColumn extends Component {
  render() {
    const { summary, degrees, skills } = this.props.data;
    return (
      <div style={container}>
        <SectionHeader>PROFESSIONAL PROFILE</SectionHeader>
        <SectionText>{summary}</SectionText>
        <SectionHeader>TECHNICAL SKILLS</SectionHeader>
        <TechnicalSkills data={skills} />
        <SectionHeader>EDUCATION</SectionHeader>
        {degrees.map(degree => <DegreeBlock data={degree} />)}
        <SectionHeader>INTERESTS</SectionHeader>
        <Interests />
        <Spacer height={50}/>
        <LinkedIn/>

      </div>
    );
  }
}
