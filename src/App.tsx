import React, { useState } from 'react';
import { TodoList } from './components/TodoList';

const initialTodo: Array<Todo> = [
  { text: "Study Typescripty", complete: true },
  { text: "Clean Room", complete: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo: ToggleTodo = selecedTodo => {
    const newTodo = todos.map(todo => {
      if (todo === selecedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    });
    setTodos(newTodo);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App;

