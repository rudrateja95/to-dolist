import React from 'react';
import { Plus } from 'lucide-react';

const TaskInput = ({ inputValue, setInputValue, addTask }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="section">
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="input"
        />
        <button
          onClick={addTask}
          disabled={!inputValue.trim()}
          className="add-button"
        >
          <Plus size={20} />
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput; 