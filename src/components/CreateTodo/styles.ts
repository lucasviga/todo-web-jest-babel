import { styled } from '../../config/stitches'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '2.5rem',
  marginBottom: '1rem',
})

export const Input = styled('input', {
  background: 'none',
  border: '1px solid $purple500',
  height: '100%',
  width: '100%',
  padding: '0 1rem',
  borderRadius: '0.625rem',
  color: '$purple500',

  '&:not(:last-child)': {
    marginRight: '0.4rem',
  },

  '&:focus-visible, &:active': {
    border: '1px solid #3E1671',
  },
})

export const CreateTodoBtn = styled('button', {
  background: '$purple500',
  color: '$white',
  borderRadius: '0.625rem',
  height: '100%',
  width: '10%',
  transition: 'all 0.45s',

  '&:hover': {
    background: '#3E1671',
  },

  '@media(max-width: 600px)': {
    width: '15%',
  },
})
