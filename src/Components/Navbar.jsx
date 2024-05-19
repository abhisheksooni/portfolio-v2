import React, { useState } from 'react'

const Navbar = () => {

  const [manu, Setmanu] = useState(false)
  const [point, Setpoint] = useState(false)

  console.log(manu);
  return (
    <>

      <div className='w-[100%] flex justify-end py-4 pr-10 cursor-pointer'>
        <div
          onClick={() => Setmanu(true)}
          onMouseEnter={() =>{ 
            Setpoint(!point)
            // setTimeout(Setmanu(true),800)
          }}
          onMouseLeave={() =>{
            // setTimeout(Setmanu(false),1000)
            setTimeout(Setpoint(false),800)
          } }
        
          
        
          className= {`  flex items-center justify-center lg:w-[220px] lg:py-3 p-3 rounded-full gap-5  bg-color2/40 hover:bg-color2/70`}>
          <span className='hidden lg:inline-block text-[25px] leading-none font-semibold text-color3'>Contect</span>
          <div className={` ${point?'bg-red-700':'bg-color3'} h-[11px] w-[11px] bg-color3 lg:mt-[4.5px] rounded-full`}></div>
        </div>
        {/* menu in pc  */}
        <div onMouseLeave={() => setTimeout(() => Setmanu(false), 500)} className={`${manu ? 'inline-block' : 'hidden'} absolute top-[90px] z-50 `}>
          <div className="flex flex-wrap bg-color2 p-5 rounded-3xl gap-3">
            <div className="bg-color3/50 w-[100px] h-[100px] rounded-2xl "></div>
            <div className="bg-color3/50 w-[100px] h-[100px] rounded-2xl "></div>
            <div className="bg-color3/50 w-[100px] h-[100px] rounded-2xl "></div>
          </div>
          <div className="bg-color2 p-5 rounded-3xl mt-2">

          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar