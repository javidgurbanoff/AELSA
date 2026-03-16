"use client";

import React from "react";
import Navbar from "@/components/navbar";
import SimpleDialogDemo from "@/components/ui/dialog";
import LogOutButton from "@/components/ui/LogOutButton";

export default function Account() {
  return (
    <div className="flex flex-col  min-h-screen bg-[#F5F9FC]">
      <Navbar />

      <main className="pt-28 flex justify-center">
        {" "}
        <div className="max-w-3xl mx-auto">
          {/* Page title */}
          <h1 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Account Settings
          </h1>

          {/* Settings Card */}
          <section className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            {/* Email */}
            <div className="flex items-center justify-between border-b pb-6">
              <div>
                <p className="text-lg font-semibold text-[#0B1F3A]">
                  Email Address
                </p>
                <p className="text-sm text-gray-500">
                  Update the email connected to your account
                </p>
              </div>

              <SimpleDialogDemo />
            </div>

            {/* Password */}
            <div className="flex items-center justify-between border-b pb-6">
              <div>
                <p className="text-lg font-semibold text-[#0B1F3A]">Password</p>
                <p className="text-sm text-gray-500">
                  Change your account password
                </p>
              </div>

              <button className="px-4 py-2 cursor-pointer text-sm font-medium text-white bg-[#0B1F3A] rounded-lg hover:bg-[#12325C] transition">
                Change
              </button>
            </div>

            {/* Logout */}
            <div className="flex items-center justify-between border-b pb-6">
              <div>
                <p className="text-lg font-semibold text-[#0B1F3A]">Logout</p>
                <p className="text-sm text-gray-500">
                  Sign out from your account
                </p>
              </div>

              <LogOutButton />
            </div>

            {/* Danger Zone */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                Danger Zone
              </h3>

              <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-xl p-4">
                <div>
                  <p className="font-medium text-red-700">Delete Account</p>
                  <p className="text-sm text-red-500">
                    Permanently delete your account and all data
                  </p>
                </div>

                <button className="px-4 cursor-pointer py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
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
