import React from 'react';

export const COLORS = {
  ALMOST_WHITE             : '#DEEBFA',
  BLACKISH                 : '#1A173B',
  KEYO_BABY_BLUE           : '#B4D5FF',
  KEYO_BLUE                : '#3473E6',
  KEYO_LIGHT_BLUE          : '#0079FF',
  KEYO_MEDIUM_BLUE         : '#0077FF',
  KEYO_HIGHLIGHT_BLUE      : '#0099FF',
  ORANGE                   : '#F5A623',
  LINE_SEPERATOR           : '#E6EAEE',
  OLD_FONT                 : '#B4BAC6',
  BOLD_TEXT                : '#3B3B3B',
  FONT                     : '#4C4C4C',
  LABEL_FONT               : '#6E6E6E',
  LIGHT_LABEL              : '#AAA',
  DARKER_LABEL_FONT        : '#5D5D5D',
  DARKER_FONT              : '#0209A4',
  FONT_LIGHTER             : '#D8D8D8',
  FORM_BACKGROUND          : '#FAFBFC',
  NAVIGATION_ICON          : '#C0C5D2',
  ERROR_RED                : '#F44336',
  WHITE                    : '#FFFFFF',
  LIGHT_BORDER             : '#EBEDF8',
  CHARCOAL_TEXT            : '#4C4C4C',
  GREEN                    : '#7ED321',
  GOLD                     : '#FEE07D',
  DASHED_GREY              : '#B2B2B2',
  CONSUMER_DARK_BLUE       : '#1B264F',
  CONSUMER_TEXT_BLUE       : '#3382E1',
  CONSUMER_BABY_BLUE       : '#68B0FD',
  CONSUMER_LIGHT_BACKGROUND: '#FAFAFA',
  DATA_LINK                : '#37FFC6',
  LANDLORD_GREY_BACKGROUND : '#EDEDED',
  LANDLORD_DESC_TEXT       : '#77787B',
  LANDLORD_DARK_DESC_TEXT  : '#B9B9B',
  LANDLORD_BULLET_TEXT     : '#A4A4A',
  LOGO_DARK                : '#2C7FE3',
  LOGO_LIGHT               : '#FFF',
  JOBS_TEAL                : '#3FEBFF',
  TEAL                     : '#6B94A6',
};

export function Spacer({height = 10}){
  return (<div style={{width: "100%", height}}/>)
}

export const BLT = ' • ';

export const centerColumn = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
};

export const defaultFont = {
  fontFamily: 'Mukta Mahee',
  fontWeight: 400,
  fontSize: 14,
  letterSpacing: 0.09,
  color: COLORS.FONT,
};

export const FONT_WEIGHTS = {
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  black: 800,
};
