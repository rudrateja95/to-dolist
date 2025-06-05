import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskStats from './components/TaskStats';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const mockLocalStorage = {
    getItem: (key) => null,
    setItem: (key, value) => console.log(`Would save to localStorage: ${key} = ${value}`)
  };

  useEffect(() => {
    const savedTasks = mockLocalStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error parsing saved tasks:', error);
      }
    }
  }, []);

  useEffect(() => {
    mockLocalStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const filteredTasks = getFilteredTasks();

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <Header />
        <TaskInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTask={addTask}
        />
        <TaskStats
          totalTasks={totalTasks}
          activeTasks={activeTasks}
          completedTasks={completedTasks}
        />
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
        />
        <TaskList
          tasks={filteredTasks}
          filter={filter}
          totalTasks={totalTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
