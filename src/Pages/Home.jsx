import React from 'react'
import semp from '../Images/semp.png';
import { css, figma, github, html, js, react, tailwindcss,git, html5, reactrouter, redux } from '../Images/AllImagesExport';
import { Projects, SkillsIcons } from "../Components/AllExport";
function Home() {
  return (
    <section className=' relative lg:flex w-full gap-10 max-w-[1980px] lg:px-[80px] lg:py-7'>
      <div className=" flex justify-center text-color3 lg:hidden">
        {/* avtar */}
      <div className="flex flex-col items-center  py-4">
            <div className=" avtar w-[100px] bg-cover h-[180px] rounded-full"></div>
            <div className=" text-xl text-center my-5 font-semibold">
              <p className='text-3xl '>Abhishek Soni</p>
              <p className='mt-1.5'>font-end Developer</p>
            </div>
          </div>
      </div>
      {/* Left box */}
      <section className='hidden lg:inline-block stickyd top-16 z-50 *:mb-5 *:bg-color2/40 w-[33%] text-color3 *:rounded-3xl'>
          {/* Name / */}
        <div className="  px-7">
          <div className=" flex items-center justify-center gap-9 py-4">
            <div className=" text-xl font-semibold">
              <span className='text-3xl '>Abhishek Soni</span>
              <p className='mt-3'>font-end Developer</p>
            </div>
            <div className=" avtar w-[100px] bg-cover h-[180px] rounded-full"></div>
          </div>
        </div>

        {/* Mentors */}
        <div className=" px-6 py-5">
          <div className="flex items-center gap-2.5">
          <div className={` h-[9px] w-[9px] bg-color3 lg:mt-[4px] rounded-full`}></div>
          <span className="font-semibold text-xl ">My Mentor </span>
          </div>
          <div className=" *:mb-3 mt-5">
            <div className=" flex items-center gap-5">
              <div className="w-[80px] h-[80px] rounded-full bg-black">
                <img src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj" className='rounded-full' alt="" />
              </div>
              <span className='text-lg '>Hitesh Choudhary</span>
            </div>
            <div className=" flex items-center gap-5">
              <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
              <span className='text-lg'>Add Name</span>
            </div>
            <div className=" flex items-center gap-5">
              <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
              <span className='text-lg'>Add Name</span>
            </div>

          </div>
        </div>
        {/* Education */}
        <div className="px-6 py-5">
<div className="flex items-center gap-2.5">
<div className={` h-[9px] w-[9px] bg-color3 lg:mt-[4px] rounded-full`}></div>
          <span className='font-semibold text-xl'>Education</span>
</div>
          <div className="mt-5 text-lg bg-black py-3 px-4 rounded-2xl">
            <p className='font-semibold'>Full Stack Developer ( Sigma Bach 1.0 ) </p>
            <p>PW Skills</p>
            <p>Jan-2023 to October-2023</p>
          </div>
          <div className="mt-3 text-lg bg-black py-3 px-4 rounded-2xl">
            <p className='font-semibold'>BCA </p>
            <p>PK University</p>
            <p>2018 - 2021</p>
          </div>
        </div>
        {/* Contect */}
        <div className=" px-6 py-5">
          <div className="flex items-center gap-2.5">
          <div className={` h-[9px] w-[9px] bg-color3 lg:mt-[4px] rounded-full`}></div>
          <span className="font-semibold text-xl ">Contect :- </span>
          </div>
          <div className="*:bg-black *:rounded-full mt-5 flex gap-3">
            <div className="w-[80px] h-[80px]"></div>
            <div className="w-[80px] h-[80px]"></div>
            <div className="w-[80px] h-[80px]"></div>
            <div className="w-[80px] h-[80px]"></div>
          </div>
        </div>
      </section>
      {/* Right box */}
      <section className='lg:w-[65%] text-color3 mx-5 lg:mx-0 '>
        {/* Certificates */}
        <div className="bg-color2 lg:w-[95%] rounded-3xl px-5 lg:px-10 py-6 mb-10 ">
          <div className="px-4 flex items-center gap-4">
          <div className={` h-[11px] w-[11px] bg-color3 lg:mt-[4.5px] rounded-full`}></div>
          <p className="font-semibold text-2xl ">Certificates </p>
          </div>
          <div className="lg:*:max-w-[320px] *:cursor-pointer mt-5 *:rounded-xl flex gap-5 justify-center overflow-x-scroll">
            <div className="">
            <img src={html} alt="" />
            </div>
            <div className="">
            <img src={html} alt="" />
            </div>
            <div className=" hidden lg:inline-block">
            <img src={html} alt="" />
            </div>
            
          </div>
        </div>
        {/* Skills */}
        <div className=" lg:w-[95%] rounded-3xl px-5 lg:px-14 py-6 mb-10 bg-color2">
          <div className="flex items-center gap-4">
          <div className={` h-[11px] w-[11px] bg-color3 lg:mt-[4.5px] rounded-full`}></div>
          <p className="font-semibold text-2xl  ">Skills </p>
          </div>
          <div className=" lg:*:max-w-[90px] *:w-[15vw] justify-center  *:rounded-full flex flex-wrap gap-5 lg:gap-8  mt-5">
            <img src={html5} className='rounded-sm lg:w-[80px]' alt="" />
            <img src={css} className='rounded-sm lg:w-[80px]' alt="" />
            <img src={js} alt="" />
            <img src={tailwindcss} alt="" />
            <img src={react} alt="" />
            {/* <img src={redux} className='w-[70px]' alt="" /> */}
            <img src={git} alt="" />
            {/* <img src={github} alt="" /> */}
            <img src={figma} className='rounded-sm lg:w-[80px]' alt="" />
          </div>
        </div>
        {/* Projects */}
        <div className=" lg:w-[95%]  rounded-3xl mb-10">
          <div className="px-14 bg-color2 rounded-3xl w-fit py-2 flex items-center gap-4 mx-auto lg:mx-0">
          <div className={` h-[11px] w-[11px] bg-color3 lg:mt-[4.5px] rounded-full`}></div>
          <span className="font-semibold text-2xl  ">Projects </span>
          </div>
          <div className="mt-8">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home