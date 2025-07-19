import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function FireEvacuation() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Before an Emergency',
      content: [
        {
          subtitle: 'Evacuation Plan Development',
          items: [
            'Create detailed floor plans with evacuation routes',
            'Identify primary and secondary escape routes',
            'Designate assembly points outside the building',
            'Account for individuals with special needs'
          ]
        },
        {
          subtitle: 'Communication Plan',
          items: [
            'Establish emergency notification system',
            'Create contact lists for emergency personnel',
            'Define chain of command',
            'Set up emergency communication methods'
          ]
        }
      ]
    },
    {
      title: 'During an Emergency',
      content: [
        {
          subtitle: 'Immediate Actions',
          items: [
            'Activate fire alarm system',
            'Call emergency services (911)',
            'Begin evacuation procedures',
            'Follow designated escape routes'
          ]
        },
        {
          subtitle: 'Evacuation Procedures',
          items: [
            'Stay low to avoid smoke inhalation',
            'Feel doors for heat before opening',
            'Close doors behind you',
            'Do not use elevators'
          ]
        }
      ]
    },
    {
      title: 'After an Emergency',
      content: [
        {
          subtitle: 'Assembly Point Procedures',
          items: [
            'Take attendance at assembly points',
            'Report missing persons to authorities',
            'Wait for all-clear signal',
            'Follow re-entry procedures'
          ]
        },
        {
          subtitle: 'Recovery Actions',
          items: [
            'Document incident details',
            'Assess damage and safety concerns',
            'Review and update evacuation procedures',
            'Conduct post-incident analysis'
          ]
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
            Fire Evacuation Plans
          </h1>
          <p className="mt-4 text-xl text-white">
            Comprehensive guide for safe and efficient evacuation procedures
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.content.map((subsection, subIndex) => (
                <div
                  key={subIndex}
                  className={`p-6 rounded-lg shadow-lg ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {subsection.subtitle}
                  </h3>
                  <ul className="space-y-3">
                    {subsection.items.map((item, itemIndex) => (
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
          </div>
        ))}

        {/* Emergency Contact Information */}
        <div className={`mt-12 p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Emergency Contacts
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <div>
              <h3 className="font-semibold text-orange-500">Emergency Services</h3>
              <p>Fire Department: 911</p>
              <p>Police: 911</p>
              <p>Ambulance: 911</p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500">Building Management</h3>
              <p>Security: (555) 123-4567</p>
              <p>Maintenance: (555) 234-5678</p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-500">Assembly Points</h3>
              <p>Primary: Main Parking Lot</p>
              <p>Secondary: Park Across Street</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FireEvacuation;
