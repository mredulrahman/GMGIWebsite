import Hero from '@/components/Hero';
import AboutSection from './home/about';
import LatestnewsSection from './home/latestnews';
import MissionSection from './home/mission';
import WorkSection from './home/work';
import WhatMakesUsDifferent from './home/info';
import ProjectsSection from './home/projects';
import ExpertTeam from './home/team';
import SurveyEquipment from './home/survey';
import OurClients from './home/client';


export default function Home() {
    return (
        <>
            <Hero />
            <div className="relative bg-[url('/dashboard/abstract-geometric-white-background-free-vector.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-teal-200/20 pointer-events-none"></div>
                <div className="relative z-10">
                    <AboutSection />
                    <MissionSection />
                    <LatestnewsSection />
                    <WorkSection />
                    <WhatMakesUsDifferent />
                    <ProjectsSection />
                    <ExpertTeam />
                    <SurveyEquipment />
                </div>
            </div>
            <OurClients />
        </>
    );
}