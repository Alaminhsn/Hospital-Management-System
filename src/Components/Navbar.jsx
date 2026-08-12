import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <div className="h-10 flex items-center justify-between">

          {/* Logo */}
          <div>
            <Link to="/">
              <img
                className="w-16 h-16 object-contain md:size-30"
                src="/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 lg:gap-5">
              <li className="hover:bg-gray-200 active:bg-gray-300 py-1 px-3 rounded">
                <Link to="/">Home</Link>
              </li>

              <li className="hover:bg-gray-200 active:bg-gray-300 py-` px-3 rounded">
                <Link to="/doctors">All Doctors</Link>
              </li>

              <li className="hover:bg-gray-200 active:bg-gray-300 py-1 px-3 rounded">
                <Link to="/about">About</Link>
              </li>

              <li className="hover:bg-gray-200 active:bg-gray-300 py-1 px-3 rounded">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Profile / Login */}
          <div className="hidden md:block">
            {token ? (
              <div className="relative group">

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="/alamin.png"
                    alt="Profile"
                  />

                  <img
                    className="w-3 h-3"
                    src="/dropdown_icon.svg"
                    alt="Dropdown"
                  />
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 top-8 pt-4 hidden group-hover:block z-50">
                  <div className="bg-stone-100 shadow-lg w-40 rounded-md overflow-hidden">

                    <Link to="/myprofile">
                      <p className="py-2 px-3 hover:bg-gray-200 active:bg-gray-300">
                        My Profile
                      </p>
                    </Link>

                    <Link to="/myapoinment">
                      <p className="py-2 px-3 hover:bg-gray-200 active:bg-gray-300">
                        My Appointment
                      </p>
                    </Link>

                    <button
                      onClick={() => setToken(false)}
                      className="w-full text-left py-2 px-3 hover:bg-gray-200 active:bg-gray-300"
                    >
                      Logout
                    </button>

                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="contained">
                  Create Account
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-5">

            <ul className="flex flex-col gap-1 border-t pt-3">

              <li className="py-2 px-3 hover:bg-gray-200 rounded">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li className="py-2 px-3 hover:bg-gray-200 rounded">
                <Link
                  to="/doctors"
                  onClick={() => setMenuOpen(false)}
                >
                  All Doctors
                </Link>
              </li>

              <li className="py-2 px-3 hover:bg-gray-200 rounded">
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>

              <li className="py-2 px-3 hover:bg-gray-200 rounded">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>

            </ul>

            {/* Mobile Profile */}
            <div className="mt-3 border-t pt-3">

              {token ? (
                <div className="flex flex-col gap-2">

                  <div className="flex items-center gap-2 px-3">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/alamin.png"
                      alt="Profile"
                    />
                    <span>My Account</span>
                  </div>

                  <Link
                    to="/myprofile"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 px-3 hover:bg-gray-200 rounded"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/myapoinment"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 px-3 hover:bg-gray-200 rounded"
                  >
                    My Appointment
                  </Link>

                  <button
                    onClick={() => {
                      setToken(false);
                      setMenuOpen(false);
                    }}
                    className="text-left py-2 px-3 hover:bg-gray-200 rounded"
                  >
                    Logout
                  </button>

                </div>
              ) : (
                <Link to="/login">
                  <Button
                    variant="contained"
                    fullWidth
                  >
                    Create Account
                  </Button>
                </Link>
              )}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
