import Image from "next/image";
import { FaArrowRight, FaMousePointer } from "react-icons/fa";

export default function Home() {
    return (
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
                        <button className="btn-primary px-14 py-7 text-[14px] font-black tracking-[0.2em] group rounded-xl">
                            VIEW PORTFOLIO
                            <FaArrowRight className="ml-4 group-hover:translate-x-3 transition-transform duration-500 text-black" />
                        </button>

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
    );
}
