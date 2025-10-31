// app/team/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Users,
  Code,
  Palette,
  Megaphone,
  Award,
  Heart,
  Globe,
  Zap,
  Lightbulb,
  Coffee,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  funFact: string;
}

/* 2 Boys + 3 Girls */
const teamMembers: TeamMember[] = [
  {
    name: 'Azeesha Ali',
    role: 'Full Stack Developer',
    photo: '/images/team/Azeesha.png',
    bio: 'Azeesha builds robust, user-centric web applications with a passion for clean code and security.',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    linkedin: 'https://linkedin.com/in/azeesha-ali',
    github: 'https://github.com/azeesha',
    funFact: 'Can debug in her sleep and still wake up with a smile',
  },
  {
    name: 'Anzalna ',
    role: 'UI/UX Designer',
    photo: '/images/team/Anzalna.png',
    bio: 'Anzalna transforms complex ideas into intuitive, delightful digital experiences.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    linkedin: 'https://linkedin.com/in/priya-sharma',
    funFact: 'Believes every pixel has a purpose',
  },
  {
    name: 'Muhammad Mursaleen',
    role: 'Backend Engineer',
    photo: '/images/team/Mursaleen.png',
    bio: 'Mursaleen architects scalable systems that power millions of daily interactions.',
    skills: ['Go', 'Kubernetes', 'PostgreSQL', 'Microservices'],
    linkedin: 'https://linkedin.com/in/rahul-mehta',
    github: 'https://github.com/rahulm',
    funFact: 'Once optimized a database at 3 AM… for fun',
  },
  {
    name: 'Saqib Khan',
    role: 'Frontend Developer',
    photo: '/images/team/Saqib.png',
    bio: 'Saqib crafts pixel-perfect, accessible interfaces with a focus on performance and animation.',
    skills: ['Next.js', 'Tailwind', 'Framer Motion', 'A11y'],
    linkedin: 'https://linkedin.com/in/sofia-khan',
    github: 'https://github.com/sofiak',
    funFact: 'Secretly a CSS animation wizard',
  },
  {
    name: 'Aniqa Khan',
    role: 'DevOps Engineer',
    photo: '/images/team/Aniqa.png',
    bio: 'Aniqa keeps the lights on — automating deployments and ensuring zero downtime.',
    skills: ['Docker', 'AWS', 'CI/CD', 'Terraform'],
    linkedin: 'https://linkedin.com/in/arjun-patel',
    github: 'https://github.com/arjunp',
    funFact: 'Can deploy to production with one hand tied behind his back',
  },
];

const departments = [
  {
    name: 'Management',
    Icon: Users,
    desc: 'Our leadership team guides strategy, vision, and ensures every project aligns with client goals.',
  },
  {
    name: 'Development',
    Icon: Code,
    desc: 'Turns ideas into functional, secure, and scalable software solutions.',
  },
  {
    name: 'Design',
    Icon: Palette,
    desc: 'Crafts beautiful, intuitive interfaces that users love.',
  },
  {
    name: 'Marketing',
    Icon: Megaphone,
    desc: 'Connects solutions with the right audience through strategy and digital excellence.',
  },
];

const achievements = [
  { Icon: Award, value: '50+', label: 'Projects Delivered' },
  { Icon: Heart, value: '98%', label: 'Client Satisfaction' },
  { Icon: Globe, value: '15+', label: 'Countries Served' },
  { Icon: Zap, value: '24/7', label: 'Support Available' },
];

const values = [
  { Icon: Lightbulb, title: 'Innovation', desc: 'We push boundaries and embrace new tech.' },
  { Icon: Users, title: 'Collaboration', desc: 'Teamwork makes the dream work—always.' },
  { Icon: Heart, title: 'Passion', desc: 'We love what we do, and it shows.' },
  { Icon: Coffee, title: 'Growth', desc: 'Continuous learning is part of our DNA.' },
];

export default function TeamPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* ===== HERO / INTRODUCTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-40" />
        <div className="container relative z-10 px-4 py-24 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Meet the People Behind Our Success
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700 md:text-xl">
            Behind every successful project is a team of passionate professionals. Meet our diverse group of designers, developers, and strategists who bring creativity, expertise, and dedication to everything we do.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                Contact Our Experts
              </button>
            </Link>
            <Link href="/careers">
              <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50">
                View Careers
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute -left-20 top-20 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 blur-xl mix-blend-multiply" />
        <div className="animation-delay-2000 absolute -right-20 top-40 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 blur-xl mix-blend-multiply" />
        <div className="animation-delay-4000 absolute -bottom-20 left-40 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 blur-xl mix-blend-multiply" />
      </section>

      {/* ===== TEAM MEMBER PROFILES ===== */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Amazing Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Get to know the talented individuals who make everything possible.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  hovered === idx ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {member.funFact}
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-3 text-blue-600">{member.role}</p>
                  <p className="mb-4 text-sm text-gray-600">{member.bio}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((s, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {s}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition hover:text-gray-900"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPARTMENT OVERVIEW ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">How We Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our team is organized into specialized departments that work seamlessly together.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {departments.map(({ name, Icon, desc }, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <Icon className="mb-4 h-12 w-12 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Achievements</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Proven track record of excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map(({ Icon, value, label }, i) => (
              <div key={i} className="text-center">
                <Icon className="mx-auto mb-3 h-12 w-12 text-blue-600 md:h-16 md:w-16" />
                <div className="text-3xl font-bold text-gray-900 md:text-4xl">{value}</div>
                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CULTURE & VALUES ===== */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Culture & Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We believe in collaboration, creativity, and continuous learning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <Icon className="mb-4 h-12 w-12 text-blue-600" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-white p-8 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Life at Our Company</h3>
                <ul className="space-y-4">
                  {[
                    'Flexible remote & hybrid work options',
                    'Weekly team building & learning sessions',
                    'Annual company retreats & hackathons',
                    'Community volunteering & social impact initiatives',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Whether you're looking to join our team or need expert solutions for your business, we're here to help you succeed.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
                <Mail className="h-5 w-5" />
                Contact Our Experts
              </button>
            </Link>
            <Link href="/careers">
              <button className="flex items-center gap-2 rounded-lg border border-white bg-transparent px-6 py-3 font-medium transition hover:bg-white hover:text-gray-900">
                <Users className="h-5 w-5" />
                View Careers
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}