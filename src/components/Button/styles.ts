import { styled } from '../../config/stitches'

export const Container = styled('button', {
  color: '$purple500',
  transition: 'all 0.35s',

  '&:hover': {
    color: '#3E1671',
  },
})
