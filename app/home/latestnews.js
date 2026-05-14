import Image from "next/image";
import Link from "next/link";


const newsItems = [
  {
    id: "post00001",
    title: 'GMGI just hosted one-day session titled “Foundation Training On GIS 2nd Base ” on, November 19th,2022.',
    date: "November 19, 2022",
    image: "/images/1668844898517-350x250.jpeg",
    alt: "Foundation Training On GIS session"
  },
  {
    id: "post00002",
    title: 'GMGI just hosted one-day session titled “Mauza Georeferencing and Digitizing using ArcGIS” on, November 15th,2022.',
    date: "November 15, 2022",
    image: "/images/1668510370659-e1677583275582-350x250.jpeg",
    alt: "Mauza Georeferencing and Digitizing session"
  },
  {
    id: "post00003",
    title: "3 Days Training on QGIS Applied to WASH in Humanitarian Settings at Cox’s Bazar, Bangladesh",
    date: "November 5, 2022",
    image: "/images/313415721_10160043262041465_4278601572741041142_n-350x250.jpg",
    alt: "QGIS Training Cox's Bazar"
  },
  {
    id: "post00004",
    title: "Afrida Asad Abonty, director, GMGI Solutions Ltd, has been awarded the prestigious Commonwealth Scholarship this academic year!",
    date: "October 23, 2022",
    image: "/images/Photo_1664338027827_edit_435182149933581-350x250.png",
    alt: "Commonwealth Scholarship award"
  },
];

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function NewsCard({ item }) {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col cursor-pointer group">

      <div className="relative w-full aspect-4/3 overflow-hidden bg-teal-50">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="w-12 h-[5px] bg-teal-400 mt-4" />

      <div className="flex flex-col gap-3 pt-3 pb-5">
        <p className="text-md md:text-lg font-medium text-gray-900 hover:text-teal-400 transition-colors duration-300 leading-snug">
          {item.title}
        </p>
        <div className="flex items-center gap-1.5 text-[13px] text-gray-700">
          <ClockIcon />
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function LatestnewsSection() {
  return (
    <section id="latest-news" className="">
        <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">Latest News</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-3">
            {newsItems.map((item) => (
              <Link key={item.id} href={`/posts/${item.id}`}>
                <NewsCard item={item} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}