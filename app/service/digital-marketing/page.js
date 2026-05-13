"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const services = [
    {
        title: "SEO (Search Engine Optimization)",
        detail: "Boosting website visibility and rankings to attract organic traffic.",
    },
    {
        title: "Content Marketing",
        detail:
            "Crafting valuable, engaging content (blogs, articles, videos) to build brand authority and connect with audiences.",
    },
    {
        title: "Social Media Marketing",
        detail:
            "Managing social media channels and campaigns to increase brand awareness and engagement.",
    },
    {
        title: "PPC (Pay-Per-Click) Advertising",
        detail:
            "Optimized ad campaigns on platforms like Google Ads and social media for targeted reach and higher ROI.",
    },
    {
        title: "Email Marketing",
        detail: "Personalized email campaigns to nurture leads and retain customers.",
    },
    {
        title: "Analytics & Reporting",
        detail:
            "Monitoring and analyzing campaign performance to make data-driven adjustments for continuous improvement.",
    },
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
                    Digital Marketing Services
                </p>
                <p className="text-gray-800 text-base leading-relaxed">
                    Our digital marketing services drive growth by connecting businesses
                    with their target audience through strategic, data-driven approaches:
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
                <p className="text-gray-800 text-base leading-relaxed">
                    Our comprehensive digital marketing solutions are designed to help
                    businesses grow their online presence, attract qualified leads, and
                    drive conversions.
                </p>
            </div>
        </main>
    );
}