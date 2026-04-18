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
      <p className={`text-sm font-medium ${variant === "dark" ? "text-white" : "text-[#0A0A0A]"} ${className}`}>
        You&apos;re subscribed. Welcome to the farm.
      </p>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        required
        className={`flex-1 h-11 px-4 rounded-md text-sm focus:outline-none transition-colors ${
          isDark
            ? "bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
            : "bg-white border border-[#E7E5E4] text-[#0A0A0A] placeholder:text-[#A8A29E] focus:border-[#0A0A0A]"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`h-11 px-5 rounded-md text-sm font-medium transition-colors disabled:opacity-60 whitespace-nowrap ${
          isDark
            ? "bg-white text-[#0A0A0A] hover:bg-white/90"
            : "bg-[#0A0A0A] text-white hover:bg-[#292524]"
        }`}
      >
        {status === "loading" ? "Joining..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className={`text-xs ${isDark ? "text-red-300" : "text-red-600"} w-full`}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
