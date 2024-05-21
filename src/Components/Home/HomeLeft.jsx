import React from "react";
import {
  gmail,
  github,
  linkedin,
  twitter,
  react,
} from "../../Images/AllImagesExport";
import { SkillsIcons } from "../AllExport";
function HomeLeft() {
  return (
    // Home Left
    <div className="border-2 w-full lg:max-w-[35%] rounded-[35px]">
      {/* avtar name info */}
      <div className=" flex flex-wrap justify-center py-6">
        <div className=" w-52 h-52 rounded-full bg-slate-700">
          <img src="" alt="" />
        </div>
        <div className=" mt-7">
          <h1>Abhishek soni</h1>
          <p>Front-end</p>
        </div>
      </div>

      <div className="mx-auto lg:px-12 my-4">
        <p className="font-semibold text-center lg:text-start text-xl">Skills - </p>
        <div className="">
          <SkillsIcons />
        </div>
      </div>
      {/* media links */}
      <div className=" flex flex-wrap justify-center w-full lg:w-[450px] mx-auto gap-4">

        <div className=" flex flex-wrap justify-center mx-auto gap-4">

          <div className=" bg-[#181717] min-w-[130px] lg:w-[200px] py-1 rounded-full ">
            <img src={github} className="h-14  mx-auto p-2" alt="" />
          </div>

          <div className="bg-[#EA4335] min-w-[130px] lg:w-[200px] py-1 rounded-full ">
            <img src={gmail} className="h-14  mx-auto p-2" alt="" />
          </div>
        </div>

        <div className=" flex flex-wrap-reverse justify-center items-center gap-4 mb-5">
          <div className=" w-full  max-w-[200px] h-[135px] rounded-[25px] border-2">

          </div>

          <div className="flex lg:flex-col gap-4">
            <div className="bg-[#0A66C2] min-w-[130px] lg:w-[200px] py-1 rounded-full ">
              <img src={linkedin} className="h-14  mx-auto p-2" alt="" />
            </div>

            <div className="bg-[#1D9BF0] min-w-[130px] lg:w-[200px] py-1 rounded-full ">
              <img src={twitter} className="h-14  mx-auto p-2" alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLeft;
