import React from "react";
import { data } from "../data/data";
import banner from "../assets/images/banner_image_2.jpg";

const HomePageCard = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 -mt-80">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <div className="h-[420px] bg-white z-30 m-3">
            <div className="text-lg lg:text-xl font-semibold ml-4">
              {item.title}
            </div>
            <div className="h-[300px] m-4">
              <img
                className="h-[100%] w-[100%] object-cover "
                src={item.img}
                alt="product-image"
              />
            </div>
            <div className="text-xs lg:text-sm text-blue-400 ml-4">
              {item.link}
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="m-3 pt-8">
        <img className="lg:hidden" src={banner} alt="banner-img" />
      </div>
    </div>
  );
};

export default HomePageCard;
