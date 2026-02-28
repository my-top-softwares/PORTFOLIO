"use client";
export default function MessagesPage() {
    return (
        <div className="animate-fade-up">
            <h1 className="text-3xl font-black text-foreground uppercase tracking-tighter mb-8">Messages</h1>
            <div className="bg-card-bg p-8 rounded-3xl border border-foreground/5 shadow-sm">
                <p className="text-text-dim">Your messages from the contact form will appear here.</p>
            </div>
        </div>
    );
}
