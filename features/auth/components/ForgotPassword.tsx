import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPassword() {
  return (  
      <div className="flex flex-col gap-6 ">
        <div className="bg-[#161616] flex flex-col gap-6 py-6 shadow-sm rounded-xl">
          <div className="flex flex-col gap-1.5 px-6 sm:px-10 pt-0 pb-5 text-center">
            <div className="font-semibold text-xl text-gray-50 ">Forgot password</div>
            <div className="text-sm text-muted-foreground">
              Enter your email to receive a password reset link
            </div>
          </div>
          <div className="px-6 sm:px-10 py-0">
            <form className="flex flex-col gap-6 ">
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

                
                <div className="">
                  <Button
                    className="w-full bg-gray-50 text-black hover:bg-gray-300 text-sm font-medium cursor-pointer"
                    type="submit" variant="default" size="lg"
                  >
                    Email password reset link
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1 ">
                <p className="text-center text-sm text-muted-foreground">
                  Or, return to</p>
                <Link href="/login" className="text-white underline text-sm">
                  log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
