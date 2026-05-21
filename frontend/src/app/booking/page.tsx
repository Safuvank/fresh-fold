    "use client";

    import React, { useState } from "react";
    import { useRouter } from "next/navigation";
    import { 
    Zap, Truck, Calendar, CheckCircle2, User, 
    ChevronLeft, ChevronRight, Weight, ShoppingBag, 
    MapPin, Check, Sparkles, Shirt, Clock
    } from "lucide-react";

    // --- Types & Interfaces ---
    type SpeedType = "express" | "standard" | "economy";
    type MeasureMode = "weight" | "items";

    interface ItemCount {
    id: string;
    name: string;
    pricePerUnit: number;
    count: number;
    icon: React.ComponentType<any>;
    }

    export default function BookingPage() {
    const router = useRouter();

    // --- Mock Authentication Check Flag ---
    // In your production app, hook this state variable to your global context layer (e.g., NextAuth / Redux / Context API)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); 

    // --- Core Funnel State Management System ---
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [selectedSpeed, setSelectedSpeed] = useState<SpeedType>("standard");
    
    const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
        daily: true,
        premium: false,
        dryclean: false,
        ironing: false,
    });

    const [measureMode, setMeasureMode] = useState<MeasureMode>("items");
    const [weightValue, setWeightValue] = useState<number>(5);
    
    const [itemQuantities, setItemQuantities] = useState<ItemCount[]>([
        { id: "shirts", name: "Shirts", pricePerUnit: 150, count: 0, icon: Shirt },
        { id: "pants", name: "Pants", pricePerUnit: 180, count: 1, icon: Shirt },
        { id: "tshirts", name: "T-Shirts", pricePerUnit: 99, count: 1, icon: Shirt },
        { id: "jeans", name: "Jeans", pricePerUnit: 199, count: 1, icon: Shirt },
        { id: "jackets", name: "Jackets", pricePerUnit: 299, count: 0, icon: Shirt },
    ]);

    const [selectedDate, setSelectedDate] = useState<string>("Tomorrow, 26 Nov");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("12:00 PM - 03:00 PM");

    // --- Dynamic Pricing & Calculations Engine ---
    const getSpeedMultiplier = (): number => {
        if (selectedSpeed === "express") return 1.5; // +50% Premium
        if (selectedSpeed === "economy") return 0.85; // -15% Discount
        return 1.0;
    };

    const calculateTotalItemsCount = (): number => {
        return itemQuantities.reduce((acc, curr) => acc + curr.count, 0);
    };

    const calculateTotalPrice = (): number => {
        let subtotal = 0;
        if (measureMode === "weight") {
        const basePerKgRate = selectedServices.premium ? 199 : 99;
        subtotal = weightValue * basePerKgRate;
        } else {
        subtotal = itemQuantities.reduce((acc, item) => acc + (item.count * item.pricePerUnit), 0);
        }
        return Math.round(subtotal * getSpeedMultiplier());
    };

    // --- Navigation & Guard Rail Hooks ---
    const handleNextStep = () => {
        if (currentStep === 4 && !isAuthenticated) {
        // Intercept and redirect to authentication routes if unauthenticated before step 5
        router.push("/auth/login?redirect=/booking");
        return;
        }
        if (currentStep < 5) setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    const handleFinalOrderSubmit = () => {
        alert("🎉 Order Booked Successfully! Your pickup window has been scheduled.");
        router.push("/dashboard");
    };

    // --- Sub-components for Form Steps ---
    const renderProgressBar = () => {
        const stepsConfig = [
        { step: 1, label: "SPEED" },
        { step: 2, label: "SERVICES" },
        { step: 3, label: "DETAILS" },
        { step: 4, label: "SCHEDULE" },
        { step: 5, label: "CONFIRM" },
        ];

        return (
        <div className="w-full border-b border-slate-100 bg-white py-6 px-4 sticky top-0 z-30 shadow-sm">
            <div className="max-w-4xl mx-auto flex items-center justify-between relative">
            {/* Connector Line Background track */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-100 -z-10" />
            
            {stepsConfig.map((item) => {
                const isCompleted = currentStep > item.step;
                const isActive = currentStep === item.step;
                return (
                <div key={item.step} className="flex flex-col items-center flex-1 relative">
                    {/* Connector line highlighting active status */}
                    {item.step > 1 && (
                    <div className={`absolute top-4 right-[50%] left-[-50%] h-0.5 -z-10 transition-colors duration-300 ${
                        currentStep >= item.step ? "bg-blue-600" : "bg-slate-100"
                    }`} />
                    )}
                    
                    <button
                    disabled={item.step > currentStep}
                    onClick={() => setCurrentStep(item.step)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isCompleted 
                        ? "bg-blue-600 text-white" 
                        : isActive 
                            ? "bg-blue-600 text-white ring-4 ring-blue-50" 
                            : "bg-slate-100 text-slate-400 border border-slate-200"
                    }`}
                    >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : item.step}
                    </button>
                    <span className={`text-[10px] font-bold mt-2 tracking-widest uppercase transition-colors ${
                    isActive ? "text-blue-600" : "text-slate-400"
                    }`}>
                    {item.label}
                    </span>
                </div>
                );
            })}
            </div>
        </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between text-slate-800">
        
        {/* 1. Global Process Steps Topbar Header */}
        {renderProgressBar()}

        {/* 2. Main Step Context Body Frame */}
        <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-12 md:py-16">
            
            {/* Dynamic Context Container Wrapper */}
            <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Step {currentStep} of 5
            </span>
            
            {currentStep === 1 && <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">How fast do you need it?</h1>}
            {currentStep === 2 && <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">What services do you need?</h1>}
            {currentStep === 3 && <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Tell us about your laundry</h1>}
            {currentStep === 4 && <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">When should we pick it up?</h1>}
            {currentStep === 5 && <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Review &amp; Confirm</h1>}
            
            <p className="text-slate-500 text-sm md:text-base">
                {currentStep === 1 && "Choose a service speed that fits your schedule and budget."}
                {currentStep === 2 && "Select one or more services for your order profile package."}
                {currentStep === 3 && "Choose how you'd like to measure and estimate your order volume."}
                {currentStep === 4 && "Select a convenient date and arrival time slot for our courier."}
                {currentStep === 5 && "Double check your details before placing the operational order."}
            </p>
            </div>

            {/* --- STEP 1 CONTENT: SERVICE SPEEDS PANEL --- */}
            {currentStep === 1 && (
            <div className="space-y-4">
                {/* Express Card Option */}
                <div 
                onClick={() => setSelectedSpeed("express")}
                className={`p-6 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer relative ${
                    selectedSpeed === "express" 
                    ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/10" 
                    : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300"
                }`}
                >
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedSpeed === "express" ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}>
                    <Zap className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg tracking-tight">Express Processing</h3>
                        <span className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md">Premium</span>
                    </div>
                    <p className={`text-xs mt-0.5 ${selectedSpeed === "express" ? "text-blue-100" : "text-slate-400"}`}>Pickup 30-60 min • Delivery 3-6 hrs</p>
                    <div className="text-sm font-bold mt-2 text-amber-400">$$$$</div>
                    </div>
                </div>
                <button className={`px-5 py-2 text-xs font-bold rounded-xl border ${selectedSpeed === "express" ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-200"}`}>
                    {selectedSpeed === "express" ? "Selected" : "Select"}
                </button>
                </div>

                {/* Standard Card Option */}
                <div 
                onClick={() => setSelectedSpeed("standard")}
                className={`p-6 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer relative ${
                    selectedSpeed === "standard" 
                    ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/10" 
                    : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300"
                }`}
                >
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedSpeed === "standard" ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}>
                    <Truck className="w-5 h-5" />
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg tracking-tight">Standard Regular</h3>
                        <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md">Recommended</span>
                    </div>
                    <p className={`text-xs mt-0.5 ${selectedSpeed === "standard" ? "text-blue-100" : "text-slate-400"}`}>Same-day pickup • Delivery 24 hrs</p>
                    <div className="text-sm font-bold mt-2 text-emerald-400">$$$</div>
                    </div>
                </div>
                <button className={`px-5 py-2 text-xs font-bold rounded-xl border ${selectedSpeed === "standard" ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-200"}`}>
                    {selectedSpeed === "standard" ? "Selected" : "Select"}
                </button>
                </div>

                {/* Economy Card Option */}
                <div 
                onClick={() => setSelectedSpeed("economy")}
                className={`p-6 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer relative ${
                    selectedSpeed === "economy" 
                    ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/10" 
                    : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300"
                }`}
                >
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedSpeed === "economy" ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}>
                    <Clock className="w-5 h-5" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg tracking-tight">Economy Saver</h3>
                    <p className={`text-xs mt-0.5 ${selectedSpeed === "economy" ? "text-blue-100" : "text-slate-400"}`}>Scheduled pickup • Delivery 48-72 hrs</p>
                    <div className="text-sm font-bold mt-2 text-slate-400">$$</div>
                    </div>
                </div>
                <button className={`px-5 py-2 text-xs font-bold rounded-xl border ${selectedSpeed === "economy" ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-200"}`}>
                    {selectedSpeed === "economy" ? "Selected" : "Select"}
                </button>
                </div>
            </div>
            )}

            {/* --- STEP 2 CONTENT: SERVICES CATALOG MATRIX --- */}
            {currentStep === 2 && (
            <div className="space-y-4">
                {[
                { id: "daily", title: "Daily Laundry", desc: "Everyday wash & fold garment bundles", priceTag: "From ₹99/kg", icon: Shirt },
                { id: "premium", title: "Premium Laundry", desc: "Gentle care cycles for technical delicate fabrics", priceTag: "From ₹199/kg", icon: Sparkles },
                { id: "dryclean", title: "Dry Cleaning", desc: "Professional advanced dry chemical solvent processing", priceTag: "From ₹149/item", icon: ShoppingBag },
                { id: "ironing", title: "Iron Only", desc: "Crisp architectural steam press and iron configurations", priceTag: "From ₹49/item", icon: Truck },
                ].map((srv) => {
                const isChecked = selectedServices[srv.id];
                return (
                    <div
                    key={srv.id}
                    onClick={() => setSelectedServices(prev => ({ ...prev, [srv.id]: !prev[srv.id] }))}
                    className={`p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                        isChecked ? "border-blue-500 bg-blue-50/40 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                    >
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isChecked ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                        <srv.icon className="w-4 h-4" />
                        </div>
                        <div>
                        <h4 className="font-bold text-slate-900 text-base">{srv.title}</h4>
                        <p className="text-xs text-slate-400">{srv.desc}</p>
                        <span className="text-xs text-emerald-600 font-bold block mt-1">{srv.priceTag}</span>
                        </div>
                    </div>
                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                        isChecked ? "bg-blue-600 border-blue-600 text-white" : "border-slate-200 bg-white"
                    }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    </div>
                );
                })}
            </div>
            )}

            {/* --- STEP 3 CONTENT: MEASUREMENT DETAILS LOGISTICS --- */}
            {currentStep === 3 && (
            <div className="space-y-6">
                {/* Split Switch Header Tabs */}
                <div className="flex bg-slate-100 p-1.5 rounded-2xl max-w-md mx-auto">
                <button
                    onClick={() => setMeasureMode("weight")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-all ${
                    measureMode === "weight" ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                    <Weight className="w-4 h-4" /> By Weight
                </button>
                <button
                    onClick={() => setMeasureMode("items")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-all ${
                    measureMode === "items" ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                    <Shirt className="w-4 h-4" /> By Items
                </button>
                </div>

                {/* Switchable Segment 1: Weight Calculation Slider Slider */}
                {measureMode === "weight" && (
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <Weight className="w-5 h-5 text-blue-600" />
                    <span>Enter Weight Profile Estimate</span>
                    </div>
                    
                    {/* Dynamic Counter Interface Display */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl py-8 flex items-center justify-center gap-8 relative overflow-hidden">
                    <button 
                        onClick={() => setWeightValue(p => Math.max(1, p - 1))}
                        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl hover:bg-blue-700 shadow shadow-blue-600/20 active:scale-95 transition"
                    >
                        -
                    </button>
                    <div className="text-center">
                        <span className="text-5xl font-black text-blue-600 tracking-tight">{weightValue}<span className="text-lg font-bold text-slate-400 ml-1">kg</span></span>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Current Weight</p>
                    </div>
                    <button 
                        onClick={() => setWeightValue(p => Math.min(20, p + 1))}
                        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl hover:bg-blue-700 shadow shadow-blue-600/20 active:scale-95 transition"
                    >
                        +
                    </button>
                    </div>

                    {/* Range Slider Track */}
                    <div className="space-y-2">
                    <input 
                        type="range" min="1" max="20" step="1"
                        value={weightValue}
                        onChange={(e) => setWeightValue(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
                        <span>1 kg</span>
                        <span>5 kg</span>
                        <span>10 kg</span>
                        <span>15 kg</span>
                        <span>20 kg</span>
                    </div>
                    </div>

                    {/* Pricing Disclaimer Warning Label */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-400 leading-relaxed flex items-start gap-2.5">
                    <span className="font-bold text-blue-600">i</span>
                    <span>Min: 1 kg, Max: 20 kg per pickup allocation. Final exact pricing metrics are confirmed at the processing center post-pickup via structural verified scaling scales.</span>
                    </div>
                </div>
                )}

                {/* Switchable Segment 2: Individual Item Counter Matrices */}
                {measureMode === "items" && (
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <ShoppingBag className="w-5 h-5 text-blue-600" />
                    <span>Select Specific Garments</span>
                    </div>

                    <div className="space-y-3">
                    {itemQuantities.map((item, idx) => (
                        <div 
                        key={item.id}
                        className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                            item.count > 0 ? "border-blue-500 bg-blue-50/10" : "border-slate-100 bg-slate-50/50"
                        }`}
                        >
                        <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.count > 0 ? "bg-blue-600 text-white" : "bg-slate-200/70 text-slate-500"}`}>
                            <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                            <span className="font-bold text-sm text-slate-900 block">{item.name}</span>
                            <span className="text-xs text-slate-400">₹{item.pricePerUnit}/piece</span>
                            </div>
                        </div>

                        {/* Micro Counter Trigger Controls */}
                        <div className="flex items-center gap-3.5 bg-white border border-slate-200 p-1 rounded-lg">
                            <button
                            disabled={item.count === 0}
                            onClick={() => setItemQuantities(prev => prev.map((it, i) => i === idx ? { ...it, count: Math.max(0, it.count - 1) } : it))}
                            className="w-7 h-7 rounded-md bg-slate-50 hover:bg-slate-100 font-bold text-slate-600 flex items-center justify-center transition disabled:opacity-40"
                            >
                            -
                            </button>
                            <span className="font-bold text-sm min-w-[12px] text-center text-slate-900">{item.count}</span>
                            <button
                            onClick={() => setItemQuantities(prev => prev.map((it, i) => i === idx ? { ...it, count: it.count + 1 } : it))}
                            className="w-7 h-7 rounded-md bg-slate-50 hover:bg-slate-100 font-bold text-slate-600 flex items-center justify-center transition"
                            >
                            +
                            </button>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Sub Live Price Preview Indicator Panel Component */}
                    <div className="mt-8 border border-blue-100 bg-blue-50/30 rounded-2xl p-5 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-blue-100/40">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Live Price Preview
                        </span>
                        <span className="text-[10px] font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-bold uppercase tracking-widest">Live</span>
                    </div>
                    <div className="space-y-2 text-xs font-medium text-slate-500">
                        <div className="flex justify-between"><span>Service Delivery Profile Speed:</span><span className="font-bold text-slate-900 uppercase">{selectedSpeed}</span></div>
                        <div className="flex justify-between"><span>Aggregated Tracked Quantities:</span><span className="font-bold text-slate-900">{calculateTotalItemsCount()} items</span></div>
                        <div className="flex justify-between"><span>Courier Delivery &amp; Pickup Logistics:</span><span className="font-bold text-emerald-600 uppercase">Free</span></div>
                    </div>
                    <div className="bg-blue-600 text-white p-4 rounded-xl flex justify-between items-center shadow-md shadow-blue-600/10">
                        <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Estimated Total</span>
                        <span className="text-xs text-blue-100">Incl. all taxes</span>
                        </div>
                        <span className="text-2xl font-black tracking-tight">₹{calculateTotalPrice()}</span>
                    </div>
                    </div>
                </div>
                )}
            </div>
            )}

            {/* --- STEP 4 CONTENT: ARRIVAL SCHEDULE ASSIGNMENT --- */}
            {currentStep === 4 && (
            <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
                {/* Date Picker Row */}
                <div className="space-y-3">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" /> Select Date Target
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {["Today, 25 Nov", "Tomorrow, 26 Nov", "Wed, 27 Nov", "Thu, 28 Nov"].map((dt) => (
                    <button
                        key={dt}
                        onClick={() => setSelectedDate(dt)}
                        className={`py-3 px-4 text-xs font-bold rounded-xl border transition-all truncate ${
                        selectedDate === dt 
                            ? "border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-50" 
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                    >
                        {dt}
                    </button>
                    ))}
                </div>
                </div>

                {/* Time Slot Picker Grid */}
                <div className="space-y-3">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" /> Select Time Slot Windows
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                    "09:00 AM - 12:00 PM",
                    "12:00 PM - 03:00 PM",
                    "03:00 PM - 06:00 PM",
                    "06:00 PM - 09:00 PM"
                    ].map((tm) => (
                    <button
                        key={tm}
                        onClick={() => setSelectedTimeSlot(tm)}
                        className={`py-3.5 px-5 text-xs font-bold rounded-xl border text-left flex items-center justify-between transition-all ${
                        selectedTimeSlot === tm 
                            ? "border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-50" 
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                    >
                        <span>{tm}</span>
                        {selectedTimeSlot === tm && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                    </button>
                    ))}
                </div>
                </div>
            </div>
            )}

            {/* --- STEP 5 CONTENT: FINAL AUDIT REVIEW SUMMARY --- */}
            {currentStep === 5 && (
            <div className="space-y-6">
                <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm">
                {/* Header summary panel */}
                <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
                    <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight capitalize">{selectedSpeed} Workflow Suite</h3>
                    <p className="text-xs text-slate-400 mt-1">1 Service configuration active • {measureMode === "weight" ? `${weightValue} kg load` : `${calculateTotalItemsCount()} items mapped`}</p>
                    </div>
                    <div className="text-right">
                    <span className="text-2xl font-black text-blue-600 tracking-tight block">₹{calculateTotalPrice()}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Est. Total</span>
                    </div>
                </div>

                {/* Parametrization Details List */}
                <div className="p-6 md:p-8 space-y-6 text-sm">
                    <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                        <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                        <span className="font-bold text-slate-900 block">Pickup Schedule Window</span>
                        <span className="text-xs text-slate-500 mt-0.5 block">{selectedDate} • {selectedTimeSlot}</span>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                        <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-900 block">Delivery Address Profile</span>
                        <button className="text-xs text-blue-600 font-bold hover:underline">Change</button>
                        </div>
                        <span className="text-xs text-slate-500 mt-0.5 block max-w-md leading-relaxed">42 Banjara Hills, Road No. 3, Hyderabad, Telangana 500034</span>
                    </div>
                    </div>
                </div>
                </div>

                {/* Post-Payment Collection Disclaimer Alert Banner Component */}
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-3 text-emerald-800 text-xs md:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Payment will be collected digitally after the final exact package weight is validated post-pickup.</span>
                </div>
            </div>
            )}

        </main>

        {/* 3. Global Controlled Fixed Lower Navigation Utility Footer */}
        <footer className="w-full bg-white border-t border-slate-200/80 px-6 py-4 sticky bottom-0 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
            
            {/* Back Action Trigger Button */}
            <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition disabled:opacity-0 disabled:pointer-events-none"
            >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" /> Back
            </button>

            {/* Forward / Direct Action Submission Trigger Button */}
            {currentStep < 5 ? (
                <button
                onClick={handleNextStep}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-600/10 text-sm tracking-wide active:scale-[0.98]"
                >
                Continue <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
            ) : (
                <button
                onClick={handleFinalOrderSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/10 text-sm tracking-wide tracking-wider uppercase active:scale-[0.98]"
                >
                Confirm Order
                </button>
            )}

            </div>
        </footer>

        </div>
    );
    }