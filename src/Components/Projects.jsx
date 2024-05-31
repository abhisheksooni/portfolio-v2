import React from 'react'
import semp from '../Images/semp.png';
import { github, js, react, reactrouter, redux, tailwindcss } from '../Images/AllImagesExport';
import { Link } from 'react-router-dom';
import { ArrowBigRightDash,ArrowUpRight } from 'lucide-react';
function Projects({ projectImage = semp, Name = 'add project name', skillsNumber = 1,projectlink='',addSkills }) {
  return (
    <>
      <Link target='_blank' to={projectlink} className='xl:max-w-[48%]' >
        <div className=" overflow-y-hidden relative rounded-3xl bg-color2/40 md:px-3 md:py-3 p-1.5 mb-3 md:mb-8 hover:scale-[0.98] transition-all duration-100 ease-in">
          {/* project images */}
          <img src={projectImage} className='w-[100%] rounded-3xl ' alt="" />

          <div className="flex flex-wrap mx-4 justify-between  items-center my-1 md:my-3">

{/* Project Name */}
<div className=" text-lg text-center mx-auto font-medium lg:text-2xl py-1.5 px-5 lg:py-3 lg:px-7 max-w-[305px] w-full max-h-[159.5px] backdrop-blur-sm bg-color3 rounded-full mt-3  hover:bg-white">
<span className='text-black flex items-center justify-evenly '>{Name}  <ArrowUpRight size={30} /></span>

</div>
{/* <div className=" flex py-1 px-5 lg:py-1.5 lg:px-7 max-w-[305px] max-h-[159.5px] backdrop-blur-sm bg-color2 rounded-full mt-3 border-2 hover:border-[#fff] border-color2">
<img src={github} className='max-w-[48px] w-full' alt="" />

</div> */}
{/* skills icons */}
{/* <div className="ml-4 flex flex-wrap max-w-[50px] *:m-[1px] gap-[2px] w-full">
<img src={react} className='w-[18px]' alt="" />
<img src={tailwindcss} className='w-[18px]' alt="" />
<img src={redux} className='w-[18px]' alt="" />
<img src={reactrouter} className='w-[18px]' alt="" />
</div> */}

</div>    

        </div>
      </Link>
    </>
  )
}

export default Projects