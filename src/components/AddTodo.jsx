import React, {useState} from 'react'
import {Form, Button, InputGroup} from 'react-bootstrap'
import {useTodo} from '../context/useTodo'


function AddTodo() {
    const [todoText, setTodoText] = useState("")
    const {addTodo} = useTodo()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(todoText.trim()){
            addTodo({text: todoText, complete: false})
            setTodoText('')
        }
    }
  return (
     <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Button type="submit" variant="primary" id="button-addon1">
          Add
        </Button>
        <Form.Control
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo"
        />
      </InputGroup>
    </Form>
  )
}

export default AddTodo