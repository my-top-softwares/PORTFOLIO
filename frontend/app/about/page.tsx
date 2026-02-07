import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function AboutPage() {
    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#111414] relative overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-48">
                {/* About Image with Ring and Stats */}
                <div className="lg:w-1/2 relative order-2 lg:order-1">
                    <div className="relative w-full max-w-[450px] aspect-[3/4] mx-auto">
                        <div className="absolute inset-[-4%] rounded-[5rem] border-[1.5px] border-accent/30 rotate-6 p-6">
                            <div className="w-full h-full rounded-[4.5rem] overflow-hidden border-2 border-accent relative shadow-[0_0_100px_rgba(39,243,148,0.1)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                                    alt="About Profile"
                                    fill
                                    className="object-cover brightness-105 contrast-110"
                                />
                            </div>
                        </div>

                        {/* Stats Bubbles */}
                        <div className="absolute top-[10%] -right-16 bg-[#121414] border border-accent/30 p-8 rounded-[2rem] backdrop-blur-3xl z-20 shadow-2xl">
                            <div className="text-4xl font-black text-accent mb-2">16+</div>
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Years Of <br />Experience</p>
                        </div>

                        <div className="absolute bottom-[30%] -left-16 bg-[#121414] border border-white/10 p-8 rounded-[2rem] backdrop-blur-3xl z-20 shadow-2xl">
                            <div className="text-4xl font-black text-white mb-2">215+</div>
                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Total Projects <br />Completed</p>
                        </div>

                        <div className="absolute -bottom-4 right-10 bg-accent text-black p-8 rounded-[2rem] z-20 shadow-[0_20px_50px_rgba(39,243,148,0.4)]">
                            <div className="text-4xl font-black mb-1">97+</div>
                            <p className="text-[11px] uppercase font-black tracking-[0.2em] opacity-60">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* About Text */}
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h4 className="text-[13px] uppercase tracking-[0.8em] font-black mb-8 text-accent">ABOUT ME</h4>
                    <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-[1.1]">The Story <br /> Behind.</h2>
                    <p className="text-gray-400 mb-12 text-xl font-light leading-relaxed">
                        Based in the <span className="text-white font-bold">Philippines</span>. I specialize in building high-end, elegant and functional digital solutions.
                        My passion is creating professional user interfaces and websites that tell a story. I also do branding and identity design, photo editing, and more.
                    </p>

                    <div className="mb-14 p-10 bg-[#0e1111] rounded-[2.5rem] border border-white/5 relative group cursor-pointer overflow-hidden transition-all hover:border-accent/40">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                        <h5 className="font-black text-xs uppercase tracking-[0.4em] text-gray-500 mb-6 flex items-center gap-4">
                            <FaEnvelope className="text-accent" /> Contact Now
                        </h5>
                        <span className="text-2xl md:text-3xl font-black text-white hover:text-accent transition-colors break-all">alex.wallace@gmail.com</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <button className="btn-primary flex-1 py-6 rounded-xl uppercase tracking-[0.2em] text-xs font-black">HIRE ME NOW</button>
                        <button className="btn-outline flex-1 py-6 rounded-xl uppercase tracking-[0.2em] text-xs font-black hover:bg-white hover:text-black hover:border-white">DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
