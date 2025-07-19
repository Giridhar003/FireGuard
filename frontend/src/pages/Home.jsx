import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5',
      title: 'Emergency Response',
      description: 'Professional firefighters ready to respond 24/7'
    },
    {
      url: 'https://imgs.search.brave.com/uLj9l4cKIy_njU4H1DdiOPGzOXUmoKntmMVC3SyIY8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQ1LzQyLzE1/LzM2MF9GXzY0NTQy/MTU2MV9xdTJJbzU0/cXJVeUpqMzQyc1g2/SWpDdEhxNnZ3MEtm/eC5qcGc',
      title: 'Advanced Equipment',
      description: 'State-of-the-art fire fighting equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce',
      title: 'Rapid Response',
      description: 'Quick deployment for emergency situations'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const emergencyServices = [
    {
      title: "Fire Emergency",
      description: "Immediate response for fire-related emergencies",
      icon: "🚒",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Medical Support",
      description: "First aid and medical emergency assistance",
      icon: "🏥",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Rescue Operations",
      description: "Professional rescue team for critical situations",
      icon: "🚁",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8 animate-fade-in-up">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/emergency-report"
                    className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Report Emergency
                  </Link>
                  <a
                    href="tel:112"
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{ textAlign: 'center' }}
                  >
                    Call Emergency
                  </a>
                  <Link
                    to="/resources"
                    className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    View Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Carousel Navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Emergency Services Section */}
      <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Emergency Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-75 group-hover:opacity-90 transition-opacity duration-300`}></div>
                <div className="relative p-8 text-white">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                  <div className="mt-6">
                    <Link
                      to="/emergency-report"
                      className="inline-flex items-center text-sm font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Emergencies Handled' },
              { number: '24/7', label: 'Support Available' },
              { number: '500+', label: 'Trained Personnel' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-xl text-orange-100">
              Join us in making the world a safer place.
            </p>
            <div className="mt-8">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-white hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;