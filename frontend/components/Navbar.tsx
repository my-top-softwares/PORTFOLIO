"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[75%] z-[100] px-8 py-4 flex justify-between items-center glass rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
            <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer group">
                <div className="bg-accent text-black font-black w-10 h-10 flex items-center justify-center rounded-xl text-xl shadow-[0_0_20px_var(--accent-glow)] transition-all group-hover:rotate-12">A.</div>
                <span className="text-xl font-black tracking-tighter uppercase text-white hidden sm:block">Wallace</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${pathname === link.href ? "text-accent" : "text-gray-400"
                            } relative transition-all hover:text-white hover:translate-y-[-2px] ${pathname === link.href ? "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-accent" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <Link href="/contact" className="btn-primary text-[10px] py-3 px-6 rounded-xl hover:shadow-accent/40 shadow-lg">START TALKING</Link>
        </nav>
    );
}
