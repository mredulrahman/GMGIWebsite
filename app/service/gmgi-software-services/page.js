import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faLaptopCode, faShop, faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { faMedapps, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
const services = [
    {
        icon: (
            <FontAwesomeIcon icon={faComputer} style={{ fontSize: "60px" }} />
        ),
        title: "Website Design & Development",
        desc: "Custom, responsive websites tailored to your brand, including e-commerce solutions for seamless online sales.",
        url: "/product/website"
    },
    {
        icon: (
            <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: "60px" }} />
        ),
        title: "Customized Software",
        desc: "Tailored software to streamline business processes, including ERP and CRM systems.",
        url: "/service/customized-software-solutions"
    },
    {
        icon: (
            <Image src="/images/8750896.png" alt="Software Maintenance" width={60} height={60} />
        ),
        title: "Software Maintenance",
        desc: "Ongoing support, performance optimization, and feature updates for existing software.",
        url: "/service/software-maintenance"
    },
    {
        icon: (
            <FontAwesomeIcon icon={faShop} style={{ fontSize: "60px" }} />
        ),
        title: "E-commerce Services",
        desc: "Secure, scalable e-commerce platforms with payment integration and intuitive shopping carts.",
        url: "/service/e-commerce-services"
    },
    {
        icon: (
            <FontAwesomeIcon icon={faMedapps} style={{ fontSize: "60px" }} />
        ),
        title: "Mobile Apps Development",
        desc: "Cross-platform, Android, and hybrid app development to reach broad audiences.",
        url: "/product/apps"
    },
    {
        icon: (
            <FontAwesomeIcon icon={faSoundcloud} style={{ fontSize: "60px" }} />
        ),
        title: "Cloud Solutions",
        desc: "Cloud storage, application development, and infrastructure management for scalability and security.",
        url: "/service/cloud-solutions"
    },
    {
        icon: (
            <Image src="/images/17034231.png" alt="API Integration" width={60} height={60} />
        ),
        title: "API Integration",
        desc: "Custom API creation and third-party integration for enhanced software functionality.",
        url: "/service/api-development-and-integration"
    },
    {
        icon: (
            <Image src="/images/3159310.png" alt="Graphics Solutions" width={60} height={60} />
        ),
        title: "Graphics Solutions",
        desc: "Branding, marketing collateral, and intuitive UI/UX design to boost engagement.",
        url: "/product/graphics-design"
    },
    {
        icon: (
            <Image src="/images/9823866.png" alt="Dashboard Development" width={60} height={60} />
        ),
        title: "Dashboard Development",
        desc: "Geospatial and business intelligence dashboards for real-time data insights and decision-making.",
        url: "/product/dashboard"
    },
    {
        icon: (
            <Image src="/images/1997928.png" alt="Digital Marketing" width={60} height={60} />
        ),
        title: "Digital Marketing",
        desc: "SEO, social media, content, and email marketing to drive traffic and boost online presence.",
        url: "/service/digital-marketing"
    },
    {
        icon: (
            <Image src="/images/9671007.png" alt="Domain and Hosting" width={60} height={60} />
        ),
        title: "Domain and Hosting",
        desc: "Domain registration, reliable web hosting, and managed hosting services for optimal performance.",
        url: "/service/domain-and-hosting-services"
    },
    {
        icon: (
            <FontAwesomeIcon icon={faFileVideo} style={{ fontSize: "60px" }} />
        ),
        title: "Videography",
        desc: "Drone driven 3D modelling, 3D Travel Route Map Animation Video",
        url: "/product/videography"
    },
];

export default function Page() {
    return (
        <>
            <div className="min-h-screen font-sans">
                <section className="max-w-6xl mx-auto px-6 pt-10 pb-4">
                    <div className="max-w-7xl mb-8">
                        <p className="text-black text-lg leading-relaxed">
                            At GMGI Solutions Ltd., we offer a
                            comprehensive suite of IT services designed to address the varied needs of modern businesses. Our
                            solutions are not just about meeting immediate needs but about providing lasting value that drives
                            long-term success.
                        </p>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto px-6 pb-24">
                    <h2
                        className="text-4xl mb-12 font-bold"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                        Our services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((service, i) => (
                            <ServiceCard key={i} service={service} index={i} url={service.url} />
                        ))}
                    </div>
                </section>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.facebook.com/gmgisoft/"
                            className="hover:opacity-90 transition-opacity"
                            aria-label="Facebook"
                        >
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/facebook.png" alt="facebook" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/gmgi-solutions-limited-software/"
                            className="hover:opacity-90 transition-opacity"
                            aria-label="LinkedIn"
                        >
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/linkedin.png" alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

function ServiceCard({ service }) {
    return (
        <div className="group relative bg-white rounded-2xl border border-stone-200 shadow-lg shadow-stone-600 cursor-pointer overflow-hidden hover:-translate-y-2 transition-transform duration-300 ease-out">
            <div
                className="
          absolute bottom-0 left-0
          w-[70%] h-[52%]
          bg-[#29b6e8]
          rounded-tr-[100px]
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-500 ease-out
          z-100
          flex flex-col justify-between
          px-7 pt-5 pb-6">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <p className="text-white font-bold text-sm leading-tight">imgbb.com</p>
                    <p className="text-white/90 text-sm mt-1">image not found</p>
                </div>
                <Link href={service.url || '#'}>
                    <div className="w-11 h-11 rounded-full bg-[#6c3fcf] flex items-center justify-center shadow-lg self-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </Link>
            </div>
            <div className="relative z-20 p-7 flex flex-col min-h-[300px]">
                <div className="text-stone-800 mb-5">
                    {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6 leading-snug">
                    {service.title}
                </h3>
                <p className="text-stone-500 text-xl leading-none flex-1 mb-6">
                    {service.desc}
                </p>
            </div>
        </div>
    );
}