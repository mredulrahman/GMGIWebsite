import Image from "next/image";

const services = [
    "Policies Development",
    "Recruitment",
    "Contract staffing",
    "Training and Development",
    "Performance Management system",
    "Employee engagement"
];

export default function Page() {
    return (
        <main className="relative min-h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50">
                <Image
                    src="/dashboard/abstract-geometric-white-background-free-vector.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-8 py-14 space-y-10">
                <p className="text-gray-900 text-lg leading-relaxed font-semibold text-justify">
                    An all-encompassing HR service called HR Solutions gives you the freedom to manage your business successfully.
                </p>
                <p className="text-gray-900 text-lg leading-relaxed font-semibold text-justify">
                    GMGI will plan, direct, and coordinate the GIS, remote sensing, survey, graphics design, programming, web development, URP, geology, and geography functions of your organization. We oversee the recruiting, selection, placement, and onboarding of new employees. We also work as a strategic planning consultant with top executives and serve as a liaison between your company’s management and its employees. For a complete list of what we provide, see the section below.
                </p>
                <ul className="space-y-7">
                    {services.map((item, i) => (
                        <li key={i} className="flex items-center gap-4">
                            <span className="w-3 h-3 rounded-full bg-gray-900 shrink-0" />
                            <span className="text-gray-900 text-lg font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main >
    );
}
