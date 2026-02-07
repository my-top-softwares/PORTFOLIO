"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative pt-48 pb-20 px-6 md:px-12 lg:px-24 bg-[#0b0d0d] overflow-hidden border-t border-white/5">
            <div className="absolute top-[-10%] right-[10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] -z-10"></div>
            <div className="absolute bottom-[20%] left-[5%] w-64 h-64 border-[1px] border-accent/10 rounded-[3rem] -z-10 rotate-45"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-accent text-black font-black w-14 h-14 flex items-center justify-center rounded-2xl text-2xl shadow-xl">A.</div>
                            <span className="text-3xl font-black tracking-tighter uppercase text-white">Alex Wallace</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-10 leading-tight text-white">
                            Let's talk about <br /> <span className="text-accent">Project.</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed mb-16 max-w-md">
                            Have a vision? I'm here to bring it to life. Let's create something that truly matters.
                        </p>
                        <div className="flex gap-6">
                            {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-500 scale-100 hover:scale-110">
                                    <Icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16 md:gap-32">
                        <div>
                            <h5 className="font-black uppercase tracking-[0.4em] text-[13px] mb-12 text-white flex items-center gap-3">
                                <span className="w-6 h-[2px] bg-accent"></span> Links
                            </h5>
                            <ul className="space-y-8 text-gray-500 font-bold uppercase text-[12px] tracking-[0.2em]">
                                <li><Link href="/" className="hover:text-accent transition-all hover:translate-x-2 block">Home</Link></li>
                                <li><Link href="/about" className="hover:text-accent transition-all hover:translate-x-2 block">About</Link></li>
                                <li><Link href="/portfolio" className="hover:text-accent transition-all hover:translate-x-2 block">Portfolio</Link></li>
                                <li><Link href="/services" className="hover:text-accent transition-all hover:translate-x-2 block">Services</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black uppercase tracking-[0.4em] text-[13px] mb-12 text-white flex items-center gap-3">
                                <span className="w-6 h-[2px] bg-accent"></span> Contact
                            </h5>
                            <ul className="space-y-10">
                                <li className="group cursor-pointer">
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600 font-black mb-2">Location</p>
                                    <p className="text-lg font-bold group-hover:text-accent transition-colors flex items-center gap-3 text-white"><FaMapMarkerAlt className="text-accent/40" /> Manila, Philippines</p>
                                </li>
                                <li className="group cursor-pointer">
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600 font-black mb-2">Phone</p>
                                    <p className="text-lg font-bold group-hover:text-accent transition-colors flex items-center gap-3 text-white"><FaPhoneAlt className="text-accent/40" /> +63 912 345 6789</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/5 gap-10 relative">
                    <div className="absolute top-[-1px] left-0 w-24 h-[1px] bg-accent"></div>
                    <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.4em]">
                        © 2026 Alex Wallace. All Rights Reserved.
                    </p>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-6 text-accent font-black text-[11px] uppercase tracking-[0.4em] hover:text-white transition-colors"
                    >
                        Back To Top
                        <div className="w-14 h-14 border border-accent/20 flex items-center justify-center rounded-2xl group-hover:bg-accent group-hover:text-black transition-all rotate-[-90deg]">
                            <FaArrowRight />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
