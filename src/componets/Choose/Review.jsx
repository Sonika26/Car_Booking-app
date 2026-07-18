import React from "react";
import "./Choose.css";

const Review = () => {
  return (
    <div className="review-card">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            What People Say
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Don't Just Take Our Words
          </p>

        </div>

        <div className="grid grid-cols-3 gap-6 left-10">

          {/* Review 1 */}

          <div className="review-box left-10 max-w-sm w-full">

            <div className="flex ml-10gap-1 mb-5">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-400 mb-5">
              22 Jan 2025
            </p>

            <p className="text-gray-600 leading-7 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <div className="flex items-center">

              <div className="avatar">
                D
              </div>

              <div className="ml-4">
                <h3 className="font-semibold">
                  Donald Jackman
                </h3>

                <p className="text-sm text-gray-400">
                  Verified Buyer
                </p>

              </div>

            </div>

          </div>

          {/* Review 2 */}

          <div className="review-box">

            <div className="flex gap-1 mb-5 ">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-400 mb-5">
              22 Jan 2025
            </p>

            <p className="text-gray-600 leading-7 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <div className="flex items-center">

              <div className="avatar">
                J
              </div>

              <div className="ml-4">

                <h3 className="font-semibold">
                  John Doe
                </h3>

                <p className="text-sm text-gray-400">
                  Happy Customer
                </p>

              </div>

            </div>

          </div>

          {/* Review 3 */}

          <div className="review-box">

            <div className="flex gap-1 mb-5">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-400 mb-5">
              22 Jan 2025
            </p>

            <p className="text-gray-600 leading-7 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex items-center">

              <div className="avatar">
                D
              </div>

              <div className="ml-4">

                <h3 className="font-semibold">
                  Donald Jackman
                </h3>

                <p className="text-sm text-gray-400">
                  Car Enthusiast
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Review;