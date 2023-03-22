import { ChangeEvent, useState } from 'react'
import { Container, CreateTodoBtn, Input } from './styles'
import { Plus } from 'phosphor-react'
import { useStore } from '../../store/todos'

export function CreateTodo() {
  const onCreateTodo = useStore((state) => state.onCreateTodo)

  const [inputNewTodo, setInputNewTodo] = useState('')

  function onHandleCreateTodo() {
    onCreateTodo(inputNewTodo)
    setInputNewTodo('')
  }

  function onChangeInputNewTodo(e: ChangeEvent<HTMLInputElement>) {
    setInputNewTodo(e.target.value)
  }

  return (
    <Container>
      <label htmlFor="todo" />
      <Input
        id="todo"
        name="todo"
        value={inputNewTodo}
        onChange={onChangeInputNewTodo}
        placeholder="Add a new task"
      />

      <CreateTodoBtn
        type="button"
        onClick={onHandleCreateTodo}
        disabled={inputNewTodo.length === 0}
      >
        <Plus size={22} />
      </CreateTodoBtn>
    </Container>
  )
}
