import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <nav className="bg-orange-600 bg-opacity-80 fixed w-full backdrop-blur-md text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Foodies</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 mx-auto text-lg">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/menu" className="hover:text-gray-200">
            Menu
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Icons and Login/Logout */}
        <div className="flex items-center space-x-6">
          <FiShoppingCart className="text-3xl cursor-pointer hover:text-gray-200" />
          <div className="relative">
            <FiUser
              className="text-3xl cursor-pointer hover:text-gray-200"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md p-4 text-lg">
                <p className="font-bold text-xl">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            )}
          </div>
          <Link
            to="/login"
            className="bg-green-500 px-5 py-3 rounded-md hover:bg-green-600 text-lg"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-lg">
          <Link to="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link to="/menu" className="block hover:text-gray-200">
            Menu
          </Link>
          <Link to="/about" className="block hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
          <div className="mt-4">
            <Link
              to="/login"
              className="bg-green-500 px-5 py-3 rounded-md hover:bg-green-600 text-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
