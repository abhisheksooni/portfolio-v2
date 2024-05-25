import React from 'react'
import semp from '../Images/semp.png';
import { js, react, tailwindcss } from '../Images/AllImagesExport';
import { Link } from 'react-router-dom';
function Projects({ projectImage = semp, Name = 'add project name', skillsNumber = 1 }) {
  return (
    <>
      <Link to={'project'}>`  `

<div className="">
  
</div>
        <div className="max-w-[100%]  lg:h-full max-h-[650px] overflow-y-hidden relative rounded-3xl mb-10">
          {/* *:relative */}
          <div className="mm max-w-full h-0 ">
            <div className="flex flex-wrap-reverse absolute bottom-[4%] gap-2  items-center ml-4 ">
              {/* Project Name */}
              <div className=" text-lg  lg:text-2xl py-1 px-4 lg:py-3 lg:px-5 max-w-[305px] max-h-[159.5px]   backdrop-blur-sm bg-color2/40 rounded-full">
                <span className='text-black'>{Name}</span>
              </div>

              {/* project use language/ */}
              <div className="flex *:backdrop-blur-md *:bg-color3/10 *:rounded-full relative *:border">
                <div className=" w-[40px] h-[40px] flex items-center justify-center  p-1.5 relative z-[100]">
                  <img src={js} className='w-[29px] rounded-full' alt="" />
                </div>

                <div className=" w-[40px] h-[40px] flex items-center justify-center p-1.5 relative -left-5 z-[90]">
                  <img src={react} className='w-[29px]' alt="" />
                </div>
                <div className=" w-[40px] h-[40px] flex items-center justify-center p-1.5 relative -left-9 z-[80]">
                  <img src={tailwindcss} className='w-[29px]' alt="" />
                </div>
                <div className=" w-[40px] h-[40px] flex items-center justify-center p-1.5 relative -left-[49px] z-[70] text-black font-semibold">
                  {/* <img src={tailwindcss} className='w-[29px]' alt="" /> */}
                  +{skillsNumber}
                </div>
              </div>
            </div>
          </div>
          {/* project images */}
          <img src={projectImage} className='w-full' alt="" />
        </div>
      </Link>
    </>
  )
}

export default Projects