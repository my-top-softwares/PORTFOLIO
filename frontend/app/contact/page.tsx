import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-32">
                    <h4 className="text-[12px] uppercase tracking-[1em] font-black mb-10 text-accent">GET IN TOUCH</h4>
                    <h2 className="text-7xl md:text-[120px] font-black tracking-tighter uppercase outline-text opacity-40">Contact</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-5xl font-black italic mb-10 tracking-tighter">
                            Let's craft something <br /> <span className="text-accent">legendary together.</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed mb-16 max-w-md">
                            Whether you have a question or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-12">
                            <div className="flex items-center gap-8 group">
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                    <FaEnvelope size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Email Me</p>
                                    <p className="text-2xl font-black text-white">alex.wallace@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 group">
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                    <FaMapMarkerAlt size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Location</p>
                                    <p className="text-2xl font-black text-white">Manila, Philippines</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 group">
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                    <FaPhoneAlt size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Call Me</p>
                                    <p className="text-2xl font-black text-white">+63 912 345 6789</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#111414] p-12 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150 duration-700"></div>

                        <form className="space-y-10 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-all placeholder:text-gray-700 font-bold" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Your Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-all placeholder:text-gray-700 font-bold" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Subject</label>
                                <input type="text" placeholder="Project Inquiry" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-all placeholder:text-gray-700 font-bold" />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Message</label>
                                <textarea rows={5} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-all placeholder:text-gray-700 font-bold resize-none"></textarea>
                            </div>

                            <button className="btn-primary w-full py-8 rounded-2xl font-black tracking-[0.4em] uppercase shadow-lg hover:shadow-accent/40 group">
                                Send Message
                                <FaPaperPlane className="ml-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
