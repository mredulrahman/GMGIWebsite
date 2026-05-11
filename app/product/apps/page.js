// app/solutions/mobile-app/page.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { RiArrowUpSFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const appServices = [
    {
        title: "Custom Mobile Apps",
        detail:
            "Tailored apps for unique business needs, built for both iOS and Android platforms.",
    },
    {
        title: "Cross-Platform Development",
        detail:
            "Efficient development using React Native and Flutter to create apps that work smoothly across devices.",
    },
    {
        title: "Native App Development",
        detail:
            "Swift for iOS and Kotlin for Android, ensuring optimized performance and a native feel.",
    },
    {
        title: "UI/UX Design",
        detail:
            "Intuitive, engaging designs focused on creating outstanding user experiences.",
    },
    {
        title: "Backend & API Integration",
        detail:
            "Secure and scalable backend solutions for smooth app functionality and third-party service integrations.",
    },
    {
        title: "App Testing & QA",
        detail:
            "Comprehensive testing for performance, security, and usability to ensure a flawless user experience.",
    },
    {
        title: "Maintenance & Support",
        detail:
            "Ongoing support and updates to keep your app current and fully functional.",
    },
];

/* ─────────────────────────────────────────
   ACCORDION ITEM
───────────────────────────────────────── */
const AccordionItem = ({ title, detail }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between py-4 px-1 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="text-md font-extrabold text-gray-800">{title}</span>
                <motion.span
                    className="text-black text-lg leading-none select-none"
                // animate={{ rotate: open ? 180 : 0 }}
                // transition={{ duration: 0.3 }}
                >
                    {open ? <RiArrowUpSFill size={18} /> : <HiChevronDoubleDown size={18} />}
                </motion.span>
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
                        <div className="px-1 pb-4">
                            <p className="text-sm text-black leading-relaxed">{detail}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ─────────────────────────────────────────
   IMAGE PLACEHOLDER
───────────────────────────────────────── */
// const ProjectImage = ({ src, alt, className = "" }) => {
//     if (src) {
//         return (
//             <div className={`overflow-hidden ${className}`}>
//                 <Image
//                     src={src}
//                     alt={alt}
//                     width={620}
//                     height={420}
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         );
//     }
// };

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
                {/* ══════════════════════════════════
            HERO IMAGE — "Our APP Services"
            Place your image at:
            /public/images/app-services-hero.jpg
        ══════════════════════════════════ */}
                <div className="w-full overflow-hidden rounded-sm shadow-sm border border-gray-100">
                    <Image
                        src="/images/Beige-Minimalist-Timeline-Diagram-Graph.png"
                        alt="Our APP Services – App Testing, Android, iOS, React Native, Mobile App Design, Quality Assurance"
                        width={860}
                        height={820}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
                {/* ══════════════════════════════════
            ACCORDION — Mobile App Dev Services
        ══════════════════════════════════ */}
                <section className="space-y-0">
                    <h2 className="text-4xl font-bold text-black mb-6">
                        Mobile App Development Services
                    </h2>
                    <div className="border-t border-gray-200">
                        {appServices.map((s, i) => (
                            <AccordionItem key={i} title={s.title} detail={s.detail} />
                        ))}
                    </div>
                </section>
                {/* ══════════════════════════════════
            PROJECT IMAGES
            Row: two images side-by-side
            Left:  SMS platform dashboard (wide)
            Right: SMS app sidebar / menu (tall)

            Place your images at:
            /public/images/sms-platform-dashboard.jpg
            /public/images/sms-app-sidebar.jpg
        ══════════════════════════════════ */}
                <section className="space-y-3">
                    <p className="text-md text-black">SMS based data collection platform</p>
                    <div className="flex justify-center items-center gap-10">
                        {/* Left – wide dashboard screenshot */}
                        <Image
                            src="/images/image_2023_04_04T04_35_25_984Z-1024x495.png"
                            alt="SMS based data collection platform – dashboard view"
                            width={1024}
                            height={495}
                        />
                        {/* Right – app sidebar / menu screenshot */}
                        <Image
                            src="/images/image_2023_04_04T04_34_41_727Z.png"
                            alt="SMS based data collection platform – app menu"
                            width={220}
                            height={120}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}