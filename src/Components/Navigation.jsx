import React, { useState } from "react";
import { MenuAlt1Outline, ShoppingCartOutline } from "heroicons-react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import ShoppingCarts from "./ShoppingCarts";
import "../css/tailwind.css";
import { useSelector } from "react-redux";

const navItem = [
  { name: "HOME", to: "/", current: true },
  { name: "ABOUT", to: "/About", current: false },
  { name: "CONTACT", to: "/Contact", current: false },
];

function Navigation({ currentItem }) {
  const { countTotal } = useSelector((state) => state);
  const [hidden, sethidden] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    navItem.forEach(function (obj) {
      if (obj.name !== item.name) {
        obj.current = false;
      } else {
        obj.current = true;
      }
    });
  };

  return (
    <Disclosure>
      <ShoppingCarts open={open} setOpen={setOpen} />
      <div className="fixed w-full bg-cyan-900 shadow-lg flex flex-col top-0 p-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div>
              <a className="text-white hover:text-teal-500 cursor-pointer sm:hidden">
                <MenuAlt1Outline onClick={() => sethidden(!hidden)} />
              </a>
            </div>
            <div className="sm:bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg mt-2"></div>
            <Link to="/" className="flex flex-row">
              <h1 className="text-lg text-white font-bold sm:text-xl sm:mt-1 sm:ml-2 lg:text-3xl hover:bg-cyan-700 rounded-xl p-2">
                SHOP CIRCLE
              </h1>
            </Link>
          </div>
          <div className="flex flex-row mt-2 p-2">
            <div className="hidden text-sm sm:flex flex-row sm:text-xl">
              {navItem.map((item) => (
                <div onClick={() => handleClick(item)} key={item.name}>
                  <Link
                    to={item.to}
                    className={
                      item.name === currentItem
                        ? "bg-cyan-700 text-white p-4 rounded-xl mr-4"
                        : "text-white hover:text-teal-500 p-4"
                    }
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-row">
              <div>
                <a
                  onClick={() => setOpen(true)}
                  className="bg-cyan-700 shadow-lg text-gray-50 hover:bg-cyan-600 p-3 px-5 rounded-full sm:mr-5"
                >
                  <ShoppingCartOutline className="inline-block" />
                  {countTotal}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          {hidden && (
            <div className="px-2 pt-2 pb-3 space-y-1 text-white sm:hidden">
              {navItem.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-500 p-2"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
}

export default Navigation;
