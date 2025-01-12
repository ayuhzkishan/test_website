import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'SecureChat Messenger',
      category: 'Android Development',
      description: 'End-to-end encrypted messaging app with modern Material You design',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
      tags: ['Kotlin', 'Jetpack Compose', 'End-to-End Encryption'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Cloud Infrastructure Automation',
      category: 'DevOps',
      description: 'Infrastructure as Code solution for scalable cloud deployments',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      tags: ['Terraform', 'AWS', 'Docker'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Security Audit Dashboard',
      category: 'Cybersecurity',
      description: 'Real-time security monitoring and threat detection platform',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'React', 'Machine Learning'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'DevSecOps Pipeline',
      category: 'DevOps & Security',
      description: 'Automated security testing integration for CI/CD pipelines',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tags: ['Jenkins', 'OWASP', 'GitLab'],
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <span className="text-blue-400 text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;