import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Context } from "../Context API/GlobalContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function ShoppingCarts() {
  const {
    open,
    setOpen,
    selectedProducts,
    setselectedProducts,
    setcountTotal,
  } = useContext(Context);
  // const [subTotal, setsubTotal] = useState(0);

  let subTotal = 0;
  selectedProducts.map((p) => (subTotal += p.count * p.price));
  //console.log(subTotal);

  // const selectedTemp = selectedProducts.filter((p) => p.count !== 0);

  const handleOnclick = () => {
    setselectedProducts([]);
    setcountTotal(0);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {selectedProducts.map((product) => (
                            <CartItem product={product} key={product.id} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${parseFloat(subTotal).toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="flex flex-row justify-between">
                      <div className="mt-6">
                        {selectedProducts.length > 0 ? (
                          <Link
                            to="/checkout"
                            onClick={() => setOpen(false)}
                            className="flex justify-center items-center px-3 sm:px-14 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800"
                          >
                            Checkout
                          </Link>
                        ) : (
                          <a className="flex justify-center items-center px-3 sm:px-14 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 cursor-not-allowed">
                            Checkout
                          </a>
                        )}
                      </div>
                      <div className="mt-6">
                        <a
                          onClick={handleOnclick}
                          className="flex justify-center items-center px-3 sm:px-14 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-600 hover:to-pink-600 object-bottom"
                        >
                          Clear Cart
                        </a>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
