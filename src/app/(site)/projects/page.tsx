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
}

const projects: Project[] = [
  {
    title: 'Student FYP Dashboard',
    description: 'Real-time project tracker with AI grading & team collaboration.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '/projects/fyp',
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'Flutter app with AR try-on and instant checkout.',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    link: '/projects/ecommerce',
  },
  {
    title: 'Healthcare Design System',
    description: 'Figma kit for telemedicine with accessibility focus.',
    tags: ['Figma', 'Design System', 'A11y'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    link: '/projects/healthcare',
  },
  {
    title: 'SaaS Analytics PWA',
    description: 'Offline-first dashboard with real-time charts.',
    tags: ['PWA', 'Chart.js', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '/projects/saas',
  },
  {
    title: 'Corporate Site Redesign',
    description: 'Next.js + Framer Motion with micro-interactions.',
    tags: ['Next.js', 'Framer', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    link: '/projects/corporate',
  },
  {
    title: 'DevOps Automation',
    description: 'Kubernetes pipeline with zero-downtime deploys.',
    tags: ['Kubernetes', 'Terraform', 'AWS'],
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&h=600&fit=crop',
    link: '/projects/devops',
  },
];

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-blue-50)] via-white to-[var(--color-blue-50)]">
      {/* ===== HERO + PROJECTS – Split Layout ===== */}
      <section className="pt-16 pb-32 md:pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Big Responsive Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-gray-900)] leading-tight">
                The work we do,
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-800)]">
                  and the people we help.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--color-gray-600)] max-w-lg">
                Explore live demos, source code, and creative experiments built for students, startups, and enterprises.
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '160px' }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1.5 bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-800)] rounded-full"
              />
            </motion.div>

            {/* RIGHT: Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {projects.map((project, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-[var(--color-blue-100)] shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[var(--color-blue-300)]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-blue-900)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-[var(--color-blue-700)] font-semibold shadow-lg hover:bg-[var(--color-blue-50)] transition-all"
                      >
                        View Live
                        <Icon icon="tabler:external-link" width="18" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-600)] text-white shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-gray-900)] mb-2 group-hover:text-[var(--color-blue-600)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-gray-600)] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 text-[var(--color-blue-600)] font-medium hover:gap-3 transition-all text-sm"
                      >
                        View Project
                        <Icon icon="tabler:arrow-right" width="16" className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href={project.link + '?source'}
                        className="text-[var(--color-gray-500)] hover:text-[var(--color-blue-600)] transition-colors text-xs"
                      >
                        Source Code
                      </Link>
                    </div>
                  </div>

                  {/* Blue Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--color-blue-400)]/20 to-[var(--color-blue-600)]/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 -z-10" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}