"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-4xl mx-auto py-4 px-4">

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center text-center mb-16"
        >
          <div className="mb-8 sm:mb-0 sm:mr-0 md:mr-16">
            <Image
              src="/dali-mask.png"
              alt="Dali Mask"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-6">
              Meet PROF.DEV
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m <span className="text-white font-semibold">Aryan Gupta</span>,
              alias <span className="italic text-red-400">PROF.DEV</span> — a
              full-stack problem-solver, digital strategist, and code tactician.
              <br />
              Like any great heist, I believe every project needs a master plan —
              from UI finesse to backend brilliance.
            </p>

            <div className="mt-8 text-left space-y-4 text-gray-300 max-w-xl mx-auto">
              <p>
                <strong className="text-red-400">🧠 Role:</strong> Full-Stack Developer
              </p>
              <p>
                <strong className="text-red-400">🎯 Mission:</strong> Engineer futuristic web experiences powered by AI, logic, and clean code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 bg-opacity-80  backdrop-blur-md p-8  rounded-2xl shadow-lg border border-zinc-700"
        >
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">
            🎓 Education Timeline
          </h2>

          <div className="text-left md:text-center space-y-12">
            {/* B.Tech */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-xl font-semibold text-white">
                National Institute of Technology, Hamirpur
              </h3>
              <p className="text-gray-400 text-sm mb-1">2023 – 2027</p>
              <p className="text-gray-300">
                B.Tech in Electrical Engineering <br />
                <span className="text-white font-medium">CGPA: 8.2</span>
              </p>
            </motion.div>

            {/* Class 12 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-xl font-semibold text-white">
                Ben Hur Public School, Pilibhit
              </h3>
              <p className="text-gray-400 text-sm mb-1">2022</p>
              <p className="text-gray-300">
                Class 12 (CBSE) –{" "}
                <span className="text-white font-medium">94%</span>
              </p>
            </motion.div>

            {/* Class 10 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-xl font-semibold text-white">
                Ben Hur Public School, Pilibhit
              </h3>
              <p className="text-gray-400 text-sm mb-1">2020</p>
              <p className="text-gray-300">
                Class 10 (CBSE) –{" "}
                <span className="text-white font-medium">91%</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
