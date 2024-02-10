import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
