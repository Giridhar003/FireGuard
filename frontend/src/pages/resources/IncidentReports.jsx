import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function IncidentReports() {
  const { isDark } = useTheme();

  const inspectionChecklists = [
    {
      title: 'Fire Extinguisher Inspection',
      frequency: 'Monthly',
      items: [
        'Pressure gauge reading in normal range',
        'No physical damage to cylinder',
        'Safety pin and seal intact',
        'Nozzle clear of obstructions',
        'Accessible and visible location',
        'Updated inspection tag'
      ]
    },
    {
      title: 'Smoke Detector Check',
      frequency: 'Monthly',
      items: [
        'Test alarm function',
        'Check battery status',
        'Clean exterior housing',
        'Verify indicator lights',
        'Test backup battery',
        'Record test results'
      ]
    },
    {
      title: 'Emergency Lighting',
      frequency: 'Monthly',
      items: [
        'Verify illumination',
        'Test backup power',
        'Check mounting security',
        'Clean light covers',
        'Inspect wiring connections',
        'Test charging system'
      ]
    },
    {
      title: 'Fire Alarm System',
      frequency: 'Quarterly',
      items: [
        'Test all manual pull stations',
        'Check control panel status',
        'Verify zone indicators',
        'Test audio/visual alerts',
        'Inspect backup power supply',
        'Update maintenance records'
      ]
    }
  ];

  const documentationGuidelines = [
    {
      title: 'Required Information',
      items: [
        'Date and time of inspection',
        'Inspector name and signature',
        'Equipment serial numbers',
        'Pass/fail status of each item',
        'Notes on deficiencies',
        'Corrective actions taken'
      ]
    },
    {
      title: 'Follow-up Procedures',
      items: [
        'Schedule repairs for failed items',
        'Document completion of repairs',
        'Update maintenance history',
        'Plan next inspection date',
        'File inspection reports',
        'Notify relevant personnel'
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
            Equipment Inspection Checklist
          </h1>
          <p className="mt-4 text-xl text-white">
            Comprehensive inspection guidelines and documentation procedures
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Inspection Checklists */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Inspection Checklists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inspectionChecklists.map((checklist, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg shadow-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {checklist.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {checklist.frequency}
                  </span>
                </div>
                <ul className="space-y-3">
                  {checklist.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={`flex items-center ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Guidelines */}
        <div>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Documentation Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentationGuidelines.map((guide, idx) => (
              <div
                key={idx}
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
                  {guide.items.map((item, itemIdx) => (
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
      </div>
    </div>
  );
}

export default IncidentReports;
