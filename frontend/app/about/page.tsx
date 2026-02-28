"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaDownload, FaBriefcase, FaArrowRight, FaGraduationCap, FaCode, FaPaintBrush, FaVideo, FaLayerGroup } from "react-icons/fa";
import {
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeaftereffects,
    SiFigma,
    SiBlender,
    SiAdobexd,
    SiCanva,
    SiDavinciresolve
} from "react-icons/si";
import API from "@/utils/api";

interface ResumeItem {
    _id: string;
    title: string;
    organization: string;
    duration: string;
    description: string;
    type: 'experience' | 'education';
    order: number;
}

export default function AboutPage() {
    const [resumeData, setResumeData] = useState<ResumeItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const { data } = await API.get("/resume");
                setResumeData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching resume:", error);
                setLoading(false);
            }
        };
        fetchResume();
    }, []);

    const experiences = resumeData.filter(item => item.type === "experience").sort((a, b) => a.order - b.order);
    const education = resumeData.filter(item => item.type === "education").sort((a, b) => a.order - b.order);

    return (
        <main className="relative min-h-screen pt-32 pb-40 overflow-hidden bg-background">
            {/* Background Branding */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Hero Section */}
            <section className="px-6 md:px-12 lg:px-24 mb-60">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-32 w-full">
                    {/* About Image Group */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full max-w-[480px] aspect-[4/5] mx-auto glass p-6 rounded-[60px] animate-float">
                            <div className="relative w-full h-full rounded-[48px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                                <Image
                                    src="/myimage.jpeg"
                                    alt="About Profile"
                                    fill
                                    className="object-cover brightness-105 contrast-110 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
                            </div>

                            {/* Stats */}
                            <div className="absolute -top-8 -right-8 glass p-8 rounded-3xl z-20 shadow-2xl animate-bounce transition-all hover:scale-110">
                                <div className="text-3xl font-black text-accent mb-1 tracking-tighter">8+</div>
                                <p className="text-[10px] text-text-dim uppercase font-black tracking-widest leading-tight">Years Of <br />Mastery</p>
                            </div>

                            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl z-20 shadow-2xl animate-float [animation-delay:2s] hover:scale-110 transition-all">
                                <div className="text-3xl font-black text-foreground mb-1 tracking-tighter">150+</div>
                                <p className="text-[10px] text-text-dim uppercase font-black tracking-widest leading-tight">Global <br />Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass mb-8 border border-foreground/5 shadow-sm">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Multimedia Specialist</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight text-foreground uppercase">
                            CRAFTING <br /> <span className="text-accent italic underline underline-offset-8 decoration-accent/30">VISIONARY</span> <br /> SOLUTIONS.
                        </h2>

                        <p className="text-text-dim mb-10 text-lg font-medium leading-relaxed max-w-xl">
                            I am a Senior Multimedia Artist & UI/UX Designer who blends technical precision with creative flair. I help brands navigate the digital landscape through immersive motion graphics, intuitive interface design, and high-impact visual storytelling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/contact" className="btn-primary flex-1 flex items-center justify-center gap-4 group py-6">
                                START A PROJECT <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <button className="flex-1 glass flex items-center justify-center gap-4 group py-6 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-accent transition-all">
                                DOWNLOAD CV <FaDownload className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Education Section (Dynamic) */}
            <section className="px-6 md:px-12 lg:px-24 mb-60 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-20">
                        {/* Experience Column */}
                        <div className="flex-1">
                            <div className="flex items-center gap-6 mb-16 animate-fade-up">
                                <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center text-accent text-3xl shadow-lg shadow-accent/5">
                                    <FaBriefcase />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-foreground italic">Professional Experience</h3>
                            </div>

                            <div className="space-y-16 border-l-2 border-foreground/5 pl-10 ml-8 relative">
                                {loading ? (
                                    <div className="text-text-dim animate-pulse uppercase font-black text-xs tracking-widest">Synchronizing records...</div>
                                ) : experiences.map((exp, i) => (
                                    <div key={exp._id} className="relative group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                        <div className="absolute -left-[51.5px] top-4 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/20 group-hover:scale-150 transition-all duration-500"></div>
                                        <span className="text-xs font-black text-accent uppercase tracking-widest mb-2 block">{exp.duration}</span>
                                        <h4 className="text-2xl font-black text-foreground mb-1 uppercase tracking-tight">{exp.title}</h4>
                                        <p className="text-xs text-text-dim font-black uppercase tracking-[0.2em] mb-4 italic leading-none">{exp.organization}</p>
                                        <p className="text-sm text-text-dim font-medium leading-relaxed max-w-md">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Column */}
                        <div className="flex-1">
                            <div className="flex items-center gap-6 mb-16 animate-fade-up">
                                <div className="w-16 h-16 rounded-3xl bg-foreground/5 flex items-center justify-center text-foreground/40 text-3xl">
                                    <FaGraduationCap />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-foreground italic">Academic History</h3>
                            </div>

                            <div className="space-y-16 border-l-2 border-foreground/5 pl-10 ml-8 relative">
                                {loading ? (
                                    <div className="text-text-dim animate-pulse uppercase font-black text-xs tracking-widest">Synchronizing records...</div>
                                ) : education.map((edu, i) => (
                                    <div key={edu._id} className="relative group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                        <div className="absolute -left-[51.5px] top-4 w-5 h-5 rounded-full bg-foreground/10 border-4 border-background group-hover:bg-accent group-hover:scale-150 transition-all duration-500 shadow-sm"></div>
                                        <span className="text-xs font-black text-text-dim uppercase tracking-widest mb-2 block">{edu.duration}</span>
                                        <h4 className="text-2xl font-black text-foreground mb-1 uppercase tracking-tight">{edu.title}</h4>
                                        <p className="text-xs text-text-dim font-black uppercase tracking-[0.2em] mb-4 italic leading-none">{edu.organization}</p>
                                        <p className="text-sm text-text-dim font-medium leading-relaxed max-w-md">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Tech Stack */}
            <section className="px-6 md:px-12 lg:px-24 mb-60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 animate-fade-up">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">Mastery Toolkit</div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-foreground italic">Skills & <span className="text-accent not-italic underline decoration-accent/20 underline-offset-8">Tech Stack.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: <FaLayerGroup />, title: "UI/UX Design", skills: ["Wireframing", "Prototyping", "User Research"] },
                            { icon: <FaVideo />, title: "Motion Graphics", skills: ["Video Editing", "3D Animation", "VFX"] },
                            { icon: <FaCode />, title: "Web Development", skills: ["Next.js", "TypeScript", "Tailwind"] },
                            { icon: <FaPaintBrush />, title: "Branding", skills: ["Logo Design", "Style Guides", "Typography"] }
                        ].map((skill, i) => (
                            <div key={i} className="bg-card-bg p-12 rounded-[50px] border border-foreground/5 hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all duration-700 group hover:-translate-y-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-10 text-foreground group-hover:bg-accent group-hover:text-white transition-all duration-500 scale-110">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight mb-6 text-foreground">{skill.title}</h4>
                                <ul className="space-y-4">
                                    {skill.skills.map((s, j) => (
                                        <li key={j} className="text-xs text-text-dim font-black uppercase tracking-widest flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="mt-32 flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000 animate-fade-in">
                        <SiAdobephotoshop size={40} />
                        <SiAdobepremierepro size={40} />
                        <SiAdobeaftereffects size={40} />
                        <SiFigma size={40} />
                        <SiBlender size={40} />
                        <SiAdobexd size={40} />
                        <SiCanva size={40} />
                        <SiDavinciresolve size={40} />
                    </div>
                </div>
            </section>

            {/* Software Mastery Section */}
            <section className="px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto bg-card-bg rounded-[80px] p-24 border border-foreground/5 relative overflow-hidden shadow-2xl animate-fade-up">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>

                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-foreground/5 text-text-dim text-[10px] font-black uppercase tracking-[0.3em] mb-6">Workflow Excellence</div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-8 text-foreground">Tools & <span className="text-accent italic underline decoration-accent/20">Software.</span></h2>
                            <p className="text-text-dim text-lg font-medium leading-relaxed mb-10">
                                I leverage industry-standard software to bring complex creative visions to life. From high-fidelity design to cinematic post-production, I optimize every stage of the creative cycle.
                            </p>
                            <Link href="/portfolio" className="btn-primary group px-12">
                                VIEW MY WORKFLOW <FaArrowRight className="inline ml-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                            {[
                                { name: "Adobe Creative Cloud", icon: <SiAdobephotoshop />, desc: "Primary Visual Suite" },
                                { name: "Figma", icon: <SiFigma />, desc: "UI/UX & Prototyping" },
                                { name: "Blender", icon: <SiBlender />, desc: "3D Modeling & Rendering" },
                                { name: "After Effects", icon: <SiAdobeaftereffects />, desc: "Cinematic Motion" }
                            ].map((tool, i) => (
                                <div key={i} className="bg-background/50 backdrop-blur-sm border border-foreground/5 p-10 rounded-[40px] hover:border-accent/40 transition-all cursor-default group shadow-sm flex flex-col items-center text-center">
                                    <div className="text-4xl text-text-dim group-hover:text-accent mb-8 transition-colors duration-500">
                                        {tool.icon}
                                    </div>
                                    <h5 className="font-black text-foreground mb-2 uppercase tracking-tighter text-lg">{tool.name}</h5>
                                    <p className="text-[10px] text-text-dim uppercase font-black tracking-[0.2em] italic">{tool.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
