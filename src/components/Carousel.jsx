import { register } from "swiper/element/bundle";
register();

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <swiper-container
        class="swiper-container"
        pagination="true"
        autoplay={{
          delay: 1000,
        }}
        // data-swiper-autoplay="2000"
        loop="true"
        navigation="true"
      >
        <swiper-slide>
          <img src="../images/carousel_1.jpg" alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/carousel_2.jpg" alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/carousel_3.jpg" alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/carousel_4.jpg" alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/carousel_5.jpg" alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />{" "}
          </video>
        </swiper-slide>
      </swiper-container>
      <div className=" h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
