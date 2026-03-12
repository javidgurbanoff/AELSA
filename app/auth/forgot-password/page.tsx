"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-[#0B1F3A] text-white p-3 rounded">
          Send Reset Link
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
}
