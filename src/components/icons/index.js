import React from 'react';

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


