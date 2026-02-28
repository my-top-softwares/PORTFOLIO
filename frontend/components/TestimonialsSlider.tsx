"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaUser } from "react-icons/fa";
import API from "@/utils/api";

interface Testimonial {
    _id: string;
    name: string;
    position: string;
    company: string;
    message: string;
    rating: number;
    image: string;
}

export default function TestimonialsSlider() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const { data } = await API.get("/testimonials");
                setTestimonials(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (testimonials.length === 0) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials]);

    if (loading || testimonials.length === 0) return null;

    const current = testimonials[activeIndex];

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="animate-fade-up">
                        <div className="inline-block px-4 py-1 rounded-full bg-accent/10 mb-6 border border-accent/20">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Testimonials</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter text-foreground uppercase">
                            WHAT THEY <br /> <span className="text-accent italic">SAY</span> <br /> ABOUT ME.
                        </h2>
                        <p className="text-text-dim max-w-sm mb-12 text-lg font-medium leading-relaxed">
                            Trusted by industry leaders worldwide to deliver excellence across digital platforms.
                        </p>
                        <div className="flex items-center gap-4 group">
                            <div className="h-px w-12 bg-foreground/10 group-hover:w-20 transition-all"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-dim">Global Trust</span>
                        </div>
                    </div>

                    <div className="relative h-[500px] flex items-center">
                        {/* The Large White Card Aesthetic */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial._id}
                                className={`absolute inset-0 bg-white dark:bg-card-bg p-12 md:p-20 rounded-[80px] border border-foreground/5 shadow-2xl transition-all duration-1000 flex flex-col justify-center ${index === activeIndex
                                    ? "opacity-100 translate-x-0 scale-100 rotate-0 z-10"
                                    : index < activeIndex
                                        ? "opacity-0 -translate-x-20 scale-90 -rotate-6 pointer-events-none"
                                        : "opacity-0 translate-x-20 scale-90 rotate-6 pointer-events-none"
                                    }`}
                            >
                                <FaQuoteLeft className="text-accent/10 text-9xl absolute top-12 right-12 transition-transform group-hover:scale-110" />

                                <div className="flex gap-1.5 mb-10">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`text-xl ${i < (testimonial.rating || 5) ? "text-accent" : "text-foreground/10"}`} />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-text-dim mb-12 flex-grow">
                                    "{testimonial.message}"
                                </p>

                                <div className="flex items-center gap-6 pt-10 border-t border-foreground/5">
                                    <div className="w-20 h-20 rounded-[30px] bg-accent/5 border border-accent/10 flex items-center justify-center text-accent text-2xl font-black uppercase shadow-sm overflow-hidden shrink-0">
                                        {testimonial.image ? (
                                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                        ) : (
                                            getInitials(testimonial.name)
                                        )}
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-black uppercase tracking-tight text-foreground">{testimonial.name}</h5>
                                        <p className="text-xs uppercase font-black tracking-[0.2em] text-accent mt-1 italic">
                                            {testimonial.position} <span className="text-text-dim/40 not-italic mx-2">@</span> {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Indicators (The pill-style from screenshot) */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-700 ${i === activeIndex
                                        ? "w-10 bg-accent shadow-lg shadow-accent/40"
                                        : "w-3 bg-foreground/10 hover:bg-foreground/20"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
