"use client";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion, time } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const sendMessage = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    if (result.success) {
      setSent(true);
      toast.success("Message sent successfully!");
      console.log("HIIIIIII")
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => {
        toast.info("You can send another message now.");
        setSent(false);
      }, 3000);
      
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-xl mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">
          Encrypted Message
        </h1>

        {!sent ? (
          <form
            onSubmit={sendMessage}
            className="space-y-4 bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-700 shadow-lg"
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-zinc-900/80 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-zinc-900/80 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full p-3 rounded-lg bg-zinc-900/80 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <Button
              type="submit"
              className="bg-red-600 cursor-pointer hover:bg-red-700 hover:animate-pulse px-6 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transition duration-300">
             
            
              Send Secure Message
            </Button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-xl"
          >
            🛡️ Message sent to The Professor!
          </motion.p>
        )}
      </div>
    </PageWrapper>
  );
}
