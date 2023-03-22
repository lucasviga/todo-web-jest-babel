import { useStore } from './store/todos'

import { CreateTodo } from './components/CreateTodo'
import { ListTodos } from './components/ListTodos'
import { globalStyles } from './config/stitches'
import { Container, Content } from './styles'

globalStyles()

function App() {
  const todos = useStore((state) => state.todos)

  const todosInProgress = todos.filter((todo) => todo.isDone !== true)
  const todosDone = todos.filter((todo) => todo.isDone === true)

  return (
    <Container>
      <Content>
        <CreateTodo />

        {todosInProgress.length >= 1 && (
          <ListTodos title="Tasks" todos={todosInProgress} />
        )}

        {todosDone.length >= 1 && <ListTodos title="Done" todos={todosDone} />}
      </Content>
    </Container>
  )
}

export default App
