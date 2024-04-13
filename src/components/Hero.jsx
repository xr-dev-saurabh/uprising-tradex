import { SvgMask } from "./ui/SvgMask";
import { MdPlayCircleOutline } from "react-icons/md";

export function Hero() {
  return (
    <div className="h-screen w-full bg-[#f8f9fb] items-center justify-center overflow-hidden">
      <SvgMask
        revealText={
          <p className="w-full text-slate-800">
            <div className="flex flex-col items-center  px-4 sm:px-6 lg:px-8 w-full">
              <h1
                className=" text-gray-800 text-3xl px-[20px] md:text-7xl text-center"
                style={{ fontFamily: "Bebas Neue" }}
              >
                WORKPLACE THAT INSPIRE
              </h1>
              <div className="mt-3  space-y-4 sm:space-y-5">
                <p className="text-gray-700 text-center text-[16px] md:text-xl px-[20px]">
                  We work for people and make their dreams come true.
                </p>
              </div>
              <button className="group border text-gray-800 border-black px-3 py-2 mt-6 font-semibold tracking-wider  text-base md:text-[27px] bg-white flex items-center">
                <MdPlayCircleOutline />
                <hr className="w-10 border-[1.85px] border-gray-800 mr-1" />
                Discover
              </button>
            </div>
          </p>
        }
        className="h-screen w-full  bg-grid-black/[0.15]"
      >
        <p className="w-full mx-auto text-slate-800">
          <div className="flex flex-col items-center  px-4 sm:px-6 lg:px-8 w-full">
            <h1
              className=" text-white text-3xl px-[20px] md:text-7xl text-center"
              style={{ fontFamily: "Bebas Neue" }}
            >
              WORKPLACE THAT INSPIRE
            </h1>
            <div className="mt-3  space-y-4 sm:space-y-5">
              <p className="text-white text-center text-[16px] md:text-xl px-[20px]">
                We work for people and make their dreams come true.
              </p>
            </div>
            <button className="text-white border-white border px-3 py-2 mt-6 font-semibold tracking-wider mx-auto text-base md:text-[27px] bg-black flex items-center">
              <MdPlayCircleOutline />
              <hr className="w-10 border-[1.85px] border-white mr-1" />
              Discover
            </button>
          </div>
        </p>
      </SvgMask>
    </div>
  );
}
