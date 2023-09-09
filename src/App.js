import "./App.css";
import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/Board";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Kanban Board App</h1>
      </header>
      <main className="app-main">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
