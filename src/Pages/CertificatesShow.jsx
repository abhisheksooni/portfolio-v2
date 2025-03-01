import { X , MoveLeft} from 'lucide-react'
import React from 'react'
import { html, javascriptc, pwskill, webDesign } from '../Images/AllImagesExport'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function CertificatesShow() {

  const [certificateShow, SetcertificateShow] = useState(false)
  const [certificateName, SetcertificateName] = useState('')
  return (
   <>
   <section className=' my-4 md:my-[60px] md:px-[40px] lg:max-w-[1800px] '>
    <div className=" flex justify-end mr-5 md:mr-[55px]">
      <button className='text-color3 text-2xl  bg-color2/40 rounded-full px-6 py-1 font-semibold  gap-2 items-center my-5'>
        <NavLink to={"/"}  ><MoveLeft size={45} color="#E8E5DE" /> </NavLink>
      </button>
    
    </div>
   <div className="lg:*:max-w-[500px] w-full px-5 md:px-0 flex flex-wrap justify-center gap-5 *:rounded-lg">
        <img onClick={()=>{
          SetcertificateName(pwskill)  
          SetcertificateShow(true)
          window.scroll({top:0, })
        }} src={pwskill} alt="" />
        <img onClick={()=>{
              SetcertificateName(html)  
              SetcertificateShow(true)
              window.scroll({top:0, })
            }} src={html} alt="" />
        <img onClick={()=>{
              SetcertificateName(javascriptc)  
              SetcertificateShow(true)
              window.scroll({top:0, })
            }} src={javascriptc} alt="" />
        {/* <img onClick={()=>{
              SetcertificateName(webDesign)  
              SetcertificateShow(true)
              window.scroll({top:0, })
            }} src={webDesign} alt="" /> */}
      
        </div> 
   </section>

   {/* certificate showing section */}

<section  className={`${certificateShow?'flex overflow-y-hidden':'hidden'}  flex-col  absolute p-5 top-0 z-[1000] bg-color2/40 backdrop-blur-md  lg:w-[100%] h-[120%] lg:h-[100%]`}>
    <div onClick={()=>SetcertificateShow(false)} className="absolute right-5 cursor-pointer"><X size={50} color='red'/></div>
 
    <img src={certificateName} className='max-w-[1125px] w-full  mx-auto mt-[35vh] md:mt-12 ' alt="" />
    
     </section>
   </>
  )
}

export default CertificatesShow