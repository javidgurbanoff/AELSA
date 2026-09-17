"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import LogOutButton from "@/components/ui/LogOutButton";
import { createClient } from "@/lib/supabase/client";

const SettingRow = ({
  title,
  description,
  action,
  border = true,
}: {
  title: string;
  description: string;
  action: React.ReactNode;
  border?: boolean;
}) => (
  <div
    className={`flex items-center justify-between gap-6 py-6 ${
      border ? "border-b border-white/10" : ""
    }`}
  >
    <div>
      <p className="text-base font-semibold text-text">{title}</p>
      <p className="text-sm text-muted mt-0.5">{description}</p>
    </div>
    <div className="flex-shrink-0">{action}</div>
  </div>
);

export default function Account() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [emailPending, setEmailPending] = useState(false);
  const [passwordPending, setPasswordPending] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email) setEmail(user.email);
    };
    getUser();
  }, []);

  const handleEmailUpdate = async () => {
    if (!newEmail.trim()) return;
    setEmailPending(true);
    setEmailMsg("");
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    if (error) {
      setEmailMsg(error.message);
    } else {
      setEmailMsg("Confirmation sent to your new email.");
      setShowEmailForm(false);
      setNewEmail("");
    }
    setEmailPending(false);
  };

  const handlePasswordUpdate = async () => {
    if (!newPassword.trim() || newPassword.length < 6) {
      setPasswordMsg("Password must be at least 6 characters.");
      return;
    }
    setPasswordPending(true);
    setPasswordMsg("");
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setPasswordMsg(error.message);
    } else {
      setPasswordMsg("Password updated successfully.");
      setShowPasswordForm(false);
      setNewPassword("");
    }
    setPasswordPending(false);
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure? This will permanently delete your account and cannot be undone.",
    );
    if (!confirmed) return;
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Account
            </p>
            <h1 className="text-4xl font-black text-text">Account Settings</h1>
            <p className="mt-2 text-muted">
              Signed in as{" "}
              <span className="text-primary font-medium">{email}</span>
            </p>
          </div>

          <section className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl px-8 py-2">
            {/* Email */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-base font-semibold text-text">
                    Email Address
                  </p>
                  <p className="text-sm text-muted mt-0.5">
                    {email || "Loading..."}
                  </p>
                </div>
                <button
                  onClick={() => setShowEmailForm((v) => !v)}
                  className="px-4 py-2 text-sm font-medium cursor-pointer rounded-lg border border-white/10 bg-surface/60 text-text hover:border-primary/30 hover:text-primary transition-all duration-200"
                >
                  {showEmailForm ? "Cancel" : "Update"}
                </button>
              </div>
              {showEmailForm && (
                <div className="mt-4 flex gap-3">
                  <input
                    type="email"
                    placeholder="New email address"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="flex-1 h-10 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 text-sm"
                  />
                  <button
                    onClick={handleEmailUpdate}
                    disabled={emailPending}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-background hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    {emailPending ? "Saving..." : "Save"}
                  </button>
                </div>
              )}
              {emailMsg && (
                <p
                  className={`mt-2 text-sm ${emailMsg.includes("sent") ? "text-accent" : "text-red-400"}`}
                >
                  {emailMsg}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-base font-semibold text-text">Password</p>
                  <p className="text-sm text-muted mt-0.5">
                    Change your account password
                  </p>
                </div>
                <button
                  onClick={() => setShowPasswordForm((v) => !v)}
                  className="px-4 py-2 text-sm font-medium cursor-pointer rounded-lg border border-white/10 bg-surface/60 text-text hover:border-primary/30 hover:text-primary transition-all duration-200"
                >
                  {showPasswordForm ? "Cancel" : "Change"}
                </button>
              </div>
              {showPasswordForm && (
                <div className="mt-4 flex gap-3">
                  <input
                    type="password"
                    placeholder="New password (min 6 chars)"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="flex-1 h-10 px-4 rounded-lg bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 text-sm"
                  />
                  <button
                    onClick={handlePasswordUpdate}
                    disabled={passwordPending}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-background hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    {passwordPending ? "Saving..." : "Save"}
                  </button>
                </div>
              )}
              {passwordMsg && (
                <p
                  className={`mt-2 text-sm ${passwordMsg.includes("successfully") ? "text-accent" : "text-red-400"}`}
                >
                  {passwordMsg}
                </p>
              )}
            </div>

            {/* Logout */}
            <SettingRow
              title="Logout"
              description="Sign out from your account"
              action={<LogOutButton />}
            />

            {/* Danger zone */}
            <div className="py-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
                Danger Zone
              </p>
              <div className="flex items-center justify-between gap-6 rounded-xl p-5 border border-red-500/20 bg-red-500/5">
                <div>
                  <p className="font-semibold text-red-400">Delete Account</p>
                  <p className="text-sm text-red-400/60 mt-0.5">
                    Permanently delete your account and all data. This cannot be
                    undone.
                  </p>
                </div>
                <button
                  onClick={handleDeleteAccount}
                  className="flex-shrink-0 px-4 py-2 text-sm font-semibold cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
