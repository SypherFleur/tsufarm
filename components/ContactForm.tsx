"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#2D5016]/10 border border-[#2D5016]/20 rounded-2xl p-8 text-center">
        <p className="text-2xl mb-2">🌱</p>
        <h3 className="font-display text-xl font-semibold text-[#2D5016] mb-2">Message Sent!</h3>
        <p className="text-[#3E2723]">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[#C4713B] underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#3E2723] mb-1.5" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e8e0d4] bg-white text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3E2723] mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e8e0d4] bg-white text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#3E2723] mb-1.5" htmlFor="subject">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#e8e0d4] bg-white text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Organization Booking">Organization Booking</option>
          <option value="Volunteer Question">Volunteer Question</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#3E2723] mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#e8e0d4] bg-white text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#2D5016] resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-xl bg-[#2D5016] text-white font-semibold hover:bg-[#3d6b1f] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
