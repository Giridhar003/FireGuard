import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Resources() {
  const { isDark } = useTheme();

  const resources = [
    {
      category: 'Fire Safety Guidelines',
      items: [
        {
          title: 'Home Fire Safety Guide',
          description: 'Comprehensive guide for protecting your home from fire hazards',
          link: '/resources/home-safety',
          icon: '🏠'
        },
        {
          title: 'Workplace Fire Safety',
          description: 'Essential fire safety protocols for business environments',
          link: '/resources/workplace-safety',
          icon: '🏢'
        },
        {
          title: 'Fire Evacuation Plans',
          description: 'Templates and guidelines for creating effective evacuation plans',
          link: '/resources/fire-evacuation',
          icon: '🚪'
        }
      ]
    },
    {
      category: 'Training Materials',
      items: [
        {
          title: 'Fire Extinguisher Usage',
          description: 'Step-by-step guide on proper fire extinguisher operation',
          link: '/resources/fire-extinguisher',
          icon: '🧯'
        },
        {
          title: 'First Aid Basics',
          description: 'Essential first aid procedures for fire-related injuries',
          link: '/resources/first-aid',
          icon: '🩹'
        },
        {
          title: 'Emergency Response Training',
          description: 'Professional training modules for emergency situations',
          link: '/resources/emergency-guidelines',
          icon: '🚨'
        }
      ]
    },
    {
      category: 'Safety Equipment',
      items: [
        {
          title: 'Equipment Maintenance',
          description: 'Maintenance guides for fire safety equipment',
          link: '/resources/equipment-manual',
          icon: '🔧'
        },
        {
          title: 'Safety Gear Guide',
          description: 'Complete guide to personal protective equipment',
          link: '/resources/safety-protocols',
          icon: '⛑️'
        },
        {
          title: 'Equipment Inspection Checklist',
          description: 'Regular inspection requirements and procedures',
          link: '/resources/incident-reports',
          icon: '📋'
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Fire Safety Resources
          </h1>
          <p className="mt-4 text-xl text-white">
            Comprehensive guides and materials for fire safety
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {resources.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h2 className={`text-3xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {section.category}
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      Learn more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-extrabold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Need more information?
            </h2>
            <p className={`mt-4 text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Contact our fire safety experts for personalized guidance
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transform transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
