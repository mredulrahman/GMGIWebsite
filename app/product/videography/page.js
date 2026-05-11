import Image from "next/image";

const YouTubeEmbed = ({ videoId, caption }) => (
    <div className="flex flex-col gap-2">
        {caption && (
            <p className="text-lg text-center font-semibold py-8">{caption}</p>
        )}
        <div className="relative w-full overflow-hidden bg-black"
            style={{ paddingBottom: "56.25%" }}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    </div>
);

const DesignImage = ({ src, alt, caption, className = "" }) => (
    <div className="flex flex-col gap-2">
        <div className={`overflow-hidden ${className}`}>
            {src ? (
                <Image
                    src={src}
                    alt={alt || caption || ""}
                    width={740}
                    height={460}
                    className="w-full h-auto object-cover"
                />
            ) : (
                <div className="w-full bg-gray-100 min-h-[240px]" />
            )}
        </div>
        {caption && (
            <p className="text-lg py-8 font-semibold text-center">{caption}</p>
        )}
    </div>
);

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-4 space-y-8">
                <section>
                    <DesignImage
                        src="/images/Beige-Minimalist-Timeline-Diagram-Graph-1.png"
                        alt="Videography services: Training video and setup, Documentary Video, Drone Video, 3D Travel Route Map Animation Video"
                        imgClassName="object-contain"
                    />
                </section>
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">Our Work Example</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <YouTubeEmbed
                            videoId="h39Xfd5wJLw"
                            caption="Documentary on Village Mapping"
                        />
                        <YouTubeEmbed
                            videoId="hNcsmJB7lBA"
                            caption="Drone driven 3D modelling"
                        />
                    </div>
                    <div className="max-w-xl mx-auto">
                        <DesignImage
                            src="/images/Capture.JPG949949.jpg"
                            alt="3D Travel Route Map Animation Video – aerial Google Earth view of GMGI Solutions Ltd office location"
                            caption="3D Travel Route Map Animation Video by google earth studio"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}