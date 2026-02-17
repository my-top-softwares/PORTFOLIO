"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative pt-48 pb-20 px-6 md:px-12 lg:px-24 min-h-[60vh] overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-accent text-black font-black w-14 h-14 flex items-center justify-center rounded-2xl text-2xl shadow-[0_0_30px_var(--accent-glow)]">A.</div>
                            <span className="text-3xl font-black tracking-tighter uppercase text-white">Wallace</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] text-gradient uppercase">
                            LET'S BUILD <br /> <span className="text-accent italic">BEYOND.</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed mb-16 max-w-sm">
                            Combining artistic vision with technical precision to build digital experiences that define the future.
                        </p>
                        <div className="flex gap-4">
                            {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-white hover:border-accent hover:text-accent transition-all duration-500 hover:-translate-y-2 group">
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16 md:gap-32">
                        <div>
                            <h5 className="font-black uppercase tracking-[0.4em] text-[11px] mb-12 text-accent flex items-center gap-3">
                                NAVIGATION
                            </h5>
                            <ul className="space-y-6 text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                                <li><Link href="/" className="hover:text-accent transition-all hover:translate-x-2 block">Project Home</Link></li>
                                <li><Link href="/about" className="hover:text-accent transition-all hover:translate-x-2 block">The Story</Link></li>
                                <li><Link href="/portfolio" className="hover:text-accent transition-all hover:translate-x-2 block">Case Studies</Link></li>
                                <li><Link href="/services" className="hover:text-accent transition-all hover:translate-x-2 block">Solutions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black uppercase tracking-[0.4em] text-[11px] mb-12 text-accent flex items-center gap-3">
                                CONTACT
                            </h5>
                            <ul className="space-y-10">
                                <li className="group cursor-pointer">
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-black mb-2">Location</p>
                                    <p className="text-sm font-bold group-hover:text-accent transition-colors flex items-center gap-3 text-white">Manila, Philippines</p>
                                </li>
                                <li className="group cursor-pointer">
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-black mb-2">Electronic Mail</p>
                                    <p className="text-lg font-black group-hover:text-accent transition-colors text-white break-all">hello@wallace.studio</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/5 gap-10">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
                        © 2026 WALLACE STUDIO. CRAFTED WITH PRECISION.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-6 text-accent font-black text-[10px] uppercase tracking-[0.5em] hover:text-white transition-colors"
                    >
                        BACK TO TOP
                        <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl group-hover:border-accent group-hover:text-accent transition-all rotate-[-90deg]">
                            <FaArrowRight size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
