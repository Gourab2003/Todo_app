import React from "react";
import { useTodo } from "../context/useTodo";
import { ListGroup, Button } from "react-bootstrap";

function TodoList({ isDarkMode }) {
  const { todos, updateTodo, deleteTodo, completeTodo } = useTodo();

  const handleUpdateTodo = (id) => {
    const updatedText = prompt(
      "Update text",
      todos.find((todo) => todo.id === id).text
    );
    if (updatedText !== null) {
      updateTodo(id, { text: updatedText });
    }
  };

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          style={{
            backgroundColor: isDarkMode ? "#343a40" : "#f8f9fa", // Dark and light mode background
            color: isDarkMode ? "#fff" : "#000", // Text color for dark and light mode
            display: "flex",
            flexDirection: "row", // Buttons on the right side on larger screens
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            textAlign: "center", // Center text on small screens
          }}
          className="todo-item"
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              fontSize: "1.1rem", // Adjust text size
            }}
            className="todo-text"
          >
            {todo.text}
          </span>

          <div className="todo-buttons">
            <Button
              variant={todo.completed ? "success" : "warning"}
              onClick={() => completeTodo(todo.id)}
              className="todo-btn"
              size="sm"
              style={{ marginRight: "15px" }}
            >
              {todo.completed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
              ) : (
                "Complete"
              )}
            </Button>
            <Button
              variant="info"
              onClick={() => handleUpdateTodo(todo.id)}
              className="todo-btn"
              size="sm"
              style={{ marginRight: "15px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteTodo(todo.id)}
              className="todo-btn"
              size="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
