import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import ExperienceBlock from './ExperienceBlock';
import { Spacer, defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';
import Github from './Github';

const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '46%',
  height: "100%",
  padding       : 40,
  position: 'relative',
};

export default class RightColumn extends Component {
  render() {
    const { experiences } = this.props.data;
    return (
      <div style={container}>
        <SectionHeader >ENGINEER EXPERIENCE</SectionHeader>
        {experiences.map(experience => <ExperienceBlock data={experience}/>)}
        <Spacer height={50}/>
        <Github/>
      </div>
    );
  }
}
