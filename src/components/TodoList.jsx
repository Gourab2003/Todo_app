import React from "react";
import { useTodo } from "../context/useTodo";
import { ListGroup, Button } from "react-bootstrap";

function TodoList() {
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <div>
            <Button
              variant={todo.completed ? "success" : "warning"}
              onClick={() => completeTodo(todo.id)}
              style={{ marginRight: "5px" }}
            >
              {todo.completed ? "Completed" : "Complete"}
            </Button>
            <Button
              variant="info"
              onClick={() => handleUpdateTodo(todo.id)}
              style={{ marginRight: "5px" }}
            >
              Update
            </Button>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
