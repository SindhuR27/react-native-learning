import React, { useState } from "react";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]); // To hold the list of tasks
  const [task, setTask] = useState(""); // To hold the value of the input field

  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      {/* Input field and Add button */}
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Display the list of tasks */}
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
