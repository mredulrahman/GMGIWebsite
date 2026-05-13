"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cloudServices = [
    {
        title: "Cloud Migration",
        detail:
            "Seamlessly moving existing infrastructure, applications, and data to the cloud with minimal disruption.",
    },
    {
        title: "Cloud Hosting",
        detail:
            "Reliable hosting on platforms like AWS and Google Cloud for optimal performance and uptime.",
    },
    {
        title: "Data Storage & Management",
        detail:
            "Scalable storage solutions for secure, accessible, and organized data.",
    },
    {
        title: "Backup & Disaster Recovery",
        detail:
            "Automated backups and rapid recovery solutions to ensure data safety and business continuity.",
    },
    {
        title: "Cloud Application Development",
        detail:
            "Building and deploying applications directly in the cloud for enhanced scalability and agility.",
    },
    {
        title: "Security & Compliance",
        detail:
            "Implementing robust security protocols and compliance measures to protect data and meet regulatory standards.",
    },
    {
        title: "Hybrid and Multi-Cloud Support",
        detail:
            "Solutions that work across multiple cloud providers for flexibility and redundancy.",
    },
];

const DoubleChevronDown = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <polyline points="6 9 12 15 18 9" />
        <polyline points="6 4 12 10 18 4" />
    </svg>
);

const ChevronUp = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <polyline points="18 15 12 9 6 15" />
    </svg>
);


const AccordionItem = ({ title, detail }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border-b-4 border-[#cfece7]`}>
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-6 py-2 text-left transition-colors"
                style={{ background: "#4cc7cc" }}
            >
                <span className="font-bold text-black text-md">{title}</span>
                {open ? <ChevronUp /> : <DoubleChevronDown />}
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            className="px-6 py-1 text-md text-black leading-relaxed"
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
            <div className="max-w-6xl py-6 mx-auto">
                <p className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl text-center rounded-md md:px-18 px-6">Cloud Solutions</p>
                <p className="text-black text-lg text-justify py-6">
                    Our cloud solutions offer secure, scalable, and efficient services to support business growth and flexibility:
                </p>
                <div
                    className="overflow-hidden rounded-sm border"
                    style={{ borderColor: "#5ecfcf" }}
                >
                    {cloudServices.map((service, i) => (
                        <AccordionItem
                            key={i}
                            title={service.title}
                            detail={service.detail}
                            isLast={i === cloudServices.length - 1}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}