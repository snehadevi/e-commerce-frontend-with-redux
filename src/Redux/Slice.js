import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "state",
  initialState: {
    products: [],
    selectedProducts: [],
    counts: {},
    countTotal: 0,
    orderList: [],
    orderCount: {},
    customerInfo: {},
    shippingDetails: {},
  },

  reducers: {
    UpdateProducts: (state, action) => {
      state.products = action.payload.data;
    },

    Increment: (state, action) => {
      const { product } = action.payload;
      if (!state.counts[product.id]) {
        state.selectedProducts.push(product);
      }
      state.counts[product.id] = (state.counts[product.id] || 0) + 1;

      state.countTotal += 1;
    },

    Decrement: (state, action) => {
      const { product } = action.payload;
      const index = state.selectedProducts.indexOf(product);

      state.counts[product.id] = Math.max(state.counts[product.id] - 1, 0);
      if (state.counts[product.id] === 0)
        state.selectedProducts = state.selectedProducts.filter(
          (item) => item.id !== product.id
        );
      state.countTotal -= 1;
    },

    ClearCart: (state, action) => {
      state.selectedProducts = [];
      state.countTotal = 0;
      state.counts = {};
    },

    HandleInput: (state, action) => {
      const { product, value } = action.payload;
      //console.log(value);
      value !== ""
        ? (state.counts[product.id] = Math.max(value, 1))
        : (state.counts[product.id] = "");
      if (state.counts[product.id] === 0) {
        const index = state.selectedProducts.findIndex(
          (p) => p.id === product.id
        );
        //console.log(index, "here");
        state.selectedProducts.splice(index, 1);
      }
      let sum = 0;
      for (let c of Object.values(state.counts)) {
        sum += c;
      }
      state.countTotal = sum;
    },

    RemoveProduct: (state, action) => {
      const { product } = action.payload;
      const index = state.selectedProducts.findIndex(
        (p) => p.id === product.id
      );
      state.selectedProducts.splice(index, 1);
      state.countTotal -= state.counts[product.id];
      state.counts[product.id] = 0;
    },

    Submit: (state, action) => {
      state.orderList = state.selectedProducts;
      state.orderCount = state.counts;
      state.selectedProducts = [];
      state.countTotal = 0;
      state.counts = {};
    },

    CustomerDetails: (state, action) => {
      const { key, value } = action.payload;
      state.customerInfo[key] = value;
      console.log(state.customerInfo);
    },

    // ShippingAddress: (state, action) => {
    //   const { key, value } = action.payload;
    //   state.shippingDetails.push({ key: value });
    // },
  },
});

export const actions = Slice.actions;
export default Slice.reducer;
