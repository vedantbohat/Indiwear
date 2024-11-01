import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

const VirtualTryOn = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Virtual Try-On Experience</h1>
          <p className="text-gray-600">
            Experience how you look in traditional attire from different states of India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D View */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[600px]">
              <Canvas>
                <Suspense fallback={null}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <OrbitControls />
                  {/* 3D model will be loaded here */}
                </Suspense>
              </Canvas>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Select State</h3>
              <select className="w-full p-2 border rounded">
                <option>Maharashtra - Nauvari Saree</option>
                <option>Gujarat - Chaniya Choli</option>
                <option>Punjab - Patiala Suit</option>
                <option>Bengal - Traditional Saree</option>
                <option>Kerala - Kasavu</option>
              </select>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Customize</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <div className="flex space-x-2">
                    {['red', 'blue', 'green', 'yellow', 'purple'].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Size
                  </label>
                  <div className="flex space-x-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className="w-8 h-8 border rounded flex items-center justify-center text-sm"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;