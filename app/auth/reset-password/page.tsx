"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        password,
      }),
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
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>

        <input
          type="password"
          placeholder="New password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#0B1F3A] text-white p-3 rounded">
          Update Password
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
}
