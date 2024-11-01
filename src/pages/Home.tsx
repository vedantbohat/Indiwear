import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80"
            alt="Traditional Indian Attire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Experience Traditional Elegance
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover the finest collection of traditional wear from across India
              </p>
              <Link
                to="/virtual-try-on"
                className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Try Virtual Fitting
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Wedding Collection",
              image: "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80",
            },
            {
              title: "Festival Wear",
              image: "https://images.unsplash.com/photo-1623002071804-d53b0c811bcb?auto=format&fit=crop&q=80",
            },
            {
              title: "Regional Specials",
              image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80",
            },
          ].map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">{collection.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Virtual Try-On Feature */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Virtual Try-On Experience</h2>
              <p className="text-gray-600 mb-8">
                Experience our revolutionary 3D virtual try-on technology. See how you look
                in traditional attire from different states of India without stepping out
                of your home.
              </p>
              <Link
                to="/virtual-try-on"
                className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Try Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80"
                alt="Virtual Try-On"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;