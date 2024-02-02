import React from "react";

const CarouselProduct = () => {
  return (
    <div>
      <swiper-container
        space-between="10"
        navigation="true"
        slides-per-view="7"
        // loop="true"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <swiper-slide>
            <img
              src={`../assets/images/product_${i}_small.jpg`}
              alt="Product_category"
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default CarouselProduct;
