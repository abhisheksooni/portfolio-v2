import React from 'react'
import semp from '../Images/semp.png';
import { js, react, tailwindcss } from '../Images/AllImagesExport';
import { Projects, SkillsIcons } from "../Components/AllExport";
function Home() {
  return (
    <section className=' relative flex w-full gap-10 max-w-[1980px] lg:px-11 lg:py-7'>
      {/* Left box */}
      <section className=" hidden lg:inline-block sticky top-16 z-50 h-[80vh] bg-color2/40 w-[33%] text-color3 rounded-3xl px-7">
        {/* Name / */}
        <div className=" flex items-center justify-center gap-9 py-4">
          <div className=" text-xl font-semibold">
            <span className='text-3xl '>Abhishek Soni</span>
            <p className='mt-3'>font-end Developer</p>
          </div>
          <div className=" avtar w-[100px] bg-cover h-[180px] rounded-full"></div>
        </div>
        {/* skills */}
        <div className=" ">
          <span className="font-semibold text-xl">Skills :- </span>
          <div className="mt-3">
            <SkillsIcons />
          </div>
        </div>
      </section>
      {/* Right box */}
      <section className=" flex items-center gap-8 gap-y-0 justify-center flex-wrap px-5 lg:w-[65%] text-color3 rounded-3xl ">
        {/* Projects */}
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </section>
    </section>
  )
}

export default Home