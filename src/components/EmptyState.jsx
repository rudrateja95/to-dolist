import React from 'react';
import { Circle, Check } from 'lucide-react';

const EmptyState = ({ totalTasks, filter }) => {
  if (totalTasks === 0) {
    return (
      <div className="empty-state">
        <Circle size={48} />
        <p>No tasks yet</p>
        <small>Add a task above to get started!</small>
      </div>
    );
  }

  if (filter === 'active') {
    return (
      <div className="empty-state">
        <Check size={48} />
        <p>All tasks completed!</p>
        <small>Great job staying productive!</small>
      </div>
    );
  }

  if (filter === 'completed') {
    return (
      <div className="empty-state">
        <p>No completed tasks yet</p>
      </div>
    );
  }

  return null;
};

export default EmptyState; 