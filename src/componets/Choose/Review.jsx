import React from "react";
import './Choose.css'

const Review = () => {
  return (
    <div className="review-card w-full py-16  md:px-10 ">
      
      {/* Heading */}
      <div className="text-center mb-12 gap-20">
        <h2 className="text-3xl font-bold text-gray-900">What People Says</h2>
        <p className="text-gray-600 mt-2">Don’t Just Take Our Words</p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 ml-10">

        {/* Card 1 */}
        <div className="bg-white p-6 w-110 rounded-xl shadow-lg">
          <div className="flex items-center gap-1 mb-3">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mb-2">22 Jan 2025</p>

          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <h3 className="font-semibold text-gray-900">Donald Jackman</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 w-110 rounded-xl shadow-lg">
          <div className="flex items-center gap-1 mb-3">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mb-2">22 Jan 2025</p>

          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <h3 className="font-semibold text-gray-900">John Doe</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-100 p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-1 mb-3">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mb-2">22 Jan 2025</p>

          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing .
          </p>

          <h3 className="font-semibold text-gray-900">Donald Jackman</h3>
        </div>

      </div>
    </div>
  );
};

export default Review;
