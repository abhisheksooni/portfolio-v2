import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center flex-col sm:flex-row items-center gap-5 text-color3 text-xl mb-6'>
        <span className='hidden sm:grid'>Copy Right By </span>
        <div className="avtar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full hover:scale-110 transition-all duration-150  hover:w-[90px] cursor-pointer">   </div>
        <span>Abhishek soni </span>
    </div>
  )
}

export default Footer