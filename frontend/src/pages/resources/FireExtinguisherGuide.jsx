import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function FireExtinguisherGuide() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Types of Fire Extinguishers',
      content: [
        {
          type: 'Class A',
          description: 'For ordinary combustibles like wood, paper, and cloth',
          color: 'Green',
          uses: ['Wood fires', 'Paper fires', 'Textile fires', 'Trash fires']
        },
        {
          type: 'Class B',
          description: 'For flammable liquids and gases',
          color: 'Red',
          uses: ['Oil fires', 'Gasoline fires', 'Paint fires', 'Grease fires']
        },
        {
          type: 'Class C',
          description: 'For electrical fires',
          color: 'Blue',
          uses: ['Electrical equipment', 'Appliance fires', 'Wiring fires', 'Circuit fires']
        },
        {
          type: 'Class D',
          description: 'For combustible metals',
          color: 'Yellow',
          uses: ['Metal fires', 'Chemical fires', 'Laboratory fires']
        },
        {
          type: 'Class K',
          description: 'For kitchen fires involving oils and fats',
          color: 'Black',
          uses: ['Cooking oil fires', 'Restaurant fires', 'Commercial kitchen fires']
        }
      ]
    }
  ];

  const passMethod = [
    {
      step: 'Pull',
      description: 'Pull the pin at the top of the extinguisher to break the tamper seal.',
      icon: '🔓'
    },
    {
      step: 'Aim',
      description: 'Aim low, pointing the nozzle at the base of the fire.',
      icon: '🎯'
    },
    {
      step: 'Squeeze',
      description: 'Squeeze the handle to release the extinguishing agent.',
      icon: '✊'
    },
    {
      step: 'Sweep',
      description: 'Sweep from side to side at the base of the fire until it appears to be out.',
      icon: '↔️'
    }
  ];

  const maintenance = [
    'Check pressure gauge monthly',
    'Ensure safety pin is intact',
    'Look for physical damage',
    'Check for blockages in nozzle',
    'Verify bracket mounting is secure',
    'Record inspection dates',
    'Replace if damaged or expired',
    'Professional inspection annually'
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Fire Extinguisher Usage Guide
          </h1>
          <p className="mt-4 text-xl text-white">
            Learn how to properly use and maintain fire extinguishers
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PASS Method */}
        <div className={`mb-12 p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            The P.A.S.S. Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {passMethod.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                } text-center`}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {step.step}
                </h3>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Extinguishers */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Types of Fire Extinguishers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections[0].content.map((type, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {type.type}
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {type.description}
                </p>
                <div className={`mb-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Color Code: <span className="font-semibold">{type.color}</span>
                </div>
                <ul className="space-y-2">
                  {type.uses.map((use, useIndex) => (
                    <li
                      key={useIndex}
                      className={`flex items-center ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-orange-500 mr-2">•</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className={`p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Maintenance Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {maintenance.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <span className="text-orange-500 mr-2">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FireExtinguisherGuide;
