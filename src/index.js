import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello, World!</h1>;
}

// React 18+ root API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode enables react during development to run components twice to check for bugs, and check if we are using outdated APIs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React v17
// React.render(<App />); // and the import is different
