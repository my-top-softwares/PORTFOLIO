"use client";
import { useState, useEffect } from "react";
import API from "@/utils/api";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiStar, FiImage, FiUser, FiZap } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
    _id: string;
    name: string;
    position: string;
    company: string;
    message: string;
    rating: number;
    image: string;
}

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Form and Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState("");

    // Form state
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(5);
    const [image, setImage] = useState("");

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            const { data } = await API.get("/testimonials");
            setTestimonials(data);
            setLoading(false);
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to fetch testimonials");
            setLoading(false);
        }
    };

    const resetForm = () => {
        setName("");
        setPosition("");
        setCompany("");
        setMessage("");
        setRating(5);
        setImage("");
        setIsEditing(false);
        setCurrentId("");
    };

    const handleOpenAddModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const handleEdit = (testi: Testimonial) => {
        setName(testi.name);
        setPosition(testi.position || "");
        setCompany(testi.company || "");
        setMessage(testi.message);
        setRating(testi.rating || 5);
        setImage(testi.image || "");
        setCurrentId(testi._id);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this testimonial?")) {
            try {
                await API.delete(`/testimonials/${id}`);
                setTestimonials(testimonials.filter(t => t._id !== id));
            } catch (err: any) {
                alert(err.response?.data?.message || "Failed to delete testimonial");
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const testimonialData = { name, position, company, message, rating, image };

        try {
            if (isEditing) {
                const { data } = await API.put(`/testimonials/${currentId}`, testimonialData);
                setTestimonials(testimonials.map(t => t._id === currentId ? data : t));
            } else {
                const { data } = await API.post("/testimonials", testimonialData);
                setTestimonials([...testimonials, data]);
            }
            setIsModalOpen(false);
            resetForm();
        } catch (err: any) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    if (loading && testimonials.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="animate-fade-up">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground mb-2">Testimonials</h1>
                    <p className="text-text-dim font-medium">Manage client feedback and social proof.</p>
                </div>
                <button
                    onClick={handleOpenAddModal}
                    className="btn-primary flex items-center gap-2 self-start md:self-auto"
                >
                    <FiPlus className="text-lg" />
                    <span>ADD TESTIMONIAL</span>
                </button>
            </header>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl mb-8 font-medium">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testi) => (
                    <div key={testi._id} className="bg-card-bg p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm hover:shadow-xl hover:border-accent/10 transition-all group relative overflow-hidden flex flex-col">
                        {/* Quote Decor */}
                        <FaQuoteLeft className="absolute top-6 right-8 text-accent/10 text-4xl group-hover:text-accent/20 transition-colors" />

                        <div className="flex items-center gap-1 text-accent mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <FiStar key={s} className={s <= testi.rating ? "fill-accent" : "text-foreground/10 fill-none"} />
                            ))}
                        </div>

                        <p className="text-text-dim leading-relaxed mb-10 font-medium line-clamp-4 flex-grow italic">
                            "{testi.message}"
                        </p>

                        <div className="flex items-center gap-4 pt-6 border-t border-foreground/5">
                            <div className="w-14 h-14 rounded-2xl bg-foreground/5 overflow-hidden filter grayscale hover:grayscale-0 transition-all border border-foreground/10 shrink-0">
                                {testi.image ? (
                                    <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-text-dim">
                                        <FiUser className="text-xl" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-black text-foreground uppercase tracking-tight">{testi.name}</h4>
                                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-0.5">
                                    {testi.position} @ {testi.company}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(testi)} className="p-2 rounded-lg bg-foreground/5 text-foreground hover:bg-accent hover:text-white transition-all">
                                    <FiEdit2 className="text-xs" />
                                </button>
                                <button onClick={() => handleDelete(testi._id)} className="p-2 rounded-lg bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-500/10">
                                    <FiTrash2 className="text-xs" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {!loading && testimonials.length === 0 && (
                <div className="bg-card-bg p-12 rounded-3xl border border-dashed border-foreground/10 flex flex-col items-center justify-center text-center">
                    <FaQuoteLeft className="text-5xl text-accent/20 mb-6" />
                    <h3 className="text-xl font-bold text-foreground mb-2">No testimonials found</h3>
                    <p className="text-text-dim max-w-xs mb-8">Gather and publish feedback from your satisfied clients to build trust.</p>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md">
                    <div className="bg-card-bg w-full max-w-2xl rounded-3xl p-8 border border-foreground/10 shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto custom-scrollbar">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/5">
                            <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter">
                                {isEditing ? "Edit Feedback" : "New Feedback"}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all">
                                <FiX />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Client Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. Sarah J. Johnson" required />
                            </div>

                            <div className="md:col-span-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Position</label>
                                        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. CMO" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Company</label>
                                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. Netflix" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-1">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Rating (1-5)</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${rating >= star ? 'bg-accent/10 text-accent shadow-sm' : 'bg-foreground/5 text-text-dim hover:bg-foreground/10'}`}
                                        >
                                            <FiStar className={rating >= star ? 'fill-accent' : ''} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-1">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Client Photo URL</label>
                                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="https://..." />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Testimonial Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium min-h-[140px] resize-none"
                                    placeholder="Paste the client's review here..."
                                    required
                                />
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button type="submit" className="w-full bg-accent text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] text-sm hover:scale-[1.02] shadow-lg shadow-accent/20 active:scale-95 transition-all flex items-center justify-center gap-3">
                                    <FiZap className="text-lg" />
                                    <span>{isEditing ? "UPDATE FEEDBACK" : "PUBLISH FEEDBACK"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
