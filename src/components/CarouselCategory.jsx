import { register } from "swiper/element/bundle";
import "swiper/css";
register();
import category0 from "../assets/images/category_0.jpg";
import category1 from "../assets/images/category_1.jpg";
import category2 from "../assets/images/category_2.jpg";
import category3 from "../assets/images/category_3.jpg";
import category4 from "../assets/images/category_4.jpg";
import category5 from "../assets/images/category_5.jpg";
import { useNavigate, createSearchParams } from "react-router-dom";

const CarouselCategory = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <swiper-container
        space-between="100"
        navigation="true"
        slides-per-view="4"
        // loop="true"
      >
        <swiper-slide onClick={() => searchCategory("Deals")}>
          <img className="cursor-pointer" src={category0} alt="category" />
        </swiper-slide>
        <swiper-slide onClick={() => searchCategory("Amazon")}>
          <img className="cursor-pointer" src={category1} alt="category" />
        </swiper-slide>
        <swiper-slide onClick={() => searchCategory("Fashion")}>
          <img className="cursor-pointer" src={category2} alt="category" />
        </swiper-slide>
        <swiper-slide onClick={() => searchCategory("Computers")}>
          <img className="cursor-pointer" src={category3} alt="category" />
        </swiper-slide>
        <swiper-slide onClick={() => searchCategory("Home")}>
          <img className="cursor-pointer" src={category4} alt="category" />
        </swiper-slide>
        <swiper-slide onClick={() => searchCategory("Mobiles")}>
          <img className="cursor-pointer" src={category5} alt="category" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default CarouselCategory;
