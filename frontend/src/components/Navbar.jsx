import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.svg';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Define navigation links based on authentication and role
  const getNavLinks = () => {
    const publicLinks = [
      { path: '/', label: 'Home' },
      { path: '/trading', label: 'Trading' },
      { path: '/resources', label: 'Resources' },
      { path: '/emergency-report', label: 'Report Emergency' },
    ];

    const roleSpecificLinks = user ? [
      ...(user.role === 'admin' 
        ? [{ path: '/admin/dashboard', label: 'Admin Dashboard' }]
        : user.role === 'firefighter'
        ? [{ path: '/firefighter/dashboard', label: 'Firefighter Dashboard' }]
        : []
      )
    ] : [];

    return [...publicLinks, ...roleSpecificLinks];
  };

  const navLinks = getNavLinks();

  return (
    <nav className={`${
      isDark ? 'bg-gray-900/95 text-white border-gray-700' : 'bg-white/95 text-gray-900 border-gray-200'
    } border-b sticky top-0 z-50 transition-colors duration-200 backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Moltres Logo" className="h-10 w-10 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                Moltres
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? isDark 
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' 
                      : 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-900'
                    : isDark
                      ? 'text-gray-300 hover:bg-orange-600/50 hover:text-white'
                      : 'text-gray-900 hover:bg-orange-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isDark
                  ? 'text-gray-300 hover:bg-orange-600/50 hover:text-white'
                  : 'text-gray-900 hover:bg-orange-100'
              }`}
            >
              {isDark ? '🌞' : '🌙'}
            </button>

            {user ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md text-sm font-medium transition-all duration-200 mr-2 ${
                isDark
                  ? 'text-gray-300 hover:bg-orange-600/50 hover:text-white'
                  : 'text-gray-900 hover:bg-orange-100'
              }`}
            >
              {isDark ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isDark
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? isDark
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                      : 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-900'
                    : isDark
                      ? 'text-gray-300 hover:bg-orange-600/50 hover:text-white'
                      : 'text-gray-900 hover:bg-orange-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;