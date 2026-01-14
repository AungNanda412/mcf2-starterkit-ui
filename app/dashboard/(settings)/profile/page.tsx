"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="w-full md:max-w-md">
      <h1 className="font-semibold">Profile Information</h1>
      <p className="text-gray-500 mb-5">Update your name and email address</p>
      {}
      <h2 className="mt-4 font-normal text-gray-50">Name</h2>
      <Input className="bg-gray-950 w-full border border-gray-50/25 px-4 py-2 mb-6" />

      <h2 className="font-normal text-gray-100">Email address</h2>
      <Input className="bg-gray-950 w-full border border-gray-50/25 px-4 py-2 mb-6" />

      <Button className={"font-normal text-sm text-gray-950 bg-gray-100 px-4 py-4"}>
        Save
      </Button>
      {}
      <div className="mt-10">
        <h1 className="font-semibold">Delete account</h1>
        <p className="text-gray-500 mb-6">
          Delete your account and all of its resources
        </p>
        <div className="border md:max-w-md border-red-600/40 bg-red-600/10 p-4 rounded">
          <h1 className="font-normal">Warning</h1>
          <p>Please proceed with caution, this cannot be undone.</p>
          <button className="font-semibold bg-red-400 px-4 py-3 mt-5 hover:shadow-lg">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}