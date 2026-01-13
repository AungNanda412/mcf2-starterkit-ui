"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const active = (path: string) => (pathname === path ? "bg-gray-900" : "");

  return (
    <div className="bg-black p-5 min-h-screen text-gray-100">
      {}
      <div>
        <h1 className="text-xl font-normal mb-1">Settings</h1>
        <p className="font-normal text-gray-500">
          Manage your profile and account settings
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        {}
        <aside className="w-full md:w-64 flex flex-col gap-1 md:pt-6">
          <Link
            href="/profile"
            className={`p-2 hover:bg-gray-900 ${active("/dashboard/profile")}`}
          >
            Profile
          </Link>
          <Link
            href="/password"
            className={`p-2 hover:bg-gray-900 ${active("/dashboard/password")}`}
          >
            Password
          </Link>
          <Link
            href="/two-auth"
            className={`p-2 hover:bg-gray-900 ${active("/dashboard/two-auth")}`}
          >
            Two-Factor Auth
          </Link>
          <Link
            href="/appearance"
            className={`p-2 hover:bg-gray-900 ${active(
              "/dashboard/appearance"
            )}`}
          >
            Appearance
          </Link>
        </aside>
        {}
        <div className="border-t border-gray-700 my-2 md:hidden" />
        {}
        <main className="flex-1 p-4 flex flex-col gap-10">{children}</main>
      </div>
    </div>
  );
}