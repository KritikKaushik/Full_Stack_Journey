import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);

  const addTask = () => {
    if (name.trim() === "") return;

    setTasks([...tasks, name]);
    setName("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Practice App</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      {/* Input */}
      <input
        type="text"
        placeholder="Enter task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      {/* Conditional Rendering */}
      <button onClick={() => setShowTasks(!showTasks)}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>

      {showTasks && (
        <div>
          <h3>Task List</h3>

          {tasks.length === 0 ? (
            <p>No tasks available.</p>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button
                    onClick={() => deleteTask(index)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
