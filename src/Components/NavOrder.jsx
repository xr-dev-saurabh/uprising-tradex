import React, { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ModalHamOd } from "./ModalHamOd";
import { FaWindowClose } from "react-icons/fa";

const NavOrder = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto"; // Restore default overflow when component unmounts
    };
  }, [modalOpen]);

  return (
    <nav className="bg-transparent w-full absolute top-0  py-6 ">
      <div className="mx-auto px-4 relative sm:px-6 lg:px-8 flex justify-center">
        <div className=" md:w-[80%] w-[90%] flex items-center py-1 justify-between bg-white rounded-full text-black">
          <div className={`flex-shrink-0`}>
            <a href="/" rel="noopener noreferrer">
              <h1 style={{ fontFamily: '"Calistoga", serif' }} className="ml-5">
                {" "}
                Uprising Tradex
              </h1>
            </a>
          </div>

          <div className="">
            {windowWidth < 830 ? (
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full items-center justify-center p-2"
                  onClick={openModal}
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ fill: "white" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {modalOpen && (
                  <div className="fixed w-full inset-0 items-center justify-center z-50 bg-white scroll-0">
                    <div className="p-4">
                      <ModalHamOd closeModal={closeModal} />
                      <button
                        type="button"
                        className="absolute top-3 right-3 "
                        onClick={closeModal}
                      >
                        <FaWindowClose size={35} color="#110537" fill="black" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <ul className="bg-white rounded-full text-black md:flex cursor-pointer">
                <a href="/" rel="noopener noreferrer">
                  <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <IoMdHome size={24} className="mr-2" />
                    Home
                  </li>
                </a>
                <a href="/about" rel="noopener noreferrer">
                  <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <RiTeamFill size={22} className="mr-2" />
                    About
                  </li>
                </a>
                <a
                  href="/order#contact"
                  rel="noopener noreferrer"
                >
                  <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <MdPermContactCalendar size={22} className="mr-2" />
                    Contact
                  </li>
                </a>
                <a href="/Order" rel="noopener noreferrer">
                  <li className="hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <FaShoppingCart size={19} className="mr-2" />
                    Order Now
                  </li>
                </a>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavOrder;