import { styled } from '../../../config/stitches'

export const Container = styled('li', {
  background: '$purple800',
  borderRadius: '0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.375rem',
  height: '4.6875rem',
  color: '$purple500',

  '&.todo-done': {
    color: '$green500',
    textDecoration: 'line-through',
  },

  '&:not(:last-child)': {
    marginBottom: '1rem',
  },

  '> span': {
    display: 'flex',
    gap: '1rem',
  },
})
