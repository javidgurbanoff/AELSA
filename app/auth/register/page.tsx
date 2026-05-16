"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Email and Password are required.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setPending(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Register successful!");
        localStorage.setItem("authToken", data.token);
        window.location.href = "/";
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during registration.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Ambient Glow (same system as Hero/Login) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-140px] w-[520px] h-[520px] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      {/* Card */}
      <div
        className="
          relative z-10
          w-[440px]
          rounded-2xl

          border
          border-white/10

          bg-surface/70
          backdrop-blur-2xl

          shadow-[0_20px_80px_rgba(14,165,233,0.12)]

          p-8
        "
      >
        <h1 className="text-3xl font-black text-text text-center">
          Create Account
        </h1>

        <p className="text-sm text-muted text-center mt-3">
          Sign up to start using{" "}
          <span className="text-primary font-semibold">AELSA</span>
        </p>

        <form onSubmit={handleRegisterSubmit} className="space-y-4 mt-8">
          {/* EMAIL */}
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              h-12
              px-4
              rounded-lg

              bg-background/40
              text-text

              border
              border-white/10

              outline-none
              focus:border-primary/40
              focus:ring-2
              focus:ring-primary/10
            "
          />

          {/* PASSWORD */}
          <input
            placeholder="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              h-12
              px-4
              rounded-lg

              bg-background/40
              text-text

              border
              border-white/10

              outline-none
              focus:border-primary/40
              focus:ring-2
              focus:ring-primary/10
            "
          />

          {/* CONFIRM PASSWORD */}
          <input
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="
              w-full
              h-12
              px-4
              rounded-lg

              bg-background/40
              text-text

              border
              border-white/10

              outline-none
              focus:border-primary/40
              focus:ring-2
              focus:ring-primary/10
            "
          />

          {/* LINK */}
          <div className="flex justify-between items-center text-sm mt-2">
            <Link
              href="/auth/login"
              className="text-muted hover:text-primary transition"
            >
              Already have an account?
            </Link>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={pending}
            className={`
              w-full
              h-12
              rounded-lg
              font-semibold
              transition-all
              flex
              items-center
              justify-center
              gap-2

              ${
                pending
                  ? "bg-muted/30 text-muted cursor-not-allowed"
                  : "bg-primary text-background hover:brightness-110 hover:shadow-[0_0_40px_rgba(14,165,233,0.35)]"
              }
            `}
          >
            {pending ? (
              <>
                <span>Creating account...</span>
                <span className="w-5 h-5 border-2 border-background/30 border-t-transparent rounded-full animate-spin" />
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-accent" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
