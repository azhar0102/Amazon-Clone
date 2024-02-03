import React from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";
import banner from "../assets/images/banner_image.jpg";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <NavBar />
      <Carousel />
      <HomePageCard />
      <CarouselProduct />
      <CarouselCategory />
      <div className="h-[200px]">
        <img className="h-[100%] mx-auto" src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default HomePage;
