import React, { useState } from 'react';
import TodoAdd from './components/TodoAdd';
import { TodoList } from './components/TodoList';

const initialTodo: Array<Todo> = [
  { text: "Study Typescripty", complete: true },
  { text: "Clean Room", complete: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo: ToggleTodo = selecedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selecedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (newTodo) => {
    setTodos([ ...todos, { text: newTodo, complete: false  } ]);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <TodoAdd addTodo={addTodo}/>
    </div>
  )
}

export default App;

