"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import API from "@/utils/api";

type Params = Promise<{ id: string }>;

export default function ProjectDetailPage({ params }: { params: Params }) {
    const { id } = use(params);
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const { data } = await API.get(`/projects/${id}`);
                setProject(data);
                setLoading(false);
            } catch (error) {
                console.error("Fetch project error:", error);
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5D5C6]/30">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5D5C6]/30">
                <h1 className="text-2xl font-black uppercase mb-4">Project Not Found</h1>
                <Link href="/portfolio" className="text-accent font-bold uppercase tracking-widest text-xs">Back to Portfolio</Link>
            </div>
        );
    }

    const allMedia = [
        project.mainMedia,
        ...(project.gallery || [])
    ].filter(item => item && item.url);

    return (
        <main className="min-h-screen bg-[#F5D5C6]/20 py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Navigation */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 hover:text-accent transition-colors mb-20"
                >
                    <FiArrowLeft size={16} /> Back to Collection
                </Link>

                {/* Header Title */}
                <div className="text-center mb-24 animate-fade-up">
                    <h1 className="text-6xl md:text-8xl font-black text-[#4A1D1D] uppercase tracking-tighter mb-4">
                        {project.title}
                    </h1>
                    <div className="w-40 h-1.5 bg-[#4A1D1D]/20 mx-auto rounded-full"></div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allMedia.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            className="aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 group border border-white/20 animate-fade-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.url}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    controls
                                    playsInline
                                />
                            ) : (
                                <Image
                                    src={item.url}
                                    alt={`${project.title} ${idx}`}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>

                {/* Project Details Footer */}
                <div className="mt-32 max-w-3xl mx-auto text-center animate-fade-up">
                    <h2 className="text-3xl font-black text-[#5C1A1A] uppercase tracking-tight mb-8">
                        {project.title}
                    </h2>
                    <p className="text-lg text-[#5C1A1A]/70 font-medium leading-relaxed mb-12">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {project.technologies?.map((tech: string, i: number) => (
                            <span key={i} className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#5C1A1A]/60 border border-white/20">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 mt-16 bg-[#5C1A1A] text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl"
                        >
                            Launch Project <FiExternalLink />
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
