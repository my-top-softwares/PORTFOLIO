export default function ServicesPage() {
    const services = [
        { title: "UI & UX Design", count: "158", icon: "✨", color: "accent", desc: "Crafting intuitive interfaces that delight users and drive engagement." },
        { title: "Branding", count: "84", icon: "💎", color: "white", desc: "Building strong identity through strategic design and visual storytelling." },
        { title: "App Design", count: "112", icon: "📱", color: "white", desc: "Mobile-first experiences designed for the modern digital landscape." }
    ];

    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <h4 className="text-[12px] uppercase tracking-[1em] font-black mb-10 text-accent">MY EXPERTISE</h4>
                    <h2 className="text-7xl md:text-[120px] font-black tracking-tighter uppercase outline-text opacity-40">Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                    {services.map((s, i) => (
                        <div key={i} className={`group p-14 rounded-[3.5rem] transition-all duration-700 hover:-translate-y-6 shadow-2xl relative overflow-hidden ${s.color === 'accent' ? 'bg-accent text-black scale-105 z-10' : 'bg-[#121414] border border-white/5 hover:border-accent/30'}`}>
                            {s.color === 'accent' && (
                                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
                            )}
                            <div className="text-6xl mb-14 transition-transform group-hover:scale-125 duration-500">{s.icon}</div>
                            <p className={`text-[11px] font-black uppercase tracking-[0.4em] mb-4 ${s.color === 'accent' ? 'text-black/50' : 'text-gray-500'}`}>{s.count} Projects</p>
                            <h3 className="text-4xl font-black tracking-tighter uppercase mb-8 leading-tight">{s.title}</h3>
                            <p className={`text-[17px] font-medium leading-relaxed ${s.color === 'accent' ? 'text-black/80' : 'text-gray-400 font-light'}`}>
                                {s.desc}
                            </p>
                            <div className={`mt-10 w-12 h-1 rounded-full ${s.color === 'accent' ? 'bg-black/20' : 'bg-accent/30 group-hover:bg-accent group-hover:w-full transition-all duration-700'}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
