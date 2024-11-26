import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  // Fetch tasks from the API
  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);
  return (
    <div>
      <h1>Task List</h1>
      <nav>
        <Link to="/add-task">Add New Task</Link>
      </nav>
      <ul>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id}>
              <span>{task.name}</span>
              <Link to={`/edit-task/${task.id}`}>Edit</Link>
            </li>
          ))
        ) : (
          <li>No tasks available. Add a new task.</li>
        )}
      </ul>
    </div>
  );
};
export default TaskListPage;

