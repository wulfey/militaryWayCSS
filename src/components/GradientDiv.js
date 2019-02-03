import React from 'react';
import styled from 'styled-components';
import { centerColumn, COLORS } from './CommonStyle';

const genColorString = colors => {
  let str = '';
  colors.forEach(color => {
    str = str.concat(`${color}, `);
  });
  return str.slice(0, -2);
};

const container = {
  ...centerColumn,
  height: "100%",
  justifyContent: 'flex-start',
  position: 'relative',
};

export default function (props) {
  const {
    colors = [COLORS.WHITE, COLORS.ERROR_RED],
    angle = '45deg',
    gradient = 'linear-gradient',
    children,
  } = props;

  const minTwoColors = colors.length < 2 ? [COLORS.WHITE, ...colors] : colors;
  const GradientDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${gradient}(${angle}, ${genColorString(minTwoColors)});
  `;

  return (
    <div style={container}>
      <GradientDiv >
        {children}
      </GradientDiv>
    </div>
  );
}
