"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

interface InputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  onChange: (name: string, value: string) => void;
  textarea?: boolean;
}

const InputField = ({
  label,
  placeholder,
  name,
  onChange,
  textarea,
}: InputFieldProps) => (
  <div className="flex flex-col w-full">
    <label className="text-sm font-semibold text-text mb-1">{label}</label>
    {textarea ? (
      <textarea
        rows={5}
        placeholder={placeholder}
        className="rounded-lg px-4 py-3 bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 placeholder:text-muted resize-none"
        onChange={(e) => onChange(name, e.target.value)}
      />
    ) : (
      <input
        type="text"
        placeholder={placeholder}
        className="h-12 rounded-lg px-4 py-3 bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 placeholder:text-muted"
        onChange={(e) => onChange(name, e.target.value)}
      />
    )}
  </div>
);

const contactInfo = [
  { title: "Call Us", content: "+1 940 394 2948" },
  { title: "Email", content: "support@aelsa.tech" },
  { title: "Visit", content: "34 Madison Street, NY, USA" },
];

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    if (!formData.name.trim() || !formData.message.trim()) {
      setMessage("Name and message are required.");
      return;
    }
    setPending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setMessage("Message sent! We'll get back to you shortly.");
    setPending(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-text">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Reliable communication for innovative sea-technology solutions.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text font-medium">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <InputField
                label="Full Name"
                placeholder="John Smith"
                name="name"
                onChange={handleChange}
              />
              <InputField
                label="Email"
                placeholder="john@email.com"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <InputField
                label="Phone"
                placeholder="+1 234 567 890"
                name="phone"
                onChange={handleChange}
              />
              <InputField
                label="Subject"
                placeholder="Inquiry"
                name="subject"
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <InputField
                label="Message"
                placeholder="Type your message here..."
                name="message"
                textarea
                onChange={handleChange}
              />
            </div>

            {message && (
              <p
                className={`mb-4 text-sm ${message.includes("sent") ? "text-accent" : "text-red-400"}`}
              >
                {message}
              </p>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={pending}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                  pending
                    ? "bg-muted/30 text-muted cursor-not-allowed"
                    : "bg-primary text-background hover:brightness-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)]"
                }`}
              >
                {pending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
