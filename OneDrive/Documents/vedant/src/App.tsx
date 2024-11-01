import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VirtualTryOn from './pages/VirtualTryOn';
import Collection from './pages/Collection';
import StateCollection from './pages/StateCollection';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-try-on" element={<VirtualTryOn />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:state" element={<StateCollection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;