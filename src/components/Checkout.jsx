import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";
import { removeFromCart, increase, decrease } from "../redux/cartSlice";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const itemNumber = useSelector((state) => state.cart.productNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-amazonclone-background m-auto p-8">
      <div className="grid grid-cols-8 gap-10 ">
        {/* products */}
        <div className="col-span-6 bg-white">
          <div className="text-2xl lg:text-3xl m-4">Shopping Cart</div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                  <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                    <div className="col-span-2">
                      <img
                        className="p-4 m-auto"
                        src={product.image_small}
                        alt="product-image"
                      />
                    </div>
                    <div className="col-span-6">
                      <div className="font-medium text-black mt-2">
                        <ProductDetails product={product} ratings={false} />
                      </div>
                      <div>
                        <button
                          className="text-sm lg:text-base font-semibold rounded text-red-500 my-2"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="grid grid-cols-3 w-20 text-center">
                        <button
                          className="text-xl lg:text-2xl bg-gray-400 rounded"
                          onClick={() => dispatch(decrease(product.id))}
                        >
                          -
                        </button>
                        <div className="text-xl lg:text-2xl bg-gray-200 ">
                          {product.quantity}
                        </div>
                        <button
                          className="text-xl lg:text-2xl bg-gray-400 rounded"
                          onClick={() => dispatch(increase(product.id))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-lg lg:text-xl mt-2 mr-4 font-semibold">
                      Rs.{product.price}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="text-lg lg:text-xl text-right mb-4 mr-4">
            Subtotal ({itemNumber} items):{" "}
            <span className="font-semibold">Rs.{subtotal}</span>{" "}
          </div>
        </div>
        {/* checkout */}
        <div className=" col-span-2 rounded bg-white h-[250px] p-7">
          <div className="text-xs lg:text-sm text-green-800 mb-2">
            Your order qualifies for{" "}
            <span className="font-bold">FREE DELIVERY</span>. Delivery Details
          </div>
          <div className="text-base lg:text-lg  mb-4 ">
            Subtotal ({itemNumber} items):{" "}
            <span className="font-semibold">Rs.{subtotal}</span>{" "}
          </div>
          <button className="btn">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
