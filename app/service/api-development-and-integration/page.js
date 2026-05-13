"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const bullets = [
    {
        title: "Custom API Development:",
        detail:
            "We create custom APIs that enable your software to interact seamlessly with other applications, enhancing functionality and user experience.",
    },
    {
        title: "Third-Party API Integration:",
        detail:
            "We integrate third-party APIs into your existing systems, expanding your software’s capabilities and interoperability.",
    },
    {
        title: "API Management and Support:",
        detail:
            "Our API management services ensure your APIs are secure, reliable, and performing at their best.",
    },
];

const accordionItems = [
    {
        title: "Custom API Development",
        detail:
            "Building tailored APIs to connect diverse platforms and meet specific business needs.",
    },
    {
        title: "Third-Party API Integration",
        detail:
            "Integrating with popular APIs (e.g., payment gateways, CRM, ERP, and social media platforms) for extended functionality.",
    },
    {
        title: "RESTful & GraphQL APIs",
        detail:
            "Implementing reliable, scalable APIs using REST or GraphQL for efficient data exchange.",
    },
    {
        title: "E-commerce & Payment Integration",
        detail:
            "Secure payment processing and e-commerce API integrations to improve transaction handling and user experience.",
    },
    {
        title: "Cloud & SaaS Integrations",
        detail:
            "Connecting applications with cloud services like AWS, Google Cloud, and other SaaS products for enhanced operational capability.",
    },
    {
        title: "Data Synchronization & Automation",
        detail:
            "Real-time data syncing and process automation to boost efficiency and reduce manual work.",
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
    const [open, setOpen] = useState(true);
    return (
        <div className="border-b border-gray-300">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-100 transition-colors"
            >
                <span className="font-bold text-black text-md">{title}</span>
                {open ? <ChevronUp /> : <DoubleChevronDown />}
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
                        <div className="px-4 pb-4">
                            <p className="text-black text-md leading-relaxed">{detail}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TealDot = () => (
    <span className="inline-block w-2 h-2 rounded-full bg-[#2ec4b6] shrink-0 mt-2" />
);

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
                <ul className="space-y-4">
                    {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <TealDot />
                            <p className="text-black text-md leading-relaxed">
                                <strong>{b.title}</strong> {b.detail}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="space-y-2 pt-2">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900">
                        API Integration
                    </h1>
                    <p className="text-black text-md leading-relaxed">
                        Our API integration services enable seamless connectivity and enhanced functionality across systems:
                    </p>
                </div>
                <div className="rounded-sm divide-y divide-gray-200 overflow-hidden">
                    {accordionItems.map((item, i) => (
                        <AccordionItem
                            key={i}
                            title={item.title}
                            detail={item.detail}
                            isLast={i === accordionItems.length - 1}
                        />
                    ))}
                </div>
                <p className="text-black text-md leading-relaxed">
                    Our API integration solutions provide businesses with streamlined workflows, enhanced data accessibility, and improved user experiences. Let me know if you’d like additional details on any of these!
                </p>
            </div>
        </main>
    );
}