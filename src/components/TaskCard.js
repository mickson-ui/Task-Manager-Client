import React  from 'react';
import '../styles/TaskCard.css';

function TaskCard({ task }) {
    return (
      <div className="task-card" draggable>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>
    );
  }

export default TaskCard;