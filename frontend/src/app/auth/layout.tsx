import React from "react";
import { Truck, ShieldCheck, Leaf, Star } from "lucide-react";

const Logo = ({ className = "text-white" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div
      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${className.includes("text-white") ? "bg-white/20 backdrop-blur-md text-white" : "bg-blue-600 text-white"}`}
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

const SparkleIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="m18.36 5.64-12.72 12.72" />
    <path d="M5.64 5.64l12.72 12.72" />
  </svg>
);

const FeatureRow = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="flex items-center gap-3 xl:gap-4">
    <div className="bg-white/10 border border-white/10 p-2.5 xl:p-3.5 rounded-xl backdrop-blur-md shadow-inner">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-semibold text-sm xl:text-base">{title}</h3>
      <p className="text-blue-200/80 text-xs xl:text-sm mt-0.5">{subtitle}</p>
    </div>
  </div>
);

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full overflow-hidden bg-white flex flex-col lg:flex-row font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/95 to-blue-900/95" />

        <div className="relative z-10 p-8 lg:p-10 xl:p-12 h-full flex flex-col justify-between">
          <Logo className="text-white" />

          {/* Central Content dynamically adjusts to available height */}
          <div className="flex-1 flex flex-col justify-center py-4">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1 xl:px-4 xl:py-1.5 rounded-full text-xs xl:text-sm font-medium text-blue-50 w-fit mb-4 shadow-sm">
              <SparkleIcon />
              Trusted by 500+ customers
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-3 tracking-tight">
              Fresh laundry,
              <br />
              delivered to your door.
            </h1>
            <p className="text-blue-100/90 text-sm xl:text-lg max-w-md mb-6 xl:mb-10 leading-relaxed font-light">
              Pick a plan, schedule a pickup, and we'll handle the rest.
              Eco-friendly washing with same-day delivery options.
            </p>

            <div className="space-y-4 xl:space-y-6">
              <FeatureRow
                icon={<Truck className="w-4 h-4 xl:w-5 xl:h-5 text-white" />}
                title="Free pickup & delivery"
                subtitle="On orders above ₹499"
              />
              <FeatureRow
                icon={<Leaf className="w-4 h-4 xl:w-5 xl:h-5 text-white" />}
                title="Eco-friendly process"
                subtitle="Plant-based detergents only"
              />
              <FeatureRow
                icon={
                  <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                }
                title="100% satisfaction guarantee"
                subtitle="Or we re-wash for free"
              />
            </div>
          </div>

          <div className="pt-4 xl:pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 mb-2 xl:mb-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 xl:w-8 xl:h-8 rounded-full border-2 border-blue-600 bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-800 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="avatar"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 xl:w-4 xl:h-4 fill-white text-white"
                  />
                ))}
                <span className="text-white font-medium text-xs xl:text-sm ml-1">
                  4.9/5
                </span>
              </div>
            </div>
            <p className="text-blue-100/80 text-xs xl:text-sm font-medium leading-relaxed max-w-md">
              "FreshFold turned laundry from a chore into a delight."
              <span className="text-white ml-2">— Priya S.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex flex-col h-full relative overflow-y-auto lg:overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10 -translate-y-1/2 translate-x-1/2"></div>

        <div className="hidden lg:flex justify-end p-6 xl:p-8 text-sm font-bold text-slate-500 relative z-20">
          {/* <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Help & Support
            </a>
          </div> */}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:px-16 xl:px-24 relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
