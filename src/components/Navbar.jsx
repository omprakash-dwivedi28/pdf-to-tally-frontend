// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/pdftocsv" className="text-2xl font-bold text-blue-600">
          PDF to CSV Converter
        </Link>

        {/* Navigation Links */}
        {/* <div className="space-x-4">
          <NavLink
            to="/pdftoxml"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-blue-600'
            }
          >
            PDF TO XML
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-blue-600'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-blue-600'
            }
          >
            Contact
          </NavLink>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
