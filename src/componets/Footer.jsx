import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 px-6 md:px-20 py-16 ">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Rentroo</h2>
          <p className="text-gray-400">
            Find reliable cars with transparent pricing, verified inspections,
            flexible pickup and delivery options, and 24/7 customer support.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <i className="fab fa-facebook text-xl"></i>
            <i className="fab fa-instagram text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-linkedin text-xl"></i>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for updates.
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-300 outline-none"
            />
            <button className="px-4 py-2 bg-blue-300 text-white rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © 2025 Rentroo. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
