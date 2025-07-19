import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function SafetyProtocols() {
  const { isDark } = useTheme();

  const protocols = [
    {
      title: 'Personal Protective Equipment (PPE)',
      items: [
        {
          category: 'Head Protection',
          equipment: [
            'Fire helmet with face shield',
            'Nomex hood',
            'Safety glasses/goggles',
            'Respirator mask'
          ]
        },
        {
          category: 'Body Protection',
          equipment: [
            'Fire-resistant jacket',
            'Protective trousers',
            'High-visibility vest',
            'Heat-resistant gloves'
          ]
        },
        {
          category: 'Foot Protection',
          equipment: [
            'Steel-toed boots',
            'Heat-resistant soles',
            'Waterproof construction',
            'Quick-release fasteners'
          ]
        }
      ]
    },
    {
      title: 'Safety Gear Usage Guidelines',
      items: [
        {
          category: 'Pre-Use Inspection',
          steps: [
            'Check for physical damage',
            'Verify certification dates',
            'Test all fasteners and straps',
            'Ensure proper fit'
          ]
        },
        {
          category: 'Proper Wearing Procedure',
          steps: [
            'Follow donning sequence',
            'Secure all closures',
            'Check seal integrity',
            'Verify mobility'
          ]
        },
        {
          category: 'Post-Use Care',
          steps: [
            'Clean according to guidelines',
            'Inspect for damage',
            'Document any issues',
            'Store properly'
          ]
        }
      ]
    }
  ];

  const maintenanceGuidelines = [
    {
      title: 'Daily Maintenance',
      tasks: [
        'Visual inspection of all gear',
        'Clean visible contamination',
        'Check for damage or wear',
        'Report any defects'
      ]
    },
    {
      title: 'Weekly Maintenance',
      tasks: [
        'Deep clean all equipment',
        'Test all moving parts',
        'Inspect seams and closures',
        'Update maintenance log'
      ]
    },
    {
      title: 'Monthly Maintenance',
      tasks: [
        'Professional inspection',
        'Replace worn components',
        'Certification check',
        'Inventory audit'
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
            Safety Gear Guide
          </h1>
          <p className="mt-4 text-xl text-white">
            Essential protective equipment and usage protocols
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PPE and Guidelines Sections */}
        {protocols.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`p-6 rounded-lg shadow-lg ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {item.category}
                  </h3>
                  <ul className="space-y-3">
                    {(item.equipment || item.steps).map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className={`flex items-start ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-orange-500 mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Maintenance Guidelines */}
        <div className="mt-12">
          <h2 className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Maintenance Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceGuidelines.map((guide, guideIdx) => (
              <div
                key={guideIdx}
                className={`p-6 rounded-lg shadow-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {guide.title}
                </h3>
                <ul className="space-y-3">
                  {guide.tasks.map((task, taskIdx) => (
                    <li
                      key={taskIdx}
                      className={`flex items-start ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-orange-500 mr-2">✓</span>
                      {task}
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

export default SafetyProtocols;
