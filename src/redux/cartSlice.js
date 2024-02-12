import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productNumber: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if product is in array.
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productNumber += parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      state.productNumber -= productToRemove.quantity;
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const itemInc = state.products.find((item) => item.id === action.payload);
      if (itemInc.quantity >= 1) {
        itemInc.quantity += 1;
      }
      state.productNumber += 1;
    },
    decrease: (state, action) => {
      const itemDec = state.products.find((item) => item.id === action.payload);
      if (itemDec.quantity === 1) {
        const index = state.products.findIndex(
          (item) => item.id === action.payload
        );
        state.products.splice(index, 1);
      } else {
        itemDec.quantity--;
      }
      state.productNumber -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
