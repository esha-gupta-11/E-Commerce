import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import useStore from "../../Context/StoreContext";

const Wishlist = () => {
  const { wishlist = [], removeFromWishlist } = useStore();

  return (
    <div className="mt-29 px-6">
      <h1 className="text-center text-4xl font-semibold">Wishlist</h1>
      <div className="flex gap-10 flex-wrap justify-center mt-10">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <Card key={item.id} className="w-80">
              <CardHeader shadow={false} floated={false} className="h-64">
                <img src={item.image_link} alt={item.name} className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">{item.name}</Typography>
                  <Typography color="black" className="font-bold">₹{item.price}</Typography>
                </div>
                <Typography variant="small" color="gray" className="opacity-75">
                  <span className="line-through text-gray-400">₹{item.originalPrice}</span> | {item.discount}% Off
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 flex justify-between">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-black text-white hover:scale-105 transition-all"
                >
                  Add to Cart
                </Button>
                <Button
                  ripple={false}
                  className="bg-gray-700 text-white hover:scale-105 transition-all"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No items in wishlist</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
