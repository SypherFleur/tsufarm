"use client";

import { useState } from "react";

interface NewsletterFormProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function NewsletterForm({ variant = "light", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`text-sm font-medium ${variant === "dark" ? "text-[#D4A843]" : "text-[#2D5016]"} ${className}`}>
        You&apos;re subscribed! Welcome to the farm family. 🌱
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A843] ${
          variant === "dark"
            ? "bg-white text-[#3E2723]"
            : "bg-white border border-[#e8e0d4] text-[#3E2723]"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-xl bg-[#D4A843] text-[#3E2723] text-sm font-semibold hover:bg-[#e0bc6a] transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? "Joining..." : "Join the Farm"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 w-full">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
