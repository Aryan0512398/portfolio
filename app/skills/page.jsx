"use client";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: "React.js", icon: <SiReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
  { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
];

export default function SkillsPage() {
  const [scattered, setScattered] = useState(true);

  const generateRandomPosition = () => {
    const x = Math.random() * 300 - 150; // range: -150 to 150
    const y = Math.random() * 300 - 150;
    const rotate = Math.random() * 60 - 30;
    return { x, y, rotate };
  };

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-red-600 mb-4"
        >
          The Toolkit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-300 mb-10"
        >
          Tap to {scattered ? "organize" : "scatter"} the skills.
        </motion.p>

        <div
          className={`relative flex flex-wrap justify-center gap-6 ${
            !scattered ? "grid grid-cols-2 md:grid-cols-3" : ""
          }`}
        >
          {skills.map((tool, i) => {
            const { x, y, rotate } = generateRandomPosition();

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={
                  scattered
                    ? { x, y, rotate, opacity: 1 }
                    : { x: 0, y: 0, rotate: 0, opacity: 1 }
                }
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setScattered(!scattered)}
                className="cursor-pointer bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-white text-lg font-semibold shadow-md flex items-center justify-center gap-3 min-w-[160px]"
              >
                <span className="text-2xl">{tool.icon}</span>
                {tool.name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
