import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TwoFactorSection() {
  return (
    <div className="flex min-screen flex-col items-center justify-center gap-5">
         {}
  <img
    src="https://friconix.com/jpg/fi-xnsuxx-laravel.jpg"
    alt="Logo"
    className="h-16 w-auto"
  />
      <Card className="w-full max-w-md bg-neutral-800 text-neutral-100 shadow-xl border-neutral-800">
        <CardContent className="p-4">
          {}
          <div className="mb-2 flex justify-center"></div>
          {}
          <h1 className="text-center text-2xl font-semibold">
            Confirm your password
          </h1>
          {}
          <p className="mt-2 text-center text-sm text-white font-normal">
            This is a secure area of the application. Please confirm your
            password before continuing.
          </p>
          {}
          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="password "
                className="font-normal text-white text-sm"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="bg-neutral-950 border-neutral-800 focus-visible:ring-neutral-700 text-sm font-normal"
              />
            </div>

            <Button className="w-full bg-neutral-200 text-neutral-900 hover:bg-neutral-100 text-sm font-normal ">
              Confirm password
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}