import { register } from "swiper/element/bundle";
register();
import category1 from "../assets/images/category_1.jpg";
import category2 from "../assets/images/category_2.jpg";
import category3 from "../assets/images/category_3.jpg";
import category4 from "../assets/images/category_4.jpg";
import category5 from "../assets/images/category_5.jpg";

const CarouselCategory = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <swiper-container
        space-between="100"
        navigation="true"
        slides-per-view="4"
        loop="true"
      >
        <swiper-slide>
          <img src={category1} alt="category" />
        </swiper-slide>
        <swiper-slide>
          <img src={category2} alt="category" />
        </swiper-slide>
        <swiper-slide>
          <img src={category3} alt="category" />
        </swiper-slide>
        <swiper-slide>
          <img src={category4} alt="category" />
        </swiper-slide>
        <swiper-slide>
          <img src={category5} alt="category" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default CarouselCategory;
