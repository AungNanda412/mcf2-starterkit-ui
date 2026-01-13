"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PasswordPage() {
  return (
    <div className="w-full md:max-w-md ">
      <h1 className="font-semibold">Update Password</h1>
      <p className="text-gray-500 mb-4">
        Ensure your account is using a long,random password to stay secure
      </p>
      <h1 className="mb-3 font-normal mt-7">Current password</h1>
      <Input type="password"className="text-sm" placeholder="Current password" />
      <h1 className="mb-3 font-normal mt-7">New password</h1>
      <Input type="password" className="text-sm" placeholder="New password" />
      <h1 className="mb-3 font-normal mt-7">Confirm password</h1>
      <Input type="password" className="text-sm" placeholder="Confirm password" />

      <Button className={"font-normal mt-5 bg-gray-100 text-gray-950 px-4 py-2 border-0"}>Save password</Button>
    </div>
  );
}