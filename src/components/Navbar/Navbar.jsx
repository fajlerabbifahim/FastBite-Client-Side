import React, { useContext, useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, handleLogout } = useContext(AuthContext);


    const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return (
        <div className="sticky top-0 z-[900] ">
            <nav className="relative shadow">
                <div className="w-11/12 py-5 mx-auto">
                    <div className="lg:flex justify-between">
                        {/* Logo and Brand Name */}
                        <div className="flex items-center justify-between">
                            <div className="relative flex justify-center items-center">
                                <img
                                    className="w-12 h-12 mr-2 rounded-full"
                                    // src="https://i.ibb.co.com/6whQTLm/hotel-Rose.png"
                                    alt="First Bite"
                                    loading="lazy"
                                />
                                <h1 className="text-center flex">
                                    <span className="text-2xl font-extrabold text-center ">
                                        First Bite
                                    </span>
                                </h1>
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 "
                                            fill="none"
                                            viewBox="0 0 30 30"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links and User Actions */}
                        <div
                            className={`absolute inset-x-0 bg-[#C70039] z-20 w-full px-6 py-4 transition-all duration-700 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen
                                ? "translate-x-0 opacity-100 "
                                : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                                }`}
                        >
                            <div className="flex flex-col  -mx-6 lg:flex-row lg:items-center lg:mx-2 xl:mx-4 xl:text-lg">

                                {/* <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `
    relative inline-block px-2 py-2 mx-3 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
    ${isActive ? "text-[#E10101] underline underline-offset-4 decoration-2" : ""}
    before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out
    before:w-0 hover:before:w-full
    `
                                    }
                                >
                                    Home
                                </NavLink> */}
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `
                                                relative inline-block px-2 py-2 mx-3 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                                                ${isActive ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-full z-10" : ""}
                                                
                                                before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                                                after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                                             `
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/menu"
                                    className={({ isActive }) =>
                                        `
                                                relative inline-block px-2 py-2 mx-3 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                                                ${isActive ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-full z-10" : ""}
                                                
                                                before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                                                after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                                             `
                                    }
                                >
                                    Menu
                                </NavLink>
                                <NavLink
                                    to="/restaurants"
                                    className={({ isActive }) =>
                                        `
                                                relative inline-block px-2 py-2 mx-3 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                                                ${isActive ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-full z-10" : ""}
                                                
                                                before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                                                after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                                             `
                                    }
                                >
                                    Restaurants
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `
                                                relative inline-block px-2 py-2 mx-3 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                                                ${isActive ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-full z-10" : ""}
                                                
                                                before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                                                after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                                             `
                                    }
                                >
                                    About Us
                                </NavLink>

                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `
                                                relative inline-block px-2 py-2 mx-3 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                                                ${isActive ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-full z-10" : ""}
                                                
                                                before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                                                after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                                             `
                                    }
                                >
                                    Contact Us
                                </NavLink>


                            </div>

                            {/* User Actions */}
                            <div className="flex items-center mt-4 lg:mt-0 gap-3">
                                {user && user?.email ? (
                                    <div className="flex justify-between items-center gap-2">
                                        <button
                                            type="button"
                                            className="flex items-center focus:outline-none"
                                            aria-label="toggle profile dropdown"
                                        >
                                            <a id="not-clickable">
                                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                                    <img
                                                        referrerPolicy="no-referrer"
                                                        src={user?.photoURL}
                                                        className="object-cover w-full h-full"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </a>
                                            <Tooltip anchorSelect="#not-clickable">
                                                <div className="px-2 py-1 rounded text-sm">
                                                    {user?.displayName}
                                                </div>
                                            </Tooltip>
                                        </button>

                                        <button
                                            onClick={handleLogout}
                                            className="px-4 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-700 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <Link
                                            to="/signup"
                                            className="px-4 py-3 bg-[#E10101] text-white text-sm font-medium tracking-wide  capitalize transition-colors duration-700 transform rounded-lg  focus:outline-none focus:ring  focus:ring-opacity-80"
                                        >
                                            Sign up
                                        </Link>
                                        <Link
                                            to="/signin"
                                            className="px-4 py-3 bg-[#E10101] text-white  text-sm font-medium tracking-wide  capitalize transition-colors duration-700 transform  rounded-lg  focus:outline-none focus:ring  focus:ring-opacity-50"
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default React.memo(Navbar);