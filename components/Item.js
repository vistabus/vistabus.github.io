'use client'
import React from "react";

export default function Item() {
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      {/* Add your item component content */}
      <select
        className="p-2 border border-gray-300 rounded"
        value={selectedItem}
        onChange={handleItemChange}
      >
        <option value="" >Select Item</option>
        <option value="5G WiFi">5G WiFi</option>
        <option value="2.4G WiFi">2.4G WiFi</option>
      </select>
    </div>
  );
}