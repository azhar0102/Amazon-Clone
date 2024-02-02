import React from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-light_blue">
      HomePage
      <Carousel />
      <HomePageCard />
      <CarouselProduct />
      <CarouselCategory />
    </div>
  );
};

export default HomePage;
