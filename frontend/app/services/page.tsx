"use client";

import { useState, useEffect } from "react";
import { FaCheck, FaRocket, FaGem, FaCrown, FaArrowRight, FaClock } from "react-icons/fa";
import Link from "next/link";
import API from "@/utils/api";

interface Service {
    _id: string;
    title: string;
    description: string;
    monthlyPrice: number;
    annuallyPrice: number;
    isPopular: boolean;
    features: string[];
    icon: string;
}

export default function ServicesPage() {
    const [billingCycle, setBillingCycle] = useState<"MONTHLY" | "ANNUALLY">("MONTHLY");
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const { data } = await API.get("/services");
                setServices(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching services:", error);
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    const getIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes('starter')) return FaRocket;
        if (n.includes('premium')) return FaGem;
        if (n.includes('ultimate')) return FaCrown;
        return FaClock;
    };

    return (
        <section className="relative py-40 px-6 md:px-12 lg:px-24 min-h-screen bg-background">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[160px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 animate-fade-up">
                    <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-card-bg shadow-sm mb-8 border border-foreground/5">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Professional Packages</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter text-foreground uppercase">
                        CHOOSE YOUR <br /> <span className="text-accent italic">STRATEGY.</span>
                    </h1>
                </div>

                {/* Plan Toggle */}
                <div className="flex justify-center mb-20 animate-fade-up stagger-1">
                    <div className="bg-card-bg p-2 rounded-3xl flex items-center gap-1 border border-foreground/5 shadow-xl">
                        <button
                            onClick={() => setBillingCycle("MONTHLY")}
                            className={`px-10 py-4 font-black text-xs uppercase tracking-[0.15em] rounded-2xl transition-all ${billingCycle === "MONTHLY"
                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                : "text-text-dim hover:text-foreground"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("ANNUALLY")}
                            className={`px-10 py-4 font-black text-xs uppercase tracking-[0.15em] rounded-2xl transition-all ${billingCycle === "ANNUALLY"
                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                : "text-text-dim hover:text-foreground"
                                }`}
                        >
                            Annually
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {services.map((plan, i) => {
                            const Icon = getIcon(plan.title);
                            const currentPrice = billingCycle === "MONTHLY" ? plan.monthlyPrice : plan.annuallyPrice;

                            return (
                                <div
                                    key={plan._id}
                                    className={`group relative bg-card-bg rounded-[40px] flex flex-col transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl animate-fade-up border ${plan.isPopular ? 'border-accent shadow-xl shadow-accent/5 scale-105 z-10' : 'border-foreground/5'}`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    {plan.isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg z-20">
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <div className="p-12 pb-8 relative">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[80px] -z-10 group-hover:scale-110 transition-transform"></div>

                                        <div className="flex justify-between items-start mb-10">
                                            <div>
                                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-1 text-foreground">{plan.title}</h3>
                                                <p className="text-xs font-black uppercase tracking-[0.1em] text-accent italic">{plan.description}</p>
                                            </div>
                                            <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                                                <Icon className="text-accent text-3xl group-hover:text-white transition-colors" />
                                            </div>
                                        </div>

                                        <div className="flex items-baseline gap-2 mb-8">
                                            <span className="text-6xl font-black tracking-tighter text-foreground">
                                                ${currentPrice}
                                            </span>
                                            <span className="text-text-dim font-black text-[10px] uppercase tracking-[0.2em]">
                                                {billingCycle === "MONTHLY" ? "/Month" : "/Year"}
                                            </span>
                                        </div>
                                        <div className={`h-2 w-full rounded-full ${plan.isPopular ? 'bg-accent' : 'bg-foreground/5'}`}></div>
                                    </div>

                                    <div className="p-12 pt-4 flex-grow">
                                        <ul className="space-y-6">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4 text-text-dim group/item hover:text-foreground transition-colors">
                                                    <div className="w-7 h-7 rounded-xl bg-foreground/5 flex items-center justify-center group-hover/item:bg-accent/10 group-hover/item:border-accent transition-all shrink-0 border border-transparent">
                                                        <FaCheck className="text-accent text-xs" />
                                                    </div>
                                                    <span className="text-sm font-bold uppercase tracking-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-10 text-center">
                                        <Link
                                            href={`https://wa.me/252618948948?text=Hello, I am interested in the ${plan.title} package (${billingCycle} billing)`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full py-6 rounded-2xl block font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-xl ${plan.isPopular ? 'bg-accent text-white shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02]' : 'bg-foreground/5 text-foreground hover:bg-foreground hover:text-white'}`}
                                        >
                                            SELECT PLAN <FaArrowRight className="inline ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
