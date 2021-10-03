import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../Redux/Slice";
import { useSelector } from "react-redux";
import {
  ArrowRight,
  MinusCircle,
  PlusCircle,
  ShoppingCartOutline,
} from "heroicons-react";

function Product({ product }) {
  const dispatch = useDispatch();
  const { selectedProducts, counts } = useSelector((state) => state);

  const count = counts[product.id];

  return (
    <div className="shadow-xl p-3 sm:w-80">
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.image}
            alt={product.category}
            className="w-full h-full object-center object-container sm:h-80 sm:w-80 lg:w-full lg:h-full"
          />
        </div>
        <div className="h-60 sm:h-32 mt-4 flex justify-between">
          <div className="justify-between mr-5">
            <h3 className="text-sm text-gray-700">
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </div>
      <div className="justify-between">
        {!count > 0 && (
          <div className="justify-between xl:flex flex-row ">
            <a
              onClick={() => dispatch(actions.Increment({ product }))}
              className="justify-center bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 flex flex-row hover:from-pink-600 hover:to-pink-600 object-bottom"
            >
              <ShoppingCartOutline />
              <h1>Add to cart</h1>
            </a>
            <a className="justify-center bg-purple-600 rounded-full py-2 px-4 text-gray-50 my-2 xl:my-0 flex flex-row hover:bg-purple-800 object-bottom">
              <ArrowRight />
              <h1>View Details</h1>
            </a>
          </div>
        )}

        {count > 0 && (
          <a className="justify-center bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-6 text-gray-50 flex flex-row hover:from-pink-600 hover:to-pink-600 object-bottom">
            <MinusCircle
              onClick={() => dispatch(actions.Decrement({ product }))}
            />
            <h1 className="text-gray-50 mx-3">{count}</h1>
            <PlusCircle
              onClick={() => dispatch(actions.Increment({ product }))}
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default Product;
