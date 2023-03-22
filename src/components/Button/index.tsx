import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export function Button({ icon, ...props }: ButtonProps) {
  return (
    <Container type="button" {...props}>
      {icon}
    </Container>
  )
}
