"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
    {
        title: "Foundations of Geographic Information Systems (GIS)",
        content: {
            title: "Course Content:",
            modules: [
                "Module 1: Introduction of ArcGIS Interface and interacting with Maps",
                "Module 2: Interacting with Data",
                "Module 3: Exploring online Resources",
                "Module 4: Working with Coordinate Systems and Projections",
                "Module 5: Symbolizing Features and Classifying Features",
                "Module 6: Labeling Features",
                "Module 7: Building Geodatabase",
                "Module 8: Creating and Editing Feature (Digitizing)",
                "Module 9: Querying Data (Attribute Operation)",
                "Module 10: Joining and Relating Data",
                "Module 11: Preparing Data for Analysis (Dissolving Feature, Clipping layers, etc.)",
                "Module 12: Geoprocessing Vector Data (Buffering Feature, Overlaying data, etc.)",
                "Module 13: Using Spatial Analyst",
            ],
            stats: "Total Class: 12, Total User Manual: 14, Supporting Recorded Video: 3"
        }
    },
    {
        title: "Fundamental of Remote Sensing",
        content: {
            title: "Course Content:",
            modules: [
                "Module 1: Basic RS Tools in ArcGIS, Erdas Imagine",
                "Module 2: Landsat Data Download Details",
                "Module 3: Atmospheric Correction",
                "Module 4: Fundamentals of Image Processing",
                "Module 5: Example Project",
                "Module 6: Intermediate and advanced Image Processing",
                "Module 7: Image Classification",
                "Module 8: Accuracy Analysis",
                "Module 9: Change Detection (Shoreline, vegetation, lake, river, temperature)",
                "Module 10: Making a Satellite Image Basemap for Map Plot",
            ],
            stats: "Total Class: 10, Total User Manual: 10, Supporting Recorded Video: 0"
        }
    },
    {
        title: "Learning ArcGIS Python Scripting",
        content: {
            title: "Course Content:",
            modules: [
                "Module 1: Introduction",
                "Module 2: Python for ArcGIS Basics",
                "Module 3: Strings, Numbers, and Variables",
                "Module 4: Lists and Tuples",
                "Module 5: Manipulating Strings",
                "Module 6: Object-Oriented Programming",
                "Module 7: Using Loops",
                "Module 8: Geodatabase and Files",
                "Module 9: Important Run Time",
                "Module 10: Help Documents",
            ],
            stats: "Total Class: 12, Total User Manual: 12, Supporting Recorded Video: 15"
        }
    },
    {
        title: "Creating Maps with R (Intermediate)",
        content: {
            title: "Course Content:",
            modules: [
                "Mapping Fundamentals",
                "Processing GIS Data from Excel",
                "Working with BND DATA FRAMES",
                "Static Maps with ggplot2",
                "Interactive Maps with Leaflet",
                "GIS, Projections, and Map Files",
            ],
            stats: "Total Class: 5, Total User Manual: 5, Supporting Recorded Video: 5"
        }
    },
    {
        title: "3 Days Training on UAV/Drone Operation & Photogrammetric Data Processing for Surveying Applications",
        content: {
            title: "Course Content:",
            image: "/images/t23.png",
            stats: "Total Class: 3, Total User Manual: 3, Supporting Recorded Video: 0"
        }
    },
    {
        title: "KoBoToolbox (Basic)",
        content: {
            title: "Course Content:",
            sections: [
                {
                    title: "Module 1: Getting Started",
                    items: ["What is KoBoToolbox", "Creating account on KoBoToolbox", "The KoBoToolbox Interface", "Overview of Creating and Managing Project in KoBoToolbox", "Quick Start Overview"]
                },
                {
                    title: "Module 2: Creating Form",
                    items: ["Creating a New Form", "Setting Form and Adding Visitors", "Getting started with XLSForm", "Importing a XLSForm in Kobo", "Overview of All Form Builder Functions"]
                },
                {
                    title: "Module 3: KoboToolBox on Your Computer or Server",
                    items: ["Software Architecture", "Installing KoboToolbox on Local Computer", "Installing KoboToolbox on Your Own Servers"]
                },
                {
                    title: "Module 4: Managing data in KoboToolbox",
                    items: ["Project Summary", "Record Selection", "Editing a Project", "Import Attach interesting data", "Importing and Downloading Your data"]
                },
                {
                    title: "Module 5: Collecting Data",
                    items: ["Overview of Data Collection Tools", "Recording an Entire Interview with Background Audio Recording", "Collecting Data through Web Forms", "Collecting Data Offline", "Data Collection on KoboCollect App"]
                }
            ],
            stats: "Course Duration: 15 Hours"
        }
    }
];

