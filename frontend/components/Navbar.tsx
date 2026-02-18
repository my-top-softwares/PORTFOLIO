"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import image from "/logo.png";
import { useTheme } from "./ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[75%] z-[100] px-8 py-4 flex justify-between items-center glass rounded-3xl border border-white/5 shadow-2xl overflow-hidden transition-colors duration-500">

            <a href="/">
               {theme === "dark" ? (
                    <img src="/logo.png" alt="Logo" width={100} height={10} />
                ) : (
                    <img src="/logolight.png" alt="Logo" width={100} height={10} />
                )}
            </a>

            <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${pathname === link.href ? "text-accent" : "text-text-dim"
                            } relative transition-all hover:text-foreground hover:translate-y-[-2px] ${pathname === link.href ? "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-accent" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {mounted && theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} className="text-amber-500" />}
                </button>

                <Link href="/contact" className="btn-primary text-[10px] py-3 px-6 rounded-xl hover:shadow-accent/40 shadow-lg">START TALKING</Link>
            </div>
        </nav>
    );
}
