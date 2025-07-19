import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function WorkplaceSafety() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Fire Prevention Protocols',
      content: [
        'Regular inspection of electrical equipment and wiring',
        'Proper storage of flammable materials',
        'Maintaining clear access to fire exits and equipment',
        'Smoking only in designated areas'
      ]
    },
    {
      title: 'Emergency Equipment',
      content: [
        'Location and maintenance of fire extinguishers',
        'Fire alarm systems and pull stations',
        'Emergency lighting and exit signs',
        'First aid kits and AED locations'
      ]
    },
    {
      title: 'Employee Training',
      content: [
        'Fire extinguisher operation training',
        'Emergency evacuation procedures',
        'First aid and CPR certification',
        'Hazardous materials handling'
      ]
    },
    {
      title: 'Emergency Procedures',
      content: [
        'Evacuation routes and assembly points',
        'Emergency communication protocols',
        'Role-specific responsibilities',
        'Reporting procedures for fire incidents'
      ]
    }
  ];

  const guidelines = [
    {
      title: 'Daily Checklist',
      items: [
        'Clear evacuation routes',
        'Accessible fire equipment',
        'Proper waste disposal',
        'Equipment shutdown procedures'
      ]
    },
    {
      title: 'Monthly Inspections',
      items: [
        'Fire extinguisher checks',
        'Emergency lighting tests',
        'First aid supplies inventory',
        'Safety signage verification'
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
            Workplace Fire Safety
          </h1>
          <p className="mt-4 text-xl text-white">
            Comprehensive guide for maintaining fire safety in the workplace
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Sections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-orange-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Safety Guidelines */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {guideline.title}
              </h2>
              <ul className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-orange-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Response Team */}
        <div className={`mt-12 p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Emergency Response Team
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <div>
              <h3 className="font-semibold text-orange-500">Fire Warden</h3>
              <p>Name: John Smith</p>
              <p>Contact: Ext. 1234</p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500">First Aid Officer</h3>
              <p>Name: Sarah Johnson</p>
              <p>Contact: Ext. 5678</p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500">Safety Coordinator</h3>
              <p>Name: Mike Brown</p>
              <p>Contact: Ext. 9012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkplaceSafety;
