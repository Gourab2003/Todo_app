import React, {useState} from 'react'
import {TodoContext, TodoProvider, useTodo} from './context/useTodo'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=>{
    setTodos((prev)=>
      prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id != id))
  }

  const completeTodo = (id)=>{
    setTodos((prev)=>
      prev.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed}:todo
      )
    )
  }

  console.log(todos)

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, completeTodo, deleteTodo}}>
        <h1>Todo App</h1>
      <AddTodo/>
      <TodoList/>
    </TodoProvider>
  )
}

export default App