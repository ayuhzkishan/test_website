import React from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Experience', href: '#experience' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Blog', href: '#blog' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#020817] shadow-lg z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AK</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover-glow">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover-glow">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover-glow">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#about"
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg transition-all duration-300 text-sm"
            >
              Learn More
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-gray-400 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;