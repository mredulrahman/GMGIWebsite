import Image from "next/image";
import Link from "next/link";


const industries = [
  {
    id: "geospatial-data",
    title: "Geography",
    image: "/images/gg-255x182.jpg",
    alt: "Geography",
    href: "#"
  },
  {
    id: "public-health",
    title: "Public Health",
    image: "/images/health_effects-255x182.jpg",
    alt: "Public Health",
    href: "#",
  },
  {
    id: "geology",
    title: "Geology",
    image: "/images/df-1-255x182.jpg",
    alt: "Geology",
    href: "#",
  },
  {
    id: "climatology",
    title: "Climatology",
    image: "/images/shutterstock-240459751-255x182.webp",
    alt: "Climatology",
    href: "#",
  },
  {
    id: "hydrology",
    title: "Hydrology",
    image: "/images/Colorful-Minimalist-Linear-Steps-Circular-Diagram-255x182.png",
    alt: "Hydrology",
    href: "#",
  },
  {
    id: "urban-and-regional-planning",
    title: "Urban and Regional Planning",
    image: "/images/1520181828934-255x182.jpg",
    alt: "Urban and Regional Planning",
    href: "#",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    image: "/images/download-1-255x182.jpg",
    alt: "Agriculture",
    href: "#",
  },
  {
    id: "socioeconomic",
    title: "Socio Economy",
    image: "/images/images-255x182.jpg",
    alt: "Socio Economy",
    href: "#",
  }
];

function IndustryCard({ item }) {
  return (
    <a
      href={item.href}
      className="relative overflow-hidden group block aspect-4/3 bg-slate-300 cursor-pointer"
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-4">
        <p className="text-white font-medium text-xl leading-tight">{item.title}</p>
        <p className="text-white/90 text-sm mt-1 font-medium transition-transform duration-300 transform group-hover:translate-x-5">Read more</p>
      </div>
    </a>
  );
}

export default function WorkSection() {
  return (
    <section className="">
        <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">Industries We Work In</h1>
      <div className="max-w-6xl mx-auto p-3">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {industries.map((item) => (
            <Link key={item.id} href={`/history/${item.id}`}>
              <IndustryCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}