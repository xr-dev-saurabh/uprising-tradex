import play from "../assets/images/play-circle.png";
// import bgImage from "../assets/images/navBg.png";

const HomePage = () => {
  return (
    <div className="relative  flex items-center  font-inter">
      <div className="w-[337.76px]  sm:w-[400px]  sm:h-[256px] h-[224.05px]  ml-7 ">
        <h3 className="sm:text-[53px] text-[45px] w-full h-[123px] sm:h-[146px]  font-extrabold">
          Workspace that inspire
        </h3>
        <p className="h-[48px] w-full text-[11px] sm:text-[13px] font-normal leading-6">
          We work for people and make their dream come in to there life or in
          there home.
        </p>
        <div className="w-[175px] h-[36px]  flex items-center justify-between">
          <img className="cursor-pointer" src={play} alt="play" />
          <div className="line w-[59px] bg-[#18191f] border-[1.48px] border-[#18191f]"></div>

          <p className="h-[14px] w-[68px] text-[12px] font-bold leading-[13px] tracking-[0.7px]">
            DISCOVER
          </p>
        </div>
      </div>
      {/* <div className="bg-image ml-auto flex items-end justify-end">
                    <img className="h-[500px]  w-[200px] sm:w-[520px] " src={bgImage} alt="backgroundImage"/>
                </div> */}
    </div>
  );
};
export default HomePage;
