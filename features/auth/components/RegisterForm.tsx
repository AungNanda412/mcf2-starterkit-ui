import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  return (
    <div className="flex  justify-center w-[450px] bg-[#161616]">
      <form className="flex flex-col gap-6 ">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name" className=" text-gray-50 font-medium">
              Name
            </Label>
            <Input
              type=""
              id="name"
            placeholder="Full name"
              className="w-[334px] text-gray-50 border-neutral-700"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className=" text-gray-50 font-medium">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="w-[334px] text-gray-50 border-neutral-700"
            />
          </div>

          <div className="grid gap-2 font-medium">
            <Label htmlFor="password" className=" text-gray-50">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="w-[334px] text-gray-50 border-neutral-700"
            />
          </div>
          <div className="grid gap-2 font-medium">
            <Label htmlFor="password" className=" text-gray-50">
              Confirm password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="w-[334px] text-gray-50 border-neutral-700"
            />
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
