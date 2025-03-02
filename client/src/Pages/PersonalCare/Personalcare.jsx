import React from 'react'
import BesrSellers from '../BestSellers.jsx/BesrSellers'

export default function Personalcare() {
  return (
    <>
      <div className='flex'>
      <div className='left-div flex'>
        <img src="Personalcare_banner.png" alt="personalcare" srcset=""  className='w-[720px]'/>
      </div>
      <div className='right-div flex '>
        <div className='w-[800px] bg-green-50 text-center justify-items-center pt-50 text-5xl '>PersonalCare</div>
      </div>
      
    </div>
    <BesrSellers/>
    </>
  )
}
