import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen, renderHook } from '@testing-library/react'

import { useStore } from '../src/store/todos'
import { CreateTodo } from '../src/components/CreateTodo'

const inputValue = 'React JS'

describe('CreateTodo Component', () => {
  it('should create a new todo', async () => {
    const { rerender } = render(<CreateTodo />)

    const todoStore = renderHook(() => useStore())

    const input = screen.getByRole('textbox')
    const btn = screen.getByRole('button')

    await userEvent.type(input, inputValue)
    await userEvent.click(btn)

    expect(todoStore.result.current.todos).toHaveLength(1)

    rerender(<CreateTodo />)
    expect(input).toHaveValue('')
  })

  it('should not be able to create a new todo if input is empty', async () => {
    const mockOnCreateNewTodo = jest.fn()
    render(<CreateTodo />)

    const btnCreateTodo = screen.getByRole('button')
    await userEvent.click(btnCreateTodo)

    expect(mockOnCreateNewTodo).not.toHaveBeenCalled()
  })
})
