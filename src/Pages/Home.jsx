import React, { useState } from 'react'
import semp from '../Images/semp.png';
import { MoveRight, X } from 'lucide-react';
import { css, figma, github, html, js, react, tailwindcss, git, html5, reactrouter, redux, gmail, whatsapp, linkedin } from '../Images/AllImagesExport';
import { CertificatesShow, Projects, SkillsIcons } from "../Components/AllExport";
function Home() {

  const [certificateShow, SetcertificateShow] = useState(false)
  return (
    <>
   <dir>
  <input type="text" />
   </dir>
    <section className=' relative lg:flex w-full gap-10 max-w-[1800px] md:px-[40px] xl:px-[80px] lg:py-4 mx-auto'>
      {/* avtar box mobile */}
      <div className=" flex justify-center text-color3 mt-20 mb-10 lg:hidden">
        <div className="flex flex-col items-center  py-3">
          <div className=" avtar w-[100px] bg-cover h-[180px] rounded-full"></div>
          <div className=" text-xl text-center mt-10 my-6 font-semibold px-4">
            <p className='text-3xl font-bold'>Front-end Developer</p>
            <p className='mt-2 '>Hi, I'm Abhishek soni. A Passionte Front-end Developer

              Based in MP, Dinara.</p>
          </div>
        </div>
      </div>
      {/* Left box pc*/}
      <section className='hidden lg:inline-block stickyd top-16 z-50 *:mb-5 *:bg-color2/40 w-[33%] text-color3 *:rounded-3xl'>
        {/* Name / */}
        <div className="  px-7">
          <div className=" flex items-center justify-center gap-9 py-4">
            <div className=" avtar w-[100px] bg-cover h-[180px] rounded-full"></div>
            <div className=" text-xl font-semibold">
              <span className='text-3xl '>abhishek soni</span>
              <p className='mt-3'>Font-end Developer</p>
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
        {/* Mentors */}
        <div className=" px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className={` h-[9px] w-[9px] bg-color3 lg:mt-[4px] rounded-full`}></div>
            <span className="font-semibold text-xl ">My Mentor </span>
          </div>
          <div className=" *:mb-3 mt-5 flex gap-4">
            <div className="*:mb-3">
              <div className=" flex items-center gap-5">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj" className='rounded-full' alt="" />
                </div>
                <span className='text-lg '>Hitesh Choudhary</span>
              </div>
              <div className=" flex items-center gap-5">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj" className='rounded-full' alt="" />
                </div>
                <span className='text-lg '>Hitesh Choudhary</span>
              </div>
              <div className=" flex items-center gap-5">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj" className='rounded-full' alt="" />
                </div>
                <span className='text-lg '>Hitesh Choudhary</span>
              </div>
            </div>


          </div>
        </div>
        {/* Contect */}
        <div className=" px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className={` h-[9px] w-[9px] bg-color3 lg:mt-[4px] rounded-full`}></div>
            <span className="font-semibold text-xl ">Contect :- </span>
          </div>
          {/* icons */}
          <div className="*:bg-black *:rounded-full mt-5 flex gap-3 flex-wrap *:max-w-[80px] *:w-full *:max-h-[80px]  *:cursor-pointer">
            <div className="bg-black p-3  hover:bg-[#0A66C2] ">
              <img src={linkedin} className='rounded-full  alt=""' />
            </div>

            <div className="bg-black p-3.5 lg:p-4  ">
              <img src={github} alt="" />
            </div>

            <div className="bg-[#25D366] p-3.5 lg:p-4  hover:bg-[#25D366]">
              <img src={whatsapp} alt="" />
            </div>
            <div className=" p-3.5 lg:p-4  hover:bg-[#EA4335]">
              <img src={gmail} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Right box */}
      <section className='lg:w-[65%] text-color3 mx-5 *:mx-auto lg:mx-auto '>
        {/* About us */}
        <div className=" hidden md:grid bg-color2/40 lg:w-[95%] rounded-3xl px-5 lg:px-10 py-6 mb-10 mx-auto ">
          <div className="lg:pl-4 flex items-center gap-4">
            <div className={` h-[11px] w-[11px] bg-color3 flex lg:mt-[4.5px] rounded-full`}></div>
            <div className=" flex justify-between w-full">
              <p className="font-semibold text-2xl ">About me </p>

              <button className=' bg-black px-5 py-1 rounded-full '>  <div className=" flex items-center gap-2">
                <div className={` h-[15px] w-[15px] bg-color3 flex items-center justify-center rounded-full`}>
                  <div className="h-[11px] w-[11px] bg-black rounded-full "></div>
                </div>
                <span>available</span>
              </div></button>
            </div>
          </div>
          <div className="mt-4 ml-9 text-2xl">
            {/* <span>Hey </span>
              <span>i am </span>*/}
            <p className='text-4xl mb-4 font-bold'>Front-end Developer </p>
            <p>Hi, I'm Abhishek soni. A Passionte Front-end Developer </p>
            <span>Based in MP, Dinara. </span>
            <br />
            {/* <button className='bg-black rounded-full px-5 py-2 mt-4'> Rejume</button> */}
          </div>

        </div>
        {/* Certificates */}
        <div className="bg-color2/40 lg:w-[95%] rounded-3xl px-5 lg:px-10 py-6 mb-10 ">

          <div className="flex items-center justify-between">
            <div className="lg:px-4 flex items-center gap-4">
              <div className={` h-[11px] w-[11px] bg-color3 flex lg:mt-[4.5px] rounded-full`}></div>
              <p className="font-semibold text-2xl ">Certificates </p>
            </div>

            <button className=' bg-black px-5 py-1 rounded-full '><MoveRight /></button>
          </div>

          <div className="lg:*:max-w-[320px] *:cursor-pointer mt-6 *:rounded-xl flex gap-5 justify-center">
            <div onClick={()=>SetcertificateShow(true)} className="">
              <img src={html}  className='rounded-xl' alt="" />
            </div>

            <div className="">
              <img src={html} className='rounded-xl' alt="" />
            </div>

            <div className=" hidden lg:inline-block">
              <img src={html} className='rounded-xl' alt="" />
            </div>

          </div>

        </div>
        {/* Skills */}
        <div className=" lg:w-[95%] rounded-3xl px-5 lg:px-14 py-6 mb-10 bg-color2/40">
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
          <div className="px-14 bg-color2/40 rounded-3xl w-fit py-2 flex items-center gap-4 mx-auto lg:mx-0">
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

      {/* certificate */}

   <section>  </section>
      
      {console.log(certificateShow)}
    </section>
    </>
  )
}

export default Home