import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function EquipmentManual() {
  const { isDark } = useTheme();

  const equipmentGuides = [
    {
      title: 'Fire Extinguishers',
      items: [
        {
          name: 'ABC Powder Extinguisher',
          maintenance: [
            'Monthly pressure gauge check',
            'Annual professional inspection',
            'Replace every 12 years',
            'Keep in easily accessible locations'
          ]
        },
        {
          name: 'CO2 Extinguisher',
          maintenance: [
            'Check for physical damage monthly',
            'Weigh annually to verify contents',
            'Inspect hose and horn condition',
            'Professional testing every 5 years'
          ]
        }
      ]
    },
    {
      title: 'Smoke Detectors',
      items: [
        {
          name: 'Ionization Detectors',
          maintenance: [
            'Test monthly using test button',
            'Clean every 6 months',
            'Replace batteries annually',
            'Replace unit every 10 years'
          ]
        },
        {
          name: 'Photoelectric Detectors',
          maintenance: [
            'Monthly sensitivity testing',
            'Vacuum clean every 6 months',
            'Battery replacement schedule',
            'Full replacement after 10 years'
          ]
        }
      ]
    },
    {
      title: 'Emergency Lighting',
      items: [
        {
          name: 'Exit Signs',
          maintenance: [
            'Monthly illumination check',
            'Battery backup testing',
            'Clean fixtures quarterly',
            'Replace bulbs as needed'
          ]
        },
        {
          name: 'Emergency Lights',
          maintenance: [
            'Test operation monthly',
            'Check battery charge level',
            'Clean light covers',
            'Annual load testing'
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
            Equipment Maintenance Guide
          </h1>
          <p className="mt-4 text-xl text-white">
            Comprehensive maintenance procedures for fire safety equipment
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {equipmentGuides.map((guide, guideIdx) => (
            <div key={guideIdx}>
              <h2 className={`text-3xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {guide.title}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {guide.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`p-6 rounded-lg shadow-lg ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                      {item.name}
                    </h3>
                    <ul className="space-y-3">
                      {item.maintenance.map((step, stepIdx) => (
                        <li
                          key={stepIdx}
                          className={`flex items-start ${
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
          ))}
        </div>

        {/* Maintenance Schedule */}
        <div className={`mt-12 p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            General Maintenance Schedule
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <div>
              <h3 className={`font-semibold mb-2 ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                Monthly Checks
              </h3>
              <ul className="space-y-2">
                <li>Visual inspections</li>
                <li>Pressure gauge readings</li>
                <li>Battery tests</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                Quarterly Service
              </h3>
              <ul className="space-y-2">
                <li>Deep cleaning</li>
                <li>Function testing</li>
                <li>Parts inspection</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                Annual Maintenance
              </h3>
              <ul className="space-y-2">
                <li>Professional inspection</li>
                <li>Certification renewal</li>
                <li>Parts replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentManual;
