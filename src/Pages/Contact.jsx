import { LocationMarker, Mail, Phone } from "heroicons-react";
import React from "react";
import Navigation from "../Components/Navigation";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
function Contact({ history }) {
  return (
    // <div>
    //   <h1 className="mt-20">Contact Us</h1>
    //   <Navigation currentItem="CONTACT" />
    // </div>
    <div className="antialiasednbg bg-gray-100">
      <div className="mt-14 flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 sm:spce-y-0 sm:space-x-6 sm:flex-row space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100">Let's talk about everything!</p>
              <p className="text-cyan-100">
                Hate forms? Send us email instead!
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <Phone className="text-teal-300" />
                <span>+88 017300-374-00</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <Mail className="text-teal-300" />
                <a
                  href="mailto:info@DSInnovators.com"
                  className="hover:text-teal-300"
                >
                  info@DSInnovators.com
                </a>
              </div>
              <div className="flex flex-row space-x-2">
                <div>
                  <LocationMarker className="text-teal-300" />
                </div>
                <span>
                  House 177, Lane 2, New DOHS Mohakhali, Dhaka 1206, Bangladesh
                </span>
              </div>
            </div>
            <div className="flex flex-row space-x-5 text-2xl">
              <a
                href="https://www.facebook.com/DynamicSolutionInnovators/"
                target="_blank"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/the-dynamic-solution-innovators/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 -right-20 -top-20 w-40 h-40 bg-teal-400 rounded-full"></div>
            <div className="absolute z-0 -left-28 -bottom-20 w-40 h-40 bg-teal-400 rounded-full"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">
              <form
                onSubmit={() => history.push("/")}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Email"
                    className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>

                  <textarea
                    required
                    type="text"
                    rows="4"
                    placeholder="Message"
                    className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercasetext-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Navigation currentItem="CONTACT" />
    </div>
  );
}

export default Contact;
