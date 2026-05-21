import ForgotPasswordForm from "@/app/modules/auth/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}