import React from 'react';

const TaskStats = ({ totalTasks, activeTasks, completedTasks }) => {
  return (
    <div className="section stats">
      <div className="stat">
        <div className="stat-number">{totalTasks}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat">
        <div className="stat-number active">{activeTasks}</div>
        <div className="stat-label">Active</div>
      </div>
      <div className="stat">
        <div className="stat-number completed">{completedTasks}</div>
        <div className="stat-label">Completed</div>
      </div>
    </div>
  );
};

export default TaskStats; 