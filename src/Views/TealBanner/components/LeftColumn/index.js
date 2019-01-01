import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import DegreeBlock from './DegreeBlock';
import TechnicalSkills from './TechnicalSkills';
import Interests from './Interests';

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
    const { summary, degrees, skills } = this.props.data;
    return (
      <div style={container}>
        <SectionHeader>PROFESSIONAL PROFILE</SectionHeader>
        <SectionText>{summary}</SectionText>
        <SectionHeader>EDUCATION</SectionHeader>
        {degrees.map(degree => <DegreeBlock data={degree} />)}
        <SectionHeader>TECHNICAL SKILLS</SectionHeader>
        <TechnicalSkills data={skills} />
        <SectionHeader>INTERESTS</SectionHeader>
        <Interests />
      </div>
    );
  }
}
