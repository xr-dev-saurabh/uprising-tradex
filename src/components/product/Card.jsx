import React from "react";
import { useLocation } from "react-router-dom";

const Card = ({ img, title, disc }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="md:flex flex-row border p-5 w-[500px] rounded-lg  gap-10 shadow-md">
      <div className="justify-center flex">
        <img
          src={img}
          alt=""
          className="aspect-square w-1/2 mb-8 md:m-auto md:w-[500px] object-conatin rounded-lg "
        />
      </div>
      <div className=" flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold uppercase">{title}</h3>
          <p>{disc}</p>
        </div>
        <a
          href={`${pathname}#contact`}
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-2 py-1 text-[14px] md:px-3 md:py-2 rounded-lg self-end mt-4 uppercase hover:bg-green-400"
        >
          <button className="hover:tracking-widest transition-all duration-500">
            Enquiry
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
