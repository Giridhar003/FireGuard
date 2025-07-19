import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function EmergencyGuidelines() {
  const { isDark } = useTheme();

  const guidelines = [
    {
      title: 'Fire Emergency',
      steps: [
        'Immediately evacuate the building',
        'Call emergency services (911)',
        'Use fire extinguisher only if safe',
        'Meet at designated assembly point',
        'Do not use elevators'
      ]
    },
    {
      title: 'Medical Emergency',
      steps: [
        'Call emergency medical services',
        'Check for breathing and pulse',
        'Perform CPR if trained',
        'Use AED if available',
        'Keep the person calm and comfortable'
      ]
    },
    {
      title: 'Natural Disaster',
      steps: [
        'Stay informed through official channels',
        'Follow evacuation orders',
        'Keep emergency kit ready',
        'Stay away from windows and exterior walls',
        'Help others if safe to do so'
      ]
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Emergency Guidelines
        </h1>

        <div className="space-y-8">
          {guidelines.map((guide, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {guide.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                {guide.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className={`${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className={`mt-8 p-6 rounded-lg shadow-md ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Important Contacts
          </h2>
          <ul className="space-y-2">
            <li>Emergency Services: 911</li>
            <li>Fire Department: 1-800-FIRE</li>
            <li>Police Department: 1-800-POLICE</li>
            <li>Poison Control: 1-800-222-1222</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmergencyGuidelines;
