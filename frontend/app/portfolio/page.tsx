"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            id: 1,
            title: "FINTECH DASHBOARD",
            cat: "WEB DESIGN",
            mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
            ],
            desc: "A comprehensive financial management dashboard designed for high-net-worth individuals to track global assets in real-time.",
            tech: ["Next.js", "TailwindCSS", "Recharts", "Prisma"]
        },
        {
            id: 2,
            title: "HEALTH TRACKER APP",
            cat: "MOBILE APP",
            mainImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop"
            ],
            desc: "Focusing on user psychology, this app helps users maintain long-term wellness through gamified habit tracking.",
            tech: ["React Native", "Firebase", "Styled Components"]
        },
        {
            id: 3,
            title: "LUXURY WATCH STORE",
            cat: "E-COMMERCE",
            mainImage: "https://images.unsplash.com/photo-1581291518066-ed86f059c362?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1581291518066-ed86f059c362?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            ],
            desc: "A high-end e-commerce experience with immersive 3D product previews and seamless checkout flow.",
            tech: ["Shopify", "Three.js", "GSAP"]
        }
    ];

    return (
        <section className="relative py-40 px-6 md:px-12 lg:px-24 min-h-screen">
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-24 animate-fade-up">
                    <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full glass mb-8 border border-white/5">
                        <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Selected Case Studies</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-gradient uppercase">
                        IMPACTFUL <br /> <span className="text-accent italic">CREATIONS.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group relative glass rounded-[40px] p-4 cursor-pointer transition-all duration-700 hover:border-accent/40 hover:-translate-y-3 animate-fade-up stagger-${i + 1}`}
                        >
                            <div className="relative aspect-[16/11] overflow-hidden rounded-[30px] mb-5 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700">
                                <Image
                                    src={project.mainImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                                    <p className="text-white text-sm font-light text-center leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="absolute top-4 right-4 w-11 h-11 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-accent/10 border-accent/20 rotate-45 group-hover:rotate-0">
                                    <FaArrowRight className="text-accent text-lg" />
                                </div>
                            </div>

                            <div className="px-3 pb-3">
                                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2 group-hover:text-accent transition-colors">{project.cat}</p>
                                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-500"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    <div className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[60px] overflow-y-auto border border-white/10 shadow-2xl animate-in zoom-in slide-in-from-bottom-10 duration-700">
                        <div className="sticky top-0 bg-primary/40 backdrop-blur-3xl z-30 flex justify-between items-center px-16 py-10 border-b border-white/5">
                            <div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 text-gradient">{selectedProject.title}</h2>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent/60">{selectedProject.cat}</p>
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-500 hover:rotate-90"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        <div className="p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
                                <div className="lg:col-span-2">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Concept & Vision</h4>
                                    <p className="text-2xl text-gray-300 font-light leading-relaxed mb-12">
                                        {selectedProject.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-6">
                                        <button className="btn-primary flex items-center gap-4 group">
                                            LIVE PREVIEW <FaExternalLinkAlt size={12} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                                        </button>
                                        <button className="btn-outline flex items-center gap-4 group">
                                            VIEW CODE <FaGithub size={18} className="group-hover:scale-125 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                <div className="glass p-10 rounded-[40px] border-white/5 h-fit">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Technical Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((t: string, i: number) => (
                                            <span key={i} className="px-5 py-3 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-12 text-center">Visual Case Study</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {selectedProject.gallery.map((img: string, i: number) => (
                                    <div key={i} className="group relative aspect-video rounded-[40px] overflow-hidden glass p-3 border border-white/5">
                                        <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`Gallery ${i}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
