"use client";
import { useState, useEffect } from "react";
import API from "@/utils/api";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiFileText, FiCalendar, FiMapPin, FiBriefcase, FiBook } from "react-icons/fi";

interface ResumeItem {
    _id: string;
    title: string;
    organization: string;
    duration: string;
    description: string;
    type: 'experience' | 'education';
    order: number;
}

export default function ResumePage() {
    const [items, setItems] = useState<ResumeItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Form and Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState("");

    // Form state
    const [title, setTitle] = useState("");
    const [organization, setOrganization] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState<'experience' | 'education'>('experience');
    const [order, setOrder] = useState(0);

    useEffect(() => {
        fetchResumeItems();
    }, []);

    const fetchResumeItems = async () => {
        try {
            setLoading(true);
            const { data } = await API.get("/resume");
            setItems(data);
            setLoading(false);
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to fetch resume items");
            setLoading(false);
        }
    };

    const resetForm = () => {
        setTitle("");
        setOrganization("");
        setDuration("");
        setDescription("");
        setType('experience');
        setOrder(0);
        setIsEditing(false);
        setCurrentId("");
    };

    const handleOpenAddModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const handleEdit = (item: ResumeItem) => {
        setTitle(item.title);
        setOrganization(item.organization);
        setDuration(item.duration);
        setDescription(item.description);
        setType(item.type);
        setOrder(item.order);
        setCurrentId(item._id);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await API.delete(`/resume/${id}`);
                setItems(items.filter(i => i._id !== id));
            } catch (err: any) {
                alert(err.response?.data?.message || "Failed to delete item");
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const itemData = { title, organization, duration, description, type, order };

        try {
            if (isEditing) {
                const { data } = await API.put(`/resume/${currentId}`, itemData);
                setItems(items.map(i => i._id === currentId ? data : i));
            } else {
                const { data } = await API.post("/resume", itemData);
                setItems([...items, data]);
            }
            setIsModalOpen(false);
            resetForm();
        } catch (err: any) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    const experiences = items.filter(i => i.type === 'experience');
    const education = items.filter(i => i.type === 'education');

    if (loading && items.length === 0) {
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
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground mb-2">Resume</h1>
                    <p className="text-text-dim font-medium">Manage your professional experience and education.</p>
                </div>
                <button
                    onClick={handleOpenAddModal}
                    className="btn-primary flex items-center gap-2 self-start md:self-auto"
                >
                    <FiPlus className="text-lg" />
                    <span>ADD RESUME ITEM</span>
                </button>
            </header>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl mb-8 font-medium">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                            <FiBriefcase className="text-xl" />
                        </div>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Work Experience</h2>
                    </div>

                    <div className="space-y-6">
                        {experiences.length > 0 ? experiences.map((item) => (
                            <ResumeCard key={item._id} item={item} onEdit={handleEdit} onDelete={handleDelete} />
                        )) : (
                            <div className="p-8 border border-dashed border-foreground/10 rounded-3xl text-center text-text-dim italic">
                                No work experience added yet.
                            </div>
                        )}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                            <FiBook className="text-xl" />
                        </div>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Education</h2>
                    </div>

                    <div className="space-y-6">
                        {education.length > 0 ? education.map((item) => (
                            <ResumeCard key={item._id} item={item} onEdit={handleEdit} onDelete={handleDelete} />
                        )) : (
                            <div className="p-8 border border-dashed border-foreground/10 rounded-3xl text-center text-text-dim italic">
                                No education history added yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md">
                    <div className="bg-card-bg w-full max-w-2xl rounded-3xl p-8 border border-foreground/10 shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto custom-scrollbar">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/5">
                            <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter">
                                {isEditing ? "Edit Item" : "New Item"}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all">
                                <FiX />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Resume Type (Select Category)</label>
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value as 'experience' | 'education')}
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground font-black uppercase tracking-widest text-xs focus:outline-none focus:border-accent transition-all cursor-pointer hover:bg-foreground/10"
                                    required
                                >
                                    <option value="experience">💼 Professional Experience</option>
                                    <option value="education">🎓 Education & Academic</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. Senior UI Designer" required />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Organization</label>
                                <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. Google Creative Lab" required />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Duration</label>
                                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" placeholder="e.g. 2022 - Present" required />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Order (Sort)</label>
                                <input type="number" value={order} onChange={(e) => setOrder(Number(e.target.value))} className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-text-dim mb-2 ml-1">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full bg-foreground/5 border border-foreground/5 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-all font-medium min-h-[120px] resize-none"
                                    placeholder="Briefly describe your responsibilities or achievements..."
                                    required
                                />
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button type="submit" className="w-full bg-accent text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] text-sm hover:scale-[1.02] shadow-lg shadow-accent/20 active:scale-95 transition-all">
                                    {isEditing ? "UPDATE RESUME ITEM" : "PUBLISH RESUME ITEM"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function ResumeCard({ item, onEdit, onDelete }: { item: ResumeItem, onEdit: (i: ResumeItem) => void, onDelete: (id: string) => void }) {
    return (
        <div className="bg-card-bg p-6 rounded-3xl border border-foreground/5 shadow-sm group hover:shadow-xl hover:border-accent/10 transition-all relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-lg font-black text-foreground uppercase tracking-tight">{item.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest">
                            <FiMapPin className="text-[10px]" />
                            {item.organization}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-dim uppercase tracking-widest">
                            <FiCalendar className="text-[10px]" />
                            {item.duration}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(item)} className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all text-sm">
                        <FiEdit2 />
                    </button>
                    <button onClick={() => onDelete(item._id)} className="w-8 h-8 rounded-lg bg-red-500/5 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all text-sm border border-red-500/10">
                        <FiTrash2 />
                    </button>
                </div>
            </div>
            <p className="text-sm text-text-dim leading-relaxed font-medium">
                {item.description}
            </p>
        </div>
    );
}