const instructors = [
    {
        name: "M.I.M Farhad",
        photo: "/images/1.1.png",
        title: "Managing Director, GMGI Solutions Limited",
        expertise: ["GIS and Remote Sensing", "RTK with Drone Survey", "Photogrammetry"],
        qualification: ["B.Sc., MS (Geology), DU", "Master's in Disaster Management (DU)"],
    },
    {
        name: "Md. Nurullah",
        photo: "/images/2.1.png",
        title: "GIS Database Update Technician at MCRU | Freelance GIS Consultant at ZDCP, CDC, DGoH | Director at GMGI Solutions Limited | Core Expert Member of GroupMappers",
        expertise: ["Highly skilled in KoBoToolbox", "Data Management", "Data collection"],
        qualification: ["B.Sc. MS (Geography), DU"],
    },
    {
        name: "Afrida Asad",
        photo: "/images/3.1.png",
        title: "Volunteer of GroupMappers | Director of GMGI Solutions Ltd | Social Enterprise Entrepreneur | Commonwealth scholar",
        expertise: ["Geography and Health Science Specialist"],
        qualification: [
            "Academic Qualification from the University of Oxford (Epidemiology)",
            "Msc in Buat (Institute of Water and Flood Management)",
            "BSc and MSc in DU (Geography)",
        ],
    },
    {
        name: "Md Ismail Hossain",
        photo: "/images/6.png",
        title: "GIS Developer at GMGI Solutions Ltd",
        expertise: ["GIS and Remote Sensing"],
        qualification: ["B.Sc. MS (Geography), DU"],
    },
    {
        name: "Md Nafiz Imtiaz",
        photo: "/images/IMG-20221128-WA0000.png",
        title: "GIS Analyst at GMGI Solutions Ltd",
        expertise: ["GIS and Remote Sensing", "Cartography"],
        qualification: ["B.Sc. MS (Geology), DU"],
    },
    {
        name: "Md. Rashed Alam",
        photo: "/images/im.jpg",
        title: "Junior GIS Analyst at GMGI Solutions Ltd",
        expertise: ["GIS and Remote Sensing"],
        qualification: ["MN in GIS for Environment and Development (JU)", "B.Sc. in Oceanography (BSMRMU)"],
    },
];

const facilities = [
    "Elegant Learning Environment",
    "Lecture Delivery by Projector",
    "Air Condition Facility in Classroom",
    "Materials (Slide, PDF)",
    "Practice Code (All codes provide, if it is required)",
    "Online and Offline Training Facility",
    "Lifetime Studentship",
    "Recording Video for offline Classes (if it is required)",
    "Opportunity for Job Placement after Training",
    "Certification",
];

const reviews = [
    {
        name: "Mohammad Ali Riazi",
        stars: 5,
        post: "Assistant Director (Geology)",
        org: "Geological Survey of Bangladesh",
        email: "mail@gis-geology.com",
        text1: "Review on “The Hands on Training on GNSS RTK Operation for Mapping & Surveying & Photogrammetric Data Processing”",
        text2: "The Hands on Training on GNSS RTK Operation for Mapping & Surveying & Photogrammetric Data Processing was an extensive and practical program that provided hands-on training in GIS & Remote Sensing & Photogrammetric Data Processing. The trainer was highly skilled and provided comprehensive knowledge on the use of GIS & RTK equipment and photogrammetric applications. I gained practical skills and left with a deeper understanding of the topic. Overall, the program was well-structured, informative, and practical.",
    },
    {
        name: "Md. Minhajul Islam",
        stars: 5,
        post: "Senior MI Officer",
        org: "Bangladesh Red Crescent Society",
        email: "",
        text1: "",
        text2: "The GIS Training Applied to WASH in Humanitarian Settings in Cox's Bazar was an extensive and practical program that covered in-depth knowledge of GIS and its applications in WASH. The trainers were highly knowledgeable and focused on the specific challenges of the Cox's Bazar region. The course covered essential concepts, data management, and analysis techniques which were instrumental in comprehending the complexities of WASH in humanitarian settings. The well-structured course grew useful insights into GIS and WASH.Anyone interested in learning about WASH using GIS should check out this program, in my opinion.",
    },
    {
        name: "Anayer Karim",
        stars: 5,
        post: "Drilling Supervisor",
        org: "Groundwater Relief",
        email: "anayero93@gmail.com",
        text1: "Review of “The UAV/Drone Operation & Data Processing for 3D Digital Mapping and Surveying” training",
        text2: "The UAV/Drone Operation & Data Processing for 3D Digital Mapping and Surveying Training organized by GMGI Solutions Limited covered all aspects of UAV operations and data processing, and the hands-on approach was particularly helpful. I would recommend this training to anyone interested in using drones for professional purposes. Thanks to the organizer and trainer for the valuable learning experience.",
    },
    {
        name: "Md. Khairul Basher",
        stars: 5,
        post: "Whatsapp",
        org: "Bangladesh Red Crescent Society (BDRCS)",
        email: "",
        text1: "",
        text2: "I found the GIS training course on WASH in Humanitarian settings to be an insightful and informative program. The trainers were well-prepared and provided hands-on training on GIS applications in WASH, with a specific focus on the Cox's Bazar region. The course comprehensively covered essential concepts, data management, and analysis techniques, which were helpful in understanding the unique challenges of WASH in humanitarian settings. Overall, the course was well-designed and I would highly recommend it to anyone interested in GIS and WASH experience.",
    },
];

