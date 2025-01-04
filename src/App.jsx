import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Inventory from "./components/pages/Inventory";
import Reports from "./components/pages/Reports"; // Add this line
import Login from "./Login";
import Settings from "./components/pages/Settings";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} /> {/* Add Reports route */}
        <Route path="/settings" element={<Settings/> } />
        <Route path="/login" element={<Login/> } />
      </Routes>
    </Router>
  );
};

export default App;
