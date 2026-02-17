"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const galleryItems = [
    {
        id: 1,
        title: "Brand Identity",
        category: "Visual",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "UX Research",
        category: "Product",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 3,
        title: "Motion Graphics",
        category: "Visual",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 4,
        title: "Web Platforms",
        category: "Product",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 5,
        title: "Mobile Apps",
        category: "Product",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 6,
        title: "Art Direction",
        category: "Visual",
        img: "https://images.unsplash.com/photo-1541462608141-ad43d53e39ca?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    }
];

export default function GallerySection() {
    return (
        <section className="py-40 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h4 className="text-accent text-[12px] font-black uppercase tracking-[0.6em] mb-6">Visual Showcase</h4>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8">Selected Works.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] mb-20">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative rounded-[40px] overflow-hidden glass hover:border-accent/40 transition-all duration-700 ${item.size === 'large' ? 'md:row-span-2 lg:row-span-2' :
                                    item.size === 'medium' ? 'lg:col-span-2' : ''
                                }`}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                                <span className="text-accent text-[10px] font-black uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                    {item.category}
                                </span>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-700 [transition-delay:100ms]">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/portfolio" className="btn-primary px-16 py-8 rounded-full group inline-flex items-center gap-6">
                        SEE ALL FULL GALLERY
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
