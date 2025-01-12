import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Building Secure Android Apps with Jetpack Compose',
      excerpt: 'Learn how to implement security best practices while creating modern Android applications using Jetpack Compose.',
      date: '2024-03-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      category: 'Android Development'
    },
    {
      title: 'DevOps Best Practices for Mobile CI/CD',
      excerpt: 'Explore the latest DevOps practices and tools for building efficient mobile app deployment pipelines.',
      date: '2024-03-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      category: 'DevOps'
    },
    {
      title: 'Zero Trust Security in Modern Applications',
      excerpt: 'Understanding and implementing zero trust security architecture in today\'s distributed systems.',
      date: '2024-03-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      category: 'Security'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Latest Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;