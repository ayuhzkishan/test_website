import React from 'react';
import { ChevronDown } from 'lucide-react';
import MyImage from '../assets/images/cool.jpg'; // Import the image

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Ayush Kishan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Android Developer | DevOps Enthusiast | Cybersecurity Professional | Public Relations Expert
            </p>
            <div className="space-x-4">
              <a
                href="#about"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Learn More About Me
              </a>
              <a
                href="#portfolio"
                className="inline-block px-8 py-3 border-2 border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-950/30 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-400/20 shadow-2xl shadow-indigo-500/20">
                <img
                  src={MyImage} // Use the imported image here
                  alt="Ayush Kishan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-indigo-500/50">
                10+ Years Experience
              </div>
              */}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
