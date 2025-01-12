import React from 'react';
import { 
  Smartphone, GitBranch, Lock, Users2, Brain, Workflow,
  Layers, Database, Cloud, Shield, Code, Cpu,
  Fingerprint, Bug, FileCode, Server, GitFork, Container,
  Mic, Presentation
} from 'lucide-react';

const Skills = () => {
  const skills = {
    android: [
      { name: 'Kotlin', icon: Code },
      { name: 'Java', icon: FileCode },
      { name: 'Jetpack Compose', icon: Layers },
      { name: 'Android Architecture', icon: Smartphone },
      { name: 'Firebase', icon: Database },
      { name: 'Material Design', icon: Cpu },
    ],
    devops: [
      { name: 'Docker', icon: Container },
      { name: 'Kubernetes', icon: GitFork },
      { name: 'CI/CD', icon: GitBranch },
      { name: 'AWS', icon: Cloud },
      { name: 'Infrastructure as Code', icon: Server },
    ],
    security: [
      { name: 'Penetration Testing', icon: Bug },
      { name: 'Secure Coding', icon: Shield },
      { name: 'Threat Modeling', icon: Lock },
      { name: 'Security Auditing', icon: Fingerprint },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-[#030712]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Android Development */}
          <div className="bg-gray-900/30 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center mb-8">
              <Smartphone className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Android</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.android.map((skill) => (
                <div key={skill.name} className="group flex flex-col items-center text-center p-4 rounded-lg bg-gray-950/50 hover:bg-blue-500/10 transition-colors border border-gray-800 hover:border-blue-400/50">
                  <skill.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:text-blue-300" />
                  <span className="text-gray-300 group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-gray-900/30 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center mb-8">
              <GitBranch className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">DevOps</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.devops.map((skill) => (
                <div key={skill.name} className="group flex flex-col items-center text-center p-4 rounded-lg bg-gray-950/50 hover:bg-blue-500/10 transition-colors border border-gray-800 hover:border-blue-400/50">
                  <skill.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:text-blue-300" />
                  <span className="text-gray-300 group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-gray-900/30 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center mb-8">
              <Lock className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Security</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.security.map((skill) => (
                <div key={skill.name} className="group flex flex-col items-center text-center p-4 rounded-lg bg-gray-950/50 hover:bg-blue-500/10 transition-colors border border-gray-800 hover:border-blue-400/50">
                  <skill.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:text-blue-300" />
                  <span className="text-gray-300 group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-12">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900/20 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <Users2 className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Leadership</h4>
              <p className="text-gray-400">Leading cross-functional teams and mentoring junior developers</p>
            </div>
            <div className="bg-gray-900/20 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <Brain className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Problem Solving</h4>
              <p className="text-gray-400">Analytical thinking and innovative solution design</p>
            </div>
            <div className="bg-gray-900/20 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <Mic className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Public Speaking</h4>
              <p className="text-gray-400">Conference presentations and technical workshops facilitation</p>
            </div>
            <div className="bg-gray-900/20 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <Presentation className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Event Hosting</h4>
              <p className="text-gray-400">Tech conferences and community meetup organization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;