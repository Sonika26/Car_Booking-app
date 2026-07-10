import React from "react";
import './Choose.css'
import Review from './Review'


const Choose = () => {
  return (
    <div className="choose-card">
      <h2 className="pl-20 text-3xl font-bold text-gray-900  text-left">
        Why Buy With DriveNest?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* cards... */}
         <div className="flex flex-col items-start ml-6 md:ml-20 shadow-lg rounded-md p-10">
          <svg className="text-blue-400 mb-3" width="40" height="40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293l-8.414 8.414-4-4L5.293 8.293l3 3 7.414-7.414z" />
          </svg>
          <h3 className="font-semibold text-lg">Verified Listings</h3>
          <p className="text-gray-600 text-sm">
            All cars are inspected and verified for your peace of mind.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start shadow-lg rounded-md">
          <svg className="text-blue-400 mb-3" width="40" height="40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3h12v14H4z" />
          </svg>
          <h3 className="font-semibold text-lg">Best Price Guarantee</h3>
          <p className="text-gray-600 text-sm">
            Get the best deal with our market price promise.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start shadow-lg rounded-md">
          <svg className="text-blue-400 mb-3" width="40" height="40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2l8 4v4c0 5-3 8-8 8S2 15 2 10V6l8-4z" />
          </svg>
          <h3 className="font-semibold text-lg">Secure Transactions</h3>
          <p className="text-gray-600 text-sm">
            Safe, transparent, and hassle-free buying experience.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start shadow-lg rounded-md">
          <svg className="text-blue-400 mb-3" width="40" height="40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 10h14v2H3z" />
          </svg>
          <h3 className="font-semibold text-lg">Easy Financing</h3>
          <p className="text-gray-600 text-sm">
            Flexible financing options tailored to your needs.
          </p>
        </div>


         {/* Card 5 */}
        <div className="flex flex-col items-start shadow-lg rounded-md w-70">
          <svg className="text-blue-400 mb-3" width="40" height="40" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 100 12A6 6 0 0010 2z" />
          </svg>
          <h3 className="font-semibold text-lg">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Our support team is here to help you anytime.
          </p>
        </div>

      </div>
    <Review />
    </div>
  );
};

export default Choose