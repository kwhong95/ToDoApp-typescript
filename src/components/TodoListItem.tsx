import React from 'react';
import { Checkbox, Typography } from '@material-ui/core';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo 
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div style={{display: 'flex', alignItems: "center"}}>
      <Checkbox 
        checked={todo.complete}
      />
      <Typography>{todo.text}</Typography>
    </div>
  );
}