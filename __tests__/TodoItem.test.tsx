import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, renderHook, screen } from '@testing-library/react'
import { useStore } from '../src/store/todos'
import { TodoItem } from '../src/components/ListTodos/TodoItem'

const mockTodo = {
  title: 'React JS',
  isDone: false,
}

let renderUtils
let todoStore

describe('TodoItem Component', () => {
  beforeEach(() => {
    renderUtils = render(<TodoItem todo={mockTodo} />)

    todoStore = renderHook(() => useStore())
    todoStore.result.current.todos = [mockTodo]
  })

  it('should be able to mark todo as done', async () => {
    const { rerender } = renderUtils

    const doneBtn = screen.getByTestId('done')
    await userEvent.click(doneBtn)

    expect(todoStore.result.current.todos[0].isDone).toBeTruthy()

    rerender(<TodoItem todo={{ ...mockTodo, isDone: true }} />)

    expect(screen.getByText(/react js/i)).toHaveClass('todo-done')
  })

  it('should not show button actions if it is marked as done', async () => {
    const doneBtn = screen.queryByTestId('done')
    const removeBtn = screen.queryByTestId('remove')

    expect(doneBtn).not.toBeInTheDocument()
    expect(removeBtn).not.toBeInTheDocument()
  })

  it('should be able to delete a todo', async () => {
    const { rerender } = renderUtils
    rerender(<TodoItem todo={{ ...mockTodo, isDone: false }} />)

    const removeBtn = screen.getByTestId('remove')

    await userEvent.click(removeBtn)

    expect(todoStore.result.current.todos).toHaveLength(0)
  })
})
