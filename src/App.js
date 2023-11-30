// src/App.js
import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} addTask={addTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
