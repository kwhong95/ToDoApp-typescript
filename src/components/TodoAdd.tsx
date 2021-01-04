import React, { useState, ChangeEvent } from 'react';
import { Button, TextField } from '@material-ui/core';

interface AddTodoProps {
  addTodo: AddTodo;
} 

const TodoAdd: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo( newTodo );
    setNewTodo('');
  }
  
  return (
    <form>
      <TextField value={newTodo} onChange={handleChange}/>
      <Button onSubmit={handleSubmit} color="primary">Add Todo</Button>
    </form>
  )
}

export default TodoAdd;
