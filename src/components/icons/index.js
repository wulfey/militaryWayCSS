import React from 'react';
import { centerColumn } from '../CommonStyle';

const DIM = 120;

export const BlueBell = ({ style = {} }) => {
  const { height = DIM, width = DIM } = style;
  return (
    <div>
      <img src="/BlueBell.png" height={height} width={width} alt="BlueBell" />
    </div>
  );
};

export const BlueCook = ({ style = {} }) => {
  const { height = DIM, width = DIM } = style;
  return (
    <div>
      <img src="/BlueCook.png" height={height} width={width} alt="BlueCook" />
    </div>
  );
};

export const BlueMechanicus = ({ style = {} }) => {
  const { height = DIM, width = DIM } = style;
  return (
    <div>
      <img src="/BlueMechanicus.png" height={height} width={width} alt="BlueMechanicus" />
    </div>
  );
};

export const BlueLinkedIn = ({ style = {} }) => {
  const { height = DIM, width = DIM } = style;
  return (
    <div>
      <img src="/BlueLinkedIn.png" height={height} width={width} alt="BlueLinkedIn" />
    </div>
  );
};


export const BlueGithub = ({ style = {} }) => {
  const { height = DIM - 20, width = DIM - 20 } = style;
  return (
    <div style={{...centerColumn, width: DIM, height: DIM}}>
      <img src="/BlueGithub.png" height={height} width={width} alt="BlueGithub" />
    </div>
  );
};


