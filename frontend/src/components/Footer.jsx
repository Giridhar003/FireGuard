import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`${
      isDark ? 'bg-gray-900 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-600 border-gray-200'
    } border-t`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Emergency Response
            </h3>
            <p className="text-sm">
              Your reliable partner in emergency management and response services.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/emergency-report" className="text-sm hover:underline">Report Emergency</Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm hover:underline">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/emergency-guidelines" className="text-sm hover:underline">Emergency Guidelines</Link>
              </li>
              <li>
                <Link to="/resources/training-materials" className="text-sm hover:underline">Training Materials</Link>
              </li>
              <li>
                <Link to="/resources/safety-protocols" className="text-sm hover:underline">Safety Protocols</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Emergency: 911</li>
              <li>Helpline: 1-800-HELP</li>
              <li>Email: support@emergency.com</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Emergency Response System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;