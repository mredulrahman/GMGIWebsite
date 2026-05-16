"use client";

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const frameworks = [
    { icon: (<FontAwesomeIcon icon={faMap} />), name: "ArcGIS Online" },
    { icon: (<FontAwesomeIcon icon={faLayerGroup} />), name: "R Shiny Dashboard" },
    { icon: (<FontAwesomeIcon icon={faChartPie} />), name: "LeafletJS" },
    { icon: (<FontAwesomeIcon icon={faSolarPanel} />), name: "Open Layers" },
    { icon: (<FontAwesomeIcon icon={faImage} />), name: "Map Box" },
    { icon: (<FontAwesomeIcon icon={faGoogle} />), name: "Google Mapping API" },
    { icon: (<FontAwesomeIcon icon={faBars} />), name: "Turf JS" },
];

const webServices = [
    "Operational Dashboard",
    "Monitoring Dashboard",
    "Adding custom data layers",
    "Integrating with other data sources",
    "Creating customised map styles",
    "Data hosting, data analytics",
    "Supporting for creating location-based mobile applications.",
];

const desktopServices = [
    "Digitizing",
    "Georeferencing",
    "Drone image georeferencing",
    "Spatial Analysis",
    "2D/3D GIS Modeling",
    "Geodatabase Design & Creation",
    "Data Conversion",
    "LiDAR Conversion",
    "Data Migration",
    "Program Development",
    "Web Based GIS Mapping",
    "Programming",
];

const rsServices = [
    "Land Use Land Cover (LULC) Mapping",
    "Weather Forecasting",
    "Environmental Study",
    "Study of Natural hazards",
    "Resource exploration",
];

const flipCards = [
    {
        id: 1,
        lines: [
            { label: "Project Name", value: "GTCL Pipeline Survey and GIS Preparation" },
            { label: "Purpose of Dashboard", value: "Real time GIS data monitoring" },
            { label: "Dashboard Tools", value: "Open-source platform (R shiny)" },
        ],
    },
    {
        id: 2,
        lines: [
            { label: "Project Name", value: "UKAID Livelihoods and DRR Project of Barishal City Corporation, BRC" },
            { label: "Purpose of Making Dashboard", value: "To support the project team to capture and monitoring data from the field. (Monitoring Dashboard)" },
            { label: "Dashboard Tools", value: "Open-source platform (R shiny)" },
        ],
    },
    {
        id: 3,
        lines: [
            { label: "Project Name", value: "Geospatial Dashboard District Development and Growth Priorities (DDGP) Cox's Bazar, Bangladesh, UNDP" },
            { label: "Purpose of Dashboard", value: "To show the development status of Cox's Bazar district" },
            { label: "Dashboard Tools", value: null, list: ["ArcMap", "MS Excel", "Rstudio"] },
            { label: "Data Storage Platform", value: "Shinyapp.io" },
        ],
    },
    {
        id: 4,
        lines: [
            { label: "Project Name", value: "Rural Renewable Energy Project (RREP), Sierra Leone: WP6 Matching Grant" },
            { label: "Purpose of Making Dashboard", value: "To improve and promote productive use in mini-grid" },
            { label: "Map view includes", value: null, list: ["Grantee", "Grant Amount", "Sector", "Beneficiaries", "New jobs"] },
        ],
    },
];

const desktopImages = [
    { src: "/images/453453838.png", caption: "Dhaka Earthquake and Emergency Preparedness Enhancing Resilience (DEEPER)" },
    { src: "/images/256388.png", caption: "Georeferencing of Mouza Maps of 15 Polders at Coastal Area of Bangladesh using Satellite Imageries" },
    { src: "/images/16944699496.png", caption: "GIS Mapping of 11 Sectors and Genocide Site of the Bangladesh Liberation War" },
    { src: "/images/yrt8t.png", caption: "GTCL Pipeline Survey and GIS Preparation" },
];

