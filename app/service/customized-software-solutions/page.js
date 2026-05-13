import Image from "next/image";

const features = [
    {
        title: "Custom API Development",
        detail:
            "Enables seamless integration between different platforms and services, improving interoperability.",
    },
    {
        title: "ERP (Enterprise Resource Planning) Systems",
        detail:
            "Customized ERP solutions to streamline operations, manage resources efficiently, and automate processes.",
    },
    {
        title: "CRM (Customer Relationship Management) Systems",
        detail:
            "Personalized CRM systems for tracking and optimizing customer interactions, sales, and service management.",
    },
    {
        title: "Data Management and Analytics Software",
        detail:
            "Tools for organizing, managing, and analyzing critical business data to facilitate data-driven decision-making.",
    },
    {
        title: "Workflow Automation Tools",
        detail:
            "Custom automation solutions designed to optimize business workflows, reduce manual effort, and increase productivity.",
    },
    {
        title: "Data Collection and Monitoring Solutions",
        detail: (
            <>
                Custom data tracking systems, such as the{" "}
                <strong>Malaria API Tracker</strong>, tailored for specific data collection and monitoring needs.
            </>
        ),
    },
];

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="mx-auto px-6 py-6 space-y-12">
                <h1 className="text-2xl md:text-3xl text-black font-extrabold text-center">
                    Customized Software Solutions
                </h1>
                <div className="max-w-5xl mx-auto">
                    <Image
                        src="/images/GMGI-FB.png"
                        alt="Customized Software Solutions"
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 max-w-6xl mx-auto">
                    {features.map((f, i) => (
                        <div key={i} className="space-y-1.5">
                            <p className="text-md text-black leading-relaxed">
                                <strong>{f.title}</strong>
                                {typeof f.detail === "string" ? `: ${f.detail}` : <span>: {f.detail}</span>}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}