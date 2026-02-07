import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Alex Wallace | UI & UX Designer",
    description: "Personal portfolio of Alex Wallace, a passionate UI/UX Designer based in the Philippines.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased bg-[#0b0d0d] text-white font-outfit overflow-x-hidden selection:bg-accent selection:text-black">
                {/* Global Background Decorations */}
                <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
                    <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[160px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px]"></div>
                </div>

                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
