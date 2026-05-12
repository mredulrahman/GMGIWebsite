"use client";

import { useState } from "react";

export const metadata = {
    title: "Cloud Solutions – GMGI Solutions Ltd.",
    description:
        "Secure, scalable, and efficient cloud solutions to support business growth and flexibility.",
};

const cloudServices = [
    {
        title: "Cloud Migration",
        detail:
            "We help businesses seamlessly migrate their existing infrastructure, applications, and data to the cloud with minimal downtime, ensuring a smooth and secure transition.",
    },
    {
        title: "Cloud Hosting",
        detail:
            "Reliable and high-performance cloud hosting solutions tailored to your business needs, offering 99.9% uptime, auto-scaling, and global content delivery.",
    },
    {
        title: "Data Storage & Management",
        detail:
            "Secure, scalable cloud storage solutions with intelligent data management, automated backups, and easy retrieval — ensuring your data is always accessible and protected.",
    },
    {
        title: "Backup & Disaster Recovery",
        detail:
            "Protect your business from data loss with automated backup scheduling, geo-redundant storage, and rapid disaster recovery plans to keep operations running without interruption.",
    },
    {
        title: "Cloud Application Development",
        detail:
            "We design and build cloud-native applications optimised for scalability, performance, and cost-efficiency, leveraging microservices, serverless architectures, and modern DevOps practices.",
    },
    {
        title: "Security & Compliance",
        detail:
            "End-to-end cloud security including identity management, encryption, threat detection, and compliance with industry standards (ISO 27001, GDPR, HIPAA) to keep your data safe.",
    },
    {
        title: "Hybrid and Multi-Cloud Support",
        detail:
            "Flexible strategies that combine private and public cloud environments, giving you the freedom to choose the right platform for each workload while maintaining unified management.",
    },
];

const DoubleChevron = ({ open }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 shrink-0 transition-transform duration-300"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
        <polyline points="6 9 12 15 18 9" />
        <polyline points="6 4 12 10 18 4" />
    </svg>
);

const AccordionItem = ({ title, detail, isLast }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${!isLast ? "border-b border-[#5ecfcf]/50" : ""}`}>
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:brightness-105"
                style={{ background: "#3bbfc4" }}
            >
                <span className="font-bold text-gray-900 text-base">{title}</span>
                <DoubleChevron open={open} />
            </button>

            {open && (
                <div
                    className="px-6 py-4 text-sm text-gray-900 leading-relaxed"
                    style={{ background: "#4dccd0" }}
                >
                    {detail}
                </div>
            )}
        </div>
    );
};

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
                <div
                    className="w-full rounded-sm py-3 px-6 text-center"
                    style={{
                        background: "linear-gradient(to right, #0a1a4a, #149fbd)",
                    }}
                >
                    <h1 className="text-white text-xl font-bold tracking-wide">
                        Cloud Solutions
                    </h1>
                </div>
                <p className="text-gray-800 text-base leading-relaxed">
                    Our cloud solutions offer secure, scalable, and efficient services to
                    support business growth and flexibility:
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