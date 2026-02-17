import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMousePointer, FaAward, FaUsers, FaRocket, FaQuoteLeft, FaCheck, FaGithub, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import GallerySection from "@/components/GallerySection";

export default function Home() {
    return (
        <div className="relative">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full relative z-10">
                    {/* Hero Content */}
                    <div className="lg:w-3/5 text-center lg:text-left">
                        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full glass mb-8 animate-bounce transition-all hover:border-accent/40">
                            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Available for New Projects</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black mb-8 leading-[0.85] tracking-tighter text-gradient">
                            CRAFTING <br />
                            <span className="text-accent italic">DIGITAL</span> <br />
                            EXPERIENCES.
                        </h1>

                        <p className="text-gray-400 max-w-xl mb-12 text-lg md:text-xl leading-relaxed font-light mx-auto lg:mx-0">
                            I am <span className="text-white font-bold">Alex Wallace</span>, a Senior <span className="text-accent italic">Multimedia Specialist</span> specialized in high-end video production, immersive motion design, and professional voice narration.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                            <Link href="/portfolio" className="btn-primary flex items-center gap-4 group">
                                EXPLORE CREATIONS
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <div className="flex items-center gap-4">
                                {[FaGithub, FaDribbble, FaLinkedinIn].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:-translate-y-1">
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Group */}
                    <div className="lg:w-2/5 relative">
                        <div className="relative w-full aspect-[4/5] rounded-[48px] overflow-hidden glass p-4 animate-float">
                            <div className="relative w-full h-full rounded-[36px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop"
                                    alt="Alex Portrait"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -left-8 top-1/4 glass p-6 rounded-3xl animate-float [animation-delay:1s]">
                                <h4 className="text-3xl font-black text-accent">500+</h4>
                                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Productions</p>
                            </div>

                            <div className="absolute -right-8 bottom-1/4 glass p-6 rounded-3xl animate-float [animation-delay:2s]">
                                <div className="flex -space-x-3 mb-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary overflow-hidden">
                                            <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="client" width={32} height={32} />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Marquee */}
            <section className="py-20 border-y border-white/5 bg-secondary/20 relative overflow-hidden backdrop-blur-sm">
                <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
                    {[
                        "YOUTUBE", "NETFLIX", "DISNEY+", "PARAMOUNT", "BEIN SPORTS", "AL JAZEERA", "BBC", "HBO", "SONY"
                    ].map((brand, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-black outline-text hover:text-white transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                    {/* Repeat for seamless loop */}
                    {[
                        "YOUTUBE", "NETFLIX", "DISNEY+", "PARAMOUNT", "BEIN SPORTS", "AL JAZEERA", "BBC", "HBO", "SONY"
                    ].map((brand, i) => (
                        <span key={i + '2'} className="text-4xl md:text-6xl font-black outline-text hover:text-white transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h4 className="text-accent text-[12px] font-black uppercase tracking-[0.4em] mb-4">My Expertise</h4>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                                MULTIMEDIA <br /> <span className="text-accent italic">CRAFT.</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-4 font-light leading-relaxed">
                            Transforming raw concepts into cinematic experiences using industry-leading tools and narrative techniques.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Voice Over", icon: FaUsers, desc: "Professional voice narration for commercials, documentaries, and audiobooks." },
                            { title: "Video Editing", icon: FaRocket, desc: "Seamless storytelling with high-end color grading and sound design." },
                            { title: "Motion Design", icon: FaMousePointer, desc: "Dynamic animations that bring static graphics to life with fluid motion." },
                            { title: "Graphic Design", icon: FaAward, desc: "Powerful visual identities and marketing assets that stand out." }
                        ].map((s, i) => (
                            <div key={i} className="glass group p-10 rounded-[40px] hover:border-accent/40 transition-all duration-700 hover:-translate-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:rotate-12 transition-all">
                                    <s.icon className="text-accent text-2xl group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase leading-tight">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                                <Link href="/portfolio" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent group-hover:gap-4 transition-all">
                                    View Projects <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSlider />

            {/* Gallery Section */}
            <GallerySection />

            {/* CTA Section */}
            <section className="py-40 px-6">
                <div className="max-w-7xl mx-auto glass rounded-[80px] p-24 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/5 -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10">
                        <h2 className="text-6xl md:text-[140px] font-black tracking-tighter uppercase mb-12 leading-none text-gradient">
                            LET'S <br /> WORK <br /> <span className="text-accent italic">TOGETHER.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link href="/contact" className="btn-primary px-16 py-8 rounded-3xl text-sm transition-all hover:px-20">START A PROJECT</Link>
                            <a href="mailto:alex@wallace.com" className="text-lg font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors border-b-2 border-white/5 hover:border-accent pb-2">alex@wallace.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
