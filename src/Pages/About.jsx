import React from "react";
import { LocationMarker, Mail, Phone } from "heroicons-react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import Navigation from "../Components/Navigation";
function About() {
  return (
    <div className="antialiasednbg bg-gray-100">
      {/* <div className="m-0 p-0 bg-gray-100">
        <section className="flex absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-400 w-full bg-cyan-700 shadow-lg">
          <div className="w-2/4 h-full bg-cyan-700 box-border"></div>
          <div className="w-2/4 h-full bg-yellow-300 box-border border-l-100 border-cyan-700">
            <div className="border-b-400 border-transparent"></div>
          </div>
        </section>
      </div> */}
      <div className=" flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col sm:flex-row bg-cyan-700 h-full sm:h-400 w-full max-w-4xl sm:rounded-xl shadow-lg text-white overflow-hidden">
          <div className="m-10 sm:m-0 bg-cyan-700 p-8 w-full sm:w-1/4 min-w-min h-full">
            <h1 className="font-bold text-4xl tracking-wide">SHOP CIRCLE</h1>
            <p className="pt-2 text-cyan-100">Your trustworthy partner!</p>
          </div>
          <div className="bg-gray-400 p-8 w-full sm:w-3/4">
            <h1 className="font-bold text-4xl tracking-wide mb-10">About Us</h1>
            <p className="pt-2 text-cyan-100 mb-6">
              Shop Circle gives you the premium quality products and never let's
              you down. We give our service world-wide and have gained
              reputation and trust among our customers.
            </p>
            <p className="text-cyan-100">
              We always make sure to satisfy our customers with trending fashion
              and desired products. We see our customers as our invited guests
              and we are the hosts.
            </p>
          </div>
        </div>
      </div>
      <Navigation currentItem="ABOUT" />
    </div>
  );
}

export default About;
