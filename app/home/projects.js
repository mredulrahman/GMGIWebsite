"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["ALL", "POTENTIAL", "ONGOING", "2022", "2021", "2020", "2019"];

const projects = [
  {
    id: 1,
    slug: "noise-measurement-survey",
    title: "Noise Measurement Survey",
    tag: "2019",
    image: "/images/noise-1.jpg",
    alt: "Noise Measurement Survey",
  },
  {
    id: 2,
    slug: "digital-survey-and-3d-modelling-for-jail-khal-in-barisal-city-corporation",
    title: "Digital Survey and 3D modelling for Jail Khal",
    tag: "2019",
    image: "/images/digital-survey.jpg",
    alt: "Digital Survey and 3D modelling for Jail Khal",
  },
  {
    id: 3,
    slug: "geospatial-dashboard-for-district-development-plan-coxs-bazar",
    title: "Geospatial Dashboard for District Development Plan (Cox's Bazar)",
    tag: "ONGOING",
    image: "/images/c-1.jpg",
    alt: "Geospatial Dashboard Cox's Bazar",
  },
  {
    id: 4,
    slug: "training-on-flood-risk-assessment-using-geospatial-and-statistical-techniques",
    title: "Training on Flood Risk Assessment Using Geospatial and Statistical Techniques",
    tag: "2022",
    image: "/images/training-1.png",
    alt: "Flood Risk Assessment Training",
  },
  {
    id: 5,
    slug: "rural-renewable-energy-project-rrep-sierra-leone-wp6-matching-grant",
    title: "Rural Renewable Energy Project (RREP), Sierra Leone",
    tag: "2020",
    image: "/images/rural.jpg",
    alt: "Rural Renewable Energy Project Sierra Leone",
  },
  {
    id: 6,
    slug: "aerial-drone-survey-for-khatunganj-chattogram-under-nrp-project",
    title: "Aerial Drone Survey for Khatunganj, Chattogram",
    tag: "2020",
    image: "/images/areal-1.jpg",
    alt: "Aerial Drone Survey Chattogram",
  },
  {
    id: 7,
    slug: "fatehabad-township-project",
    title: "Fatehabad Township Project",
    tag: "2020",
    image: null,
    alt: "Fatehabad Township Project",
  },
  {
    id: 8,
    slug: "dhaka-earthquake-emergency-preparedness-enhancing-resilience-deeper-risk-and-resource-mapping",
    title: "Dhaka Earthquake & Emergency Preparedness Enhancing Resilience (DEEPER)",
    tag: "2021",
    image: "/images/earthquiqe.jpg",
    alt: "Dhaka Earthquake Emergency Preparedness",
  },
  {
    id: 9,
    slug: "gis-mapping-of-11-sectors-and-bhoddhobhumi-of-bangladesh-liberation-war",
    title: "GIS Mapping of 11 Sectors and Bhoddhobhumi of Bangladesh Liberation War",
    tag: "2021",
    image: "/images/11-2.jpg",
    alt: "GIS Mapping Liberation War",
  },
  {
    id: 10,
    slug: "georeferencing-of-mouza-maps-of-15-polders-at-coastal-area-of-bangladesh-using-satellite-imageries",
    title: "Georeferencing of Mouza Maps of 15 Polders at Coastal Area of Bangladesh",
    tag: "2022",
    image: "/images/15-1.jpg",
    alt: "Georeferencing Mouza Maps",
  },
  {
    id: 11,
    slug: "a-pilot-project-on-preparation-of-comprehensive-development-plan-for-nine-upazilas",
    title: "A Pilot Project on Preparation of Comprehensive Development Plan for Nine Upazilas",
    tag: "ONGOING",
    image: null,
    alt: "Comprehensive Development Plan Nine Upazilas",
  },
  {
    id: 12,
    slug: "digital-map",
    title: "Digital map",
    tag: "POTENTIAL",
    image: null,
    alt: "Digital map",
  },
  {
    id: 13,
    slug: "an-integrated-web-portal-to-access-data-sources-for-public-health-planning-in-bangladesh",
    title: "An integrated web portal to access data sources for public health planning in Bangladesh",
    tag: "POTENTIAL",
    image: null,
    alt: "Integrated web portal public health",
  },
  {
    id: 14,
    slug: "gcp-collection-for-georeferencing-satellite-imageries-and-preparing-dtm-dsm-of-gk-project-area",
    title: "Satellite Imageries and Preparing DTM DSM of GK Project Area",
    tag: "2020",
    description: "GCP collection for Georeferencing Satellite Imageries and Preparing DTM DSM of GK Project Area",
    image: "/images/gcp.jpg",
    alt: "Satellite Imageries GK Project",
  }
];

function PlaceholderImage() {
  return (
    <Image src="/images/flexia-preview.jpg"
      alt="Placeholder Image"
      width={100}
      height={100}
      className="w-full h-full"
    />
  );
}

function ProjectCard({ project }) {
  return (
    <div className="rounded-4xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group bg-white border border-white">

      <div className="relative w-full h-44 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt}
            width={100}
            height={100}
            // fill
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        ) : (
          <PlaceholderImage />
        )}
      </div>

      <div className="bg-[#25ABB9] flex flex-col items-center justify-center text-center px-4 py-4 flex-1">
        <p className="text-white font-normal text-lg leading-none">
          {project.title}
        </p>
        {project.description && (
          <p className="text-white/80 text-sm mt-1 leading-none">
            {project.description}
          </p>
        )}
        <p className="text-white/90 text-sm font-normal mt-6">{project.tag}</p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    projects.filter((p) => {
      if (activeFilter === "ALL") {
        return true;
      }
      if (activeFilter === "2022" && p.id === 3) {
        return true;
      }
      if (activeFilter === "ONGOING" && p.id === 3) {
        return false;
      }
      return p.tag === activeFilter;
    });

  // const buttonVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  // };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <section id="completed" className="">
      <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">Projects</h1>
      <div className="max-w-6xl mx-auto py-4">
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 text-md font-normal tracking-wide border transition-colors duration-150 ${activeFilter === f
                ? "bg-black text-white"
                : "bg-[#25ABB9] text-white"
                }`}
            // variants={buttonVariants}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
              >
                <Link href={`/${[11, 12, 13].includes(project.id) ? 'project' : 'view'}/${project.slug}`}>
                  <ProjectCard project={project} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}