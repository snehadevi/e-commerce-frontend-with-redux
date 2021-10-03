import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import api from "./api";
import { ApiCall } from "./api";

export const getProducts = () =>
  ApiCall({ url: "https://fakestoreapi.com/products" });

const persistConfig = {
  key: " root",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export const persistor = persistStore(store);
