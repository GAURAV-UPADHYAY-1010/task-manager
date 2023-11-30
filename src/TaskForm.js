// src/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Urgent');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine date and time into a single deadline string
    const deadline = date && time ? `${date} ${time}` : '';

    addTask({ task, priority, deadline });
    setTask('');
    setPriority('Urgent');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
      </label>
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Urgent">Urgent</option>
          <option value="Important">Important</option>
          <option value="Assign to Someone">Assign to Someone</option>
          <option value="Neglected">Neglected</option>
        </select>
      </label>
      <label>
        Deadline Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Deadline Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
