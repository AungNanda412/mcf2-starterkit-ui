import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifyEmail() {
  return (
      <div className="flex flex-col gap-6 ">
        <div className="bg-[#161616] flex flex-col gap-6 py-6 shadow-sm rounded-xl">
          <div className="flex flex-col gap-1.5 px-6 sm:px-10 pt-0 pb-5 text-center">
            <div className="font-semibold text-xl text-gray-50 ">Verify email</div>
            <div className="text-sm text-muted-foreground">
              Please verify your email address by clicking on the <br />link we just emailed to you.
            </div>
          </div>
          <div className="px-6 sm:px-10 py-0">
            <form className="flex flex-col gap-6 ">
              <div className="grid gap-6">
                <div className="">
                  <Button
                    className="w-full bg-[#262626] text-white hover:bg-gray-600 text-sm font-medium cursor-pointer"
                    type="submit" variant="default" size="lg"
                  >
                    Resend verification email
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1 ">
                
                <Link href="/login" className="text-white underline text-sm">
                  Log out
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
