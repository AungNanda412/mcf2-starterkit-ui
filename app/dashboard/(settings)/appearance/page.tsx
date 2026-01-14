"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";

export default function Appearance() {
  return (
    <div className="space-y-4">
      <h1 className="font-semibold mb-1">Appearance settings</h1>
      <p className="text-gray-600">
        Update your account's appearance settings.
      </p>

      {}
      <div className="bg-neutral-900 p-1.5 inline-flex gap-1">
        {}
        <Button className="flex items-center text-sm gap-1 p-1 text-neutral-700 bg-neutral-600 hover:bg-neutral-800 hover:text-white transition-colors duration-200">
          <Sun className="w-4 h-5 stroke-current" />
          {}
          <span>Light</span>
        </Button>

        {}
        <Button className="flex items-center text-sm gap-1 p-1 text-neutral-700 bg-neutral-600 hover:bg-neutral-800 hover:text-white transition-colors duration-200">
          <Moon className="w-4 h-5 stroke-current" />
          <span>Dark</span>
        </Button>

        {}
        <Button className="flex items-center text-sm gap-1 p-1 text-neutral-700 bg-neutral-600  hover:bg-neutral-800 hover:text-white transition-colors duration-200">
          <Monitor className="w-4 h-5 stroke-current" />
          <span>System</span>
        </Button>
      </div>
    </div>
  );
}