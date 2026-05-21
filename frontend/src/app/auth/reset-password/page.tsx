import ResetPasswordForm from "@/app/modules/auth/components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <ResetPasswordForm />
      </div>
    </div>
  );
}