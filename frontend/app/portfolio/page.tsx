"use client";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function PortfolioPage() {
    const projects = [
        { url: "https://images.unsplash.com/photo-1541462608141-ad4d15b59585?q=80&w=2070&auto=format&fit=crop", cat: "Branding", title: "Visual Identity" },
        { url: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop", cat: "Mobile App", title: "Health Tracker" },
        { url: "https://images.unsplash.com/photo-1581291518066-ed86f059c362?q=80&w=2070&auto=format&fit=crop", cat: "Web Design", title: "E-Commerce" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", cat: "UI/UX", title: "Saas Platform" },
        { url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop", cat: "App Design", title: "Smart Home" },
        { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", cat: "Graphic", title: "Poster Series" }
    ];

    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#111414] min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-24 gap-12">
                    <div>
                        <h4 className="text-[12px] uppercase tracking-[1em] font-black mb-10 text-accent">MY WORKS</h4>
                        <h2 className="text-7xl md:text-[100px] font-black tracking-tighter uppercase text-white outline-text opacity-40 leading-none">Portfolio</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex flex-wrap justify-center items-center gap-2 bg-[#0e1111] p-2 rounded-2xl border border-white/5 backdrop-blur-md">
                            <button className="px-8 py-4 rounded-xl bg-accent text-[#0e1111] font-black text-xs uppercase tracking-widest shadow-xl">All</button>
                            <button className="px-8 py-4 rounded-xl hover:text-accent font-bold text-xs uppercase tracking-widest transition-all text-gray-500">UI & UX</button>
                            <button className="px-8 py-4 rounded-xl hover:text-accent font-bold text-xs uppercase tracking-widest transition-all text-gray-500">Design</button>
                        </div>

                        <div className="flex gap-3">
                            <button className="w-16 h-16 border border-white/10 flex items-center justify-center rounded-2xl hover:border-accent transition-all group active:scale-95">
                                <FaArrowLeft className="text-lg group-hover:text-accent transition-colors" />
                            </button>
                            <button className="w-16 h-16 bg-accent/20 border border-accent/40 flex items-center justify-center rounded-2xl text-accent hover:bg-accent hover:text-black transition-all group active:scale-95 shadow-lg">
                                <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-[40px] aspect-[4/5] border border-white/5 bg-[#0e1111] cursor-pointer">
                            <Image
                                src={item.url}
                                alt={item.title}
                                fill
                                className="object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="absolute inset-0 p-12 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                <p className="text-accent text-[11px] font-black uppercase tracking-[0.5em] mb-4">{item.cat}</p>
                                <h4 className="text-4xl font-black text-white leading-tight mb-4">{item.title}</h4>
                                <div className="w-16 h-1.5 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
