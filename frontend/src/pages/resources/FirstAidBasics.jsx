import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function FirstAidBasics() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Burns and Scalds',
      content: [
        {
          severity: 'First Degree Burns',
          symptoms: ['Redness', 'Minor swelling', 'Pain'],
          treatment: [
            'Cool the burn under running water for 10-20 minutes',
            'Cover with sterile, non-stick bandage',
            'Take pain medication if needed',
            'Monitor for signs of infection'
          ]
        },
        {
          severity: 'Second Degree Burns',
          symptoms: ['Blisters', 'Severe pain', 'Red and splotchy skin'],
          treatment: [
            'Cool the burn under running water',
            'Do not break blisters',
            'Apply antibiotic ointment',
            'Seek medical attention'
          ]
        },
        {
          severity: 'Third Degree Burns',
          symptoms: ['White or charred skin', 'Little or no pain due to nerve damage', 'Deep tissue damage'],
          treatment: [
            'Call emergency services immediately',
            'Do not remove stuck clothing',
            'Cover with clean, dry cloth',
            'Monitor vital signs'
          ]
        }
      ]
    },
    {
      title: 'Smoke Inhalation',
      content: [
        {
          type: 'Immediate Actions',
          steps: [
            'Move to fresh air immediately',
            'Call emergency services',
            'Check breathing and circulation',
            'Begin CPR if necessary'
          ]
        },
        {
          type: 'Symptoms to Watch',
          steps: [
            'Coughing and wheezing',
            'Shortness of breath',
            'Chest pain',
            'Headache and confusion'
          ]
        }
      ]
    }
  ];

  const essentialSupplies = [
    {
      category: 'Bandages and Dressings',
      items: [
        'Sterile gauze pads',
        'Adhesive tape',
        'Elastic bandages',
        'Band-aids of various sizes'
      ]
    },
    {
      category: 'Medications',
      items: [
        'Pain relievers',
        'Antibiotic ointment',
        'Burn gel',
        'Hydrocortisone cream'
      ]
    },
    {
      category: 'Tools',
      items: [
        'Scissors',
        'Tweezers',
        'Emergency blanket',
        'Disposable gloves'
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
            First Aid Basics
          </h1>
          <p className="mt-4 text-xl text-white">
            Essential first aid knowledge for fire-related injuries
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Burns Section */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Burns and Scalds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections[0].content.map((burn, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {burn.severity}
                </h3>
                <div className="mb-4">
                  <h4 className={`font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Symptoms:
                  </h4>
                  <ul className="space-y-1">
                    {burn.symptoms.map((symptom, sIndex) => (
                      <li
                        key={sIndex}
                        className={`flex items-center ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-orange-500 mr-2">•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Treatment:
                  </h4>
                  <ul className="space-y-1">
                    {burn.treatment.map((step, tIndex) => (
                      <li
                        key={tIndex}
                        className={`flex items-start ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-orange-500 mr-2">→</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smoke Inhalation Section */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Smoke Inhalation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections[1].content.map((info, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {info.type}
                </h3>
                <ul className="space-y-2">
                  {info.steps.map((step, sIndex) => (
                    <li
                      key={sIndex}
                      className={`flex items-center ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-orange-500 mr-2">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Supplies */}
        <div className={`p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Essential First Aid Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentialSupplies.map((category, index) => (
              <div key={index}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, iIndex) => (
                    <li
                      key={iIndex}
                      className={`flex items-center ${
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
        </div>
      </div>
    </div>
  );
}

export default FirstAidBasics;
