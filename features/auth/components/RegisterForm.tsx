"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  // const onSubmit = (e) => {
  //   e.preventDefault
  //   router.replace("/verify")
  // }

  return (
    <div className="flex flex-col gap-6 ">
      <div className="bg-[#161616] flex flex-col gap-6 py-6 shadow-sm rounded-xl">
        <div className="flex flex-col gap-1.5 px-10 pt-0 pb-5 text-center">
          <div className="font-semibold text-xl text-gray-50 ">
            Create an account
          </div>
          <div className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </div>
        </div>
        <div className="px-10 py-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.replace("/verify");
            }}
            className="flex flex-col gap-6 "
          >
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="name"
                  className=" text-gray-50 font-medium text-sm"
                >
                  Name
                </Label>
                <Input
                  type=""
                  id="name"
                  placeholder="Full name"
                  required
                  className="w-[334px] text-gray-50 border-neutral-700"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className=" text-gray-50 font-medium text-sm"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  required
                  className="w-[334px] text-gray-50 border-neutral-700"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="password"
                  className=" text-gray-50 font-medium text-sm"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="w-[334px] text-gray-50 border-neutral-700"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="password"
                  className=" text-gray-50 font-medium text-sm"
                >
                  Confirm password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="w-[334px] text-gray-50 border-neutral-700"
                />
              </div>
              <div className="">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-gray-50 text-black text-sm font-medium hover:bg-gray-300 cursor-pointer"
                  type="submit"
                >
                  Create Account
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1 ">
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?
              </p>
              <Link href="/login" className="text-white underline text-sm">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
