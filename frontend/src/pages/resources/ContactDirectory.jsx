import React from 'react';

function ContactDirectory() {
  const contacts = [
    {
      category: 'Emergency Command',
      personnel: [
        {
          name: 'Chief John Smith',
          position: 'Fire Chief',
          phone: '(555) 123-4567',
          email: 'chief.smith@department.com',
          image: '/images/chief.jpg'
        },
        {
          name: 'Sarah Johnson',
          position: 'Deputy Chief',
          phone: '(555) 123-4568',
          email: 'deputy.johnson@department.com',
          image: '/images/deputy-chief.jpg'
        }
      ]
    },
    {
      category: 'Station Officers',
      personnel: [
        {
          name: 'Mike Williams',
          position: 'Station 1 Captain',
          phone: '(555) 123-4569',
          email: 'captain.williams@department.com',
          image: '/images/captain1.jpg'
        },
        {
          name: 'Lisa Chen',
          position: 'Station 2 Captain',
          phone: '(555) 123-4570',
          email: 'captain.chen@department.com',
          image: '/images/captain2.jpg'
        }
      ]
    },
    {
      category: 'Special Units',
      personnel: [
        {
          name: 'Robert Martinez',
          position: 'Hazmat Team Leader',
          phone: '(555) 123-4571',
          email: 'hazmat.martinez@department.com',
          image: '/images/hazmat-leader.jpg'
        },
        {
          name: 'Emily Taylor',
          position: 'EMS Coordinator',
          phone: '(555) 123-4572',
          email: 'ems.taylor@department.com',
          image: '/images/ems-coordinator.jpg'
        }
      ]
    },
    {
      category: 'Support Services',
      personnel: [
        {
          name: 'David Wilson',
          position: 'Equipment Manager',
          phone: '(555) 123-4573',
          email: 'equipment.wilson@department.com',
          image: '/images/equipment-manager.jpg'
        },
        {
          name: 'Amanda Brown',
          position: 'Training Coordinator',
          phone: '(555) 123-4574',
          email: 'training.brown@department.com',
          image: '/images/training-coordinator.jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Directory
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Emergency and administrative contact information
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {contacts.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {category.category}
              </h3>
              <div className="grid gap-8 lg:grid-cols-2">
                {category.personnel.map((person, personIndex) => (
                  <div key={personIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="lg:flex">
                      <div className="lg:w-1/3">
                        <div className="h-48 lg:h-full">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {person.name}
                        </h4>
                        <p className="text-primary-600 font-medium mt-1">
                          {person.position}
                        </p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {person.phone}
                          </div>
                          <div className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactDirectory;
