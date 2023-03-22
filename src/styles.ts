import { styled } from './config/stitches'

export const Container = styled('main', {
  background: '$purple900',
  height: '100%',
})

export const Content = styled('div', {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '5rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h1: {
    color: '$white',
    fontSize: '1.2rem',
    marginBottom: '0.6rem',
    fontWeight: '400',
  },
})
