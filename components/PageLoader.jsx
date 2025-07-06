"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const pageTranslations = {
  about: ["Mastermind", "मास्टरमाइंड", "Cerebro"],
  projects: ["Plans", "योजनाएं", "Planes"],
  skills: ["Toolkit", "उपकरण", "Caja de herramientas"],
  contact: ["Message", "संदेश", "Mensaje"],
};

export default function PageLoader() {
  const pathname = usePathname();
  const [langIndex, setLangIndex] = useState(-1); // start from -1
  const [showLoader, setShowLoader] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pageKey = pathname?.split("/")[1] || "about";
  const texts = pageTranslations[pageKey] || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || pathname === "/") return;

    setShowLoader(true);
    setLangIndex(-1); // reset to -1 to prevent initial show

    let step = -1;
    const steps = texts.length;

    function cycleOnce() {
      step += 1;
      setLangIndex(step);

      if (step < steps - 1) {
        setTimeout(cycleOnce, 800);
      } else {
        setTimeout(() => {
          setShowLoader(false);
        }, 800);
      }
    }

    const startTimeout = setTimeout(cycleOnce, 100); // small delay before first

    return () => {
      clearTimeout(startTimeout);
    };
  }, [pathname, mounted]);

  useEffect(() => {
    const layout = document.getElementById("layout-wrapper");
    if (!layout) return;

    layout.style.opacity = showLoader ? "0" : "1";
    layout.style.pointerEvents = showLoader ? "none" : "auto";
  }, [showLoader]);

  // Do not render loader until a valid lang is set
  if (!mounted || pathname === "/" || langIndex === -1) return null;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm text-white text-4xl font-bold"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key={langIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {texts[langIndex]}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
