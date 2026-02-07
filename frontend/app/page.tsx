import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMousePointer, FaAward, FaUsers, FaRocket, FaQuoteLeft, FaCheck } from "react-icons/fa";

export default function Home() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 pb-48 px-6 md:px-12 lg:px-24 overflow-hidden">
                {/* Pattern Overlays */}
                <div className="absolute top-[20%] right-[15%] w-[550px] h-[550px] border border-accent/10 rounded-full -z-10 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute top-[15%] left-[5%] opacity-15 -z-10">
                    <svg width="250" height="250" viewBox="0 0 100 100" className="text-accent/40"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="none" stroke="currentColor" strokeWidth="0.5" /></svg>
                </div>
                <div className="dots-pattern absolute right-[20%] bottom-[15%] w-64 h-64 opacity-20 -z-10"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full relative z-10">
                    {/* Hero Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h4 className="flex items-center gap-4 text-[13px] uppercase tracking-[0.6em] font-black mb-10 text-gray-500 justify-center lg:justify-start">
                            <span className="w-10 h-[2px] bg-accent"></span> Hello, I'm A
                        </h4>
                        <h1 className="text-7xl md:text-[110px] font-black mb-12 leading-[0.9] tracking-tighter">
                            UI & UX <br /> <span className="text-accent relative inline-block">Designer.
                                <span className="absolute bottom-4 left-0 w-full h-4 bg-accent/20 -z-10"></span>
                            </span>
                        </h1>
                        <p className="text-gray-400 max-w-lg mb-14 text-xl md:text-2xl leading-relaxed font-light mx-auto lg:mx-0">
                            Hi I'm <span className="text-white font-bold italic">Alex Wallace</span>, a passionate UI/UX Designer based in the <span className="text-accent underline decoration-accent/30 underline-offset-8">Philippines</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start">
                            <Link href="/portfolio" className="btn-primary px-14 py-7 text-[14px] font-black tracking-[0.2em] group rounded-xl">
                                VIEW PORTFOLIO
                                <FaArrowRight className="ml-4 group-hover:translate-x-3 transition-transform duration-500 text-black" />
                            </Link>

                            <div className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="relative h-12 w-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all">
                                    <FaMousePointer className="text-accent text-sm animate-bounce" />
                                </div>
                                <span className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-extrabold group-hover:text-white transition-colors">Scroll & Explore</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Group */}
                    <div className="lg:w-1/2 relative flex justify-center lg:justify-end py-10 lg:py-0">
                        <div className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                            <div className="absolute inset-[-15%] bg-accent/15 blur-[120px] rounded-full -z-20 animate-pulse"></div>

                            <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 bg-secondary/30 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.5)] transform hover:rotate-2 transition-all duration-700 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                                    alt="Alex Portrait"
                                    fill
                                    className="object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="absolute -top-12 -right-12 w-48 h-48 border border-accent/20 rounded-[4rem] flex items-center justify-center -z-10 animate-[spin_30s_linear_infinite] opacity-50">
                                <div className="w-1/2 h-[1px] bg-accent/40 absolute"></div>
                            </div>
                            <div className="absolute -bottom-10 right-20 w-40 h-40 bg-accent/10 clip-hexagon opacity-60 transform -rotate-12 hover:rotate-12 transition-transform duration-1000 -z-10"></div>
                        </div>
                    </div>
                </div>

                <div className="section-divider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C47.45,4.3,101.82,14.07,156.48,24.35c54.86,10.3,110.17,21.05,164.91,32.09Z" className="shape-fill fill-[#111414]"></path>
                    </svg>
                </div>
            </section>

            {/* Brands/Trust Section */}
            <section className="py-24 bg-[#111414] border-b border-white/5 relative z-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <p className="text-center text-gray-500 font-black uppercase tracking-[0.5em] text-[10px] mb-16 italic underline decoration-accent/30 underline-offset-8">TRUSTED BY 50+ GLOBAL BRANDS</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 invert hover:opacity-80 transition-opacity">
                        {/* Placeholder brand icons */}
                        <div className="text-3xl font-black tracking-tighter">SAMSUNG</div>
                        <div className="text-3xl font-black tracking-tighter">ADOBE</div>
                        <div className="text-3xl font-black tracking-tighter">SPOTIFY</div>
                        <div className="text-3xl font-black tracking-tighter">NASA</div>
                        <div className="text-3xl font-black tracking-tighter">GOOGLE</div>
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-40 bg-[#111414] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2 relative">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
                                <div className="absolute inset-0 border border-accent/20 rounded-[4rem] rotate-6"></div>
                                <div className="absolute inset-0 bg-accent/5 rounded-[4rem] -rotate-3 blur-2xl"></div>
                                <div className="absolute inset-6 rounded-[3rem] overflow-hidden border border-white/10 group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                                        alt="Alex"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                {/* Floating Experience Card */}
                                <div className="absolute bottom-[-20px] -right-10 bg-black/80 backdrop-blur-xl border border-accent/30 p-8 rounded-3xl shadow-2xl z-30">
                                    <h4 className="text-accent text-5xl font-black mb-2">16+</h4>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h4 className="text-accent text-[13px] uppercase tracking-[0.8em] font-black mb-10">THE STORY</h4>
                            <h2 className="text-6xl font-black mb-12 tracking-tighter leading-tight">My journey is defined by <span className="text-accent italic">impactful</span> creations.</h2>
                            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                                For over a decade, I've been helping startups and tech giants translate complex ideas into intuitive digital experiences. My approach blends data-driven strategy with aesthetic excellence.
                            </p>
                            <Link href="/about" className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.4em] text-white hover:text-accent transition-colors">
                                LEARN MORE ABOUT ME
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlights */}
            <section className="py-40 bg-[#0e1111] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-24">
                        <h4 className="text-accent text-[13px] uppercase tracking-[0.8em] font-black mb-10">EXPERTise</h4>
                        <h2 className="text-7xl font-black tracking-tighter uppercase outline-text opacity-40 leading-none">Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Strategy", icon: FaRocket, desc: "Planning digital growth through precise market research." },
                            { title: "Design", icon: FaAward, desc: "Creating world-class interfaces that leave lasting impressions." },
                            { title: "Growth", icon: FaUsers, desc: "Scaling products by understanding user behavior deeply." }
                        ].map((s, i) => (
                            <div key={i} className="bg-secondary/20 border border-white/5 p-12 rounded-[3rem] hover:border-accent/30 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150 duration-700"></div>
                                <s.icon className="text-accent text-5xl mb-10 group-hover:rotate-12 transition-transform duration-500" />
                                <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">{s.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed mb-8">{s.desc}</p>
                                <div className="w-12 h-1 bg-accent/20 group-hover:bg-accent group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-24">
                        <Link href="/services" className="btn-outline px-12 py-5 rounded-2xl uppercase font-black tracking-widest text-xs hover:bg-accent hover:text-black hover:border-accent">EXPLORE ALL SERVICES</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-40 bg-[#111414] relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h4 className="text-accent text-[13px] uppercase tracking-[0.8em] font-black mb-10">FEEDBACK</h4>
                            <h2 className="text-6xl font-black mb-12 tracking-tighter leading-tight">What my clients say about <span className="text-accent italic">Working with me.</span></h2>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-accent hover:text-accent cursor-pointer transition-all">
                                    <FaArrowRight className="rotate-180" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black cursor-pointer shadow-lg shadow-accent/20">
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0e1111] border border-white/5 p-16 rounded-[4rem] relative shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <FaQuoteLeft size={120} className="text-accent" />
                            </div>
                            <div className="flex gap-4 mb-10">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="text-accent">★</div>)}
                            </div>
                            <p className="text-2xl font-medium leading-relaxed italic text-gray-300 mb-12 relative z-10">
                                "Working with Alex was a game-changer for our SaaS platform. His design not only looks stunning but has directly contributed to a 40% increase in user retention."
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/20 flex items-center justify-center text-accent text-xl font-black">JS</div>
                                <div>
                                    <h5 className="font-black uppercase tracking-widest text-white text-sm">James Smith</h5>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-gray-600 mt-1">CEO @ TECHFLOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent/5 -z-10 group-hover:bg-accent/10 transition-colors duration-1000"></div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <div className="inline-block p-4 border border-accent/30 rounded-full mb-12 animate-pulse">
                        <FaRocket className="text-accent" />
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-16 leading-tight">
                        Ready to <br /> <span className="text-accent underline decoration-4 underline-offset-[20px]">Collaborate?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link href="/contact" className="btn-primary px-16 py-8 rounded-2xl text-[14px] font-black tracking-[0.4em] uppercase shadow-2xl shadow-accent/30">LET'S START A PROJECT</Link>
                        <a href="mailto:alex.wallace@gmail.com" className="text-[13px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-colors border-b-2 border-transparent hover:border-accent py-2">OR SEND AN EMAIL</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
