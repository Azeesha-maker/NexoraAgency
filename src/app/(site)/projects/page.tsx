'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Student FYP Dashboard',
    description: 'Real-time project tracker with AI grading & team collaboration for university students.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'AI'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '/projects/fyp',
    category: 'Web App'
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'Flutter app with AR try-on features and instant checkout system.',
    tags: ['Flutter', 'Firebase', 'Stripe', 'AR'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    link: '/projects/ecommerce',
    category: 'Mobile'
  },
  {
    title: 'Healthcare Design System',
    description: 'Comprehensive Figma kit for telemedicine with accessibility focus.',
    tags: ['Figma', 'Design System', 'A11y', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    link: '/projects/healthcare',
    category: 'Design'
  },
  {
    title: 'SaaS Analytics PWA',
    description: 'Offline-first dashboard with real-time charts and analytics.',
    tags: ['PWA', 'Chart.js', 'Vercel', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '/projects/saas',
    category: 'Web App'
  },
  {
    title: 'Corporate Site Redesign',
    description: 'Next.js + Framer Motion with smooth micro-interactions.',
    tags: ['Next.js', 'Framer', 'GSAP', 'Animation'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    link: '/projects/corporate',
    category: 'Website'
  },
  {
    title: 'DevOps Automation',
    description: 'Kubernetes pipeline with zero-downtime deployments.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&h=600&fit=crop',
    link: '/projects/devops',
    category: 'Backend'
  },
  {
    title: 'AI Content Generator',
    description: 'GPT-4 powered content creation platform with multi-language support.',
    tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    link: '/projects/ai-content',
    category: 'AI/ML'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Cross-platform fitness app with workout plans and progress tracking.',
    tags: ['React Native', 'Firebase', 'HealthKit', 'Redux'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    link: '/projects/fitness-app',
    category: 'Mobile'
  },
  {
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support.',
    tags: ['Web3.js', 'Ethereum', 'Solidity', 'MetaMask'],
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
    link: '/projects/crypto-wallet',
    category: 'Blockchain'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Unified dashboard for managing multiple social media accounts.',
    tags: ['Vue.js', 'Express', 'MySQL', 'API'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    link: '/projects/social-dashboard',
    category: 'Web App'
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive learning platform with video streaming and quizzes.',
    tags: ['Laravel', 'Vue.js', 'WebRTC', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    link: '/projects/elearning',
    category: 'Web App'
  },
  {
    title: 'Food Delivery App',
    description: 'Food delivery service with real-time tracking and payments.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    link: '/projects/food-delivery',
    category: 'Mobile'
  },
  {
    title: 'Portfolio Website',
    description: 'Minimal portfolio website with dark mode and animations.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1556655852-ef5ae4e7bdf0?w=800&h=600&fit=crop',
    link: '/projects/portfolio',
    category: 'Website'
  },
  {
    title: 'Task Management Tool',
    description: 'Collaborative task management with kanban boards and time tracking.',
    tags: ['Angular', 'NestJS', 'PostgreSQL', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    link: '/projects/task-management',
    category: 'Web App'
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with detailed forecasts and maps.',
    tags: ['React', 'Weather API', 'Chart.js', 'PWA'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    link: '/projects/weather-app',
    category: 'Mobile'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours and AI recommendations.',
    tags: ['Next.js', 'Python', 'Redis', 'AWS'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    link: '/projects/real-estate',
    category: 'Web App'
  }
];

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const categories = ['All', 'Web App', 'Mobile', 'Design', 'Website', 'Backend', 'AI/ML', 'Blockchain'];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section className="pt-20 pb-32 md:pt-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon icon="tabler:star" width="16" />
              Featured Projects
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our Creative
              <span className="block bg-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover {projects.length}+ innovative solutions crafted with cutting edge technology 
              and creative design for students, startups, and enterprises.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleProjects(6);
                  }}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-primary border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {projectsToShow.length} of {filteredProjects.length} projects 
              in <span className="font-semibold text-primary">{activeCategory}</span>
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40">
                    <div className="text-center">
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-primary font-semibold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                      >
                        View Project
                        <Icon icon="tabler:arrow-right" width="18" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-white shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 text-sm"
                    >
                      View Details
                      <Icon icon="tabler:arrow-right" width="16" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <Icon icon="tabler:heart" width="18" />
                      </button>
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <Icon icon="tabler:share" width="18" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <button 
                onClick={loadMore}
                className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <Icon icon="tabler:loader" width="20" />
                Load More Projects ({filteredProjects.length - visibleProjects} remaining)
              </button>
            </motion.div>
          )}

          {/* All Projects Loaded Message */}
          {visibleProjects >= filteredProjects.length && filteredProjects.length > 0 && (
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl">
                <Icon icon="tabler:check" width="20" />
                All {filteredProjects.length} projects loaded
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}