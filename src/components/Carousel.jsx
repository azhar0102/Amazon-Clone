import { register } from "swiper/element/bundle";
register();

import carousel_vid from "../assets/images/carousel_vid.mp4";
import carousel_1 from "../assets/images/carousel_1.jpg";
import carousel_2 from "../assets/images/carousel_2.jpg";
import carousel_3 from "../assets/images/carousel_3.jpg";
import carousel_4 from "../assets/images/carousel_4.jpg";
import carousel_5 from "../assets/images/carousel_5.jpg";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <swiper-container
        class="swiper-container"
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation="true"
      >
        <swiper-slide>
          <img src={carousel_1} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={carousel_2} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={carousel_3} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={carousel_4} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={carousel_5} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <video controls muted="muted">
            <source src={carousel_vid} type="video/mp4" />
          </video>
        </swiper-slide>
      </swiper-container>
      <div className=" h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
