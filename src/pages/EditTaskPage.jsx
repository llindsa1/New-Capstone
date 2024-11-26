import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const EditTaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const { taskId } = useParams(); // Get task ID from URL params
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch task details by ID
    axios.get(`/api/tasks/${taskId}`)
      .then(response => setTaskName(response.data.name))
      .catch(error => console.error('Error fetching task:', error));
  }, [taskId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update task
    axios.put(`/api/tasks/${taskId}`, { name: taskName })
      .then(response => {
        console.log('Task updated:', response.data);
        navigate('/tasks');  // Redirect to the task list page after updating
      })
      .catch(error => console.error('Error updating task:', error));
  };
  return (
    <div>
      <h1>Edit Task</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
export default EditTaskPage;


