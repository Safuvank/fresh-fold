import VerifyOtpForm from "@/app/modules/auth/components/VerifyOtpForm";

export default function VerifyOtpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <VerifyOtpForm />
      </div>
    </div>
  );
}