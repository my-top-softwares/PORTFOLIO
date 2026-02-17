"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-accent py-24 w-full overflow-hidden flex flex-col items-center">
            {/* Geometric Background Patterns */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L50 0 L100 100" stroke="black" strokeWidth="0.5" fill="none" />
                <path d="M20 100 L60 20 L100 80" stroke="black" strokeWidth="0.3" fill="none" />
                <path d="M0 40 L40 100 L80 0" stroke="black" strokeWidth="0.2" fill="none" />
            </svg>

            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 pb-20">
                {/* Left Side: Branding & Info */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="bg-black text-white font-black w-14 h-14 flex items-center justify-center rounded-2xl text-2xl">W.</div>
                        <span className="text-3xl font-black tracking-tighter uppercase text-black">Wallace</span>
                    </div>

                    <p className="text-black/70 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-sm">
                        Empowering brands with advanced multi-modal solutions to improve digital presence and user outcomes.
                    </p>

                    <div className="flex gap-6 mb-16">
                        {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                            <a key={i} href="#" className="text-black/60 hover:text-black transition-all duration-500 hover:-translate-y-1">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-4 px-8 py-4 border border-black/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-black hover:bg-black/5 transition-all group"
                    >
                        <div className="group-hover:-translate-y-1 transition-transform">
                            <FaArrowRight className="-rotate-90 text-black" />
                        </div>
                        BACK TO TOP
                    </button>
                </div>

                {/* Right Side: Navigation Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                    <div>
                        <h5 className="font-black uppercase tracking-[0.3em] text-[11px] mb-10 text-black">Site Map</h5>
                        <ul className="space-y-5 text-black/60 font-bold text-[13px] tracking-wide">
                            <li><Link href="/" className="hover:text-black transition-all block">Project Home</Link></li>
                            <li><Link href="/about" className="hover:text-black transition-all block">The Story</Link></li>
                            <li><Link href="/portfolio" className="hover:text-black transition-all block underline decoration-black/30 underline-offset-8">Case Studies</Link></li>
                            <li><Link href="/services" className="hover:text-black transition-all block">Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-black transition-all block">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black uppercase tracking-[0.3em] text-[11px] mb-10 text-black">Legal</h5>
                        <ul className="space-y-5 text-black/60 font-bold text-[13px] tracking-wide">
                            <li><Link href="#" className="hover:text-black transition-all block">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-black transition-all block">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-black transition-all block">Media Kit</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="w-full border-t border-black/10 pt-12 text-center">
                <p className="text-black text-[10px] font-black uppercase tracking-[0.4em]">
                    Copyright © 2026 Wallace. Studio. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
