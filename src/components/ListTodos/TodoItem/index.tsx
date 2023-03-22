import { Check, TrashSimple } from 'phosphor-react'
import { useStore } from '../../../store/todos'
import { Container } from './styles'

interface Todo {
  title: string
  isDone: boolean
}
interface TodoItemProps {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
  const onConcludeTodo = useStore((state) => state.onConcludeTodo)
  const onRemoveTodo = useStore((state) => state.onRemoveTodo)

  return (
    <Container key={todo.title} className={todo.isDone ? 'todo-done' : ''}>
      {todo.title}

      {!todo.isDone && (
        <span>
          <button
            type="button"
            data-testid="done"
            onClick={() => onConcludeTodo(todo)}
          >
            <Check size={22} />
          </button>
          <button
            type="button"
            data-testid="remove"
            onClick={() => onRemoveTodo(todo)}
          >
            <TrashSimple size={22} />
          </button>
        </span>
      )}
    </Container>
  )
}
