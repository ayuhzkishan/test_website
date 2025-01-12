import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  placeholder="Ayush Kishan"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  placeholder="ayush@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:ayush.kishan29@gmail.com.com" className="text-white hover:text-blue-400">
                    ayush.kishan29@gmail.com.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a href="tel:+91 78949-74368" className="text-white hover:text-blue-400">
                      +91 78949-74368
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Sambalpur, Odisha IN</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect with Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;