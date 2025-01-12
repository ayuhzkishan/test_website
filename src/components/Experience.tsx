import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'UnderGrad Student at \n VSSUT, BURLA.',
      Institute: 'VSSUT, BURLA.',
      period: '2023 - 2027(Expected)',
      description: 'An enthusiastic and proactive student, consistently striving for excellence in both academics and extracurricular activities.',
      achievements: [
        'Demonstrated strong understanding of DBMS, DS, CN, OOPs,JAVA and Python through practical projects and coursework.',
        'Contributed to co-curricular activities, fostering teamwork and leadership skills.',
        'Actively participated in technical workshops and seminars to stay updated with the latest industry trends.'
      ]
    },
    {
      title: 'Public Relations at \n E-Cell, VSSUT.',
      company: 'E-Cell, VSSUT.',
      period: 'March, 2024 - Present',
      description: 'Core member of E-Cell, VSSUT, contributing to content creation, public engagement, and organizing events that foster collaboration and innovation.',
      achievements: [
        'Successfully organized E-Summit 2024, attracting participation from key industry leaders and professionals.',
        'Hosted the BOEING BUILD 4.0 Seinsitization Camp in collaboration with KIIT TBI, providing valuable insights to participants',
        'Organized "Chai Pe Charcha" and a Financial Management and Stocknmarket Exposure online bootcamp to promote entrepreneurial knowledge and financial literacy.'
      ]
    },
    {
      title: 'Android App Developer and Cybersecurity at Enigma, VSSUT',
      company: 'Enigma, VSSUT',
      period: 'March, 2024 - present',
      description: 'Android App Developer and Cybersecurity expert at Enigma, VSSUT, focusing on developing innovative solutions and enhancing security measures.',
      achievements: [
        'Built a data collection app for the college, streamlining and simplifying the job induction process, improving efficiency for both students and recruiters.',
        
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Professional Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-blue-400/20" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                          <p className="text-gray-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;