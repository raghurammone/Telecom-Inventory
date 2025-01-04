import React, { useState } from "react";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import "./Inventory.css";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory, setInventory] = useState([
    { id: 1, name: "Router", quantity: 50, price: "$120" },
    { id: 2, name: "Switch", quantity: 30, price: "$80" },
    { id: 3, name: "Modem", quantity: 100, price: "$60" },
    { id: 4, name: "Cable", quantity: 200, price: "$15" },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <h2>Inventory</h2>
      <div className="inventory-header">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Inventory..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <button className="add-item-btn">
          <FaPlusCircle /> Add New Item
        </button>
      </div>
      <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
