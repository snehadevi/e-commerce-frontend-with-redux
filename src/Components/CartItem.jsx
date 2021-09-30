import React, { useState, useContext } from "react";
import { Context } from "../Context API/GlobalContext";

function CartItem({ product, total }) {
  const {
    selectedProducts,
    setcountTotal,
    setselectedProducts,
    calculateTotalCount,
  } = useContext(Context);
  const [count, setcount] = useState(product.count);

  // function calculateTotalCount(selectedList) {
  //   let count = 0;
  //   selectedList.map((p) => {
  //     if (p.count) count += p.count;
  //   });
  //   return count;
  // }

  const handleChange = (e) => {
    const inputValue = e.target.value;

    setcount(inputValue);
    const index = selectedProducts.findIndex((item) => item.id === product.id);
    if (inputValue !== "") selectedProducts[index].count = parseInt(inputValue);
    if (parseInt(inputValue) <= 0) {
      selectedProducts[index].count = 0;
      setselectedProducts(selectedProducts.filter((p) => p.count > 0));
    }

    const tempCount = calculateTotalCount(selectedProducts);
    setcountTotal(tempCount);
  };

  const handleOnclick = (product) => {
    const newProductList = selectedProducts.filter(
      (item) => item.id !== product.id
    );
    //console.log(newProductList);
    setselectedProducts(newProductList);

    const tempCount = calculateTotalCount(newProductList);
    setcountTotal(tempCount);
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
            <p className="ml-4">${count * product.price}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">
                                    {product.description}
                                  </p> */}
        </div>
        <div className="flex-1 flex items-end justify-between text-lg">
          <div className="text-gray-500 border-4 border-purple-600">
            {/* Quantity{" "} */}
            <input
              required
              type="number"
              value={count}
              className="w-8 h-8 focus:outline-none focus:ring focus:border-blue-300 opacity-100"
              onChange={handleChange}
            />
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-red-500"
              onClick={() => handleOnclick(product)}
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
