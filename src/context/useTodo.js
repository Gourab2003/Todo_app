import {createContext, useContext} from 'react'

const TodoContext = createContext({
    todos:[],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    completeTodo: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider