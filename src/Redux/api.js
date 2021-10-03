import axios from "axios";
import { actions } from "./Slice";
import { store } from "./store";
import { createAction } from "@reduxjs/toolkit";

export const ApiCall = createAction("apiCall");

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== ApiCall.type) return next(action);

    // next(action); // Optional: to show in devtools

    const state = store.getState();
    if (!state.products.length) {
      const { data } = await axios.get(action.payload.url);
      dispatch(actions.UpdateProducts({ data }));
    }
  };

export default api;
