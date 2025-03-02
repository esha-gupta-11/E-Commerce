import React from 'react'
import {Card,CardHeader, CardBody, CardFooter, Typography, Button,} from "@material-tailwind/react"
import BesrSellers from '../BestSellers.jsx/BesrSellers'
export default function SkinCare() {
  return (
    <>
    <div className='flex'>
      <div className='left-div flex'>
        <img src="Skincareimg.png" alt="skincare" srcset=""  className='w-[720px]'/>
      </div>
      <div className='right-div flex '>
        <div className='w-[800px] bg-green-50 text-center justify-items-center pt-50 text-5xl '>SkinCare</div>
      </div>
    </div>
  
  <BesrSellers/>
    </>
  )
}
