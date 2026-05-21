// "use client";

// import React, { useState } from "react";

// import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

// import { useRouter } from "next/navigation";

// import { useForm } from "react-hook-form";

// import { zodResolver } from "@hookform/resolvers/zod";

// import { useLogin } from "../hooks/useLogin";

// import { loginSchema } from "../schemas/auth.schemas";

// import { LoginFormData } from "../types/auth.types";

// import { GoogleIcon } from "../../../components/Shared";

// import { useAuthStore } from "../store/auth.store";

// import { signIn } from "next-auth/react";

// const Logo = ({ className = "text-white" }: { className?: string }) => (
//   <div className={`flex items-center gap-2.5 ${className}`}>
//     <div
//       className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
//         className.includes("text-white")
//           ? "bg-white/20 backdrop-blur-md text-white"
//           : "bg-blue-600 text-white"
//       }`}
//     >
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M4 8h16M4 12h16M4 16h16" />
//       </svg>
//     </div>

//     <span className="text-2xl font-extrabold tracking-tight">FreshFold</span>
//   </div>
// );

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   const router = useRouter();

//   const { mutateAsync, isPending } = useLogin();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       const res = await mutateAsync(data);

//       login(res.data.user, res.data.accessToken);

//       router.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const login = useAuthStore((state) => state.login);

//   return (
//     <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-500">
//       <div className="lg:hidden mb-12 flex justify-center">
//         <Logo className="text-slate-900" />
//       </div>
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
//           Welcome Back
//         </h2>

//         <p className="text-slate-500 font-medium text-sm">
//           Sign in to continue to FreshFold.
//         </p>
//       </div>

//       <button
//         onClick={() => signIn("google", {
//           callbackUrl:
//             "/",
//         })}
//         className="w-full border border-slate-200 py-3.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 mb-4 shadow-sm"
//       >
//         <GoogleIcon />
//         Continue with Google
//       </button>
//       {/* CHANGE: Reduced margin-bottom from mb-6 to mb-4 */}
//       <div className="flex items-center gap-4 mb-4">
//         <div className="flex-1 h-px bg-slate-200"></div>
//         <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">
//           Or sign in with email
//         </span>
//         <div className="flex-1 h-px bg-slate-200"></div>
//       </div>

//       <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//         <div className="space-y-1.5">
//           <label className="text-sm font-semibold text-slate-700">
//             Email address
//           </label>

//           <div className="relative">
//             <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

//             <input
//               type="email"
//               placeholder="name@example.com"
//               {...register("email")}
//               className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
//             />
//           </div>

//           {errors.email && (
//             <p className="text-sm text-red-500">{errors.email.message}</p>
//           )}
//         </div>

//         <div className="space-y-1.5">
//           <div className="flex items-center justify-between">
//             <label className="text-sm font-semibold text-slate-700">
//               Password
//             </label>

//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1"
//             >
//               {showPassword ? (
//                 <EyeOff className="w-4 h-4" />
//               ) : (
//                 <Eye className="w-4 h-4" />
//               )}

//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="••••••••"
//               {...register("password")}
//               className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
//             />
//           </div>

//           {errors.password && (
//             <p className="text-sm text-red-500">{errors.password.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={isPending}
//           className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-600/20 active:scale-[0.98]"
//         >
//           {isPending ? "Signing In..." : "Sign In"}

//           <ArrowRight className="h-5 w-5" />
//         </button>
//       </form>
//       <p className="mt-8 text-center text-sm font-medium text-slate-600">
//         Don&apos;t have an account?{" "}
//         <a
//           href="/auth/signup"
//           className="font-bold text-blue-600 hover:text-blue-700"
//         >
//           Create Account
//         </a>
        
//       </p>
      
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { loginSchema } from "../schemas/auth.schemas";
import { LoginFormData } from "../types/auth.types";
import { GoogleIcon } from "../../../components/Shared";
import { useAuthStore } from "../store/auth.store";
import { signIn } from "next-auth/react";

const Logo = ({ className = "text-white" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div
      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
        className.includes("text-white")
          ? "bg-white/20 backdrop-blur-md text-white"
          : "bg-blue-600 text-white"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h16M4 12h16M4 16h16" />
      </svg>
    </div>

    <span className="text-2xl font-extrabold tracking-tight">FreshFold</span>
  </div>
);

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const { mutateAsync, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await mutateAsync(data);

      login(res.data.user, res.data.accessToken);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = useAuthStore((state) => state.login);

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="lg:hidden mb-12 flex justify-center">
        <Logo className="text-slate-900" />
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Welcome Back
        </h2>

        <p className="text-slate-500 font-medium text-sm">
          Sign in to continue to FreshFold.
        </p>
      </div>

      <button
        onClick={() => signIn("google", {
          callbackUrl:
            "/",
        })}
        className="w-full border border-slate-200 py-3.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 mb-4 shadow-sm"
      >
        <GoogleIcon />
        Continue with Google
      </button>
      {/* CHANGE: Reduced margin-bottom from mb-6 to mb-4 */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-px bg-slate-200"></div>
        <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">
          Or sign in with email
        </span>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Email address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

            <input
              type="email"
              placeholder="name@example.com"
              {...register("email")}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
            />
          </div>

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}

              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
            />
          </div>

          
{errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}


          {/* ADDED: Clean, minimal 'Forgot Password' helper utility anchor directly aligned below the password field */}
          <div className="flex justify-end pt-0.5">
            <a 
              href="/auth/forgot-password" 
              className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-600/20 active:scale-[0.98]"
        >
          {isPending ? "Signing In..." : "Sign In"}

          <ArrowRight className="h-5 w-5" />
        </button>
      </form>
      <p className="mt-8 text-center text-sm font-medium text-slate-600">
        Don&apos;t have an account?{" "}
        <a
          href="/auth/signup"
          className="font-bold text-blue-600 hover:text-blue-700"
        >
          Create Account
        </a>
        
      </p>
      
    </div>
  );
}