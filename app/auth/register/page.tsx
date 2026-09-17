"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Email and password are required.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setPending(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setPending(false);
      return;
    }

    setMessage("Account created! Check your email to confirm.");
    setPending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-140px] w-[520px] h-[520px] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 w-[440px] rounded-2xl border border-white/10 bg-surface/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(14,165,233,0.12)] p-8">
        <h1 className="text-3xl font-black text-text text-center">
          Create Account
        </h1>
        <p className="text-sm text-muted text-center mt-3">
          Sign up to start using{" "}
          <span className="text-primary font-semibold">AELSA</span>
        </p>

        <form onSubmit={handleRegisterSubmit} className="space-y-4 mt-8">
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
          <input
            placeholder="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
          <input
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />

          <div className="flex justify-between items-center text-sm mt-2">
            <Link
              href="/auth/login"
              className="text-muted hover:text-primary transition"
            >
              Already have an account?
            </Link>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`w-full h-12 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              pending
                ? "bg-muted/30 text-muted cursor-not-allowed"
                : "bg-primary text-background hover:brightness-110 hover:shadow-[0_0_40px_rgba(14,165,233,0.35)]"
            }`}
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

        {message && (
          <p
            className={`mt-4 text-center text-sm ${message.includes("created") ? "text-accent" : "text-red-400"}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