const Stars = ({ count }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" className={`w-6 h-6 ${i < count ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const SectionBar = ({ text }) => (
    <div className="px-6 md:px-18 py-2 bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl rounded-md text-center">
        {text}
    </div>
);

const InstructorCard = ({ instructor }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center p-6">
        <div className="flex flex-col gap-y-2 items-center">
            <div className="shrink-0 w-24 h-24">
                {instructor.photo ? (
                    <Image src={instructor.photo} alt={instructor.name} width={96} height={112} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-200" />
                )}
            </div>
            <p className="font-extrabold text-black text-xl">{instructor.name}</p>
        </div>
        <div className="flex-1 text-sm bg-[#d5f0f1] pl-4 rounded-4xl shadow-md shadow-black/30">
            <p className="text-black text-xl font-medium">{instructor.title}</p>
            {instructor.expertise.length > 0 && (
                <>
                    <p className="font-extrabold text-black text-xl mt-1">Areas of expertise</p>
                    <ul className="space-y-0.5">
                        {instructor.expertise.map((e, i) => (
                            <li key={i} className="text-black text-xl font-medium">–{e}</li>
                        ))}
                    </ul>
                </>
            )}
            <p className="font-extrabold text-black text-xl mt-1">Academic Qualification</p>
            <ul className="space-y-0.5">
                {instructor.qualification.map((q, i) => (
                    <li key={i} className="text-black text-xl font-medium">–{q}</li>
                ))}
            </ul>
        </div>
    </div>
);

const slides1 = [
    "/images/1668844898517-768x576.jpeg",
    "/images/1668510370139-768x576.jpeg",
    "/images/1668844895704-768x576.jpeg",
    "/images/1668510371797-768x576.jpeg",
    "/images/IMG_20230406_162701-768x576.jpg",
    "/images/1668844893595-768x576.jpeg",
    "/images/IMG_20230406_162648-768x576.jpg",
];

const slides2 = [
    "/images/IMG_20230406_162701-1024x768.jpg",
    "/images/IMG_20230406_162648-1024x768.jpg"
];

