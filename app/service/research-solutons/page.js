import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import { faIndent } from '@fortawesome/free-solid-svg-icons';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


const icons = [
    {
        icon: (
            <FontAwesomeIcon icon={faMap} />
        ),
        text: "Analysis of geographic information systems (GIS), which uses software to analyze and visualize spatial data",
    },
    {
        icon: (
            <FontAwesomeIcon icon={faSatelliteDish} />
        ),
        text: "Using satellite or aerial imagery, remote sensing collects data about the Earth's surface.",
    },
    {
        icon: (
            <FontAwesomeIcon icon={faIndent} />
        ),
        text: "Surveying and field data collection, which involves taking measurements directly on the ground to collect information",
    },
    {
        icon: (
            <FontAwesomeIcon icon={faSolarPanel} />
        ),
        text: "Studying a population's characteristics through demographic analysis",
    },
    {
        icon: (
            <FontAwesomeIcon icon={faMapMarkedAlt} />
        ),
        text: "Land use land cover (LULC) mapping for a area of interest",
    },
];

const mapImages = [
    { src: "/images/Slope_Map-768x543.jpg", alt: "Slope value map of the study area" },
    { src: "/images/TWI_Map-768x543.jpg", alt: "Vegetation Wetness Index (TWI) map" },
    { src: "/images/Precipitation_Map-768x543.jpg", alt: "Annual average rainfall 1996–2022 map" },
    { src: "/images/Return_period_Map-768x543.jpg", alt: "Land use and rice cultivation period map" },
    { src: "/images/LULC_Map-768x543.jpg", alt: "Land use and land area map" },
    { src: "/images/Flood-Risk-Zone5-768x543.jpg", alt: "Flood risk zones map" },
    { src: "/images/Elevation-Map-768x543.jpg", alt: "Elevation DEM 2014 map" },
    { src: "/images/Drainage_Density_Map-768x543.jpg", alt: "Drainage density map" },
    { src: "/images/Distance_from-Road_Map-768x543.jpg", alt: "Distance from main road map" },
    { src: "/images/Distance_from-River_Map-768x543.jpg", alt: "River embankment distance map" },
];

export default function Page() {
    return (
        <main className="bg-white min-h-screen font-serif">
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
                <p className="text-gray-800 text-base leading-relaxed">
                    Services like data gathering, analysis, and presentation—often in the
                    form of maps—are referred to as research and mapping services. GMGI
                    Solutions Ltd. provides services that can be used for a wide range of
                    purposes, such as urban planning, natural resource management, market
                    research, and more.
                </p>
                <div>
                    <p className="text-gray-800 text-base mb-5">
                        Research services include, for instance:
                    </p>
                    <ul className="space-y-4">
                        {icons.map((s, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700 text-base leading-relaxed">
                                <span className="mt-0.5 text-[#37368e]">{s.icon}</span>
                                {s.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {mapImages.map((img, i) => (
                        <div
                            key={i}
                            className="w-full overflow-hidden"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={460}
                                className="w-full h-auto object-cover"
                                priority={i < 2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}