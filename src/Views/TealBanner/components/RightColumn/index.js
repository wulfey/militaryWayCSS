import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import SectionText from '../SectionText';
import ExperienceBlock from './ExperienceBlock';
import { Spacer, defaultFont, FONT_WEIGHTS, centerColumn, COLORS } from '../../../../components/CommonStyle';

const container = {
  display       : 'flex',
  alignItems    : 'flex-start',
  flexDirection : 'column',
  justifyContent: 'flex-start',
  width         : '46%',
  padding       : 40,
};

export default class RightColumn extends Component {
  render() {
    const { experiences } = this.props.data;
    return (
      <div style={container}>
        <SectionHeader >ENGINEER EXPERIENCE</SectionHeader>
        {experiences.map(experience => <ExperienceBlock data={experience}/>)}
      </div>
    );
  }
}
