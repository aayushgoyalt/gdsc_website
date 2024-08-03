import React from 'react'
import HeroSection from '../components/HomeComponents/HeroSection'
import AboutUs from '../components/HomeComponents/AboutUs'
import OurProjects from '../components/HomeComponents/OurProjects'
import OurTeam from '../components/HomeComponents/OurTeam'


const Home = () => {
  return (
    <div>
        <div className="herosection">
            <HeroSection />
        </div>
        <div className="flex w-full justify-center ">
            <AboutUs/>
        </div>
        <div className=" mt-20 h-[80vh]">
            <OurProjects/>
        </div>
        <div className=" mt-20 h-[80vh]">
            <OurTeam/>
        </div>
    </div>
  )
}

export default Home