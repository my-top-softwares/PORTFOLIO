"use client";
import { useState, useEffect } from "react";
import API from "@/utils/api";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiSettings, FiBriefcase, FiStar } from "react-icons/fi";

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

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            try {
                await API.delete(`/services/${id}`);
                setServices(services.filter(s => s._id !== id));
            } catch (err: any) {
                alert(err.response?.data?.message || "Failed to delete service");
            }
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
                                    onClick={() => handleDelete(service._id)}
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
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md">
                    <div className="bg-card-bg w-full max-w-2xl rounded-3xl p-8 border border-foreground/10 shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto custom-scrollbar">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/5">
                            <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter">
                                {isEditing ? "Edit Package" : "New Package"}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all">
                                <FiX />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim mb-2 ml-1">Package Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. STARTER" required />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim mb-2 ml-1">Description/Subtitle</label>
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. FOR INDIVIDUAL" required />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim mb-2 ml-1">Monthly Price ($)</label>
                                <input type="number" value={monthlyPrice} onChange={(e) => setMonthlyPrice(Number(e.target.value))} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-bold" required />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim mb-2 ml-1">Annually Price ($)</label>
                                <input type="number" value={annuallyPrice} onChange={(e) => setAnnuallyPrice(Number(e.target.value))} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-bold" required />
                            </div>

                            <div className="md:col-span-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked={isPopular} onChange={(e) => setIsPopular(e.target.checked)} className="w-5 h-5 accent-accent rounded" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-text-dim group-hover:text-accent transition-colors">Mark as Popular/Featured</span>
                                </label>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim mb-4 ml-1">Features</label>
                                <div className="flex gap-2 mb-4">
                                    <input type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} className="flex-1 bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="Add feature..." onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())} />
                                    <button type="button" onClick={handleAddFeature} className="px-6 bg-accent text-white font-black rounded-xl hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest">ADD</button>
                                </div>
                                <div className="flex flex-wrap gap-2 min-h-[40px] p-4 bg-foreground/5 rounded-2xl border border-dashed border-foreground/10">
                                    {features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-lg text-xs font-bold uppercase">
                                            <span>{feat}</span>
                                            <button type="button" onClick={() => removeFeature(i)} className="hover:text-red-500"><FiX /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button type="submit" className="w-full bg-accent text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] text-sm hover:scale-[1.02] shadow-lg shadow-accent/20 active:scale-95 transition-all">
                                    {isEditing ? "UPDATE PACKAGE" : "PUBLISH PACKAGE"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
