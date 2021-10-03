import Navigation from "./Navigation";
import React, { useContext } from "react";
import Product from "./CommonComponents/product";
import "../css/tailwind.css";
import { useSelector } from "react-redux";

export default function Shop() {
  // const { products } = useContext(Context);
  const { products } = useSelector((state) => state);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-2xl lg:px-8 xl:w-11/12">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-14">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Navigation currentItem="HOME" />
    </div>
  );
}
