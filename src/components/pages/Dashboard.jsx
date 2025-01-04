import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaCogs, FaClipboardList, FaUsers } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to the Telecom Inventory Dashboard!</h2>
      
      <div className="dashboard-cards">
        <div className="card">
          <FaChartLine className="card-icon" />
          <h3>Analytics</h3>
          <p>Track the performance and usage trends of telecom devices.</p>
          <Link to="/reports" className="card-link">View Reports</Link>
        </div>

        <div className="card">
          <FaClipboardList className="card-icon" />
          <h3>Inventory</h3>
          <p>Manage and organize your telecom inventory efficiently.</p>
          <Link to="/inventory" className="card-link">View Inventory</Link>
        </div>

        <div className="card">
          <FaUsers className="card-icon" />
          <h3>Users</h3>
          <p>Manage and monitor user access to the inventory system.</p>
          <Link to="/settings" className="card-link">Manage Users</Link>
        </div>

        <div className="card">
          <FaCogs className="card-icon" />
          <h3>Settings</h3>
          <p>Configure system settings and preferences for optimal performance.</p>
          <Link to="/settings" className="card-link">Configure Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
