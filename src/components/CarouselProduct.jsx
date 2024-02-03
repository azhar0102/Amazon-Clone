import product_0 from "../assets/images/product_0_small.jpg";
import product_1 from "../assets/images/product_1_small.jpg";
import product_2 from "../assets/images/product_2_small.jpg";
import product_3 from "../assets/images/product_3_small.jpg";
import product_4 from "../assets/images/product_4_small.jpg";
import product_5 from "../assets/images/product_5_small.jpg";
import product_6 from "../assets/images/product_6_small.jpg";
import product_7 from "../assets/images/product_7_small.jpg";
import product_8 from "../assets/images/product_8_small.jpg";
import product_9 from "../assets/images/product_9_small.jpg";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <swiper-container
        space-between="10"
        navigation="true"
        slides-per-view="7"
        // loop="true"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <swiper-slide key={i}>
            <img src={eval(`product_${i}`)} alt="Product_category" />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default CarouselProduct;
