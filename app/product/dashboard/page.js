"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEarthAsia, faSolarPanel, faLayerGroup, faChartPie, faChartColumn, faSquareCaretRight, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const StyledWrapper = styled.div`
  .container {
    // height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
  }

  .card {
    width: 100%;
    max-width: 500px;
    height: 300px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  }

  .card:hover {
    transform: rotateY(180deg) scale(1.1);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    // border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .card-front {
    // background: linear-gradient(to bottom right, #67b26f, #4ca2cd);
    // box-shadow: 0 0 20px rgba(103, 178, 111, 0.5);
    transform: rotateY(0deg);
    }
        
    .card-back {
    text-align: left;
    background-color: #42ADB7; 
    color: #fff;
    padding: 20px;
    // box-shadow: 0 0 20px rgba(252, 203, 144, 0.5);
    transform: rotateY(180deg);
  }`;

function Dashboard() {
    return (
        <section className="bg-cover bg-center bg-no-repeat min-h-screen p-4 md:p-8" style={{ backgroundImage: "url('/dashboard/abstract-geometric-white-background-free-vector.jpg')" }}>
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 lg:gap-40 mb-12">
                <div className="py-10">
                    <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 rounded-md text-center lg:text-left">Our Working Framework</h1>
                    <ul className="text-xl mt-6 space-y-4 text-gray-800">
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faMap} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />ArcGIS Online</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faLayerGroup} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />R Shiny DashBoard</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faChartPie} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />LeafletJS</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faSolarPanel} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Turf JS</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faChartColumn} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Google Mapping API</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faEarthAsia} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Map Box</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faLayerGroup} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Open Layers</li>
                    </ul>
                </div>
                <div className="py-10">
                    <h1 className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl md:text-2xl px-6 md:px-18 rounded-md text-center lg:text-left">Dashboard Element</h1>
                    <ul className="text-xl mt-6 space-y-4 text-gray-800">
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faMap} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Priority Map</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faLayerGroup} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Heatmap Layer</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faChartPie} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Pie Chart</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faSolarPanel} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Side Panel and Map Legend menu</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faChartColumn} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Bar & Line Charts</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faSquareCaretRight} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Indicators</li>
                        <li className="flex items-center gap-4 font-semibold"><FontAwesomeIcon icon={faAlignJustify} className="bg-[#07B4EB] text-black rounded-full p-2 w-11 h-11 flex items-center justify-center" />Gauge</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center mb-8 mt-16">
                <p className="px-6 md:px-18 py-2 bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl rounded-md">Checkout Our Work</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                <div>
                    <StyledWrapper>
                        <div className="container">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <Image src="/dashboard/thht.png"
                                            alt=""
                                            width={500}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />

                                    </div>
                                    <div className="card-back">
                                        <p><strong>Project Name:</strong> GTCL Pipeline Survey and GIS Preparation</p>
                                        <p><strong>Purpose of Dashboard:</strong> Real time GIS data monitoring</p>
                                        <p><strong>Dashboard Tools:</strong> Open-source platform (R shiny)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledWrapper>
                    <StyledWrapper>
                        <div className="container">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <Image src="/dashboard/rrep2.jpg"
                                            alt=""
                                            width={500}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="card-back">
                                        <p><strong>Project Name:</strong> Rural Renewable Energy Project (RREP), Sierra Leone: WP6 Matching Grant</p>
                                        <p><strong>Purpose of Making Dashboard:</strong> to improve and promote productive use in mini-grid</p>
                                        <p>Map view includes-</p>
                                        <ul className="list-disc ml-6 text-sm">
                                            <li>Grantee</li>
                                            <li>Grant Amount</li>
                                            <li>Sector</li>
                                            <li>Beneficiaries</li>
                                            <li>New jobs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledWrapper>
                </div>
                <div>
                    <StyledWrapper>
                        <div className="container">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <Image src="/dashboard/ukaid.jpg"
                                            alt=""
                                            width={500}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="card-back">
                                        <p><strong>Project Name:</strong> UKAID Livelihoods and DRR Project of Barishal City Corporation, BRC</p>
                                        <p><strong>Purpose of Making Dashboard:</strong> to support the project team to capture and monitoring data from the field. (Monitoring Dashboard)</p>
                                        <p><strong>Dashboard Tools:</strong> Open-source platform (R shiny)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledWrapper>
                    <StyledWrapper>
                        <div className="container">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <Image src="/dashboard/Undp.jpg"
                                            alt=""
                                            width={500}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="card-back">
                                        <p><strong>Project Name:</strong> Geospatial Dashboard District Development and Growth Priorities (DDGP) Cox’s Bazar, Bangladesh​, UNDP</p>
                                        <p><strong>Purpose of Dashboard:</strong> To show the development status of Cox’s Bazar district</p>
                                        <p><strong>Dashboard Tools:</strong></p>
                                        <ul className="list-disc ml-6 text-sm">
                                            <li>ArcMap</li>
                                            <li>MS Excel</li>
                                            <li>Rstudio</li>
                                        </ul>
                                        <p><strong>Data Storage Platform: </strong> Shinnyapp.io</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledWrapper>
                </div>
            </div>
            <div className="flex justify-center items-center mb-8 mt-36">
                <p className="px-6 md:px-18 py-2 bg-linear-to-b from-[#1b2a7a] to-[#149fbd] text-white font-semibold text-xl rounded-md">Checkout Our Work on youtube</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="aspect-video w-full">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/EMK3ahu6wD0" title="YouTube video player" style={{ border: 'none' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="aspect-video w-full">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/5Y5GwW8t8cc" title="YouTube video player" style={{ border: 'none' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;