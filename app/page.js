"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/Contact";
import { Button } from "@/components/ui/button";
import Resume from "@/components/resume";
import About from "@/components/about";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  // Handle "Enter" key
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Enter" && !unlocked) handleUnlock();
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [code]);

  const handleUnlock = () => {
    if (code.toLowerCase() === "professor") {
      setUnlocked(true);
      audioRef.current?.play();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <PageWrapper>
      {!unlocked ? (
        // 🔒 Lock Screen UI
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white bg-black"
          style={{
            backgroundImage: `url('/vault-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Image
              src="/dali-mask.png"
              alt="Vault Mask"
              width={100}
              height={100}
              className="mb-6 drop-shadow-md"
            />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
            Secure Vault Access
          </h1>

          {/* Terminal Input Prompt */}
          <div className="bg-black/80 text-green-400 font-mono px-6 py-4 rounded-lg shadow-md mb-6 w-[90%] max-w-md text-left border border-green-500">
            <p>$ Enter access key:</p>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={`bg-transparent border-none outline-none text-green-300 w-full mt-2 ${
                error ? "animate-shake text-red-500" : ""
              }`}
              autoFocus
              placeholder="professor"
            />
            {error && (
              <p className="text-sm text-red-500 mt-2">Access Denied</p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95, rotate: [-1, 0, 1, 0] }}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full shadow-xl hover:shadow-red-500/50 transition-all duration-300"
            onClick={handleUnlock}
          >
            🔓 Break In
          </motion.button>

          <audio ref={audioRef} src="/break-in.mp3" preload="auto" />
        </div>
      ) : (
        //  Home Page after Unlock
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/dali-mask.png"
              alt="Dali Mask"
              width={120}
              height={120}
              className="mb-4"
            />
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-red-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            The Heist Begins
          </motion.h1>

          <p className="text-gray-300 max-w-xl mb-6 text-lg min-h-[60px]">
            <Typewriter
              words={[
                "I'm Aryan Gupta — the mastermind behind this digital heist.",
                "Full-stack developer executing pixel-perfect missions.",
                "Deploying tools like React, Next.js, Tailwind & AI APIs.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={45}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>

          <Link href="/about">
            <Button className="bg-red-600 cursor-pointer hover:bg-red-700 px-6 py-2 rounded-full flex items-center shadow-lg hover:shadow-red-500/50 transition duration-300">
              Enter The War Room <Sparkles className="ml-2" />
            </Button>
          </Link>
          <div>
            <Resume></Resume>
            <ContactForm></ContactForm>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
