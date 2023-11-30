// src/TaskList.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, addTask, removeTask }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add Task</button>
      {showForm && <TaskForm addTask={addTask} />}
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} index={index} task={task} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
