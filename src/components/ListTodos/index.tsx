import { TodoItem } from './TodoItem'

interface Todo {
  title: string
  isDone: boolean
}

interface ListTodosProps {
  title: string
  todos: Todo[]
}

export function ListTodos({ title, todos }: ListTodosProps) {
  return (
    <div>
      <h1>
        {title} - {todos.length}
      </h1>

      {todos.map((todo) => (
        <TodoItem key={todo.title} todo={todo} />
      ))}
    </div>
  )
}
