import product_0 from "../assets/images/product_0_small.jpg";
import product_1 from "../assets/images/product_1_small.jpg";
import product_2 from "../assets/images/product_2_small.jpg";
import product_3 from "../assets/images/product_3_small.jpg";
import product_4 from "../assets/images/product_4_small.jpg";
import product_5 from "../assets/images/product_5_small.jpg";
import product_6 from "../assets/images/product_6_small.jpg";
import product_7 from "../assets/images/product_7_small.jpg";
import product_8 from "../assets/images/product_8_small.jpg";
import { Link } from "react-router-dom";

const CarouselProduct = () => {
  const productList = [
    product_0,
    product_1,
    product_2,
    product_3,
    product_4,
    product_5,
    product_6,
    product_7,
    product_8,
  ];
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <swiper-container
        space-between="10"
        navigation="true"
        slides-per-view="7"
      >
        {productList.map((product, index) => (
          <div className="swiper-slide" key={index}>
            <Link to={`/product/${index}`}>
              <img src={product} alt="Product_category" />
            </Link>
          </div>
        ))}
      </swiper-container>
    </div>
  );
};

export default CarouselProduct;
