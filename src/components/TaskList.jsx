import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import EmptyState from './EmptyState';

const TaskList = ({ tasks, filter, totalTasks, toggleTask, deleteTask }) => {
  return (
    <div className="task-list section">
      {tasks.length === 0 ? (
        <EmptyState totalTasks={totalTasks} filter={filter} />
      ) : (
        tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <button onClick={() => toggleTask(task.id)} className="checkbox">
              {task.completed && <Check size={16} />}
            </button>
            <span className="task-text">{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-button" title="Delete task">
              <Trash2 size={18} />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList; 