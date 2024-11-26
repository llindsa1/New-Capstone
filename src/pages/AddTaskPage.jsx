import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddTaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/tasks', { name: taskName })
      .then(response => {
        console.log('Task added:', response.data);
        setTaskName('');
        navigate('/tasks');  // Redirect to the task list page
      })
      .catch(error => console.error('Error adding task:', error));
  };
  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
export default AddTaskPage;
