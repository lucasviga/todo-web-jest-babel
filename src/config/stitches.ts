import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      purple500: '#9e78cf',
      purple800: '#15101c',
      purple900: '#0d0714',
      green500: '#78cfb0',
      gray500: '#777777',
    },
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body': {
    height: '100%',
    background: '$purple900',
  },

  '#root': {
    height: '100%',
    fontFamily: "'Rubik', sans-serif",
  },

  button: {
    outline: 0,
    border: 0,
    background: 'none',
    cursor: 'pointer',
  },
})
