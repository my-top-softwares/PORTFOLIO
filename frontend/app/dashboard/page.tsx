"use client";

export default function DashboardPage() {
    return (
        <div className="animate-fade-up">
            <header className="mb-10">
                <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Dashboard Overview</h1>
                <p className="text-text-dim font-medium">Welcome to your administration panel. Manage all content from here.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Projects", value: "12", growth: "+2", color: "bg-blue-500" },
                    { label: "Messages", value: "48", growth: "+12", color: "bg-green-500" },
                    { label: "Testimonials", value: "8", growth: "0", color: "bg-purple-500" },
                    { label: "Subscribers", value: "124", growth: "+15", color: "bg-orange-500" },
                ].map((stat, i) => (
                    <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                            <span className="text-[10px] bg-white/5 py-1 px-2 rounded-lg text-accent font-bold">{stat.growth} NEW</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Recent Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                                <div>
                                    <p className="text-sm text-white font-medium">New project "Cyber Portfolio" was published</p>
                                    <p className="text-[10px] text-text-dim uppercase tracking-widest mt-1">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-accent/10 hover:border-accent/20 transition-all text-xs font-bold uppercase tracking-widest text-white">Add Project</button>
                        <button className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-accent/10 hover:border-accent/20 transition-all text-xs font-bold uppercase tracking-widest text-white">New Service</button>
                        <button className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-accent/10 hover:border-accent/20 transition-all text-xs font-bold uppercase tracking-widest text-white">Upload Resume</button>
                        <button className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-accent/10 hover:border-accent/20 transition-all text-xs font-bold uppercase tracking-widest text-white">Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
