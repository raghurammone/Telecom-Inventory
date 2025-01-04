import React from "react";
import "./Reports.css";

const Reports = () => {
  return (
    <div className="reports-container">
      <h2>Reports</h2>
      <div className="report-card">
        <h3>Monthly Sales Report</h3>
        <p>
          View detailed sales performance across different regions. This report
          provides insights into monthly trends, regional comparisons, and more.
        </p>
      </div>
      <div className="report-card">
        <h3>Inventory Status</h3>
        <p>
          Get an overview of the current stock levels, low stock alerts, and
          restocking schedules.
        </p>
      </div>
      {/* Add more report cards as needed */}
    </div>
  );
};

export default Reports;
