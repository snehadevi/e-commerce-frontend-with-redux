import React, { useContext } from "react";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Success({ history }) {
  const { orderList, orderCount, customerInfo } = useSelector((state) => state);

  if (!orderList || orderList.length === 0) history.push("/");
  let subTotal = 0;
  orderList.map((p) => (subTotal += orderCount[p.id] * p.price));
  return (
    <div className="">
      <div className="w-screen relative container grid grid-cols items-start pb-16 pt-4 mx-auto mt-20">
        <div className="bg-gray-50 col-span-8 border border-gray-300 p-4 rounded shadow-lg">
          <h1 className=" mx-auto text-lg text-purple-700">
            Payment Successful
          </h1>
          <div>
            <h1 className=" text-5xl mx-auto sm:text-7xl font-bold font-sans">
              Thanks For Ordering
            </h1>
            <p className="w-screen mx-auto p-2 relative mt-2 text-xl text-gray-600">
              Your order is being processed. We will send you confirmation very
              soon!! Happy Shopping!!
            </p>
          </div>
          <div className="w-56 sm:w-6/12 mx-auto border border-gray-300 shadow-lg mt-4">
            <div className="w-56 sm:w-full p-4 bg-white">
              <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                Order Summery
              </h4>
              {orderList.map((item) => (
                <div
                  className="flex justify-between p-2 border-b border-gray-200"
                  key={item.id}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="w-24 sm:w-44 text-gray-800 font-medium">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-gray-600 w-16">{item.price}</p>
                    <p className="text-gray-600">x</p>
                    <p className="text-gray-600">{orderCount[item.id]}</p>
                    <p className="sm:ml-20 text-gray-800 font-medium">
                      ${orderCount[item.id] * item.price}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p>Subtotal</p>
                <p>${parseFloat(subTotal).toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p className="text-bold">Total</p>
                <p>${parseFloat(subTotal).toFixed(2)}</p>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-gray-800 sm:text-lg mb-4 font-medium uppercase">
                    Shipping Address
                  </h1>
                  <div>
                    <p>
                      Address: {customerInfo["Address"]},&nbsp;
                      {customerInfo["City"]},
                    </p>
                    <p>{customerInfo["Country"]},</p>
                    {customerInfo["Province"] ? (
                      <p>{customerInfo["Province"]},</p>
                    ) : (
                      <p></p>
                    )}
                    {customerInfo["Postal Code"] ? (
                      <p>{customerInfo["Postal Code"]}.</p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-800 sm:text-lg mb-4 font-medium uppercase">
                    Customer Details
                  </h1>
                  <div>
                    <p>
                      {customerInfo["First Name"]}&nbsp;
                      {customerInfo["Last Name"]}
                    </p>
                    <p>Phone: {customerInfo["Phone"]}</p>
                    <p>Email: {customerInfo["Email"]}</p>
                    {customerInfo["Company"] ? (
                      <p>Company: {customerInfo["Company"]}</p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link
                to="/"
                className="block mx-auto w-44 sm:w-60 text-center border border-purple-600 px-4 py-3 text-lg rounded-full bg-purple-600 text-white mb-4"
              >
                <h1>Return Home</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navigation currentItem="" />
    </div>
  );
}

export default Success;
