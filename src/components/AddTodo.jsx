import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useTodo } from '../context/useTodo';

function AddTodo() {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({ text: todoText, complete: false });
      setTodoText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs={9}>
          <Form.Control
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Add a new todo"
          />
        </Col>
        <Col xs={3}>
          <Button type="submit" variant="primary" id="button-addon1" style={{ width: '100%' }}>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTodo;
