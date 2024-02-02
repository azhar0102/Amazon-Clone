import React from "react";
import { data } from "../data/data";
data;

const HomePageCard = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <>
          <div key={item.id} className="h-[450px] bg-white">
            <div className="text-lg xl:text-xl font-semibold">{item.title}</div>
            <div className="h-[300px] m-4">
              <img
                className="h-[100%] w-[100%] object-cover "
                src={item.img}
                alt="product-image"
              />
            </div>
            <div className="text-xs xl:text-sm text-blue-400 ml-4">
              {item.link}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HomePageCard;
