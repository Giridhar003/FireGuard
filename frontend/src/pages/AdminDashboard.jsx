import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [firefighters, setFirefighters] = useState([]);
  const [emergencies, setEmergencies] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    // Redirect if not admin
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
    // Fetch data
    fetchFirefighters();
    fetchEmergencies();
    fetchEquipment();
  }, [user, navigate]);

  const fetchFirefighters = async () => {
    try {
      const response = await fetch('/api/users/firefighters', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setFirefighters(data.data);
      }
    } catch (error) {
      console.error('Error fetching firefighters:', error);
    }
  };

  const fetchEmergencies = async () => {
    try {
      const response = await fetch('/api/emergencies', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setEmergencies(data.data);
      }
    } catch (error) {
      console.error('Error fetching emergencies:', error);
    }
  };

  const fetchEquipment = async () => {
    try {
      const response = await fetch('/api/equipment', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setEquipment(data.data);
      }
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Firefighters Management */}
          <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Firefighters</h2>
              <button
                onClick={() => navigate('/admin/firefighters/add')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add New
              </button>
            </div>
            <div className="space-y-4">
              {firefighters.map((firefighter) => (
                <div
                  key={firefighter._id}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{firefighter.fullName}</h3>
                      <p className="text-sm">ID: {firefighter.userId}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full ${
                      firefighter.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                    } text-white`}>
                      {firefighter.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Reports */}
          <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-4">Emergency Reports</h2>
            <div className="space-y-4">
              {emergencies.map((emergency) => (
                <div
                  key={emergency._id}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <h3 className="font-semibold">{emergency.incidentType}</h3>
                  <p className="text-sm">{emergency.location}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      emergency.urgencyLevel === 'high'
                        ? 'bg-red-500 text-white'
                        : emergency.urgencyLevel === 'medium'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-green-500 text-white'
                    }`}>
                      {emergency.urgencyLevel}
                    </span>
                    <button
                      onClick={() => navigate(`/admin/emergencies/${emergency._id}`)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Management */}
          <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Equipment</h2>
              <button
                onClick={() => navigate('/admin/equipment/add')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Equipment
              </button>
            </div>
            <div className="space-y-4">
              {equipment.map((item) => (
                <div
                  key={item._id}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full ${
                      item.status === 'operational' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
