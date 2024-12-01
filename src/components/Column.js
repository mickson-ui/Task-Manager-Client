
import React  from 'react';
import TaskCard from '../components/TaskCard';
import '../styles/Column.css';

function Column({ name, tasks }) {
    return (
      <div className="column">
        <h2>{name}</h2>
        <div className="tasks">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    );
  }

export default Column