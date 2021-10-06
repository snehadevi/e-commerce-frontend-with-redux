import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "../Redux/Slice";
import { MinusCircle, PlusCircle } from "heroicons-react";

function CartItem({ product, total }) {
  const dispatch = useDispatch();
  const { counts } = useSelector((state) => state);

  const OnChange = (value) => {
    dispatch(actions.HandleInput({ product, value }));
  };

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-12 sm:w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a>{product.title}</a>
            </h3>
            <p className="ml-4">${counts[product.id] * product.price}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">
                                    {product.description}
                                  </p> */}
        </div>
        <div className="flex-1 flex items-end justify-between text-lg">
          <div className="flex flex-row">
            <MinusCircle
              onClick={(e) => {
                if (counts[product.id] === 1) return;
                dispatch(actions.Decrement({ product }));
              }}
              className={
                counts[product.id] === 1
                  ? "text-purple-700 h-8 w-8 mr-2"
                  : "text-purple-700 h-8 w-8 mr-2 hover:text-purple-500"
              }
              aria-disabled={counts[product.id] === 1}
            />
            <div className="text-gray-500 border-4 border-purple-600">
              {/* Quantity{" "} */}
              <input
                required
                value={counts[product.id]}
                type="number"
                className="w-8 h-8 focus:outline-none focus:ring focus:border-blue-300 opacity-100"
                onChange={(e) => OnChange(e.target.value)}
              />
            </div>
            <PlusCircle
              onClick={() => dispatch(actions.Increment({ product }))}
              className="text-purple-700 h-8 w-8 ml-2 hover:text-purple-500"
            />
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-red-500"
              onClick={() => dispatch(actions.RemoveProduct({ product }))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
