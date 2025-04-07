// Lab 11

import { useState } from "react";
import './App.css';

const givenTodos = [
  { id: 1, task: 'Complete Lab 11', status: 'incomplete' },
  { id: 2, task: 'Review JSX Events and State', status: 'incomplete' }
];

function App() {
  const [todos, setTodos] = useState(givenTodos);
  const [newTask, setNewTask] = useState("");

  const handleClick = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: 'complete' };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleAddTask = () => {
    if (newTask) {
      const newTodo = {
        id: todos.length + 1,
        task: newTask,
        status: 'incomplete',
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input id="search" type="text" placeholder="Enter a task" value={newTask}
        onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            <span className={item.status === 'complete' ? 'crossed-out' : ''}>
              {item.task}
            </span>
            <button onClick={() => handleClick(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;