import React from 'react';

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="section filters">
      {['all', 'active', 'completed'].map((filterType) => (
        <button
          key={filterType}
          onClick={() => setFilter(filterType)}
          className={`filter-button ${filter === filterType ? 'active' : ''}`}
        >
          {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters; 