"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password.trim()) {
      setMessage("Password is required.");
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
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated successfully. You can now log in.");
    }

    setPending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 w-[420px] rounded-2xl border border-white/10 bg-surface/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(14,165,233,0.12)] p-8">
        <h1 className="text-3xl font-black text-text text-center">
          Reset Password
        </h1>
        <p className="text-sm text-muted text-center mt-3">
          Enter your new password below
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />

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
                <span>Updating...</span>
                <span className="w-5 h-5 border-2 border-background/30 border-t-transparent rounded-full animate-spin" />
              </>
            ) : (
              "Update Password"
            )}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successfully") ? "text-accent" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