const rsImages = [
    { src: "/images/tuiigigi.jpg", caption: "Geolocation mapping of captured high-resolution images for different flight plans" },
    { src: "/images/fyfufufu.png", caption: "Identified solid waste disposal sites in Mirpur, Komlapur, and Narindaa" },
    { src: "/images/huu.png", caption: "Digital Survey and 3D modeling for Jail Khal in Barisal City Corporation" },
    { src: "/images/khhoh.png", caption: "" },
];

const FlipCard = ({ card }) => (
    <>
        <style>{`
      .flip-root { perspective: 1000px; height: 300px; }
      .flip-inner {
        position: relative; width: 100%; height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.25);
      }
      .flip-root:hover .flip-inner { transform: rotateY(180deg) scale(1.04); }
      .flip-face {
        position: absolute; inset: 0;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      .flip-back { transform: rotateY(180deg); overflow-y: auto; padding: 18px; color: #fff; }
    `}</style>

        <div className="flip-root w-full">
            <div className="flip-inner">

                <div className="flip-face" style={{ background: "#8A35FF" }} />

                <div className="flip-face flip-back" style={{ background: "#502FC6" }}>
                    {card.lines.map((line, i) => (
                        <div key={i} className="mb-2 text-sm leading-snug">
                            <span className="font-bold">{line.label}: </span>
                            {line.value && <span>{line.value}</span>}
                            {line.list && (
                                <ul className="list-disc list-inside mt-1 space-y-0.5">
                                    {line.list.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </>
);

const MapImage = ({ src, alt, caption }) => (
    <div>
        <div className="w-full overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
            <Image src={src} alt={alt || caption || "map"} width={620} height={400} className="w-full h-auto object-cover" />
        </div>
        {caption && <p className="text-xs mt-1 leading-snug">{caption}</p>}
    </div>
);

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-2 py-10 space-y-16">

                <section className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Web Mapping Solutions</h1>

                    <div className="grid grid-cols-2">
                        <p className="text-center pb-3 text-lg md:text-xl">Our working Framework</p>
                        <p className="text-center pb-3 text-lg md:text-xl">Services we provide</p>

                        <div className="pr-6 pt-4 space-y-4 text-lg md:text-xl">
                            {frameworks.map((f, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-5 text-center text-base text-[#37368e]">{f.icon}</span>
                                    <span>{f.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pl-6 pt-4 space-y-4 text-xl">
                            {webServices.map((s, i) => (
                                <p key={i} className="leading-snug">–{s}</p>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {flipCards.map((card) => (
                            <FlipCard key={card.id} card={card} />
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">Desktop GIS Mapping Solution</h2>

                    <p className="text-lg md:text-xl leading-relaxed">
                        For all of your Geographic Information Systems (GIS) needs, our team of experts is here to help.
                        From straightforward mapping projects to complex geodatabase design and application development,
                        we have the internal expertise to support you in sharing information in ways you didn't know were possible.
                    </p>

                    <p className="text-lg md:text-xl text-center">Services we provide</p>

                    <div className="space-y-1.5">
                        {desktopServices.map((s, i) => (
                            <p key={i} className="text-lg md:text-xl text-gray-700">–{s}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {desktopImages.map((img, i) => (
                            <MapImage key={i} src={img.src} alt={img.caption} caption={img.caption} />
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">RS Mapping Solutions</h2>

                    <p className="text-lg md:text-xl text-center">Services we provide</p>

                    <div className="space-y-1.5">
                        {rsServices.map((s, i) => (
                            <p key={i} className="text-xl text-gray-700">– {s}</p>
                        ))}
                    </div>

                    <MapImage src={rsImages[0].src} alt={rsImages[0].caption} caption={rsImages[0].caption} />
                    <MapImage src={rsImages[1].src} alt={rsImages[1].caption} caption={rsImages[1].caption} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <MapImage src={rsImages[2].src} alt="Digital Survey drone" />
                        <MapImage src={rsImages[3].src} alt="Digital Survey aerial" />
                    </div>
                    <p className="text-sm text-black -mt-2">
                        Digital Survey and 3D modeling for Jail Khal in Barisal City Corporation
                    </p>
                </section>
            </div>
        </main>
    );
}