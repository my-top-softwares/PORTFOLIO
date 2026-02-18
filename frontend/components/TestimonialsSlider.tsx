"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "James Smith",
        role: "CEO @ TECHFLOW",
        initials: "JS",
        content: "Working with Alex was a game-changer for our SaaS platform. His design not only looks stunning but has directly contributed to a 40% increase in user retention.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Product Manager @ LUMINA",
        initials: "SJ",
        content: "The level of detail and craft Alex brings to the table is unmatched. He simplified our complex user journey into something intuitive and beautiful.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Founder @ NEXUS",
        initials: "MC",
        content: "Alex has a rare ability to blend aesthetic elegance with technical precision. Our conversion rates have skyrocketed since the redesign.",
        rating: 5
    }
];

export default function TestimonialsSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = testimonials[activeIndex];

    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <h4 className="text-accent text-[12px] font-black uppercase tracking-[0.4em] mb-4">Testimonials</h4>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">WHAT THEY <br /> <span className="text-accent italic">SAY</span> ABOUT ME.</h2>
                        <p className="text-text-dim text-lg font-light leading-relaxed mb-12 max-w-md">
                            Trusted by industry leaders worldwide to deliver excellence across digital platforms.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="h-px bg-white/10 flex-grow max-w-[100px]"></div>
                            <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">Global Trust</span>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] flex items-center">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute inset-0 glass p-12 md:p-16 rounded-[60px] transition-all duration-1000 flex flex-col justify-center ${index === activeIndex
                                    ? "opacity-100 translate-x-0 scale-100 z-10"
                                    : "opacity-0 translate-x-20 scale-95 pointer-events-none"
                                    }`}
                            >
                                <FaQuoteLeft className="text-accent/20 text-8xl absolute top-10 right-10" />
                                <div className="flex gap-2 mb-8">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-accent text-lg" />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-text-dim mb-12">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl font-black">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase tracking-widest text-foreground text-sm">{testimonial.name}</h5>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-accent/60 mt-1">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slide Indicators */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "w-12 bg-accent" : "w-4 bg-gray-300 dark:bg-white/10"
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
