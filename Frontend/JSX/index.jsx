import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const name = "Kritik";

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Welcome to React JSX.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
