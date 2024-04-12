'use client'
// Category.js
import React, { useState } from "react";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("SSID");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <select
      className="border border-gray-300 rounded px-3 py-1"
      value={selectedCategory}
      onChange={handleChange}
    >
      <option value="SSID">SSID</option>
      <option value="Client">Client</option>
    </select>
  );
};

export default Category;
