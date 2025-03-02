import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const Wishlist = () => {
  const items = [
    { id: 1, name: "WishCare Niacinamide Oil Balance Sunscreen SPF 50", image: "1.png", price: 399, originalPrice: 499, discount: 20 },
    { id: 2, name: "WishCare Aqua Fresh Underarm Roll On Serum (50 ml)", image: "2.png", price: 299, originalPrice: 399, discount: 25 },
    { id: 3, name: "WishCare Aqua Fresh Underarm Roll On Serum (50 ml)", image: "3.png", price: 199, originalPrice: 299, discount: 33 },
    { id: 4, name: "WishCare Aqua Fresh Underarm Roll On Serum (50 ml)", image: "4.png", price: 499, originalPrice: 599, discount: 16 },
    { id: 5, name: "WishCare Aqua Fresh Underarm Roll On Serum (50 ml)", image: "5.png", price: 599, originalPrice: 699, discount: 14 },
  ];

  return (
    <div className='mt-35 ml-15'>
      <h1 className='text-center text-5xl'>Wishlist</h1>
      <div className='flex gap-10 flex-wrap h-full'>
        {items.map(item => (
          <Card key={item.id} className="w-80 mt-10">
            <CardHeader shadow={false} floated={false} className="h-64">
              <img src={item.image} alt="card-image" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">{item.name}</Typography>
                <Typography color="black" className=" font-bold">₹{item.price}</Typography>
              </div>
              <Typography variant="small" color="gray" className="font-normal opacity-75">
                Original Price: <span className="line-through">₹{item.originalPrice}</span>
                <br />
                Discount: {item.discount}%
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button ripple={false} fullWidth={true} className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
