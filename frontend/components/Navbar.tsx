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
        <nav className="fixed top-0 w-full z-[100] px-6 py-8 md:px-12 lg:px-24 flex justify-between items-center bg-[#0b0d0d]/80 backdrop-blur-2xl border-b border-white/5">
            <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer group">
                <div className="bg-accent text-black font-black w-11 h-11 flex items-center justify-center rounded-xl text-2xl shadow-[0_0_25px_rgba(39,243,148,0.5)] transition-all group-hover:rotate-12">A.</div>
                <span className="text-2xl font-black tracking-tighter uppercase text-white">Alex</span>
            </Link>

            <div className="hidden md:flex items-center gap-10 text-[12px] font-black uppercase tracking-[0.2em]">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${pathname === link.href ? "text-accent" : "text-gray-400"
                            } relative transition-all hover:text-white hover:translate-y-[-2px] ${pathname === link.href ? "after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-accent" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <Link href="/contact" className="btn-outline text-[11px] py-3.5 px-8 border-white/10 hover:border-accent font-black tracking-[0.2em] uppercase rounded-lg shadow-lg hover:shadow-accent/20 transition-all text-white">LET'S TALK</Link>
        </nav>
    );
}
