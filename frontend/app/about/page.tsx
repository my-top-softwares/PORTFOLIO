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


export default function AboutPage() {
    return (
        <main className="relative min-h-screen pt-32 pb-40 overflow-hidden">
            {/* Background Branding */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Hero Section */}
            <section className="px-6 md:px-12 lg:px-24 mb-60">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-32 w-full">
                    {/* About Image with Ring and Stats */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full max-w-[480px] aspect-[4/5] mx-auto glass p-6 rounded-[60px] animate-float">
                            <div className="relative w-full h-full rounded-[48px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                    alt="About Profile"
                                    fill
                                    className="object-cover brightness-105 contrast-110 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Stats Bubbles */}
                            <div className="absolute -top-8 -right-8 glass p-8 rounded-3xl z-20 shadow-2xl animate-bounce transition-all hover:scale-110">
                                <div className="text-4xl font-black text-accent mb-1">10+</div>
                                <p className="text-[10px] text-text-dim uppercase font-black tracking-widest">Years Of <br />Experience</p>
                            </div>

                            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl z-20 shadow-2xl animate-float [animation-delay:2s] hover:scale-110 transition-all">
                                <div className="text-4xl font-black text-foreground mb-1">120+</div>
                                <p className="text-[10px] text-text-dim uppercase font-black tracking-widest">Projects <br />Completed</p>
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full glass mb-8 border border-foreground/10">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Multimedia Professional</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85] text-gradient uppercase">
                            CRAFTING <br /> <span className="text-accent italic">VISIONARY</span> <br /> SOLUTIONS.
                        </h2>

                        <p className="text-text-dim mb-10 text-xl font-light leading-relaxed max-w-xl">
                            Based in the <span className="text-foreground font-bold underline decoration-accent/30 underline-offset-8">Philippines</span>, I am a strategic Multimedia Artist & UI/UX Designer who blends technical precision with creative flair.
                            <br /><br />
                            I help brands navigate the digital landscape through immersive motion graphics, intuitive interface design, and high-impact visual storytelling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/contact" className="btn-primary flex-1 flex items-center justify-center gap-4 group">
                                START A PROJECT <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <button className="btn-outline flex-1 flex items-center justify-center gap-4 group">
                                DOWNLOAD CV <FaDownload className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Education Section */}
            <section className="px-6 md:px-12 lg:px-24 mb-60 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-20">
                        {/* Experience */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-12">
                                <FaBriefcase className="text-accent text-2xl" />
                                <h3 className="text-2xl font-black uppercase tracking-tighter">Professional Experience</h3>
                            </div>
                            <div className="space-y-10 border-l border-foreground/10 pl-8">
                                {[
                                    { year: "2022 - Present", role: "Senior Multimedia Designer", company: "Pixel Craft Studio" },
                                    { year: "2019 - 2022", role: "UI/UX Specialist", company: "Tech Horizon Global" },
                                    { year: "2016 - 2019", role: "Creative Lead", company: "Neon Media Agency" }
                                ].map((exp, i) => (
                                    <div key={i} className="relative group">
                                        <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-primary transition-transform group-hover:scale-150"></div>
                                        <span className="text-xs font-black text-accent tracking-widest mb-2 block">{exp.year}</span>
                                        <h4 className="text-xl font-bold text-foreground mb-1">{exp.role}</h4>
                                        <p className="text-sm text-text-dim font-bold uppercase tracking-widest">{exp.company}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-12">
                                <FaGraduationCap className="text-accent text-2xl" />
                                <h3 className="text-2xl font-black uppercase tracking-tighter">Academic History</h3>
                            </div>
                            <div className="space-y-10 border-l border-foreground/10 pl-8">
                                {[
                                    { year: "2014 - 2016", degree: "Master of Digital Arts", school: "Academy of Visual Arts" },
                                    { year: "2010 - 2014", degree: "B.S. in Multimedia Arts", school: "State University PH" }
                                ].map((edu, i) => (
                                    <div key={i} className="relative group">
                                        <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-primary transition-transform group-hover:bg-accent group-hover:scale-150"></div>
                                        <span className="text-xs font-black text-text-dim tracking-widest mb-2 block">{edu.year}</span>
                                        <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
                                        <p className="text-sm text-text-dim font-bold uppercase tracking-widest">{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Tech Stack Section */}
            <section className="px-6 md:px-12 lg:px-24 mb-60">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h4 className="text-xs font-black uppercase tracking-[0.5em] text-accent mb-6">Expertise</h4>
                        <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Skills & <span className="text-accent italic">Tech Stack.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaLayerGroup />, title: "UI/UX Design", skills: ["Wireframing", "Prototyping", "User Research"] },
                            { icon: <FaVideo />, title: "Motion Graphics", skills: ["Video Editing", "3D Animation", "VFX"] },
                            { icon: <FaCode />, title: "Web Development", skills: ["Next.js", "TypeScript", "GSAP"] },
                            { icon: <FaPaintBrush />, title: "Branding", skills: ["Logo Design", "Style Guides", "Typography"] }
                        ].map((skill, i) => (
                            <div key={i} className="glass p-10 rounded-[40px] border border-foreground/10 hover:border-accent/40 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent text-2xl group-hover:bg-accent group-hover:text-black transition-all">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-6">{skill.title}</h4>
                                <ul className="space-y-3">
                                    {skill.skills.map((s, j) => (
                                        <li key={j} className="text-sm text-text-dim font-medium flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
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

            {/* Tools & Software Section */}
            <section className="px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto glass rounded-[60px] p-20 border border-foreground/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>

                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-accent mb-6">Mastery</h4>
                            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none mb-8">Tools & <span className="text-accent italic">Software.</span></h2>
                            <p className="text-text-dim text-lg font-light leading-relaxed mb-10">
                                I leverage industry-standard software to bring complex creative visions to life. From high-fidelity design to cinematic post-production.
                            </p>
                            <button className="btn-primary group">
                                VIEW MY WORKFLOW <FaArrowRight className="inline ml-3 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { name: "Adobe Creative Cloud", icon: <SiAdobephotoshop />, desc: "Primary Visual Suite" },
                                { name: "Figma", icon: <SiFigma />, desc: "UI/UX & Prototyping" },
                                { name: "Blender", icon: <SiBlender />, desc: "3D Modeling & Rendering" },
                                { name: "After Effects", icon: <SiAdobeaftereffects />, desc: "Cinematic Motion" }
                            ].map((tool, i) => (
                                <div key={i} className="bg-white/[0.02] border border-foreground/10 p-8 rounded-[32px] hover:border-accent/20 transition-all cursor-default group">
                                    <div className="text-3xl text-text-dim group-hover:text-accent mb-6 transition-colors">
                                        {tool.icon}
                                    </div>
                                    <h5 className="font-bold text-foreground mb-2">{tool.name}</h5>
                                    <p className="text-[10px] text-text-dim uppercase tracking-widest">{tool.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
