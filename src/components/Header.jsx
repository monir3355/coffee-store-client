import React, { useState } from "react";
import { FaBars, FaRegTimesCircle, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    // main menu for bg
    <>
      <div style={{ backgroundImage: "url('/images/more/15.jpg')" }}>
        <div className="navbar container mx-auto py-6">
          {/* <img src="/public/images/more/15.jpg" alt="" /> */}
          <div className="navbar-start">
            <Link to="/" className="font-bold text-2xl text-white">
              Coffee Store
            </Link>
          </div>
          <span className="navbar-end inline-flex lg:hidden">
            <FaBars
              onClick={() => setIsMenu(!isMenu)}
              className="text-white text-xl cursor-pointer"
            />
          </span>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-4">
              <li className="font-semibold text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-600" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-semibold text-white">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-600" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="font-semibold text-white">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-600" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/cups/Rectangle 11.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* fold menu */}

      {isMenu && (
        <div className="absolute bg-black z-10 top-2 left-0 w-full">
          <div className="rounded shadow-sm">
            <div
              style={{ backgroundImage: "url('/images/more/15.jpg')" }}
              className="py-16 relative"
            >
              <span className="inline-flex absolute top-4 right-6">
                <FaTimes
                  onClick={() => setIsMenu(!isMenu)}
                  className="text-white text-2xl cursor-pointer"
                />
              </span>
              <div className="navbar flex flex-col container mx-auto">
                {/* <img src="/public/images/more/15.jpg" alt="" /> */}
                <div>
                  <Link to="/" className="font-bold text-2xl mb-6 text-white">
                    Coffee Store
                  </Link>
                </div>
                <div>
                  <ul className="flex flex-col gap-4">
                    <li className="font-semibold text-white">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-yellow-600" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="font-semibold text-white">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "text-yellow-600" : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="font-semibold text-white">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? "text-yellow-600" : ""
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src="/public/images/cups/Rectangle 14.png" />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
