import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import AboutMe from './Component/AboutMe/AboutMe';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
      </Routes>
    </Router>
  );
}

export default App;
