"use client";
import { useState, useEffect } from "react";
import API from "@/utils/api";
import { FiGrid, FiMail, FiBriefcase, FiStar, FiActivity, FiArrowUpRight, FiClock } from "react-icons/fi";

export default function DashboardPage() {
    const [stats, setStats] = useState([
        { label: "Total Projects", value: "0", growth: "0", color: "blue", icon: FiBriefcase, endpoint: "/projects" },
        { label: "Messages", value: "0", growth: "0", color: "green", icon: FiMail, endpoint: "/messages" },
        { label: "Testimonials", value: "0", growth: "0", color: "purple", icon: FiStar, endpoint: "/testimonials" },
        { label: "Services", value: "0", growth: "0", color: "orange", icon: FiGrid, endpoint: "/services" },
    ]);
    const [recentMessages, setRecentMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);

                // Fetch counts for each stat
                const statsPromises = stats.map(async (stat) => {
                    const { data } = await API.get(stat.endpoint);
                    return { ...stat, value: data.length.toString() };
                });

                const updatedStats = await Promise.all(statsPromises);
                setStats(updatedStats);

                // Fetch recent messages
                const { data: messages } = await API.get("/messages");
                setRecentMessages(messages.slice(0, 4));

                setLoading(false);
            } catch (error) {
                console.error("Dashboard fetch error:", error);
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="animate-fade-up">
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground mb-3 leading-none">Command Center</h1>
                    <p className="text-text-dim font-black text-[10px] uppercase tracking-[0.3em]">Overview of your digital ecosystem</p>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                    <FiActivity className="text-accent animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">System Online</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="bg-card-bg p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative flex flex-col justify-between min-h-[180px]">
                            {/* Colorful Accent Background Glow */}
                            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-125 
                                ${stat.color === "blue" ? "bg-blue-500" :
                                    stat.color === "green" ? "bg-green-500" :
                                        stat.color === "purple" ? "bg-purple-500" : "bg-orange-500"}`}
                            ></div>

                            <div className="flex justify-between items-start relative z-10">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all bg-foreground/5 text-foreground group-hover:text-white 
                                    ${stat.color === "blue" ? "group-hover:bg-blue-500" :
                                        stat.color === "green" ? "group-hover:bg-green-500" :
                                            stat.color === "purple" ? "group-hover:bg-purple-500" : "group-hover:bg-orange-500"}`}
                                >
                                    <Icon className="text-xl" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-text-dim/50 italic">Live Feed</span>
                            </div>

                            <div className="mt-8 relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-1">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-4xl font-black text-foreground tabular-nums">
                                        {loading ? "..." : stat.value}
                                    </h3>
                                    <FiArrowUpRight className={`text-sm ${stat.color === "green" ? "text-green-500" : "text-text-dim/50"}`} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Items / Activity */}
                <div className="bg-card-bg p-10 rounded-[3rem] border border-foreground/5 shadow-sm h-full">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/5">
                        <h3 className="text-xl font-black text-foreground uppercase tracking-tighter">Recent Messages</h3>
                        <FiMail className="text-text-dim" />
                    </div>

                    <div className="space-y-8">
                        {loading ? (
                            [1, 2, 3].map(i => <div key={i} className="h-12 w-full bg-foreground/5 rounded-xl animate-pulse"></div>)
                        ) : recentMessages.length > 0 ? (
                            recentMessages.map((msg: any) => (
                                <div key={msg._id} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground font-black text-xs shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                        {msg.name[0]}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-sm text-foreground font-black uppercase tracking-tight">{msg.name}</p>
                                            <p className="text-[9px] text-text-dim font-bold uppercase tracking-widest">
                                                {new Date(msg.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <p className="text-xs text-text-dim line-clamp-2 leading-relaxed font-medium">{msg.message}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10">
                                <p className="text-xs font-bold text-text-dim uppercase tracking-widest">No messages yet</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="bg-card-bg p-10 rounded-[3rem] border border-foreground/5 shadow-sm h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/5">
                            <h3 className="text-xl font-black text-foreground uppercase tracking-tighter">Quick Access</h3>
                            <FiClock className="text-text-dim" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Project", endpoint: "/dashboard/projects", icon: FiBriefcase },
                                { label: "Service", endpoint: "/dashboard/services", icon: FiGrid },
                                { label: "Feedback", endpoint: "/dashboard/testimonials", icon: FiStar },
                                { label: "Resume", endpoint: "/dashboard/resume", icon: FiFileText },
                            ].map((action, i) => (
                                <a
                                    key={i}
                                    href={action.endpoint}
                                    className="p-6 bg-foreground/5 rounded-[2rem] border border-transparent hover:border-accent/30 hover:bg-accent/5 transition-all text-center group flex flex-col items-center justify-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-text-dim group-hover:text-accent transition-colors shadow-sm">
                                        <action.icon />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Add {action.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 p-6 bg-accent border border-accent/20 rounded-[2rem] text-white overflow-hidden relative group">
                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <h4 className="text-lg font-black uppercase tracking-tighter mb-1">Portfolio v2.0</h4>
                                <p className="text-[9px] font-bold uppercase tracking-widest opacity-80 italic">Ready to scale your digital presence.</p>
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                <FiArrowUpRight className="text-2xl" />
                            </div>
                        </div>
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { FiFileText } from "react-icons/fi";
