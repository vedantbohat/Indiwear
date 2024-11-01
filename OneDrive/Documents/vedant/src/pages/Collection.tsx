import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const states = [
  {
    name: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80',
    attire: 'Nauvari Saree'
  },
  {
    name: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80',
    attire: 'Chaniya Choli'
  },
  {
    name: 'Punjab',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80',
    attire: 'Patiala Suit'
  },
  {
    name: 'Bengal',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80',
    attire: 'Traditional Saree'
  },
  {
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80',
    attire: 'Kasavu'
  },
  {
    name: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80',
    attire: 'Ghagra Choli'
  }
];

const Collection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Traditional Attire Collection</h1>
          <p className="text-gray-600">
            Explore traditional wear from different states of India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.map((state, index) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/collection/${state.name.toLowerCase()}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="relative h-80">
                    <img
                      src={state.image}
                      alt={state.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-semibold">{state.name}</h3>
                      <p className="text-gray-200">{state.attire}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;