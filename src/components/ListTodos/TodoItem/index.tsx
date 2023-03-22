import { Check, TrashSimple, ArrowUUpLeft } from 'phosphor-react'
import { useStore } from '../../../store/todos'
import { Button } from '../../Button'
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

      {todo.isDone ? (
        <span>
          <Button
            data-testid="undo"
            onClick={() => onConcludeTodo(todo)}
            icon={<ArrowUUpLeft size={22} />}
          />
        </span>
      ) : (
        <span>
          <Button
            data-testid="done"
            onClick={() => onConcludeTodo(todo)}
            icon={<Check size={22} />}
          />

          <Button
            data-testid="remove"
            onClick={() => onRemoveTodo(todo)}
            icon={<TrashSimple size={22} />}
          />
        </span>
      )}
    </Container>
  )
}
