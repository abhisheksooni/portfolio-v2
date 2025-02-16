import React, { useState } from 'react'
import semp from '../Images/semp.png';
import { Link, MoveRight, X } from 'lucide-react';
import { css, figma, github, html, js, react, tailwindcss, git, html5, reactrouter, redux, gmail, whatsapp, linkedin, pwskill, webDesign, Project1, Project2 , javascriptc } from '../Images/AllImagesExport';
import { CertificatesShow, Projects, SkillsIcons } from "../Components/AllExport";
import { NavLink } from 'react-router-dom';

function Home() {

  const [certificateShow, SetcertificateShow] = useState(false)
  const [certificateName, SetcertificateName] = useState('')



  function WhatsAppLink() {
    const phoneNumber =  '+917580996325';
    const message = 'hello ji' ;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    return (
      <NavLink to={whatsappUrl} className="bg-[#25D366] p-3.5 lg:p-4 hover:bg-[#25D366]">
        <img src={whatsapp} alt="" />
      </NavLink>
    );
  }

const EmailLink = ()=>{
  const email = 'abhisheksoni.as444@gmail.com';
  const subject = 'Hello Abhishek';
  const body = 'Hi there, I am intresting your work';
const maintoUrl =`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

return(
  <NavLink to={maintoUrl} className=" p-3.5 lg:p-4  hover:bg-[#EA4335]">
  <img src={gmail} alt="" />
</NavLink>
)
  }

  return (
    <>
    <section className=' relative lg:flex w-full gap-10 max-w-[1800px] md:px-[40px] xl:px-[80px] lg:py-4 mx-auto '>
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
      <section className='hidden lg:inline-block stickyd top-16 z-50 *:mb-5 *:bg-color2/40 w-[33%] text-color3 *:rounded-3xl hover:*:scale-[0.98] *:transition-all  *:duration-100 ease-in'>
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
            <p>October-2024</p>
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
            <div className="*:mb-3 cursor-pointer transition-all ">
              <div className=" flex items-center gap-5 *:duration-100">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj" className='rounded-full hover:scale-110 duration-100' alt="" />
                </div>
                <NavLink  to={'https://www.youtube.com/@chaiaurcode'} target='_blank' className={`text-lg hover:text-color3/60  font-semibold `}>Hitesh Choudhary</NavLink>
              </div>
              <div className=" flex items-center gap-5 *:duration-100">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://yt3.googleusercontent.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s160-c-k-c0x00ffffff-no-rj" className='rounded-full hover:scale-110 duration-100' alt="" />
                </div>
                <NavLink  to={'https://www.youtube.com/@piyushgargdev'} target='_blank' className={`text-lg hover:text-color3/60  font-semibold`}>Piyush Garg</NavLink>
              </div>
              {/* <div className=" flex items-center gap-5 *:duration-100">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_400x400.png" className='rounded-full hover:scale-110 duration-100' alt="" />
                </div>
                <NavLink to={'https://www.youtube.com/@CodeWithHarry'} target='_blank'  className={`text-lg hover:text-color3/60  font-semibold`}>Haris Ali Khan | CodeWithHarry</NavLink >
              </div> */}
              <div className=" flex items-center gap-5 *:duration-100">
                <div className="w-[65px] h-[65px] rounded-full bg-black">
                  <img src="https://yt3.googleusercontent.com/ytc/AIdro_mQczyuvnXgEq8fApoOXpG2Yw_JKYqRA7kVOhNFuHLz9Vc=s160-c-k-c0x00ffffff-no-rj" className='rounded-full hover:scale-110 duration-100' alt="" />
                </div>
                <NavLink to={'https://www.youtube.com/@KevinPowell'} target='_blank'  className={`text-lg hover:text-color3/60 font-semibold`}>Kevin Powell</NavLink >
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
          <div className="*:bg-black *:rounded-full mt-5 flex gap-3 flex-wrap *:max-w-[80px] *:w-full *:max-h-[80px]  *:cursor-pointer transition-all *:duration-100">
          <NavLink to={'https://github.com/abhisheksooni'} target='_blank' className="bg-black p-3.5 lg:p-4  ">
              <img src={github} alt="" />
            </NavLink>
            
            <NavLink to={'https://www.linkedin.com/in/abhisheksooni81/'} target='_blank' className="bg-black p-3  hover:bg-[#0A66C2] ">
              <img src={linkedin} className='rounded-full  alt=""' />
            </NavLink>

           {/* whatsapp link function */}
            <WhatsAppLink/>
           {/* Email link function */}
            <EmailLink/>
           
          </div>
        </div>
      </section>
      {/* Right box */}
      <section className='lg:w-[65%] text-color3 mx-5 *:mx-auto lg:mx-auto '>
        {/* About us */}
        <div className=" hidden md:grid bg-color2/40 lg:w-[95%] rounded-3xl px-5 lg:px-10 py-6 mb-10 mx-auto hover:scale-[0.98] transition-all duration-100 ease-in">
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
        <div className="bg-color2/40 lg:w-[95%] rounded-3xl px-5 lg:px-10 py-6 mb-10  ">

          <div className="flex items-center justify-between">
            <div className="lg:px-4 flex items-center gap-4">
              <div className={` h-[11px] w-[11px] bg-color3 flex lg:mt-[4.5px] rounded-full`}></div>
              <p className="font-semibold text-2xl ">Certificates </p>
            </div>

            <NavLink to={'certificates'} className=' bg-black px-5 py-1 rounded-full flex gap-3'> <span className='hidden md:flex'>more. </span><MoveRight /></NavLink>
          </div>

          <div className="lg:*:max-w-[320px] justify-start *:min-w-[200px] lg:*:min-w-[300px] *:cursor-pointer mt-6 *:rounded-xl flex gap-5  overflow-x-scroll hover:*:scale-[0.98] transition-all *:duration-100">
            <div onClick={()=>{
              SetcertificateName(pwskill)
              SetcertificateShow(true)
              window.scroll({top:0, behavior:'smooth'})
            }} className=" bg-black p-1 m-auto ">
              <img src={pwskill}  className='rounded-sm ' alt="" />
            </div>

            <div onClick={()=>{
              SetcertificateName(html)  
              SetcertificateShow(true)
              window.scroll({top:0, behavior:'smooth'})
            }} className="">
              <img src={html} className='rounded-xl' alt="" />
            </div>
            

            <div onClick={()=>{
              SetcertificateShow(true)
              SetcertificateName(javascriptc)  
              window.scroll({top:0, behavior:'smooth'})
            }} className="">
              <img src={javascriptc} className='rounded-xl' alt="" />
            </div>
            {/* <div onClick={()=>{
              SetcertificateShow(true)
              SetcertificateName(webDesign)  
              window.scroll({top:0, behavior:'smooth'})
            }} className="">
              <img src={webDesign} className='rounded-xl' alt="" />
            </div> */}

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
            <img src={redux} className='w-[70px]' alt="" />
            <img src={git} alt="" />
            <img src={github} alt="" />
            <img src={figma} className='rounded-sm lg:w-[80px]' alt="" />
            <div className="">
            <svg role="img" fill='#00C7B7' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Netlify</title><path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"/></svg>
            </div>
            <div className="">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
            </div>
            <div className="">
            <img src={"https://nodejs.org/static/logos/jsIconGreen.svg"} className='rounded-sm lg:w-[80px] text-[#5FA04E]' alt="" />
            </div>
            <div className="">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
            </div>
            <div className="">
            <svg role="img" fill='#47A248' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
            
            </div>

          </div>
        </div>
        {/* Projects */}
        <div className=" lg:w-[95%]  rounded-3xl mb-10">
          <div className="px-14 bg-color2/40 rounded-3xl w-fit py-2 flex items-center gap-4 mx-auto lg:mx-0">
            <div className={` h-[11px] w-[11px] bg-color3 lg:mt-[4.5px] rounded-full`}></div>
            <span className="font-semibold text-2xl  ">Projects </span>
          </div>
          <div className="mt-8 flex flex-wrap w-[100%] gap-6  ">
            <Projects Name='FORCE Brand'  projectImage={Project1} projectlink='https://force-brand.vercel.app/' />
            <Projects Name='Gym Mate' projectImage={Project2} projectlink='https://gym-mate-ab.vercel.app/' />
            {/* <Projects /> */}
            {/* <Projects /> */}
          </div>
        </div>
      </section>

    </section>

   {/* certificate showing section */}

<section  className={`${certificateShow?'flex overflow-y-hidden':'hidden'}  flex-col  absolute p-5 top-0 z-[1000] bg-color2/40 backdrop-blur-md w-[100%] h-[120%] lg:h-[100%]`}>
    <div onClick={()=>SetcertificateShow(false)} className="absolute right-5 cursor-pointer"><X size={50} color='red'/></div>
 
    <img src={certificateName} className='max-w-[1125px] w-full  mx-auto mt-[35vh] md:mt-12 ' alt="" />
    
     </section>
{console.log(certificateName)}

    </>
  )
}

export default Home
