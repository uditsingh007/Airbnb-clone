import Image from "next/image";
import React from "react";

const SmallCard = ({ img, distance, location }) => {
  return (
    <div className="flex space-x-4 rounded-lg m-2 mt-4 items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-100 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
