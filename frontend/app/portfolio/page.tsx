"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const categories = ["All", "Video", "Motion", "Graphic", "Voice"];

const portfolioData = [
    {
        id: 1,
        title: "Commercial Film",
        category: "Video",
        mainImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop"
        ],
        desc: "High-end commercial production for a global luxury brand, focusing on cinematic lighting and emotional narrative.",
        tech: ["Premiere Pro", "DaVinci Resolve", "Arri Alexa"],
        size: "large"
    },
    {
        id: 2,
        title: "Audio Identity",
        category: "Voice",
        mainImage: "https://images.unsplash.com/photo-1590602847861-f357a93bb2be?q=80&w=1974&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1590602847861-f357a93bb2be?q=80&w=1974&auto=format&fit=crop"],
        desc: "Professional voice narration and audio branding for a leading fintech company's global campaign.",
        tech: ["Pro Tools", "Audition", "Neumann U87"],
        size: "medium"
    },
    {
        id: 3,
        title: "Motion Poster",
        category: "Motion",
        mainImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"],
        desc: "Dynamic motion graphics that bring static film posters to life using fluid animation and 3D depth.",
        tech: ["After Effects", "Cinema 4D", "X-Particles"],
        size: "small"
    },
    {
        id: 4,
        title: "Documentary Edit",
        category: "Video",
        mainImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"],
        desc: "Powerful storytelling through careful editing of a feature-length documentary on urban explorers.",
        tech: ["Premiere Pro", "Avid", "After Effects"],
        size: "small"
    },
    {
        id: 5,
        title: "Visual Branding",
        category: "Graphic",
        mainImage: "https://images.unsplash.com/photo-1541462608141-ad43d53e39ca?q=80&w=2070&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1541462608141-ad43d53e39ca?q=80&w=2070&auto=format&fit=crop"],
        desc: "Scalable visual identity system including logo design, color theory, and marketing assets.",
        tech: ["Illustrator", "Photoshop", "InDesign"],
        size: "medium"
    },
    {
        id: 6,
        title: "Podcast Production",
        category: "Voice",
        mainImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"],
        desc: "Full audio production and voice engineering for a top-rated technology podcast.",
        tech: ["Audition", "Logic Pro X", "iZotope RX"],
        size: "small"
    }
];

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? portfolioData
        : portfolioData.filter(p => p.category === filter);

    return (
        <main className="relative py-40 px-6 md:px-12 lg:px-24 min-h-screen">
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="animate-fade-up">
                        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full glass mb-8 border border-foreground/10">
                            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Selected Case Studies</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.8] text-gradient uppercase">
                            IMPACTFUL <br /> <span className="text-accent italic">CREATIONS.</span>
                        </h1>
                    </div>

                    {/* Category Filter */}
                    <div className="flex gap-4 glass p-2 rounded-2xl border border-foreground/10 animate-fade-up stagger-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                                    ? "bg-accent text-black shadow-lg shadow-accent/20"
                                    : "text-text-dim hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                    {filteredProjects.map((project, i) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group relative glass rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 hover:border-accent/40 animate-fade-up stagger-${(i % 3) + 1} ${project.size === 'large' ? 'md:row-span-2 lg:row-span-2' :
                                project.size === 'medium' ? 'lg:col-span-2' : ''
                                }`}
                        >
                            <Image
                                src={project.mainImage}
                                alt={project.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                                <span className="text-accent text-[10px] font-black uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-700 [transition-delay:100ms]">
                                    {project.title}
                                </h3>
                                <div className="mt-6 flex items-center gap-4 text-white/60 text-[10px] uppercase font-black tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-700 [transition-delay:200ms]">
                                    View Details <FaArrowRight className="group-hover:translate-x-2 transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
                    <div
                        className="absolute inset-0 bg-white/60 backdrop-blur animate-in fade-in duration-500"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    <div className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[60px] overflow-y-auto border border-foreground/10 shadow-2xl animate-in zoom-in slide-in-from-bottom-10 duration-700">
                        <div className="sticky top-0 bg-primary/40 backdrop-blur-3xl z-30 flex justify-between items-center px-16 py-10 border-b border-foreground/10">
                            <div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-gradient">{selectedProject.title}</h2>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent/60">{selectedProject.category}</p>
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
                                    <p className="text-2xl text-text-dim font-light leading-relaxed mb-12">
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

                                <div className="glass p-10 rounded-[40px] border border-foreground/10 h-fit">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Technical Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((t: string, i: number) => (
                                            <span key={i} className="px-5 py-3 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-text-dim">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-12 text-center">Visual Case Study</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {selectedProject.gallery.map((img: string, i: number) => (
                                    <div key={i} className="group relative aspect-video rounded-[40px] overflow-hidden glass p-3 border border-foreground/10">
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
        </main>
    );
}
