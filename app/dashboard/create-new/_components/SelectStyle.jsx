"use client";

import React, { useState } from "react";
import Image from "next/image";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    {
      name: "Realistic",
      image: "/real.webp",
    },
    {
      name: "Cartoon",
      image: "/Cartoon.avif",
    },
    {
      name: "Comic",
      image: "/comic.png",
    },
    {
      name: "WaterColor",
      image: "/watercolor2.jpg",
    },
    {
      name: "GTA",
      image: "/gta.jpg",
    },
    {
      name: "Historic",
      image: "/Historic.jpg",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-violet-700">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div
            key={index}
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
           ${selectedOption === item.name && "border-4 border-violet-700"}`}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="h-40 object-cover rounded-lg w-full"
              onClick={() => {
                setSelectedOption(item.name);
                onUserSelect("imageStyle", item.name);
              }}
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
