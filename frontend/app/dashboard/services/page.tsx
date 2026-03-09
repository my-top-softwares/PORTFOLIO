"use client";
import { useState, useEffect } from "react";
import API from "@/utils/api";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiSettings, FiBriefcase, FiStar } from "react-icons/fi";
import ConfirmModal from "@/components/ConfirmModal";

interface Service {
    _id: string;
    title: string;
    description: string;
    monthlyPrice: number;
    annuallyPrice: number;
    isPopular: boolean;
    features: string[];
    icon: string;
}

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Form and Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState("");

    // Confirm state
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    // Form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [monthlyPrice, setMonthlyPrice] = useState(0);
    const [annuallyPrice, setAnnuallyPrice] = useState(0);
    const [isPopular, setIsPopular] = useState(false);
    const [icon, setIcon] = useState("");
    const [featureInput, setFeatureInput] = useState("");
    const [features, setFeatures] = useState<string[]>([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const { data } = await API.get("/services");
            setServices(data);
            setLoading(false);
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to fetch services");
            setLoading(false);
        }
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setMonthlyPrice(0);
        setAnnuallyPrice(0);
        setIsPopular(false);
        setIcon("");
        setFeatures([]);
        setFeatureInput("");
        setIsEditing(false);
        setCurrentId("");
    };

    const handleOpenAddModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const handleEdit = (service: Service) => {
        setTitle(service.title);
        setDescription(service.description);
        setMonthlyPrice(service.monthlyPrice);
        setAnnuallyPrice(service.annuallyPrice);
        setIsPopular(service.isPopular || false);
        setIcon(service.icon);
        setFeatures(service.features);
        setCurrentId(service._id);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const confirmDelete = (id: string) => {
        setDeleteId(id);
        setConfirmOpen(true);
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await API.delete(`/services/${deleteId}`);
            setServices(services.filter(s => s._id !== deleteId));
            setDeleteId(null);
        } catch (err: any) {
            alert(err.response?.data?.message || "Failed to delete service");
        }
    };

    const handleAddFeature = () => {
        if (featureInput.trim()) {
            setFeatures([...features, featureInput.trim()]);
            setFeatureInput("");
        }
    };

    const removeFeature = (index: number) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const serviceData = { title, description, monthlyPrice, annuallyPrice, features, isPopular, icon };

        try {
            if (isEditing) {
                const { data } = await API.put(`/services/${currentId}`, serviceData);
                setServices(services.map(s => s._id === currentId ? data : s));
            } else {
                const { data } = await API.post("/services", serviceData);
                setServices([...services, data]);
            }
            setIsModalOpen(false);
            resetForm();
        } catch (err: any) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    if (loading && services.length === 0) {
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
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground mb-2">Services</h1>
                    <p className="text-text-dim font-medium">Manage and configure your service packages.</p>
                </div>
                <button
                    onClick={handleOpenAddModal}
                    className="btn-primary flex items-center gap-2 self-start md:self-auto"
                >
                    <FiPlus className="text-lg" />
                    <span>ADD NEW PACKAGE</span>
                </button>
            </header>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl mb-8 font-medium">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service._id} className={`bg-card-bg p-8 rounded-3xl border transition-all group relative overflow-hidden ${service.isPopular ? 'border-accent ring-1 ring-accent/20 shadow-xl' : 'border-foreground/5 shadow-sm'}`}>
                        {/* Popular Badge */}
                        {service.isPopular && (
                            <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-20 flex items-center gap-1 shadow-lg shadow-accent/20">
                                <FiStar /> POPULAR
                            </div>
                        )}

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-2xl mb-6 shadow-sm border border-accent/10">
                                <FiBriefcase />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-xs font-bold text-accent uppercase tracking-widest">{service.description}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-black text-foreground">${service.monthlyPrice}<span className="text-[10px] text-text-dim">/mo</span></div>
                                    <div className="text-xl font-black text-foreground">${service.annuallyPrice}<span className="text-[10px] text-text-dim">/yr</span></div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 min-h-[140px]">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-text-dim">
                                        <FiCheck className="text-accent mt-1 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3 pt-6 border-t border-foreground/5">
                                <button
                                    onClick={() => handleEdit(service)}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-foreground/5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent/10 hover:text-accent transition-all border border-transparent hover:border-accent/20"
                                >
                                    <FiEdit2 />
                                    <span>EDIT</span>
                                </button>
                                <button
                                    onClick={() => confirmDelete(service._id)}
                                    className="w-12 h-12 flex items-center justify-center bg-red-500/5 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-500/10"
                                >
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[1000] flex items-start justify-center p-4 md:p-8 bg-white/80 backdrop-blur-xl animate-fade-in  pt-10 md:pt-22 ">
                    <div className="bg-white w-full max-w-2xl rounded-[4rem] border border-black/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col animate-zoom-in relative">
                        <div className="px-12 py-10 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
                            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                                {isEditing ? "Refine Package" : "New Package"}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all hover:rotate-90 duration-300 border border-slate-200/50"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-12 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="md:col-span-2 space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-1">Package Title</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-foreground/[0.03] border-2 border-transparent focus:border-accent/30 focus:bg-background rounded-2xl px-6 py-4 text-sm font-bold text-foreground transition-all outline-none"
                                        placeholder="e.g. STARTER"
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-1">Description/Subtitle</label>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full bg-foreground/[0.03] border-2 border-transparent focus:border-accent/30 focus:bg-background rounded-2xl px-6 py-4 text-sm font-bold text-foreground transition-all outline-none"
                                        placeholder="e.g. FOR INDIVIDUAL"
                                        required
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-1">Monthly Price ($)</label>
                                    <input
                                        type="number"
                                        value={monthlyPrice}
                                        onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                                        className="w-full bg-foreground/[0.03] border-2 border-transparent focus:border-accent/30 focus:bg-background rounded-2xl px-6 py-4 text-sm font-bold text-foreground transition-all outline-none"
                                        required
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-1">Annually Price ($)</label>
                                    <input
                                        type="number"
                                        value={annuallyPrice}
                                        onChange={(e) => setAnnuallyPrice(Number(e.target.value))}
                                        className="w-full bg-foreground/[0.03] border-2 border-transparent focus:border-accent/30 focus:bg-background rounded-2xl px-6 py-4 text-sm font-bold text-foreground transition-all outline-none"
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="inline-flex items-center gap-4 cursor-pointer group bg-foreground/[0.03] px-6 py-4 rounded-2xl border-2 border-transparent hover:border-accent/20 transition-all">
                                        <input
                                            type="checkbox"
                                            checked={isPopular}
                                            onChange={(e) => setIsPopular(e.target.checked)}
                                            className="w-5 h-5 accent-accent rounded"
                                        />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-text-dim group-hover:text-accent transition-colors">Featured Package (Popular)</span>
                                    </label>
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-1">Service Features</label>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            value={featureInput}
                                            onChange={(e) => setFeatureInput(e.target.value)}
                                            className="flex-1 bg-foreground/[0.03] border-2 border-transparent focus:border-accent/30 focus:bg-background rounded-2xl px-6 py-4 text-sm font-medium text-foreground transition-all outline-none"
                                            placeholder="Add feature..."
                                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddFeature}
                                            className="px-8 bg-foreground text-background font-black rounded-2xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest"
                                        >
                                            ADD
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 min-h-[60px] p-6 bg-foreground/[0.02] rounded-[2rem] border-2 border-dashed border-foreground/10">
                                        {features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-accent/10 border border-accent/20 text-accent px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest animate-fade-in group/feat">
                                                <span>{feat}</span>
                                                <button type="button" onClick={() => removeFeature(i)} className="hover:text-red-500 transition-colors">
                                                    <FiX />
                                                </button>
                                            </div>
                                        ))}
                                        {features.length === 0 && (
                                            <p className="text-[10px] text-text-dim/40 italic font-bold uppercase tracking-widest self-center mx-auto">No features added yet</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 flex gap-5 border-t border-slate-50">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-6 rounded-[1.8rem] font-black uppercase tracking-widest text-[11px] text-slate-400 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200/50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] bg-slate-900 text-white font-black py-6 rounded-[1.8rem] uppercase tracking-widest text-[11px] hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] active:scale-95 transition-all flex items-center justify-center gap-3"
                                >
                                    <span>{isEditing ? "Update Package" : "Publish Package"}</span>
                                </button>
                            </div>
                            <div className="h-4"></div>
                        </form>
                    </div>
                </div>
            )}

            <ConfirmModal
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={handleDelete}
                title="Delete Service?"
                message="Are you sure you want to stop offering this service? Existing contracts should be respected."
            />
        </div>
    );
}
