"use client";
import { useState } from "react";
import SectionHeader from "./section-header";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidation(form)) {
      setLoading(true);
      await sendForm();
      setLoading(false);
    }
  };

  const sendForm = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Email sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Error sending email.");
    }
  };
  function formValidation(form) {
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return false;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Invalid email format.");
      return false;
    }
    return true;
  }
  function clearClicked() {
    setForm({ name: "", email: "", message: "" });
  }
  return (
    <div className="rounded-md border border-slate-800 px-6 py-3">
      <SectionHeader>Contact Me</SectionHeader>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <InputText
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <InputText
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <InputTextArea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={clearClicked}
            disabled={loading}
            className="mb-4 block max-w-fit cursor-pointer rounded-md border border-slate-700/50 bg-gray-800/50 px-4 py-2 text-base text-neutral-400 transition duration-300 hover:scale-105 hover:bg-lime-500/10 hover:text-white"
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={loading}
            className="mb-4 block max-w-fit cursor-pointer rounded-md border border-slate-700/50 bg-gray-800/50 px-4 py-2 text-base text-neutral-400 transition duration-300 hover:scale-105 hover:bg-lime-500/10 hover:text-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

function InputText({ name, value, placeholder, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-slate-700/50 bg-gray-800/50 px-4 py-3 text-sm text-white outline-none ring-sky-400 transition-all focus:ring-1"
    />
  );
}

function InputTextArea({ name, placeholder, value, onChange }) {
  return (
    <textarea
      type="textarea"
      rows="4"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-md border border-slate-700/50 bg-gray-800/50 px-4 py-3 text-sm text-white outline-none ring-sky-400 transition-all focus:ring-1"
    ></textarea>
  );
}
