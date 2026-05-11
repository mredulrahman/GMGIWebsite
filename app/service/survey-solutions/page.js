// app/solutions/survey/page.jsx
"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        src: "/images/Beige-Minimalist-Timeline-Diagram-Graph-3.png",
        alt: "Image 1"
    },
    {
        src: "/images/Beige-Minimalist-Timeline-Diagram-Graph-4.png",
        alt: "Image 2"
    },
    {
        src: "/images/Beige-Minimalist-Timeline-Diagram-Graph-2.png",
        alt: "Image 3"
    },
    {
        src: "/images/Beige-Minimalist-Timeline-Diagram-Graph-6.png",
        alt: "Image 4"
    },
    {
        src: "/images/Beige-Minimalist-Timeline-Diagram-Graph-7.png",
        alt: "Image 5"
    },
    {
        src: "/images/Beige-Minimalist-Timeline-Diagram-Graph-8.png",
        alt: "Image 6"
    }
];

const HeroSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="overflow-hidden border border-gray-200 shadow-sm bg-gray-100 min-h-[200px]">
            <Image
                src="/images/professional-multicolor-concept-map-graph-2.png"
                alt="Survey types mind map: GPS Survey, RTK Survey, GCP Collection, Topographic Survey, Total Station Survey, Spot Level Survey, Cadastral and Boundary Demarcation Survey"
                width={480}
                height={300}
                className="w-full h-auto object-contain"
            />
        </div>
        <div className="space-y-4 text-md text-black leading-relaxed">
            <p>
                We use both conventional and contemporary methods to provide a wide range of surveying services. We have the breadth of experience, essential capabilities, and tools for all your land surveying requirements, from topographic surveys to map creation, construction staking to as-built surveys.
            </p>
            <p>
                <strong>Tools:</strong> Total Station, Digital Level, Auto Level, Pipe Locator, GPR, Drone, Plotter, Printer, Scanner, Gouge Sampler, Extension Rods, Handle, Measuring Tape, Sleigh Range, Hexed Blade, PVC Pipe, Tripod, Header, Hammer, Hammer Platform, Hammer Rod, Daeknosky, Daeknosky Bulb, Shovel, Crowell, Monolith, Measuring Tape, Clinometer.
            </p>
        </div>
    </div>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all border border-gray-100 group"
        aria-label="Next"
    >
        <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all border border-gray-100 group"
        aria-label="Previous"
    >
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
    </button>
);

const ImageCarousel = () => {
    const images = [
        { src: "/images/trjgjf-150x150.png", alt: "photo 1" },
        { src: "/images/ntfjtj-150x150.jpg", alt: "photo 2" },
        { src: "/images/tjg-150x150.png", alt: "photo 3" },
        { src: "/images/rhdtdjyk-150x150.png", alt: "photo 4" },
        { src: "/images/htntrjtrjt-1-150x150.png", alt: "photo 5" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: "slick-dots !bottom-[-30px]",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="relative pb-8 px-4 max-w-lg">
            <Slider {...settings}>
                {images.map((img, i) => (
                    <div key={i} className="px-1 focus:outline-none">
                        <div
                            className="overflow-hidden"
                            style={{ height: 100 }}
                        >
                            {img.src ? (
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={200}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200" />
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default function Page() {
    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
                <HeroSection />
                <ImageCarousel />
                <div className="space-y-5">
                    {images.map((i) => (
                        <Image src={i.src} alt={i.alt} width={200} height={100} className="w-full h-full object-cover" />
                    ))}
                </div>
            </div>
        </main>
    );
}