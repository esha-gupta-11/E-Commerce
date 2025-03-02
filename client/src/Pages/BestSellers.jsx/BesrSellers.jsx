import React from 'react'
import {Card,CardHeader, CardBody, CardFooter, Typography, Button,} from "@material-tailwind/react"

export default function BesrSellers() {
  
  return (
   
    <div className='mt-12'>
      <h1 className='text-center text-5xl'>Best Sellers</h1>
      <div className='flex gap-10 flex-wrap h-full'>
{/* card  1 */}
<Card className="w-80 mt-40 ml-10">
          <CardHeader shadow={false} floated={false} className="h-64">
            <img src="1.png" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">SunScreen</Typography>
              <Typography color="blue-gray" className="font-medium">$95.00</Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-col items-center">
            
              <Button
                
                ripple={false}
                fullWidth={true}
                className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              > Add to Cart</Button>
           
          </CardFooter>
        </Card>
  
{/* card  2 */}
    <Card className="w-80 mt-40">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="2.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Add to Cart
        </Button>
      </CardFooter>
    </Card>
{/* card  3 */}
    <Card className="w-80 mt-40">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="3.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Add to Cart
        </Button>
      </CardFooter>
    </Card>
{/* card  4 */}
    <Card className="w-80 mt-40 ">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="4.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ">Add to Cart </Button>
      </CardFooter>
    </Card>
{/* card  5*/}
    <Card className="w-80 mt-10 ml-10">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="5.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Add to Cart
        </Button>
      </CardFooter>
    </Card>
{/* card  6 */}
    <Card className="w-80 mt-10 ">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="2.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ">Add to Cart </Button>
      </CardFooter>
    </Card>

    {/* card  7 */}
    <Card className="w-80 mt-10">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="4.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Add to Cart
        </Button>
      </CardFooter>
    </Card>
{/* card  8*/}
    <Card className="w-80 mt-10 ">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src="5.png" alt="card-image" className="h-full w-full object-cover"/>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium"> SunScreen</Typography>
          <Typography color="blue-gray" className="font-medium"> $95.00</Typography>
        </div>
        <Typography variant="small"color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ">Add to Cart </Button>
      </CardFooter>
    </Card>
  </div>
    </div>
  )
}
