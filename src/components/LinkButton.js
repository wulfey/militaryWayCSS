import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { defaultFont, FONT_WEIGHTS, COLORS } from './CommonStyle';

export default function LinkButton({
  text = 'LEARN MORE',
  href = '/landlord',
  containerStyle = {},
  style = {},
}) {
  const HEIGHT = 31;
  const WIDTH = style.width || containerStyle.width || 180;

  const container = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: HEIGHT * 2.5,
  };

  const localStyleSheet = StyleSheet.create({
    default: {
      lineSpacing: 0,
      lineHeight: HEIGHT / 12.4,
      backgroundColor: COLORS.WHITE,
      color: COLORS.CONSUMER_DARK_BLUE,
      cursor: 'pointer',
      textTransform: 'uppercase',
      display: 'flex',
      verticalAlign: 'middle',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: FONT_WEIGHTS.light,
      height: HEIGHT,
      borderRadius: HEIGHT,
      minWidth: WIDTH,
      maxWidth: WIDTH,
      minHeight: HEIGHT,
      maxHeight: HEIGHT,
      flex: 1,
      textDecoration: 'none',
      borderStyle: 'solid',
      borderWidth: 1,
      zIndex: 20,
      borderColor: COLORS.CONSUMER_DARK_BLUE,
      ':hover': {
        backgroundColor: COLORS.CONSUMER_DARK_BLUE,
        color: COLORS.WHITE,
      },
      '@media (max-width: 818px)': {
        fontSize: 12.4,
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
      },
      ...style,
    },
  });

  return (
    <div style={{ ...container, ...containerStyle }}>
      <a href={href} className={css(localStyleSheet.default)}>{text}</a>
    </div>
  );
}
