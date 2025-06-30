"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    img: "/edvora.png",
    name: "Edvora",
    desc: "An AI-powered learning platform with YouTube integration and automated course creation.",
    github: "https://github.com/Aryan0512398/Edvora",
    demo: "https://edvora-chi-gules.vercel.app/",
    tags: ["Next.js", "Tailwind", "Gemini API"],
  },
  {
    img: "/convozo.png",
    name: "Convozo",
    desc: "A real-time chat app with AI chatbot memory using Gemini API.",
    github: "https://github.com/Aryan0512398/Convozo",
    demo: "https://convozo-self.vercel.app/",
    tags: ["React", "Socket.io", "Gemini API"],
  },
  {
    img: "/pennyPath.png",
    name: "PennyPath",
    desc: "Expense tracker with graph analysis and auto-budgeting.",
    github: "https://github.com/Aryan0512398/PennyPath",
    demo: "https://penny-path-flax.vercel.app/",
    tags: ["Next.js", "Chart.js", "PostgreSQL"],
  },
  {
    img: "/prescripto.png",
    name: "Prescripto",
    desc: "Doctor appointment booking platform with scheduling and doctor search features.",
    github: "https://github.com/Aryan0512398/Prescripto",
    demo: "https://prescripto.vercel.app/",
    tags: ["React", "MongoDB", "Tailwind"],
  },
  {
    img: "/sleepPulse.png",
    name: "SleepPulse",
    desc: "Sleep tracking and analysis platform with personalized insights.",
    github: "https://github.com/Aryan0512398/sleepPulse",
    demo: "https://sleeptracker-gamma.vercel.app/",
    tags: ["Next.js", "Chart.js", "Tailwind"],
  },
];

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-10">
          🎯 Executed Plans
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse bg-zinc-900/50 backdrop-blur-md rounded-2xl h-72"
                >
                  <div className="h-48 bg-zinc-800 rounded-t-2xl" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-zinc-700 rounded w-2/3" />
                    <div className="h-3 bg-zinc-700 rounded w-1/2" />
                    <div className="h-2 bg-zinc-700 rounded w-1/4" />
                  </div>
                </div>
              ))
            : projects.map((project, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="group relative bg-zinc-900/60 border border-zinc-700 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-red-500/40 transition duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4 z-20">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                      >
                        <FiGithub className="text-xl" /> GitHub
                      </Link>
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
                      >
                        <FiExternalLink className="text-xl" /> Live Demo
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-2">
                      {project.name}
                    </h2>
                    <p className="text-gray-300 text-sm">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-zinc-800 text-gray-400 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </PageWrapper>
  );
}
