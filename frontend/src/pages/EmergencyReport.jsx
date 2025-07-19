import React, { useState, useCallback, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629
};

function EmergencyReport() {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    incidentType: '',
    location: '',
    description: '',
    casualties: '',
    reporter: '',
    contact: '',
    urgencyLevel: 'medium',
    latitude: defaultCenter.lat,
    longitude: defaultCenter.lng,
    mediaFiles: []
  });
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  // Get real-time location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setFormData((prev) => ({ ...prev, latitude: lat, longitude: lng }));
          setMapCenter({ lat, lng });
        },
        (err) => {
          // Could not get location, keep default
        }
      );
    }
  }, []);

  const onDrop = useCallback(acceptedFiles => {
    setFormData(prev => ({
      ...prev,
      mediaFiles: [...prev.mediaFiles, ...acceptedFiles]
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'video/*': ['.mp4', '.mov']
    },
    maxFiles: 5
  });

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setFormData(prev => ({
      ...prev,
      latitude: lat,
      longitude: lng
    }));
  };

  // Helper to convert file to base64
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Convert files to base64
      const mediaFiles = await Promise.all(
        formData.mediaFiles.map(async file => ({
          fileName: file.name,
          fileType: file.type,
          data: await toBase64(file)
        }))
      );
      // Prepare payload
      const payload = {
        ...formData,
        mediaFiles
      };
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      };
      const response = await fetch('/api/emergencies', fetchOptions);
      if (!response.ok) {
        throw new Error('Failed to submit emergency report');
      }
      setFormData({
        incidentType: '',
        location: '',
        description: '',
        casualties: '',
        reporter: '',
        contact: '',
        urgencyLevel: 'medium',
        latitude: defaultCenter.lat,
        longitude: defaultCenter.lng,
        mediaFiles: []
      });
      alert('Emergency report submitted successfully');
    } catch (error) {
      setError('Failed to submit emergency report');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section with Emergency Animation */}
      <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl mb-4">
              Emergency Report
            </h1>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <span className="inline-flex h-3 w-3 animate-ping bg-red-600 rounded-full"></span>
              <span className="text-2xl text-white">URGENT RESPONSE SYSTEM</span>
              <span className="inline-flex h-3 w-3 animate-ping bg-red-600 rounded-full"></span>
            </div>
          </div>
          <p className="mt-4 text-xl text-white">
            Quick reporting system for emergency situations
          </p>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className={`p-8 rounded-lg shadow-lg ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}>
            {/* Location Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Your Location (Address or Landmark)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your address, landmark, or description"
                className={`w-full p-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-orange-500 transition-all`}
                required
              />
            </div>
            {/* Map Section */}
            <div className="mb-6">
              <label className={`block text-lg font-semibold mb-2`}>
                Incident Location (Click on map to set location)
              </label>
              <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={12}
                  center={mapCenter}
                  onClick={handleMapClick}
                  options={{
                    styles: isDark ? [
                      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] }
                    ] : []
                  }}
                >
                  <Marker
                    position={{
                      lat: formData.latitude,
                      lng: formData.longitude
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            </div>

            {/* Incident Type */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Type of Emergency
              </label>
              <select
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-orange-500 transition-all`}
                required
              >
                <option value="">Select Emergency Type</option>
                <option value="fire">Fire Emergency</option>
                <option value="medical">Medical Emergency</option>
                <option value="accident">Accident</option>
                <option value="hazmat">Hazardous Material</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the emergency situation"
                rows="4"
                className={`w-full p-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-orange-500 transition-all`}
                required
              ></textarea>
            </div>

            {/* Casualties */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Number of Casualties (if any)
              </label>
              <input
                type="text"
                name="casualties"
                value={formData.casualties}
                onChange={handleChange}
                placeholder="Enter number and condition of casualties"
                className={`w-full p-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-orange-500 transition-all`}
              />
            </div>

            {/* Reporter Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="reporter"
                  value={formData.reporter}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-orange-500 transition-all`}
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className={`w-full p-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-orange-500 transition-all`}
                  required
                />
              </div>
            </div>

            {/* Urgency Level */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['low', 'medium', 'high'].map((level) => (
                  <label
                    key={level}
                    className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.urgencyLevel === level
                        ? level === 'low'
                          ? 'bg-yellow-500 text-white border-yellow-600'
                          : level === 'medium'
                          ? 'bg-orange-500 text-white border-orange-600'
                          : 'bg-red-500 text-white border-red-600'
                        : isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                    } hover:bg-${level === 'low' ? 'yellow' : level === 'medium' ? 'orange' : 'red'}-500 hover:text-white`}
                  >
                    <input
                      type="radio"
                      name="urgencyLevel"
                      value={level}
                      checked={formData.urgencyLevel === level}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Upload Images/Videos
              </label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
                  isDark
                    ? 'border-gray-600 bg-gray-700 text-white'
                    : 'border-gray-300 bg-gray-50 text-gray-600'
                } ${isDragActive ? 'border-orange-500' : ''}`}
              >
                <input {...getInputProps()} />
                <p>Drag & drop images/videos here, or click to select files</p>
                <p className="text-sm mt-2">Supported formats: JPEG, PNG, MP4, MOV</p>
              </div>
              {formData.mediaFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="font-medium">
                    Selected Files:
                  </p>
                  <ul className={`list-disc pl-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {formData.mediaFiles.map((file, index) => (
                      <li key={index}>
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg text-white font-semibold bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Submit Emergency Report
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
        </form>

        {/* Emergency Contacts */}
        <div className={`mt-8 p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className="text-lg font-semibold text-red-500 mb-2">Fire Department</h3>
              <p className={isDark ? 'text-white' : 'text-gray-900'}>911</p>
            </div>
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">Police</h3>
              <p className={isDark ? 'text-white' : 'text-gray-900'}>911</p>
            </div>
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className="text-lg font-semibold text-green-500 mb-2">Ambulance</h3>
              <p className={isDark ? 'text-white' : 'text-gray-900'}>911</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyReport;
