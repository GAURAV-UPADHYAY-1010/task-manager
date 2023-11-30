// src/TaskItem.js
import React from 'react';

const TaskItem = ({ index, task, removeTask }) => {
  const { task: taskText, priority, deadline } = task;

  // Separate date and time
  const [date, time] = deadline.split(' ');

  return (
    <li>
      <div>{taskText}</div>
      <div>{priority}</div>
      <div>
        {date && <span>Date: {date}</span>}
        {date && time && <span> | </span>}
        {time && <span>Time: {time}</span>}
      </div>
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
};

export default TaskItem;
