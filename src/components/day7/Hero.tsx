import heropng from "../../assets/day7/hero.png";
import Ai from "../../assets/day7/ai.png";

const Hero = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center gap-6 ml-6  sm:ml-20 mt-10">
        <img className="w-16   " src={Ai} alt="Ai" />
        <h1 className="text-5xl font-semibold ">
          <span className=" font-instrument-serif font-extralight tracking-tighter ">
            Complete AI
          </span>{" "}
          <br /> Customer Support <br /> Ecosystem
        </h1>
        <p>
          We resolve 60-80% of your customers’ complex support issues via phone,
          <br /> email, and web, reducing your costs by over 50%
        </p>
        <button className="text-white/90 px-4 text-nowrap w-36 py-2 bg-black shadow-inner shadow-[#FFF5F5]  hover:bg-white/95 drop-shadow-sm drop-shadow-[#00000059] rounded-lg  font-semibold ">
          Join the waitlist
        </button>
      </div>

      <img
        className="w-1/2 hidden md:block -mt-20 scale-90 -mr-12   "
        src={heropng}
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
