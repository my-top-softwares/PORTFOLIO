import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaArrowRight } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen pt-40 pb-40 overflow-hidden bg-background">
            {/* Super Large Background Text */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none">
                <h2 className="text-[200px] md:text-[350px] font-black uppercase tracking-tighter text-white/[0.02] leading-none">
                    CONTACT.
                </h2>
            </div>

            {/* Ambient Background Orbs */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Column: Headline & Status */}
                    <div className="lg:col-span-12 mb-20">
                        <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full glass mb-10 border border-foreground/10">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Opening for partnerships</span>
                        </div>
                        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] uppercase text-gradient">
                            HAVE A PROJECT <br /> <span className="text-accent italic">IN MIND?</span>
                        </h1>
                    </div>

                    {/* Left Side: Info Tiles (Bento Style) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {[
                                { icon: FaEnvelope, label: "Shoot an Email", val: "amina@gmail.com", color: "text-blue-400" },
                                { icon: FaMapMarkerAlt, label: "Current Location", val: "Mogadishu Somalia", color: "text-red-400" },
                                { icon: FaPhoneAlt, label: "Direct Support", val: "+252 618 948 948", color: "text-green-400" }
                            ].map((item, i) => (
                                <div key={i} className="glass p-10 rounded-[40px] border border-foreground/10 hover:border-foreground/20 transition-all group cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-700"></div>
                                    <item.icon className={`${item.color} text-2xl mb-6`} />
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-dim mb-2">{item.label}</p>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{item.val}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Social Connect Tile */}
                        <div className="glass p-10 rounded-[40px] border border-foreground/10">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-dim mb-8">Social Ecosystem</p>>
                            <div className="flex flex-wrap gap-4">
                                {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-14 h-14 glass flex items-center justify-center rounded-2xl text-foreground hover:bg-accent hover:text-black transition-all duration-500">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: High-End Form */}
                    <div className="lg:col-span-7">
                        <div className="glass p-12 md:p-16 rounded-[60px] border border-foreground/10 bg-white/[0.01] relative">
                            <div className="mb-12">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Send a Transmission</h3>
                                <p className="text-text-dim text-sm font-medium">Expected response time: Under 24 hours.</p>>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input type="text" className="w-full bg-transparent border-b border-foreground/10 py-6 outline-none focus:border-accent transition-all peer font-bold text-lg text-foreground" placeholder="Full Name" />
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-focus-within:w-full"></div>
                                    </div>
                                    <div className="relative group">
                                        <input type="email" className="w-full bg-transparent border-b border-foreground/10 py-6 outline-none focus:border-accent transition-all peer font-bold text-lg text-foreground" placeholder="Email Address" />
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-focus-within:w-full"></div>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input type="text" className="w-full bg-transparent border-b border-foreground/10 py-6 outline-none focus:border-accent transition-all peer font-bold text-lg text-foreground" placeholder="Interested In" />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-focus-within:w-full"></div>
                                </div>

                                <div className="relative group">
                                    <textarea rows={4} className="w-full bg-transparent border-b border-foreground/10 py-6 outline-none focus:border-accent transition-all peer font-bold text-lg resize-none text-foreground" placeholder="Message Details"></textarea>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-focus-within:w-full"></div>
                                </div>

                                <button className="group mt-12 btn-primary w-full py-10 rounded-full font-black tracking-[0.4em] uppercase overflow-hidden relative shadow-2xl">
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        ENGAGE PROJECT <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
