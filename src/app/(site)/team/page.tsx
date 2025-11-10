"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

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

/* GIRLS */
const girls: TeamMember[] = [
  {
    name: "Azeesha Ali",
    role: "IT Role , Front-End",
    photo: "/images/team/Azeesha.png",
    bio: "Azeesha builds robust, user-centric web applications with a passion for clean code and security.",
    skills: ["React", "Node.js", "TypeScript", "GraphQL"],
    linkedin: "https://linkedin.com/in/azeesha-ali",
    github: "https://github.com/azeesha",
    funFact: "Can debug in her sleep and still wake up with a smile",
  },
  {
    name: "Anzalna Ansari",
    role: "UI/UX Designer",
    photo: "images\team\Anzalna.png",
    bio: "Anzalna transforms complex ideas into intuitive, delightful digital experiences.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    linkedin: "http://www.linkedin.com/in/anzalna-ansari-6990b7329",
    funFact: "Believes every pixel has a purpose",
  },
  {
    name: "Aniqa Khan",
    role: "DevOps Engineer",
    photo: "/images/team/Aniqa.png",
    bio: "Aniqa keeps the lights on — automating deployments and ensuring zero downtime.",
    skills: ["Docker", "AWS", "CI/CD", "Terraform"],
    linkedin: "https://linkedin.com/in/arjun-patel",
    github: "https://github.com/arjunp",
    funFact: "Can deploy to production with one hand tied behind her back",
  },
  {
    name: "Simra Malik",
    role: "Frontend Developer",
    photo: "/images/team/Simra.png",
    bio: "Simra crafts pixel-perfect, accessible interfaces with a focus on performance and animation.",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    linkedin: "https://www.linkedin.com/in/simra-malik-ab452138b",
    github: "https://github.com/simraa",
    funFact: "Once animated an entire dashboard using only CSS — and it still works in IE11",
  },
];

/* BOYS */
const boys: TeamMember[] = [
  {
    name: "Saqib Khan",
    role: "Full Stack Developer",
    photo: "/images/team/Saqib.png",
    bio: "Saqib builds robust, user-centric web applications with a passion for clean code and security.",
    skills: ["Next.js", "Tailwind", "Framer Motion", "A11y"],
    linkedin: "https://linkedin.com/in/sofia-khan",
    github: "https://github.com/sofiak",
    funFact: "Secretly a CSS animation wizard",
  },
  {
    name: "Muhammad Mursaleen",
    role: "Backend Engineer",
    photo: "/images/team/Mursaleen.png",
    bio: "Mursaleen architects scalable systems that power millions of daily interactions.",
    skills: ["Go", "Kubernetes", "PostgreSQL", "Microservices"],
    linkedin: "https://linkedin.com/in/rahul-mehta",
    github: "https://github.com/rahulm",
    funFact: "Once optimized a database at 3 AM… for fun",
  },
];

const departments = [
  {
    name: "Management",
    Icon: Users,
    desc: "Our leadership team guides strategy, vision, and ensures every project aligns with client goals.",
  },
  {
    name: "Development",
    Icon: Code,
    desc: "Turns ideas into functional, secure, and scalable software solutions.",
  },
  {
    name: "Design",
    Icon: Palette,
    desc: "Crafts beautiful, intuitive interfaces that users love.",
  },
  {
    name: "Marketing",
    Icon: Megaphone,
    desc: "Connects solutions with the right audience through strategy and digital excellence.",
  },
];

const achievements = [
  { Icon: Award, value: 200, suffix: "+", label: "Projects Delivered" },
  { Icon: Heart, value: 98, suffix: "%", label: "Client Satisfaction" },
  { Icon: Globe, value: 20, suffix: "+", label: "Countries Served" },
  { Icon: Zap, value: 24, suffix: "/7", label: "Support Available" },
];

