import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Car from "./Car";
import "./listing.css";
import cars from "../../Data/cars.json";
import { useLocation } from "react-router-dom";

const ListingPage = () => {
  const location = useLocation();
  const filters = location.state || {};

  const [filteredCars, setFilteredCars] = useState(cars);

  // ⭐ Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // ⭐ Filter Logic (your existing code)
  useEffect(() => {
    if (filters.destination || filters.seats) {
        const results = cars.filter((car) => {
          const matchesLocation = filters.destination
          ? car.location.toLowerCase().includes(filters.destination.toLowerCase())
          : true;

          const matchesSeats = filters.seats
          ? car.seats >= parseInt(filters.seats)
          : true;

          return matchesLocation && matchesSeats;
      });

      setFilteredCars(results.length > 0 ? results : cars);
      setCurrentPage(1); // reset to page 1 when filters change
    } else {
      setFilteredCars(cars);
    }
  }, [filters]);

  // ⭐ Pagination Calculations
  const lastIndex = currentPage * carsPerPage;
  const firstIndex = lastIndex - carsPerPage;
  const currentCars = filteredCars.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="listing-container">
      <Sidebar cars={cars} setFilteredCars={setFilteredCars} />

      <div className="cars-grid">
        {currentCars.map((car, index) => (
          <Car key={car.id} car={car} index={index} />
    ))}
  </div>

  {/* ⭐ Pagination Buttons */}
  <div className="pagination-container">
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
        >
        {index + 1}
      </button>
))}
</div>
</div>

</div>
);
};

export default ListingPage;
