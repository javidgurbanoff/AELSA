"use client";

import React from "react";
import Navbar from "@/components/navbar";
import SimpleDialogDemo from "@/components/ui/dialog";
import LogOutButton from "@/components/ui/LogOutButton";

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
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Account
            </p>
            <h1 className="text-4xl font-black text-text">Account Settings</h1>
            <p className="mt-2 text-muted">
              Manage your email, password, and account preferences.
            </p>
          </div>

          {/* Settings card */}
          <section
            className="
              rounded-2xl
              border border-white/10
              bg-surface/40 backdrop-blur-xl
              px-8 py-2
            "
          >
            <SettingRow
              title="Email Address"
              description="Update the email connected to your account"
              action={<SimpleDialogDemo />}
            />

            <SettingRow
              title="Password"
              description="Change your account password"
              action={
                <button
                  className="
                    px-4 py-2 text-sm font-medium cursor-pointer
                    rounded-lg border border-white/10
                    bg-surface/60 text-text
                    hover:border-primary/30 hover:text-primary
                    transition-all duration-200
                  "
                >
                  Change
                </button>
              }
            />

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
              <div
                className="
                  flex items-center justify-between gap-6
                  rounded-xl p-5
                  border border-red-500/20
                  bg-red-500/5
                "
              >
                <div>
                  <p className="font-semibold text-red-400">Delete Account</p>
                  <p className="text-sm text-red-400/60 mt-0.5">
                    Permanently delete your account and all data. This cannot be
                    undone.
                  </p>
                </div>
                <button
                  className="
                    flex-shrink-0 px-4 py-2 text-sm font-semibold cursor-pointer
                    rounded-lg border border-red-500/30
                    bg-red-500/10 text-red-400
                    hover:bg-red-500/20 hover:border-red-500/50
                    transition-all duration-200
                  "
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
