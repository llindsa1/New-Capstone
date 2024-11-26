
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;










