import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function TrainingMaterials() {
  const { isDark } = useTheme();

  const materials = [
    {
      title: 'Basic First Aid',
      description: 'Learn essential first aid techniques and procedures.',
      modules: [
        'CPR and Basic Life Support',
        'Wound Care and Bandaging',
        'Burns Treatment',
        'Fracture Management',
        'Emergency Response Protocols'
      ]
    },
    {
      title: 'Fire Safety',
      description: 'Comprehensive fire safety training materials.',
      modules: [
        'Fire Prevention',
        'Fire Extinguisher Usage',
        'Evacuation Procedures',
        'Smoke Detection',
        'Emergency Communication'
      ]
    },
    {
      title: 'Disaster Preparedness',
      description: 'Be prepared for natural and man-made disasters.',
      modules: [
        'Emergency Kit Preparation',
        'Evacuation Planning',
        'Communication During Disasters',
        'Shelter Management',
        'Post-Disaster Recovery'
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
          Training Materials
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {materials.map((material, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {material.title}
              </h2>
              <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {material.description}
              </p>
              <h3 className={`font-medium mb-2 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Modules:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {material.modules.map((module, moduleIndex) => (
                  <li
                    key={moduleIndex}
                    className={`${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {module}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-4 px-4 py-2 rounded-md text-white ${
                  isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                Access Material
              </button>
            </div>
          ))}
        </div>

        <div className={`mt-8 p-6 rounded-lg shadow-md ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Additional Resources
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">Download Training Schedule</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Certification Programs</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Training Videos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrainingMaterials;