const values = [
  { Icon: Lightbulb, title: "Innovation", desc: "We push boundaries and embrace new tech." },
  { Icon: Users, title: "Collaboration", desc: "Teamwork makes the dream work—always." },
  { Icon: Heart, title: "Passion", desc: "We love what we do, and it shows." },
  { Icon: Coffee, title: "Growth", desc: "Continuous learning is part of our DNA." },
];

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamPage(): JSX.Element {
  const allMembers: TeamMember[] = [...boys, ...girls]; // boys first as requested
  const [counts, setCounts] = useState<number[]>(achievements.map(() => 0));

  useEffect(() => {
    const timers = achievements.map((ach, i) => {
      let start = 0;
      const end = ach.value;
      const duration = 1400; // ms
      const stepTime = 30;
      const steps = Math.max(Math.floor(duration / stepTime), 1);
      const increment = end / steps;

      const t = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(t);
          setCounts((prev) => prev.map((c, idx) => (idx === i ? end : c)));
        } else {
          setCounts((prev) => prev.map((c, idx) => (idx === i ? Math.floor(start) : c)));
        }
      }, stepTime);

      return t;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-blue-50)] via-white to-[var(--color-purple-50)]"
      >
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

        <div className="absolute left-0 top-20 h-64 w-64 animate-blob rounded-full bg-[var(--color-purple-300)] opacity-60 blur-xl mix-blend-multiply md:-left-20 md:h-72 md:w-72" />
        <div className="animation-delay-2000 absolute right-0 top-40 h-64 w-64 animate-blob rounded-full bg-[var(--color-yellow-300)] opacity-60 blur-xl mix-blend-multiply md:-right-20 md:h-72 md:w-72" />
        <div className="animation-delay-4000 absolute bottom-0 left-20 h-64 w-64 animate-blob rounded-full bg-[var(--color-pink-300)] opacity-60 blur-xl mix-blend-multiply md:-bottom-20 md:left-40 md:h-72 md:w-72" />
      </motion.section>

      {/* ===== TEAM ===== */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7 }}
        className="py-24 bg-gradient-to-br from-[var(--color-blue-50)] via-white to-[var(--color-purple-50)]"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-[var(--color-gray-900)]">Our Creative Minds</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-700)]">
              Meet the brilliant individuals who innovate, design, and build everything we’re proud of.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allMembers.map((member, i) => (
              <motion.article
                key={member.name + i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/90"
              >
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="relative mb-6 h-32 w-32 rounded-full overflow-hidden border-4 border-[var(--color-blue-100)] shadow-md transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--color-gray-900)]">{member.name}</h3>
                  <p className="mb-3 text-[var(--color-blue-600)] font-medium bg-[var(--color-blue-50)] rounded-full px-4 py-1 inline-block">
                    {member.role}
                  </p>

                  <p className="mb-4 text-sm text-[var(--color-gray-600)] leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-[var(--color-gray-100)] px-3 py-1 text-xs font-medium text-[var(--color-gray-700)]"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="rounded-full bg-[var(--color-gray-100)] px-3 py-1 text-xs font-medium text-[var(--color-gray-500)]">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center gap-4 opacity-80 group-hover:opacity-100 transition">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5 text-[var(--color-blue-600)] hover:text-[var(--color-blue-700)] transition" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5 text-[var(--color-gray-700)] hover:text-[var(--color-gray-900)] transition" />
                      </a>
                    )}
                  </div>

                  <p className="mt-5 text-xs italic text-[var(--color-gray-500)] opacity-0 group-hover:opacity-100 transition">
                    “{member.funFact}”
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== DEPARTMENTS ===== */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-[var(--color-gray-50)]"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--color-gray-900)]">How We Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-600)]">
              Our team is organized into specialized departments that work seamlessly together.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
            {departments.map(({ name, Icon, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg text-center"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-[var(--color-blue-600)]" />
                <h3 className="mb-2 text-xl font-bold text-[var(--color-gray-900)]">{name}</h3>
                <p className="text-sm text-[var(--color-gray-600)]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== ACHIEVEMENTS ===== */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7 }}
        className="py-24 bg-gradient-to-br from-[var(--color-blue-100)] via-[var(--color-purple-50)] to-[var(--color-blue-50)]"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-700)]">
              Proven track record of excellence and client success.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {achievements.map(({ Icon, label, suffix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-3xl bg-white/70 backdrop-blur-lg shadow-xl border border-white/30 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[var(--color-blue-400)] to-[var(--color-accent)] text-white shadow-lg">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="text-4xl font-bold text-[var(--color-gray-900)] mb-2">
                  {counts[i]}
                  {suffix}
                </div>

                <p className="text-[var(--color-gray-600)] text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== CULTURE & VALUES ===== */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7 }}
        className="py-24 bg-gradient-to-br from-[var(--color-blue-100)] via-white to-[var(--color-purple-100)] text-[var(--color-gray-900)]"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Culture & Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-gray-700)]">
              We believe the strongest results come from a team that’s inspired, empowered, and aligned with a shared purpose.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center text-center p-6 bg-white/40 rounded-xl shadow-lg hover:bg-white/60 backdrop-blur-md"
              >
                <Icon className="h-12 w-12 mb-4 text-[var(--color-accent)]" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-gray-700)]">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-white/60 p-8 shadow-xl">
  <div className="grid gap-8 md:grid-cols-2">
    <div>
      <h3 className="mb-6 text-2xl font-bold text-[var(--color-gray-900)]">Life at Our Agency</h3>
      <ul className="space-y-4">
        {[
          "Flexible remote & hybrid work options",
          "Weekly team learning & hackathons",
          "Annual agency retreats & innovation sprints",
          "Community volunteering & social impact initiatives",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-[var(--color-gray-700)]">
            <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Team culture image */}
    <div className="hidden md:block overflow-hidden rounded-xl shadow-lg">
      <img
        src="/images/team/teamimg.png"
        alt="Team collaboration at our agency"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
</div>

        </div>
      </motion.section>

      {/* ===== CTA ===== */}
      <motion.section
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7 }}
        className="py-24 bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-purple-500)] text-white text-center"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to partner with us?
          </motion.h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
            Whether you’re looking to join our team or leverage our expertise for your next project, we’re here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="rounded-lg bg-white text-[var(--color-blue-600)] px-8 py-3 font-medium transition hover:scale-105 hover:bg-[var(--color-blue-100)]">
                Contact Our Experts
              </button>
            </Link>
            <Link href="/careers">
              <button className="rounded-lg border border-white px-8 py-3 font-medium text-white transition hover:bg-white hover:text-[var(--color-blue-600)]">
                View Careers
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
