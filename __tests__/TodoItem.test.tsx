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

  it('should show undo button if it is marked as done', async () => {
    expect(screen.getByTestId('undo')).toBeInTheDocument()
  })

  it('should be able to undo a task as done', async () => {
    const { rerender } = renderUtils

    const undoBtn = screen.getByTestId('undo')
    await userEvent.click(undoBtn)

    expect(todoStore.result.current.todos[0].isDone).toBeFalsy()

    rerender(<TodoItem todo={{ ...mockTodo, isDone: false }} />)

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('should be able to delete a todo', async () => {
    const { rerender } = renderUtils
    rerender(<TodoItem todo={{ ...mockTodo, isDone: false }} />)

    const removeBtn = screen.getByTestId('remove')

    await userEvent.click(removeBtn)

    expect(todoStore.result.current.todos).toHaveLength(0)
  })
})
