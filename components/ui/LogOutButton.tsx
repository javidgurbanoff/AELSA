"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-medium cursor-pointer rounded-lg border border-white/10 bg-surface/60 text-text hover:border-red-500/30 hover:text-red-400 transition-all duration-200"
    >
      Log out
    </button>
  );
}
