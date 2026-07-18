import React from "react";
import "./Choose.css";
import Review from "./Review";

const Choose = () => {
  return (
    <div className="choose-card bg-gray-50 px-10 ml-20 py-20">
      
      <div className="choosecard flex  ml-20 relative flex-col gap-9 max-w-7xl  mx-auto px-6">
         <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Buy With <span className="text-blue-600">DriveNest?</span>
        </h2>
        <div className="grid flex justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center ">

          {/* Card 1 */}
          <div className="feature-card ml-10">
            <svg
              className="text-blue-600 mb-5"
              width="42"
              height="42"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293l-8.414 8.414-4-4L5.293 8.293l3 3 7.414-7.414z" />
            </svg>

            <h3>Verified Listings</h3>

            <p>
              All cars are inspected and verified for your peace of mind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <svg
              className="text-blue-600 mb-5"
              width="42"
              height="42"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3h12v14H4z" />
            </svg>

            <h3>Best Price Guarantee</h3>

            <p>
              Get the best deal with our market price promise.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <svg
              className="text-blue-600 mb-5"
              width="42"
              height="42"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2l8 4v4c0 5-3 8-8 8S2 15 2 10V6l8-4z" />
            </svg>

            <h3>Secure Transactions</h3>

            <p>
              Safe, transparent, and hassle-free buying experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="feature-card">
            <svg
              className="text-blue-600 mb-5"
              width="42"
              height="42"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 10h14v2H3z" />
            </svg>

            <h3>Easy Financing</h3>

            <p>
              Flexible financing options tailored to your needs.
            </p>
          </div>

          {/* Card 5 */}
          <div className="feature-card">
            <svg
              className="text-blue-600 mb-5"
              width="42"
              height="42"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 100 12A6 6 0 0010 2z" />
            </svg>

            <h3>24/7 Support</h3>

            <p>
              Our support team is here to help you anytime.
            </p>
          </div>

        </div>

      </div>

      <Review />

    </div>
  );
};

export default Choose;