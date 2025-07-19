import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import placeholderImg from '../assets/logo.svg';

function Trading() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'ABC Dry Chemical Fire Extinguisher',
      price: '$199.99',
      image: 'https://imgs.search.brave.com/sIFHu1o6EQ-bbSCR0_wSmeme4sA7oMY0491Oqaa32dE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlyZWhvc2VzdXBw/bHkuY29tL2Nkbi9z/aG9wL2ZpbGVzL0Zp/cmVFeHQtMDFfNjAw/eC5qcGc_dj0xNjk2/NTE0MDE5',
      description: 'Multi-purpose fire extinguisher for Class A, B, and C fires. Ideal for homes and offices.',
      category: 'Fire Extinguishers',
      rating: 4.8,
      stock: 15,
      features: ['10-pound capacity', 'Wall mount included', '12-year warranty']
    },
    {
      id: 2,
      name: 'Professional Firefighter Suit',
      price: '$1,299.99',
      image: 'https://imgs.search.brave.com/f-y55Oo71qrwfNCB-_laN2AjO4JlpNEzAFNVTtRfxMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ1MjA5MjI2L3Iv/aWwvNmFhNTk0LzU0/MzExOTc0MTAvaWxf/NjAweDYwMC41NDMx/MTk3NDEwXzc3eDMu/anBn',
      description: 'EN469 certified firefighting suit with advanced thermal protection.',
      category: 'Personal Protection',
      rating: 4.9,
      stock: 8,
      features: ['Heat resistant up to 1000°C', 'Reflective strips', 'Multiple pockets']
    },
    {
      id: 3,
      name: 'Smart Smoke Detection System',
      price: '$299.99',
      image: 'https://imgs.search.brave.com/72B1Xcy_XAPWEOtP7a-xXNpagVUNcn_A55RFpzDjO00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE3eUwtWnhFYUwu/anBn',
      description: 'IoT-enabled smoke detection system with mobile alerts and cloud connectivity.',
      category: 'Detection Systems',
      rating: 4.7,
      stock: 20,
      features: ['Mobile app control', 'Battery backup', 'Multi-room sync']
    },
    {
      id: 4,
      name: 'Emergency LED Exit Sign',
      price: '$159.99',
      image: 'https://imgs.search.brave.com/FqP8Gf-XJ8bXQwG9jJ9ymq75rlnnA86encztKp6BGCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxQ2poLVM1VmRM/LmpwZw',
      description: 'Complete emergency lighting solution with exit signs and path markers.',
      category: 'Emergency Lighting',
      rating: 4.6,
      stock: 25,
      features: ['LED technology', '48-hour backup', 'Easy installation']
    },
    {
      id: 5,
      name: 'Industrial Fire Hose System',
      price: '$549.99',
      image: 'https://imgs.search.brave.com/3pk8nQG4j4qGVJFi6ylg0YspFSBRFWJTNPam4BFu5QU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/NjcxNjI5OC9waG90/by9maXJlLXdhdGVy/LWhvc2VzLWFuZC1m/aXJlLWV4dGluZ3Vp/c2hlci1lcXVpcG1l/bnQtaW4tcmVkLWNh/YmluZXQtaXNvbGF0/ZS1vbi13aGl0ZS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/c3lreHJZQlZyLVJF/VUY5cDRrclpJS1Vz/Q2kyLU5nR21QczIz/aTZTdndJPQ',
      description: 'Professional grade fire hose system with adjustable nozzle.',
      category: 'Fire Fighting Equipment',
      rating: 4.8,
      stock: 12,
      features: ['30-meter length', 'High-pressure rated', 'Quick connect system']
    },
    {
      id: 6,
      name: 'Advanced First Aid Kit',
      price: '$189.99',
      image: 'https://imgs.search.brave.com/i37F2rFzMk8_TtkR3cAAM0hTW7AZAfZNoLZo_t0osTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9maXJzdC1haWQt/a2l0LXdoaXRlLWJh/Y2tncm91bmQtZ2Vu/ZXJhdGl2ZS1haV85/NDUzNjktODU0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA',
      description: 'Comprehensive first aid station for emergency response.',
      category: 'Medical Equipment',
      rating: 4.9,
      stock: 30,
      features: ['100+ items included', 'Wall mountable', 'Monthly checklist']
    },
    {
      id: 7,
      name: 'Fire Blanket Kit',
      price: '$79.99',
      image: 'https://imgs.search.brave.com/0jY9Qd_H-_X_c78nTT7Ltj1CC0lcD2kNn8Kns0GQSOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE3RUpKUHhNU0wu/anBn',
      description: 'Quick-deploy fire blanket for small fires and personal protection.',
      category: 'Fire Safety',
      rating: 4.7,
      stock: 40,
      features: ['1.8m x 1.8m size', 'Easy-pull tabs', 'Kitchen suitable']
    },
    {
      id: 8,
      name: 'Thermal Imaging Camera',
      price: '$2,499.99',
      image: 'https://imgs.search.brave.com/Kf0YzJPcT9MSQhDcSnnc9ptHyRnpDdUu7517b-aX9Fc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYWxy/aWdodC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/RkxJUi1FNzYuanBn',
      description: 'Professional thermal camera for fire detection and rescue operations.',
      category: 'Detection Systems',
      rating: 4.9,
      stock: 5,
      features: ['High resolution', 'Battery operated', 'Video recording']
    },
    {
      id: 9,
      name: 'Fire Resistant Gloves',
      price: '$89.99',
      image: 'https://imgs.search.brave.com/lXB8PJgVBcYZ51jJixCF_e8I42vxbIbFAhGaer-FWfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2ay15ZWpPOUwu/anBn',
      description: 'Heavy-duty fire resistant gloves for professional use.',
      category: 'Personal Protection',
      rating: 4.6,
      stock: 35,
      features: ['Heat resistant', 'Cut resistant', 'Ergonomic design']
    },
    {
      id: 10,
      name: 'Emergency Evacuation Kit',
      price: '$249.99',
      image: 'https://imgs.search.brave.com/amOTceb1skkueDpIamgRkQ302DqpnUaWu-SITGhgeAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1yODB5/c3h3NzlyL2ltYWdl/cy9zdGVuY2lsLzYw/OHg2MDgvcHJvZHVj/dHMvNTU3LzM1Njkv/Y29tcGFjdC1zdXJ2/aXZhbC1raXRfeDMw/MF9fMTEzMTMuMTU2/NDE2MjcyMi5wbmc_/Yz0y',
      description: 'Complete evacuation kit with essential survival items.',
      category: 'Emergency Equipment',
      rating: 4.8,
      stock: 15,
      features: ['72-hour supplies', 'Water purification', 'First aid included']
    },
    {
      id: 11,
      name: 'Fire Alarm Control Panel',
      price: '$899.99',
      image: 'https://imgs.search.brave.com/AWqMSzaYTiGgHKvIBcr_4W3KXGJfXYiJJ540eUm1a7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzF0SHZOVnZVVEwu/anBn',
      description: 'Centralized fire alarm control system with multiple zone monitoring.',
      category: 'Detection Systems',
      rating: 4.9,
      stock: 8,
      features: ['10-zone monitoring', 'Battery backup', 'LCD display']
    },
    {
      id: 12,
      name: 'Emergency Escape Mask',
      price: '$129.99',
      image: 'https://imgs.search.brave.com/r-yDGkENuWuu6lE2YjNN92iHuqhF0cunNfTK2lJ2YuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vdmVy/ZG9zZWtpdHMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL0lNR18xNzEy/LmpwZz92PTE3NDM4/OTcxMjYmd2lkdGg9/NzIw',
      description: 'Emergency escape hood with integrated filter for smoke protection.',
      category: 'Personal Protection',
      rating: 4.7,
      stock: 25,
      features: ['15-minute protection', 'Universal size', 'Compact storage']
    }
  ];

  const categories = [
    'All',
    'Fire Extinguishers',
    'Personal Protection',
    'Detection Systems',
    'Emergency Lighting',
    'Fire Fighting Equipment',
    'Medical Equipment',
    'Fire Safety',
    'Emergency Equipment'
  ];

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Fire Safety Equipment Store
          </h1>
          <p className="mt-4 text-xl text-white">
            Professional grade equipment for your safety needs
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className={`sticky top-16 z-10 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105
                  ${selectedCategory === category
                    ? isDark 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-gradient-to-r from-orange-400 to-red-400 text-white'
                    : isDark
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className={`rounded-lg shadow-lg p-4 mb-8 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}> 
          <h2 className="text-xl font-bold mb-2">Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="mb-2">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b py-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded border"
                      onError={e => { e.target.onerror = null; e.target.src = placeholderImg; }}
                    />
                    <span>{item.name} - {item.price}</span>
                  </div>
                  <button onClick={() => handleRemoveFromCart(idx)} className="text-red-500 hover:underline">Remove</button>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold">Total: {cart.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, '')), 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-orange-600 hover:to-red-600 transition-colors duration-300" disabled={cart.length === 0} onClick={() => { setCart([]); alert('Thank you for your purchase!'); }}>Checkout</button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group relative ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={e => { e.target.onerror = null; e.target.src = placeholderImg; }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-orange-500">
                    {parseFloat(product.price.replace(/[^\d.]/g, '')).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                  </p>
                </div>
                <p className="text-sm text-orange-500 mb-2">{product.category}</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} mb-4`}>
                  {product.description}
                </p>
                <div className="mb-4">
                  <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Key Features:
                  </h4>
                  <ul className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} list-disc list-inside`}>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className={`ml-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.rating}/5.0
                    </span>
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.stock} in stock
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-orange-600 hover:to-red-600 transition-colors duration-300" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md hover:from-green-600 hover:to-blue-600 transition-colors duration-300" onClick={() => { setCart([product]); alert('Thank you for your purchase!'); }}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Free Shipping',
                description: 'On orders over $500',
                icon: '🚚'
              },
              {
                title: 'Secure Payment',
                description: 'SSL encrypted checkout',
                icon: '🔒'
              },
              {
                title: '24/7 Support',
                description: 'Expert assistance',
                icon: '💬'
              },
              {
                title: 'Money Back',
                description: '30-day guarantee',
                icon: '💰'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-white'
                } shadow-lg text-center transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trading;
