import React, { useState } from 'react';
import '../styles/AddTaskForm.css';

function AddTaskForm({ columns, onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [column, setColumn] = useState(columns[0]?._id || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!title || !column) {
      alert('Title and column are required!');
      return;
    }

    // Create task payload
    const newTask = {
      title,
      description,
      priority,
      column,
    };

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      const createdTask = await response.json();

      // Notify parent component
      onTaskAdded(createdTask);

      // Clear form fields
      setTitle('');
      setDescription('');
      setPriority('Medium');
      setColumn(columns[0]?._id || '');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h3>Create New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select value={column} onChange={(e) => setColumn(e.target.value)}>
        {columns.map((col) => (
          <option key={col._id} value={col._id}>
            {col.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;

