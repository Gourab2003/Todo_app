import React, { useState } from 'react';
import { TodoProvider } from './context/useTodo';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, completeTodo, deleteTodo }}
    >
      <div className={isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="container">
          <div className="quote-section">
            <h2 className="quote">
              "Organizing your time is key to unlocking your productivity. Writing down your tasks is the first step."
            </h2>
          </div>
          <div className="todo-list-gap" style={{ marginBottom: '65px' }}></div>
          <AddTodo />
          <div className="todo-list-gap" style={{ marginBottom: '30px' }}></div>
          <TodoList isDarkMode={isDarkMode}  />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
