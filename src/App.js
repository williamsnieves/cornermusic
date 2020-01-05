import React from "react";
import Dashboard from "./components/Dashboard";
import { Router } from "@reach/router";

function App(props) {
  return (
    <div data-testid="main-container">
      <Router>
        <Dashboard path="/" />
      </Router>
    </div>
  );
}

export default App;
