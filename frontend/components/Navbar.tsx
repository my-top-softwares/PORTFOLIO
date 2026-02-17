"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import image from "/logo.png";

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
            
            <a href="/">
                <img src="/logo.png" alt="Logo" width={100} height={10} />
            </a>

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
