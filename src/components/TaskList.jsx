import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks'); // Proxy set in vite.config.js
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  return (
    <section id="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <div className="task">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => navigate(`/edit/${task._id}`)}>Edit</button>
                <button onClick={() => handleDelete(task._id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks found. Add one!</p>
        )}
      </ul>
    </section>
  );
};
export default TaskList;













