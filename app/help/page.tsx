"use client";

import { useState } from "react";
import Backmenu from "@/components/backmenu";

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
    <label className="text-sm font-semibold text-[#0A2540] mb-1">{label}</label>

    {textarea ? (
      <textarea
        rows={5}
        placeholder={placeholder}
        className="
          border border-slate-300 rounded-lg px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-[#38BDF8]
          placeholder:text-slate-400
        "
        onChange={(e) => onChange(name, e.target.value)}
      />
    ) : (
      <input
        type="text"
        placeholder={placeholder}
        className="
          border border-slate-300 rounded-lg px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-[#38BDF8]
          placeholder:text-slate-400
        "
        onChange={(e) => onChange(name, e.target.value)}
      />
    )}
  </div>
);

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="relative min-h-screen bg-[#F5F9FC] px-6 py-24">
      <Backmenu />

      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-[#0A2540] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-[#0FB9B1] max-w-2xl mx-auto">
            Reliable communication for innovative sea-technology solutions.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Call Us",
              content: "+1 940 394 2948",
            },
            {
              title: "Email",
              content: "support@aelsa.tech",
            },
            {
              title: "Visit",
              content: "34 Madison Street, NY, USA",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md"
            >
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.content}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
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

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="
                bg-[#0FB9B1]
                hover:bg-[#0891B2]
                text-white
                font-semibold
                px-10 py-3
                rounded-lg
                transition-colors duration-300
                shadow-md
                cursor-pointer
              "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
