"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";



export default function Footer() {
    const { theme, toggleTheme } = useTheme();
    return (
        <footer className="relative bg-primary/90 text-foreground py-24 w-full overflow-hidden flex flex-col items-center border-t border-white/5 dark:border-white/5 border-black/5">
            {/* Geometric Background Patterns */}
            {/* <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L50 0 L100 100" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M20 100 L60 20 L100 80" stroke="white" strokeWidth="0.3" fill="none" />
                <path d="M0 40 L40 100 L80 0" stroke="white" strokeWidth="0.2" fill="none" />
            </svg> */}

            <div className="relative text-white z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 pb-4">
                {/* Left Side: Branding & Info */}
                <div>

                    {
                        theme === "dark" ? (
                            <img src="/logo.png" className="w-40 mb-8" alt="" />
                        ) : (
                            <img src="/logolight.png" className="w-40 mb-8" alt="" />
                        )
                    }

                    <p className="text-text-dim text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-sm">
                        Empowering brands with advanced multi-modal solutions to improve digital presence and user outcomes.
                    </p>

                    <div className="flex gap-6 mb-16">
                        {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                            <a key={i} href="#" className="text-text-dim hover:text-foreground transition-all duration-500 hover:-translate-y-1">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                    <div className="w-full pt-8 items-center justify-center text-center">
                        <p className="text-text-dim text-xs font-normal uppercase justify-center">
                            Copyright © 2026 Wallace. Studio. All Rights Reserved.
                        </p>
                    </div>
                </div>

                {/* Right Side: Navigation Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    <div>
                        <h5 className="font-bold uppercase tracking-wide text-xs mb-8 text-foreground">Site Map</h5>
                        <ul className="space-y-5 text-text-dim font-bold text-[13px] tracking-wide">
                            <li><Link href="/" className="hover:text-foreground transition-all block">Project Home</Link></li>
                            <li><Link href="/about" className="hover:text-foreground transition-all block">The Story</Link></li>
                            <li><Link href="/portfolio" className="hover:text-foreground transition-all block">Case Studies</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold uppercase tracking-wide text-xs mb-8 text-foreground">Legal</h5>
                        <ul className="space-y-5 text-text-dim font-bold text-[13px] tracking-wide">
                            <li><Link href="#" className="hover:text-foreground transition-all block">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-all block">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-all block">Media Kit</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold uppercase tracking-wide text-xs mb-8 text-foreground">Solutions</h5>
                        <ul className="space-y-5 text-text-dim font-bold text-[13px] tracking-wide">
                            <li><Link href="/portfolio" className="hover:text-foreground transition-all block">Video Production</Link></li>
                            <li><Link href="/portfolio" className="hover:text-foreground transition-all block">Motion Design</Link></li>
                            <li><Link href="/portfolio" className="hover:text-foreground transition-all block">Voice Narration</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
