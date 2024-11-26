import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '' });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await axios.get(`/api/tasks/${id}`);
          setTask(response.data);
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      };
      fetchTask();
    }
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/tasks/${id}`, task);
        alert('Task updated!');
      } else {
        await axios.post('/api/tasks', task);
        alert('Task added!');
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };
  return (
    <section id="task-form">
      <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={task.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={task.description} onChange={handleChange} />
        </label>
        <button type="submit">{id ? 'Update Task' : 'Add Task'}</button>
      </form>
    </section>
  );
};
export default TaskForm;









