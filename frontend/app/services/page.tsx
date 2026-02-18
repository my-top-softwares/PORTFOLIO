"use client";

import { useState } from "react";
import { FaCheck, FaRocket, FaGem, FaCrown, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServicesPage() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            name: "Starter",
            tagline: "Individual",
            price: { monthly: "50", annually: "500" },
            icon: FaRocket,
            features: [
                "UI/UX Design Strategy",
                "Mobile Responsive Design",
                "Basic User Research",
                "High-Fidelity Mockups",
                "2 Revision Cycles",
                "Source File Access"
            ]
        },
        {
            name: "Premium",
            tagline: "Business",
            price: { monthly: "100", annually: "1000" },
            icon: FaGem,
            featured: true,
            features: [
                "Advanced UI/UX Design",
                "Interactive Prototyping",
                "In-Depth User Testing",
                "Brand Identity Design",
                "Unlimited Revision Cycles",
                "24/7 Priority Support",
                "Cross-Platform Dev Ready"
            ]
        },
        {
            name: "Ultimate",
            tagline: "Enterprise",
            price: { monthly: "200", annually: "2000" },
            icon: FaCrown,
            features: [
                "Full Product Strategy",
                "Multi-Platform Design",
                "UX Audit & Consulting",
                "Design System Creation",
                "Lifetime Design Updates",
                "Direct Slack Communication",
                "White-Label Solutions"
            ]
        }
    ];

    return (
        <section className="relative py-40 px-6 md:px-12 lg:px-24 min-h-screen">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[160px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full glass mb-8 border border-foreground/10">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Professional Packages</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter text-gradient">
                        PRICING PLANS <br /> FOR <span className="text-accent italic">EVERYONE.</span>
                    </h1>
                    <p className="text-text-dim max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                        Flexible solutions tailored to your specific needs. From early-stage startups to established enterprises, choose the plan that scales with you.
                    </p>
                </div>

                {/* Plan Toggle Aesthetic */}
                <div className="flex justify-center mb-20">
                    <div className="glass p-1.5 rounded-2xl flex items-center gap-2 border border-foreground/10">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-8 py-3 font-black text-[11px] uppercase tracking-widest rounded-xl transition-all ${billingCycle === "monthly"
                                ? "bg-accent text-black shadow-[0_0_20px_var(--accent-glow)]"
                                : "text-text-dim hover:text-foreground"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("annually")}
                            className={`px-8 py-3 font-black text-[11px] uppercase tracking-widest rounded-xl transition-all ${billingCycle === "annually"
                                ? "bg-accent text-black shadow-[0_0_20px_var(--accent-glow)]"
                                : "text-text-dim hover:text-foreground"
                                }`}
                        >
                            Annually
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`group relative glass rounded-[40px] flex flex-col transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl ${plan.featured ? 'border-accent/30 shadow-[0_30px_60px_-15px_rgba(239,134,33,0.15)] scale-105 z-10' : 'border-foreground/10'}`}
                        >
                            {/* Card Header Section */}
                            <div className="p-12 pb-8">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{plan.name}</h3>
                                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-text-dim italic">{plan.tagline}</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                        <plan.icon className="text-accent text-2xl group-hover:text-black transition-colors" />
                                    </div>
                                </div>

                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black tracking-tighter text-foreground">
                                        ${billingCycle === "monthly" ? plan.price.monthly : plan.price.annually}
                                    </span>
                                    <span className="text-text-dim font-black text-sm uppercase tracking-widest">
                                        {billingCycle === "monthly" ? "/Month" : "/Year"}
                                    </span>
                                </div>

                                <div className={`h-1.5 w-full rounded-full ${plan.featured ? 'bg-accent' : 'bg-accent/20'}`}></div>
                            </div>

                            {/* Features Section */}
                            <div className="p-12 pt-4 flex-grow">
                                <ul className="space-y-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-text-dim font-medium group/item hover:text-foreground transition-colors">
                                            <div className="w-6 h-6 rounded-lg glass flex items-center justify-center group-hover/item:border-accent transition-all">
                                                <FaCheck className="text-accent text-[10px]" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Section */}
                            <div className="p-10 text-center">
                                <Link
                                    href={`https://wa.me/252618948948?text=Hello, I am interested in the ${plan.name} plan (${billingCycle})`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-5 rounded-2xl block font-black uppercase tracking-widest text-[11px] transition-all duration-500 ${plan.featured ? 'bg-accent text-black shadow-lg shadow-accent/20 hover:shadow-accent/40' : 'btn-outline border-foreground/10 hover:border-accent hover:text-accent'}`}
                                >
                                    GET STARTED <FaArrowRight className="inline ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 text-center p-20 glass rounded-[60px] border border-foreground/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent/5 -z-10"></div>
                    <h3 className="text-3xl md:text-4xl font-black mb-10 tracking-tighter uppercase leading-tight">Need a <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Custom</span> Solution?</h3>
                    <p className="text-text-dim max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">
                        If your project requirements don't fit into these plans, I offer bespoke consulting and design retainers for long-term collaborations.
                    </p>
                    <Link href="/contact" className="btn-primary px-16">LET'S CHAT <FaArrowRight className="ml-4 inline" /></Link>
                </div>
            </div>
        </section>
    );
}
