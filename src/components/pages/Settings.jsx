import React, { useState } from "react";
import "./Settings.css"; // Make sure you create a Settings.css file for styling

const Settings = () => {
  const [theme, setTheme] = useState("Light");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-card">
        <h3>Theme Settings</h3>
        <div>
          <label htmlFor="theme">Choose a Theme: </label>
          <select
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            className="theme-select"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <p>Your current theme is: {theme}</p>
      </div>
      <div className="setting-card">
        <h3>Notification Settings</h3>
        <p>Enable or disable notifications for system updates and alerts.</p>
        <button className="btn-toggle">Enable Notifications</button>
      </div>
      <div className="setting-card">
        <h3>Account Settings</h3>
        <p>Manage your account details, including password and profile.</p>
        <button className="btn-toggle">Update Account</button>
      </div>
    </div>
  );
};

export default Settings;
