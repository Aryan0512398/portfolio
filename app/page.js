"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import Resume from "@/components/resume";
import ContactForm from "@/components/Contact";
import { Typewriter } from "react-simple-typewriter";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useUnlock } from "./context/UnlockContext";

export default function HomePage() {
  const [pin, setPin] = useState("");
  const { unlocked, setUnlocked } = useUnlock();
  const audioRef = useRef(null);

  const checkUnlock = (updatedPin) => {
    if (updatedPin.length === 6) {
      setTimeout(() => {
        console.log("PIN complete — unlocking...");
        setUnlocked(true);
        audioRef.current?.play();
      }, 300);
    }
  };

  const handleKeyPress = (digit) => {
    if (pin.length < 6) {
      const updatedPin = pin + digit;
      setPin(updatedPin);
      checkUnlock(updatedPin);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!unlocked) {
        const key = e.key;
        if (/^\d$/.test(key) && pin.length < 6) {
          const updatedPin = pin + key;
          setPin(updatedPin);
          checkUnlock(updatedPin);
        } else if (key === "Backspace") {
          handleDelete();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pin, unlocked]);

  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

  return (
    <PageWrapper>
      {!unlocked ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          {/* 🎥 Background Video */}
          <video
            className="absolute inset-0 object-cover w-full h-full z-[-1]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/vault5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Unlock UI */}
          <div className="w-full flex justify-center px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] max-w-xs sm:max-w-sm md:max-w-lg w-full p-6 md:p-10 flex flex-col items-center">
              {/* Mask Icon */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Image
                  src="/dali-mask.png"
                  alt="Dali Mask"
                  width={70}
                  height={70}
                  className="mb-4"
                />
              </motion.div>

              <h2 className="text-white text-lg md:text-2xl font-semibold mb-6">
                Enter Passcode
              </h2>

              {/* PIN Dots */}
              <div className="flex justify-center gap-4 mb-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: pin[i] ? [0.8, 1.2, 1] : 1,
                      opacity: pin[i] ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                      pin[i] ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Keypad */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {digits.map((d, i) =>
                  d === "" ? (
                    <div key={i}></div>
                  ) : d === "del" ? (
                    <button
                      key={i}
                      onClick={handleDelete}
                      className="text-white/80 text-xl font-semibold bg-white/10 hover:bg-white/20 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all backdrop-blur-md ring-1 ring-white/20 shadow-md"
                    >
                      ⌫
                    </button>
                  ) : (
                    <button
                      key={i}
                      onClick={() => handleKeyPress(d)}
                      className="text-white text-xl font-medium bg-white/10 hover:bg-white/20 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all backdrop-blur-md ring-1 ring-white/20 shadow-md"
                    >
                      {d}
                    </button>
                  )
                )}
              </div>

              <p className="text-xs text-white/50 mt-6">
                Use any 6-digit PIN to unlock
              </p>

              <audio ref={audioRef} src="/break-in.mp3" preload="auto" />
            </div>
          </div>
        </div>
      ) : (
        // ✅ Unlocked Content
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
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
            <Button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full flex items-center shadow-lg hover:shadow-red-500/50 transition duration-300">
              Enter The War Room <Sparkles className="ml-2" />
            </Button>
          </Link>

          <div>
            <Resume />
            <ContactForm />
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
