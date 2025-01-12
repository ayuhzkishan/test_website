import React from 'react';
import anurag from '../assets/images/anurag.jpeg';
import pratyush from '../assets/images/Pratyush.jpeg';
import narayan from '../assets/images/Narayan.jpeg';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anurag Mahapatra',
      role: 'AI/ML at Enigma, VSSUT',
      image: anurag,
      content: 'Ayush\'s expertise in Android development and DevOps has been instrumental in modernizing our tech stack. His ability to bridge technical and business requirements is exceptional.'
    },
    {
      name: 'Pratyush Kumar Sahu',
      role: 'Web developer and Computer Scientist at IIC',
      image: pratyush,
      content: 'The security implementations and protocols developed by Ayush have significantly enhanced our system\'s resilience against cyber threats. His proactive approach to security is commendable.'
    },
    {
      name: 'Narayan Agarwal',
      role: 'Outreach at Enigma & Event Manager At E-Cell, VSSUT ',
      image: narayan,
      content: 'Working with Ayush in E-Cell has been a game-changer. His leadership, content management and public speaking skills have greatly enhanced our team\'s engagement and success in executing projects and events smoothly.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/20"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-blue-400">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;