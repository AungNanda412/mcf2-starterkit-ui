"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const router = useRouter();
  
  return (
      <div className="flex flex-col gap-6 ">
        <div className="bg-[#161616] flex flex-col gap-6 py-6 shadow-sm rounded-xl">
          <div className="flex flex-col gap-1.5 px-6 sm:px-10 pt-0 pb-5 text-center">
            <div className="font-semibold text-xl text-gray-50 ">Log in to your account</div>
            <div className="text-sm text-muted-foreground">
              Enter your email and password below to log in
            </div>
          </div>
          <div className="px-6 sm:px-10 py-0">
            <form onSubmit={(e) => {
              e.preventDefault();
              router.replace("/dashboard");
            }} className="flex flex-col gap-6 ">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className=" text-gray-50 font-medium text-sm">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    required
                    className="w-full sm:w-[334px] text-gray-50 border-neutral-700 not-placeholder-shown:bg-[#29313F]"
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex justify-between items-center font-medium">
                    <Label htmlFor="password" className=" text-gray-50 text-sm font-medium">
                      Password
                    </Label>
                    <Link href="/forgot-password" className="font-light text-gray-50 underline underline-offset-4 decoration-neutral-500 duration-300 ease-out hover:decoration-current text-sm">Forgot password?</Link>
                  </div>

                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="w-full sm:w-[334px] text-gray-50 border-neutral-700 not-placeholder-shown:bg-[#29313F]"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox id="terms" className="border-neutral-700" />
                  <Label htmlFor="terms" className="text-sm font-medium text-gray-50">Remember me</Label>
                </div>

                <div className="">
                  <Button
                    className="w-full bg-gray-50 text-black hover:bg-gray-300 text-sm font-medium cursor-pointer"
                    type="submit" variant="default" size="lg"
                  >
                    Log in
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1 ">
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?
                </p>
                <Link href="/register" className="text-white underline text-sm">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;
