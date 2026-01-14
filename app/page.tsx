import AuthLayout from "@/features/auth/components/AuthLayout";
import LoginForm from "@/features/auth/components/LoginForm";

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
