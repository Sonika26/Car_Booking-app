import { NavLink ,useNavigate } from "react-router-dom";
import "../index.css";
import { useState, useContext } from "react";
import LogoImage from "../assets/logo.png";
import Searchicon from "../assets/search.svg";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import {FaCog, FaSignOutAlt, FaBook } from "react-icons/fa";
import deafultAvatar from"../assets/default-avatar.png";

const Navbar = () => {
  const [showsearch, setshowsearch] = useState(false);
  const {user , logout} = useContext(AuthContext);
  const[open ,setOpen] = useState(false); 
  const navigate = useNavigate();


  return (
    <nav className="navbar shadow-lg">
      <div className="logo">
        <img
          src={LogoImage}
          alt="logo"
          className="w-25 object-contain top-0"
        />
        <span className="font-bold">Rentroo</span>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-b-2 border-blue-500 pb-1"
              : "hover:font-semibold"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/listing"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-b-2 border-blue-500 pb-1"
              : "hover:font-semibold"
          }
        >
          Listing
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-b-2 border-blue-500 pb-1"
              : "hover:font-semibold"
          }
        >
          Contact
        </NavLink>

        {/* ✅ Added role-based links */}
        {user?.role === "user" && (
          <NavLink
            to="/mybooking"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold border-b-2 border-blue-500 pb-1"
                : "hover:font-semibold"
            }
          >
            My Bookings
          </NavLink>
        )}

        {user?.role === "admin" && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold border-b-2 border-blue-500 pb-1"
                : "hover:font-semibold"
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>

      {/* Search bar */}
      <div className="search-bar flex items-center gap-10">
        <div
          className="flex items-center gap-5  cursor-pointer"
          onClick={() => setshowsearch(!showsearch)}
        >
          {showsearch && (
            <input
              type="text"
              placeholder="Search here...."
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              autoFocus
            />
          )}
          <img
            src={Searchicon}
            alt="search-button"
            className="h-5 w-6 ml-5 cursor-pointer"
          />
        </div>
      </div>
 <div className="login-button relative bg-white ">
  {user ? (
    <div className="relative w-30">
      {/* Circular avatar only */}
      <img
        src={user.photoURL || deafultAvatar}
        alt="profile"
        className="w-12 h-12 rounded-full cursor-pointer border border-gray-300"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown menu appears only when avatar is clicked */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-[300px] h-[230px] bg-orange-100 shadow-lg rounded-lg  flex flex-col overflow-hidden text-sm z-50"
        >
          <div className="px-4 flex items-center flex-col  bg-gray-50 justify-center border-b border-gray-300 py-2 text-gray-800 w-full h-[80px] rounded   ">
            <h3 className="font-semibold">{user.displayName || "User"}</h3>
            <h3 className="text-gray-500 ">{user.email}</h3>
          </div>
          <div className=" flex items-center bg-gray-50 justify-center flex-row  px-4 py-2 border-b border-gray-300 text-gray-800 w-full h-[50px]  rounded ">
          <NavLink
            to="/my-bookings"
            className="block px-4 text-black text-l flex  flex-row gap-5 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <FaBook className="text-gray-600 text-xl" />
            My Bookings
          </NavLink>
          </div>
          <div className="px-4 py-2 flex items-center flex-row bg-gray-50  justify-center border-b border-gray-300 text-gray-800 h-[50px] w-full  rounded  ">
          <NavLink
            to="/profile"
            className="block text-black  flex flex-row gap-5  px-4  py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <FaCog className="text-gray-600 text-xl" />
            Manage Account
          </NavLink>
           </div>
            <div className="px-4 py-2 flex items-center  bg-gray-50  justify-center border-b border-gray-300  text-gray-800 h-[50px] w-full  rounded ">
          <button
            onClick={() => {
              logout();
              setOpen(false);
            }}
            className="block w-full text-left  items-center flex justify-center  gap-5 px-4 py-2 hover:bg-gray-100 text-red-500"
          >  <FaSignOutAlt />
            Sign out
          </button>
           </div>
      
        
        </div>
        
      )}
    </div>
    
  ) : (
    <div className="login">
    <NavLink to="/login" className="px-4 py-2 flex gap-2 rounded text-white">
      Login <FaUser />
    </NavLink>
    </div>

  )}
  </div>

    </nav>
  );
};

export default Navbar;
