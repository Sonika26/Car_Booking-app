import { NavLink } from "react-router-dom";
import "../index.css";
import { useState } from'react'
import LogoImage from '../assets/logo.png'
import Searchicon from '../assets/search.svg'
import { FaUser } from "react-icons/fa";

const Navbar =() =>{

  const [showsearch, setshowsearch] = useState(false);


  return (
    <nav className="navbar shadow-lg">
      <div className="logo">
        <img src={LogoImage} alt="logo" className="w-25  object-contain top-0 " />
      <span className="font-bold ">Rentroo</span>
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
  <NavLink to="/listing"
  className={({ isActive }) =>
  isActive
  ? "font-extrabold border-b-2 border-blue-500 pb-1"
  : "hover:font-semibold"
}>Listing</NavLink>

<NavLink to="/contact"
className={({ isActive }) =>
isActive
? "font-extrabold border-b-2 border-blue-500 pb-1"
: "hover:font-semibold"
}
>Contact</NavLink>
</div>

{/*search bar*/}
<div className="search-bar flex items-center gap-5">
  <div
  className="flex items-center cursor-pointer "
  onClick={() => setshowsearch(!showsearch)}
  >
  {/* Input first */}
  {showsearch && (
    <input
    type="text"
    placeholder="Search here...."
    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
    autoFocus
    />
)}

{/* Search icon second, with margin-left for spacing */}
<img
src={Searchicon}
alt="search-button"
className="h-5 w-6 ml-5 cursor-pointer"
/>
</div>
</div>
<div className="login">
<NavLink to="/login">Login</NavLink>
  <FaUser size={18} />
</div>
</nav>
);

};

export default Navbar;
