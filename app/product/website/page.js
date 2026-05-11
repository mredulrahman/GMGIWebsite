import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5, faCss3Alt, faJs, faReact, faVuejs, faBootstrap,
    faNodeJs, faPhp, faLaravel, faPython,
    faWordpress, faWix, faShopify, faSquarespace,
    faSwift, faGitAlt, faGithub,
    faFigma, faSketch,
    faDocker, faAws, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCloud, faCode, faMobileAlt, faLayerGroup } from '@fortawesome/free-solid-svg-icons';


const techColumns = [
    {
        heading: "Frontend Development",
        items: [
            { icon: <FontAwesomeIcon icon={faHtml5} className="text-[#E34F26]" />, label: "HTML" },
            { icon: <FontAwesomeIcon icon={faCss3Alt} className="text-[#1572B6]" />, label: "CSS" },
            { icon: <FontAwesomeIcon icon={faJs} className="text-[#F7DF1E]" />, label: "Java Script" },
            { icon: <FontAwesomeIcon icon={faReact} className="text-[#61DAFB]" />, label: "React.js" },
            { icon: <FontAwesomeIcon icon={faVuejs} className="text-[#4FC08D]" />, label: "Vue.js" },
            { icon: <FontAwesomeIcon icon={faBootstrap} className="text-[#7952B3]" />, label: "Bootstrap" },
        ],
    },
    {
        heading: "Backend Development",
        items: [
            { icon: <FontAwesomeIcon icon={faNodeJs} className="text-[#339933]" />, label: "Node.js" },
            { icon: <FontAwesomeIcon icon={faPhp} className="text-[#777BB4]" />, label: "PHP" },
            { icon: <FontAwesomeIcon icon={faLaravel} className="text-[#FF2D20]" />, label: "Laravel" },
            { icon: <FontAwesomeIcon icon={faPython} className="text-[#3776AB]" />, label: "Python" },
        ],
    },
    {
        heading: "Content Management Systems (CMS)",
        items: [
            { icon: <FontAwesomeIcon icon={faWordpress} className="text-[#21759B]" />, label: "WordPress" },
            { icon: <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600" />, label: "Custom CMS" },
            { icon: <FontAwesomeIcon icon={faWix} className="text-black" />, label: "Wix" },
            { icon: <FontAwesomeIcon icon={faShopify} className="text-[#96BF48]" />, label: "Shopify" },
            { icon: <FontAwesomeIcon icon={faSquarespace} className="text-black" />, label: "Squarespace" },
        ],
    },
    {
        heading: "Mobile Application Development",
        items: [
            { icon: <FontAwesomeIcon icon={faReact} className="text-[#61DAFB]" />, label: "React Native" },
            { icon: <FontAwesomeIcon icon={faMobileAlt} className="text-blue-500" />, label: "Flutter" },
            { icon: <FontAwesomeIcon icon={faSwift} className="text-[#F05138]" />, label: "Swift" },
            { icon: <FontAwesomeIcon icon={faMobileAlt} className="text-orange-500" />, label: "Kotlin" },
        ],
    },
    {
        heading: "Database Technologies",
        items: [
            { icon: <FontAwesomeIcon icon={faDatabase} className="text-blue-600" />, label: "MySQL" },
            { icon: <FontAwesomeIcon icon={faDatabase} className="text-blue-400" />, label: "PostgreSQL" },
            { icon: <FontAwesomeIcon icon={faDatabase} className="text-green-600" />, label: "MongoDB" },
        ],
    },
    {
        heading: "Version Control",
        items: [
            { icon: <FontAwesomeIcon icon={faGitAlt} className="text-[#F05032]" />, label: "Git" },
            { icon: <FontAwesomeIcon icon={faGithub} className="text-[#181717]" />, label: "GitHub" },
        ],
    },
    {
        heading: "Design Tools",
        items: [
            { icon: <FontAwesomeIcon icon={faFigma} className="text-[#F24E1E]" />, label: "Figma" },
            { icon: <FontAwesomeIcon icon={faCloud} className="text-[#FF61F6]" />, label: "Adobe XD" },
            { icon: <FontAwesomeIcon icon={faSketch} className="text-[#F7B500]" />, label: "Sketch" },
        ],
    },
    {
        heading: "DevOps and Deployment",
        items: [
            { icon: <FontAwesomeIcon icon={faDocker} className="text-[#2496ED]" />, label: "Docker" },
            { icon: <FontAwesomeIcon icon={faAws} className="text-[#FF9900]" />, label: "AWS" },
            { icon: <FontAwesomeIcon icon={faCloud} className="text-blue-400" />, label: "Netlify" },
            { icon: <FontAwesomeIcon icon={faGoogle} className="text-[#4285F4]" />, label: "Google Cloud" },
            { icon: <FontAwesomeIcon icon={faServer} className="text-gray-600" />, label: "CI/CD" },
        ],
    },
];

/* ─────────────────────────────────────────
   PROJECT IMAGES
   6 image slots arranged as per screenshot:
   Row 1: left (GIS dashboard)  | right (Tradeix website)
   Row 2: left (empty/gray)     | right (Malaria dashboard)
   Row 3: left (Henna Gallery)  | right (empty/gray)
   Row 4: left (GMGI website)   | right (2 text captions)
   Row 5: left (Poshmode site)  | right (empty)
───────────────────────────────────────── */
const projectRows = [
    {
        left: { src: "/images/Untitled-design-1-1024x1024.png", alt: "GIS Dashboard project" },
        right: { src: "/images/Untitled-design-1024x1024.png", alt: "Tradeix International Limited website" },
    },
    // {
    //     left: { src: null, alt: "" },
    //     right: { src: "/images/proj-malaria.jpg", alt: "Geospatial Dashboard: Malaria API and Village Tracker" },
    // },
    {
        left: { src: "/images/Untitled-design-2-1024x1024.png", alt: "Henna Gallery website" },
        right: { src: "/images/Untitled-design-3-1024x1024.png", alt: "" },
    },
    {
        left: { src: "/images/fghf-e1677585837727-1024x575.png", alt: "GMGI Solutions Ltd website" },
        right: {
            captions: [
                "The GMGI website was developed in-house",
                "The WabiSabi News portal website was developed through outsourcing",
            ],
        },
    },
    {
        left: { src: "/images/4644-1024x425.jpg", alt: "Poshmode website" },
    },
];

const TechItem = ({ icon, label }) => (
    <div className="flex items-center gap-3 py-1">
        {icon ? (
            typeof icon === "string" ? (
                <Image
                    src={icon}
                    alt={label}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain shrink-0"
                />
            ) : (
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {icon}
                </div>
            )
        ) : (
            <span className="w-5 h-5 shrink-0" />
        )}
        <span className="text-gray-900 font-extrabold text-3xl">{label}</span>
    </div>
);

const TechBlock = ({ heading, items }) => (
    <div className="space-y-1">
        <p className="text-2xl font-extrabold text-black mb-6">{heading}</p>
        {items.map((item, i) => (
            <TechItem key={i} icon={item.icon} label={item.label} />
        ))}
    </div>
);



const ProjectCell = ({ cell }) => {
    if (!cell) return <div className="h-full min-h-[180px]" />;

    if (cell.captions) {
        return (
            <div className="flex flex-col justify-center gap-4 px-2 h-full min-h-[180px]">
                {cell.captions.map((c, i) => (
                    <p key={i} className="text-sm text-gray-700 leading-relaxed">{c}</p>
                ))}
            </div>
        );
    }
    if (cell.src) {
        return (
            <div className="overflow-hidden border border-gray-200 shadow-sm h-full min-h-[180px]">
                <Image
                    src={cell.src}
                    alt={cell.alt}
                    width={600}
                    height={380}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }
    return <div className="h-full min-h-[180px]" />;
};

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-12">
                <p className="text-xl text-black leading-relaxed">
                    Over the past five years, GMGI Solutions Limited has developed websites
                    across a diverse range of industries. Our high-quality, tailored, and
                    cost-effective software solutions are delivered right to our clients'
                    doorsteps, leveraging cutting-edge technologies to meet their unique needs.
                </p>
                <div>
                    <h2 className="text-3xl font-bold text-black mb-10">
                        Website and Mobile Application Design and Development Technologies
                    </h2>
                    <div className="space-y-10">
                        <div className="grid grid-cols-2 gap-x-8">
                            <TechBlock {...techColumns[0]} />
                            <TechBlock {...techColumns[1]} />
                        </div>

                        {/* Row 2: CMS | Mobile */}
                        <div className="grid grid-cols-2 gap-x-8">
                            <TechBlock {...techColumns[2]} />
                            <TechBlock {...techColumns[3]} />
                        </div>

                        {/* Row 3: Database | Version Control */}
                        <div className="grid grid-cols-2 gap-x-8">
                            <TechBlock {...techColumns[4]} />
                            <TechBlock {...techColumns[5]} />
                        </div>

                        {/* Row 4: Design Tools | DevOps */}
                        <div className="grid grid-cols-2 gap-x-8">
                            <TechBlock {...techColumns[6]} />
                            <TechBlock {...techColumns[7]} />
                        </div>
                    </div>
                </div>

                {/* ── Projects section ─────────────────── */}
                <div className="space-y-5">
                    <h2 className="text-xl font-bold text-black">Projects</h2>

                    <div className="space-y-4">
                        {projectRows.map((row, i) => (
                            <div key={i} className="grid grid-cols-2 gap-4 min-h-[200px]">
                                <ProjectCell cell={row.left} />
                                <ProjectCell cell={row.right} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}