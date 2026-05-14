"use client";
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Images = [
  {
    id: 1,
    src: "/images/313400333_10160049835006465_3083665075692226485_n-e1677583442765-768x432.jpg",
    alt: "",
  },
  {
    id: 2,
    src: "/images/313416617_10160043262246465_121528154265006269_n-e1677583410292-768x432.jpg", 
    alt: "",
  },
  {
    id: 3,
    src: "/images/1668510370659-e1677583275582-768x432.jpeg", 
    alt: "",
  },
  {
    id: 4,
    src: "/images/Capture58658-768x422.jpg.webp", 
    alt: "",
  },
  {
    id: 5,
    src: "/images/IMG_20220828_121734-2.jpg-56-1-scaled-2-e1677583521524-768x432.jpg", 
    alt: "",
  },
  {
    id: 6,
    src: "/images/Picture3-e1677582809469-768x410.jpg.webp", 
    alt: "",
  }
];

const AboutSlider = ({ Images }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 800,
    cssEase: "linear"
  };
  return (
    <div className="slider-container py-8">
      <Slider {...settings}>
        {Images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function AboutSection () {
    return (
        <section id="about" className="">
            <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">About us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
                <div className="text-lg md:text-xl text-[rgb(13,70,70)] mt-6">
                    <p className="leading-none text-justify md:text-left">A group of professionals working from 2018 utilizing geospatial techniques for collecting, managing, analyzing and visualizing data. We sought out to avail and investigate the spatio-temporal figures through Geographic Information Systems (GIS), Remote Sensing (RS), Photogrammetric Survey, Artificial Intelligence (AI), Open-Source Modelling (OSM), Engineering and Field Surveys in order to administer Feasibility Study, Environmental Analysis (EA), Scenario Planning for client convenience. Our dynamic team is capable of providing consultancy, assistance and services which enable our clients to operate effortlessly.</p>
                    <p className="mt-4 leading-none text-justify md:text-left">Our solutions are vigorous, constructive, and innovative for a developing Bangladesh yet to exercise the environmental, geographical, and geological resources extensively.</p>
                </div>
                <div className="w-full overflow-hidden">
                    <AboutSlider Images={Images} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;