const Carousel = ({ slides }) => {
    const [active, setActive] = useState(0);
    const visibleCount = 3;
    const maxActive = slides.length - visibleCount;

    const next = () => {
        setActive((prev) => (prev < maxActive ? prev + 1 : 0));
    };

    const prev = () => {
        setActive((prev) => (prev > 0 ? prev - 1 : maxActive));
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 group relative"
        >
            <div className="relative w-full overflow-hidden border border-gray-200 bg-gray-100 rounded-sm" style={{ height: 280 }}>
                <motion.div
                    animate={{ x: `-${active * (100 / visibleCount)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex h-full"
                >
                    {slides.map((src, i) => (
                        <div key={i} className="min-w-[33.333333%] h-full p-1">
                            <Image
                                src={src}
                                alt={`Training class ${i + 1}`}
                                width={400}
                                height={280}
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                    ))}
                </motion.div>
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity text-gray-800"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity text-gray-800"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

            <div className="flex justify-center gap-2">
                {Array.from({ length: maxActive + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="relative h-3 cursor-pointer outline-none"
                    >
                        <motion.div
                            animate={{
                                width: i === active ? 24 : 12,
                                backgroundColor: i === active ? "#4b5563" : "#d1d5db"
                            }}
                            className="h-3 rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

const ReviewCard = ({ review }) => (
    <div className="p-5 shadow-lg shadow-black/80 space-y-3 relative">
        <p className="font-bold text-black">{review.name}</p>
        <span className="absolute top-3 right-4 text-8xl text-gray-400 font-serif">”</span>
        <Stars count={review.stars} />
        <div className="text-md space-y-0.5">
            <p className="font-bold text-black">Name: {review.name}</p>
            <p className="text-black text-md font-bold">Post: {review.post}</p>
            <p className="text-black text-md font-bold">Organization: {review.org}</p>
            {review.email && <p className="text-black text-md font-bold">{review.email}</p>}
        </div>
        {review.text1 ? (<p className="text-black text-md leading-none font-bold">{review.text1}<br />
            <span className="text-black text-md leading-relaxed italic">“{review.text2}”</span></p>)
            : (<span className="text-black text-md leading-relaxed italic">“{review.text2}”</span>)}
    </div>
);

const CourseAccordion = ({ courses }) => {
    const [expanded, setExpanded] = useState(null);
    return (
        <div className="space-y-1.5">
            {courses.map((course, i) => (
                <div key={i} className="overflow-hidden">
                    <button
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-3.5 bg-[#4cc7cc] text-black transition-colors text-left"
                    >
                        <span className="font-semibold text-sm sm:text-base leading-tight">{course.title}</span>
                        {expanded === i ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        )}
                    </button>
                    <AnimatePresence initial={false}>
                        {expanded === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}>
                                <div className="px-6 py-6 space-y-4">
                                    <h4 className="font-extrabold text-black text-md">{course.content.title}</h4>
                                    {course.content.modules && (
                                        <ul className="space-y-2 ml-1">
                                            {course.content.modules.map((m, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <span className="leading-relaxed font-extrabold text-black text-md">{m}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {course.content.sections && (
                                        <div className="space-y-6">
                                            {course.content.sections.map((section, j) => (
                                                <div key={j} className="space-y-2.5">
                                                    <h5 className="font-extrabold text-black text-md">{section.title}</h5>
                                                    <ul className="space-y-2 ml-4">
                                                        {section.items.map((item, k) => (
                                                            <li key={k} className="flex items-start gap-2.5">
                                                                <span className="leading-relaxed font-extrabold text-black text-md">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {course.content.image && (
                                        <div className="relative w-full my-4" style={{ height: 320 }}>
                                            <Image
                                                src={course.content.image}
                                                alt={course.title}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    )}
                                    {course.content.stats && (
                                        <div className="pt-4 text-black font-extrabold text-md">
                                            {course.content.stats}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default function Page() {
    return (
        <main
            className="min-h-screen bg-white"
            style={{
                backgroundImage: "url('/dashboard/abstract-geometric-white-background-free-vector.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-10 space-y-4">
                <SectionBar text="Offering Courses" />
                <CourseAccordion courses={courses} />
                <Carousel slides={slides1} />
                <SectionBar text="List of Instructors" />
                <div className="space-y-4 bg-[#98d8da]">
                    {instructors.map((inst, i) => (
                        <InstructorCard key={i} instructor={inst} />
                    ))}
                </div>
                <SectionBar text="Training Facility" />
                <div className="flex md:flex-row flex-col gap-7 items-center">
                    <ul className="bg-[#4cc7cc] w-1/3 leading-none rounded-r-4xl">
                        {facilities.map((item, i) => (
                            <li key={i} className="flex gap-1 items-start text-xl text-black font-normal">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-800 shrink-0 mt-0.5">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Carousel slides={slides2} />
                </div>

                <SectionBar text="Completed Training" />
                <div className="w-full overflow-hidden border border-gray-200 rounded-sm shadow-sm" style={{ height: 500 }}>
                    <iframe
                        title="Completed Training List of GMGI (2.2)"
                        allowFullScreen
                        style={{ width: "100%", height: "100%", border: "none" }}
                        src="//view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fgmgisolutionsltd.com%2Fwp-content%2Fuploads%2F2023%2F04%2FCompleted-Training-List-of-GMGI-2.2.xlsx&embedded=true"
                        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
                    />
                </div>
                <SectionBar text="Review" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {reviews.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>
            </div>
        </main>
    );
}