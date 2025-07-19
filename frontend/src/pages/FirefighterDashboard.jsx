import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function FirefighterDashboard() {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    // Redirect if not firefighter
    if (!user || user.role !== 'firefighter') {
      navigate('/login');
    }
    fetchEmergencies();
  }, [user, navigate]);

  const fetchEmergencies = async () => {
    try {
      const response = await fetch('/api/emergencies');
      const data = await response.json();
      if (data.success) {
        setEmergencies(data.data);
      }
    } catch (error) {
      console.error('Error fetching emergencies:', error);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-4">Emergency Reports</h2>
          {emergencies.length === 0 ? (
            <p>No emergency reports found.</p>
          ) : (
            <div className="space-y-4">
              {emergencies.map((emergency) => (
                <div key={emergency._id} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <h3 className="font-semibold">{emergency.incidentType}</h3>
                  <p><strong>Location:</strong> {emergency.location}</p>
                  <p><strong>Description:</strong> {emergency.description}</p>
                  <p><strong>Casualties:</strong> {emergency.casualties || 'N/A'}</p>
                  <p><strong>Reporter:</strong> {emergency.reporter}</p>
                  <p><strong>Contact:</strong> {emergency.contact}</p>
                  <p><strong>Urgency:</strong> {emergency.urgencyLevel}</p>
                  <p><strong>Status:</strong> {emergency.status}</p>
                  <p><strong>Coordinates:</strong> {emergency.coordinates && emergency.coordinates.coordinates ? `${emergency.coordinates.coordinates[1]}, ${emergency.coordinates.coordinates[0]}` : 'N/A'}</p>
                  {emergency.mediaFiles && emergency.mediaFiles.length > 0 && (
                    <div className="mt-2">
                      <strong>Media:</strong>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {emergency.mediaFiles.map((file, idx) => {
                          let base64 = '';
                          if (file.data && typeof file.data === 'object' && file.data.type === 'Buffer' && Array.isArray(file.data.data)) {
                            // Node.js Buffer serialized as { type: 'Buffer', data: [...] }
                            base64 = btoa(String.fromCharCode.apply(null, file.data.data));
                          } else if (typeof file.data === 'string') {
                            base64 = file.data;
                          }
                          return file.fileType && file.fileType.startsWith('image/') ? (
                            <img
                              key={idx}
                              src={`data:${file.fileType};base64,${base64}`}
                              alt={file.fileName}
                              className="w-24 h-24 object-cover rounded border"
                            />
                          ) : (
                            <a
                              key={idx}
                              href={`data:${file.fileType};base64,${base64}`}
                              download={file.fileName}
                              className="text-blue-500 underline"
                            >
                              Download {file.fileName}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FirefighterDashboard;
