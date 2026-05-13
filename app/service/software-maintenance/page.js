const features = [
    {
        title: "Corrective Maintenance",
        detail:
            "Identifying and fixing software bugs and issues to ensure smooth and error-free operation.",
    },
    {
        title: "Adaptive Maintenance",
        detail:
            "Updating software to stay compatible with new operating systems, hardware, or third-party services, adapting to evolving technology environments.",
    },
    {
        title: "Perfective Maintenance",
        detail:
            "Enhancing software features, improving user interfaces, and optimizing performance based on user feedback or changing business needs.",
    },
    {
        title: "Preventive Maintenance",
        detail:
            "Conducting regular audits, backups, and updates to prevent potential issues, minimize downtime, and improve long-term reliability.",
    },
    {
        title: "Security Updates and Patching",
        detail:
            "Ensuring that applications are protected against vulnerabilities through timely patches and security updates.",
    },
    {
        title: "Performance Monitoring and Optimization",
        detail:
            "Tracking software performance and making adjustments as needed to maintain efficiency and speed.",
    },
];

export default function Page() {
    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
                <h1 className="text-3xl md:text-4xl font-black text-black text-center">
                    Software Maintenance Services
                </h1>
                <p className="text-black text-md leading-relaxed">
                    Our software maintenance services ensure that applications remain secure, up-to-date, and perform optimally. Here’s what our maintenance solutions include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
                    {features.map((f, i) => (
                        <p key={i} className="text-black text-md leading-relaxed">
                            <strong>{f.title}</strong>: {f.detail}
                        </p>
                    ))}
                </div>
                <p className="text-black text-base leading-relaxed pt-2">
                    Our comprehensive maintenance services are designed to extend the software lifecycle, protect data integrity, and ensure that applications continue meeting business requirements. Let me know if you’d like to include any specific examples!
                </p>
            </div>
        </main>
    );
}