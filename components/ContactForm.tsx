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
      <div className="border border-[#E7E5E4] bg-[#FAFAF9] p-8">
        <span className="block font-mono text-[11px] tracking-widest text-[#78716C] mb-3">
          / SENT
        </span>
        <h3 className="font-display text-xl font-medium text-[#0A0A0A] mb-2 tracking-[-0.02em]">Message received.</h3>
        <p className="text-sm text-[#57534E] leading-relaxed mb-5">
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full h-11 px-3.5 rounded-md border border-[#E7E5E4] bg-white text-[15px] text-[#0A0A0A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#0A0A0A] transition-colors";
  const labelClass =
    "block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#57534E] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="subject">Subject</label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Organization Booking">Organization Booking</option>
          <option value="Volunteer Question">Volunteer Question</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-3.5 py-3 rounded-md border border-[#E7E5E4] bg-white text-[15px] text-[#0A0A0A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#0A0A0A] resize-none transition-colors"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center h-11 px-6 rounded-md bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#292524] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </form>
  );
}
