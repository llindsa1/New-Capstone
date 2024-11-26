
import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Daily Planner</h1>
      <p>Manage your daily tasks effectively!</p>
      <nav>
        <ul>
          <li>
            <Link to="/tasks">Go to Task List</Link>
          </li>
          <li>
            <Link to="/add-task">Add New Task</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HomePage;






