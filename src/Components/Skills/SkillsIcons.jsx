import React from 'react'
import { react, reactrouter,redux,tailwindcss,css ,js} from '../../Images/AllImagesExport'
function SkillsIcons() {

const skill = [
    {
        Name:"React Js",
        icon:react,
    },
    {
        Name:"React Router",
        icon:reactrouter,
    },
    {
        Name:"JavaScript",
        icon:js,
    },
    {
        Name:"Redux-Toolkit",
        icon:redux,
    },
    {
        Name:"Css",
        icon:css,
    },
    {
        Name:"tailwindCss",
        icon:tailwindcss,
    },
]

  return (
    <div className=' flex flex-wrap gap-2'>
        {
            skill.map((i)=>(
                <>
                <div key={i.Name} className="py-0.5 flex border rounded-full pl-2  pr-[10px] text-white">
                            <img src={i.icon} className=' w-4 mr-1 rounded-full' alt={i.Name} />
                            <p className='text-sm'>{i.Name}</p>
                        </div>
                        </>
            ))
        }
         
    </div>
  )
}

export default SkillsIcons