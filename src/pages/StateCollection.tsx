import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = {
  maharashtra: [
    {
      id: 1,
      name: 'Traditional Nauvari Saree',
      price: '₹15,999',
      image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Paithani Saree',
      price: '₹25,999',
      image: 'https://images.unsplash.com/photo-1623002071804-d53b0c811bcb?auto=format&fit=crop&q=80'
    }
  ],
  gujarat: [
    {
      id: 1,
      name: 'Designer Chaniya Choli',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80'
    }
  ]
};

const StateCollection = () => {
  const { state } = useParams();
  const stateProducts = products[state as keyof typeof products] || [];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {state} Collection
          </h1>
          <p className="text-gray-600">
            Discover the finest traditional wear from {state}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors">
                  Try Virtual Fitting
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateCollection;