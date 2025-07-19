import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function HomeSafetyGuide() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Fire Prevention',
      content: [
        {
          subtitle: 'Basic Prevention Tips',
          items: [
            'Install smoke alarms on every level',
            'Test smoke alarms monthly',
            'Create and practice a fire escape plan',
            'Keep fire extinguishers accessible'
          ]
        },
        {
          subtitle: 'Safety Precautions',
          items: [
            'Never leave cooking unattended',
            'Keep flammable items away from heat sources',
            'Never smoke in bed or when drowsy',
            'Keep matches and lighters out of children\'s reach',
            'Maintain electrical systems and avoid overloading outlets'
          ]
        }
      ]
    },
    {
      title: 'Emergency Preparedness',
      content: [
        {
          subtitle: 'Escape Planning',
          items: [
            'Map out two escape routes from each room',
            'Designate a family meeting point outside',
            'Practice fire drills regularly',
            'Keep emergency contacts accessible'
          ]
        },
        {
          subtitle: 'Safety Equipment',
          items: [
            'Install fire extinguishers in key areas',
            'Maintain working smoke detectors',
            'Consider installing sprinkler systems',
            'Keep emergency ladders in upstairs rooms'
          ]
        }
      ]
    }
  ];

  const emergencyContacts = [
    {
      title: 'Emergency Services',
      contacts: [
        'Fire Department: 911',
        'Police: 911',
        'Ambulance: 911',
        'Poison Control: 1-800-222-1222'
      ]
    },
    {
      title: 'Utility Companies',
      contacts: [
        'Electric Company: 1-800-555-0123',
        'Gas Company: 1-800-555-0124',
        'Water Company: 1-800-555-0125'
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
            Home Fire Safety Guide
          </h1>
          <p className="mt-4 text-xl text-white">
            Protect your home and loved ones with essential fire safety measures
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.content.map((subsection, subIdx) => (
                <div
                  key={subIdx}
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
                    {subsection.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
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

        {/* Emergency Contacts */}
        <div className={`p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((section, idx) => (
              <div key={idx}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.contacts.map((contact, contactIdx) => (
                    <li
                      key={contactIdx}
                      className={`flex items-center ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-orange-500 mr-2">✓</span>
                      {contact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSafetyGuide;
