import bgimage from "../assets/day2/Frame 2147225952.svg";
import Button from "../components/day2/Button";
import Navbar from "../components/day2/Navbar";
import Hero from "../assets/day2/hero.svg";
const Day2 = () => {
  return (
    <div
      className="bg-cover container fixed object-fill min-h-screen w-full"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Navbar />
      <h1 className="lg:w-1/8 md:w-1/4 w-1/2 font-geist font-medium py-0.5 drop-shadow-sm drop-shadow-[#B93C3C]/20 text-xs m-auto place-content-center bg-white mt-12 rounded-lg">
        <span className="sm:px-1  py-0.5 text-white sm:mr-4 rounded-lg bg-[#FF7A68] shadow-[inset_0_0.89px_0.89px_0_#FFFFFF,inset_0_-3.57px_1.78px_0px_#EB4630] drop-shadow-sm drop-shadow-[#FF5E49]/45 ">
          31%
        </span>
        Increased AOV Value 🎉
      </h1>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-geist font-semibold text-4xl sm:text-5xl text-[#402926] text-center tracking-tighter sm:leading-[52.2px] ">
          Cut Support Tickets & Let <br /> Customers Edit Orders
        </h1>
        <p className="font-geist font-medium text-xs sm:text-base  text-[#402926]/77 mt-4 text-center tracking-tighter  ">
          Let Customers Edit Orders Themselves: Save your customers <br /> time
          and yourself from support email headaches
        </p>
        <div className="flex justify-between mt-4 items-center w-72 ">
          <button className="py-1 px-2 text-sm font-medium font-geist bg-white cursor-pointer hover:scale-110 flex gap-0.5 rounded-lg  text-[#FF5E49] drop-shadow-sm drop-shadow-[#9D4034]/20 shadow-[inset_0_-3.57px_11.78px_0_#FFFFFF,inset_0_0.89px_0.89px_0px_#FFFFFF] ">
            Get Demo
          </button>
          <Button />
        </div>
        <img className="sm:-mt-6 " src={Hero} alt="hero" />
      </div>
    </div>
  );
};

export default Day2;
