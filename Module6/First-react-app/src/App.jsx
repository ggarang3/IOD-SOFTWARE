import React, { useState } from 'react';
import './app.css'; // Assuming the CSS is in TaskManager.css

// TaskCard Component - Displays individual tasks
function TaskCard({ task, toggleTaskStatus }) {
  return (
    <div className={`task-card ${task.completed ? 'completed' : 'pending'}`}>
      <h3>{task.name}</h3>
      <button onClick={() => toggleTaskStatus(task.id)}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
    </div>
  );
}

// TaskList Component - Displays the list of filtered tasks
function TaskList({ tasks, toggleTaskStatus }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskCard key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
}

// TaskManager Component - Main component
function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Complete the project', completed: true },
    { id: 3, name: 'Review code', completed: false },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearchQuery = task.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'Completed') return task.completed && matchesSearchQuery;
    if (filter === 'Pending') return !task.completed && matchesSearchQuery;
    return matchesSearchQuery;
  });

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      
      <input
        type="text"
        placeholder="Add new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />

      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
      </div>

      <TaskList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
}

export default TaskManager;
