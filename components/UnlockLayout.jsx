"use client";
import { useUnlock } from "@/app/context/UnlockContext";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function UnlockLayout({ children }) {
  const { unlocked } = useUnlock();

  console.log("Unlocked?", unlocked); // 🔍 Add this to verify

  return (
    <>
      {unlocked && <Header />}
      <main className="px-4 py-8">{children}</main>
      {unlocked && (
        <div className="flex flex-col items-center justify-center mb-2">
          <Footer />
        </div>
      )}
    </>
  );
}
