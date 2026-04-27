"use client";
import { useState } from "react";

const accordionItems = [
  {
    id: 1,
    title: "One Stop Mapping Solutions",
    content:
      "When we work on material, we often notice that we are missing a small feature which if added could take our work to another level, this simple yet technical feature takes a skill that is not beneficial for you to learn in the long run. Imagine someone provided you with that feature a few hours after reaching out. Seems convenient, right? We at GMGI Solutions Ltd. strive to provide these kinds of alternatives to your problems. Maps, Research, Review, Assistance, Survey, Dashboard, Creative Design, Videography, Renting Equipment – you name it, we got your back. A One-Stop Solution to all your worries.",
  },
  {
    id: 2,
    title: "Mobile Data Collection",
    content:
      "Our pool of enumerators is proficient in Mobile-Based Online Offline Data Collection platforms both for geospatial and non-geospatial data e.g. KOBO Toolbox, ODK, Input, MAPinr, GPS essentials which is personalized and unique. These platforms provide a means to track the surveyor and the respondent making sure of their integrity all the while being swift and easily manageable integrating data over a vast area simultaneously. These datasets are personalized therefore after processing will create precise assumptions catered to consumer needs. Our clients are NMEP, Communicable Disease Control, DGHS, British Red Cross, Shahin Geospatial, Jagannath University, Filariasis Elimination and Control Program, CDC, DGHS, Chittagong City Corporation and many more. We also have our own customized SMS-based data collection system for near-real-time data collection which uses USSD code generation processes over the GSM network of respective mobile operators functioning in the study area in case there is unstable internet or non-compatible devices.",
  },
  {
    id: 3,
    title: "Accessibility Assessment",
    content:
      "Accessibility is an attribute of people describing integrated systems from a user viewpoint. Groups of individuals have a range of activity needs, which can be met through facilities provided at various destinations, with transport and communications providing the links between demand and supply. We as human beings don't have equity to opportunities — our policymakers are often conflicted with this dilemma when thinking about the allocation of education, healthcare, transport modes, and other resources. Our GMGI Solutions Ltd. can provide top-notch methods to precisely estimate resource depleted zones through Accessibility Analysis Model which will facilitate our policymakers to take the best possible decisions by utilizing locational intelligence to determine the suitable location for all endeavors.",
  },
  {
    id: 4,
    title: "Big Data Handling",
    content:
      "We at GMGI Solutions Ltd. are capable of Big Data Handling which will enable an individual to make data-informed decisions. Big Data is an otherwise very large and diverse dataset that can be structured, semi-structured or unstructured from different sources and varying sizes. We analyze this data to uncover the hidden patterns, trends and correlations. We have worked with Mahidol Oxford Tropical Research Unit (MORU) on real-time population mapping to assess the impact of travel restrictions and social distancing on COVID-19 spread. Facebook datasets are analyzed to find out how the population has changed in the crisis period during pandemic compared to the prior scenario in a given administrative area and the percentage of people staying at home traveling during the analysis period.",
  },
  {
    id: 5,
    title: "Operational Dashboard",
    content:
      "A Dashboard's real-time insight fosters immediate and informed decision-making, targeted knowledge sharing, and deeper collaboration. This dashboard system has been designed and developed using open-source data by our team which is easily accessible, scalable and applicable in all aspects of research showing information in varying time frames. This product is unique — currently available only at GMGI Solutions Ltd. We have designed and developed different types of dashboards such as Strategic, Operational, Analytical, Tactical and Geospatial dashboards. We have provided our best support to clients including Mahidol Oxford Tropical Research Unit (MORU), UNOPS & FCDO, GTCL, JICA, iTPA, a2i, DGHS, UNDP & UNICEF.",
  },
  {
    id: 6,
    title: "Scenario Planning",
    content:
      "Today with existing technology the probability of achieving anything and everything is endless. Even so, many of us don't know how to follow through with our initiative due to a lack of proper information and planning. We use our existing resources and database to conduct Scenario Planning — a cohesive conglomeration of interrelated and interdependent parts which can be natural or human-made. Every system is bounded by space and time, influenced by its environment, defined by its structure and purpose, and expressed through its functioning making the path to realizing your initiative smooth and practical.",
  },
  {
    id: 7,
    title: "Feasibility Study",
    content:
      "We offer feasibility study examining existing literature and similar action plans, survey works, related issues, policies and approaches, stakeholders, business dynamics — taking all factors (social, economic, legal etc.) into consideration to unveil the strengths and weaknesses by doing a thorough analysis to find the rationale to implement a project. Bangladesh has a lot left to explore and achieve, thinking of implementing something groundbreaking but don't yet know if it is all possible? Count on us to conduct a Feasibility Study of your projects.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function DoubleChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4ade80"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="7 13 12 18 17 13" />
      <polyline points="7 7 12 12 17 7" />
    </svg>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 border-b-2 border-teal-300 px-5 py-4 text-left transition-colors duration-150"
      >
        <div className="flex items-center gap-3">
          <DoubleChevronIcon open={isOpen}/>
          <span className="text-white font-bold text-md">{item.title}</span>
        </div>
        {/* <span className="text-white/70 shrink-0">
          <ChevronIcon />
        </span> */}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-150" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 pt-1 text-black bg-[#CFECE7] text-md leading-relaxed">
          {item.content}
        </p>
      </div>
    </div>
  );
}

export default function WhatMakesUsDifferent() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section>
        <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 text-center py-1">What Makes Us Different</h1>
      <div className="max-w-6xl mx-auto p-3">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-700 text-xl md:text-2xl text-center leading-none">
              Businesses and organizations are constantly looking for innovative
              solutions to stay ahead of the competition in today&apos;s
              fast-paced and constantly changing world. Our broad range of
              mapping solutions, mobile data collection, accessibility
              assessment, big data handling, scenario planning, feasibility
              studies, and more are the main factors that set us apart from the
              competition.
            </p>
          </div>

          <div className="lg:w-1/2 w-full overflow-hidden">
            {accordionItems.map((item, index) => {
              const totalItems = accordionItems.length;
              
              // Calculate start and end ratios for each item's individual gradient segment
              const ratioStart = index / totalItems;
              const ratioEnd = (index + 1) / totalItems;

              // Helper to interpolate RGB values
              const interpolate = (start, end, ratio) => Math.round(start + ratio * (end - start));

              // Start Color (Navy)
              const c1 = `rgb(${interpolate(27, 20, ratioStart)}, ${interpolate(42, 159, ratioStart)}, ${interpolate(122, 189, ratioStart)})`;
              
              // End Color (Teal)
              const c2 = `rgb(${interpolate(27, 20, ratioEnd)}, ${interpolate(42, 159, ratioEnd)}, ${interpolate(122, 189, ratioEnd)})`;

              // Create a linear gradient for the background property
              const bg = `linear-gradient(to bottom, ${c1}, ${c2})`;

              return (
                <div key={item.id} style={{ background: bg }}>
                  <AccordionItem
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => toggle(item.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}