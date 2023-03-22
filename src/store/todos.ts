import { create } from 'zustand'

type Todo = {
  title: string
  isDone: boolean
}

type State = {
  todos: Todo[]
}

type Action = {
  onCreateTodo: (todo: string) => void
  onConcludeTodo: (todo: Todo) => void
  onRemoveTodo: (todo: Todo) => void
}

export const useStore = create<State & Action>((set) => ({
  todos: [],
  onCreateTodo: (title) =>
    set((state) => {
      const newTodo = {
        title,
        isDone: false,
      }

      return {
        todos: [...state.todos, newTodo],
      }
    }),
  onConcludeTodo: (todo: Todo) =>
    set((state) => {
      const todoIndex = state.todos.findIndex(
        (item) => item.title === todo.title
      )

      state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone

      return {
        todos: [...state.todos],
      }
    }),
  onRemoveTodo: (todo: Todo) =>
    set((state) => {
      const filterTodos = state.todos.filter(
        (item) => item.title !== todo.title
      )

      return {
        todos: filterTodos,
      }
    }),
}))
