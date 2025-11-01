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

/* GIRLS – Top Row (4) */
const girls: TeamMember[] = [
  {
    name: 'Azeesha Ali',
    role: 'IT Role , Front-End',
    photo: '/images/team/Azeesha.png',
    bio: 'Azeesha builds robust, user-centric web applications with a passion for clean code and security.',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    linkedin: 'https://linkedin.com/in/azeesha-ali',
    github: 'https://github.com/azeesha',
    funFact: 'Can debug in her sleep and still wake up with a smile',
  },
  {
    name: 'Anzalna',
    role: 'UI/UX Designer',
    photo: '/images/team/Anzalna.png',
    bio: 'Anzalna transforms complex ideas into intuitive, delightful digital experiences.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    linkedin: 'http://www.linkedin.com/in/anzalna-ansari-6990b7329',
    funFact: 'Believes every pixel has a purpose',
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
  {
    name: 'Simra Malik',
    role: 'Frontend Developer',
    photo: '/images/team/Simra.png',
    bio: 'Simra crafts pixel-perfect, accessible interfaces with a focus on performance and animation.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    linkedin: 'https://www.linkedin.com/in/simra-malik-ab452138b ',
    github: 'https://github.com/simraa',
    funFact: 'Once animated an entire dashboard using only CSS — and it still works in IE11',
  },
];

/* BOYS – Bottom Row (2) */
const boys: TeamMember[] = [
  {
    name: 'Saqib Khan',
    role: 'Full Stack Developer',
    photo: '/images/team/Saqib.png',
    bio: 'Saqib builds robust, user-centric web applications with a passion for clean code and security.',
    skills: ['Next.js', 'Tailwind', 'Framer Motion', 'A11y'],
    linkedin: 'https://linkedin.com/in/sofia-khan',
    github: 'https://github.com/sofiak',
    funFact: 'Secretly a CSS animation wizard',
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
];

const departments = [
  { name: 'Management', Icon: Users, desc: 'Our leadership team guides strategy, vision, and ensures every project aligns with client goals.' },
  { name: 'Development', Icon: Code, desc: 'Turns ideas into functional, secure, and scalable software solutions.' },
  { name: 'Design', Icon: Palette, desc: 'Crafts beautiful, intuitive interfaces that users love.' },
  { name: 'Marketing', Icon: Megaphone, desc: 'Connects solutions with the right audience through strategy and digital excellence.' },
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

  const TeamCard = (member: TeamMember, index: number) => (
    <div
      key={index}
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${hovered === index ? 'ring-2 ring-blue-500' : ''
        }`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          {member.funFact}
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-gray-900)]">{member.name}</h3>
        <p className="mb-3 text-[var(--color-blue-600)]">{member.role}</p>
        <p className="mb-4 text-sm text-[var(--color-gray-600)]">{member.bio}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {member.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="rounded-full bg-[var(--color-gray-100)] px-3 py-1 text-xs font-medium text-[var(--color-gray-700)]">
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="rounded-full bg-[var(--color-gray-100)] px-3 py-1 text-xs font-medium text-[var(--color-gray-500)]">
              +{member.skills.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-400)] transition hover:text-[var(--color-blue-600)]">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-400)] transition hover:text-[var(--color-gray-900)]">
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-blue-50)] via-white to-[var(--color-purple-50)]">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-40" />
        <div className="container mx-auto px-4 py-24 text-center relative z-10">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[var(--color-gray-900)] md:text-6xl">
            Meet the People Behind Our Success
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-[var(--color-gray-700)] md:text-xl">
            Behind every successful project is a team of passionate professionals. Meet our diverse group of designers, developers, and strategists who bring creativity, expertise, and dedication to everything we do.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="rounded-lg bg-[var(--color-blue-600)] px-6 py-3 font-medium text-white transition hover:bg-[var(--color-blue-700)] cursor-pointer">
                Contact Our Experts
              </button>
            </Link>
            <Link href="/careers">
              <button className="rounded-lg border border-[var(--color-gray-300)] bg-white px-6 py-3 font-medium text-[var(--color-gray-900)] transition hover:bg-[var(--color-gray-50)] cursor-pointer">
                View Careers
              </button>
            </Link>
          </div>
        </div>

        {/* Responsive Blobs */}
        <div className="absolute left-0 top-20 h-64 w-64 animate-blob rounded-full bg-[var(--color-purple-300)] opacity-60 blur-xl mix-blend-multiply md:-left-20 md:h-72 md:w-72" />
        <div className="animation-delay-2000 absolute right-0 top-40 h-64 w-64 animate-blob rounded-full bg-[var(--color-yellow-300)] opacity-60 blur-xl mix-blend-multiply md:-right-20 md:h-72 md:w-72" />
        <div className="animation-delay-4000 absolute bottom-0 left-20 h-64 w-64 animate-blob rounded-full bg-[var(--color-pink-300)] opacity-60 blur-xl mix-blend-multiply md:-bottom-20 md:left-40 md:h-72 md:w-72" />
      </section>

      {/* ===== TEAM – 4 GIRLS + 2 BOYS (SAME SIZE) ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--color-gray-900)]">Our Amazing Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-600)]">
              Get to know the talented individuals who make everything possible.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3 justify-center">
            <div className="hidden lg:block" /> {/* Spacer */}
            {boys.map((m, i) => TeamCard(m, girls.length + i))}
            <div className="hidden lg:block" /> {/* Spacer */}
            {girls.map((m, i) => TeamCard(m, i))}
          </div>
        </div>
      </section>

      {/* ===== DEPARTMENTS ===== */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--color-gray-900)]">How We Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-600)]">
              Our team is organized into specialized departments that work seamlessly together.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
            {departments.map(({ name, Icon, desc }, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg text-center">
                <Icon className="mx-auto mb-4 h-12 w-12 text-[var(--color-blue-600)]" />
                <h3 className="mb-2 text-xl font-bold text-[var(--color-gray-900)]">{name}</h3>
                <p className="text-sm text-[var(--color-gray-600)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--color-gray-900)]">Our Achievements</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-600)]">
              Proven track record of excellence and client success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 justify-center">
            {achievements.map(({ Icon, value, label }, i) => (
              <div key={i} className="text-center">
                <Icon className="mx-auto mb-3 h-12 w-12 text-[var(--color-blue-600)] md:h-16 md:w-16" />
                <div className="text-3xl font-bold text-[var(--color-gray-900)] md:text-4xl">{value}</div>
                <p className="text-[var(--color-gray-600)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CULTURE & VALUES ===== */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-blue-50)] to-[var(--color-purple-50)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--color-gray-900)]">Our Culture & Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-600)]">
              We believe in collaboration, creativity, and continuous learning.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
            {values.map(({ Icon, title, desc }, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl text-center">
                <Icon className="mx-auto mb-4 h-12 w-12 text-[var(--color-blue-600)]" />
                <h3 className="mb-2 text-xl font-bold text-[var(--color-gray-900)]">{title}</h3>
                <p className="text-sm text-[var(--color-gray-600)]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-white p-8 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-[var(--color-gray-900)]">Life at Our Company</h3>
                <ul className="space-y-4">
                  {[
                    'Flexible remote & hybrid work options',
                    'Weekly team building & learning sessions',
                    'Annual company retreats & hackathons',
                    'Community volunteering & social impact initiatives',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-blue-600)]" />
                      <span className="text-[var(--color-gray-700)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--color-gray-200)] border-2 border-dashed rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[var(--color-gray-900)] text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-gray-300)]">
            Whether you're looking to join our team or need expert solutions for your business, we're here to help you succeed.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-lg bg-[var(--color-blue-600)] px-6 py-3 font-medium transition hover:bg-[var(--color-blue-700)] cursor-pointer">
                <Mail className="h-5 w-5" />
                Contact Our Experts
              </button>
            </Link>
            <Link href="/careers">
              <button className="flex items-center gap-2 rounded-lg border border-white bg-transparent px-6 py-3 font-medium transition hover:bg-white hover:text-[var(--color-gray-900)] cursor-pointer">
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