"use client"
import Hero from './../../components/Hero';
import AboutSection from './about';
import LatestnewsSection from './latestnews';
import MissionSection from './mission';
import WorkSection from './work';
import WhatMakesUsDifferent from './info';
import ProjectsSection from './projects';
import ExpertTeam from './team';
import SurveyEquipment from './survey';
import OurClients from './client';


function HomePage ( ) {
    return (
        <>
            <Hero/>
            <div className="relative bg-[url('/dashboard/abstract-geometric-white-background-free-vector.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-teal-200/20 pointer-events-none"></div>
                <div className="relative z-10">
                    <AboutSection/>
                    <MissionSection/>
                    <LatestnewsSection/>
                    <WorkSection/>
                    <WhatMakesUsDifferent/>
                    <ProjectsSection/>
                    <ExpertTeam/>
                    <SurveyEquipment/>
                </div>
            </div>
                    <OurClients/>
            <h1>Home Page</h1>
        </>
    );
}

export default HomePage;