import React from 'react'
import semp from '../Images/semp.png';
import { js, react, tailwindcss } from '../Images/AllImagesExport';
import { Link } from 'react-router-dom';
function Projects({ projectImage = semp, Name = 'add project name', skillsNumber = 1 }) {
  return (
    <>
      <Link to={'prjects'}>

        <div className="max-w-[450px]  h-full max-h-[500px] overflow-y-hidden relative rounded-3xl">
          {/* *:relative */}
          <div className="mm max-w-full h-0  z-20 ">
            <div className="flex flex-wrap-reverse absolute bottom-[4%] gap-2   ml-4 ">
              {/* Project Name top-[395px] */}
              <div className=" text-xl py-2 px-5 max-w-[305px] max-h-[159.5px] backdrop-blur-md bg-black/30 rounded-full">
                <span className=''>{Name}</span>
              </div>

              {/* project use language/ */}
              <div className="flex *:backdrop-blur-md *:bg-color3/10 *:rounded-full relative ">
                <div className=" w-[40px] h-[40px] flex items-center justify-center  p-1.5 relative z-[100]">
                  <img src={js} className='w-[29px] rounded-full' alt="" />
                </div>

                <div className=" w-[40px] h-[40px] flex items-center justify-center p-1.5 relative -left-5 z-[90]">
                  <img src={react} className='w-[29px]' alt="" />
                </div>
                <div className=" w-[40px] h-[40px] flex items-center justify-center p-1.5 relative -left-9 z-[80]">
                  <img src={tailwindcss} className='w-[29px]' alt="" />
                </div>
                <div className=" w-[40px] h-[40px] flex items-center justify-center p-1.5 relative -left-[49px] z-[70]">
                  {/* <img src={tailwindcss} className='w-[29px]' alt="" /> */}
                  +{skillsNumber}
                </div>
              </div>
            </div>
          </div>
          {/* project images */}
          <img src={projectImage} className='' alt="" />
        </div>
      </Link>
    </>
  )
}

export default Projects