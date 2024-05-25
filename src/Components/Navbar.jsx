import React, { useState } from 'react'
import { github, gmail, whatsapp } from '../Images/AllImagesExport';

const Navbar = () => {

  const [manu, Setmanu] = useState(false)
  const [point, Setpoint] = useState(false)
  const [fn1, Setfn1] = useState(false)
  return (
    <>

      <div className='w-[100%] flex justify-end py-4 pt-7 pr-5   max-w-[1800px] md:px-[120px]  mx-auto'>
        <button
          onClick={() => {
            Setmanu(manu?false:true)
            Setfn1(!fn1)
          }}
          //hover:bg-[#E8E5DE] text-color3 hover:text-black
          onMouseEnter={()=> {Setpoint(true)
            
          } }   
          onMouseLeave={()=>{ Setpoint(false)
         
          } }    
          className= {`   flex items-center justify-center lg:w-[220px] lg:py-3 p-3 rounded-full gap-5 text-color3 bg-color2/40 hover:bg-color2 `}>
          <span className='hidden lg:inline-block text-[25px] leading-none font-semibold '>Contect</span>
          <div className={`${fn1?'bg-red-600':'bg-color3'}  h-[11px] w-[11px] lg:mt-[4.5px] rounded-full`}></div>
        </button>
        {/* menu in pc  */}
        <div  className={`${manu ? 'inline-block' : 'hidden'} w-[90%] md:w-fit ml-5 absolute top-[75px] lg:top-[90px] z-50 cursor-pointer`}>
          <div className="flex flex-wrap *:w-[72px] justify-evenly  lg:*:w-[85px] lg:*:h-[85px] *:rounded-full  bg-color2/60 p-5 rounded-3xl gap-3 backdrop-blur-sm">
          <div className="bg-black p-3.5 lg:p-4  ">
            <img src={github} alt="" />
            </div>
            <div className="bg-[#25D366] p-3.5 lg:p-4  ">
              <img src={whatsapp} alt="" />
            </div>
            <div className="bg-[#EA4335] p-3.5 lg:p-4  ">
            <img src={gmail} alt="" />
            </div>
            
          </div>
          <div className="bg-color2/60 p-5 text-center text-color3/40 backdrop-blur-sm rounded-3xl mt-2">
          no notifications
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar