import data from "@/app/data/projects_views.json";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

const EXCLUDED_SLUGS = [
    "a-pilot-project-on-preparation-of-comprehensive-development-plan-for-nine-upazilas",
    "digital-map",
    "an-integrated-web-portal-to-access-data-sources-for-public-health-planning-in-bangladesh"
];

const { pagesData } = data;

export async function generateStaticParams() {
    return pagesData
        .filter((p) => !EXCLUDED_SLUGS.includes(p.slug))
        .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = pagesData.find((p) => p.slug === slug) ?? null;
    if (!page) notFound();

    const firstTextKey = Object.keys(page).find(
        (k) => !["id", "slug", "title"].includes(k) && typeof page[k] === "string"
    );
    const description = (page.title || (firstTextKey ? page[firstTextKey] : "")).slice(0, 160);
    const title = page.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return { title, description };
}

const Dot = () => (
    <span className="inline-block w-2 h-2 rounded-full bg-[#2ec4b6] mr-3 mt-2 shrink-0" />
);

const isKeyValue = (str) => /^[^|•\n]{1,60}:\s*.+/.test(str.trim());

const isTabStyle = (str) => /^\|.+\|/.test(str.trim());

const TextBlock = ({ text }) => (
    <div className="space-y-4">
        {text.split("\n\n").map((para, i) => (
            <p key={i} className="text-black text-lg leading-relaxed">
                {para.trim()}
            </p>
        ))}
    </div>
);

const CalloutBlock = ({ text }) => (
    <p className="text-black text-lg leading-relaxed">
        {text}
    </p>
);

const BlockImage = ({ src, alt }) => (
    <div className="w-full overflow-hidden">
        <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto block max-h-[700px] object-contain mx-auto"
        />
    </div>
);

const ImageBlock = ({ images }) => {
    const list = Array.isArray(images) ? images : [images];
    return (
        <div className={`grid gap-6 ${list.length > 1 ? "grid-rows-1 md:grid-rows-2" : "grid-rows-1"}`}>
            {list.map((img, i) => (
                <BlockImage key={i} src={img.src} alt={img.alt} />
            ))}
        </div>
    );
};

const BulletSteps = ({ heading, steps }) => (
    <div className="">
        {heading && <h3 className="text-xl font-bold text-black mb-4">{heading}</h3>}
        <ul className="space-y-3">
            {steps.map((step, i) => (
                <li key={i} className="flex items-start text-black text-lg">
                    <Dot />
                    <span>{step}</span>
                </li>
            ))}
        </ul>
    </div>
);

const TabSteps = ({ heading, steps }) => (
    <div className="space-y-4">
        {heading && <h3 className="text-xl font-bold text-black pb-2">{heading}</h3>}
        <div className="grid gap-4">
            {steps.map((step, i) => {
                const match = step.match(/^\|(.+?)\|\s*(.*)$/s);
                const label = match?.[1];
                const text = match?.[2] ?? step;
                return (
                    <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-4">
                        {label && (
                            <span className="font-bold text-black min-w-[200px] tracking-tight shrink-0">
                                |{label}|
                            </span>
                        )}
                        <span className="text-gray-600 text-base">{text}</span>
                    </div>
                );
            })}
        </div>
    </div>
);

const KeyValueCard = ({ heading, steps }) => {
    const kvSteps = steps.filter((s) => {
        const colonIdx = s.indexOf(":");
        if (colonIdx === -1) return false;
        const key = s.slice(0, colonIdx).trim().toLowerCase();
        return key;
    });

    return (
        <div className="space-y-6">
            <div className="bg-white">
                {heading && (
                    <div className="px-6 py-4">
                        <h3 className="text-base font-bold text-gray-700 uppercase tracking-wide">{heading}</h3>
                    </div>
                )}
                <dl className="">
                    {kvSteps.map((step, i) => {
                        const colonIdx = step.indexOf(":");
                        const label = step.slice(0, colonIdx).trim();
                        const value = step.slice(colonIdx + 1).trim();
                        return (
                            <div key={i} className="flex flex-col sm:flex-row px-6 py-4 gap-1 sm:gap-6">
                                <dt className="text-sm font-semibold text-black tracking-wide sm:w-52 shrink-0">
                                    {label}
                                </dt>
                                <dd className="text-black text-base">{value}</dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        </div>
    );
};

const StepSection = ({ heading, steps }) => {
    if (!steps?.length) return null;

    const first = steps[0];

    if (isTabStyle(first)) return <TabSteps heading={heading} steps={steps} />;
    if (isKeyValue(first)) return <KeyValueCard heading={heading} steps={steps} />;
    return <BulletSteps heading={heading} steps={steps} />;
};

const DynamicPageRenderer = ({ page }) => {
    const SKIP = new Set(["id", "slug", "title"]);
    let seenStepSection = false;

    return (
        <div className="space-y-8">
            {Object.entries(page).map(([key, value]) => {
                if (SKIP.has(key)) return null;

                if (typeof value === "string") {
                    const isCallout = seenStepSection && /^text\d+$/.test(key);
                    return isCallout
                        ? <CalloutBlock key={key} text={value} />
                        : <TextBlock key={key} text={value} />;
                }

                if (key === "images" || (typeof value === "object" && !Array.isArray(value) && value?.src) || (Array.isArray(value) && value[0]?.src)) {
                    return <ImageBlock key={key} images={value} />;
                }
                if (key.startsWith("stepSection") && value?.steps) {
                    seenStepSection = true;
                    return <StepSection key={key} heading={value.heading} steps={value.steps} />;
                }

                return null;
            })}
        </div>
    );
};

export default async function Page({ params }) {
    const { slug } = await params;

    if (EXCLUDED_SLUGS.includes(slug)) {
        redirect(`/project/${slug}`);
    }

    const page = pagesData.find((p) => p.slug === slug);
    if (!page) notFound();

    return (
        <div className="min-h-screen">
            <main className="max-w-6xl mx-auto py-5">
                {page.title && (
                    <header className="mb-4">
                        <h1 className="text-xl md:text-2xl font-bold text-black text-center leading-tight">
                            {page.title}
                        </h1>
                    </header>
                )}
                <DynamicPageRenderer page={page} />
            </main>
        </div>
    );
}