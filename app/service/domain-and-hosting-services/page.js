"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const services = [
    {
        title: "Domain Registration",
        detail:
            "Assistance with selecting and registering the perfect domain name for your brand.",
    },
    {
        title: "Domain Management",
        detail:
            "Renewals, DNS management, and domain transfers to keep your web presence consistent.",
    },
    {
        title: "Web Hosting",
        detail:
            "Fast and secure hosting options, tailored to your business needs, ensuring optimal website performance.",
    },
    {
        title: "SSL Certification",
        detail:
            "Providing SSL certificates to secure websites and improve search engine rankings.",
    },
    {
        title: "Managed Hosting Services",
        detail:
            "Proactive maintenance, updates, and support for seamless site operation.",
    },
    {
        title: "Email Hosting",
        detail:
            "Professional email services aligned with your domain for brand credibility.",
    },
    {
        title: "Backup and Recovery",
        detail:
            "Automated backups and quick recovery options to safeguard data.",
    }
];

const DoubleChevronDown = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"
        className="w-5 h-5 shrink-0">
        <polyline points="6 9 12 15 18 9" />
        <polyline points="6 4 12 10 18 4" />
    </svg>
);

const ChevronUp = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"
        className="w-5 h-5 shrink-0">
        <polyline points="18 15 12 9 6 15" />
    </svg>
);

const AccordionItem = ({ title, detail, isLast }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={!isLast ? "border-b-4 border-[#cfece7]" : ""}>
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-5 py-2 text-left transition-all"
                style={{ background: "#4cc7cc" }}
            >
                <span className="font-bold text-black text-md">{title}</span>
                <span className="text-black">
                    {open ? <ChevronUp /> : <DoubleChevronDown />}
                </span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            className="px-5 py-4 text-md text-black leading-relaxed"
                            style={{ background: "#cfece7" }}
                        >
                            {detail}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default function Page() {
    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-6">
                <p className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl text-center rounded-md md:px-18 px-6">
                    Domain and Hosting
                </p>
                <p className="text-black text-md leading-relaxed">
                    Our domain and hosting services ensure secure, reliable, and high-performance online experiences:
                </p>
                <div>
                    {services.map((s, i) => (
                        <AccordionItem
                            key={i}
                            title={s.title}
                            detail={s.detail}
                            isLast={i === services.length - 1}
                        />
                    ))}
                </div>
                <p className="text-black text-md leading-relaxed">
                    Our domain and hosting solutions are designed to offer businesses a reliable, secure, and efficient foundation for their online operations. Let me know if you’d like further details on any of these!
                </p>
            </div>
        </main>
    );
}