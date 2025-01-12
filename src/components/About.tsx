import React from 'react';
import { Code, Server, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate technologist with a deep love for creating innovative solutions. With experience
              in Android development, DevOps practices and cybersecurity, I bring a unique blend of technical expertise and
              strategic thinking to every project.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to build secure, scalable solutions that make
              a real difference. I combine my technical skills with strong communication abilities, making complex concepts
              accessible to diverse audiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <Code className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Android Dev</h3>
              <p className="text-gray-400">Expert in Kotlin, Java, and modern Android architecture</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <Server className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">DevOps</h3>
              <p className="text-gray-400">Streamlining development with modern CI/CD practices</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
              <p className="text-gray-400">Implementing robust security measures and best practices</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">PR Expert</h3>
              <p className="text-gray-400">Building bridges between tech and business stakeholders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;