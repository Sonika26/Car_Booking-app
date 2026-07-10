import React, { useState } from "react";

const Sidebar = ({ cars, setFilteredCars }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);

  // Car Type Handler
  const handleTypeChange = (type) => {
    let updatedTypes = [...selectedTypes];

    if (updatedTypes.includes(type)) {
      updatedTypes = updatedTypes.filter((t) => t !== type);
    } else {
      updatedTypes.push(type);
    }

    setSelectedTypes(updatedTypes);
    filterCars(updatedTypes, selectedRanges);
  };

  // Price Range Handler
  const handleRangeChange = (range) => {
    let updatedRanges = [...selectedRanges];

    if (updatedRanges.includes(range)) {
      updatedRanges = updatedRanges.filter((r) => r !== range);
    } else {
      updatedRanges.push(range);
    }

    setSelectedRanges(updatedRanges);
    filterCars(selectedTypes, updatedRanges);
  };

  // Main Filter Function
  const filterCars = (types, ranges) => {
    let filtered = [...cars];

    // Filter by type
    if (types.length > 0) {
      filtered = filtered.filter((car) => types.includes(car.type));
    }

    // Filter by price range
    if (ranges.length > 0) {
      filtered = filtered.filter((car) => {
        return ranges.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return car.price >= min && car.price <= max;
        });
      });
    }

    setFilteredCars(filtered);
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Filters</h3>

      {/* Car Type */}
      <div className="filter-box bg-gray-100 rounded">
        <h4>Car Type</h4>

        {["Coupe", "SUV", "Hatchback", "Sedan", "Convertible", "Van", "Grand Tourer"].map((type) => (
          <label key={type} className="checkbox-item">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="filter-box bg-gray-100 rounded ">
        <h4>Price Range</h4>
        {[
          "0-20000",
          "20000-30000",
          "30000-50000",
          "50000-99000"
        ].map((range) => (
          <label key={range} className="checkbox-item">
            <input
              type="checkbox"
              checked={selectedRanges.includes(range)}
              onChange={() => handleRangeChange(range)}
            />
            ${range.replace("-", " to ")}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
