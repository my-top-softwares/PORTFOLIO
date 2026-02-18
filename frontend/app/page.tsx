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

                        <h1 className="text-6xl md:text-8xl lg:text-[80px] font-black mb-8 leading-[0.85] tracking-tighter text-gradient">
                            CRAFTING <br />
                            <span className="text-accent italic">DIGITAL</span> <br />
                            EXPERIENCES.
                        </h1>

                        <p className="text-text-dim max-w-xl mb-12 text-lg md:text-xl leading-relaxed font-light mx-auto lg:mx-0">
                            I am <span className="text-foreground font-bold">Alex Wallace</span>, a Senior <span className="text-accent italic">Multimedia Specialist</span> specialized in high-end video production, immersive motion design, and professional voice narration.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                            <Link href="/portfolio" className="btn-primary flex items-center gap-4 group">
                                EXPLORE CREATIONS
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <div className="flex items-center gap-4">
                                {[FaGithub, FaDribbble, FaLinkedinIn].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:-translate-y-1 text-foreground">
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Group */}
                    <div className="lg:w-2/5 relative">
                        <div className="relative w-full aspect-[4/5] rounded-[48px] overflow-hidden glass p-4 animate-float">
                            <div className="relative w-full h-full rounded-[36px] overflow-hidden  transition-all duration-1000 group">
                                <Image
                                    src="data:image/jpeg;base64,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"
                                    alt="Alex Portrait"
                                    fill
                                    className="object-cover  transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -left-4 top-1/4 glass p-6 rounded-3xl animate-float [animation-delay:1s]">
                                <h4 className="text-3xl font-black text-accent">50+</h4>
                                <p className="text-[10px] uppercase font-black tracking-widest text-text-dim">Projects</p>
                            </div>

                            <div className="absolute -right-8 bottom-1/4 glass p-6 rounded-3xl animate-float [animation-delay:2s]">
                                <div className="flex -space-x-3 mb-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary overflow-hidden">
                                            <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="client" width={32} height={32} />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] uppercase font-black tracking-widest text-text-dim">Happy Clients</p>
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
                        <span key={i} className="text-4xl md:text-6xl  font-black outline-text hover:text-foreground transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                    {/* Repeat for seamless loop */}
                    {[
                        "YOUTUBE", "NETFLIX", "DISNEY+", "PARAMOUNT", "BEIN SPORTS", "AL JAZEERA", "BBC", "HBO", "SONY"
                    ].map((brand, i) => (
                        <span key={i + '2'} className="text-4xl md:text-6xl font-black outline-text hover:text-foreground transition-colors cursor-default">
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
                        <p className="text-text-dim max-w-sm mb-4 font-light leading-relaxed">
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
                                <p className="text-text-dim text-sm leading-relaxed mb-8">{s.desc}</p>
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
            {/* <section className="py-40 px-6">
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
            </section> */}
        </div>
    );
}
