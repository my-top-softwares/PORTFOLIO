"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative pt-60 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Massive Background Typography */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none -z-10 select-none">
                <h2 className="text-[150px] md:text-[250px] lg:text-[400px] font-black text-white/[0.02] leading-none tracking-tighter uppercase whitespace-nowrap">
                    WALLACE STUDIO
                </h2>
            </div>

            {/* Ambient Background Orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Master CTA Section */}
                <div className="mb-48 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8 border border-white/5 mx-auto lg:mx-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Available for new projects</span>
                    </div>
                    <h2 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.8] text-gradient uppercase mb-16">
                        LET'S MAKE <br /> <span className="text-accent italic">CONTACT.</span>
                    </h2>

                    <a href="mailto:hello@wallace.studio" className="group relative inline-flex items-center gap-8 glass px-12 py-8 rounded-full border-white/10 hover:border-accent/40 transition-all duration-700">
                        <span className="text-2xl md:text-5xl font-black text-white group-hover:text-accent transition-colors">hello@wallace.studio</span>
                        <div className="w-12 h-12 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center text-black -rotate-45 group-hover:rotate-0 transition-transform duration-700 shadow-[0_0_30px_rgba(239,134,33,0.3)]">
                            <FaArrowRight className="text-xl md:text-3xl" />
                        </div>
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="bg-accent text-black font-black w-16 h-16 flex items-center justify-center rounded-3xl text-3xl shadow-[0_0_40px_var(--accent-glow)]">W.</div>
                                <span className="text-4xl font-black tracking-tighter uppercase text-white">Wallace</span>
                            </div>
                            <p className="text-gray-400 text-2xl font-light leading-relaxed mb-16 max-w-sm">
                                Elevating digital standards through intentional design and technical mastery.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-white hover:border-accent hover:text-accent transition-all duration-500 hover:-translate-y-2 group shadow-xl">
                                    <Icon size={20} className="group-hover:scale-125 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-16 md:gap-32">
                        <div>
                            <h5 className="font-black uppercase tracking-[0.4em] text-[11px] mb-12 text-accent">NAVIGATION</h5>
                            <ul className="space-y-6 text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                                <li><Link href="/" className="hover:text-accent transition-all hover:translate-x-2 block">Project Home</Link></li>
                                <li><Link href="/about" className="hover:text-accent transition-all hover:translate-x-2 block">Biography</Link></li>
                                <li><Link href="/portfolio" className="hover:text-accent transition-all hover:translate-x-2 block">Case Studies</Link></li>
                                <li><Link href="/services" className="hover:text-accent transition-all hover:translate-x-2 block">The Process</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black uppercase tracking-[0.4em] text-[11px] mb-12 text-accent">LOCATION</h5>
                            <ul className="space-y-10">
                                <li className="group cursor-default">
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-black mb-2">Based In</p>
                                    <p className="text-lg font-bold text-white group-hover:text-accent transition-colors">Manila, Philippines</p>
                                </li>
                                <li className="group cursor-default">
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-black mb-2">Local Time</p>
                                    <p className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                                        {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} GMT+8
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Hub */}
                <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/5 gap-10">
                    <div className="flex items-center gap-12">
                        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
                            © 2026 WALLACE STUDIO
                        </p>
                        <div className="hidden lg:flex items-center gap-4 text-[10px] font-black text-gray-700 tracking-widest uppercase">
                            <span>Privacy Policy</span>
                            <span className="w-1 h-1 rounded-full bg-gray-800"></span>
                            <span>Legal</span>
                        </div>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-6 text-accent font-black text-[10px] uppercase tracking-[0.5em] hover:text-white transition-colors"
                    >
                        BACK TO ORIGIN
                        <div className="w-14 h-14 glass flex items-center justify-center rounded-3xl group-hover:border-accent group-hover:text-accent transition-all rotate-[-90deg] shadow-lg">
                            <FaArrowRight size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
