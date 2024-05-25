import { X } from 'lucide-react'
import React from 'react'

function CertificatesShow({img}) {
  return (
    <div className='bg-black/10 backdrop-blur-sm max-w-full h-[1100px]'>
        <button>{X}</button>
       <div className="">
        <img src={img} alt="" />
        </div> 
    </div>
  )
}

export default CertificatesShow